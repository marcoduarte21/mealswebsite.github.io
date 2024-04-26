
interface RecipesProps{
children: any;
}

export const Recipes: React.FC<RecipesProps> = ({children}) =>{
    return (
        <section>

        <div className="recipes">
            {children}
        </div>

    </section>
    )
}