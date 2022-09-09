import logo from '../../assets/img/logo.png'

import './styles.css'

function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="dsmeta" />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por <a href="#">@samuelr86</a>
        </p>
      </div>
    </header>
  );
}

export default Header