import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Fresh Fishes and Fast Delivery</h2>
      <p>
        Wine gets better with age. Fish NOT so much.
      </p>
      <p>
        If it isn't fresh, it isn't legal.
      </p>
    </section>
  );
};

export default MealsSummary;