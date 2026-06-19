import {
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TenantRole } from '../../common/enums/tenant-role.enum';

@Index(['tenantId', 'userId'], { unique: true })
@Entity('tenant_members')
export class TenantMemberEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Index()
  @Column()
  tenantId: string;

  @Index()
  @Column()
  userId: string;

  @Column({ type: 'enum', enum: TenantRole, default: TenantRole.MEMBER })
  role: TenantRole;

  @Column({ type: 'timestamptz', nullable: true })
  joinedAt: Date | null;

  // TODO:
  // TenantEntity 생성 후 @ManyToOne 연결
  // UserEntity 생성 후 @ManyToOne 연결
}
