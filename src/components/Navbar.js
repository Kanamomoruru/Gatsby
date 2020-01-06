import React from 'react'
import PropTypes from 'prop-types'

const Navbar = (props) => (
    <navbar id="navbar" style={props.timeout ? {display: 'none'} : {}}>
         <nav>
            <ul>
                <li><a>Home</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="https://drive.google.com/open?id=1_pvgo84Fg4mF7lV1gzyCEB2iAXqhVMfN">Resume</a></li>
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
    </navbar>
)

Navbar.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Navbar
