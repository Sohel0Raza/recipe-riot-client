import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefRecipes = () => {
    const chefInfo = useLoaderData()
    const userId  = useParams(chefInfo)
    useEffect(()=>{
        const chef = chefInfo.find(cf=> cf.id == userId.id)
        console.log(chef)
    },[])
   
    return (
        <div>
            
        </div>
    );
};

export default ChefRecipes;