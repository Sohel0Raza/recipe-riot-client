import React from 'react';

const AboutUs = () => {
    return (
        <div className='md:flex justify-center items-center md:mt-28 my-10 bg-amber-500 p-5'>
            <div className='md:w-1/2 text-center text-gray-200 p-2'>
                <h3 className='font-mono text-2xl'>About Us</h3>
                <h1 className='font-serif font-bold text-2xl p-2'>RecipeRiot Chef<br />  Restaurant</h1>
                <hr className='w-24 font-extrabold bg-white border-b-2 mx-auto' />
                <hr className='w-28 mt-1 font-extrabold bg-white border-b-2 mx-auto' />
                <p className='p-5'>A chef recipe website is an online platform that provides a collection of recipes from various chefs, catering to different dietary needs and preferences. They may also offer cooking tips and tutorials to help users prepare their meals successfully.</p>
                <button className='btn-outlined'>Read More</button>
            </div>
            <div className='md:w-1/2 p-2'>
                <img className='w-full h-full'  src="../../../public/spanner-crab-rice-with-edamame-and-tobiko-135052-2.jpg" alt="" />
            </div>
        </div>
    );
};

export default AboutUs;