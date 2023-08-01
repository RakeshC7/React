import { Link, useNavigate } from "react-router-dom";


function HomePage() {

    // dynamically change page (using navigate)

    const navigate = useNavigate();

    function navigateHandler() {
        navigate('products');
    }

    return (
        <>
            <h1>My Home Page</h1>
            <p>
                Go to <Link to="products"> the list of products </Link>
            </p>
            <p>
                <button onClick={navigateHandler}>Navigate to Products page</button>
            </p>
        </>
    )
}

export default HomePage