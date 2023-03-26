import { Locations } from 'output/entities/Locations';
import { DepartmentsService } from '../../service/departments/departments.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('/departments')
export class DepartmentsController {
  constructor(private Services: DepartmentsService) {}

  @Get()
  public async getAll() {
    // findAll dari service
    return await this.Services.getDepartment();
  }

  @Get('/:id')
  public async getOne(@Param('id') id: number) {
    return await this.Services.getDepartmentById(id);
  }

  @Post()
  public async Create(
    @Body('deparmentId') departmentId: number,
    @Body('departmentName') departmentName: string,
    @Body('managerId') managerId: Locations,
    @Body('locationId') locationId: Locations,
  ) {
    return await this.Services.addDepartment(
      departmentId,
      departmentName,
      managerId,
      locationId,
    );
  }

  @Put(':departmentId')
  public async Update(
    @Param('departmentId') departmentId: number,
    @Body('departmentName') departmentName: string,
    @Body('managerId') managerId: Locations,
    @Body('locationId') locationId: Locations,
  ) {
    return await this.Services.UpdateDepartment(
      departmentId,
      departmentName,
      managerId,
      locationId,
    );
  }

  @Delete(':id')
  public async Delete(@Param('id') id: number) {
    return await this.Services.DeleteDepartment(id);
  }
}
