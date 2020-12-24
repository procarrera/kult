import { GetStaticProps } from "next";

export default function Home({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post._id}>
          <h1>{post.creator.name}</h1>
          <img src={post.creator.avatar_url} alt="" width={50} height={50} />
          <h3>{post.section}</h3>
          <h5>{post.rating}</h5>
          <div>{post.body}</div>
          <div>{post.created}</div>
        </div>
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  // Call an external API endpoint to get posts.
  const res = await fetch("http://localhost:4444/posts");
  const posts = await res.json();
  console.log(posts);

  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
    revalidate: 1, // Revalidate in seconds
  };
};
