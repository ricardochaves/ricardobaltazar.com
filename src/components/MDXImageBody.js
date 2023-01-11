import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";

const MDXImageBody = (props) => {
    const image = props.img.mdx.frontmatter.embeddedImagesLocal[props.index].childImageSharp.gatsbyImageData;
    return <GatsbyImage image={image} alt={props.alt}/>

}
export default MDXImageBody;
