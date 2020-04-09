import { RecipeIngredient } from './../recipe-ingredient/recipe-ingredient.entity';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany } from 'typeorm';

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

  @OneToMany(type => RecipeIngredient, recipeIngredient => recipeIngredient.recipe, { cascade: true })
  recipeIngredients: RecipeIngredient[];
}
