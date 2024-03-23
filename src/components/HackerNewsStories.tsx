import axios from 'axios';
import useSWR from 'swr';

const HackerNewsStories = () => {
  const { data, isLoading } = useSWR(
    'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty',
    async (url) => {
      const res = await axios.get<number[]>(url);

      return res.data;
    },
  );

  if (isLoading) {
    return <div>Loading stories...</div>;
  }

  if (!data) {
    return <div>Something went wrong.</div>;
  }

  return (
    <ul>
      {data.map((id) => (
        <li key={id} aria-label={id.toString()}>
          {id}
        </li>
      ))}
    </ul>
  );
};

export default HackerNewsStories;
