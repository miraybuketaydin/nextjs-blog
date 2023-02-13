import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import Layout from "../../components/Layout";

export default function Slug({ frontmatter, content }) {
  const { title, author, category, date, bannerImage, tags } = frontmatter;
  // const router = useRouter();
  // const { slug } = router.query;

  // let foundItem = data.find((dataItem) => dataItem.slug === slug);

  // console.log(foundItem);

  // if (!foundItem) {
  //   return <Error statusCode={404} />;
  // }

  return (
    <Layout title={title}>
      <h2>
        {author} || {date}
      </h2>
      <h3>
        {category} || {tags.join()}
      </h3>
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    </Layout>
  );
};

export async function getStaticPaths() {
  //get list of file from the posts folder
  const files = fs.readdirSync("posts");

  //get frontmatter & slug from each post
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));

  //return list of paths
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}
