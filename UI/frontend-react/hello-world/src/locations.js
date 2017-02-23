import React from 'react'
import Map from 'google-maps-react'

  class Locations extends React.Component {

  render() {
  return (
  	<div>

  		<div>
  			<h2>Locations</h2>
  		</div>

  		<div>
  			<h3>Capgemini Holborn Office</h3>
  			<div>
  			<Map google={this.props.google}
  			style={{width: '500px', height: '500px', position: 'absolute'}} 
  			zoom={14}>
  			</Map> 
  			</div> 			
  		</div>

  	</div>
  	)
  }
}


export default Locations;