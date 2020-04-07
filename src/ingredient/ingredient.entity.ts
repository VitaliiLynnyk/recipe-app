import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne } from 'typeorm';

import { Category } from './enums/category.enum';

import { Recipe } from '../recipe/recipe.entity';

@Entity()
export class Ingredient extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  imgUrl: string;

  @Column()
  category: Category;

  @ManyToOne(type => Recipe, recipe => recipe.ingredients)
  recipe: Recipe;
}
