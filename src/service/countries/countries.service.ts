import { Countries } from 'output/entities/Countries';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CountriesService {
  constructor(
    // Untuk masuk kedalam region kemudian service akan masuk kedalam repo defini dari regions
    @InjectRepository(Countries) private serviceRepo: Repository<Countries>,
  ) {}

  public async getCountries() {
    return await this.serviceRepo.find();
  }

  public async getCountriesById(id: string) {
    return await this.serviceRepo.findOne({
      where: {
        countryId: id,
      },
    });
  }

  public async addCountries(
    country_id: string,
    country_name: string,
    region_id,
  ) {
    try {
      const countries = await this.serviceRepo.save({
        countryId: country_id,
        countryName: country_name,
        region: region_id,
      });
      return countries;
    } catch (error) {
      return error.message;
    }
  }

  public async UpdateCountries(id: number, country_name: string, region_id) {
    try {
      const countries = await this.serviceRepo.update(id, {
        countryName: country_name,
        region: region_id,
      });
      return countries;
    } catch (error) {
      return error.message;
    }
  }

  public async DeleteCountries(id: number) {
    try {
      const countries = await this.serviceRepo.delete(id);
      return countries;
    } catch (error) {
      return error.message;
    }
  }
}
