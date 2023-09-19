import { Injectable } from '@nestjs/common';
import { CreateAnalyseElemntDto } from './dto/create-analyse-elemnt.dto';
import { UpdateAnalyseElemntDto } from './dto/update-analyse-elemnt.dto';
import { AnalyseElemnt } from './entities/analyse-elemnt.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Analyse } from 'src/analyse/entities/analyse.entity';
import { Repository } from 'typeorm';
import { Elemnt } from 'src/elemnt/entities/elemnt.entity';

@Injectable()
export class AnalyseElemntService {

  constructor(
    @InjectRepository(AnalyseElemnt)
    private readonly analyseElemntService: Repository<AnalyseElemnt>,
    @InjectRepository(Analyse)
    private readonly analyseRepository: Repository<Analyse>,
    @InjectRepository(Elemnt)
    private readonly elementRepository: Repository<Elemnt>,
  ) {}

  
  async saveAnalyseElemnt(analyseId: number, elemntId: number): Promise<AnalyseElemnt> {
    // Find the gamme and analyse by their IDs
    console.log(analyseId);
    
    const analyse = await this.analyseRepository
      .createQueryBuilder('analyse')
      .where('analyse.id = :analyseId', { analyseId })
      .getOne();
      const elemnt = await this.elementRepository
      .createQueryBuilder('elemnt')
      .where('elemnt.id = :elemntId', { elemntId })
      .getOne();

    if (!analyse || !elemnt) {
      throw new Error('analyse or element not found');
    }

    // Create a new analyseElemnt instance and associate it with the analyse and user
    const analyseElemnt = new AnalyseElemnt();

    analyseElemnt.analyse = analyse;
    analyseElemnt.elemnt = elemnt;

    return this.analyseElemntService.save(analyseElemnt);
  }



  create(createAnalyseElemntDto: CreateAnalyseElemntDto) {
    return 'This action adds a new analyseElemnt';
  }

  findAll() {
    return `This action returns all analyseElemnt`;
  }

  findOne(id: number) {
    return `This action returns a #${id} analyseElemnt`;
  }

  update(id: number, updateAnalyseElemntDto: UpdateAnalyseElemntDto) {
    return `This action updates a #${id} analyseElemnt`;
  }

  remove(id: number) {
    return `This action removes a #${id} analyseElemnt`;
  }
}
