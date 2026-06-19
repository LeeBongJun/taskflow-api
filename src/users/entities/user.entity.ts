import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  passwordHash: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  avatarUrl: string | null;

  @Column({ default: true })
  isActive: boolean;

  @Column({ nullable: true, select: false })
  refreshTokenHash: string | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;

  // TODO:
  // TenantMember 생성 후 연결
  // ProjectMember 생성 후 연결
  // Task(assignee) 생성 후 연결
  // Task(createdBy) 생성 후 연결
  // TaskComment 생성 후 연결
  // Notification 생성 후 연결
  // ActivityLog 생성 후 연결
}
