import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Departments } from './Departments';
import { Jobs } from './Jobs';

@Index('employees_pkey', ['employeeId'], { unique: true })
@Entity('employees', { schema: 'public' })
export class Employees {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'employee_id' })
  employeeId: number;

  @Column('character varying', {
    name: 'first_name',
    nullable: true,
    length: 20,
  })
  firstName: string | null;

  @Column('character varying', {
    name: 'last_name',
    nullable: true,
    length: 25,
  })
  lastName: string | null;

  @Column('character varying', { name: 'email', nullable: true, length: 25 })
  email: string | null;

  @Column('character varying', {
    name: 'phone_number',
    nullable: true,
    length: 20,
  })
  phoneNumber: string | null;

  @Column('date', { name: 'hire_date', nullable: true })
  hireDate: string | null;

  @Column('numeric', { name: 'salary', nullable: true })
  salary: string | null;

  @Column('numeric', { name: 'commission_pct', nullable: true })
  commissionPct: string | null;

  @Column('integer', { name: 'manager_id', nullable: true })
  managerId: number | null;

  @ManyToOne(() => Departments, (departments) => departments.employees)
  @JoinColumn([{ name: 'department_id', referencedColumnName: 'departmentId' }])
  department: Departments;

  @ManyToOne(() => Jobs, (jobs) => jobs.employees)
  @JoinColumn([{ name: 'job_id', referencedColumnName: 'jobId' }])
  job: Jobs;
}
