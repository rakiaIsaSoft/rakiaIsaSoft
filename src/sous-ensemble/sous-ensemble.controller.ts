import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SousEnsembleService } from './sous-ensemble.service';
import { CreateSousEnsembleDto } from './dto/create-sous-ensemble.dto';
import { UpdateSousEnsembleDto } from './dto/update-sous-ensemble.dto';

@Controller('sous-ensemble')
export class SousEnsembleController {
  constructor(private readonly sousEnsembleService: SousEnsembleService) {}

  @Post('/addSEnsemble')
  create(@Body() createSousEnsembleDto: CreateSousEnsembleDto) {
    return this.sousEnsembleService.create(createSousEnsembleDto);
  }

  @Get('/allSEnsemble')
  findAll() {
    return this.sousEnsembleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sousEnsembleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSousEnsembleDto: UpdateSousEnsembleDto) {
    return this.sousEnsembleService.update(+id, updateSousEnsembleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sousEnsembleService.remove(+id);
  }
}
