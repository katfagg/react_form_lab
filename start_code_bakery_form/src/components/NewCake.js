import { useState } from "react";

const NewCake = ({onSubmit}) => {
    const [name, setName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [rating, setRating] = useState(0);

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleIngredientsChange = (event) => {
        setIngredients(event.target.value);
    }

    const handleRatingChange = (event) => {
        setRating(event.target.value);
    }

    const handleFormSubmission = (event) => {
        event.preventDefault();
        
        //stop blank form
        if(name == "" || ingredients == "" || rating==null){
            return
        }

        const newCake = {
            name: name,
            ingredients: ingredients,
            rating: rating
        }

        //reset state
        setName("");
        setIngredients("");
        setRating(0);

        onSubmit(newCake);

    }

    return (

        <form onSubmit={handleFormSubmission}>

            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                onChange={handleNameChange}
                value={name}
            />

            <label htmlFor="ingredient">Ingredients:</label>
            <input
                type="text"
                id="ingredient"
                onChange={handleIngredientsChange}
                value={ingredients}
            />

            <label htmlFor="rating">Rating:</label>
            <input
                type="number"
                id="rating"
                onChange={handleRatingChange}
                value={rating}
            />

            <input type="submit" value="Add Cake"/>

        </form>

    );

}

export default NewCake;