import { Injectable } from '@nestjs/common';
import { CreateMachineDto } from './dto/create-machine.dto';
import { UpdateMachineDto } from './dto/update-machine.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Machine } from './entities/machine.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MachineService {

constructor(
  @InjectRepository (Machine) private readonly machineRepository: Repository<Machine>,
){}


  create(createMachineDto: CreateMachineDto) : Promise<Machine> {

    const m : Machine = new Machine();

    m.code = createMachineDto.code;
    m.libelle = createMachineDto.libelle;

    return this.machineRepository.save(m);
  }

  findAll() : Promise<Machine[]> {
    return this.machineRepository.find();
  }

  findOne(id: number) : Promise <Machine> {
    return this.machineRepository.findOneBy({id});
  }

  update(id: number, updateMachineDto: UpdateMachineDto) : Promise <Machine> {
   
    const m: Machine = new Machine();
    m.id = id;

    m.code = updateMachineDto.code;
    m.libelle = updateMachineDto.libelle;
    
    return this.machineRepository.save(m);
  }

  remove(id: number): Promise<{ affected?: number }> {
    return this.machineRepository.delete(id);
  }
}
