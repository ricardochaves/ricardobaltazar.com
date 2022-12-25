import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Header from '../components/Header';

import {StaticImage} from "gatsby-plugin-image";
import {graphql, Link, useStaticQuery} from "gatsby";

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead masthead-bg-img">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            {config.subHeading}
          </h2>
          <Scroll type="id" element="about">
            <Link to="#about" className="btn btn-primary">
              About
            </Link>
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
           <StaticImage src='../assets/images/ipad.png' className="img-fluid" alt="a ipad" />
      </div>
    </section>

    <SocialLinks />
    <Footer />
  </Layout>
);

export default IndexPage;

export function Head  ()  {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
            site {
              siteMetadata {
                title
                metaDescription
              }
            }
          }
  `)
    return (<>
            <title>{data.site.siteMetadata.title}</title>
            <meta name="X-Robots-Tag" content="index, follow"/>
            <meta name="description" content={data.site.siteMetadata.metaDescription}/>
        </>
    )
}