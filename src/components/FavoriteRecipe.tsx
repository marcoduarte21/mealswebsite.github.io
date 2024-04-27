interface FavoriteRecipeProps{
    alt: string;
    img: string;
    name: string;
    key: string;
}

export const FavoriteRecipe: React.FC<FavoriteRecipeProps> = ({alt, img, name, key}) =>{

    return(
                <div className="image" key={key}>
                    <a href="#">
                    <img src={img} alt={alt} />
                    <h6>{name}</h6>
                    </a>
                </div>
    )
}