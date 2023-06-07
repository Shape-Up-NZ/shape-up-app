import React from "react";
import { Container } from "react-bootstrap";

import HeroBanner from "../components/HeroBanner";
import Footer from "../components/Footer";
import HomeContent from "../components/HomeContent";

const Home = () => {
  return (
    <>
      <Container>
        <HeroBanner />
        <HomeContent />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
