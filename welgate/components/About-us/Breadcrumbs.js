import React from 'react'

function Breadcrumbs() {
  return (
    <div>
      
        <section className="breadcrumbabout">
            <nav className="container breadcrumb-container">
                <h3 className='breadcrumbstyle'>About Us</h3>
                <ol className="cd-breadcrumb">
                  <li><a href="/">Home</a></li>
                  <li className="current ">About</li>
                </ol>
              </nav>
        </section>
    </div>
  )
}

export default Breadcrumbs