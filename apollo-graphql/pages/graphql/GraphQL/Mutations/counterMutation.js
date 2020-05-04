import gql from "graphql-tag";
import { GET_COUNTER } from "../Queries/counterQueries";

export const UPDATE_COUNTER = gql`
  mutation updateCounter($offset: Number!) {
    updateCounter(offset: $offset) @client
  }
`;

export const CounterMutations = {
  updateCounter: (_, variables, { cache }) => {
    //query existing data
    const data = cache.readQuery({ query: GET_COUNTER });
    //Calculate new counter value
    const newCounterValue = data.counter + variables.offset;
    cache.writeData({
      data: { counter: newCounterValue }
    });
    return null; //best practice
  }
};
