import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default function Home({ data }) {
  return (
    <Layout>
      <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
        <Banner
          title="continue exploring"
          info="Travel and tourism guides - Many websites take the form of a digital version of a traditional guide book, aiming to provide advice on which destinations, attractions, accommodations, and so on, are worth a visit and providing information on how to access them."
        >
          <AniLink fade to="/tours" className="btn-white">
            explore tours
          </AniLink>
        </Banner>
      </StyledHero>
      <About />
      <Services />
    </Layout>
  )
}

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
