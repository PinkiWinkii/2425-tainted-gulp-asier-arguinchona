import { getData } from "./service.mjs";
import Ingredients from "./ingredients.mjs";
import Cauldron from "./cauldron.mjs";
import { log } from "console";

const execute = async () => {
    try
    {
        const data = await getData();
        //console.log(data);
        
        //Creamos los ingredientes
        const ingredients = Ingredients.load(data);

        const cauldron = new Cauldron(ingredients);

        //console.log(cauldron.ingredients);
        
        const potion1 = cauldron.createPotion("Bear Claws", "Bee");
        //console.log(potion1);
        
        showPotion(potion1);

        const potion2 = cauldron.createPotion("Chicken's Egg", "Chaurus Eggs");
        showPotion(potion2);

        const potion3 = cauldron.createPotion("Chaurus Eggs", "Bleeding Crown");
        showPotion(potion3);

        const potion4 = cauldron.createPotion("Nightshade", "Ectoplasm");
        showPotion(potion4);

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