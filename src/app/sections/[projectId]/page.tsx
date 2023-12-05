import { Suspense } from 'react';
import SectionList from '@/components/SectionList';

type Props = {
  params: {
    projectId: string;
  };
};

export default function SectionListPage({ params }: Props) {
  return (
    <div className="space-y-4 lg:space-y-7">
      <Suspense fallback={'Loading...'}>
        <SectionList projectId={params.projectId} />
      </Suspense>
    </div>
  );
}
