
    import { Analyse } from "src/analyse/entities/analyse.entity";
    import { Gamme } from "src/gamme/entities/gamme.entity";
    import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
    

        @Entity()

        export class GammeAnalyse {

          @PrimaryGeneratedColumn()
          id: number;
        
          @ManyToOne(() => Gamme, gamme => gamme.analyses, { onDelete: 'CASCADE' })
          @JoinColumn({ name: 'gamme_id' })
          gamme: Gamme;
        
          @ManyToOne(() => Analyse, analyse => analyse.gammes, { onDelete: 'CASCADE' })
          @JoinColumn({ name: 'analyse_id' })
          analyse: Analyse;
    
        
    
    }
    











