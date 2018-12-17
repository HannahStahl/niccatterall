const dev = {
  getNicBlogPostsURL: "https://o9n2e948d3.execute-api.us-east-1.amazonaws.com/dev/blogPostsForUser/us-east-1:5619e966-5222-4f41-bfce-b3296d57b59d"
};

const prod = {
  getNicBlogPostsURL: "https://me3t2amdo0.execute-api.us-east-1.amazonaws.com/prod/blogPostsForUser/us-east-1:22a88420-f710-49f6-b205-e76ef4ddf3ff"
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default config;
