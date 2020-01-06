import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import me2 from '../images/me2.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <div className="about_wrap">
            <div className="image main">
              <figure className="about_figure">
                <img className="about_figure_img" src={me2} alt="" />
              </figure>
            </div>
            <div className="about_wrap_intro">
              <p className="about_wrap_intro--p">
              Hello! I'm Kanata, a front end developer based in Tokyo, who enjoys thinking things that how I can make a creative and cool websites and shooting some videos.
              <br />
              Basicaly, I travel around the world to meet local people and to give me different way to think and perspective.
              <br />
              Here are a few technologies I've been working with recently:
              </p>

              <ul className="about_wrap_intro--ul">
                <li className="skill_list">JavaScript (ES6+)</li>
                <li className="skill_list">HTML5 & (S)CSS</li>
                <li className="skill_list">Vue</li>
                <li className="skill_list">PHP</li>
                <li className="skill_list">Wordpress</li>
                <li className="skill_list">Gatsby</li>
              </ul>
            </div>
          </div>
          
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
