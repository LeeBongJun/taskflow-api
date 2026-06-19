import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';
import { TaskStatus } from '../../common/enums/task-status.enum';
import { TaskPriority } from '../../common/enums/task-priority.enum';

@Index(['tenantId'])
@Index(['projectId'])
@Index(['assigneeId'])
@Index(['projectId', 'status'])
@Entity('tasks')
export class TaskEntity {
  // 1. PK
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  // 2. FK 컬럼
  @Column('uuid')
  projectId!: string;

  @Column('uuid')
  tenantId!: string;

  @Column({
    type: 'uuid',
    nullable: true,
  })
  assigneeId!: string | null;

  @Column('uuid')
  createdById!: string;

  // 3. 내용 컬럼
  @Column({ length: 255 })
  title!: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  description!: string | null;

  // 4. enum 컬럼
  @Column({
    type: 'enum',
    enum: TaskStatus,
    default: TaskStatus.TODO,
  })
  status!: TaskStatus;

  @Column({
    type: 'enum',
    enum: TaskPriority,
    default: TaskPriority.MEDIUM,
  })
  priority!: TaskPriority;

  // 5. 특수 컬럼
  @Column({
    type: 'double precision',
    default: 1000,
  })
  position!: number;

  @VersionColumn()
  version!: number;

  @Column({
    type: 'timestamptz',
    nullable: true,
  })
  dueDate!: Date | null;

  // 6. 날짜 컬럼
  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @DeleteDateColumn()
  deletedAt!: Date | null;

  // TODO:
  // ProjectEntity 생성 후 @ManyToOne 연결
  // UserEntity(assignee) 생성 후 @ManyToOne 연결
  // UserEntity(createdBy) 생성 후 @ManyToOne 연결
  // TaskComment 생성 후 @OneToMany 연결
  // Attachment 생성 후 @OneToMany 연결
}
