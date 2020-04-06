import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Recipe } from './recipe.entity';
import { RecipeRepository } from './recipe.repository';

@Injectable()
export class RecipeService {
  constructor(
    @InjectRepository(RecipeRepository)
    private recipeRepository: RecipeRepository
  ) { }

  async getRecipeById(id: number): Promise<Recipe> {
    const found = await this.recipeRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Recipe with ${id} not found !`);
    }

    return found;
  }
}
