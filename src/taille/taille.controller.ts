import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TailleService } from './taille.service';
import { CreateTailleDto } from './dto/create-taille.dto';
import { UpdateTailleDto } from './dto/update-taille.dto';

@Controller('taille')
export class TailleController {
  constructor(private readonly tailleService: TailleService) {}

  @Post('/addTaille')
  create(@Body() createTailleDto: CreateTailleDto) {
    return this.tailleService.create(createTailleDto);
  }

  @Get('/allTaille')
  findAll() {
    return this.tailleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tailleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTailleDto: UpdateTailleDto) {
    return this.tailleService.update(+id, updateTailleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tailleService.remove(+id);
  }
}
