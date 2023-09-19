import { Controller, 
  Get,
   Post,
    Body,
     Patch,
      Param,
       Delete } from '@nestjs/common';
import { GammeService } from './gamme.service';
import { CreateGammeDto } from './dto/create-gamme.dto';
import { UpdateGammeDto } from './dto/update-gamme.dto';

@Controller('gamme')

export class GammeController {
constructor(private readonly gammeService: GammeService) {}

 // @Post('/addGamme/:analyseId')
 @Post('/addGamme')
 createGamme( @Body() createGammeDto: CreateGammeDto ,) {
    
    //console.log("eeee",createGammeDto);
    
    return this.gammeService.createGamme(createGammeDto );

  }


  /* @Post(':id/addAnalyse/:analyseId')
  async addanalyseToGamme( @Body() createGammeDto: CreateGammeDto, @Param('id') gammeId: number, @Param('analyseId') analyseId: number) {
    return this.gammeService.addanalyseToGamme(createGammeDto, gammeId, analyseId);
  }

 */
  /* @Post('/addGammeAnalyse')
  async createGammeAnalyse(@Body() createGammeAnalyse: {gammeId: number, analyseId: number}) {
   await this.gammeService.createGammeAnalyse(createGammeAnalyse);
  } */


  @Get('/allGamme')
  findAll() {
    return this.gammeService.findAllGamme();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gammeService.findOneGamme(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGammeDto: UpdateGammeDto) {
    return this.gammeService.updateGamme(+id, updateGammeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gammeService.removeGamme(+id);
  }
}
