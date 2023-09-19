import { Injectable } from '@nestjs/common';
import { CreateGammeAnalyseDto } from './dto/create-gamme-analyse.dto';
import { UpdateGammeAnalyseDto } from './dto/update-gamme-analyse.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { GammeAnalyse } from './entities/gamme-analyse.entity';
import { Gamme } from 'src/gamme/entities/gamme.entity';
import { Repository } from 'typeorm';
import { Analyse } from 'src/analyse/entities/analyse.entity';

@Injectable()
export class GammeAnalyseService {



  constructor(
    @InjectRepository(GammeAnalyse)
    private readonly gammeAnalyseRepository: Repository<GammeAnalyse>,
    @InjectRepository(Gamme)
    private readonly gammeRepository: Repository<Gamme>,
    @InjectRepository(Analyse)
    private readonly analyseRepository: Repository<Analyse>,
  ) {}

  async saveGammeAnalyse(gammeId: number, analyseId: number): Promise<GammeAnalyse> {
    // Find the gamme and analyse by their IDs
    console.log(gammeId);
    console.log(analyseId);
    
    const gamme = await this.gammeRepository
      .createQueryBuilder('gamme')
      .where('gamme.id = :gammeId', { gammeId })
      .getOne();
      const analyse = await this.analyseRepository
      .createQueryBuilder('analyse')
      .where('analyse.id = :analyseId', { analyseId })
      .getOne();

    if (!gamme || !analyse) {
      throw new Error('Gamme or analyse not found');
    }

    // Create a new GammeAnalyse instance and associate it with thegamme and user
    const gammeAnalyse = new GammeAnalyse();
    gammeAnalyse.gamme = gamme;
    gammeAnalyse.analyse = analyse;

    return this.gammeAnalyseRepository.save(gammeAnalyse);
  }






  create(createGammeAnalyseDto: CreateGammeAnalyseDto) {
    return 'This action adds a new gammeAnalyse';
  }

  findAll() {
    return `This action returns all gammeAnalyse`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gammeAnalyse`;
  }

  update(id: number, updateGammeAnalyseDto: UpdateGammeAnalyseDto) {
    return `This action updates a #${id} gammeAnalyse`;
  }

  remove(id: number) {
    return `This action removes a #${id} gammeAnalyse`;
  }
}
