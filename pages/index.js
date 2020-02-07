import Layout from "../components/Layout";
import Link from "next/link";

const PostLink = ({ id }) => (
  <li>
    <Link href="/p/[id]" as={`/p/${id}`}>
      <a>{id}</a>
    </Link>
  </li>
);

export default function Blog() {
  return (
    <Layout>
      <h1>My Blogs</h1>
      <ul>
        <PostLink id="Stress" />
        <PostLink id="Angularjs two way binding" />
      </ul>
    </Layout>
  );
}
