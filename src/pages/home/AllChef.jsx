import React, { useEffect, useState } from 'react';
import Chef from './Chef';

const AllChef = () => {
    const [chefs, setChefs] = useState([]);
    useEffect(()=>{
        fetch('https://my-chef-recipe-server-himurana.vercel.app/chefData')
        .then(res=> res.json())
        .then(data =>setChefs(data))
        .catch(error =>{
            console.error(error)
        })
    },[])
    return (
        <div className='md:w-10/12 mx-auto'>
            <h1 className='text-3xl font-serif font-bold text-center md:mb-16'>Our Japanese Chef</h1>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 md:mb-8'>
          {
                chefs.map(chef =><Chef 
                key={chef.name}
                chef={chef}
                ></Chef>)
            }
          </div>
        </div>
    );
};

export default AllChef;