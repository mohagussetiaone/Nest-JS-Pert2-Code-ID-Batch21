import { Jobs } from './../../../output/entities/Jobs';
import { Departments } from 'output/entities/Departments';
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
    @Body('firstName') firstName: string,
    @Body('lastName') lastName: string,
    @Body('email') email: string,
    @Body('phoneNumber') phoneNumber: string,
    @Body('hireDate') hireDate: string,
    @Body('salary') salary: string,
    @Body('commissionPct') commissionPct: string,
    @Body('jobId') jobId: Jobs,
    @Body('managerId') managerId: number,
    @Body('departmentId') departmentId: Departments,
  ) {
    return await this.Services.addEmployees(
      firstName,
      lastName,
      email,
      phoneNumber,
      hireDate,
      salary,
      commissionPct,
      jobId,
      managerId,
      departmentId,
    );
  }

  @Put(':id')
  public async Update(
    @Param('id') id: number,
    @Body('firstName') firstName: string,
    @Body('lastName') lastName: string,
    @Body('email') email: string,
    @Body('phoneNumber') phoneNumber: string,
    @Body('hireDate') hireDate: string,
    @Body('salary') salary: string,
    @Body('commissionPct') commissionPct: string,
    @Body('jobId') jobId: Jobs,
    @Body('managerId') managerId: number,
    @Body('departmentId') departmentId: Departments,
  ) {
    return await this.Services.UpdateEmployees(
      id,
      firstName,
      lastName,
      email,
      phoneNumber,
      hireDate,
      salary,
      commissionPct,
      jobId,
      managerId,
      departmentId,
    );
  }

  @Delete(':id')
  public async Delete(@Param('id') id: number) {
    return await this.Services.DeleteEmployee(id);
  }
}
