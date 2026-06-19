import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TenantRole } from '../../common/enums/tenant-role.enum';
import { InviteStatus } from '../../common/enums/invite-status.enum';

@Index(['tenantId', 'invitedEmail'])
@Entity('tenant_invites')
export class TenantInviteEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Index()
  @Column()
  tenantId: string;

  @Column()
  invitedByUserId: string;

  @Column()
  invitedEmail: string;

  @Column({ type: 'enum', enum: TenantRole, default: TenantRole.MEMBER })
  role: TenantRole;

  @Column({ type: 'uuid', unique: true })
  token: string;

  @Column({ type: 'timestamptz' })
  expiresAt: Date;

  @Column({
    type: 'enum',
    enum: InviteStatus,
    default: InviteStatus.PENDING,
  })
  status: InviteStatus;

  @Column({ nullable: true })
  acceptedByUserId: string | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;

  // TODO:
  // TenantEntity 생성 후 @ManyToOne 연결
  // UserEntity(invitedBy) 생성 후 @ManyToOne 연결
  // UserEntity(acceptedBy) 생성 후 @ManyToOne 연결
}
