import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Score } from './score.entity';
import { Users } from '../users/users.entity';

@Injectable()
export class ScoreService {
  constructor(
    @InjectRepository(Score)
    private scoreRepository: Repository<Score>,
  ) {}

  findAll(): Promise<Score[]> {
    return this.scoreRepository
      .createQueryBuilder('score')
      .leftJoinAndSelect('score.user', 'user')
      .orderBy('score.id', 'ASC')
      .getMany();
  }

  

  async findTop10(): Promise<Score[]> {
    return this.scoreRepository
      .createQueryBuilder('score')
      .leftJoinAndSelect('score.user', 'user')
      .orderBy('score.score', 'DESC')
      .limit(10)
      .getMany();
  }

  findOne(id: number): Promise<Score | null> {
    return this.scoreRepository.findOneBy({ id });
  }

  insertOne(id:number,score:number) {
    return this.scoreRepository.insert({id,score})
  }

  async remove(id: number): Promise<void> {
    await this.scoreRepository.delete(id);
  }
}