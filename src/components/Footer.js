import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.png'

const Footer = class extends React.Component {

  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="TV Unzenberg / Heinzenbach e.V."
            style={{ width: '20em', height: '10em' }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Startseite
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/kontakt">
                        Kontakt
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/verein/geschichte">
                        Geschichte
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/verein/vorstand">
                        Vorstand
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/verein/satzung">
                        Satzung
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <a className="navbar-item" target="_blank" rel="noreferrer" href="https://www.facebook.com/TV.Unzenberg.Heinzenbach/">
                        Finde uns auf <strong>Facebook</strong>!
                      </a>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/impressum">
                        Impressum
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/datenschutz">
                        Datenschutz
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <font style={{ color: 'darkgray' }}>Admin</font>
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
