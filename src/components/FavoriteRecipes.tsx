
export default function FavoritesRecipes({children}:any){

    return (
        <section>
            <div className="favoritesRecipes">
            <div className="container-favorites">
            {children}
            </div>
            </div>
        </section>
    );
}