import { Analyse } from "src/analyse/entities/analyse.entity";
import { Elemnt } from "src/elemnt/entities/elemnt.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class AnalyseElemnt {

@PrimaryGeneratedColumn()
id: number


@ManyToOne(() => Analyse,
analyse => analyse.elements, { onDelete: 'CASCADE' })
 @JoinColumn({name: 'analyse_id' })
 analyse: Analyse;

 @ManyToOne(() => Elemnt,
 elemnt => elemnt.analyses, { onDelete: 'CASCADE' }) 
@JoinColumn({ name :'element_id'})
elemnt: Elemnt;

}
