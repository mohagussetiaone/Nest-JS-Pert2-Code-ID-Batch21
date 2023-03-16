import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Departments } from './Departments';

@Index('job_history_pkey', ['employeeId', 'startDate'], { unique: true })
@Entity('job_history', { schema: 'public' })
export class JobHistory {
  @Column('integer', { primary: true, name: 'employee_id' })
  employeeId: number;

  @Column('date', { primary: true, name: 'start_date' })
  startDate: string;

  @Column('date', { name: 'end_date', nullable: true })
  endDate: string | null;

  @Column('character varying', { name: 'job_id', nullable: true, length: 10 })
  jobId: string | null;

  @ManyToOne(() => Departments, (departments) => departments.jobHistories)
  @JoinColumn([{ name: 'department_id', referencedColumnName: 'departmentId' }])
  department: Departments;
}
