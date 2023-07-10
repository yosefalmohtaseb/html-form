import React, { Component } from "react";

const images = [
  {
    key: 1,
    title: "Image 1",
    description: "This is the description for Image 1",
    imageUrl: "https://example.com/image1.jpg"
  },
  {
    key: 2,
    title: "Image 2",
    description: "This is the description for Image 2",
    imageUrl: "https://example.com/image2.jpg"
  },
  {
    key: 3,
    title: "Image 3",
    description: "This is the description for Image 3",
    imageUrl: "https://example.com/image3.jpg"
  }
];

class Image extends Component {
  render() {
    const { title, src, alt, background = "" } = this.props;
    
    return (
      <div className={`image-container ${background && 'background-color'}`}>
        {images.map(image => (
          <div key={image.key}>
            <h2>{image.title}</h2>
            <p>{image.description}</p>
            <img src={image.imageUrl} alt={image.title} />
          </div>
        ))}
      </div>
    );
  }
}

export default Image;
