
interface RecipesProps{
children: any;
}

export const Recipes: React.FC<RecipesProps> = ({children}) =>{
    return (
        <section>
             <h3>Recipes</h3>
        <div className="recipes">
            {children}
        </div>

    </section>
    )
}