const dev = {
  s3Bucket: "cms-backend-dev-attachmentsbucket-tyykclmvbv8o",
  // will probably want to change this to Nic's once you remake his user on the new stack:
  nicUsername: "us-east-1:af0bfaac-af4d-431b-8725-becc83c0fe4c",
  blogPostsURL: "https://uxu37jfgnb.execute-api.us-east-1.amazonaws.com/dev/blogPostsForUser/",
};

const prod = {
  s3Bucket: "cms-backend-prod-attachmentsbucket-gskfdn3cqx2t",
  nicUsername: "us-east-1:c0655045-37e1-479e-afc7-da0e3d063a6e",
  blogPostsURL: "https://me3t2amdo0.execute-api.us-east-1.amazonaws.com/prod/blogPostsForUser/"
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  getNicInstagramURL: "https://api.instagram.com/v1/users/3041604645/media/recent?access_token=3041604645.3ae8b40.e9bee353b7c54e1080abcab4fdbaf46c&count=7",
  awsAccessKeyID: "AKIAJKJM4SZVHUN3WKKA",
  awsSecretAccessKey: "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",
  ...config
};
