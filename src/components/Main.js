import PropTypes from 'prop-types'
import React from 'react'
import fwfs from '../images/fwfs.png'
import vibes from '../images/vibes.png'
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
          {/* <ul className="projects">
            <li className="image main projects_li">
              <img src={fwfs} alt="" />
            </li>
            <li className="image main projects_li">
              <img src={vibes} alt="" />
            </li>
            <li className="image main projects_li">
              <img src={vibes} alt="" />
            </li>
          </ul> */}
         

         <div class="slide-wrap">

<div class="iconbox slide-content">
<div class="box-title">タイトル1</div>
<div class="iconbox-wrap">
<div class="box-content">
<ul class="list">
 	<li>リスト1</li>
 	<li>リスト2</li>
 	<li>リスト3</li>
</ul>
</div>
<div class="iconballoon">
<div class="balloon">Hello！</div>
<div class="icon"><img src="https://ponhiro.com/wp-content/uploads/2019/07/ponhiro-icon.png" alt="" width="402" height="399" /></div>
</div>
</div>
</div>

<div class="iconbox iconbox-pink slide-content">
<div class="box-title box-head-pink">タイトル2</div>
<div class="iconbox-wrap">
<div class="box-content">
<ol class="list-number">
 	<li>リスト1</li>
 	<li>リスト2</li>
 	<li>リスト3</li>
 	<li>リスト4</li>
 	<li>リスト5</li>
</ol>
</div>
<div class="iconballoon">
<div class="balloon">こんにちは！</div>
<div class="icon"><img src="https://ponhiro.com/wp-content/uploads/2019/07/woman.png" alt="" width="600" height="600" /></div>
</div>
</div>
</div>


<div class="iconbox iconbox-blue slide-content">
<div class="box-title box-head-blue">タイトル3</div>
<div class="iconbox-wrap">
<div class="box-content">

それぞれのサイズを揃えると見た目が良くなりますよ！

このカスタマイズはスマホユーザーが多いサイトにオススメです！

</div>
<div class="iconballoon">
<div class="balloon">ポイント！</div>
<div class="icon"><img src="https://ponhiro.com/wp-content/uploads/2019/07/man.png" alt="" width="600" height="600" /></div>
</div>
</div>
</div>
</div>

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
