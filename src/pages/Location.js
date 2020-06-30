import React, { Component, PropTypes } from 'react'
import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'
import Overlay from 'pigeon-overlay'
import DraggableOverlay from './sub-pages/Draggable-overlay'
import data from './sub-pages/rider.json'
import pigeon from './sub-pages/pigeon.svg'

const providers = {
  osm: (x, y, z) => {
    const s = String.fromCharCode(97 + (x + y + z) % 3)
    return `https://${s}.tile.openstreetmap.org/${z}/${x}/${y}.png`
  }
}

var markers = []

export default class Location extends Component {
  constructor (props) {
    super(props)

    this.state = {
      center: [40.00, -105.25],
      zoom: 11,
      provider: 'osm',
      minZoom: 1,
      maxZoom: 18,
      status: '',
      message: '*Click marker to see the name',
      marker_overlay: [40.00, -105.25],
      markers: []
    }
  }

  zoomIn = () => {
    this.setState({
      zoom: Math.min(this.state.zoom + 1, 18)
    })
  }

  zoomOut = () => {
    this.setState({
      zoom: Math.max(this.state.zoom - 1, 1)
    })
  }

  componentDidMount() {
    fetch('http://localhost:3000/riders.json')
    .then((response) => { return response.json(); })
    .then((myJson) => {
      this.setState({markers: myJson});
    });
  }

  render () {
    const { center, zoom, provider, minZoom, maxZoom, status, marker_overlay, message, markers } = this.state

    return (
      <div className="container content">
      <h2>Location</h2><br />
      <h5>Check the location of bikers in a real time! 🚴🚴🚴</h5><br />
      <div>
          {this.state.message}
      </div>
        <div style={{maxWidth: 600, margin: '0 auto'}}>
          <Map
            limitBounds='edge'
            center={center}
            zoom={zoom}
            provider={providers[provider]}
            minZoom={minZoom}
            maxZoom={maxZoom}
            defaultWidth={600}
            height={400} >

            {Object.keys(markers).map(index => (
              <Marker key={markers[index].id} position={markers[index].lat_long} anchor={JSON.parse(markers[index].lat_long)} payload={markers[index].lat_long}
              onClick={() => this.setState({ zoom: this.state.zoom, statusClass: "box sb3",
                marker_overlay: JSON.parse(markers[index].lat_long),
                status: "🚴 " + markers[index].first_name + " " +  markers[index].last_name,
                message: "Rider Name: " + markers[index].first_name + " " +  markers[index].last_name })}
            />

            ))}
            <Overlay anchor={marker_overlay} offset={[10, 55]}>
              <span className={this.state.statusClass}><small>{this.state.status}</small></span>
            </Overlay>
          </Map>
        </div>
      </div>
    )
  }
}
