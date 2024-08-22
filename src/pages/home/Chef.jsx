import React from "react";
import { Link } from "react-router-dom";
import { MdFoodBank } from "react-icons/md";
import { CgCalendarDates } from "react-icons/cg";
import { AiFillLike } from "react-icons/ai";

const Chef = (props) => {
  const { name, picture, num_of_recipes, years_of_experience, likes , id} =
    props.chef;
  return (
    <div>
      <div className="card bg-base-100 h-100 shadow-xl">
        <div className="md:h-52 md:w-[353px]">
          <img
            className="w-full h-full"
            src={picture}
            alt="man"
          />
        </div>
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl">{name}</h2>
          <div className="flex items-center shadow-2xl p-2 rounded-lg hover:bg-amber-100">
            <MdFoodBank className="text-xl"/>
            <h4 className="font-bold text-xl px-2 text-cyan-500">
              { num_of_recipes}
            </h4>
            <h3 className="text-lg font-semibold">Of Recipes</h3>
          </div>
          <div className="flex items-center shadow-2xl px-2 rounded-lg hover:bg-cyan-100">
            <CgCalendarDates className="text-xl"/>
            <h4 className="font-bold text-xl p-2 text-amber-500">
              {years_of_experience}
            </h4>
            <h3 className="text-lg font-semibold">Years Experience</h3>
          </div>
          <div className="flex items-center shadow-2xl px-2 rounded-lg hover:bg-amber-100">
            <AiFillLike className="text-xl"/>
            <h4 className="font-bold text-xl p-2 text-cyan-500">
              {likes}k
            </h4>
            <h3 className="text-lg font-semibold">Likes</h3>
          </div>

          <div className="card-actions justify-end">
            <Link to={`/chefRecipe/${id}`}>  <button className="btn-secondary">Viwe Recipe</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
