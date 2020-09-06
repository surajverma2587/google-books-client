import React from "react";

import BookList from "../components/BookList";
import mockBooks from "../data/books";

const Home = () => {
  const btnControls = [
    {
      text: "View",
      onClick: () => {
        console.log("view clicked");
      },
      className: "btn btn-primary mx-1",
    },
    {
      text: "Save",
      onClick: () => {
        console.log("save clicked");
      },
      className: "btn btn-success mx-1",
    },
  ];

  return (
    <div>
      <BookList title="Results" books={mockBooks} btnControls={btnControls} />
    </div>
  );
};

export default Home;
