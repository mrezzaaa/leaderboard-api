import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Score } from '../score/score.entity';
import { Users } from './users.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Users,Score])],
    exports: [TypeOrmModule]
})
export class UsersModule {}