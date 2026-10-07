import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  getLiveness() {
    return {
      status: 'ok',
      service: 'cloudops-api',
      timestamp: new Date().toISOString(),
    };
  }

  getReadiness() {
    return {
      status: 'ready',
      service: 'cloudops-api',
      checks: {
        application: 'ok',
      },
      timestamp: new Date().toISOString(),
    };
  }
}
