import { Suspense } from 'react';
import ProjectList from '@/components/ProjectList';

export default function Home() {
  return (
    <div className="space-y-4 lg:space-y-7">
      <Suspense fallback={'Loading...'}>
        <ProjectList />
      </Suspense>
    </div>
  );
}
