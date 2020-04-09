import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Ingredient } from './ingredient.entity';
import { CreateIngredientDto } from './dto/create.ingredient.dto';
import { IngredientRepository } from './ingredient.repository';

import { UpdateIngredientDto } from './dto/update.ingredient.dto';
import { GetFilterIngredientsDto } from './dto/get.filter.ingredient.dto';

@Injectable()
export class IngredientService {
  constructor(
    @InjectRepository(IngredientRepository)
    private ingredientRepository: IngredientRepository
  ) { }

  async getIngredientById(id: number): Promise<Ingredient> {
    const found = await this.ingredientRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Ingredient with ID ${id} not found !`);
    }

    return found;
  }

  async getIngredients(getFilterIngredientsDto: GetFilterIngredientsDto): Promise<Ingredient[]> {
    return this.ingredientRepository.getIngredients(getFilterIngredientsDto);
  }

  async createIngredient(createIngredientDto: CreateIngredientDto): Promise<Ingredient> {
    return this.ingredientRepository.createIngredient(createIngredientDto);
  }

  async updateIngredientById(id: number, updateIngredientDto: UpdateIngredientDto): Promise<Ingredient> {
    const { name, imgUrl, category } = updateIngredientDto;
    const ingredient = await this.getIngredientById(id);
    ingredient.name = name ? name : ingredient.name;
    ingredient.imgUrl = imgUrl ? imgUrl : ingredient.imgUrl;
    ingredient.category = category ? category : ingredient.category;
    await ingredient.save();
    return ingredient;
  }

  async deleteIngredientById(id: number): Promise<void> {
    const result = await this.ingredientRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Ingredient with ID ${id} not found !`);
    }
  }
}
