import Card from "./card";
import { posts } from "./Data/posts";

export default function Main() {
  const publishedPosts = posts.filter((post) => post.published);
  return (
    <div className="container mx-auto">
      <div className="row justify-content-center">
        {publishedPosts.map((post) => (
          <div className="col-4 p-3" key={post.id}>
            <Card
              title={post.title}
              content={post.content}
              image={post.image}
              tags={post.tags}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
