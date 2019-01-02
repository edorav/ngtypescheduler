import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UserService } from './user/user.service';
import { LeagueService } from './league/league.service';
import { UserController } from './user/user.controller';
import { LeagueController } from './league/league.controller';
import { JwtStrategy } from './user/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { User } from './user/user.entity';
import { League } from './league/league.entity';
import { TeamController } from './team/team.controller';
import { TeamService } from './team/team.service';
import { CalendarController } from './calendar/calendar.controller';
import { CalendarService } from './calendar/calendar.service';
import { Team } from './team/team.entity';
import { Calendar } from './calendar/calendar.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      League,
      Team,
      Calendar,
    ]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secretOrPrivateKey: 'secretKey',
      signOptions: {
        expiresIn: 3600,
      },
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'r00t',
      database: 'sport-schedule',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [
    AppController,
    UserController,
    LeagueController,
    TeamController,
    CalendarController,
  ],
  providers: [
    AppService,
    UserService,
    LeagueService,
    JwtStrategy,
    TeamService,
    CalendarService,
  ],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
