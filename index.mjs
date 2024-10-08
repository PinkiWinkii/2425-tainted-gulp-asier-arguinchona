import { getCharactersData, getIngredientsData } from "./service.mjs";
import Ingredients from "./ingredients.mjs";
import Cauldron from "./cauldron.mjs";
import { log } from "console";
import PotionBag from "./PotionBag.mjs";
import Character from "./character.mjs";

const execute = async () => {
    try
    {
        const ingredientsData = await getIngredientsData();
        const playersData = await getCharactersData();
        //console.log(ingredientsData);
        //console.log(playersData.players[0]);

        const joseph = playersData.players[0];

        const playersIngredientsPouch = playersData.players[0].pouch_red;
        
        
        //Creamos los ingredientes
        const ingredients = Ingredients.load(ingredientsData);
        
        const cauldron = new Cauldron(ingredients);

        const potionBag = PotionBag.create(playersIngredientsPouch, cauldron);
        //console.log(potionBag);

        const josephCharacter = Character.from(playersData.players[0], potionBag.potions);
        
        console.log("POTIONS OF THE BAG");
        console.log(`--------------------------------`);
        showPotions(potionBag.potions)
        
        console.log('NEW CONTESTANT APPEARS');
        console.log(`--------------------------------`);
        showCharacter(josephCharacter);
        josephCharacter.drinkEmAll();





        //showIngredients(ingredients.ingredients);
    }
    catch
    {
        //ERROR
    }
}

function showIngredients(ingredients)
{
    for(let i = 0; i < ingredients.length; i++)
    {
        console.log("Ingredient: " + ingredients[i].name + " Effects: " + JSON.stringify(ingredients[i].effects));
    }
}

function showCharacter(character)
{
    console.log(`${character.fullName}`);
    console.log(`--------------------------------`);
    console.log(`Health:        ${character.health}`);
    console.log(`Magick:        ${character.magick}`);
    console.log(`Stamina:       ${character.stamina}`);
    showPotionsNames(character.potions);
    console.log(`--------------------------------`);
}

function showPotionsNames(potions)
{
    for(let i = 0; i < potions.length; i++)
    {
        console.log("Potion " + (i+1) + ": " + potions[i].name);
        
    }
}

function showPotions(potions)
{
    for(let i = 0; i < potions.length; i++)
    {
        showPotion(potions[i])
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