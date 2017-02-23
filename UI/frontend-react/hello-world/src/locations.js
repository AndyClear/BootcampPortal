import React from 'react'
import Map from 'google-maps-react'

  class Locations extends React.Component {

  render() {
  return (
  	<div>

  		<div>
  			<h2>Locations:</h2>
  		</div>

  		<div>
  			<h3>Capgemini Holborn Office</h3>
  			<div>
          <img src="./HolbornOffice.png" />
  			</div>	
  		</div>

      <div>
        <h3>Code Node</h3>
        <div>
          <img src="./CodeNode.png" />
        </div>      
      </div>

  	</div>
  	)
  }
}


export default Locations;