import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { getTags } from '../../api/products';



const MultiSelectTags = ({onChange}) => {

    const [tagsOptions, setTagsOptions] = React.useState({
        value: '',
        label: '',
        name:'tags'
    });

    const getTagsValue = tags => {
        const tagsValues = tags.map(tag =>{ 
            const tagLine = {value: tag,label: tag,name: 'tags'};
            return tagLine; 
        });			
        return tagsValues;
    }

    React.useEffect (() => {
        async function getTagsList() {
            try{
                 setTagsOptions(getTagsValue(await getTags()));
                
            }catch (error) {
            } finally {
                    }
            }
            getTagsList();
           
        }, []);

   

    const animatedComponents = makeAnimated();

    return (
        <Select 
            closeMenuOnSelect={false}
            components = {animatedComponents}
            isMulti
            name='tags'
            onChange={onChange}
            options={tagsOptions}
        />
    );
};

export default MultiSelectTags;