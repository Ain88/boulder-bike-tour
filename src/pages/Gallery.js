import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import request from "superagent";
import debounce from "lodash.debounce";

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      hasMore: true,
      isLoading: false,
      images: [],
      index1: 3
    };

    window.onscroll = debounce(() => {
      const {
        loadImages,
        state: {
          error,
          isLoading,
          hasMore,
          index1
        },
      } = this;

      if (error || isLoading || !hasMore) return;
      if (
        window.innerHeight + document.documentElement.scrollTop
        === document.documentElement.offsetHeight
      ) {
        loadImages();
      }
    }, 200);
  }

  componentWillMount() {
    this.loadImages();
  }

  loadImages = () => {
    var index1= this.state.index1;
    const API_ENDPOINT = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=ee137cc6b2417b2a745069e6f1902665&tags=bike+race&per_page=40&format=json&nojsoncallback=1&page=${index1}`;

    this.setState({ isLoading: true }, () => {
        fetch(API_ENDPOINT)
        .then((response) => {
        return response.json().then((json) => {
          const nextImages = json.photos.photo.map(({farm, server, id, secret}) => {
              return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
        });


          this.setState({
            hasMore: (this.state.images.length < 300),
            isLoading: false,
            images: [
              ...this.state.images,
              ...nextImages,
            ],
            index1: this.state.index1 + 1
          });
        })})
        .catch((err) => {
          this.setState({
            error: err.message,
            isLoading: false,
           });
        })
    });}

  render() {
    const {
      error,
      hasMore,
      isLoading,
      images
    } = this.state;

    return (
      <div>
        <div className="container content">
        <h2>Gallery</h2><br />
          <div className= "row image-scroller">
            {images.map((image, index) => (
              <div key={index} className ="image-gallery col-6 col-md-3">
                <img src={image} />
              </div>
            ))}
          </div>
        </div>

        <hr />
        {error &&
          <div style={{ color: '#900' }}>
            {error}
          </div>
        }
        {isLoading &&
          <div>Loading...</div>
        }
        {!hasMore &&
          <div>You reached the end!</div>
        }
      </div>
    );
  }
}

export default Gallery;
