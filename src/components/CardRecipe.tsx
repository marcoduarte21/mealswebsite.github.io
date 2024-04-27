interface CardRecipeProps{
 img: string;
 alt: string;
 title: string;
 key: string;
}

export const CardRecipe: React.FC<CardRecipeProps> = ({img, alt, title, key}) =>{

    return(
        <div className="card-recipe" key={key}>
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