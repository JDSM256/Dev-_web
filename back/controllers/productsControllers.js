const producto = require("../models/productos");
const fetch =(url)=>import('node-fetch').then(({default:fetch})=>fetch(url));

// Aqui obtengo los productos
exports.getProducts=async(req, res,next)=>{
    const productos=await producto.find();
    if(!productos){
        return res.status(404).json({
            sucess:false,
            error:true
        })
    }
        res.status(200).json({
        success:true,
        count:productos.length,
        message: "En esta ruta se pueden ver los productos",
        productos
    });
}


// Crear producto

exports.newProducts=async(req,res,next)=>{
    const product= await producto.create(req.body)
        res.status(201).json({
        success:true,
        product
    })
}


// Ver producto por ID
exports.getProductsById= async (req,res,next)  =>{
    const product= await producto.findById(req.params.id)
    if (!product){
        return res.status(404).json({
            success:false,
            message: "no encontramos ese producto"
        })
    }
    res.status(200).json({
        success:true,
        message: "Aqui debajo encuentras la informacion del producto seleccionado",
        product
    }) 
}


//update producto
exports.updateProduct= async (req,res,next)  =>{
    let product= await producto.findById(req.params.id)
    if (!product){
        return res.status(404).json({
            success:false,
            message: "no encontramos ese producto"
        })
    }

    product=await producto.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
        runValidators:true
    });
    res.status(200).json({
        success:true,
        message: "Producto actualizado correctamente",
        producto
    })
}

//Eliminar un producto
exports.deleteProduct =async (req, res, next) => {
    const product = await producto.findById(req.params.id) //Variable de tipo modificable
    if (!product){
        return res.status(404).json({
            success:false,
            message: "no encontramos ese producto"
        })
    }

    await product.remove();//Eliminamos el proceso
    res.status(200).json({
        success: true,
        message: "Producto eliminado correctamente"
    })

}

