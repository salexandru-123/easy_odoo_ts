import { BaseModel } from '../BaseModel';
import { ProjectCollaborator } from '../types/project.collaborator';

export class ProjectCollaboratorModel extends BaseModel<ProjectCollaborator> {
  protected readonly model = 'project.collaborator';
}
