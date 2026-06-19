import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => {
  const isProduction =
    configService.get<string>('NODE_ENV') === 'production';

  return {
    type: 'postgres',

    host: configService.get<string>('DB_HOST', 'localhost'),
    port: Number(configService.get('DB_PORT', 5432)),

    username: configService.get<string>('DB_USERNAME'),
    password: configService.get<string>('DB_PASSWORD'),
    database: configService.get<string>('DB_DATABASE'),

    autoLoadEntities: true,

    synchronize: !isProduction,
    logging: !isProduction,

    migrations: ['dist/migrations/*.js'],
    migrationsRun: false,
  };
};
