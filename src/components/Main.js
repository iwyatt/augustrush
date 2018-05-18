import React from 'react'
import Link from 'gatsby-link'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import picourstory from '../images/sarahseanwedding.jpg'
import rockhardplace from '../images/rockhardplace.jpg'
import adventures from '../images/yenikecollage.jpg'
import ladyoflavang from '../images/ladyoflavang.jpg'
import pdx from '../images/pdx.jpg'
import ReactRadioButtonGroup from 'react-radio-button-group'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'


class Main extends React.Component {
  constructor(props) {
      super();
      const formSubmitted = false;
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = { value: 2 };
  }

handleBoolChange(value) {
  selectedValue: value;
}

 handleSubmit(event) {
  event.preventDefault();
  this.formSubmitted = true;
  const data = new FormData(event.target);
  fetch('https://hooks.zapier.com/hooks/catch/488659/ahxg2m/', {
    method: 'POST',
    body: data,
  });
  this.forceUpdate()
 }

  render() {
    let thanks =(
        <div>
        <h2 className="major">Thank you</h2>
        <p>Please check your email to confirm we've received your RSVP</p>
        <p>We highly recommend booking your travel and lodging now, as Augsust is a popular month for tourism in Portland, OR. If you are looking for recommendations on what to do, where to stay, and other information, please see our "Tour Portland" recommendations or feel free to start a conversation in the facebook group.</p>
        </div>
    )
    let form =(
        <div>
    <h2 className="major">RSVP</h2>
    <p>PLease let us know if you will be able to join</p>
    <form onSubmit={this.handleSubmit}>
      <div className="field half first">
        <label htmlFor="firstname">First Name</label>
        <input type="text" name="firstname" id="firstname" required />
      </div>
      <div className="field half">
        <label htmlFor="lastname">Last Name</label>
        <input type="text" name="lastname" id="lastname" required />
      </div>
      <div className="field">
        <label htmlFor="email">Your Email Address</label>
        <input type="email" name="email" id="email" required />
        <p></p>
      </div>
      <div>
        <p></p>
        <label htmlFor="rsvp">Will you be attending?</label>
        <ReactRadioButtonGroup name="isAttending" options={["We're Looking forward to it!", "Will have to miss the fun"]} value="Looking forward to it!" isStateful={true} onChange={this.handleBoolChange} />
      <p></p>
      </div>
      <div className = "InputRange">
      <label>How many people will be attending?</label>
      <InputRange
        id = "numGuests"
        name = "numGuests"
        maxValue={10}
        minValue={0}
        value={this.state.value}
        onChange={value => this.setState({ value })} />
      </div>
      <p></p>
      <div className="field">
        <label htmlFor="songs">Song Requests (please indicate Artist and Title)</label>
        <textarea name="songs" id="Songs" rows = "2" required></textarea>
      </div>
      <div className="field">
        <label htmlFor="message">Please let us know if you have any dietary restrictions</label>
        <textarea name="message" id="message" rows="4"></textarea>
      </div>
      <ul className="actions">
        <li><button>Send</button></li>
        <li><input type="reset" value="Reset" /></li>
      </ul>
      </form>
    </div>
    )
    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>
    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>
        <article id="thankyou" className={`${this.props.article === 'thankyou' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Thank You</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. By the way, check out my <a href="#work">awesome work</a>.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.</p>
          <ul className="icons">
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
          </ul>
          {close}
        </article>
        <article id="faq" className={`${this.props.article === 'faq' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Information</h2>
          <span className="image main"><img src={ladyoflavang} alt="" /></span>
          <p>Our wedding will be on August 4th in Portland, OR. Both the wedding and the reception are located in northeast Portland, not far from the airport and hotels.</p>
          <h2 className="major">Day's Events</h2>
          <h3>Asking Ceremony</h3>
          <p>One traditional Vietnamese pre-wedding ceremony is called Lễ Đính Hôn (also referred to as Đám Hỏi, or literally translated “Asking Ceremony”), which is where the groom and his family ask the bride’s family for their daughter’s hand in marriage. Usually attended only my family and close friends.</p>
          <p>The general order of events is as follows:</p>
          <ul>
              <li>The groom and his family and friends hold a procession to the bride’s house bearing gifts</li>
              <li>With blessings from both families, the groom will officially ask for the bride’s hand. Gifts and a tea ceremony with the parents will ensue. </li>
              <li>Guests are invited to lunch at the house where they will enjoy what the bride’s family has cooked, as well as, the roast pig and the sticky rice that the groom and his family has brought</li>
          </ul>
          <p>Men generally wear suit and tie, and women wear toned-down cocktail attire or traditional Vietnamese ao dai</p>
          <h3>Wedding Mass</h3>
          <p>The wedding ceremony will be presented in both Vietnamese and English.</p>
          <p>It will be a full mass and should last about an hour. The details include: 2 readings from the Bible, gospel acclamation, homily from the priest, eucharist/communion, the wedding part that everyone knows (vows and exchange of rings), communion, conclusion, signing the marriage certificate. Don't worry, there will be a program and we will provide some information for non-Catholics!</p>
          <p>Men generally wear suit and tie, and women wear toned-down cocktail attire. Vietnamese women will be wearing the traditional Vietnamese dress called "ao dai".</p>
          <h3>Reception</h3>
          <p>Come celebrate with us! There will be an 8-course Chinese meal served family style, plenty of Vietnamese ceremonies and traditions, speeches, a visit from the  bride and groom at your table, and other shenanigans.</p>
          <p>Cocktail attire is fine for both men and women but come wearing whatever you want; just be ready to join in our love and joy!</p>
          {close}
        </article>
        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
          {close}
        </article>
        <article id="PDX" className={`${this.props.article === 'PDX' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Touring PDX</h2>
          <span className="image main"><img src={pdx} alt="" /></span>
          <h2>Hotel Recommendations</h2>
          You can choose to stay anywhere but these hotels are within a 10-15 minutes drive to Yen’s parents’ house, the church for the wedding mass, and reception location. They are also near the Portland Lightrail (known as “The Max”); The Max can take you to/from the airport and to/from Downtown Portland:
          <br />
          <br /><a href = "https://www.ihg.com/staybridge/hotels/us/en/portland/pdxgw/hoteldetail">Staybridge Suites Portland - Airport</a>
          <br />11936 NE Glenn Widing Dr, Portland, OR 97220
          <br />
          <br /><a href = "https://www.aloftportlandairport.com">Aloft Airport Hotel at Cascade Station</a>
          <br />9920 NE Cascades Parkway, Portland, OR 97220
          <br />
          <br /><a href = "https://portlandairport.place.hyatt.com/en/hotel/home.html">Hyatt Place Portland/Cascade Station</a>
          <br />9750 NE Cascades Parkway, Portland, OR 97220
          <br /><br />
          <h2>Getting Around</h2>
          <ul>
              <li>Rent a car</li>
              <li>Uber / Lyft / Wingz</li>
              <li>Public transportation (Portland has a very good system) including buses, lightrail, and a streetcar in downtown Portland</li>
          </ul>
          <h2>Portland Attractions</h2>
          <p>There is something for everyone in Portland whether you like the outdoors, are a foodie, or appreciate a good glass of wine or pint of beer. Here are some places that we like and enjoy.</p>
          <p>Check out the <a href = "https://www.pdxmonthly.com/">Portland Monthly</a> or the <a href = "https://www.travelportland.com">Travel Portland website</a>for additional ideas.</p>
          <h2>Hike & Outdoors</h2>
              <b>Forest Park (W Portland, ~25 minutes):</b><br />
              You don’t have to go far to get a good hike in or just be with nature. This is one of the country's largest urban forest reserves with tons of trails to explore.
              <br /><br />
              <b>Multnomah Falls (Columbia River Gorge, ~30 minutes):</b><br />
              The tallest waterfall in Oregon at 620 feet, it is an iconic sight. Check out the trails.
              <br /><br />
              <b>Eagle Creek Trail (Cascade Locks, ~45 mins):</b><br />
              If you’re looking for adventure, this would be it: amazing views, waterfalls, and narrow paths.
              <br /><br />
              <b>Silver Falls State Park (Silverton, ~1.5 hours):</b><br />
              A favorite of Yen’s when she was attending college in the area. There are waterfalls and plenty of trails to get lost.
              <br /><br />
          <h2>Coffee, Tea, and Beer</h2>
          <h4>Pubs   & Bars</h4>
          <ul>
              <li>Blue Moon (Isaac’s favorite) (SW Portland)</li>
              <li>Departure (SW Portland)</li>
              <li>Portland City Grill (SW Portland)</li>
          </ul>
          <h4>Breweries</h4>
          <ul>
             <li>Burnside Brewing (E Portland)</li>
             <li>Deschutes Brewery (NW Portland)</li>
             <li>Level Brewing (NE Portland)</li>
          </ul>
          <h4>Coffee and Tea</h4>
          <ul>
            <li>Steven Smith Teamaker (Yen’s favorite) (SW Portland)</li>
            <li>Stumptown Coffee (SW Portland)</li>
            <li>Rimsky-Korsakoffee House (SE Portland)</li>
          </ul>
          <h2>Food & Restaurants</h2>
          <ul>
            <li>Food cart pods (https://www.travelportland.com/article/food-cart-pods/)</li>
            <li>Andina (SW Portland): Peruvian</li>
            <li>Pok pok (multiple locations): Thai and Vietnamese street food</li>
            <li>Boxer Ramen (multiple locations): Japanese Ramen</li>
            <li>Pine State Biscuits (multiple locations): Biscuits and gravy</li>
            <li>Petite Provence (multiple locations): Pastries and brunch</li>
          </ul>
          <h4>Desserts</h4>
          <ul>
            <li>Voodoo Doughnuts</li>
            <li>Blue Star Donuts</li>
            <li>Salt & Straw Ice Cream</li>
            <li>Wiz Bang Bar</li>
            <li>Random Order Pie & Coffee</li>
            <li>Pie Spot</li>
          </ul>

          <h2>Sites & Activities</h2>
          <p>Portland is organized in directional quadrants with the Willamette River dividing east and west Portland and East Burnside Street and West Burnside Street dividing north and south Portland.</p>
          <h3>NE Portland</h3>
            <a href = "https://www.travelportland.com/directory/alberta-street/">Northeast Alberta Neighborhood</a><br />
            Alberta Street is a vibrant business district that celebrates individuality and diversity. The 26 blocks that make up this district are lined with a collection of unique locally owned boutiques, galleries, restaurants, bars and coffee shops. Also known as the “Alberta Arts District” many shops display original art, complementing the large collection of public art displayed along Alberta Street in the form of murals and street sculptures.
            Beyond offering a variety of local and ethnic cuisine and one-of-a-kind shopping experiences, many businesses provide sustainable and vegan friendly options.
            <br /><br />
            <b>The Grotto (NE Portland):</b><br /> A Catholic outdoor shrine and sanctuary. Take a walk through the tranquil trails or take the elevator up to the botanical gardens located above a cliff.<br /><br />
            <b>Cathedral Park (NE Portland):</b><br /> Take a stroll beneath the towering cathedral-like footings of the St. John’s bridge and take some epic photos. The site is also thought to be one of the 14 Lewis and Clark landing sites in the Vancouver-Portland area.<br /><br />
            <br />
          <h3>NW Portland</h3>
              <a href = "http://www.oregonlive.com/window-shop/index.ssf/2016/04/nw_23rd_shopping_guide.html">Northwest 23rd Street Neighborhood</a><br />
              There are so many wonderful and unique attractions around NW 23rd Avenue Portland that delight shoppers and visitors. Walk the street and find inspiring shops and boutiques, tantalizing restaurants, and comforting coffee houses.
              <br /><br />
              <b>Pittock Mansion (NW Portland):</b><br /> Follow the Wildwood Trail through Forest Park or drive up to see a historic mansion and panoramic views of Portland.<br />
          <br /><br />
          <h3>North Portland</h3>
              <a href = "https://www.pdxmonthly.com/features/neighborhood-guide-n-mississippi-williams">N Mississippi / Williams Neighborhood</a><br />
              From fancy brunch spots and bars to an eclectic bonanza of locally owned shops, this area is a gold mine for wanderers with a hunger for Portland culture writ large. Historically one of Portland’s few black neighborhoods, it was gutted by decades of so-called urban renewal and construction, with gentrification eventually pushing many of Albina’s long-time residents out of the area all together. So, yeah, it’s complicated.
          <br /><br />
          <h3>SW Portland / Downtown</h3>
          <a href = "http://explorethepearl.com/">Pearl District Neighborhood</a><br />
          Formerly a neglected corridor of abandoned warehouses and railways, the Pearl District has earned a worldwide reputation for urban renaissance. Located in the heart of downtown, the Pearl District is home to some of the city’s best-known chefs and restaurants, world class art galleries, and vibrant shops and boutiques.
          <br /><br />
              <b>Powell’s City of Books (SW Portland):</b><br /> Large independent bookstore. Not a place to miss.<br /><br />
              <b>Pioneer Square (SW Portland):</b><br />Also known as “Portland’s Living Room”, it’s a place to sit and people watch.<br /><br />
              <b>Oregon Museum of Science and Industry (OMSI) (SW Portland):</b><br /> Good food for kids and science lovers. Lots of hands-on experiments and puzzles to solve. You’ll need at least half a day here.<br /><br />
              <b>International Rose Test Garden (SW Portland):</b><br /> Located in Washington Park (same as the Japanese Garden, see below), come and smell the 650 varieties of roses. No wonder Portland is also known as The City of Roses.<br /><br />
              <b>Japanese Garden (SW Portland):</b><br /> Located in the same area as the International Rose Test Garden, come see a traditional Japanese garden composed of eight garden spaces and a Cultural Village.<br /><br />
              <b>Oregon Zoo (SW Portland):</b><br /> Who doesn’t love seeing animals? Located in Washington Park.<br /><br />
              <b>Saturday Market (SW Portland):</b><br /> An outdoor arts and crafts market in Portland held on Saturday and Sunday.<br /><br />
          <br />
          <h3>SE Portland</h3>
          <a href = "https://www.travelportland.com/collection/division-clinton/">Southeast Division Neighborhood</a><br />
          The Southeast Division Street and Clinton Street neighborhood is one of Portland’s most formative food neighborhoods. It’s where adventurous chefs and eaters joined forces in the 2000s to make little-known street foods a citywide sensation, and often, it’s where true flavors are born. You could easily spend days perusing the array of restaurants and bars — not to mention the food carts.
          <br />

        {close}
        </article>
        <article id="OurStory" className={`${this.props.article === 'OurStory' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">First Sight</h2>
          <p>In 2008, Yen and Isaac met at a Santa Barbara coffee shop, then known as the 'North Star'. Whether it was Yen or Isaac who approached the other first is a questions of semantics - you may have to listen to both versions of the story in order to decide.</p>
          <p>They quickly hit it off discussing the books they were reading (<i>Catch-22</i> by Joseph Heller and <i>We Were the Mulvaneys</i> by Joyce Carol Oates), and sipping coffee and tea. For the remainder of the day, Isaac showed Yen around downtown Santa Barbara.</p>
          <span className="image main"><img src={picourstory} alt="" /></span>
          <h2 className="major">Adventures</h2>
          <p>Since then, Yen and Isaac have traversed parts of the world and shared many adventures together.</p>
          <span className="image main"><img src={adventures} alt="" /></span>
          <p>They have been on numerous motorcycle rides, camping trips, and hikes throughout the world - visiting breweries, restaurants, and friends' weddings too!</p>
          <h2 className="major">The Proposal</h2>
          <p>In September 2017, after the 5th attempt at winning a lottery pass to climb Half Dome in Yosemite National Park, Isaac took Yen out for an motorcycle adventure to Yosemite. After a night spent at a roadside motel, they awoke early to begin a eight hour trek to summit Half Dome and back without knowing when or where they would spend the night.</p>
          <p>Upon summiting Half Dome, and a chance meeting with Isaac's friend Viren, Isaac asked Yen to pose for a photo with him on a ledge known as 'The Visor' and Viren to take the picture. Neither Yen nor Viren knew what was about to happen. It was here that Isaac put Yen between a rock and a hard place.</p>
          <span className="image main"><img src={rockhardplace} alt="" /></span>
          <p>10 years and multiple adventures later, we are gathering our family and friends in Portland, OR to tie the knot.</p>
          {close}
        </article>
        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
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
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool
}

export default Main
