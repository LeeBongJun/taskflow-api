import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Index(['tenantId', 'taskId'])
@Index(['authorId'])
@Entity('task_comments')
export class TaskCommentEntity {
  // 1. PK
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  // 2. FK 컬럼
  @Column('uuid')
  taskId!: string;

  @Column('uuid')
  tenantId!: string;

  @Column('uuid')
  authorId!: string;

  // 3. 내용 컬럼
  @Column({ type: 'text' })
  content!: string;

  // 4. 날짜 컬럼
  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @DeleteDateColumn()
  deletedAt!: Date | null;

  // TODO:
  // TaskEntity 생성 후 @ManyToOne 연결
  // UserEntity(author) 생성 후 @ManyToOne 연결
}
