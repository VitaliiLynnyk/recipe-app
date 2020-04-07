import { Repository, EntityRepository } from 'typeorm';

import { CreateRecipeDto } from './dto/create.recipe.dto';
import { GetFilterRecipeDto } from './dto/get.filter.recipe.dto';

import { Recipe } from './recipe.entity';
import { Ingredient } from 'ingredient/ingredient.entity';

@EntityRepository(Recipe)
export class RecipeRepository extends Repository<Recipe> {

  async getRecipes(getFilterRecipeDto: GetFilterRecipeDto): Promise<Recipe[]> {
    const { search } = getFilterRecipeDto;
    const query = this.createQueryBuilder('recipe');

    if (search) {
      query.andWhere('(recipe.name LIKE :search OR recipe.description LIKE :search)', { search: `%${search}%` });
    }

    const recipes = await query.getMany();

    return recipes;
  }

  async createRecipe(createRecipeDto: CreateRecipeDto): Promise<Recipe> {
    const { name, description, imgUrl, ingredientIds } = createRecipeDto;

    const recipe = new Recipe();
    recipe.name = name;
    recipe.description = description;
    recipe.imgUrl = imgUrl;

    const ingredients = await Ingredient.findByIds(ingredientIds);
    recipe.ingredients = [ ...ingredients ];
    await recipe.save();

    return recipe;
  }
}