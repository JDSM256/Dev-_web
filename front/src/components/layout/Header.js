import React, { Fragment } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import "../../App.css"
//import { Link } from "react-router-dom"

export const Header = () => {
  const {cartItems} = useSelector(state=>state.cart)
  const alert= useAlert();
  const dispatch= useDispatch ();
  const dispatch= useDispatch ();
    return (
        <Fragment>
            <header class="section-header">

{/*<nav class="navbar navbar-dark navbar-expand p-0 bg-dark">
<div class="container-fluid">
    <ul class="navbar-nav d-none d-md-flex mr-auto">
		<li class="nav-item"><a class="nav-link" href="http" data-abc="true">Cash On Delivery</a></li>
		<li class="nav-item"><a class="nav-link" href="http" data-abc="true">Free Delivery</a></li>
		<li class="nav-item"><a class="nav-link" href="http" data-abc="true">Cash Backs</a></li>
    </ul>
    <ul class="navbar-nav d-flex align-items-center">
        <li class="nav-item">
		    <div class="d-flex flex-row">
		        <img src="./images/Morfo_Logo.png" class="rounded-circle" width="30" alt=""></img>
		    </div>
		</li>
		<li class="nav-item">
		    <a href="http" class="nav-link d-flex align-items-center" data-abc="true"><span>Nantano M</span><i class='bx bxs-chevron-down'></i></a>
		</li>
		
	</ul> 
  </div> 

    </nav>*/}

<section class="header-main border-bottom bg-white">
	<div class="container-fluid">
       <div class="row p-2 pt-3 pb-3 d-flex align-items-center">
           <div class="col-md-2">
               <img  class="d-none d-md-flex" src="./images/Morfo_Logo.png" width="100" alt=""></img>
           </div>
           <div class="col-md-8">
        <div class="d-flex form-inputs">
        <input class="form-control" type="text" placeholder="Buscar productos..."></input>
        <i class="bx bx-search"></i>
        </div>
           </div>
           
           <div class="col-md-2">
               <div class="d-flex d-none d-md-flex flex-row align-items-center">
                   <span class="shop-bag"><i class='bx bxs-shopping-bag'></i></span>
                   <div class="d-flex flex-column ms-2">
                       <span class="qty">1 Producto</span>
                       <span class="fw-bold">$27.90</span>
                   </div>    
               </div>           
           </div>
       </div>
	</div> 
</section>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand d-md-none d-md-flex" href="http">MENU</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="http">Niños</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="http">Hombre</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="http">Mujer</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="http" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Panel de control
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="http">Addministración</a></li>
            <li><a class="dropdown-item" href="http">Pedidos</a></li>
            <li><a class="dropdown-item" href="http">Mi cuenta</a></li>
            <li><a class="dropdown-item" href="http">Cerrar sesión</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</header>

        </Fragment>
    )
}

export default Header
