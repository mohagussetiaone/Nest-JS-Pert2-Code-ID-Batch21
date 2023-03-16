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
    return await this.serviceRepo.find();
  }

  public async getEmployeesById(id: number) {
    return await this.serviceRepo.findOne({
      where: {
        employeeId: id,
      },
    });
  }

  public async addEmployees(
    first_name: string,
    last_name: string,
    email: string,
    phone_number: string,
    hire_date: string,
    salary: string,
    commission_pct: string,
    job_id: Jobs,
    manager_id: number,
    department_id: Departments,
  ) {
    try {
      const employees = await this.serviceRepo.save({
        firstName: first_name,
        lastName: last_name,
        email: email,
        phoneNumber: phone_number,
        hireDate: hire_date,
        salary: salary,
        commissionPct: commission_pct,
        job: job_id,
        managerId: manager_id,
        department: department_id,
      });
      return employees;
    } catch (error) {
      return error.message;
    }
  }

  public async UpdateEmployees(
    employee_id: number,
    first_name: string,
    last_name: string,
    email: string,
    phone_number: string,
    hire_date: string,
    salary: string,
    commission_pct: string,
    job_id: Jobs,
    manager_id: number,
    department_id: Departments,
  ) {
    try {
      const employees = await this.serviceRepo.update(employee_id, {
        firstName: first_name,
        lastName: last_name,
        email: email,
        phoneNumber: phone_number,
        hireDate: hire_date,
        salary: salary,
        commissionPct: commission_pct,
        job: job_id,
        managerId: manager_id,
        department: department_id,
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
