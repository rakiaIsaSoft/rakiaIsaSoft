import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ElemntService } from './elemnt.service';
import { CreateElemntDto } from './dto/create-elemnt.dto';
import { UpdateElemntDto } from './dto/update-elemnt.dto';

@Controller('element')
export class ElemntController {
  constructor(private readonly elementService: ElemntService) {}

  @Post('/addElement')
  create(@Body() createElemntDto: CreateElemntDto,@Param('analyseId') analyseId: number ) {
    return this.elementService.create(createElemntDto, analyseId);
  }

  @Get('/allElement')
  findAll() {
    return this.elementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.elementService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateElemntDto: UpdateElemntDto) {
    return this.elementService.update(+id, updateElemntDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.elementService.remove(+id);
  }
}
