import { BaseModel } from '../BaseModel';
import { ProjectUpdate } from '../types/project.update';

export class ProjectUpdateModel extends BaseModel<ProjectUpdate> {
  protected readonly model = 'project.update';
}
