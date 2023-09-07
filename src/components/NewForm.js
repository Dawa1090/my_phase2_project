import React from "react";

function NewCuisineForm({onAddCuisine}) {
  return (
    <div className="new-cuisine-form">
      <h2>New Cuisine</h2>
      <form onSubmit ={onAddCuisine}>
        <input type="text" name="name" placeholder="Cuisine name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="text" name="description" placeholder="Cuisine description" />
        <button type="submit">Add Cuisine</button>
      </form>
    </div>
  );
}

export default NewCuisineForm;
