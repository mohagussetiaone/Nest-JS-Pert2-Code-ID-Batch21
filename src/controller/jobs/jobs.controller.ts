import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { JobsService } from 'src/service/jobs/jobs.service';

@Controller('/jobs')
export class JobsController {
  constructor(private Services: JobsService) {}

  @Get()
  public async getAll() {
    return await this.Services.getJobs();
  }

  @Get(':id')
  public async getOne(@Param('id') id: string) {
    return await this.Services.getJobsById(id);
  }

  @Post()
  public async Create(
    @Body('jobTitle') jobTitle: string,
    @Body('minSalary') minSalary: string,
    @Body('maxSalary') maxSalary: string,
  ) {
    return await this.Services.addJobs(jobTitle, minSalary, maxSalary);
  }

  @Put(':jobId')
  public async Update(
    @Param('jobId') jobId: string,
    @Body('jobTitle') jobTitle: string,
    @Body('minSalary') minSalary: string,
    @Body('maxSalary') maxSalary: string,
  ) {
    return await this.Services.updateJobs(
      jobId,
      jobTitle,
      minSalary,
      maxSalary,
    );
  }

  @Delete(':jobId')
  public async Delete(@Param('jobId') jobId: string) {
    return await this.Services.deleteJobs(jobId);
  }
}
