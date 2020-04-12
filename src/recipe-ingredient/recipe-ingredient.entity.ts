import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne } from 'typeorm';

import { Recipe } from 'recipe/recipe.entity';
import { Ingredient } from 'ingredient/ingredient.entity';

@Entity()
export class RecipeIngredient extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: string;

  @ManyToOne(() => Ingredient, { cascade: true })
  ingredient: Ingredient;

  @ManyToOne(type => Recipe, recipe => recipe.recipeIngredients)
  recipe: Recipe;
}
