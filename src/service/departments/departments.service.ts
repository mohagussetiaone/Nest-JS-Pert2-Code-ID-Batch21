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
    return await this.serviceRepo.find({
      relations: {
        location: true,
        manager: true,
      },
    });
  }

  public async getDepartmentById(id: number) {
    return await this.serviceRepo.findOne({
      where: {
        departmentId: id,
      },
      relations: {
        location: true,
        manager: true,
      },
    });
  }

  public async addDepartment(
    departmentId: number,
    departmentName: string,
    managerId: Locations,
    locationId: Locations,
  ) {
    try {
      const department = await this.serviceRepo.save({
        departmentId: departmentId,
        departmentName: departmentName,
        manager: managerId,
        location: locationId,
      });
      return department;
    } catch (error) {
      return error.message;
    }
  }

  public async UpdateDepartment(
    departmentId: number,
    departmentName: string,
    managerId: Locations,
    locationId: Locations,
  ) {
    try {
      const department = await this.serviceRepo.update(departmentId, {
        departmentName: departmentName,
        manager: managerId,
        location: locationId,
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
