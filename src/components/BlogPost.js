const posts = [
    {
        slug: "my-first-blog-post",
        title: "My First Blog Post",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae purus"
    }
]

export default function BlogPost() {
    return (
        <div className="blog-post">
          {posts.map((post) => (
            <div key={post.slug}>
              <h2 className="blog-heading">{post.title}</h2>
              <p className="blog-text">{post.summary}</p>
            </div>
          ))}
        </div>
      );
}