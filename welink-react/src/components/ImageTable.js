import React, { Component } from "react";
import "./ImageTable.css";

class ImageTable extends Component {
  render() {
    const imageArray = this.props.imageData;

    return (
      <section className="articles-table-page">
        <div className="container-fluid">
          <div className="row">
            {imageArray.map((oneImage, index) => {
              return (
                <div className="col-4 p-0" key={index}>
                  <div>
                    <img src={oneImage.pictureUrl} alt="Some Pic" />
                  </div>
                  <div className="image-infos">
                    <h3 className="image-name">{oneImage.name}</h3>
                    <p className="description">Category: {oneImage.category}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default ImageTable;
