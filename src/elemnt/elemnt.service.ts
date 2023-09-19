import { Injectable } from '@nestjs/common';
import { CreateElemntDto } from './dto/create-elemnt.dto';
import { UpdateElemntDto } from './dto/update-elemnt.dto';
import { Elemnt } from './entities/elemnt.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ElemntService {

  constructor(
    @InjectRepository (Elemnt) private readonly elementRepository: Repository<Elemnt>,
  ) {}

  create(createElementDto: CreateElemntDto, analyseId:number): Promise<Elemnt> {
    const elemnt: Elemnt= new Elemnt();
    elemnt.code = createElementDto.code;
    elemnt.libelle = createElementDto.libelle;
    elemnt.analyses = createElementDto.analyses;

    return this.elementRepository.save(elemnt);
  }

  findAll(): Promise <Elemnt[]> {
    return this.elementRepository.find();
  }

  findOne(id: number): Promise <Elemnt> {
    return this.elementRepository.findOneBy({id});
  }

  update(id: number, updateElemntDto: UpdateElemntDto):Promise <Elemnt> {

    const elemnt: Elemnt = new Elemnt();

    elemnt.id = id;
    elemnt.code = updateElemntDto.code;
    elemnt.libelle = updateElemntDto.libelle;

    return this.elementRepository.save(elemnt);
  }

  remove(id: number): Promise<{ affected?: number }> {
    return this.elementRepository.delete(id);
  }
}
