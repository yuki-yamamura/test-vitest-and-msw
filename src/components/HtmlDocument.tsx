import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

type Props = {
  markdownText: string;
};

const HtmlDocument = ({ markdownText }: Props) => {
  const text = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .processSync(markdownText);

  return <div>{text.value.toString()}</div>;
};

export default HtmlDocument;
