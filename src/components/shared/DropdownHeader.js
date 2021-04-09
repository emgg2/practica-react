import './DropdownHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
const DropdownHeader = ({onClick, title}) => {
    return (
        <div 
            className='formField-dropdown'
            onClick={onClick}       
        >                   
            <p className="formField-desc">{title}</p>
            <div className="iconBox"> <FontAwesomeIcon icon ={faSearch} /></div>
        </div>
        
    );
}

export default DropdownHeader;