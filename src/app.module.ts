import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { typeOrmConfig } from './config/typeorm.config';

import { RecipeModule } from './recipe/recipe.module';
import { IngredientModule } from './ingredient/ingredient.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    RecipeModule,
    IngredientModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
