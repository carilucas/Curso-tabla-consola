const fs = require('fs');
const colors = require('colors');

const crearArchivoTabla = async(base = 5, listar, hasta = 10)=>{

   try {

   
      let salida = '';
      let consola = '';
   
      for (let i = 1; i <= hasta; i++) {
   
         salida += `${base} x ${i} = ${i * base }\n`;
         consola += `${base} ${'x'.cyan} ${i} ${'='.cyan} ${i * base }\n`;
         
      }

      if (listar) {
         console.log("====================".green);
         console.log("Tabla del :".green , base);
         console.log("====================".green);
   
         console.log(consola);
      }
   
   
      await fs.writeFileSync( `./salida/tabla-${base}.txt`, salida );
      return `tabla-${base}.txt`

      
   } catch (error) {
      console.log(error);
      throw new Error('No se pudo crear la tabla')
   }



}

module.exports = { crearArchivoTabla };