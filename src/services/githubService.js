
import axios from 'axios';

const API_BASE_URL = 'https://api.github.com';

export const getRepository = async (owner, repo, token) => {
  const url = `${API_BASE_URL}/repos/${owner}/${repo}`;
 // const url="https://api.github.com/repos//joke_ex";
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.error('Error fetching repository data:', error);
    throw error;
  }
};
