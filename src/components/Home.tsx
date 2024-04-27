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
import { Helmet } from "react-helmet"
import 'https://kit.fontawesome.com/9aac1473ee.js'

interface HomeProps{

}

export const Home: React.FC<HomeProps> = ({}) =>{

    const recipes = [
        {
            name: 'Arroz con leche',
            img: arrozConLeche
        },
        {
            name: 'Cordon Blue',
            img: cordonBlue
        },
        {
            name: 'Tamal',
            img: tamal
        },
        {
            name: 'Gallo pinto',
            img: galloPinto        },
        {
            name: 'Pasta',
            img: pastaConCamarones
        }

    ];

    return (
        <div className="container">
            <Helmet>
                <title>allrecipes</title>
            </Helmet>
        <Header />
        <FavoritesRecipes>
            {recipes.map(recipe => 
            <FavoriteRecipe name={recipe.name} alt={recipe.name} img={recipe.img} key={recipe.name}/>
                                    )}
        </FavoritesRecipes>
        <Recipes>
            {recipes.map(recipe => 
            <CardRecipe title={recipe.name} alt={recipe.name} img={recipe.img} key={recipe.name}/>
                    )}
        </Recipes>
        </div>
    )
}