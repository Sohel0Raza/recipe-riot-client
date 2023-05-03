import React from 'react';
const SpacialRecipe = () => {
    return (
        <div className='md:w-10/12 mx-auto mt-5 mb-10'>
            <h2 className='text-2xl md:text-3xl text-center font-thin md:mt-16'>Japanese</h2>
            <h2 className='text-2xl md:text-3xl text-center mb-10 font-serif'>SPECIALITIES</h2>
            <div className='md:flex md:justify-center'>
                <div className='md:w-1/2 m-5 md:relative p-5'>
                    <img className='rounded md:absolute md:left-12 h-full w-full' src="../../../public/Traditional-Japanese-Foods.jpg" alt="" />
                </div>
                <div className='md:w-1/2 m-5'>
                    <div className='md:ml-20 px-5 my-5 rounded shadow-2xl bg-slate-100 hover:bg-amber-50'>
                        <p className='py-5'><span className='text-xl font-semibold font-serif'>Okonomiyaki</span> is a savory Japanese pancake that is made with a batter of flour, eggs, shredded cabbage, and a variety of other ingredients such as meat, seafood, and vegetables. The name "okonomiyaki" means "grilled as you like it".</p>
                    </div>
                    <div  className='my-5 rounded shadow-2xl bg-amber-200 hover:bg-slate-300'>
                        <p className='p-5'><span className='text-xl font-semibold font-serif'>Sushi</span> is a traditional Japanese dish that consists of vinegared rice combined with a variety of seafood, vegetables, and sometimes tropical fruits, and served raw or cooked</p>
                    </div>
                    <div className=' md:ml-20 px-5 my-5 rounded shadow-2xl bg-slate-100 hover:bg-amber-50'>
                        <p className='py-5'><span className='text-xl font-semibold font-serif'>Miso </span> is a traditional Japanese soup made with dashi stock and miso paste, which is fermented soybean paste. It usually contains additional ingredients like tofu, seaweed, and green onions.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpacialRecipe;