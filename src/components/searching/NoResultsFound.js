import './NoResultsFound.css';

const NoResultsFound = () => {

    return( 
        <div className="containerNRF">
        <div className="noResultsFound">
            <img src='/img/sad.jpg' className="imageNRF"></img>
            <p>NO SE HAN ENCONTRADO RESULTADO CON LA BUSQUEDA</p>
           
        </div>
    </div>
        
    );
}

export default NoResultsFound;