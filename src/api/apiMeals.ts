import axios from "axios";
import {Recipe} from "../models/Recipe";

const API = 'https://www.themealdb.com/api/json/v1/1/';


export const getMealsByFirstLetter = async(letter: string) => {

    return axios.get<Recipe []>(`${API}search.php?f=${letter}`);
}