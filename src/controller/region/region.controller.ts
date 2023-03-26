import { RegionService } from 'src/service/region/region.service';
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
export class RegionController {
  // Untuk mengarahkan data dari controller ke class
  constructor(private Services: RegionService) {}

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
  public async Create(@Body('regionName') regionName: string) {
    return await this.Services.Create(regionName);
  }

  @Put(':id')
  public async Update(
    @Param('id') id: number,
    @Body('regionName') regionName: string,
  ) {
    return await this.Services.Update(id, regionName);
  }

  @Delete(':id')
  public async Delete(@Param('id') id: number) {
    return await this.Services.Delete(id);
  }
}
