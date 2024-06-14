import React from 'react'

const HeroBanner = () => {
  return (
    <>
      <section className="banner" id='heroBanner'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-xl-7">
              <div className="block">
                <div className="divider mb-3"></div>
                <span className="text-uppercase text-sm letter-spacing ">Expert Care for Your Well-Being</span>
                <h1 className="mb-3 mt-3">A healthy outside starts from the inside.</h1>

                <p className="mb-4 pr-5">At our clinic, we believe that compassion is the bedrock of medical professionalism. We are dedicated to your holistic well-being, carefully tending to both your mental and physical health with the utmost attention and care.</p>
                <div className="btn-container ">
                  {/* <a href="appoinment.html" target="_blank" className="btn btn-main-2 btn-icon btn-round-full">Make appoinment
                    <i className="icofont icofont-simple-right ml-2  "></i></a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroBanner
