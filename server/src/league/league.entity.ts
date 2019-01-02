import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    VersionColumn,
    OneToOne,
    JoinColumn,
    ManyToOne,
} from 'typeorm';
import { User } from 'src/user/user.entity';

@Entity()
export class League {

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

    @ManyToOne(type => User, user => user.id, { nullable : false})
    @JoinColumn()
    user: User;
}
