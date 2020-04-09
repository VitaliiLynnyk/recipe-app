import { GetFilterIngredientsDto } from './dto/get.filter.ingredient.dto';
import { Repository, EntityRepository } from 'typeorm';

import { Ingredient } from './ingredient.entity';
import { CreateIngredientDto } from './dto/create.ingredient.dto';

@EntityRepository(Ingredient)
export class IngredientRepository extends Repository<Ingredient> {

  async createIngredient(createIngredientDto: CreateIngredientDto): Promise<Ingredient> {
    const { name, imgUrl, category } = createIngredientDto;

    const ingredient = new Ingredient();
    ingredient.name = name;
    ingredient.imgUrl = imgUrl;
    ingredient.category = category;

    await ingredient.save();

    return ingredient;
  }

  async getIngredients(getFilterIngredientsDto: GetFilterIngredientsDto): Promise<Ingredient[]> {
    const { search, category } = getFilterIngredientsDto;
    const query = this.createQueryBuilder('ingredient');

    if (search) {
      query.andWhere('(ingredient.name LIKE :search)', { search: `%${search}%` });
    }

    if (category) {
      query.andWhere('(ingredient.category LIKE :category)', { category: `%${category}%` });
    }

    const ingredients = await query.getMany();
    return ingredients;
  }
}
