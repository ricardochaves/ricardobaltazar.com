import React from 'react';
import Layout from '../../components/Layout';
import SocialLinks from "../../components/SocialLinks";
import Footer from "../../components/Footer";
import {Link, graphql} from 'gatsby'
import BlogHeader from "../../components/BlogHeader";


export const query = graphql`
  query {
  allMdx(sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
        slug
        resume
      }
      id
    }
  }
  site {
    siteMetadata {
      title
    }
  }
}
`
const BlogPage = ({ data }) => {
    return (
<Layout>
    <BlogHeader />
    <section className="blog-list-section text-center" id="list-of-posts">
    {
        data.allMdx.nodes.map((node) => (
            <React.Fragment key={node.id}>
                <article key={node.id} >
                    <h2 className="text-white mb-4">
                        <Link to={`/blog/${node.frontmatter.slug}`}>
                            {node.frontmatter.title}
                        </Link>
                    </h2>
                    <p className="text-white-50">{node.frontmatter.resume}</p>
                    <p className="text-white-50">Posted: {node.frontmatter.date}</p>
                </article>
            </React.Fragment>
        ))
    }

    </section>
    <SocialLinks />
    <Footer />
</Layout>
)}

export default BlogPage;

export function Head  ({ data })  {

    return (<>
            <title>Blog - {data.site.siteMetadata.title}</title>
        </>
    )
}