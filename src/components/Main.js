import React from 'react'
import Link from 'gatsby-link'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import picourstory from '../images/sarahseanwedding.jpg'
import rockhardplace from '../images/rockhardplace.jpg'
import adventures from '../images/yenikecollage.jpg'



class Main extends React.Component {
  constructor(props) {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
      const formSubmitted = false;
      const thankYouContent = <h1>Thank you, your content has been submitted.</h1>;
  }

  handleSubmit(event) {
  event.preventDefault();
  this.setState({'submitted': true });
  this.formSubmitted = true;
  const data = new FormData(event.target);
  console.log("submitted")
  fetch('https://hooks.zapier.com/hooks/catch/488659/zwuv6z/', {
    method: 'POST',
    body: data,
  });
  }

  render() {
    let thanks =
        <div>
        <p>Thanks, your information has been sent!</p>
        </div>
    let form =
    <form>
    <p>Provide your contact information and we will send you the details and an RSVP.</p>
    <form onSubmit={this.handleSubmit}>
      <div className="field half first">
        <label htmlFor="name">First & Last Name</label>
        <input type="text" name="name" id="name" required />
      </div>
      <div className="field half">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required />
      </div>
      <div className="field">
        <label htmlFor="address">Mailing Address</label>
        <textarea name="address" id="address" rows="1" required></textarea>
      </div>
      <div className="field half first">
        <label htmlFor="city">City</label>
        <input type="text" name="city" id="city" required />
      </div>
      <div className="field half">
        <label htmlFor="state">State/Province</label>
        <input type="text" name="state" id="state" required />
      </div>
      <div className="field half first">
        <label htmlFor="postalCode">Postal Code</label>
        <input type="text" name="postalCode" id="postalCode" required />
      </div>
      <div className="field half">
        <label htmlFor="country">Country</label>
        <input type="text" name="country" id="country" required />
      </div>
      <div className="field">
        <label htmlFor="message">Additional Information</label>
        <textarea name="message" id="message" rows="4"></textarea>
      </div>
      <ul className="actions">
        <li><button>Send</button></li>
        <li><input type="reset" value="Reset" /></li>
      </ul>
    </form>
    <ul className="icons">
      <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
    </ul>
    </form>


    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>
    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="thankyou" className={`${this.props.article === 'thankyou' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Thank You</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. By the way, check out my <a href="#work">awesome work</a>.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.</p>
          <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
          {close}
        </article>

        <article id="OurStory" className={`${this.props.article === 'OurStory' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">First Sight</h2>
          <p>In 2008, Yen and Isaac met at a Santa Barbara coffee shop, then known as the 'North Star'. Whether it was Yen or Isaac who approached the other first is a questions of semantics - you may have to listen to both versions of the story in order to decide.</p>
          <p>They quickly hit it off over coffee and tea, and a discussion of the books they were reading (<i>Catch-22</i> by Joseph Heller and <i>We Were the Mulvaneys</i> by Joyce Carol Oates).  For the remainder of the day, Isaac showed Yen around downtown Santa Barbara.</p>
          <span className="image main"><img src={picourstory} alt="" /></span>

          <h2 className="major">Adventures</h2>
          <p>Since then, Yen and Isaac have traversed parts of the world and shared many adventures together.</p>
          <span className="image main"><img src={adventures} alt="" /></span>
          <p>They have been on Numerous motorcycle rides, camping trips, and hikes throughout the world - visiting breweries, restaurants, and friend's weddings too!</p>

          <h2 className="major">The Proposal</h2>
          <p>In September 2017, After the 5th attempt at winning a lottery pass to Half Dome, Isaac took Yen out for an motorcycle adventure to Yosemite. After a night spent at a roadside motel, they woke early to begin a eight hour trek to summit Half Dome and back without knowing when or where they would spend the night.</p>
          <p>Upon summiting Half Dome, and a chance meeting with Isaac's friend Viren, Isaac asked Yen to pose for a photo with him on a ledge known as 'The Visor' and Viren to take the picture. Neither knew what was about to happen. It is here that Isaac put Yen between a rock and a hard place.</p>
          <span className="image main"><img src={rockhardplace} alt="" /></span>
          <p>10 years and multiple adventures later, we are gathering our family and friends in Portland, OR to tie the knot.</p>
          {close}
        </article>
        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Send details</h2>
          {this.formSubmitted ? thanks:form}
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onOpenArticle: React.PropTypes.func,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool
}

export default Main
