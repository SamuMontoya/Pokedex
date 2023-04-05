import { POKEMON_TYPE_COLORS } from "./constants";

const getPokeColor = (type) => POKEMON_TYPE_COLORS[type.toLowerCase()];

export default getPokeColor;
