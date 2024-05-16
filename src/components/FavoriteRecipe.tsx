import { Link } from "react-router-dom";

interface FavoriteRecipeProps{
    alt: string;
    img: string;
    name: string;
}

export const FavoriteRecipe: React.FC<FavoriteRecipeProps> = ({alt, img, name}) =>{

    return(
                    <Link to={"#"}>
                    <img src={img} alt={alt} />
                    <h6>{name}</h6>
                    </Link>
    )
}