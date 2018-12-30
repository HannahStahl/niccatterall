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
  // TODO change this to Nic's user ID and access token once he authorizes you
  getNicInstagramURL: "https://api.instagram.com/v1/users/9436320028/media/recent?access_token=9436320028.176a171.f35c30549495489b8a469d27d1dd223f&count=12",
  ...config
};
