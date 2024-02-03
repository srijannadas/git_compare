import React from 'react';

const RepositoryCard = ({ repository }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', maxWidth: '300px' }}>
      <h2>{repository.name}</h2>
      <p>{repository.description}</p>
      <p>Stars: {repository.stargazers_count}</p>
      <p>Forks: {repository.forks_count}</p>
      {/* Add more information as needed */}
    </div>
  );
};

export default RepositoryCard;
