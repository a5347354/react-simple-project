import gql from 'graphql-tag';

const JOBS_QUERY = gql`
query Artist {
  artist(artistId: 12) {
    id
    name
    albums(first: 20) {
      totalCount
      edges{
        cursor
        node{
          name
          imageUrl
        }
      }
    }
  }
}
`;

export default JOBS_QUERY;