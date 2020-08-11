import React from "react";

import "./header.scss"

const Header = () => (
  <header className="header">
    <img src={'./logo.svg'} alt="logo" className="header__logo"/>
    <h1 className="header__title">Чистая вода</h1>
    <p className="header__descr">
      Питьевая вода, предназначенная для ежедневного потребления, идеально подходит для кулеров. Закажите доставку воды и мы привезем её на дом или в офис.
    </p>
  </header>
)

export default Header;