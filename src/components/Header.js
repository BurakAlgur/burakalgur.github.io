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
          <a href="https://www.canva.com/design/DAFH_8TYoJI/aMlLgSyRvBMti1L6SZxlRA/view?utm_content=DAFH_8TYoJI&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu">
            <button className="btn btn-sm">Check My CV</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
