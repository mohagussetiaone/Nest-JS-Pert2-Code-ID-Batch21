import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CountriesService } from '../../service/countries/countries.service';

@Controller('/countries')
export class CountriesController {
  // Untuk mengarahkan data dari controller ke class
  constructor(private Services: CountriesService) {}

  @Get()
  public async getAll() {
    // findAll dari service
    return await this.Services.getCountries();
  }

  @Get('/:id')
  public async getOne(@Param('id') id: string) {
    return await this.Services.getCountriesById(id);
  }

  @Post()
  public async Create(
    @Body('countryId') countryId: string,
    @Body('countryName') countryName: string,
    @Body('regionId') regionId,
  ) {
    return await this.Services.addCountries(countryId, countryName, regionId);
  }

  @Put(':id')
  public async Update(
    @Param('id') id: number,
    @Body('countryName') countryName: string,
    @Body('regionId') regionId,
  ) {
    return await this.Services.UpdateCountries(id, countryName, regionId);
  }

  @Delete(':id')
  public async Delete(@Param('id') id: number) {
    return await this.Services.DeleteCountries(id);
  }
}
