import React from 'react';
import ReactDOM from 'react-dom';
import News from '../components/News';

let item = `{"source":{"id":null,"name":"Elsol.com.ar"},"author":"Medios","title":"Escalonarán los pagos de las boletas de gas durante el invierno - Diario ElSol.com.ar Mendoza","description":"Tras el reclamo del radicalismo, el Gobierno anunció que habrá aplanamiento en las facturas y analizarán otras medidas para morigerar el impacto de las subas en este año electoral.","url":"https://www.elsol.com.ar/escalonaran-los-pagos-de-las-boletas-de-gas-durante-el-invierno","urlToImage":"https://elsol-compress.s3-accelerate.amazonaws.com/files/1524163436884HORNALLA-1.jpg","publishedAt":"2019-03-11T18:05:00Z","content":"Con un esquema similar al implementado durante el 2018, el Gobierno escalonará los pagos de las boletas de gas para mitigar el impacto en los meses de invierno. Tras el reclamo del radicalismo, la medida llegó en la Mesa Nacional de Cambiemos, que se hizo est… [+916 chars]","id":5}`;

item = JSON.parse(item);

it('RENDER News SIN CRASH', () => {
  const div = document.createElement('div');
  ReactDOM.render(<News item={item}/>, div);
});
