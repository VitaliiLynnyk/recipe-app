import { Recipe } from 'recipe/recipe.entity';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, OneToOne, JoinColumn } from 'typeorm';

import { Ingredient } from 'ingredient/ingredient.entity';

@Entity()
export class RecipeIngredient extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: string;

  @Column(type => Ingredient)
  ingredient: Ingredient;

  @ManyToOne(type => Recipe, recipe => recipe.recipeIngredients)
  recipe: Recipe;
}
