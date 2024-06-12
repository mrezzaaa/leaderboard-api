import { Controller,Get,Post,Param,Body } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtStrategy } from './jwt.strategy';


@Controller('auth')
export class AuthController {
    constructor(private readonly userService:UsersService,private readonly jwt:JwtStrategy){

    }

    @Post()
    loggingin(@Body() data:any){
        console.log(data.username,data.password)
        return this.userService.findByUsernamePassword(data.username,data.password).then((result)=>{
            console.log(result)
            this.jwt.validate({id:result[0].id,username:result[0].username}).then((j)=>{
                console.log("J",j)
            })
            return result
        })
    }
}
