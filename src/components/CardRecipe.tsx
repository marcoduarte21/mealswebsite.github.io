interface CardRecipeProps{
 img: string;
 alt: string;
 title: string;
}

export const CardRecipe: React.FC<CardRecipeProps> = ({img, alt, title}) =>{

    return(
        <div className="card-recipe">
                <a href="#">
                <img src={img} alt={alt} />
            <div className="description">
                <h3>{title}</h3>
                <button className="favorite"><i className="fa-regular fa-star"></i></button>
            </div>
                </a>
        </div>
    )
}