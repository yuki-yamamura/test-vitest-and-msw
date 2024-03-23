import HackerNewsStories from '@/components/HackerNewsStories';
import HtmlDocument from '@/components/HtmlDocument';

import styles from './index.module.scss';

const Page = () => {
  const markdownText = `
  # Pluto

  **Pluto** (minor-planet designation: **134340 Pluto**) is a
  [dwarf planet](https://en.wikipedia.org/wiki/Dwarf_planet) in the
  [Kuiper belt](https://en.wikipedia.org/wiki/Kuiper_belt). 
  `;

  return (
    <>
      <h1 className={styles.heading}>Hello, World!</h1>
      <HackerNewsStories />
      <HtmlDocument markdownText={markdownText} />
    </>
  );
};

export default Page;
