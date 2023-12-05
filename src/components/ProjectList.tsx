import Link from 'next/link';
import { TodoistService } from '@/services/init';
import Project from './Project';
import { apiToken } from '@/const';

const api = new TodoistService(apiToken);

export default async function ProjectList() {
  const data = await api.getProjects();
  return (
    <>
      {data.map((project) => (
        <Link key={project.id} href={`/sections/${project.id}`}>
          <Project {...project} />
        </Link>
      ))}
    </>
  );
}
