
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SousEnsemble {


/** 
   * ce décorateur aidera à générer automatiquement l'identifiant de la table. 
   */ 

@PrimaryGeneratedColumn ()
id : number;

@Column({ type: 'varchar', length: 30 })
code: string;

@Column({ type: 'varchar', length: 30 })
libelle: string;

}



