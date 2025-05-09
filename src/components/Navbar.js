import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.png'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: 'is-active',
          })
          : this.setState({
            navBarActiveClass: '',
          })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: '44px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              {/* <Link className="navbar-item" to="/verein">
                Dein Verein
              </Link> */}
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/verein/geschichte">
                Geschichte
              </Link>
              <Link className="navbar-item" to="/verein/vorstand">
                Vorstand
              </Link>
              <Link className="navbar-item" to="/verein/satzung">
                Satzung
              </Link>
              <Link className="navbar-item" to="/verein/ehrungsordnung">
                Ehrungsordnung
              </Link>
              <Link className="navbar-item" to="/kontakt">
                Kontakt
              </Link>
              <Link className="navbar-item" to="/impressum">
                Impressum
              </Link>
              <Link className="navbar-item" to="/datenschutz">
                Datenschutz
              </Link>
            </div>
            {/* <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={xxx} alt="xxx" />
                </span>
              </a>
            </div> */}
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
