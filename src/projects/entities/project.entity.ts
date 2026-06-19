import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Index(['tenantId'])
@Index(['createdById'])
@Entity('projects')
export class ProjectEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('uuid')
  tenantId!: string;

  @Column({ length: 200 })
  name!: string;

  @Column({ type: 'text', nullable: true })
  description!: string | null;

  @Column('uuid')
  createdById!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @DeleteDateColumn()
  deletedAt!: Date | null;

  // TODO:
  // TenantEntity 생성 후 @ManyToOne 연결
  // UserEntity(createdBy) 생성 후 @ManyToOne 연결
  // ProjectMember 생성 후 @OneToMany 연결
  // Task 생성 후 @OneToMany 연결
}
