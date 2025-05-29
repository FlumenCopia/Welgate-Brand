import React from 'react'

function InitiativeInner() {
  return (

<div>
<section className="breadcrumbabout">
            <nav className="container breadcrumb-container">
                <h3 className='breadcrumbstyle'>Initiative</h3>
                <ol className="cd-breadcrumb">
                  <li><a href="/">Initiative-1</a></li>
                  <li className="current ">Welgate Farms</li>
                </ol>
              </nav>
        </section>

 <div className='container'>
  <div className='row mt-130 pb-90 '>
    
    <div className='col-lg-4 d-flex flex-column  '>
      <p className='pfont2 clrred mb-2'>Welgate Farms</p>
      <p className='pfont ' style={{ textAlign: 'justify' }}>
          At Welgate Farms, we believe that true wellness begins at the roots—with the food we grow and the way we nurture our land.By cultivating nutrient-rich produce without harmful pesticides or artificial additives, we offer families a healthier, safer alternative that reconnects them with nature's purest offerings. Every harvest from our farms is a step toward a future where health, environment, and consciousness grow hand in hand.

      </p>
    </div>
    
    <div className='col-lg-8 d-flex justify-content-end'>
      <img
        className='img-fluid'
        src='/assets/img/gold-silver-chess-chess-board-game-business-metaphor-leadership-concept_1150-19592.avif'
        alt="Welgate Farms"
        style={{ maxWidth: '100%', height: 'auto', borderRadius:'50px' }}
      />
    </div>
    
  </div>
</div>
</div>
    

   
  )
}

export default InitiativeInner