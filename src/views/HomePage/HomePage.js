import React from 'react';
import { HorizontalSlideShow } from './Carousel';
import Layout from '../../components/Layout';
import image from '../../assets/image.png'
function HomePage() {
  const slider = {
    children: [
      {
        image: {image},
        infor: "Information 1"
      },
      {
        image: {image},
        infor: "Information 2"
      },
      {
        image: {image},
        infor: "Information 3"
      },
    ]
  }
  return (
    <Layout>
      <HorizontalSlideShow slider={slider} />
    </Layout>
  );
}

export default HomePage;