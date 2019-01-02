import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    VersionColumn,
    OneToOne,
    JoinColumn,
    Unique,
} from 'typeorm';
import { User } from 'src/user/user.entity';
import { League } from 'src/league/league.entity';
import { Team } from 'src/team/team.entity';

@Entity()
@Unique(['league', 'home', 'guest'])
export class Calendar {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: number;

    @VersionColumn()
    version: number;

    @OneToOne(type => League, league => league.id, { nullable : false})
    @JoinColumn()
    league: League;

    @OneToOne(type => Team, team => team.id, { nullable : false})
    @JoinColumn()
    home: Team;

    @OneToOne(type => Team, team => team.id, { nullable : false})
    @JoinColumn()
    guest: Team;

    @Column()
    homeScore: number;

    @Column()
    guestScore: number;
}
