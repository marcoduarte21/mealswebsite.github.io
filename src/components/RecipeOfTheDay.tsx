interface RecipeOfTheDayProps{
    children: any;
}

export const RecipeOfTheDay: React.FC<RecipeOfTheDayProps> = ({children}) =>{

    return (
        <section>
        <div className="recipes">
        <h4 id="titleRecipe">recipe of the day</h4>
            {children}
        </div>

    </section>
    );
}