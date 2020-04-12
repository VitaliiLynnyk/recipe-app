import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne } from 'typeorm';

import { Recipe } from 'recipe/recipe.entity';
import { Nutrition } from '../nutrition/nutrition.entity';

@Entity()
export class RecipeNutrition extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: string;

  @ManyToOne(() => Nutrition, { cascade: true })
  nutrition: Nutrition;

  @ManyToOne(type => Recipe, recipe => recipe.recipeNutritions)
  recipe: Recipe;
}
