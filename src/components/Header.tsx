import { Link } from "react-router-dom";

interface HeaderProps{

}

export const Header: React.FC<HeaderProps> = ({}) =>{

    return (
        <header>
            <a href="#" id="bars"><i className="fa-solid fa-bars"></i></a>
            <nav>
                <ul>
                    <li><Link to={"#"}>Categories</Link></li>
                    <li><Link to={"#"}>Areas</Link></li>
                    <li><Link to={"#"}>Ingredients</Link></li>
                </ul>
            </nav>
            <h1>allrecipes<i className="fa-solid fa-spoon"></i></h1>
            <a href="#"><i className="fa-solid fa-magnifying-glass"></i></a>
    </header>
    );
}