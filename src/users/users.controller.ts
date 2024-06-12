import { Controller,Get,Post,Param,Body} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    private user = [];
    constructor(private readonly userService:UsersService){

    }

    @Get()
    async findAll(){
        console.log("Finding all")
        return await this.userService.findAll().then((result)=>{
            console.log("Result:",result);
            return result
        });


    }

    @Get(":id")
    findById(@Param('id') id:string){
        return id
    }

    @Post('register')
    addUser(@Body() user:{username:string,password:string}){
        return this.userService.createUser(user.username,user.password).then((result:any)=>{
            if(result?.message){
                return result
            }
            else{
                return result;
            }
        })

    }
}


