const Cake = ({name, ingredients, rating}) =>{
    return (
        <div className="cake">
            <header>Cake: {name} </header>
            <main>
                <ul>
                    <li>Ingredients: [{ingredients}]</li>
                    <li>Rating: {rating}</li>
                </ul>
            </main>
        </div>
    )
}

export default Cake;