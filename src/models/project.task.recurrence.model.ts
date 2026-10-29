import { BaseModel } from '../BaseModel';
import { ProjectTaskRecurrence } from '../types/project.task.recurrence';

export class ProjectTaskRecurrenceModel extends BaseModel<ProjectTaskRecurrence> {
  protected readonly model = 'project.task.recurrence';
}
