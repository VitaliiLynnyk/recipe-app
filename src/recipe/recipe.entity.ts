import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany } from 'typeorm';

import { Ingredient } from 'ingredient/ingredient.entity';

@Entity()
export class Recipe extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  imgUrl: string;

  @OneToMany(type => Ingredient, ingredient => ingredient.recipe)
  ingredients: Ingredient[];
}
