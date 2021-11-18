const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leerJSON: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
    escribirJSON: function(unArray){
        let arrayAjson = JSON.stringify(unArray, null, ' ');
        fs.writeFileSync('./'+this.archivo,arrayAjson);
    },
    guardarTarea: function(objTarea){
        let nvatarea = this.leerJSON();
        nvatarea.push(objTarea);
        this.escribirJSON(nvatarea);
    },

    leerPorEstado: function (estado) {
        let arrayTareas = this.leerJSON();
        let resultado = arrayTareas.filter((item)=>{return item.estado ==estado});
        return resultado;
    }
    
}

module.exports = archivoTareas;