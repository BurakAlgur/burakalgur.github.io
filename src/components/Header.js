import React from "react";

const Header = () => {
  return (
    <header className=" py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <p id="nameSurname">
            Burak
            <br />
            <span class="fancy">Algur</span>
          </p>
          <a href="https://europa.eu/europass/eportfolio/screen/share/75771cd8-1710-4fbb-8c60-9577529c407e?lang=tr">
            <button className="btn btn-sm">Check My CV</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
