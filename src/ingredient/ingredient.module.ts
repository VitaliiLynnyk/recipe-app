import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { IngredientService } from './ingredient.service';
import { IngredientController } from './ingredient.controller';
import { IngredientRepository } from './ingredient.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([ IngredientRepository ])
  ],
  controllers: [
    IngredientController
  ],
  providers: [
    IngredientService
  ]
})
export class IngredientModule { }
