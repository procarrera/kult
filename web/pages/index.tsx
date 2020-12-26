import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Post from "../src/components/Post/";
import api from "../src/services/api";
import useFetch from "../src/utils/dataFetcher";

export default function Home({ posts }) {
  const router = useRouter();
  const [data, setData] = useState<any>(posts);

  async function updateData() {
    const response = await api.get("/posts");
    setData(response.data.reverse());
  }

  useEffect(() => {
    if (router.query.new === "true") {
      updateData();
    }
  }, []);

  return (
    <div className="flex-1 bg-kult-secondary min-h-screen flex flex-col content-center items-center">
      <ul className="invisible h-0 py-0 w-full md:visible md:py-8 md:h-auto font-montserrat flex flex-row justify-evenly items-stretch border-b-2 border-primary">
        <li>MOVIES</li>
        <li>SERIES</li>
        <li>PODCASTS</li>
        <li>MUSICS</li>
      </ul>
      <div className="max-w-3xl mx-2 lg:mx-auto">
        {data.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  // Call an external API endpoint to get posts.
  const response = await api.get("/posts");
  const posts = response.data.reverse();

  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
    revalidate: 1, // In seconds
  };
};
