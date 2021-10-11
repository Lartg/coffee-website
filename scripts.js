import { recipeDivs } from "./recipes.js"

//targets for onclick event
const dripSelector = document.querySelector("#drip-desc")
const fpSelector = document.querySelector("#fp-desc")
const coldbrewSelector = document.querySelector("#cold-brew")
const pouroverSelector = document.querySelector("#pourover-desc")

//output for function
const recipe = document.querySelector("#recipe")
//event listener
document.querySelector("body").addEventListener("click", changeRecipe)

//event function
function changeRecipe(e){
  if(e.target && e.target == dripSelector){
    recipe.innerHTML = recipeDivs[0]
  }
  else if(e.target && e.target == fpSelector){
    recipe.innerHTML = recipeDivs[1]
  }
  else if(e.target && e.target == coldbrewSelector){
    recipe.innerHTML = recipeDivs[2]
  }
  else if(e.target && e.target == pouroverSelector){
    recipe.innerHTML = recipeDivs[3]
  }
}
