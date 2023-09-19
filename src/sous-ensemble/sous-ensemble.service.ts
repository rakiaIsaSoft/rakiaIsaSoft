import { Injectable } from '@nestjs/common';
import { CreateSousEnsembleDto } from './dto/create-sous-ensemble.dto';
import { UpdateSousEnsembleDto } from './dto/update-sous-ensemble.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SousEnsemble } from './entities/sous-ensemble.entity';


@Injectable()
export class SousEnsembleService {

  constructor(
    @InjectRepository (SousEnsemble) private readonly sousEnsembleRepository: Repository<SousEnsemble>,
  ) {}



  create(createSousEnsembleDto: CreateSousEnsembleDto) : Promise<SousEnsemble>{
    const sous_ensemble: SousEnsemble = new SousEnsemble();
    sous_ensemble.code = createSousEnsembleDto.code;
    sous_ensemble.libelle = createSousEnsembleDto.libelle;
   
    return this.sousEnsembleRepository.save(sous_ensemble);
  }

  findAll(): Promise <SousEnsemble[]> {
    return this.sousEnsembleRepository.find();
  }

  findOne(id: number) : Promise <SousEnsemble> {
    return this.sousEnsembleRepository.findOneBy({ id });
  
  }
  update(id: number, updateSousEnsembleDto: UpdateSousEnsembleDto): Promise<SousEnsemble> {
   const sous_ensemble: SousEnsemble = new SousEnsemble();
   sous_ensemble.id = id;
    sous_ensemble.code = updateSousEnsembleDto.code;
    sous_ensemble.libelle = updateSousEnsembleDto.libelle;
   
    return this.sousEnsembleRepository.save(sous_ensemble);
  }

  remove(id: number): Promise<{ affected?: number }> { 
    return this.sousEnsembleRepository.delete(id);
  }
}
