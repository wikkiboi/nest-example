import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';

// Global allows access to auth, user, bookmark, etc. without importing for all
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
