import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import api from "../src/services/api";
import useFetch from "../src/utils/dataFetcher";

export default function Post() {
  const id = "5fe6c68e60f4190ca3cb6b46";

  const { data } = useFetch(`/user/${id}`);
  const router = useRouter();

  const [body, setBody] = useState("");

  async function handlePostSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      creator: "5fe6c68e60f4190ca3cb6b46",
      section: "movies",
      rating: 4,
      body,
    };

    console.log(data);

    try {
      const response = await api.post("/post", data);
      if (response.data) {
        setBody("");
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  }
  if (!data) return <h1>Loading...</h1>;

  return (
    <div className="flex flex-col bg-kult-secondary  min-h-screen px-8 pt-10 md:pt-6">
      <span className="text-4xl mb-8 font-bold text-primary">
        <img
          className="w-60 h-60 rounded-full"
          src={data.user.avatar_url}
          alt=""
        />
        Hi! tell us something :)
      </span>
      <form
        method="post"
        id="postForm"
        className="flex-1 flex flex-col items-center justify-between"
      >
        <textarea
          className="w-full flex-1 p-4 focus:outline-none rounded-3xl"
          id="name"
          maxLength={300}
          required
          placeholder="How are you feeling today?"
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
        <button
          onClick={handlePostSubmit}
          className="my-6 p-4 rounded-2xl font-bold bg-kult-primary border-primary border-2 border-solid hover:bg-kult-secondary transition-all"
        >
          Post !
        </button>
      </form>
    </div>
  );
}
