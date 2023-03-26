import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('user_pkey', ['userId'], { unique: true })
@Entity('user', { schema: 'public' })
export class User {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'user_id' })
  userId: number;

  @Column('character varying', {
    name: 'user_name',
    nullable: true,
    length: 50,
  })
  userName: string | null;

  @Column('character varying', {
    name: 'user_phone',
    nullable: true,
    length: 15,
  })
  userPhone: string | null;

  @Column('character varying', {
    name: 'user_email',
    nullable: true,
    length: 50,
  })
  userEmail: string | null;

  @Column('character varying', {
    name: 'user_pass',
    nullable: true,
    length: 250,
  })
  userPass: string | null;
}
