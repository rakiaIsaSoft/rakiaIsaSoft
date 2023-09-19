import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateGammeDto } from './dto/create-gamme.dto';
import { UpdateGammeDto } from './dto/update-gamme.dto';
import { Gamme } from './entities/gamme.entity';
//import { GammeAnalyse } from 'src/gamme-analyse/gamme-analyse';


@Injectable()
export class GammeService {
  /** 
    * Ici, nous avons utilisé l'approche du mappeur de données pour ce tutoriel, c'est pourquoi nous 
    * injectons le référentiel ici. Une autre approche peut être les enregistrements actifs. 
    */


  constructor(
    @InjectRepository(Gamme)
    private readonly gammeRepository: Repository<Gamme>,

    //inject GammeAnalyse
    //@InjectRepository(GammeAnalyse)
    //private readonly gammeAnalyseRepository: Repository<GammeAnalyse>,



  ) { }

  /** 
 * cette fonction est utilisée pour créer un gamme dans l'entité gamme. 
 * @param createGammeDto ce sera le type de createGammeDto dans lequel 
 * nous avons défini quelles sont les clés que nous attendons du corps 
 * @returns promise of gamme
 */

  createGamme(createGammeDto: CreateGammeDto): Promise<Gamme> {
    console.log(createGammeDto);

    const gamme: Gamme = new Gamme();
    gamme.code = createGammeDto.code;
    gamme.libelle = createGammeDto.libelle;
    gamme.theme = createGammeDto.theme;
    gamme.clt = createGammeDto.clt;
    gamme.qt = createGammeDto.qt;
    gamme.nbr = createGammeDto.nbr;
    gamme.dateC = createGammeDto.dateC;
    gamme.cmt = createGammeDto.cmt;

    return this.gammeRepository.save(gamme);
  }


/////////////////

  /* async addanalyseToGamme(createGammeDto: CreateGammeDto , gammeId: number, analyseId: number ): Promise<void> {
    const gamme = await this.gammeRepository.findOne({ where: { id: addanalyseToGamme.gammeId } });
    if (!gamme) {
      throw new NotFoundException()
    }

    await this.gammeRepository.save(gamme)

  }
 */


  /** 
  * cette fonction est utilisée pour obtenir toute la liste des gammes
  * @returns promise of array of gammes 
  */

  findAllGamme(): Promise<Gamme[]> {
    return this.gammeRepository.find();
  }

  /** 
 * cette fonction permet de récupérer les données de gamme dont l'id est passé en paramètre 
 * @paramid est un type de nombre, qui représente l'identifiant de la gamme. 
 * @returns promise of gamme
 */

  findOneGamme(id: number): Promise<Gamme> {
    return this.gammeRepository.findOneBy({ id });
  }

  /** 
  * cette fonction est utilisée pour mettre à jour un utilisateur spécifique dont l'identifiant est transmis dans 
  * le paramètre avec les données mises à jour transmises 
  * @param id est un type de nombre, qui représente l'identifiant de l'utilisateur. 
  * @param updateUserDto c'est un type partiel de createUserDto. 
  *@returns promise of udpate user 
  */

  updateGamme(id: number, updateGammeDto: UpdateGammeDto): Promise<Gamme> {
    const gamme: Gamme = new Gamme();

    gamme.id = id;
    gamme.code = updateGammeDto.code;
    gamme.libelle = updateGammeDto.libelle;
    gamme.theme = updateGammeDto.theme;
    gamme.clt = updateGammeDto.clt;
    gamme.qt = updateGammeDto.qt;
    gamme.nbr = updateGammeDto.nbr;
    gamme.dateC = updateGammeDto.dateC;
    gamme.analyses = updateGammeDto.analyses;
    gamme.cmt = updateGammeDto.cmt;
    return this.gammeRepository.save(gamme);
  }


  /** 
   * cette fonction est utilisée pour supprimer ou supprimer un utilisateur de la base de données. 
   * @param id est le type de nombre, qui représente l'id de l'utilisateur 
   * @returns nombre de lignes supprimées ou affectées 
   */


  removeGamme(id: number): Promise<{ affected?: number }> {
    return this.gammeRepository.delete(id);
  }
}
