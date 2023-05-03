import React from "react";

const Chef = (props) => {
  console.log(props.chef);
  const { name, picture, num_of_recipes, years_of_experience, likes , id} =
    props.chef;
  return (
    <div>
      <div className="card bg-base-100 h-100 shadow-xl">
        <div>
          <img
            className="w-full h-full md:px-8 md:pt-8"
            src={picture}
            alt="man"
          />
        </div>
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl">{name}</h2>
          <div className="flex justify-evenly mt-3 shadow-2xl p-3 rounded-lg hover:bg-amber-100">
            <div>
              <h4 className="font-bold text-xl p-2 text-cyan-500">
                {num_of_recipes}
              </h4>
              <h3 className="text-lg font-semibold">Of Recipes</h3>
            </div>
            <div>
              <h4 className="font-bold text-xl p-2 text-amber-500">
                {likes}k
              </h4>
              <h3 className="text-lg font-semibold">Likes</h3>
            </div>
          </div>
          <div className="shadow-2xl p-2 my-3 rounded-lg hover:bg-cyan-100 text-center">
            <h4 className="font-bold text-xl p-2 text-cyan-500">
              {years_of_experience}
            </h4>
            <h3 className="text-lg font-semibold">Years Experience</h3>
          </div>

          <div className="card-actions justify-end">
            <button className="btn-secondary">Viwe Recipe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
