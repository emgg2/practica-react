import { findAllByTestId } from "@testing-library/dom";
import { useEffect, useState } from "react";
import { Redirect } from "react-router";
import {deleteProduct} from '../../api/products';
import Button from "./Button";


const DeleteButton = ({productId, history}) => {

    const [isDelete, setIsDelete] = useState(false);

    useEffect(()=>{
        async function setDeleteProduct () {
            try {          
               // onLoading(true);                  
               if(isDelete === true){
                   try {
                        await deleteProduct(productId);                             
                        history.push("/");
                   } catch (error) {
                       
                   }finally {
                       
                   }
                    
                    
               }      
                
               
            } catch (error) {        
               // onError(error);            
            }finally
            {            
             //   onLoading(false);
            }
            }
        setDeleteProduct();   

    },[isDelete])  
    const handleDelete = () => {
        debugger;
        const response = window.confirm("Esta seguro de eliminar el producto " + productId);
        if(response === true)
        {
            setIsDelete(true);
        }
    } 

    return(
       
        <Button
        type="submit"
        className="loginForm-submit"
        variant="primary"           
        onClick={handleDelete}
        
      >
          Delete
      </Button>
         
    )
};

export default DeleteButton;