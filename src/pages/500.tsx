import React from "react"
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"
import index from "../styles/Contact.module.css"
import Nav from "../Components/Nav/Nav"

export default function Custom500() {

  return (
    <>
      <div className="body">
        <Header />
        <Nav />
      <div className="subBody">
        <div className={index.box}>
          <h1>500 - Server-side error occurred</h1>
        </div>
        </div>
        <Footer />
      </div>
    </>
  )
}