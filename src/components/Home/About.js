import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
// import img from "../../images/defaultBcg.jpeg"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAbout)
  return (
    <section className={styles.about}>
      <Title title="About" subtitle="Us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            {/* <img src={img} alt="About" /> */}
            <Img
              fluid={aboutImage.childImageSharp.fluid}
              alt="Awesome Landscape"
            />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>Explore the difference</h4>
          <p>
            Backroads based in in karachi, pakistan. We offer complete travel
            and tours to our corporate clients. But are always expanding and
            enhancing our wide range of services. Over the years, We turn our
            startup into a trusted resource that has helped tens of thousands of
            people better enjoy their travel..
          </p>
          <p>
            Pakistan is a destination for every one but is very little visited
            by the world due to bad image from the media. You can rely on Travel
            & Culture Services in Pakistan to show you this fabulous country.
            Ours is an owner managed company that takes every care to make your
            stay in Pakistan comfortable and hassle free.
          </p>
          <button type="button" className="btn-primary">
            Read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
