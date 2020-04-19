
class RecipeConverter {
  constructor(sampleDrink){
    this.drink = sampleDrink;
  }
  orangizeIngredients(){
    // check all key/value pairs, remove any null
    // if ingredient or measure with matching number, put into array
    // onj.keys
    //
    let keys = Object.keys(this.drink)

    return keys.reduce((acc, key) => {
      if(this.drink[key] !== null && key.match(/strIngredient/)) {
        let ingredientNum = key.split('strIngredient')[1]
        let ingredientName = this.drink[key]
        let ingredientMeasure = this.drink[`strMeasure${ingredientNum}`]
        let ingredientAndMeasure = `${ingredientName}: ${ingredientMeasure}`

        acc.push(ingredientAndMeasure)
      }
      return acc
    }, [])
  }
}

export default RecipeConverter;
