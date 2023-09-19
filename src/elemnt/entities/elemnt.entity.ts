import { Analyse } from "src/analyse/entities/analyse.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Elemnt {
  
    
@PrimaryGeneratedColumn()
    id: number;
    @Column({ type: 'varchar', length: 30 })
    code: string;
    @Column({ type: 'varchar', length: 30 })
    libelle: string;

    @ManyToMany(() => Analyse, 
    analyse => analyse.elements) // Relation Many-to-Many vers Analyse
    //@JoinTable()
    analyses: Analyse[]; 
  


}
