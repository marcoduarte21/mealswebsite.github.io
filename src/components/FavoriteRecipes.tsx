
export default function FavoritesRecipes({children}:any){

    return (
        <section>
            <div className="favoritesRecipes">
            <h3>Favorite recipes</h3>
            <div className="container-favorites">
            {children}
            </div>
            </div>
        </section>
    );
}