import { useHistory } from 'react-router-dom';

const Welcome = () => {

    const history = useHistory();

    const navigateHandler = () => {
        // do some calculations
        history.push('/products');
        
    }

    return (
        <section>
            <h1> The Welcome Page </h1>
            <button onClick={navigateHandler}> Navigate </button>
        </section>
    )
    
}

export default Welcome;