import { BaseModel } from '../BaseModel';
import { ProjectTaskBurndownChartReport } from '../types/project.task.burndown.chart.report';

export class ProjectTaskBurndownChartReportModel extends BaseModel<ProjectTaskBurndownChartReport> {
  protected readonly model = 'project.task.burndown.chart.report';
}
