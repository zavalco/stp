import React from "react"
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"
import index from "../styles/Discussion.module.css"
import Nav from "../Components/Nav/Nav"

const Discussion = () => {
    return (
        <>
            <div className={index.body}>
                <Header />
                <Nav />
      <div className="subBody">
                <div className={index.box}>
                    <h1>Discord</h1>
                    <p>
                    The Serving the People Discord is where our community gathers to discuss and chat. It features a diverse selection of channels, including art, film, video, tech, and more.
                    </p>
                    <div className={index.buttonBody}>
                        <button className={index.button}>
                            Join the Conversation
                        </button>
                    </div>
                    <h1>Urbit</h1>
                    <p>
                    Urbit is a new OS and peer-to-peer network that is designed to be simple, built to last forever, and 100% owned by its users. Urbit's Landscape, a collection of native apps for communicating and collaborating on the network, presents the possibility of a new way forward.
                    </p>
                    <p>
                    Serving the People has partnered with the Tlon Corporation to offer free hosting (usually $20/month) to members of Serving the People. Join us and a cohort of communities making the move to Urbit's Landscape.
                    </p>
                    <div className={index.buttonBody}>
                        <button className={index.button}>
                            Learn More
                        </button>
                    </div>
                </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Discussion
