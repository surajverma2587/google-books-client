import React from "react";

const SearchBar = () => {
  return (
    <div className="my-4">
      <h5 className="my-4">Book Search</h5>
      <form>
        <div className="form-group">
          <label htmlFor="book">Book Title</label>
          <input type="text" className="form-control" id="book" />
        </div>
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
