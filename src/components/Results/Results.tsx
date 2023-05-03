import { Link } from 'react-router-dom';
import styles from './Results.module.scss';
import ResultCard, { SearchedRecipe } from '../ResultCards/ResultCard';

const recipes: SearchedRecipe[] = [
  {
    name: 'name',
    description: '',
    image: '',
    likes: '',
    missedIngredients: [''],
    link: ''
  },
  {
    name: 'name',
    description: '',
    image: '',
    likes: '',
    missedIngredients: [''],
    link: ''
  },
  {
    name: 'name',
    description: '',
    image: '',
    likes: '',
    missedIngredients: [''],
    link: ''
  },
  {
    name: 'name',
    description: '',
    image: '',
    likes: '',
    missedIngredients: [''],
    link: ''
  },
  {
    name: 'name',
    description: '',
    image: '',
    likes: '',
    missedIngredients: [''],
    link: ''
  },
  {
    name: 'name',
    description: '',
    image: '',
    likes: '',
    missedIngredients: [''],
    link: ''
  },
  {
    name: 'name',
    description: '',
    image: '',
    likes: '',
    missedIngredients: [''],
    link: ''
  },
  {
    name: 'name',
    description: '',
    image: '',
    likes: '',
    missedIngredients: [''],
    link: ''
  },
  {
    name: 'name',
    description: '',
    image: '',
    likes: '',
    missedIngredients: [''],
    link: ''
  }
];

const Results = () => {
  return (
    <>
      <section className={styles.result_container}>
        <div className={styles.secondary_nav_container}>
          <Link className={styles.back_link} to="/">
            <button className={styles.back_button}>
              <img src="../../../public/left-arrow.png" alt="back" />
            </button>
          </Link>

          <h1 className={styles.results_header_text}>44 Results</h1>
        </div>

        <section className={styles.result_cards_container}>
          {recipes.map((recipe) => {
            return <ResultCard key={recipe.name} />;
          })}
        </section>
      </section>
    </>
  );
};

export default Results;
