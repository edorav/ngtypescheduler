import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    VersionColumn,
    OneToOne,
    JoinColumn,
    OneToMany,
    ManyToOne,
} from 'typeorm';
import { User } from 'src/user/user.entity';
import { League } from 'src/league/league.entity';

@Entity()
export class Team {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({
        length: 100,
        nullable: false,
    })
    name: string;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: number;

    @VersionColumn()
    version: number;

    @ManyToOne(type => User)
    @JoinColumn()
    user: User;

    @ManyToOne(type => League, league => league.id, { nullable : false})
    @JoinColumn()
    league: League;
}
