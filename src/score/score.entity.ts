import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Users } from '../users/users.entity';

@Entity('score')
export class Score {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id:number;

    @Column()
    score: number;



    @ManyToOne(() => Users, users => users.scores)

    @JoinColumn({ name: 'user_id' })
    user: Users;
}
