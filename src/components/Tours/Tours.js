import React from "react"
import TourList from "./TourList"
import { useStaticQuery, graphql } from "gatsby"

const Tours = () => {
  const { tours } = useStaticQuery(graphql`
    {
      tours: allContentfulTour {
        edges {
          node {
            name
            price
            slug
            country
            contentful_id
            days
            images {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)

  return <TourList tours={tours} />
}

export default Tours
