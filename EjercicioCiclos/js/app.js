"use strict"
let xmlHttp;
let idModulo;
let idCurso;
$(() => {
  validarFormulario()
    //crear el objeto
    xmlHttp = crearConexion();
    if (xmlHttp != undefined) {
        mostrar();
        $("#cursos").on("change", mostrarAsig);
        $("#grabar").on("click", grabar);
        
    } else {
        Swal.fire("El navegador no soporta AJAX. Debe actualizar el navegador");
    }
       
   
})
function mostrar() {
     //preparar el objeto xmlHttp
     xmlHttp.open("GET", "http://localhost:3000/ciclos", true);
     xmlHttp.onreadystatechange = () => {
         if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            let datos = JSON.parse(xmlHttp.responseText);
            $("#modulos").append(`<option value="">Seleccione modulo</option>`)
            $(datos).each((ind, ele) => {
                $("#cursos").append(`<option value="${ele.idCurso}">${ele.idCurso}-${ele.descripcion}</option>`)
            });
         }
     };
     xmlHttp.send();
}

function mostrarAsig(){
    $.ajax({
        url:`http://localhost:3000/modulos/${$("#cursos").val()}`,
        type:"GET",
    })
    .done(function (responseText, textStatus, xhr){
        $("#modulos option:gt(0)").remove();
        $(responseText).each((ind, ele) => {
            if ($("#cursos").val()==ele.idCurso) {
                $("#modulos").append(`<option value="${ele.idModulo}">${ele.descripcion}</option>`)
            }
        })
    })
    .fail(function (responseText, textStatus, xhr){
        Swal.fire({
            icon:"error",
            title:"Error "+ xhr.status,
            text:xhr.statusText
        })
    })
}

function mostrarAlum(){
        fetch(`http://localhost:3000/alumnos/${$("#cursos").val()}`,{
            method:'GET',
        })
        .then((response) =>{
            return response.json()
        }) 
        .then((datos) => {
            $(".myTable tbody tr").remove();
            $(".calificaciones").css("display", "inline");
            $(datos).each((ind, ele) => {
                $(".myTable tbody").append(`<tr id="${ele.idAlumno}" ><td class="nombre">${ele.apellidosNombre}</td><td class="calificacion"></td></tr>`)
            }) 
            dropable();
            
        })
        .catch((error) => {
          console.log(error);
        });
}

function validarFormulario(){
    $(".form-horizontal").validate({
        errorElement: "em",
        errorPlacement: function (error, element) {
          error.addClass("invalid-feedback");
          error.insertAfter(element);
        },
        highlight: function (element, errorClass, validClass) {
          $(element).addClass("is-invalid").removeClass("is-valid");
        },
        unhighlight: function (element, errorClass, validClass) {
          $(element).addClass("is-valid").removeClass("is-invalid");
        },
        rules: {
          cursos: "required",
          modulos: "required"
        },
        messages: {
          cursos: {
            required: "Seleccione un curso",
          },
          modulos: {
            required: "Seleccione un modulo",
          }
        },
        submitHandler: (form) => {
          mostrarAlum();
          draggable();
          idCurso = $("#cursos").val();
          idModulo = $("#modulos").val();
          
        },
      });
}

const draggable=()=>{
  $(".arrastrar").draggable({
      helper:"clone",//crear una copia
      revert: true, //retorna a la posicion actual
      revertDuration: 1000, // tiempo de retorno
  })
}

const dropable= function () {
  $(".calificacion").droppable({
      classes:{
          "ui-droppable-hover":"ui-state-hover"
      },
      accept:".arrastrar", //solamente acepta los objetos cuya clase es arrastrar
      drop: function(event,ui){//event es el objeto donde se realiza el drop y ui es el objeto que esta siendo soltado. 
        $(this).text("");
          $(this).append(ui.draggable.clone().text());
          //establecer nuevas coordenadas
          $(this).find("div:last").css({
              top:ui.position.top,
              left:ui.position.left
          });
          //quitar el atributo revert
          $(ui.draggable).draggable("option","revert",false);
      }
  })
}

const grabar=function(){
  let fallo = false;

  $(".myTable tbody tr").each((index,element) => {
    
    const body={
          idCurso:idCurso,
          idModulo:idModulo,
          idAlumno: $(element).attr("id"),
          calificacion: $(element).find(".calificacion").text(),
    };

    axios.post(`http://localhost:3000/calificacion/`,body)
    .then(response => {
    })
    .catch((error) => {
      fallo = true;
    });
  });

  if (fallo) {
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "Error al enviar los datos",
      showConfirmButton: false,
      timer: 2000
    });
  }else{
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Calificaciones guardadas correctamente",
      showConfirmButton: false,
      timer: 2000
    });
  }

}