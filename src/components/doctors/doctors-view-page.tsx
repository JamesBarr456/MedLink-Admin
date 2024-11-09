import { ScrollArea } from '@/components/ui/scroll-area';
import DoctorsForm from './doctors-form';

export default function DoctorsViewPage() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-8">
        <DoctorsForm />
      </div>
    </ScrollArea>
  );
}
