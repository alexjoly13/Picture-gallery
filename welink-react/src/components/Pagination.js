import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Pagination.css";

class Pagination extends Component {
  render() {
    const imageArray = this.props.imageData;
    var pageFloor = Math.floor(imageArray.length / 9);
    var itemStart = [];
    for (var i = 1; i < pageFloor; i++) {
      itemStart.push(i * 9);
    }
    const itemEnd = itemStart.map(oneIndex => {
      return oneIndex + 9;
    });
    if (imageArray.length / 9 !== 0) {
      itemStart.push(pageFloor * 9);
      itemEnd.push(pageFloor * 9 + (imageArray.length % 9));
    }
    var paginationButtons = [];
    for (i = 1; i <= itemStart.length; i++) {
      paginationButtons.push(i);
    }

    return (
      <div>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            {paginationButtons.map((oneButton, index) => {
              return (
                <li className="page-item" key={index}>
                  <Link
                    className="page-link"
                    to="#"
                    onClick={event =>
                      this.props.products(
                        event,
                        itemStart[index],
                        itemEnd[index]
                      )
                    }
                  >
                    {oneButton}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Pagination;
