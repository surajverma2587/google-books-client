import React from "react";

const Header = ({
  title = "Google Books Search",
  subTitle = "Search for and Save Books of Interest",
}) => {
  return (
    <div class="jumbotron text-center">
      <h1 class="display-4">{title}</h1>
      <p class="lead">{subTitle}</p>
      <hr class="my-4" />
    </div>
  );
};

export default Header;
