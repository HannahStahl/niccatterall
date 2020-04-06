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

  getBlogPosts() {
    Promise.all([
      fetch(`${config.blogPostsURL}publishedItems/${config.nicUsername}`).then(res => res.json()),
      fetch(`${config.blogPostsURL}itemsToPhotos/${config.nicUsername}`).then(res => res.json()),
      fetch(`${config.blogPostsURL}photos/${config.nicUsername}`).then(res => res.json())
    ]).then((results) => {
      let [blogPosts, photosToBlogPosts, photos] = results;
      blogPosts = blogPosts.map(blogPost => {
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
        <h1>Project Strong Bear</h1>
        <p className="blog-description">
          I created the Project Strong Bear blog out of remembrance 
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
