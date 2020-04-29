import React from 'react';
import Head from 'next/head';
import { useQuery } from '@apollo/react-hooks';
import JOBS_QUERY from '../graphql/jobs.query';

const Home = () => {
  // Create a query hook
  const { data, loading, error } = useQuery(JOBS_QUERY);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }
  console.log(data)
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ul>
          <li key={`artist__${data.artist.id}`}>{data.artist.name}</li>
          <ol>
            {data.artist.albums.edges.map(album => {
              return <li key={`albums__${album.node.name}`}>{album.node.name}</li>
            })}
          </ol>
      </ul>
    </div>
  );
};

export default Home;