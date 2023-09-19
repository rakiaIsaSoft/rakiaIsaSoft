import { Injectable } from '@nestjs/common';
import { CreateTailleDto } from './dto/create-taille.dto';
import { UpdateTailleDto } from './dto/update-taille.dto';
import { Taille } from './entities/taille.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TailleService {

  constructor(
    @InjectRepository (Taille) private readonly tailleRepository: Repository<Taille>,
  ) {}

  create(createTailleDto: CreateTailleDto): Promise<Taille> {
    const taille: Taille= new Taille();
    taille.code = createTailleDto.code;
    taille.libelle = createTailleDto.libelle;

    return this.tailleRepository.save(taille);
  }

  findAll(): Promise <Taille[]> {
    return this.tailleRepository.find();
  }

  findOne(id: number): Promise <Taille> {
    return this.tailleRepository.findOneBy({id});
  }

  update(id: number, updateTailleDto: UpdateTailleDto): Promise <Taille>  {
    const taille: Taille = new Taille();

    taille.id = id;
    taille.code = updateTailleDto.code;
    taille.libelle = updateTailleDto.libelle;

    return this.tailleRepository.save(taille);
  }

  remove(id: number): Promise<{ affected?: number }> {
    return this.tailleRepository.delete(id);
  }
}
