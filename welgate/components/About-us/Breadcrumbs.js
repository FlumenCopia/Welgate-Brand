import React from 'react'

function Breadcrumbs() {
  return (
    <div>
        <section className="breadcrumbbanner">
            <nav className="container breadcrumb-container">
                <h3>Gallery</h3>
                <ol className="cd-breadcrumb">
                  <li><a href="/">Home</a></li>
                  <li className="current">Gallery</li>
                </ol>
              </nav>
        </section>
    </div>
  )
}

export default Breadcrumbs