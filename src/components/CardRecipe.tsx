import { Link } from "react-router-dom";

interface CardRecipeProps{
 img: string;
 alt: string;
 title: string;
}

export const CardRecipe: React.FC<CardRecipeProps> = ({img, alt, title}) =>{

    return(
                <Link to={"#"}>
                <img src={img} alt={alt} />
            <div className="description">
                <h3>{title}</h3>
                <div className="stars">
                <button className="favorite"><i className="fa-regular fa-star"></i></button>
                <button className="favorite"><i className="fa-regular fa-star"></i></button>
                <button className="favorite"><i className="fa-regular fa-star"></i></button>
                <button className="favorite"><i className="fa-regular fa-star"></i></button>
                <button className="favorite"><i className="fa-regular fa-star"></i></button>
            </div>
            </div>
                </Link>
    )
}