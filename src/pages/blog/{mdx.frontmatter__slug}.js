import * as React from 'react'
import Layout from '../../components/Layout';
import {graphql, Link} from 'gatsby'
import SocialLinks from "../../components/SocialLinks";
import Footer from "../../components/Footer";
import BlogHeader from "../../components/BlogHeader";
import Scroll from "../../components/Scroll";


const BlogPost = ({ data, children }) => {

    return (
        <Layout>
            <BlogHeader />
            <header className={"masthead " + data.mdx.frontmatter.bg_image_class}>
                <div className="container d-flex h-100 align-items-center">
                    <div className="mx-auto text-center">
                        <h1 className="mx-auto my-0 text-uppercase">{data.mdx.frontmatter.subject}</h1>
                        <h2 className="text-white-50 mx-auto mt-2 mb-5">
                            {data.mdx.frontmatter.resume}
                        </h2>
                        <Scroll type="id" element="post">
                            <a href="#post" className="btn btn-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-chevron-double-down" viewBox="0 0 16 16">
                                    <path fillRule="evenodd"
                                          d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                    <path fillRule="evenodd"
                                          d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </a>
                        </Scroll>
                    </div>
                </div>
            </header>
            <section className="post-section bg-black" id="post">
                <article className="article">
                    <h1 className="text-center">{data.mdx.frontmatter.title}</h1>
                    {children}
                    <p className="small">{data.mdx.frontmatter.date}</p>
                    <p className="small">Background image credits for
                        <Link to={data.mdx.frontmatter.hero_image_credit_link}>
                            {data.mdx.frontmatter.hero_image_credit_text}
                        </Link>
                    </p>
                </article>
            </section>
            <SocialLinks />
            <Footer />
        </Layout>
    )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        resume,
        subject,
        bg_image_class,
        hero_image_credit_text,
        hero_image_credit_link
      }
    }
  }
`


export default BlogPost