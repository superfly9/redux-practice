import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Continents from './Continent';

const client = new ApolloClient({
  uri : 'https://countries.trevorblades.com'
})

//react-apollo Query,Mutation컴포넌트 제공
function App() {
  
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <h1>React , Apollo</h1>
        <Continents />
      </ApolloProvider>
    </div>
  );
}

export default App;
