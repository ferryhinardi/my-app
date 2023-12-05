import { TodoistApi, GetTasksArgs } from '@doist/todoist-api-typescript';

export class TodoistService {
  api: TodoistApi;

  constructor(token: string) {
    this.api = new TodoistApi(token);
  }

  async getProjects() {
    return this.api.getProjects();
  }

  async getSections(projectId: string) {
    return this.api.getSections(projectId);
  }

  async getTasks(params: GetTasksArgs) {
    return this.api.getTasks(params);
  }
}
