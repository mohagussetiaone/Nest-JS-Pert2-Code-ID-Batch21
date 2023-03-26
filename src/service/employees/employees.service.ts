import { Jobs } from 'output/entities/Jobs';
import { Departments } from 'output/entities/Departments';
import { Injectable } from '@nestjs/common';
import { Employees } from 'output/entities/Employees';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeesService {
  constructor(
    // Untuk masuk kedalam region kemudian service akan masuk kedalam repo defini dari regions
    @InjectRepository(Employees) private serviceRepo: Repository<Employees>,
  ) {}
  public async getEmployees() {
    return await this.serviceRepo.find({
      relations: {
        job: true,
        department: true,
      },
    });
  }

  public async getEmployeesById(id: number) {
    return await this.serviceRepo.findOne({
      where: {
        employeeId: id,
      },
      relations: {
        job: true,
        department: true,
      },
    });
  }

  public async addEmployees(
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    hireDate: string,
    salary: string,
    commissionPct: string,
    jobId: Jobs,
    managerId: number,
    departmentId: Departments,
  ) {
    try {
      const employees = await this.serviceRepo.save({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        hireDate: hireDate,
        salary: salary,
        commissionPct: commissionPct,
        job: jobId,
        managerId: managerId,
        department: departmentId,
      });
      return employees;
    } catch (error) {
      return error.message;
    }
  }

  public async UpdateEmployees(
    employeeId: number,
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    hireDate: string,
    salary: string,
    commissionPct: string,
    jobId: Jobs,
    managerId: number,
    departmentId: Departments,
  ) {
    try {
      const employees = await this.serviceRepo.update(employeeId, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        hireDate: hireDate,
        salary: salary,
        commissionPct: commissionPct,
        job: jobId,
        managerId: managerId,
        department: departmentId,
      });
      return employees;
    } catch (error) {
      return error.message;
    }
  }

  public async DeleteEmployee(id: number) {
    try {
      const employee = await this.serviceRepo.delete(id);
      return employee;
    } catch (error) {
      return error.message;
    }
  }
}
