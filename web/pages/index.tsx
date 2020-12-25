import { GetStaticProps } from "next";
import Post from "../src/components/Post/";

export default function Home({ posts }) {
  return (
    <div className="flex-1 bg-kult-secondary min-h-screen flex flex-col content-center items-center">
      <ul className="invisible h-0 py-0 w-full md:visible md:py-8 md:h-auto font-montserrat flex flex-row justify-evenly items-stretch border-b-2 border-primary">
        <li>MOVIES</li>
        <li>SERIES</li>
        <li>PODCASTS</li>
        <li>MUSICS</li>
      </ul>
      <div className="max-w-3xl mx-2 lg:mx-auto">
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  // Call an external API endpoint to get posts.
  const res = await fetch("http://localhost:4444/posts");
  const posts = await res.json();

  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
    revalidate: 1, // Revalidate in seconds
  };
};
