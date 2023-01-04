import React, { Component } from "react";
import Slider from "react-slick";

export default class FocusOnSelect extends Component {
  render() {
    const settings = {
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
    };
    return (
      <div>
        <h2>solo</h2>
        <Slider {...settings}>
          <div>
            <h3>12222222222222222222222222222222222222222</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
