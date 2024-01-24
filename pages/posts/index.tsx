import Link from "next/link";
import React from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const index = ({ posts }: { posts: Post[] }) => {
  console.log(posts[0]);

  return (
    <>
      <h1>Post Titles</h1>
      {posts.map((post) => {
        return (
          <Link key={post.id} href={`posts/${post.id}`} passHref>
            <h4>
              {post.id} {post.title}
            </h4>
          </Link>
        );
        <hr />;
      })}
    </>
  );
};

export default index;

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  const data: Post[] = await response.json();

  return {
    props: {
      posts: data.slice(0, 5),
    },
  };
};
