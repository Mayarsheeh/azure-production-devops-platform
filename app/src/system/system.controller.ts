import { Controller, Get } from '@nestjs/common';

@Controller('version')
export class SystemController {
  @Get()
  getVersion() {
    return {
      service: 'cloudops-api',
      version: process.env.APP_VERSION ?? '0.1.0-dev',
      commit: process.env.GIT_SHA ?? 'local',
      environment: process.env.NODE_ENV ?? 'development',
    };
  }
}
