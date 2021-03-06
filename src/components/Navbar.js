import React from 'react'
import PropTypes from 'prop-types'
import mylogo from '../images/mylogo.png'

const Navbar = (props) => (
    <navbar id="navbar" style={props.timeout ? {display: 'none'} : {}}>
     
         <nav>
         <div className="mylogo"><img src={mylogo} alt="kanata"/></div>
            <ul className="nav_container">
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="https://drive.google.com/file/d/17ILrtmPqZcq4pMXjDgZ0XRbVJfm1NopZ/view?usp=sharing">Resume</a></li>
            </ul>
        </nav>
        <ul className="icons">
            <li>
                <a
                href="https://www.linkedin.com/in/kanata-shimomoto-026438160/"
                className="icon fa-linkedin"
                >
                <span className="label">Linkedin</span>
                </a>
            </li>
            <li>
                <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
                </a>
            </li>
            <li>
                <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
                </a>
            </li>
            <li>
                <a
                href="https://github.com/Kanamomoruru"
                className="icon fa-github"
                >
                <span className="label">GitHub</span>
                </a>
            </li>
        </ul>
        <div className="email">
          <a href="mailto:kanamoru0508@gmail.com">kanamoru0508@gmail.com</a>
        </div>
    </navbar>
)

Navbar.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Navbar
