import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { Counter } from "./graphql/Counter/Couter";
import client from "./graphql/GraphQL/config";

const App = () => {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Counter />
      </ApolloProvider>
    </div>
  );
};

export default App;