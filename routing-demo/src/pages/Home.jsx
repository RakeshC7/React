import { Link, useNavigate } from 'react-router-dom';

const HomePage = () => {

    const navigate = useNavigate();

    function navigateHandler() {
        navigate('products')
    }

    return <>
        <h1>Home page</h1>
        <p> Go to <Link to='products'>Product Page</Link></p>
        <p>
            <button onClick={navigateHandler}> Navigate using useNavigate </button>
        </p>
    </>
}

export default HomePage;