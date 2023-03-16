import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Employees } from './Employees';

@Index('jobs_pkey', ['jobId'], { unique: true })
@Index('jobs_job_title_key', ['jobTitle'], { unique: true })
@Entity('jobs', { schema: 'public' })
export class Jobs {
  @Column('character varying', { primary: true, name: 'job_id', length: 10 })
  jobId: string;

  @Column('character varying', {
    name: 'job_title',
    nullable: true,
    unique: true,
    length: 35,
  })
  jobTitle: string | null;

  @Column('numeric', { name: 'min_salary', nullable: true })
  minSalary: string | null;

  @Column('numeric', { name: 'max_salary', nullable: true })
  maxSalary: string | null;

  @OneToMany(() => Employees, (employees) => employees.job)
  employees: Employees[];
}
