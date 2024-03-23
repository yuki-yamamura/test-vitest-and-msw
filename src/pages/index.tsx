import HackerNewsStories from '@/components/HackerNewsStories';

import styles from './index.module.scss';

const Page = () => (
  <>
    <h1 className={styles.heading}>Hello, World!</h1>
    <HackerNewsStories />
  </>
);

export default Page;
