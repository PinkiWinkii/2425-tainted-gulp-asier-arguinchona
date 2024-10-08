import { getCharactersData, getIngredientsData } from "./service.mjs";
import Ingredients from "./ingredients.mjs";
import Cauldron from "./cauldron.mjs";
import { log } from "console";
import PotionBag from "./PotionBag.mjs";

const execute = async () => {
    try
    {
        const ingredientsData = await getIngredientsData();
        const playersData = await getCharactersData();
        // console.log(ingredientsData);
        console.log(playersData.players[0].pouch_red);

        const playersIngredientsPouch = playersData.players[0].pouch_red;
        
        
        //Creamos los ingredientes
        const ingredients = Ingredients.load(ingredientsData);
        
        const cauldron = new Cauldron(ingredients);

        const potionBag = PotionBag.create(playersIngredientsPouch, cauldron);
        console.log(potionBag);
        
        const potion1 = cauldron.createPotion("Bear Claws", "Bee");
        //console.log(potion1);
        
        //showPotion(potion1);




        //showIngredients(ingredients.ingredients);
    }
    catch
    {
        //ERROR
    }
}

function showIngredients(ingredients)
{
    console.log("ENTERS FUNCTION");
    
    for(let i = 0; i < ingredients.length; i++)
    {
        console.log("Ingredient: " + ingredients[i].name + " Effects: " + JSON.stringify(ingredients[i].effects));
    }
}

function showPotion(potion){
    //console.log("CREATED POTION"); 
    console.log(`${potion.name}`);
    console.log(`Value:         ${potion.value}`);
    console.log(`Weight:        ${potion.weight}`);
    console.log(`Time:          ${potion.time}`);
    console.log(`--------------------------------`);
}
execute();