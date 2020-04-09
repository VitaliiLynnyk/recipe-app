import { GetFilterIngredientsDto } from './dto/get.filter.ingredient.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Ingredient } from './ingredient.entity';
import { CreateIngredientDto } from './dto/create.ingredient.dto';
import { IngredientRepository } from './ingredient.repository';

@Injectable()
export class IngredientService {
  constructor(
    @InjectRepository(IngredientRepository)
    private ingredientRepository: IngredientRepository
  ) { }

  async getIngredients(getFilterIngredientsDto: GetFilterIngredientsDto): Promise<Ingredient[]> {
    return this.ingredientRepository.getIngredients(getFilterIngredientsDto);
  }

  async createIngredient(createIngredientDto: CreateIngredientDto): Promise<Ingredient> {
    return this.ingredientRepository.createIngredient(createIngredientDto);
  }
}
