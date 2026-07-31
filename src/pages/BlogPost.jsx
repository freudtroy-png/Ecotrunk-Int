import { Link, useParams } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="section" style={{ paddingTop: 140, textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title">Article Not Found</h2>
          <p style={{ margin: '16px 0 24px', color: 'var(--neutral-500)' }}>
            The article you are looking for does not exist or has been moved.
          </p>
          <Link to="/blog" className="btn btn-primary">
            Back to Blog <i className="fas fa-arrow-right" aria-hidden="true"></i>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <article className="blog-article">
          <Link to="/blog" className="blog-back">
            <i className="fas fa-arrow-left" aria-hidden="true"></i> Back to Blog
          </Link>
          <h1>{post.title}</h1>
          <div className="meta">
            {post.date} &middot; {post.readTime}
          </div>
          <img src={post.image} alt={post.title} className="featured-image" />
          {post.content.map((block, i) =>
            block.type === 'h2' ? (
              <h2 key={i}>{block.text}</h2>
            ) : (
              <p key={i}>{block.text}</p>
            )
          )}
        </article>
      </div>
    </section>
  );
}
