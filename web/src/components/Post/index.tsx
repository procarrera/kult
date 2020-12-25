import React from "react";
import Rating from "./Rating";

interface PostProps {
  post: any;
}

const Post: React.FC<PostProps> = ({ post }) => {
  //Format Date for a DD/MM/YYYY
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("pt-BR");
  };
  const postDate = formatDate(post.created);

  return (
    <div className="flex flex-row justify-start my-12 max-w-2xl font-montserrat text-normal">
      <img
        className="rounded-xl w-16 h-16"
        src={post.creator.avatar_url}
        alt=""
      />
      <div className="ml-4 flex flex-col justify-between">
        <div>
          <span className="flex flex-row">
            <p className="mr-3 font-bold">{post.creator.name}</p>
            <p className="font-thin opacity-50"> &gt; </p>
            <p className="ml-3 font-thin opacity-50">{post.section}</p>
          </span>
          <span className="text-sm font-thin tracking-wide opacity-50">
            Em {postDate}
          </span>
        </div>
        <div>{post.body}</div>
        <div className="flex flex-row pt-4">
          <Rating rating={post.rating} />
        </div>
      </div>
    </div>
  );
};

export default Post;
