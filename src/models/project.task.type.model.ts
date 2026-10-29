import { BaseModel } from '../BaseModel';
import { ProjectTaskType } from '../types/project.task.type';

export class ProjectTaskTypeModel extends BaseModel<ProjectTaskType> {
  protected readonly model = 'project.task.type';
}
