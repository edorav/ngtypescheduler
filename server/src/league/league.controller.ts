import { Controller, Post, Body, UseGuards, Req, Get, Param } from '@nestjs/common';
import { League } from './league.entity';
import { LeagueService } from './league.service';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from 'src/user/user.service';
import { ExtractJwt } from 'passport-jwt';

@Controller('api/league')
export class LeagueController {
    constructor(
        private readonly leagueService: LeagueService,
        private readonly userService: UserService,
    ) {}

    @Post()
    @UseGuards(AuthGuard())
    async create(@Req() req): Promise<League> {
        const user = await this.userService.findOneByEmail(req.user);
        return this.leagueService.create(req.body, user);
    }

    @Get()
    @UseGuards(AuthGuard())
    async getListByUserId(@Req() req): Promise<League[]> {
        const user = await this.userService.findOneByEmail(req.user);
        return this.leagueService.get();
    }

    @Get(':id')
    @UseGuards(AuthGuard())
    async get(@Param() params): Promise<League> {
        return this.leagueService.getOne(params.id);
    }
}
