import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { CounterMutations } from "./Mutations/counterMutation";
import { createHttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';

const cache = new InMemoryCache();

const GRAPHQL_URL = process.env.api_url;
const link = createHttpLink({
    fetch, // Switches between unfetch & node-fetch for client & server.
    uri: GRAPHQL_URL,
    // credentials: 'same-origin'
    // headers: {'Origin': ''}
  });

const client = new ApolloClient({
  link: link,
  cache,
  resolvers: {
    Mutation: {
      ...CounterMutations
    }
  }
});

const initialState = { counter: 0 };
cache.writeData({ data: initialState });

export default client;
