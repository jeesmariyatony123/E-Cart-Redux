import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import image from '../assets/images/download (1).png'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeCartItem, incQuantity, decQuantity, emptyCart } from '../REDUX/Slices/cartSlice';

function Cart() {

  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cartReducer)
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    if (cartItems?.length > 0) {
      setCartTotal(cartItems?.map(item => item.totalPrice).reduce((t1, t2) => t1 + t2))
    } else {
      setCartTotal(0)
    }
  }, [cartItems])

  const handleDecrementQuantity = (product) => {
    if (product.quantity > 1) {
      dispatch(decQuantity(product.id))
    } else {
      dispatch(removeCartItem(product.id))
    }
  }

  return (
    <>
      <Header />
      <div className='container' style={{ marginTop: '100px' }}>
        {cartItems?.length > 0 ?
          <div className='pt-5'>
            <h1>Cart Summary</h1>
            <div className="row mt-5">
              <div className="col-lg-8">
                <table className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Image</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>...</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems?.map((product, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{product.title.slice(0, 16)}...</td>
                        <td><img width={'60px'} height={'60px'} src={product.thumbnail} alt="" /></td>
                        <td>
                          <div className='d-flex'>
                            <button onClick={() => handleDecrementQuantity(product)} className='btn fw-bolder'>-</button>
                            <input value={product.quantity} style={{ width: '70px' }} className='form-control' type="text" placeholder='0' readOnly />
                            <button onClick={() => dispatch(incQuantity(product.id))} className='btn fw-bolder'>+</button>
                          </div>
                        </td>
                        <td>$ {product.totalPrice}</td>
                        <td><button onClick={() => dispatch(removeCartItem(product.id))} className='btn'><i className="fa-solid fa-trash text-danger"></i></button></td>
                      </tr>
                    ))
                    }
                  </tbody>
                </table>
                <div className="float-end mt-3">
                  <button onClick={() => dispatch(emptyCart())} className='btn btn-danger'>Empty Cart</button>
                  <Link className='btn btn-info ms-5' to={'/'}>Shop More </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="shadow border rounded p-4">
                  <h5>Total Items: <b className='text-danger fw-bolder'>{cartItems?.length}</b></h5>
                  <h4>Total Amount: <b className='text-danger'>$ {cartTotal}</b></h4>
                  <div className="d-grid mt-4">
                    <button className='btn btn-info'>Check Out</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          :
          <div className='w-100 d-flex justify-content-center align-items-center flex-column' style={{ height: '70vh' }}>
            <img className='img-fl uid' src={image} alt="" />
            <h3>Your Cart is Empty...</h3>
          </div>}
      </div >
    </>
  )
}

export default Cart