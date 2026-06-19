import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Index(['tenantId', 'taskId'])
@Index(['uploadedById'])
@Index(['fileKey'], { unique: true })
@Entity('attachments')
export class AttachmentEntity {
  // 1. PK
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  // 2. FK 컬럼
  @Column('uuid')
  taskId!: string;

  @Column('uuid')
  tenantId!: string;

  @Column('uuid')
  uploadedById!: string;

  // 3. 내용 컬럼
  @Column({ length: 255 })
  originalName!: string;

  @Column({ length: 500 })
  fileKey!: string;

  @Column({ length: 1000 })
  fileUrl!: string;

  @Column({ length: 100 })
  mimeType!: string;

  @Column({ type: 'integer' })
  fileSize!: number;

  // 4. 날짜 컬럼
  @CreateDateColumn()
  createdAt!: Date;

  @DeleteDateColumn()
  deletedAt!: Date | null;

  // TODO:
  // TaskEntity 생성 후 @ManyToOne 연결
  // UserEntity(uploadedBy) 생성 후 @ManyToOne 연결
}
