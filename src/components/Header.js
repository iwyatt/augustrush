import React from 'react'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-map-pin fa-lg"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Our adventure begins</h1>
                <h1>August 4th, 2018</h1>
                <p>Join us in  Portland, Oregon for our wedding & celebration</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Confirm RSVP</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('faq')}}>Wedding Day</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('OurStory')}}>Our Story</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('PDX')}}>Tour Portland</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header
