import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GammeAnalyseService } from './gamme-analyse.service';
import { CreateGammeAnalyseDto } from './dto/create-gamme-analyse.dto';
import { UpdateGammeAnalyseDto } from './dto/update-gamme-analyse.dto';

@Controller('gammeAnalyse')
export class GammeAnalyseController {
  constructor(private readonly gammeAnalyseService: GammeAnalyseService) {}


  @Post()
  async saveGammeAnalyse(@Body() body: { gammeId: number, analyseId: number }) { 
  
  const { gammeId, analyseId } = body;
  console.log("gammeId",gammeId);

  return this.gammeAnalyseService.saveGammeAnalyse(gammeId, analyseId);
   
    }


  @Post()
  create(@Body() createGammeAnalyseDto: CreateGammeAnalyseDto) {
    return this.gammeAnalyseService.create(createGammeAnalyseDto);
  }

  @Get()
  findAll() {
    return this.gammeAnalyseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gammeAnalyseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGammeAnalyseDto: UpdateGammeAnalyseDto) {
    return this.gammeAnalyseService.update(+id, updateGammeAnalyseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gammeAnalyseService.remove(+id);
  }
}
