import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RecipeIngredientService } from './recipe-ingredient.service';
import { RecipeIngredientController } from './recipe-ingredient.controller';
import { RecipeIngredientRepository } from './recipe-ingredient.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([ RecipeIngredientRepository ])
  ],
  providers: [ RecipeIngredientService ],
  controllers: [ RecipeIngredientController ],
})
export class RecipeIngredientModule { }
