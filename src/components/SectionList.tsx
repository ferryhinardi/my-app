import Link from 'next/link';
import { TodoistService } from '@/services/init';
import { apiToken } from '@/const';
import Section from './Section';

const api = new TodoistService(apiToken);

type Props = {
  projectId: string;
};

export default async function SectionList(props: Props) {
  const data = await api.getSections(props.projectId);
  return (
    <>
      {data.map((section) => (
        <Link key={section.id} href={`/sections/${props.projectId}/${section.id}`}>
          <Section {...section} />
        </Link>
      ))}
    </>
  );
}
