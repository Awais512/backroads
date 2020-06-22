import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"

export default function Home() {
  return (
    <Layout>
      <SimpleHero>
        <Banner
          title="continue exploring"
          info="Travel and tourism guides - Many websites take the form of a digital version of a traditional guide book, aiming to provide advice on which destinations, attractions, accommodations, and so on, are worth a visit and providing information on how to access them."
        >
          <Link to="/tours" className="btn-white">
            explore tours
          </Link>
        </Banner>
      </SimpleHero>
      <About />
      <Services />
    </Layout>
  )
}
