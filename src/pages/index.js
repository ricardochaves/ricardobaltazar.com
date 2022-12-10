import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Header from '../components/Header';

import ipad from '../assets/images/ipad.png';

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            {config.subHeading}
          </h2>
          <Scroll type="id" element="about">
            <a href="#about" className="btn btn-primary">
              About
            </a>
          </Scroll>
        </div>
      </div>
    </header>

    <section id="about" className="about-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">Ricardo Baltazar Chaves</h2>
            <p className="text-white-50">
              Trying to look back and regret what I did, not what I didn't do. Software engineer. With a perfect marriage. Fighting to be free. Trying to live forever, so far succeeding.
            </p>
          </div>
        </div>
        <img src={ipad} className="img-fluid" alt="" />
      </div>
    </section>


    <SocialLinks />
    <Footer />
  </Layout>
);

export default IndexPage;
