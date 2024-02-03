
import React, { useState } from 'react';
import { getRepository } from './services/githubService';
import RepositoryCard from './components/RepositoryCard';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import LoginForm from './components/login';
import './App.css';

const App = () => {
  const [owner1, setOwner1] = useState('');
  const [repo1, setRepo1] = useState('');
  const [owner2, setOwner2] = useState('');
  const [repo2, setRepo2] = useState('');
  const [token, setToken] = useState('YOUR_GITHUB_TOKEN');

  const [repository1, setRepository1] = useState(null);
  const [repository2, setRepository2] = useState(null);

  const handleFetchRepositories = async () => {
    try {
      const repo1Data = await getRepository(owner1, repo1, token);
      setRepository1(repo1Data);

      const repo2Data = await getRepository(owner2, repo2, token);
      setRepository2(repo2Data);
    } catch (error) {
      console.error('Error fetching repositories:', error);
    }
  };

  const compareRepositories = () => {
    if (repository1 && repository2) {
      if (repository1.stargazers_count > repository2.stargazers_count) {
        return `${repo1} is better than ${repo2} based on stars.`;
      } else if (repository1.stargazers_count < repository2.stargazers_count) {
        return `${repo2} is better than ${repo1} based on stars.`;
      } else {
        return `Both repositories have the same number of stars.`;
      }
    } else {
      return 'Fetch repositories first to compare.';
    }
  };
 
  return (
   
    <div>
      <div className='head'> <h1>GitHub Comparer</h1></div>
      <div className='head1'>
      <div>
        <h2>Repository 1</h2>
        <label>
          Owner:
          <input type="text" value={owner1} onChange={(e) => setOwner1(e.target.value)} />
        </label>
        <label>
          Repo:
          <input type="text" value={repo1} onChange={(e) => setRepo1(e.target.value)} />
        </label>
      </div>

      <div>
        <h2>Repository 2</h2>
        <label>
          Owner:
          <input type="text" value={owner2} onChange={(e) => setOwner2(e.target.value)} />
        </label>
        <label>
          Repo:
          <input type="text" value={repo2} onChange={(e) => setRepo2(e.target.value)} />
        </label>
      </div>

      <label>
        Token:
        <input type="text" value={token} onChange={(e) => setToken(e.target.value)} />
      </label>
      <button onClick={handleFetchRepositories}>Fetch Repositories</button>

      <div>
        <h2>Comparison</h2>
        <div style={{ display: 'flex' }}>
          {repository1 && <RepositoryCard repository={repository1} />}
          {repository2 && <RepositoryCard repository={repository2} />}
        </div>
        <p>{compareRepositories()}</p>
      </div>
      </div>
    </div>
     
  );
};

export default App;
