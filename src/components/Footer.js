import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.png'
import facebook from '../img/social/facebook.svg'
// import instagram from '../img/social/instagram.svg'
// import twitter from '../img/social/twitter.svg'
// import vimeo from '../img/social/vimeo.svg'

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
                      <Link className="navbar-item" to="/products">
                        Verein
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/satzung">
                        Satzung
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/impressum">
                        Impressum
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
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        News &amp; Events
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        Vorstand
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Kontakt
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/datenschutz">
                        Datenschutz
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="facebook" href="https://www.facebook.com/TV.Unzenberg.Heinzenbach/">
                  <img
                    src={facebook}
                    alt="Besuche uns auf Facebook!"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                {/* <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
