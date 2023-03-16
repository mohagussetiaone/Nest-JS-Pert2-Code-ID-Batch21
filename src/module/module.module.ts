import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
// import { Regions } from 'output/entities/Regions';
// import { Countries } from 'output/entities/Countries';
// import { Departments } from 'output/entities/Departments';
// import { Employees } from 'output/entities/Employees';
// import { JobHistory } from 'output/entities/JobHistory';
// import { Jobs } from 'output/entities/Jobs';
// import { Locations } from 'output/entities/Locations';
import { Users } from 'output/entities/Users';
// import { ServiceService } from './../service/service.service';
// import { ControllerController } from 'src/controller/controller.controller';
// import { CountriesService } from 'src/service/countries/countries.service';
// import { CountriesController } from 'src/controller/countries/countries.controller';
// import { DepartmentsService } from 'src/service/departments/departments.service';
// import { DepartmentsController } from 'src/controller/departments/departments.controller';
// import { EmployeesService } from 'src/service/employees/employees.service';
// import { EmployeesController } from 'src/controller/employees/employees.controller';
import { UserService } from 'src/user/user.service';
import { UserController } from 'src/user/user.controller';
// import { UploadMiddleware } from 'src/upload/upload.middleware';
import { LocalGuard } from 'src/auth/local.strategy';
import { JwtGuard } from 'src/auth/jwt.strategy';
import { Customer } from 'output/entities/Customer';
import { Orders } from 'output/entities/Orders';
import { OrderDetail } from 'output/entities/OrderDetail';
import { ProductCategory } from 'output/entities/ProductCategory';
import { Product } from 'output/entities/Product';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      // Regions,
      // Countries,
      // Departments,
      // Employees,
      // JobHistory,
      // Jobs,
      // Locations,
      Users,
      ProductCategory,
      Customer,
      Orders,
      Product,
      OrderDetail,
    ]),
    PassportModule,
    JwtModule.register({
      secret: 'secretKey',
      signOptions: { expiresIn: '2d' },
    }),
  ],
  providers: [
    // ServiceService,
    // CountriesService,
    // DepartmentsService,
    // EmployeesService,
    LocalGuard,
    JwtGuard,
    UserService,
  ],
  controllers: [
    // ControllerController,
    // CountriesController,
    // DepartmentsController,
    // EmployeesController,
    UserController,
  ],
  exports: [UserService],
})
export class ModuleModule {}
