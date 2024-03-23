import { useDeleteRecipe } from './useDeleteRecipe';
import { TrashIcon } from 'lucide-react';

import type { Recipe } from '@/types/Recipe';

type Props = {
  recipe: Recipe;
};

const RecipeItem = ({ recipe }: Props) => {
  const { deleteRecipe } = useDeleteRecipe(recipe);

  return (
    <li aria-labelledby={`title-${recipe.id}`}>
      <span id={`title-${recipe.id}`}>{recipe.title}</span>
      <button type="button" aria-labelledby={`title-${recipe.id}`}>
        <TrashIcon size={14} onClick={void deleteRecipe} />
      </button>
    </li>
  );
};

export default RecipeItem;
