import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RecipeNutritionService } from './recipe-nutrition.service';
import { RecipeNutritionController } from './recipe-nutrition.controller';
import { RecipeNutritionRepository } from './recipe.nutrition.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([ RecipeNutritionRepository ])
  ],
  controllers: [
    RecipeNutritionController
  ],
  providers: [
    RecipeNutritionService
  ]
})
export class RecipeNutritionModule { }
