import { Header } from "./Header"
import { Recipes } from "./Recipes"
import { CardRecipe } from "./CardRecipe"
import  FavoritesRecipes  from "./FavoriteRecipes"
import {FavoriteRecipe} from "./FavoriteRecipe"
import arrozConLeche from '../assets/img/arroz-con-leche.jpg'
import cordonBlue from '../assets/img/cordon-blue.jpg'
import galloPinto from '../assets/img/gallo-pinto.jpg'
import pastaConCamarones from '../assets/img/pasta-camarones.jpg'
import tamal from '../assets/img/tamal.avif'
import 'https://kit.fontawesome.com/9aac1473ee.js'
import { useEffect, useState } from "react"
import { Recipe } from "../models/Recipe"
import { AxiosResponse } from 'axios';
import * as apiMeals from '../api/apiMeals'

interface HomeProps{

}

export const Home: React.FC<HomeProps> = ({}) =>{

    const[ListRecipes, setListRecipes] = useState<Recipe []> ([]);

    useEffect(()=>{
        document.title = "allrecipes";
        getListRecipes();
    },[])

    const getListRecipes = async() =>{

        try{
            const response: AxiosResponse = await apiMeals.getMealsByFirstLetter("b");
            setListRecipes(response.data.meals);
        } catch (error){
            console.log(error);
        }
    }

    const recipes = [
        {
            id: 1,
            name: 'Arroz con leche',
            img: arrozConLeche
        },
        {
            id: 2,
            name: 'Cordon Blue',
            img: cordonBlue
        },
        {
            id: 3,
            name: 'Tamal',
            img: tamal
        },
        {
            id: 4,
            name: 'Gallo pinto',
            img: galloPinto        },
        {
            id: 5,
            name: 'Pasta',
            img: pastaConCamarones
        }

    ];

    return (
        <div className="container">
        <h4 id="probar">recipe of the day</h4>
        <Header />
        <FavoritesRecipes>
            {recipes.map(recipe => 
            <div className="image" key={recipe.id}>
            <FavoriteRecipe name={recipe.name} alt={recipe.name} img={recipe.img}/>
            </div>
                                    )}
        </FavoritesRecipes>
        <Recipes>
            {ListRecipes.map(recipe =>
            <div className="card-recipe" key={recipe.idMeal}>
            <CardRecipe title={recipe.strMeal} alt={recipe.strMeal} img={recipe.strMealThumb}/>
            </div>
                    )}
        </Recipes>
        </div>
    )
}