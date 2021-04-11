import { Button } from '../../shared';
import './NoProductAvailable.css';
import { NavLink } from 'react-router-dom';


const NoProductAvailable = () => {

    return( 
        <div className="containerNPA">
            <div className="noProductAvailable">
                <img src='/img/sad.jpg' className="imageNPA" alt="sad face"></img>
                <p >NO HAY PRODUCTOS DISPONIBLES</p>
                <Button               
                    
                    as={NavLink}
                    to="/product"
                    variant="primary"
                    className="header-button"
                >
                    Crear Productos
                </Button>
            </div>
        </div>
        
    );
}

export default NoProductAvailable;