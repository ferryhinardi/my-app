import { TodoistService } from '@/services/init';
import { apiToken } from '@/const';
import Task from './Task';

const api = new TodoistService(apiToken);

type Props = {
  sectionId: string;
  projectId: string;
};

export default async function TaskList(props: Props) {
  const data = await api.getTasks({
    sectionId: props.sectionId,
    projectId: props.projectId,
  });

  return (
    <>
      {data.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </>
  );
}
