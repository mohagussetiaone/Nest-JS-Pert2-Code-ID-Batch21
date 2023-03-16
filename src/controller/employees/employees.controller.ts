import { Departments } from 'output/entities/Departments';
import { Jobs } from 'output/entities/Jobs';
import { EmployeesService } from '../../service/employees/employees.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('/employees')
export class EmployeesController {
  constructor(private Services: EmployeesService) {}
  @Get()
  public async getAll() {
    // findAll dari service
    return await this.Services.getEmployees();
  }

  @Get('/:id')
  public async getOne(@Param('id') id: number) {
    return await this.Services.getEmployeesById(id);
  }

  @Post()
  public async Create(
    @Body('first_name, ') first_name: string,
    @Body('last_name') last_name: string,
    @Body('email, ') email: string,
    @Body('phone_number, ') phone_number: string,
    @Body('hire_date, ') hire_date: string,
    @Body('salary, ') salary: string,
    @Body('commission_pct, ') commission_pct: string,
    @Body('job_id, ') job_id: Jobs,
    @Body('manager_id, ') manager_id: number,
    @Body('department_id, ') department_id: Departments,
  ) {
    return await this.Services.addEmployees(
      first_name,
      last_name,
      email,
      phone_number,
      hire_date,
      salary,
      commission_pct,
      job_id,
      manager_id,
      department_id,
    );
  }

  @Put(':id')
  public async Update(
    @Param('id') id: number,
    @Body('first_name, ') first_name: string,
    @Body('last_name') last_name: string,
    @Body('email, ') email: string,
    @Body('phone_number, ') phone_number: string,
    @Body('hire_date, ') hire_date: string,
    @Body('salary, ') salary: string,
    @Body('commission_pct, ') commission_pct: string,
    @Body('job_id, ') job_id: Jobs,
    @Body('manager_id, ') manager_id: number,
    @Body('department_id, ') department_id: Departments,
  ) {
    return await this.Services.UpdateEmployees(
      id,
      first_name,
      last_name,
      email,
      phone_number,
      hire_date,
      salary,
      commission_pct,
      job_id,
      manager_id,
      department_id,
    );
  }

  @Delete(':id')
  public async Delete(@Param('id') id: number) {
    return await this.Services.DeleteEmployee(id);
  }
}
