import React from 'react'

import AddToCalendar from 'react-add-to-calendar';

class Example extends React.Component {
  static displayName = 'Example';
  state = {
    event: {
      title: 'Sample Event',
      description: 'This is the sample event provided as an example only',
      location: 'Portland, OR',
      startTime: '2016-09-16T20:15:00-04:00',
      endTime: '2016-09-16T21:45:00-04:00'
    }
  };

  render() {
    return <AddToCalendar event={this.state.event}/>;
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
        <nav><ul><AddToCalendar event={event} buttonLabel="Save the Date" displayItemIcons={false} /></ul></nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header
