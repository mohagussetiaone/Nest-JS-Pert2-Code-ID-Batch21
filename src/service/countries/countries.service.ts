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
    return await this.serviceRepo.find({
      relations: {
        region: true,
      },
    });
  }

  public async getCountriesById(id: string) {
    return await this.serviceRepo.findOne({
      where: {
        countryId: id,
      },
      relations: {
        region: true,
      },
    });
  }

  public async addCountries(countryId: string, countryName: string, regionId) {
    try {
      const countries = await this.serviceRepo.save({
        countryId: countryId,
        countryName: countryName,
        region: regionId,
      });
      return countries;
    } catch (error) {
      return error.message;
    }
  }

  public async UpdateCountries(id: number, countryName: string, regionId) {
    try {
      const countries = await this.serviceRepo.update(id, {
        countryName: countryName,
        region: regionId,
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
