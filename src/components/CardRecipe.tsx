import { Link } from "react-router-dom";

interface CardRecipeProps{
 img: string;
 alt: string;
 title: string;
}

export const CardRecipe: React.FC<CardRecipeProps> = ({img, alt, title}) =>{

    function handleClick(e:any){

            if (e.target.classList.contains('fa-regular')) {
                e.target.classList.remove('fa-regular');
                e.target.classList.add('fa-solid');
            } else {
                e.target.classList.remove('fa-solid');
                e.target.classList.add('fa-regular');
            }
    }

    return(
                <Link to={"#"}>
                <img src={img} alt={alt} />
                    <div className="description">
                        <h3>{title}</h3>
                        <i onClick={handleClick} id="starIcon" className="fa-regular fa-star"></i>
                    </div>
                </Link>
    )
}