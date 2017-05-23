$(document).ready(function(text)
{

  var show_data = function(objeto){

      if (objeto.hasOwnProperty("nombre"))
      {
          $("#select").append("<option>"+objeto["nombre"]+ "</option>");
      }

  }

    console.log("asd");
    $.ajax({
        url: "http://couchdb.contraslash.com/control_sain_proveedores/_all_docs?include_docs=true",
        type: "GET",
        success: function (sreg, status, jqXHR) {
          console.log(sreg);
            // var obj_json = JSON.parse(sreg);
            var obj_json = sreg;
            console.log(obj_json);
            for(var i=0; i<obj_json.rows.length ; i++)
            {
              show_data(obj_json.rows[i].doc);
            }

        },
        error: function (jqXHR, status) {
            alert(JSON.stringify(jqXHR));
        }
    });

});
