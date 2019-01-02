import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Team } from './team.entity';
import { Repository, getManager } from 'typeorm';
import { User } from 'src/user/user.entity';

@Injectable()
export class TeamService {
    constructor(
        @InjectRepository(Team)
        private readonly beanRepository: Repository<Team>,
    ) {}

    async create(bean: Team, user: User): Promise<Team> {
        const newBean = new Team();
        newBean.user = user;
        const beanRepository = getManager().getRepository(Team);
        beanRepository.merge(newBean, bean);
        return await this.beanRepository.save(newBean);
    }

    async get(): Promise<Team[]> {
        return await this.beanRepository.find();
    }
}
