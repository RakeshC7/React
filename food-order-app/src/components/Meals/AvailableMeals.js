import { useEffect, useState } from "react";
import Card from "../Ui/Card";
import MealItem from "./MealsItem/MealsItem";
import Classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {

    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();

    useEffect(()=> {

        const fetchMeals = async () => {
            const response = await fetch('https://react-http-4f667-default-rtdb.firebaseio.com/meals.json');
            if(!response.ok){
                throw new Error('Somthing went Wrong !');
            }

            const responseData = await response.json();

            const loadedMeals = [];
            for (const key in responseData){
                loadedMeals.push({
                    id: key.id,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price
                });
            }

            setMeals(loadedMeals);
            setIsLoading(false);
        };

        fetchMeals().catch((error) => {
            setIsLoading(false);
            setHttpError(error.message);
        });
    }, []);

    if(isLoading){
        return (<section className={Classes.mealsLoading}><p>Loading ...</p></section>)
    }

    if(httpError){
        return (<section className={Classes.mealsError}><p>{httpError}</p></section>)
    }

    const mealsList = meals.map((meal)=> (
        <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));

    return (
        <section className={Classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>  
            </Card>  
        </section>
    );
};

export default AvailableMeals;