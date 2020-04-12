import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { RecipeNutritionRepository } from './recipe.nutrition.repository';

@Injectable()
export class RecipeNutritionService {
  constructor(
    @InjectRepository(RecipeNutritionRepository)
    private recipeNutrRepo: RecipeNutritionRepository
  ) { }
}
