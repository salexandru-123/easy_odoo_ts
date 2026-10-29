import { BaseModel } from '../BaseModel';
import { ProjectMilestone } from '../types/project.milestone';

export class ProjectMilestoneModel extends BaseModel<ProjectMilestone> {
  protected readonly model = 'project.milestone';
}
