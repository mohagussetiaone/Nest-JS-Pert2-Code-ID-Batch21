import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Locations } from 'output/entities/Locations';
import { Repository } from 'typeorm';

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(Locations) private serviceRepo: Repository<Locations>,
  ) {}

  public async getLocations() {
    return await this.serviceRepo.find();
  }

  public async getLocationById(id: number) {
    return await this.serviceRepo.find({ where: { locationId: id } });
  }

  public async addLocations(
    streetAddress: string,
    postalCode: string,
    city: string,
    stateProvince: string,
  ) {
    try {
      const locations = await this.serviceRepo.save({
        streetAddress: streetAddress,
        postalCode: postalCode,
        city: city,
        stateProvince: stateProvince,
      });
      return locations;
    } catch (error) {
      return error.message;
    }
  }

  public async updateLocations(
    locationId: number,
    streetAddress: string,
    postalCode: string,
    city: string,
    stateProvince: string,
  ) {
    try {
      const locations = await this.serviceRepo.update(locationId, {
        streetAddress: streetAddress,
        postalCode: postalCode,
        city: city,
        stateProvince: stateProvince,
      });
      return locations;
    } catch (error) {
      return error.message;
    }
  }

  public async deleteLocations(locationId: number) {
    try {
      const locations = await this.serviceRepo.delete(locationId);
      return locations;
    } catch (error) {
      return error.message;
    }
  }
}
