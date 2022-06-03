let moment = require('moment');

moment.locale('es'); //definir idioma

console.log('Naci ' + moment('29/12/2003','DD/MM/YYYY').fromNow());