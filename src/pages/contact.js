import React from "react"
import Layout from "../layout/layout"
import Header from "../components/Header/header"
import Footer from "../components/Footer/footer"
import Logo from "../components/Logo/logo"
import Navigation from "../components/Navigation/navigation"

const IndexPage = () => {
  return (
  <Layout>
    <Header>
      <Logo />
      <Navigation />
    </Header>
    <p>TEST CONTACT PAGE</p>
    <Footer />
  </Layout>
  )
}

export default IndexPage;
