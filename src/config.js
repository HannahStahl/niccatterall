const dev = {
  getNicBlogPostsURL: "https://o9n2e948d3.execute-api.us-east-1.amazonaws.com/dev/blogPostsForUser/us-east-1:37ed68d2-594a-43b0-8e54-d91546fdbb70"
};

const prod = {
  getNicBlogPostsURL: "https://me3t2amdo0.execute-api.us-east-1.amazonaws.com/prod/blogPostsForUser/us-east-1:c0655045-37e1-479e-afc7-da0e3d063a6e"
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  getNicInstagramURL: "https://api.instagram.com/v1/users/3041604645/media/recent?access_token=3041604645.3ae8b40.e9bee353b7c54e1080abcab4fdbaf46c&count=7",
  ...config
};
