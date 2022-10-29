function mostrar(){
    var archivo = document.getElementById("file").files[0];
    var reader = new FileReader();
    if (file) {
      reader.readAsDataURL(archivo );
      reader.onloadend = function () {
        document.getElementById("img").src = reader.result;
      }
    }
  }

/*   function guardar(){
    let archivo= document.getElementById("file").value();
    let saver= localStorage.getElementById("file")

  }

  
 */

 

 

