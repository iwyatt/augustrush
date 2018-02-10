import React from 'react'

import AddToCalendar from 'react-add-to-calendar';

class WeddingEvent extends React.Component {
  static displayName = 'Wedding';
  state = {
    event: {
      title: 'Yen & Isaac\'s Wedding',
      description: 'Join us for a Vietnamese wedding ceremony and reception to follow.',
      location: 'Portland, OR',
      startTime: '2018-08-04T16:00:00-04:00',
      endTime: '2018-08-04T22:00:00-04:00'
    }
  };
}

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-calendar"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Save the Date - August 4th, 2018</h1>
                <p>Join us in  Portland, Oregon for our Wedding & celebration</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('OurStory')}}>Our Story</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header
