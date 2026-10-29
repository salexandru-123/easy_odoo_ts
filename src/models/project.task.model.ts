import { BaseModel } from '../BaseModel';
import { ProjectTask } from '../types/project.task';

export class ProjectTaskModel extends BaseModel<ProjectTask> {
  protected readonly model = 'project.task';
}
