const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "cms-backend-dev-attachmentsbucket-tyykclmvbv8o"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_AGzNgKpV3",
    APP_CLIENT_ID: "3phlphutigfvf7cfars23vqed0",
    IDENTITY_POOL_ID: "us-east-1:a4d15a38-c835-4f5a-a7c2-d9f965879e28"
  },
  // will probably want to change this to Nic's once you remake his user
  // on the new stack (get stack working first though)
  getNicBlogPostsURL: "https://uxu37jfgnb.execute-api.us-east-1.amazonaws.com/dev/blogPostsForUser/us-east-1:af0bfaac-af4d-431b-8725-becc83c0fe4c"
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
