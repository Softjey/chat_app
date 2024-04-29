import { IsEmail, Length } from 'class-validator';
import { Column, PrimaryGeneratedColumn, DeleteDateColumn } from 'typeorm';
import { Entity, Index, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.USER,
  })
  role: UserRole;

  @Length(2, 100)
  @Column({ length: 100 })
  name: string;

  @Length(1, 250)
  @Column({ nullable: true, length: 250 })
  description: string;

  @Column({ nullable: true })
  photo: string;

  @IsEmail()
  @Column({ unique: true })
  @Index({ unique: true })
  email: string;

  @Column({ nullable: true })
  lastActivity: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
