import React, { Component } from 'react';
import config from '../config.js';
import '../styles/BlogFull.css';
import BlogPostPreview from './BlogPostPreview';
 
class BlogFull extends Component {
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
      fetch(`${config.apiURL}publishedItemsOfSpecifiedType/${config.nicUsername}/${config.blogConfigId}`).then(res => res.json()),
      fetch(`${config.apiURL}itemsToPhotos/${config.nicUsername}`).then(res => res.json()),
      fetch(`${config.apiURL}photos/${config.nicUsername}`).then(res => res.json())
    ]).then((results) => {
      let [blogPosts, photosToBlogPosts, photos] = results;
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
      <div className="blog-full">
        <h1>Blog Articles</h1>
        <p className="blog-description">
          I created this blog out of remembrance 
          for my late grandfather, a source of immense strength 
          in my family, and late friend who exhibited the qualities 
          of a loving bear. Their sudden passing, along with my 
          grandfather's passion for writing, motivated me to seize 
          the day and start sharing my knowledge about healthy living 
          with others.
        </p>
        {
          this.state.blogPosts.length > 0 ?
          <div className="blog-posts">
            { this.state.blogPosts.map(blogPost =>
              <BlogPostPreview key={blogPost.itemId} blogPost={blogPost} full={true} />
            ) }
          </div> : <div />
        }
        <p className="blog-link-to-main">
          <a href="/">
            <img src={require("../misc-icons/left-arrow.svg")} width="26px" alt="Go" />
             Return to main site
          </a>
        </p>
      </div>
    );
  }
}
 
export default BlogFull;
