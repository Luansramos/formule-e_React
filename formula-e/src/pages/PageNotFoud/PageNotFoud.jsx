import React from 'react';
import { Link } from 'react-router-dom';
import './Notfoud.css'

function PageNotFound () {
  return (
    <div className="page-not-found">
      <h1>404</h1>
      <p>Desculpe, a página que você está procurando não existe.</p>
      <Link to="/">Voltar para a Home</Link>
    </div>
  );
};


export default PageNotFound;
