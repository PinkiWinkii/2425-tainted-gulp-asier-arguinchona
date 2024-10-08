export default class Character{
    constructor(name, characterClass, health, magick, stamina, potions)
    {
        this.fullName = name + " the " + characterClass;
        this.health = health;
        this.magick = magick;
        this.stamina = stamina;
        this.potions = potions;
    }

    from(playerData, potions){
        return new Character(playerData.name, playerData.characterClass, playerData.health, playerData.magick, playerData.stamina, potions);
    }
}