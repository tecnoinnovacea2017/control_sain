$(document).ready(function(select)
{

  var show_data = function(objeto){
   if (objeto.hasOwnProperty("fabrica"))
      {
        $('#tabla tr:last').after('<tr><th>'+1+'</th><td>'+objeto.nombre+'</td><td>'+objeto.correo+'</td><td>'+objeto.telefono+'</td><td>'+objeto.direccion+'</td><td>'+objeto.ciudad+'</td><td>'+objeto.nif+'</td><td><button>Editar</button></td><td><button>Guardar</button></td></tr>');
      }
  }
//$("#boton").click(function(event)
//{
    console.log("asd");
    $.ajax({
        url: "http://couchdb.contraslash.com/control_sain_proveedores/_all_docs",
        type: "GET",
        success: function (sreg, status, jqXHR) {
            var obj_json = JSON.parse(sreg);
            console.log(obj_json);
            for(var i=0; i<obj_json.rows.length ; i++)
            {
              $.ajax({
                  url: "http://couchdb.contraslash.com/control_sain_proveedores/"+obj_json.rows[i].id,
                  type: "GET",
                  success: function (sreg, status, jqXHR) {
                    show_data(JSON.parse(sreg));
                  }
               });
            }

        },
        error: function (jqXHR, status) {
            alert(JSON.stringify(jqXHR));
        }
    });
  //})
});