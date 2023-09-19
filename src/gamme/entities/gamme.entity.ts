
import { Analyse } from 'src/analyse/entities/analyse.entity';
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Gamme {

 /** 
   * ce décorateur aidera à générer automatiquement l'identifiant de la table. 
   */ 

@PrimaryGeneratedColumn ()
id : number;

@Column({ type: 'varchar', length: 30 })
code: string;

@Column({ type: 'varchar', length: 30 })
libelle: string;

@Column({ type: 'varchar', length: 30 })
theme: string;

@Column({ type: 'varchar', length: 30 })
clt: string;

@Column({ type: 'varchar', length: 30 })
qt: string;

@Column({ type: 'varchar', length: 30 })
nbr: string;

@Column()
//@NotNull
//@TimeRangesporal(TemporalType.TIMESTAMP)
dateC: Date;
 

@Column({ type: 'varchar', length: 30 })
cmt: string;

	/************* @Relationship **********/

//@OneToMany(() => Analyse, (analyse) => analyse.gamme)
//analyses: Analyse[];

//@OneToMany(() => Analyse, (analyse) => analyse.gamme, {
//cascade: true,
//})
//analyses: Analyse[];


/* @ManyToMany(
  () => Analyse, 
  analyse => analyse.gammes, //optional
  {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'})
  @JoinTable({
    name: 'gamme_analyse',
    joinColumn: {
      name: 'gamme_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'analyse_id',
      referencedColumnName: 'id',
    },
  })
  analyses?: Analyse[]; */


/*   @ManyToMany(() => Analyse,  analyse => analyse.gammes) // Relation Many-to-Many vers Analyse
  @JoinTable()
  analyses: Analyse[];
 */

  @ManyToMany(() => Analyse,  analyse => analyse.gammes) // Relation Many-to-Many vers Role
  //@JoinTable()
  analyses: Analyse[];


}
