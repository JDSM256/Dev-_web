import React, { Fragment, useEffect } from 'react'
import MetaData from './layout/MetaData'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/productActions'
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
            {loading ? <h1>Iniciando...</h1> : (
                <Fragment>

                    <MetaData title="Nueva Temporada"></MetaData>
                    <div style={{ 'height': '50px' }}></div>
                    <h1 id="productos-layout">Productos</h1>
                    <section id="productos" class='container mt-5'>
                        <div className='row'>
                            {productos && productos.map(producto => (
                                <div key={producto._id} className='col-sm-12 col-md-6 col-lg-3 my-3' >
                                    <div className='card p-3 rounded'>
                                        <img src={producto.imagen[0].url} alt=""></img>
                                        <div className='card-body d-flex flex-column'>
                                            <h6 id="titulo_producto"><Link to={`/producto/${producto._id}`}>{producto.nombre}</Link></h6>
                                            <div className='rating mt-auto'>
                                                <div className='rating-outer'>
                                                    <div className='rating-inner' style={{ width: `${(producto.calificacion / 5) * 100}` }} ></div>
                                                </div>
                                                <span id="No_de_opiniones">{producto.numCalificaciones} Reviews</span>
                                            </div>
                                            <p className='card-text'>${producto.precio}</p><Link to={`/productos/${producto._id}`} id="ver_producto" className='btn btn-danger'>
                                                Ver detalle</Link>
                                        </div>
                                    </div>
                                </div>))}
                        </div>
                    </section>


                </Fragment>
            )}
        </Fragment>
    )
}

export default Home