import React from 'react'
import PropTypes from 'prop-types'

const Navbar = (props) => (
    <navbar id="navbar" style={props.timeout ? {display: 'none'} : {}}>
         <nav>
            <ul>
                <li><a>Home</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" class="resume_btn"　onClick={() => {props.onOpenArticle('contact')}}>Resume</a></li>
            </ul>
        </nav>
        <ul className="icons">
            <li>
                <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
                >
                <span className="label">Twitter</span>
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
                href="https://github.com/codebushi/gatsby-starter-dimension"
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
