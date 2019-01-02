import { Controller, Post, UseGuards, Req, Get } from '@nestjs/common';
import { TeamService } from './team.service';
import { Team } from './team.entity';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from 'src/user/user.service';

@Controller('api/team')
export class TeamController {
    constructor(
        private readonly teamService: TeamService,
        private readonly userService: UserService,
    ) {}

    @Post()
    @UseGuards(AuthGuard())
    async create(@Req() req): Promise<Team> {
        const user = await this.userService.findOneByEmail(req.user);
        return this.teamService.create(req.body, user);
    }

    @Get()
    @UseGuards(AuthGuard())
    async getListByUserId(@Req() req): Promise<Team[]> {
        const user = await this.userService.findOneByEmail(req.user);
        return this.teamService.get();
    }
}
