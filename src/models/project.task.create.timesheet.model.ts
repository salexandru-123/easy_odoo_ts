import { BaseModel } from '../BaseModel';
import { ProjectTaskCreateTimesheet } from '../types/project.task.create.timesheet';

export class ProjectTaskCreateTimesheetModel extends BaseModel<ProjectTaskCreateTimesheet> {
  protected readonly model = 'project.task.create.timesheet';
}
