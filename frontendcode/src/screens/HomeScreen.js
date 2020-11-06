import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { data } from '../data';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProduct } from '../Action/productAction';


export default function HomeScreen() {
    // const [products, setProducts] = useState([]);
    // const [loaging, setLoaging] = useState(false);
    // const [errors, setError] = useState(false);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             setLoaging(true)
    //             const { data } = await axios.get('/api/products');
    //             setLoaging(false);
    //             setProducts(data);
    //         } catch (error) {
    //             setError(error.message)
    //             setLoaging(false);
    //         }
    //     }
    //     fetchData();
    // }, [])

    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProduct());
        return () => {

        }
    }, [])

    return (
        <div>
            {
                loading ?
                    (
                        <LoadingBox></LoadingBox>
                    ) :
                    error ?
                        (
                            <MessageBox variant="danger">{error}</MessageBox>
                        ) :
                        (
                            <div className="row center">

                                {
                                    products.map((product) => (
                                        <Product key={product._id} product={product}></Product>
                                    ))
                                }
                            </div>
                        )
            }
        </div>
    )
}
