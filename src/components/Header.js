import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        {/* <div className="logo">
            <span className="icon fa-diamond"></span>
        </div> */}
        <div className="content">
            <div className="inner">
                <h1>Kanata Shimomoto</h1>
                <p>I am a front-end developer who is based in Tokyo.</p>
            </div>
        </div>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
