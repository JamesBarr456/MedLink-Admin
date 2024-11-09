import PageContainer from '@/components/layout/page-container';
import { buttonVariants } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { Patients } from '@/constants/data';
import { fakeUsers } from '@/constants/mock-api';
import { searchParamsCache } from '@/lib/searchparams';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import PatientsTable from './patients-tables';

type TPatientsListingPage = {};

export default async function PatientsListingPage({}: TPatientsListingPage) {
  // Showcasing the use of search params cache in nested RSCs
  const page = searchParamsCache.get('page');
  const search = searchParamsCache.get('q');
  const gender = searchParamsCache.get('gender');
  const pageLimit = searchParamsCache.get('limit');

  const filters = {
    page,
    limit: pageLimit,
    ...(search && { search }),
    ...(gender && { genders: gender }),
  };

  // mock api call
  const data = await fakeUsers.getUsers(filters);
  const totalUsers = data.total_users;
  const patients: Patients[] = data.users;

  return (
    <PageContainer scrollable>
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <Heading
            title={`Pacientes (${totalUsers})`}
            description="Gestionar pacientes (funcionalidades de tabla del lado del servidor)."
          />

          <Link
            href={'/dashboard/pacientes/nuevo'}
            className={cn(buttonVariants({ variant: 'default' }))}
          >
            <Plus className="mr-2 h-4 w-4" /> Agregar nuevo
          </Link>
        </div>
        <Separator />
        <PatientsTable data={patients} totalData={totalUsers} />
      </div>
    </PageContainer>
  );
}
