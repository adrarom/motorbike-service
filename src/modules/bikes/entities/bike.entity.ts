import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Bike {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false})
  userId: string;

  @Column({ type: 'varchar', nullable: false})
  brand: string;

  @Column({ type: 'varchar', nullable: false})
  model: string;

  @Column({ type: 'int', nullable: false})
  year: number;

  @Column({ type: 'varchar', nullable: false})
  plateNumber: string;

  @Column({ type: 'varchar', nullable: false})
  bikeType: string;

  @Column({ type: 'varchar', nullable: false})
  vinNumber: string;

  @Column({ type: 'int', nullable: false})
  mileage: number;

  @Column({ type: 'timestamp', nullable: true })
  lastRevision: Date;

  @Column({ default : 'active', type: 'varchar', nullable: false})
  status: string;

  @CreateDateColumn({ type: 'timestamp'})
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp'})
  updatedAt: Date;

}
