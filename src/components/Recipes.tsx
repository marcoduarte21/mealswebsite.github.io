
interface RecipesProps{
children: any;
}

export const Recipes: React.FC<RecipesProps> = ({children}) =>{
    return (
        <section>
             <h3 className="titleContainers">Recipes</h3>
        <div className="recipes">
            {children}
        </div>

    </section>
    )
}