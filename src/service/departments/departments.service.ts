import { Locations } from 'output/entities/Locations';
import { Departments } from 'output/entities/Departments';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DepartmentsService {
  constructor(
    // Untuk masuk kedalam region kemudian service akan masuk kedalam repo defini dari regions
    @InjectRepository(Departments) private serviceRepo: Repository<Departments>,
  ) {}

  public async getDepartment() {
    return await this.serviceRepo.find();
  }

  public async getDepartmentById(id: number) {
    return await this.serviceRepo.findOne({
      where: {
        departmentId: id,
      },
    });
  }

  public async addDepartment(
    department_name: string,
    manager_id: Locations,
    location_id: Locations,
  ) {
    try {
      const department = await this.serviceRepo.save({
        departmentName: department_name,
        manager: manager_id,
        location: location_id,
      });
      return department;
    } catch (error) {
      return error.message;
    }
  }

  public async UpdateDepartment(
    department_id: number,
    department_name: string,
    manager_id: Locations,
    location_id: Locations,
  ) {
    try {
      const department = await this.serviceRepo.update(department_id, {
        departmentName: department_name,
        manager: manager_id,
        location: location_id,
      });
      return department;
    } catch (error) {
      return error.message;
    }
  }

  public async DeleteDepartment(id: number) {
    try {
      const department = await this.serviceRepo.delete(id);
      return department;
    } catch (error) {
      return error.message;
    }
  }
}
