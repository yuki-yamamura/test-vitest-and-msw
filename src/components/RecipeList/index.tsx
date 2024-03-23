import RecipeItem from './RecipeItem';
import { useRecipes } from './useRecipes';

const RecipeList = () => {
  const { recipes, isLoading } = useRecipes();

  if (isLoading) {
    <div>loading...</div>;
  }

  return (
    <ul>
      {recipes.map((recipe) => (
        <RecipeItem recipe={recipe} key={recipe.id} />
      ))}
    </ul>
  );
};

export default RecipeList;
