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
}
