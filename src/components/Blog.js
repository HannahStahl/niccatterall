import React, { Component } from 'react';
import config from '../config.js';
import '../styles/Blog.css';
import BlogPostPreview from './BlogPostPreview';
 
class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogPosts: []
    };
  }

  sortBlogPosts(a, b) {
    if (a.datePublished > b.datePublished) return -1;
    if (b.datePublished > a.datePublished) return 1;
    return 0;
  }

  getBlogPosts() {
    Promise.all([
      fetch(`${config.blogPostsURL}publishedItemsOfSpecifiedType/${config.nicUsername}/${config.blogConfigId}`).then(res => res.json()),
      fetch(`${config.blogPostsURL}itemsToPhotos/${config.nicUsername}`).then(res => res.json()),
      fetch(`${config.blogPostsURL}photos/${config.nicUsername}`).then(res => res.json())
    ]).then((results) => {
      let [blogPosts, photosToBlogPosts, photos] = results;
      if (blogPosts.length > 3) blogPosts = blogPosts.slice(0, 3);
      blogPosts = blogPosts.sort(this.sortBlogPosts).map(blogPost => {
        const { photoId } = photosToBlogPosts.find(imageToBlogPost => imageToBlogPost.itemId === blogPost.itemId);
        const { photoName } = photos.find(image => image.photoId === photoId);
        return ({ ...blogPost, image: photoName });
      });
      this.setState({ blogPosts });
    });
  }

  componentWillMount() {
    this.getBlogPosts();
  }

  render() {
    return (
      <div>
        <h1 className="blog-header">Project Strong Bear</h1>
        {
          this.state.blogPosts.length > 0 ?
          <div className="blog-posts">
            { this.state.blogPosts.map(blogPost =>
              <BlogPostPreview key={blogPost.itemId} blogPost={blogPost} />
            ) }
          </div> : <div />
        }
        <p className="blog-link">
          <a href="/blog" target="_blank" rel="noopener noreferrer">See all blog posts 
            <img src={require("../misc-icons/right-arrow.svg")} width="26px" alt="Go" />
          </a>
        </p>
      </div>
    );
  }
}
 
export default Blog;
