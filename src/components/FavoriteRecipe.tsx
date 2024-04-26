interface FavoriteRecipeProps{
    alt: string;
    img: string;
    name: string;
}

export const FavoriteRecipe: React.FC<FavoriteRecipeProps> = ({alt, img, name}) =>{

    return(
                <div className="image first-image">
                    <a href="#">
                    <img src={img} alt={alt} />
                    <h6>{name}</h6>
                    </a>
                </div>
    )
}