import { BaseModel } from '../BaseModel';
import { ProjectCreateInvoice } from '../types/project.create.invoice';

export class ProjectCreateInvoiceModel extends BaseModel<ProjectCreateInvoice> {
  protected readonly model = 'project.create.invoice';
}
