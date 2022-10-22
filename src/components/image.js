import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'
import React from 'react'
import "./image.css"


const Image = () => {
    const data = useStaticQuery(graphql`
        query {
            allFile(
                filter: {
                extension: {regex: "/(jpg)|(png)|(jpeg)/"}, 
                name: {nin: ["example", "gatsby-icon", "CUNY-Dominican-Studies-Institute-RGB"]}}
            ) {
                edges {
                node {
                    base
                    childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                    }
                }
                }
            } 
        }
    `)

    return (
        <div className="image-container"> 
            <div className="image-grid">
                {data.allFile.edges.map((image, key) => (
                    <Img key={key}
                    className="image-item"
                    fluid={image.node.childImageSharp.fluid}
                    alt={image.node.base.split('.')[0]}
                    />
                ))}
            </div>
        </div>
        

        
    )
}

export default Image