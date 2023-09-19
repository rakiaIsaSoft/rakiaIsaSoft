
import { Elemnt } from 'src/elemnt/entities/elemnt.entity';
import { Gamme } from 'src/gamme/entities/gamme.entity';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Analyse {

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

//@ManyToOne ( () => Gamme , (gamme) => gamme.analyses) 
//gamme: Gamme;

//@ManyToMany (() => Gamme)
//@JoinColumn()
//gamme: Gamme


/*  @ManyToMany(() => Gamme,
    gamme => gamme.analyses,
    {onDelete: 'NO ACTION', onUpdate: 'NO ACTION',},
  )
  gammes: Gamme[];  */


  @ManyToMany(() => Gamme, 
  gamme => gamme.analyses) // Relation Many-to-Many vers Gamme
  //@JoinTable()
  gammes: Gamme[]; 

  @ManyToMany(() => Elemnt, 
  elemnt => elemnt.analyses) // Relation Many-to-Many vers Gamme
  //@JoinTable()
  elements: Elemnt[]; 

}


