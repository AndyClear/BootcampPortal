import React from 'react'
import './locations.css';
//import Map from 'google-maps-react'

  class Locations extends React.Component {

  render() {
  return (
  	<div>

  		<div>
  			<h2>Locations</h2>
        <hr />
  		</div>

  		<div>
  			<h3>Capgemini Holborn Office</h3>
  			<div class="MapIframe">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9930.984451994229!2d-0.106528!3d51.5178737!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc79223583b94c756!2sCapgemini!5e0!3m2!1sen!2suk!4v1487855443744" width="1055" height="450" frameborder="0"  allowfullscreen></iframe>
  			</div>
  		</div>

      <div>
        <h3>Code Node</h3>
        <div class="MapIframe">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9930.98445199423!2d-0.10652800000005574!3d51.517873699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cac6aabb2fb%3A0x91b283e2f67d1dbb!2sCodeNode!5e0!3m2!1sen!2suk!4v1487855504584"  width="1055" height="450"frameborder="0"  allowfullscreen></iframe>
        </div>
      </div>

  	</div>
  	)
  }
}


export default Locations;
