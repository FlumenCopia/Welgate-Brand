import React from 'react'

function ShopDetail() {
  return (
    <div>
        <section id="shop" className="tg-shop-details-area tg-shop-details-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="tg-section-title text-center mb-70">
                                <span className="sub-title">purchase product</span>
                                <h2 className="title">take your supplements</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio consequuntur recusandae voluptates sequi voluptatibus error! gorem ipsum dolor sit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="inner-shop-details-flex-wrap">
                                <div className="inner-shop-details-img-wrap">
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane show active" id="item-one" role="tabpanel" aria-labelledby="item-one-tab">
                                            <div className="inner-shop-details-img">
                                                <img src="assets/img/products/shop-details-thumb01.png" alt="img"/>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="item-two" role="tabpanel" aria-labelledby="item-two-tab">
                                            <div className="inner-shop-details-img">
                                                <img src="assets/img/products/shop-details-thumb02.png" alt="img"/>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="item-three" role="tabpanel" aria-labelledby="item-three-tab">
                                            <div className="inner-shop-details-img">
                                                <img src="assets/img/products/shop-details-thumb03.png" alt="img"/>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="item-four" role="tabpanel" aria-labelledby="item-four-tab">
                                            <div className="inner-shop-details-img">
                                                <img src="assets/img/products/shop-details-thumb04.png" alt="img"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="inner-shop-details-nav-wrap">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <a href="#" className="nav-link active" id="item-one-tab" data-bs-toggle="tab" data-bs-target="#item-one" role="tab" aria-controls="item-one" aria-selected="true"><img src="assets/img/products/shop-details-thumb01.png" alt=""/></a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a href="#" className="nav-link" id="item-two-tab" data-bs-toggle="tab" data-bs-target="#item-two" role="tab"
                                            aria-controls="item-two" aria-selected="false"><img src="assets/img/products/shop-details-thumb02.png" alt=""/></a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a href="#" className="nav-link" id="item-three-tab" data-bs-toggle="tab" data-bs-target="#item-three" role="tab"
                                            aria-controls="item-three" aria-selected="false"><img src="assets/img/products/shop-details-thumb03.png" alt=""/></a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a href="#" className="nav-link" id="item-four-tab" data-bs-toggle="tab" data-bs-target="#item-four" role="tab" aria-controls="item-four" aria-selected="false"><img src="assets/img/products/shop-details-thumb04.png" alt=""/></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="inner-shop-details-content">
                                <h4 className="title">Whey Mass Protein <br/> Powder</h4>
                                <div className="tg-shop-details-review">
                                    <div className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <span>( 2 Customer Review )</span>
                                </div>
                                <div className="inner-shop-details-price">
                                    <h2 className="price">$29.99</h2>
                                    <h5 className="stock-status">- IN Stock</h5>
                                </div>
                                <p>Suxnix food is food produced by methods complying with the standards of Rrganic farming. Standards vary Lorem ipsum dolor sit amet consectetur adipiscing worldwide, complying but organic farming.</p>
                                <div className="tg-progress-wrap">
                                    <div className="tg-progress-content">
                                        <ul className="list-wrap">
                                            <li>Ordered: <span>20</span></li>
                                            <li>Items available: <span>360</span></li>
                                        </ul>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" tyle={{ width: '5%' }}aria-valuenow={5}aria-valuemin={0}
  aria-valuemax={100}></div>
                                    </div>
                                </div>
                                <div className="inner-shop-perched-info">
                                    <div className="sd-cart-wrap">
                                        <form action="#">
                                            <div className="quickview-cart-plus-minus">
                                                <input type="text" value="1"/>
                                            </div>
                                        </form>
                                    </div>
                                    <a href="cart.html" className="cart-btn">add to cart</a>
                                    <a href="shop-details.html" className="wishlist-btn" data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist"><i className="far fa-heart"></i></a>
                                </div>
                                <div className="tg-shop-details-list">
                                    <ul className="list-wrap">
                                        <li>SKU : <a href="#">WE888T12</a></li>
                                        <li>Category : <a href="#">growth promoter</a></li>
                                        <li>TAGS : <a href="#">calcium</a></li>
                                    </ul>
                                </div>
                                <div className="inner-shop-details-bottom tg-shop-content-bottom">
                                    <p>Free worldwide shipping on all orders over <span>$50</span></p>
                                    <span><i className="far fa-clock"></i>30 days easy returns</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default ShopDetail