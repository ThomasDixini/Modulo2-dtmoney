import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs' 

import {App} from './App';

createServer({

  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de Website',
          amount: 5000,
          type: 'deposit',
          category: 'Dev',
          createdAt: new Date('2022-01-26 23:28:05')
          
        },
        {
          id: 2,
          title: 'Aluguel do Apartamento',
          amount: 1000,
          type: 'withdraw',
          category: 'Despesa',
          createdAt: new Date('2022-01-31 00:00:01')
          
        }
      ]

    })
  },
  

  routes() {
    this.namespace = 'api';  

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema,request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data)
    })

    
  }
}) 


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



