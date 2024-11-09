import { ScrollArea } from '@/components/ui/scroll-area';
import PatientsForm from './patients-form';

export default function PatientsViewPage() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-8">
        <PatientsForm />
      </div>
    </ScrollArea>
  );
}
