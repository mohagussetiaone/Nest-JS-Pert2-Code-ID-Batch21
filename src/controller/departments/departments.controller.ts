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
    @Body('department_name, ') department_name: string,
    @Body('manager_id') manager_id: Locations,
    @Body('location_id, ') location_id: Locations,
  ) {
    return await this.Services.addDepartment(
      department_name,
      manager_id,
      location_id,
    );
  }

  @Put(':id')
  public async Update(
    @Param('id') id: number,
    @Body('department_name') department_name: string,
    @Body('manager_id') manager_id: Locations,
    @Body('location_id') location_id: Locations,
  ) {
    return await this.Services.UpdateDepartment(
      id,
      department_name,
      manager_id,
      location_id,
    );
  }

  @Delete(':id')
  public async Delete(@Param('id') id: number) {
    return await this.Services.DeleteDepartment(id);
  }
}
