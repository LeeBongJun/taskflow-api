import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ActivityAction } from '../../common/enums/activity-action.enum';

@Index(['tenantId', 'createdAt'])
@Index(['targetType', 'targetId'])
@Entity('activity_logs')
export class ActivityLogEntity {
  // 1. PK
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  // 2. FK 컬럼
  @Column('uuid')
  tenantId!: string;

  @Column({ type: 'uuid', nullable: true })
  userId!: string | null;

  // 3. 내용 컬럼
  @Column({ type: 'enum', enum: ActivityAction })
  action!: ActivityAction;

  @Column({ length: 50 })
  targetType!: string;

  @Column({ type: 'uuid', nullable: true })
  targetId!: string | null;

  @Column({ type: 'jsonb', nullable: true })
  metadata!: Record<string, unknown> | null;

  // 4. 날짜 컬럼
  @CreateDateColumn()
  createdAt!: Date;

  // NOTE: userId는 유저 탈퇴 시 SET NULL 정책 적용 (감사 로그 보존)
  // TODO: UserEntity 생성 후 @ManyToOne({ onDelete: 'SET NULL' }) 연결
}
