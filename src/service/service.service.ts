import { Regions } from 'output/entities/Regions';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ServiceService {
  constructor(
    // Untuk masuk kedalam region kemudian service akan masuk kedalam repo defini dari regions
    @InjectRepository(Regions) private serviceRepo: Repository<Regions>,
  ) {}

  public async findAll() {
    return await this.serviceRepo.find();
  }

  public async findOne(id: number) {
    return await this.serviceRepo.findOne({
      where: {
        regionId: id,
      },
    });
  }

  public async Create(region_name: string) {
    try {
      const region = await this.serviceRepo.save({
        regionName: region_name,
      });
      return region;
    } catch (error) {
      return error.message;
    }
  }

  public async Update(id: number, region_name: string) {
    try {
      const region = await this.serviceRepo.update(id, {
        regionName: region_name,
      });
      return region;
    } catch (error) {
      return error.message;
    }
  }

  public async Delete(id: number) {
    try {
      const region = await this.serviceRepo.delete(id);
      return region;
    } catch (error) {
      return error.message;
    }
  }
}
