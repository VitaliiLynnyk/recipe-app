import { Repository, EntityRepository } from 'typeorm';

import { RecipeNutrition } from './recipe-nutrition.entity';

@EntityRepository(RecipeNutrition)
export class RecipeNutritionRepository extends Repository<RecipeNutrition> { }
