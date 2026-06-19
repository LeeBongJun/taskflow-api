import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Index(['projectId', 'userId'], { unique: true })
@Index(['projectId'])
@Index(['userId'])
@Entity('project_members')
export class ProjectMemberEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('uuid')
  projectId!: string;

  @Column('uuid')
  userId!: string;

  @CreateDateColumn()
  createdAt!: Date;

  // TODO:
  // ProjectEntity 생성 후 @ManyToOne 연결
  // UserEntity 생성 후 @ManyToOne 연결
}
