import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnalyseElemntService } from './analyse-elemnt.service';
import { CreateAnalyseElemntDto } from './dto/create-analyse-elemnt.dto';
import { UpdateAnalyseElemntDto } from './dto/update-analyse-elemnt.dto';

@Controller('analyseElemnt')
export class AnalyseElemntController {
  constructor(private readonly analyseElemntService: AnalyseElemntService) {}

  @Post()
  async saveAnalyseElemnt(@Body() body: { analyseId: number, elemntId: number }) { 
  
  const { analyseId, elemntId } = body;
 

  return this.analyseElemntService.saveAnalyseElemnt(analyseId, elemntId);
   
    }



  @Post()
  create(@Body() createAnalyseElemntDto: CreateAnalyseElemntDto) {
    return this.analyseElemntService.create(createAnalyseElemntDto);
  }

  @Get()
  findAll() {
    return this.analyseElemntService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.analyseElemntService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnalyseElemntDto: UpdateAnalyseElemntDto) {
    return this.analyseElemntService.update(+id, updateAnalyseElemntDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.analyseElemntService.remove(+id);
  }
}
