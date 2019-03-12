import React from 'react';
import ReactDOM from 'react-dom';
import GetNews from '../containers/GetNews';

const ARGNEWS = "https://newsapi.org/v2/top-headlines?country=ar&apiKey=91a3bc0b07184b7a8bf352ff162016cd";

it('RENDER GetNews SIN CRASH', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GetNews api={ARGNEWS}/>, div);
});
