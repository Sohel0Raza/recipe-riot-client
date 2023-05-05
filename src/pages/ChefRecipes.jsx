import { AiFillLike } from "react-icons/ai";
import { CgCalendarDates } from "react-icons/cg";
import { MdFoodBank } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import { FcRating } from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ChefRecipes = () => {
  const [disabled, setDisabled] = useState(false);
  const [rating, setRating] = useState(0) 

  const chefInfo = useLoaderData();
  const handelTostify = () => {
   return toast("Successfully added your food !!")
  }
  const {
    name,
    picture,
    num_of_recipes,
    bio,
    likes,
    recipes,
    ingredients,
    years_of_experience,
  } = chefInfo;
  return (
    <div>
      <h2 className="text-3xl text-center py-10 font-thin bg-green-50 text-amber-600">
        CHEF RECIPES
      </h2>
      <div className="md:flex justify-star shadow-2xl mb-20 mt-10">
        <div className="md:w-1/2">
          <img className="w-full h-full py-5 pl-5" src={picture} alt="" />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-center text-2xl font-serif my-10">{name}</h2>
          <p className="px-10 font-serif">
            <span className="font-bold text-xl">Bio: </span>
            {bio}
          </p>
          <div className="px-10">
            <div className="flex items-center md:mt-5 shadow-2xl p-2 rounded-lg hover:bg-amber-100">
              <MdFoodBank className="text-xl" />
              <h4 className="font-bold text-xl p-2 text-cyan-500">
                {num_of_recipes}
              </h4>
              <h3 className="text-lg font-semibold">Of Recipes</h3>
            </div>
            <div className="flex items-center shadow-2xl p-2 rounded-lg hover:bg-cyan-100">
              <CgCalendarDates className="text-xl" />
              <h4 className="font-bold text-xl p-2 text-amber-500">
                {years_of_experience}
              </h4>
              <h3 className="text-lg font-semibold">Years Experience</h3>
            </div>
            <div className="flex items-center shadow-2xl p-2 rounded-lg hover:bg-amber-100">
              <AiFillLike className="text-xl" />
              <h4 className="font-bold text-xl p-2 text-cyan-500">{likes}k</h4>
              <h3 className="text-lg font-semibold">Likes</h3>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-3xl text-center my-5 font-bold font-serif">
          Recipes
        </h3>
        <div className="md:flex justify-center items-center">
          <div className="md:w-1/2">
          <ToastContainer className="absolute"/>
            {recipes.map((recipe) => {
              console.log(recipe);
              return (
                <div className="m-5">
                  <div className="bg-slate-100 p-7">
                    <h3 className="text-xl font-serif font-semibold px-5 py-2 text-cyan-400">
                      {recipe.name}
                    </h3>
                    <p className="pb-2 px-5">
                      <span className="text-xl">Cooking Method</span> :
                      {recipe.cooking_method}
                    </p>
                    <p className="flex items-center text-xl px-5">
                    <Rating style={{ maxWidth: 100 }} value={rating} readOnly className="mr-2" />
                      {recipe.rating}
                    </p>
                    <button   onClick={handelTostify} className="btn-food">Favourit Food</button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="md:w-1/2 mb-5">
          <h3 className="text-3xl text-center my-5 font-thin border-b-4 p-2 mx-20">
                  Ingredient
                  </h3>
            {ingredients.map((ingredient) => {
              return (
                <div className="text-center">
                  <li>{ingredient}</li>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecipes;
