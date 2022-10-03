import {useState} from "react";
import RecipeList from "../components/RecipeList";
import NewCake from "../components/NewCake"
import Cake from "../components/Cake";
import CakeForm from "../components/CakeForm";


// split, separates based on identifier and retruns array 
const CakeContainer = () =>{    
    const [cakes, setCakes] = useState([
        {
            name: "Lemon Drizzle",
            ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
            rating: 5
        },
        {
            name: "Tea Loaf",
            ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
            rating: 3
        },
        {
            name: "Brownie",
            ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
            rating: 4
        },
        {
            name: "Carrot Cake",
            ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
            rating: 5
        }
    ]);

    const [applicationsOpen, setApplicationOpen] = useState(true);

    const addNewCake = (newCake) => {

        const updatedCakes = [...cakes, newCake]

        if(applicationsOpen){
            setCakes(updatedCakes);
        }
    }

    return (
        <>
        <h2>Recipe Directory</h2>
        <NewCake onSubmit={addNewCake}/>
        <RecipeList cakes={cakes}/>
        </>
    )
} 

export default CakeContainer;