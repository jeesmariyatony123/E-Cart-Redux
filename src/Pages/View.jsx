import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import { addWishlistItem } from '../REDUX/Slices/wishlistSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../REDUX/Slices/cartSlice';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function View() {
  const cart = useSelector(state => state.cartReducer)

  const wishlist = useSelector(state => state.wishlistReducer)
  const dispatch = useDispatch()

  const [product, setProduct] = useState({})
  const { id } = useParams()
  // console.log(id);

  useEffect(() => {
    if (sessionStorage.getItem("allProducts")) {
      const allProducts = JSON.parse(sessionStorage.getItem("allProducts"))
      setProduct(allProducts.find(item => item.id == id))
    }
  }, [])

  // const wishlist = useSelector(state => state.wishlistReducer)
  // const dispatch = useDispatch()

  const handleWishlist = (product) => {
    if (wishlist?.includes(product)) {
      toast.success("Item already in your Wishlist!!!")
    } else {
      dispatch(addWishlistItem(product))

    }
  }

  const handleCart = (product) => {
    const existingroduct = cart?.find(item => item.id == product.id)
    if (existingroduct) {
      dispatch(addToCart(product))
      toast.success("Products added to your cart!!!")
    } else {
      dispatch(addToCart(product))
      // toast.success("Product added to your cart!!!")
    }
  }

  return (
    <>
      <Header />

      <div style={{ marginTop: '200px', height: '70vh' }} className='container d-flex align-items-center'>
        <div className="row mb-5 align-items-center">
          <div className="col-lg-6">
            <img width={'600px'} height={'400px'} className='img-fluid' src={product?.thumbnail} alt="" />
          </div>
          <div className="col-lg-6">
            <h5>PID: {product?.id}</h5>
            <h1>{product?.title}</h1>
            <h3 className='text-danger fw-bolder '>$ {product?.price}</h3>
            <p style={{ textAlign: 'justify' }}><b>Description: </b> {product?.description}</p>
            <div className='d-flex justify-content-between'>
              <button onClick={() => handleWishlist(product)} className='btn btn-outline-primary'><i className='fa-solid fa-heart text-danger me-1'></i>Add to Wishlist</button>
              <button onClick={() => handleCart(product)} className='btn btn-outline-primary'><i className='fa-solid fa-cart-plus text-success me-1'></i>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer position='top-center' theme='colored' autoClose={3000} />
    </>
  )
}

export default View