import React from "react"
// import { Link } from "gatsby"
import Layout from "../layout/layout"
import SEO from "../components/Seo/seo"
import Header from "../components/Header/header"
import Footer from "../components/Footer/footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header siteTitle={'TEST HEADER'} />
    <Footer footerTitle={'TEST FOOTER'} />
  </Layout>
)

export default IndexPage;
