import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany } from 'typeorm';

import { RecipeNutrition } from '../recipe-nutrition/recipe-nutrition.entity';
import { RecipeIngredient } from '../recipe-ingredient/recipe-ingredient.entity';

import { Difficulty } from 'ingredient/enums/dificulty.enum';
import { RecipeCategory } from 'ingredient/enums/category.enum';

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

  @Column()
  difficulty: Difficulty;

  @Column()
  prepTime: string;

  @Column()
  category: RecipeCategory;

  @Column({ type: "text", array: true, nullable: true })
  instruction: string[] = [];

  @OneToMany(type => RecipeIngredient, recipeIngredient => recipeIngredient.recipe, { cascade: true })
  recipeIngredients: RecipeIngredient[];

  @OneToMany(type => RecipeNutrition, recipeNutrition => recipeNutrition.recipe, { cascade: true })
  recipeNutritions: RecipeNutrition[];
}
