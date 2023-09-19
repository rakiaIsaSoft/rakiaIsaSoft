import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MacroElementService } from './macro-element.service';
import { CreateMacroElementDto } from './dto/create-macro-element.dto';
import { UpdateMacroElementDto } from './dto/update-macro-element.dto';

@Controller('macro-element')
export class MacroElementController {
  constructor(private readonly macroElementService: MacroElementService) {}

  @Post('addMacro')
  create(@Body() createMacroElementDto: CreateMacroElementDto) {
    return this.macroElementService.create(createMacroElementDto);
  }

  @Get('allMacro')
  findAll() {
    return this.macroElementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.macroElementService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMacroElementDto: UpdateMacroElementDto) {
    return this.macroElementService.update(+id, updateMacroElementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.macroElementService.remove(+id);
  }
}
