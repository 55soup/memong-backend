import { Controller, Get } from '@nestjs/common';

@Controller('board')
export class BoardController {
    @Get()
    getAll(){
        return "hi";
    }
}
