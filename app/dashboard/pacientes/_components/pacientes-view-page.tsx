import { ScrollArea } from '@/components/ui/scroll-area';
import PacientesForm from './pacientes-form';

export default function PacientesViewPage() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-8">
        <PacientesForm />
      </div>
    </ScrollArea>
  );
}
