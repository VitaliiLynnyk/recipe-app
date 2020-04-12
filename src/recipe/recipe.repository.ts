import { Repository, EntityRepository } from 'typeorm';

import { CreateRecipeDto } from './dto/create.recipe.dto';
import { GetFilterRecipeDto } from './dto/get.filter.recipe.dto';

import { Recipe } from './recipe.entity';

import { Ingredient } from 'ingredient/ingredient.entity';
import { RecipeIngredient } from 'recipe-ingredient/recipe-ingredient.entity';

@EntityRepository(Recipe)
export class RecipeRepository extends Repository<Recipe> {

  async getRecipes(getFilterRecipeDto: GetFilterRecipeDto): Promise<Recipe[]> {
    const { search } = getFilterRecipeDto;
    const query = this.createQueryBuilder('recipe').leftJoinAndSelect('recipe.recipeIngredients', 'recipeIngredient').leftJoinAndSelect('recipeIngredient.ingredient', 'ingredient');

    if (search) {
      query.andWhere('(recipe.name LIKE :search OR recipe.description LIKE :search)', { search: `%${search}%` });
    }

    const recipes = await query.getMany();
    return recipes;
  }

  async createRecipe(createRecipeDto: CreateRecipeDto): Promise<Recipe> {
    const { name, description, imgUrl, recipeIngrArr, instruction } = createRecipeDto;

    const recipe = new Recipe();
    recipe.name = name;
    recipe.description = description;
    recipe.imgUrl = imgUrl;
    recipe.instruction = recipe.instruction.length ? [ ...recipe.instruction, ...instruction ] : [ ...instruction ];

    const recipeIngredientsID = recipeIngrArr.map(item => item.recipeId);
    const ingredients = await Ingredient.findByIds(recipeIngredientsID);

    ingredients.forEach(ingredient => {
      const recipeIngr = new RecipeIngredient();
      recipeIngr.quantity = recipeIngrArr.find(item => item.recipeId === ingredient.id).quantity;
      recipeIngr.ingredient = ingredient;
      recipe.recipeIngredients = recipe.recipeIngredients.length ? [ ...recipe.recipeIngredients, recipeIngr ] : [ recipeIngr ];
    })

    await recipe.save();
    return recipe;
  }
}
