import React from "react";

import BookList from "../components/BookList";
import mockBooks from "../data/books";

const MyBooks = () => {
  const btnControls = [
    {
      text: "View",
      onClick: () => {
        console.log("view clicked");
      },
      className: "btn btn-primary mx-1",
    },
    {
      text: "Delete",
      onClick: () => {
        console.log("delete clicked");
      },
      className: "btn btn-danger mx-1",
    },
  ];

  return (
    <div>
      <BookList
        title="Saved Books"
        books={mockBooks}
        btnControls={btnControls}
      />
    </div>
  );
};

export default MyBooks;
