import { Repository, EntityRepository } from 'typeorm';

import { CreateRecipeDto } from './dto/create.recipe.dto';
import { GetFilterRecipeDto } from './dto/get.filter.recipe.dto';

import { Recipe } from './recipe.entity';

import { Ingredient } from 'ingredient/ingredient.entity';
import { RecipeIngredient } from 'recipe-ingredient/recipe-ingredient.entity';

@EntityRepository(Recipe)
export class RecipeRepository extends Repository<Recipe> {

  async getRecipes(getFilterRecipeDto: GetFilterRecipeDto): Promise<Recipe[]> {
    // const { search } = getFilterRecipeDto;
    // const query = this.createQueryBuilder('recipe');

    // if (search) {
    //   query.andWhere('(recipe.name LIKE :search OR recipe.description LIKE :search)', { search: `%${search}%` });
    // }

    // const recipes = await query.getMany();

    // return recipes;

    const res = await this
      .createQueryBuilder("recipe")
      .leftJoinAndSelect("recipe.recipeIngredients", "recipeIngredient")
      .getMany();
    return res;
  }

  async createRecipe(createRecipeDto: CreateRecipeDto): Promise<Recipe> {
    const { name, description, imgUrl, recipeIngrArr } = createRecipeDto;

    const recipe = new Recipe();
    recipe.name = name;
    recipe.description = description;
    recipe.imgUrl = imgUrl;

    console.log(recipeIngrArr);

    const recipeIngredientsID = recipeIngrArr.map(item => item.recipe_id);
    const ingredients = await Ingredient.findByIds(recipeIngredientsID);


    //const recipeIngr = new RecipeIngredient();
    // recipeIngr.ingredient = ingredients[ 0 ];
    // recipeIngr.quantity = "lol";

    // recipe.recipeIngredients = [ recipeIngr ];
    ingredients.forEach(async ingredient => {
      const recipeIngr = new RecipeIngredient();
      recipeIngr.quantity = recipeIngrArr.find(item => item.recipe_id === ingredient.id).quantity;
      recipeIngr.ingredient = ingredient;
      //await recipeIngr.ingredient.save();
      //recipeIngr.recipe = recipe;
      // await recipeIngr.ingredient.save();
      //      recipeIngr.save();
      recipe.recipeIngredients = recipe.recipeIngredients ? [ ...recipe.recipeIngredients, recipeIngr ] : [ recipeIngr ];
    })

    await recipe.save();
    return recipe;
  }
}
