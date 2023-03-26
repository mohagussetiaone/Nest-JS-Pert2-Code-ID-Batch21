import { Regions } from 'output/entities/Regions';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RegionService {
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

  public async Create(regionName: string) {
    try {
      const region = await this.serviceRepo.save({
        regionName: regionName,
      });
      return region;
    } catch (error) {
      return error.message;
    }
  }

  public async Update(id: number, regionName: string) {
    try {
      const region = await this.serviceRepo.update(id, {
        regionName: regionName,
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
