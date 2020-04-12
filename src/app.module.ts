import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { typeOrmConfig } from './config/typeorm.config';

import { RecipeModule } from './recipe/recipe.module';
import { IngredientModule } from './ingredient/ingredient.module';
import { NutritionModule } from './nutrition/nutrition.module';
import { RecipeIngredientModule } from './recipe-ingredient/recipe-ingredient.module';
import { RecipeNutritionModule } from './recipe-nutrition/recipe-nutrition.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    RecipeModule,
    NutritionModule,
    IngredientModule,
    RecipeIngredientModule,
    RecipeNutritionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
