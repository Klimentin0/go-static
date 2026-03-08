function Menu() {

  return (
    <>
      <header className="header">
        <div className="header-top">
          <a href="/"></a>
          <div className="menu">
            <ul className="menu-list">
              <li className="menu-item">
                <span className="menu-sub">Новости</span>
                <ul className="menu-sub-list">
                  <li>
                    <a href="/news">Последние новости</a>
                  </li>
                  <li>
                    <a href="/">Спец новости</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="/contact">Контакты</a>
              </li>
              <li className="menu-item">
                <a href="/about">О нас</a>
              </li>
            </ul>
          </div>
          <div className="menu-toggle">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="menu-close"></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </header>
    </>
  )
}

export default Menu
