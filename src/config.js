const dev = {
  s3Bucket: "cms-backend-dev-attachmentsbucket-mg9wvqe6tx0h",
  // Note for dev this is actually your username not Nic's
  nicUsername: "us-east-1:581c7f6a-41c6-4715-a5f3-d396e3af7e0c",
  blogPostsURL: "https://8erdut5qvk.execute-api.us-east-1.amazonaws.com/dev/",
  blogCloudFrontURL: "https://d1nwz5yvxuozj1.cloudfront.net/"
};

const prod = {
  s3Bucket: "cms-backend-prod-attachmentsbucket-1kgllxxybytns",
  nicUsername: "us-east-1:d908b4a1-a463-457f-a5ee-36c7be08db55",
  blogPostsURL: "https://oxy3euke2k.execute-api.us-east-1.amazonaws.com/prod/",
  blogCloudFrontURL: "https://d1fl3q441qbwnx.cloudfront.net/"
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  getNicInstagramURL: "https://api.instagram.com/v1/users/3041604645/media/recent?access_token=3041604645.3ae8b40.7f5d186c0c7d4dbd8a2d7f17a772a8ca&count=7",
  ...config
};
