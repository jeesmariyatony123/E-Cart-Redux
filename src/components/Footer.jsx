import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div style={{ height: '300px' }} className=' mt-5 w-100 bg-primary text-white'>
                <div className=" container pt-5 footer-content d-flex justify-content-between ">
                    <div style={{ width: '400px' }} className="media">
                        <h5 className='d-flex'><i style={{ height: '25px' }} className="fa-solid fa-truck-fast me-3"></i>
                            E-Cart</h5>
                        <p style={{ textAlign: 'justify' }}>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
                        <span>Code licensed JM, docs CC BY 3.0.</span><br />
                        <span>Currently v5.3.2.</span>
                    </div>
                    <div className="links d-flex flex-column">
                        <h5 className='d-flex'>Links</h5>
                        <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
                        <Link to={'/wishlist'} style={{ textDecoration: 'none', color: 'white' }}>Wishlist</Link>
                        <Link to={'/cart'} style={{ textDecoration: 'none', color: 'white' }}>Cart</Link>
                        {/* <Link to={'/view/:id'} style={{ textDecoration: 'none', color: 'white' }}>View</Link> */}
                    </div>
                    <div className="guides d-flex flex-column">
                        <h5 className='d-flex'>Guides</h5>
                        <a href="https://react.dev/" style={{ textDecoration: 'none', color: 'white' }}>React JS</a>
                        <a href="https://reactrouter.com/en/main" style={{ textDecoration: 'none', color: 'white' }}>React Routing</a>
                        <a href="https://react-bootstrap.github.io/" target='_blank' style={{ textDecoration: 'none', color: 'white' }}>React Bootstrap</a>
                    </div>
                    <div className="contact">
                        <h5>Contact Us</h5>
                        <div className="d-flex">
                            <input type="text" className="form-control me-1" placeholder='Email Id Please' />
                            <button className='btn btn-info'><i className="fa-solid fa-arrow-right"></i></button>
                        </div>
                        <div className="icons d-flex justify-content-between mt-3">
                            <a href="https://react.dev/" target='_blank' style={{ textDecoration: 'none', color: 'white' }}><i className="fa-brands fa-twitter fa-1x"></i></a>
                            <a href="https://react.dev/" target='_blank' style={{ textDecoration: 'none', color: 'white' }}><i className="fa-brands fa-instagram fa-1x"></i></a>
                            <a href="https://react.dev/" target='_blank' style={{ textDecoration: 'none', color: 'white' }}><i className="fa-brands fa-facebook fa-1x"></i></a>
                            <a href="https://react.dev/" target='_blank' style={{ textDecoration: 'none', color: 'white' }}><i className="fa-brands fa-linkedin fa-1x"></i></a>
                            <a href="https://react.dev/" target='_blank' style={{ textDecoration: 'none', color: 'white' }}><i className="fa-brands fa-github fa-1x"></i></a>
                            <a href="https://react.dev/" target='_blank' style={{ textDecoration: 'none', color: 'white' }}><i className="fa-solid fa-phone fa-1x"></i></a>
                        </div>
                    </div>
                </div>
                <p className='text-center mt-5'>Copyright &copy; 2024 E-Cart. Built with React.</p>
            </div>
        </>
    )
}

export default Footer