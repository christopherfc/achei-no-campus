function Header() {
  return (
    <header className="header-container">
      <div className="header-content">
        <a href="/">Achei no Campus</a>
        <nav>
          <a href="#objetos">Objetos</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#localizacao">Mapa</a>
          <a className="button-link" href="#sobre">Sobre nós</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
