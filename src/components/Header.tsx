interface HeaderProps{

}

export const Header: React.FC<HeaderProps> = ({}) =>{

    return (
        <header>
            <a href="#"><i className="fa-solid fa-bars"></i></a>
            <h1>allrecipes<i className="fa-solid fa-spoon"></i></h1>
            <a href="#"><i className="fa-solid fa-magnifying-glass"></i></a>
    </header>
    );
}