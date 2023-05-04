import { Link } from 'react-router-dom';
import styles from './Results.module.scss';
import ResultCard from '../ResultCards/ResultCard';
import { useEffect, useState } from 'react';
import { getRecipes } from '../../services';
import { SearchedRecipe } from '../../models/searchedRecipe';

// const recipes: SearchedRecipe[] = [
//   {
//     label: 'name',
//     yield: 4,
//     image: '',
//     cuisineType: [''],
//     mealType: [''],
//     url: '',
//     totalTime: 8
//   },
//   {
//     label: 'name',
//     yield: 4,
//     image: '',
//     cuisineType: [''],
//     mealType: [''],
//     url: '',
//     totalTime: 8
//   },
//   {
//     label: 'name',
//     yield: 4,
//     image: '',
//     cuisineType: [''],
//     mealType: [''],
//     url: '',
//     totalTime: 8
//   },
//   {
//     label: 'name',
//     yield: 4,
//     image: '',
//     cuisineType: [''],
//     mealType: [''],
//     url: '',
//     totalTime: 8
//   },
//   {
//     label: 'name',
//     yield: 4,
//     image: '',
//     cuisineType: [''],
//     mealType: [''],
//     url: '',
//     totalTime: 8
//   },
//   {
//     label: 'name',
//     yield: 4,
//     image: '',
//     cuisineType: [''],
//     mealType: [''],
//     url: '',
//     totalTime: 8
//   },
//   {
//     label: 'name',
//     yield: 4,
//     image: '',
//     cuisineType: [''],
//     mealType: [''],
//     url: '',
//     totalTime: 8
//   },
//   {
//     label: 'name',
//     yield: 4,
//     image: '',
//     cuisineType: [''],
//     mealType: [''],
//     url: '',
//     totalTime: 8
//   },
//   {
//     label: 'name',
//     yield: 4,
//     image: '',
//     cuisineType: [''],
//     mealType: [''],
//     url: '',
//     totalTime: 8
//   }
// ];

const Results = () => {
  const [recipeResults, setRecipeResults] = useState<SearchedRecipe[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const recipes = async () => {
      // await getRecipes().then((recipeResults) => {
      //   isLoading(false);
      //   setRecipeResults(recipeResults);
      // });
      console.log('Got Recipes');
      setIsLoading(false);
    };

    setTimeout(() => {
      recipes();
    }, 5000);

    // recipes();
  }, []);

  return (
    <>
      <section className={styles.result_container}>
        <div className={styles.secondary_nav_container}>
          <Link className={styles.back_link} to="/">
            <button className={styles.back_button}>
              <img src="/left-arrow.png" alt="back" />
            </button>
          </Link>

          <h1 className={styles.results_header_text}>
            {recipeResults.length} Results
          </h1>
        </div>

        {isLoading ? (
          <div className={styles.loading_container}>
            <img src="/loading-indicator.gif" alt="" />
          </div>
        ) : recipeResults.length > 0 ? (
          <section className={styles.result_cards_container}>
            {recipeResults.map((recipe) => {
              return <ResultCard key={recipe.label} recipe={recipe} />;
            })}
          </section>
        ) : (
          <section className={styles.no_results}>
            <img src="/cancel.png" alt="" />
            <p>Sorry, we could not find any results.</p>
          </section>
        )}
      </section>
    </>
  );
};

export default Results;
