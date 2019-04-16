import React, { Component } from "react";
import "./ImageTable.css";

class ImageTable extends Component {
  render() {
    const imageArray = this.props.imageData;

    return (
      <section className="articles-table-page">
        <div className="GridView container-fluid">
          <div className="row">
            {imageArray.map(oneImage => {
              return (
                <div className="col-4 myCol p-0 image-size">
                  <div className="square">
                    <img
                      src={oneImage.pictureUrl}
                      // className={`square-img ${oneContact.style}`}
                      alt="image2"
                    />
                  </div>
                  <h3 className="title-card">{oneImage.name}</h3>
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
