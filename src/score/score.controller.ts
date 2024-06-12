import { Controller,Get,Post,Param,Body} from '@nestjs/common';
import { Score } from './score.entity';
import { ScoreService } from './score.service';

@Controller('score')
export class ScoreController {
    constructor(private readonly scoreService:ScoreService){

    }

    @Get()
    async viewAllScore(){
        const result = await this.scoreService.findAll()
        result.map((res)=>{
            delete res.user.password
        })
        return result
    }


    @Post('submit')
    async addScore(@Body() data:any){
        return this.scoreService.insertOne(data.id,data.score)
    }


    @Get("leaderboard")
    async getTop10(){
        const result = await this.scoreService.findTop10()
        result.map((res)=>{delete res.user.password})
        return result
    }

}
