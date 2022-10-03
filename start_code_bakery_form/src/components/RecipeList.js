import Cake from "./Cake";


const RecipeList = ({cakes}) => {

    return (
        <>
        <h3>Hello from RecipeList</h3>
            {
            cakes.map((cake, index) => {
                return <Cake key={index} name={cake.name} ingredients={cake.ingredients} rating={cake.rating}/>
            })};

            <section>
                <h4>Average cake rating: </h4>
                <p>{(cakes.reduce((total, cake) => total + cake.rating, 0) / cakes.length)}</p>
            </section>
        </>
    )

}

export default RecipeList;