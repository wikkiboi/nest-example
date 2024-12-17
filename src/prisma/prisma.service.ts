import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

//  Logic that connects to the database
@Injectable()
export class PrismaService extends PrismaClient {
  // Make sure to set ConfigModule isGlobal
  constructor(config: ConfigService) {
    // Super calls the constructor of the class that is being extended
    // Use config module to not expose database url in code import in AppModule
    super({
      datasources: {
        db: {
          url: config.get('DATABASE_URL'),
        },
      },
    });
  }

  // Transaction - tell prisma to delete in a given order
  // this refers to PrismaClient as this class extends PrismaClient
  // cleanDb for e2e testing purposes
  cleanDb() {
    return this.$transaction([
      this.bookmark.deleteMany(),
      this.user.deleteMany(),
    ]);
  }
}
