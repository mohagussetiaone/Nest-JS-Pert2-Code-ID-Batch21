import { ServiceService } from './../service/service.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

// Router
@Controller('/region')
export class ControllerController {
  // Untuk mengarahkan data dari controller ke class
  constructor(private Services: ServiceService) {}

  @Get()
  public async getAll() {
    // findAll dari service
    return await this.Services.findAll();
  }

  @Get('/:id')
  public async getOne(@Param('id') id: number) {
    return await this.Services.findOne(id);
  }

  @Post()
  public async Create(@Body('region_name') region_name: string) {
    return await this.Services.Create(region_name);
  }

  @Put(':id')
  public async Update(
    @Param('id') id: number,
    @Body('region_name') region_name: string,
  ) {
    return await this.Services.Update(id, region_name);
  }

  @Delete(':id')
  public async Delete(@Param('id') id: number) {
    return await this.Services.Delete(id);
  }
}
