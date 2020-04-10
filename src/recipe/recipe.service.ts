import { UpdateRecipeDto } from './dto/update.recipe.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateRecipeDto } from './dto/create.recipe.dto';
import { GetFilterRecipeDto } from './dto/get.filter.recipe.dto';

import { Recipe } from './recipe.entity';
import { RecipeRepository } from './recipe.repository';

@Injectable()
export class RecipeService {
  constructor(
    @InjectRepository(RecipeRepository)
    private recipeRepository: RecipeRepository
  ) { }

  async getRecipes(getFilterRecipeDto: GetFilterRecipeDto): Promise<Recipe[]> {
    return this.recipeRepository.getRecipes(getFilterRecipeDto);
  }

  async getRecipeById(id: number): Promise<Recipe> {
    const found = await this.recipeRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Recipe with ${id} not found !`);
    }

    return found;
  }

  async createRecipe(createRecipeDto: CreateRecipeDto): Promise<Recipe> {
    return this.recipeRepository.createRecipe(createRecipeDto);
  }

  async updateRecipe(id: number, updateRecipeDto: UpdateRecipeDto): Promise<Recipe> {
    const { name, description, imgUrl } = updateRecipeDto;
    const recipe = await this.getRecipeById(id);
    recipe.name = name ? name : recipe.name;
    recipe.description = description ? description : recipe.description;
    recipe.imgUrl = imgUrl ? imgUrl : recipe.imgUrl;

    await recipe.save();
    return recipe;
  }

  async deleteRecipe(id: number): Promise<void> {
    const result = await this.recipeRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Recipe with ${id} not found !`);
    }
  }
}
