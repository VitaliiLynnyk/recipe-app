import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from '../auth/auth.module';

import { RecipeService } from './recipe.service';
import { RecipeController } from './recipe.controller';
import { RecipeRepository } from './recipe.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([ RecipeRepository ]),
    AuthModule
  ],
  controllers: [
    RecipeController
  ],
  providers: [
    RecipeService
  ]
})
export class RecipeModule { }
