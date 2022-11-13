import React, { Fragment, useEffect } from 'react'
import MetaData from './components/layout/MetaData'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from './actions/productActions'
import { Link } from 'react-router-dom'
import { useAlert } from 'react-alert'

export const Home = () => {
    const { loading, productos, error } = useSelector(state => state.products)
    const alert = useAlert();

    const dispatch = useDispatch();
    useEffect(() => {
        if (error) {
            return alert.error(error)
        }

        dispatch(getProducts());
    }, [dispatch])



    return (
        <Fragment>
            <MetaData title="Nueva Temporada"></MetaData>
            <div style={{ 'height': '50px' }}></div>
            <h1 id="productos-layout">Productos</h1>
            <section id="productos" class='container mt-5'>
                <div className='row'>
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3' >
                        <div className='card p-3 rounded'>
                            <img src="../images/productos/buzo.jpg" alt="buzo"></img>
                            <div className='card-body d-flex flex-column'>
                                <h6 id="titulo_producto"><a href="http">Buzo Azul</a></h6>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner' ></div>
                                    </div>
                                    <span id="No_de_opiniones"> 5 Reviews</span>
                                </div>
                                <p className='card-text'>$70.000</p><a href="http" id="ver_producto" className='btn btn-danger'>
                                    Ver detalle</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-12 col-md-6 col-lg-3 my-3' >
                        <div className='card p-3 rounded'>
                            <img src="../images/productos/buzo.jpg" alt="buzo"></img>
                            <div className='card-body d-flex flex-column'>
                                <h6 id="titulo_producto"><a href="http">Buzo Azul</a></h6>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner' ></div>
                                    </div>
                                    <span id="No_de_opiniones"> 5 Reviews</span>
                                </div>
                                <p className='card-text'>$70.000</p><a href="http" id="ver_producto" className='btn btn-danger'>
                                    Ver detalle</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-12 col-md-6 col-lg-3 my-3' >
                        <div className='card p-3 rounded'>
                            <img src="../images/productos/buzo.jpg" alt="buzo"></img>
                            <div className='card-body d-flex flex-column'>
                                <h6 id="titulo_producto"><a href="http">Buzo Azul</a></h6>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner' ></div>
                                    </div>
                                    <span id="No_de_opiniones"> 5 Reviews</span>
                                </div>
                                <p className='card-text'>$70.000</p><a href="http" id="ver_producto" className='btn btn-danger'>
                                    Ver detalle</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-12 col-md-6 col-lg-3 my-3' >
                        <div className='card p-3 rounded'>
                            <img src="../images/productos/buzo.jpg" alt="buzo"></img>
                            <div className='card-body d-flex flex-column'>
                                <h6 id="titulo_producto"><a href="http">Buzo Azul</a></h6>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner' ></div>
                                    </div>
                                    <span id="No_de_opiniones"> 5 Reviews</span>
                                </div>
                                <p className='card-text'>$70.000</p><a href="http" id="ver_producto" className='btn btn-danger'>
                                    Ver detalle</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-12 col-md-6 col-lg-3 my-3' >
                        <div className='card p-3 rounded'>
                            <img src="../images/productos/buzo.jpg" alt="buzo"></img>
                            <div className='card-body d-flex flex-column'>
                                <h6 id="titulo_producto"><a href="http">Buzo Azul</a></h6>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner' ></div>
                                    </div>
                                    <span id="No_de_opiniones"> 5 Reviews</span>
                                </div>
                                <p className='card-text'>$70.000</p><a href="http" id="ver_producto" className='btn btn-danger'>
                                    Ver detalle</a>
                            </div>
                        </div>
                    </div>




                </div>
            </section>




        </Fragment>
    )
}

export default Home