import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import Reveal from '../components/Reveal';

export default function Blog() {
  return (
    <>
      <section className="blog-hero">
        <div className="blog-hero-content">
          <span className="section-label section-label-center" style={{ color: 'var(--green-400)' }}>
            Insights
          </span>
          <h1>Blog and News</h1>
          <p>Thought leadership, project updates, and insights on Kenya's renewable energy transition from the Ecotrunk team.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 100} className="blog-card">
                <Link to={`/blog/${post.slug}`} className="blog-card-image" aria-label={post.title}>
                  <img src={post.image} alt={post.title} loading="lazy" />
                </Link>
                <div className="blog-card-body">
                  <div className="blog-card-date">{post.date}</div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`} className="blog-card-link">
                    Read Article <i className="fas fa-arrow-right" aria-hidden="true"></i>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
