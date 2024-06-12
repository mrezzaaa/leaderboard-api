import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Users } from './users/users.entity';
import { ScoreController } from './score/score.controller';
import { ScoreService } from './score/score.service';
import { ScoreModule } from './score/score.module';
import { Score } from './score/score.entity';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { LoggingMiddleware } from './logging/logging.middleware';
import { JwtStrategy } from './auth/jwt.strategy';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'icewalker',
      password: '',
      database: 'leaderboard_api',
      entities: [Users,Score],
      synchronize: true,
    }),
    UsersModule,
    ScoreModule,
    AuthModule],
  controllers: [AppController, UsersController, ScoreController, AuthController],
  providers: [AppService, UsersService, ScoreService, AuthService,JwtStrategy],
})
export class AppModule implements NestModule {
  constructor(private dataSource: DataSource) {}
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}
