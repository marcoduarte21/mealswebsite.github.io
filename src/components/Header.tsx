import { Link } from "react-router-dom";

interface HeaderProps{

}

export const Header: React.FC<HeaderProps> = ({}) =>{

    function handleClick(){
        const sidebar = document.querySelector('.sidebar');
        if (sidebar instanceof HTMLElement) {
        sidebar.style.display = 'flex';
        } else {
    console.error('Elemento .sidebar no encontrado o no es un HTMLElement');
            }
    }

    function hiddenSideBar(){
        const sidebar = document.querySelector('.sidebar');
        if (sidebar instanceof HTMLElement) {
        sidebar.style.display = 'none';
        } else {
    console.error('Elemento .sidebar no encontrado o no es un HTMLElement');
            }
    }

    return (
        <>
        <header>
            <button id="bars" onClick={handleClick}><i className="fa-solid fa-bars"></i></button>
            <nav id="navBar">
                <ul>
                <li><Link to={"#"}>Categories</Link></li>
                <li><Link to={"#"}>Areas</Link></li>
                <li><Link to={"#"}>Ingredients</Link></li>
                </ul>
            </nav>
            <h1>allrecipes<i className="fa-solid fa-spoon"></i></h1>
            <a href="#"><i className="fa-solid fa-magnifying-glass"></i></a>
        </header>
            <nav >
                <ul className="sidebar">
                <li id="hidenSideBar" onClick={hiddenSideBar}><i className="fa-solid fa-xmark"></i></li>
                <li><Link to={"#"}>Categories</Link></li>
                <li><Link to={"#"}>Areas</Link></li>
                <li><Link to={"#"}>Ingredients</Link></li>
                </ul>
            </nav>
    </>
    );
}