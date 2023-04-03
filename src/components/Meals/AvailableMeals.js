import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Anchovy',
    description: 'A Black Sea speciality!',
    price: 16.99,
  },
  {
    id: 'm3',
    name: 'Sea Bream',
    description: 'Indispensable flavour',
    price: 17.99,
  },
  {
    id: 'm4',
    name: 'Salmon',
    description: 'Fleshy and fluffy',
    price: 21.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map(meal =>
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}>
    </MealItem>);

  return <section className={classes.meals}>
    <Card>
      <ul>
        {mealsList}
      </ul>
    </Card>
  </section>

}

export default AvailableMeals;