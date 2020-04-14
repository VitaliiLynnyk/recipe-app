import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { typeOrmConfig } from './config/typeorm.config';

import { AuthModule } from './auth/auth.module';
import { RecipeModule } from './recipe/recipe.module';
import { NutritionModule } from './nutrition/nutrition.module';
import { IngredientModule } from './ingredient/ingredient.module';
import { RecipeNutritionModule } from './recipe-nutrition/recipe-nutrition.module';
import { RecipeIngredientModule } from './recipe-ingredient/recipe-ingredient.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    RecipeModule,
    NutritionModule,
    IngredientModule,
    RecipeIngredientModule,
    RecipeNutritionModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
