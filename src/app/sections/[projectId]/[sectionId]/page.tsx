import { Suspense } from 'react';
import TaskList from '@/components/TaskList';

type Props = {
  params: {
    projectId: string;
    sectionId: string;
  };
};

export default function TaskListPage({ params }: Props) {
  return (
    <div className="space-y-4 lg:space-y-7">
      <Suspense fallback={'Loading...'}>
        <TaskList projectId={params.projectId} sectionId={params.sectionId} />
      </Suspense>
    </div>
  );
}
