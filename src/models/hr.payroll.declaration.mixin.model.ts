import { BaseModel } from '../BaseModel';
import { HrPayrollDeclarationMixin } from '../types/hr.payroll.declaration.mixin';

export class HrPayrollDeclarationMixinModel extends BaseModel<HrPayrollDeclarationMixin> {
  protected readonly model = 'hr.payroll.declaration.mixin';
}
