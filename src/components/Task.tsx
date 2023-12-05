import { Task as TaskProps } from '@doist/todoist-api-typescript';

type Props = TaskProps;

export default function Task(props: Props) {
  const createdAtFormatted = new Date(props.createdAt).toLocaleString();
  return (
    <div className="flex flex-col p-4 space-y-2 border rounded-md shadow-md">
      <div className="flex justify-between">
        <h2 className="text-lg font-semibold">{props.content}</h2>
        <span className="text-sm text-gray-400">{props.order}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-sm text-gray-400">{props.commentCount} comments</span>
        <span className="text-sm text-gray-400">{createdAtFormatted}</span>
      </div>
    </div>
  );
}
