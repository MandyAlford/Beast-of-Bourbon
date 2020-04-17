
export const fetchDrinks = () => {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Bourbon`)
    .then((response) => response.json())
}
