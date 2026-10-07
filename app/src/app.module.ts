import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module.js';
import { SystemModule } from './system/system.module.js';

@Module({
  imports: [HealthModule, SystemModule],
})
export class AppModule {}
