interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Post = ({ post }: { post: Post }) => {
  return (
    <>
      <h2>
        {post.id} {post.title}
      </h2>
      <p>{post.body}</p>
    </>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  const data: Post[] = await response.json();

  const paths = data.map((post) => {
    return { params: { postId: `${post.id}` } };
  });
  return {
    paths: paths,
    // paths: [
    //   {
    //     params: { postId: "1" },
    //   },
    //   {
    //     params: { postId: "2" },
    //   },
    //   {
    //     params: { postId: "3" },
    //   },
    //   {
    //     params: { postId: "4" },
    //   },
    //   {
    //     params: { postId: "5" },
    //   },
    // ],
    fallback: false,
  };
};

export const getStaticProps = async (context: {
  params: { postId: string };
}) => {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();

  return {
    props: {
      post: data,
    },
  };
};
