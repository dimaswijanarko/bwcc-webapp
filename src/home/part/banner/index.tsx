import { array } from "prop-types";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { useStyles } from "./styles";

const Banner = () => {
  const classes = useStyles();

  const SliderData = [
    {
      image_url:
        "https://bwcc.inovasialfatih.com/admin/images/content_image/image-content-19111108443991.jpg",
    },
    {
      image_url:
        "https://bwcc.inovasialfatih.com/admin/images/content_image/image-content-19111111270430.jpg",
    },
    {
      image_url:
        "https://bwcc.inovasialfatih.com/admin/images/content_image/image-content-19111111271526.jpg",
    },
    {
      image_url:
        "https://bwcc.inovasialfatih.com/admin/images/content_image/image-content-19111111272726.jpg",
    },
    {
      image_url:
        "https://bwcc.inovasialfatih.com/admin/images/content_image/image-content-19111111273892.jpg",
    },
    {
      image_url:
        "https://bwcc.inovasialfatih.com/admin/images/content_image/image-content-19111111275095.jpg",
    },
    {
      image_url:
        "https://bwcc.inovasialfatih.com/admin/images/content_image/image-content-19111111280292.jpg",
    },
    {
      image_url:
        "https://bwcc.inovasialfatih.com/admin/images/content_image/image-content-19111111281366.jpg",
    },
  ];
  return (
    <div className={classes.root}>
      <Carousel
        animation="slide"
        indicators
        className="custom-slider"
        activeIndicatorProps={{ className: "custom-indicator", style:{} }}
      >
        {SliderData.map((x, i) => (
          <img src={x.image_url} alt="slider" key={i} />
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
