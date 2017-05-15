$(document).ready(function()
{

  var show_data = function(objeto){
   if (objeto.hasOwnProperty("fabrica"))
      {
        $('#tabla tr:last').after('<tr><th>'+1+'</th><td>'+objeto.nombre+'</td><td>'+objeto.fabrica+'</td><td>'+objeto.cliente+'</td><td>'+objeto.proveedor+'</td><td>'+objeto.unidades+'</td><td><button>Editar</button></td><td><button>Guardar</button></td></tr>');
      }
  }

//$("#boton").click(function(event)
//{
    console.log("asd");
    $.ajax({
        url: "http://couchdb.contraslash.com/control_saint/_all_docs",
        type: "GET",
        success: function (sreg, status, jqXHR) {
            var obj_json = JSON.parse(sreg);
            console.log(obj_json);
            for(var i=0; i<obj_json.rows.length ; i++)
            {
              $.ajax({
                  url: "http://couchdb.contraslash.com/control_saint/"+obj_json.rows[i].id,
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