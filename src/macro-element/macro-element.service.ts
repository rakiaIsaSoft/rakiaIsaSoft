import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateMacroElementDto } from './dto/create-macro-element.dto';
import { UpdateMacroElementDto } from './dto/update-macro-element.dto';
import { MacroElement } from './entities/macro-element.entity';

@Injectable()
export class MacroElementService {

  constructor(
    @InjectRepository (MacroElement) private readonly macroElementRepository: Repository<MacroElement>,
  ) {}


  create(createMacroElementDto: CreateMacroElementDto): Promise  <MacroElement> {
 
    const macro : MacroElement = new MacroElement();
    macro.code = createMacroElementDto.code;
    macro.libelle = createMacroElementDto.libelle;
   
    return this.macroElementRepository.save(macro);
  }

  findAll(): Promise <MacroElement[]> {
    return this.macroElementRepository.find();
  }

  findOne(id: number): Promise <MacroElement> {
    return this.macroElementRepository.findOneBy({ id });
  }

  update(id: number, updateMacroElementDto: UpdateMacroElementDto): Promise  <MacroElement> {
    const macro : MacroElement = new MacroElement();

    macro.id  = id ;
    macro.code = updateMacroElementDto.code;
    macro.libelle = updateMacroElementDto.libelle;
   
    return this.macroElementRepository.save(macro);
  }

  remove(id: number) : Promise  <{ affected?: number }> {
    return this.macroElementRepository.delete(id);
  }

}