import { Repository, EntityRepository } from 'typeorm';

import { RecipeIngredient } from './recipe-ingredient.entity';

@EntityRepository(RecipeIngredient)
export class RecipeIngredientRepository extends Repository<RecipeIngredient> { }
