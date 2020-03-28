import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import { MdLocationOn } from 'react-icons/md'

// const AnyReactComponent = ({ text }) => <div>{text}</div>

const Marker = props => {
  return (
    <>
      <MdLocationOn className="google-map-maker" />
    </>
  )
}

class ServiceQueryMap extends Component {
  static defaultProps = {
    center: {
      lat: 25.034601,
      lng: 121.543463,
    },
    zoom: 14,
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {/* <AnyReactComponent
            lat={25.034601}
            lng={121.543463}
            text={'Kreyser Avrora'}
          /> */}
          <Marker lat={25.034601} lng={121.543463} />
        </GoogleMapReact>
      </div>
    )
  }
}

export default ServiceQueryMap
