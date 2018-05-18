import React from 'react'
import 'react-input-range/lib/css/index.css'
import 'react-input-range/lib/css/input-range/input-range.css'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-calendar"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Save the Date - August 4th, 2018</h1>
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
