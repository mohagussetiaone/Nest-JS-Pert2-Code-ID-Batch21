import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Jobs } from 'output/entities/Jobs';
import { Repository } from 'typeorm';

@Injectable()
export class JobsService {
  constructor(@InjectRepository(Jobs) private serviceRepo: Repository<Jobs>) {}

  public async getJobs() {
    return await this.serviceRepo.find();
  }

  public async getJobsById(id: string) {
    return await this.serviceRepo.find({ where: { jobId: id } });
  }

  public async addJobs(
    jobId: string,
    jobTitle: string,
    minSalary: string,
    maxSalary: string,
  ) {
    try {
      const jobs = await this.serviceRepo.save({
        jobId: jobId,
        jobTitle: jobTitle,
        minSalary: minSalary,
        maxSalary: maxSalary,
      });
      return jobs;
    } catch (error) {
      return error.message;
    }
  }

  public async updateJobs(
    jobId: string,
    jobTitle: string,
    minSalary: string,
    maxSalary: string,
  ) {
    try {
      const jobs = await this.serviceRepo.update(jobId, {
        jobId: jobId,
        jobTitle: jobTitle,
        minSalary: minSalary,
        maxSalary: maxSalary,
      });
      return jobs;
    } catch (error) {
      return error.message;
    }
  }

  public async deleteJobs(jobId: string) {
    try {
      const jobs = await this.serviceRepo.delete(jobId);
      return jobs;
    } catch (error) {
      return error.message;
    }
  }
}
