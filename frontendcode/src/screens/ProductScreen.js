import React from 'react'
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import { data } from '../data'

export default function ProductScreen(props) {
    // console.log(props.match.params.id);
    const product = data.products.find(x => x._id === props.match.params.id);
    // console.log(product);
    if (!product) {
        return <div><h1>Product Not Found</h1></div>
    } else {
        return (
            <div>
                <Link to="/">Back to reasul</Link>
                <div className="row top">
                    <div className="col-2">
                        <img className="large" src={product.image} alt={product.name} />
                    </div>
                    <div className="col-1">
                        <ul>
                            <li>
                                <h1>{product.name}</h1>
                            </li>
                            <li>
                                <Rating rating={product.rating} numReviews={product.numReviews} ></Rating>
                            </li>
                            <li>
                                <b>Price : ${product.price}</b>
                            </li>
                            <li>
                                <p>{product.descripation}</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-1">
                        <div className="card card-body">
                            <ul>
                                <li>
                                    <div className="row">
                                        <div>Price</div>
                                        <div className="price">${product.price}</div>
                                        <div></div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div>Status</div>
                                        <div>
                                            {
                                                product.countInStock > 0 ?
                                                    (
                                                        <span className="success"> In Stock</span>
                                                    ) : (
                                                        <span className="error"> Uavailable</span>
                                                    )
                                            }
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <button className="primary block">Add to cart</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
