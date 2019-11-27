import React from 'react'

const Home = (props) => {

  return(
    <>
    <header className="masthead">
    <div className="container d-flex h-100 align-items-center">
      <div className="mx-auto text-center">
        <h1 className="mx-auto my-0 text-uppercase">POPGeek</h1>
        <h2 className="text-white-50 mx-auto mt-2 mb-5">Geeks of Every Kind UNITE!</h2>
        <button className="btn btn-primary fontb">
        <a href="/front_page">Enter Site |</a>
        </button>
        <button className="btn btn-primary fontb">
        <a href="/boards"> Enter Forums</a>
        </button>
      </div>
    </div>
  </header>
    </>
  )
}
export default Home