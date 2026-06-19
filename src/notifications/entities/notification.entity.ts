import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { NotificationType } from '../../common/enums/notification-type.enum';

@Index(['userId', 'isRead'])
@Index(['tenantId', 'userId'])
@Entity('notifications')
export class NotificationEntity {
  // 1. PK
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  // 2. FK 컬럼
  @Column('uuid')
  userId!: string;

  @Column('uuid')
  tenantId!: string;

  // 3. 내용 컬럼
  @Column({ type: 'enum', enum: NotificationType })
  type!: NotificationType;

  @Column({ type: 'text' })
  message!: string;

  @Column({ default: false })
  isRead!: boolean;

  @Column({ type: 'timestamptz', nullable: true })
  readAt!: Date | null;

  @Column({ length: 50, nullable: true })
  targetType!: string | null;

  @Column({ type: 'uuid', nullable: true })
  targetId!: string | null;

  // 4. 날짜 컬럼
  @CreateDateColumn()
  createdAt!: Date;

  // TODO:
  // UserEntity 생성 후 @ManyToOne 연결
}
