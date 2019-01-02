import { Injectable } from '@nestjs/common';
import { League } from './league.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getManager } from 'typeorm';
import { User } from 'src/user/user.entity';

@Injectable()
export class LeagueService {
    constructor(
        @InjectRepository(League)
        private readonly beanRepository: Repository<League>,
    ) {}

    async create(bean: League, user: User): Promise<League> {
        const newBean = new League();
        newBean.user = user;
        const beanRepository = getManager().getRepository(League);
        beanRepository.merge(newBean, bean);
        return await this.beanRepository.save(newBean);
    }

    async get(): Promise<League[]> {
        return await this.beanRepository.find();
    }

    async getOne(id: number): Promise<League> {
        return await this.beanRepository.findOne(id);
    }
}
