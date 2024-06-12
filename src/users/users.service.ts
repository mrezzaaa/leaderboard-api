import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  findAll(): Promise<Users[]> {
    return this.usersRepository.query("Select * from users")
  }

  findOne(id: number): Promise<Users | null> {
    return this.usersRepository.findOneBy({ id });
  }

  findByUsernamePassword(username:string,password:string): Promise<any>{
    return this.usersRepository.find({where:{username,password}})
  }


  async createUser(username:string,password:string): Promise<Users |{} >{
    const exist = await this.usersRepository.exists({where:{username}});
    console.log("Existence:",exist,username)
    if(exist == true){
        console.log(`User '${username}' already exist`)
        return {message:`User '${username}' already exist`}
    }
    else{
        const queryRunner = this.usersRepository.createQueryBuilder()
        queryRunner.insert().into("users").values([{username,password}]).execute();
        const user = await this.usersRepository.findOneBy({ username });
        console.log("User created",user)
        return user;
    }

  }
  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}