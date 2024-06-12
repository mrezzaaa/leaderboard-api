import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScoreService } from './score.service';
import { ScoreController } from './score.controller';
import { Score } from './score.entity';
import { Users } from '../users/users.entity';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoggingMiddleware } from './logging/logging.middleware';
@Module({
    imports: [TypeOrmModule.forFeature([Score,Users])],
    exports: [TypeOrmModule]
})
export class ScoreModule {}