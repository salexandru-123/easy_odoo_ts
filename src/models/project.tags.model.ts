import { BaseModel } from '../BaseModel';
import { ProjectTags } from '../types/project.tags';

export class ProjectTagsModel extends BaseModel<ProjectTags> {
  protected readonly model = 'project.tags';
}
