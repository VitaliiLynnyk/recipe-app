import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToOne, JoinColumn, ManyToOne } from 'typeorm';

import { Recipe } from 'recipe/recipe.entity';
import { Nutrition } from '../nutrition/nutrition.entity';

@Entity()
export class RecipeNutrition extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: string;

  @OneToOne(() => Nutrition, { cascade: true })
  @JoinColumn()
  nutrition: Nutrition;

  @ManyToOne(type => Recipe, recipe => recipe.recipeNutritions)
  recipe: Recipe;
}
