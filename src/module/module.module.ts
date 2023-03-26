import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { Regions } from 'output/entities/Regions';
import { Countries } from 'output/entities/Countries';
import { Departments } from 'output/entities/Departments';
import { Employees } from 'output/entities/Employees';
import { JobHistory } from 'output/entities/JobHistory';
import { Jobs } from 'output/entities/Jobs';
import { Locations } from 'output/entities/Locations';
import { RegionService } from 'src/service/region/region.service';
import { CountriesService } from 'src/service/countries/countries.service';
import { DepartmentsService } from 'src/service/departments/departments.service';
import { EmployeesService } from 'src/service/employees/employees.service';
import { RegionController } from 'src/controller/region/region.controller';
import { CountriesController } from 'src/controller/countries/countries.controller';
import { DepartmentsController } from 'src/controller/departments/departments.controller';
import { EmployeesController } from 'src/controller/employees/employees.controller';
import { JobsService } from 'src/service/jobs/jobs.service';
import { LocationsService } from 'src/service/locations/locations.service';
import { LocationsController } from 'src/controller/locations/locations.controller';
import { JobsController } from 'src/controller/jobs/jobs.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Regions,
      Countries,
      Departments,
      Employees,
      JobHistory,
      Jobs,
      Locations,
    ]),
    PassportModule,
    JwtModule.register({
      secret: 'secretKey',
      signOptions: { expiresIn: '2d' },
    }),
  ],
  providers: [
    RegionService,
    CountriesService,
    DepartmentsService,
    EmployeesService,
    JobsService,
    LocationsService,
  ],
  controllers: [
    RegionController,
    CountriesController,
    DepartmentsController,
    EmployeesController,
    JobsController,
    LocationsController,
  ],
})
export class ModuleModule {}
