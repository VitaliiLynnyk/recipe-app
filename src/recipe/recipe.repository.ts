import { CreateRecipeDto } from './dto/create.recipe.dto';
import { Repository, EntityRepository } from 'typeorm';

import { Recipe } from './recipe.entity';

@EntityRepository(Recipe)
export class RecipeRepository extends Repository<Recipe> {
  async createRecipe(createRecipeDto: CreateRecipeDto): Promise<Recipe> {
    const { name, description, imgUrl } = createRecipeDto;

    const recipe = new Recipe();
    recipe.name = name;
    recipe.description = description;
    recipe.imgUrl = imgUrl;

    await recipe.save();

    return recipe;
  }
}