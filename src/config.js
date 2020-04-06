const dev = {
  s3Bucket: "cms-backend-dev-attachmentsbucket-mg9wvqe6tx0h",
  // Note for dev this is actually your username not Nic's
  nicUsername: "us-east-1:0c9864e8-7db2-45fc-9c5a-ed2c11e2d9cf",
  podcastURL: "https://mtmhzl2lje.execute-api.us-east-1.amazonaws.com/dev/episodes/get",
  apiURL: "https://dlnum6f7kj.execute-api.us-east-1.amazonaws.com/dev/",
  cloudFrontBaseURL: "https://d1ljva6zkf6zjh.cloudfront.net",
  blogConfigId: "3",
  programsConfigId: "1"
};

const prod = {
  s3Bucket: "cms-backend-prod-attachmentsbucket-1kgllxxybytns",
  nicUsername: "us-east-1:eb9f731c-e691-4bc2-a74c-ba3e0cfd4f6b",
  podcastURL: "https://btsrfouie1.execute-api.us-east-1.amazonaws.com/prod/episodes/get",
  apiURL: "https://lbe32id9hg.execute-api.us-east-1.amazonaws.com/prod/",
  cloudFrontBaseURL: "https://d1esxin5o90ebg.cloudfront.net",
  blogConfigId: "4",
  programsConfigId: "5"
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  cloudFrontURL: `${config.cloudFrontBaseURL}/${config.nicUsername}/`,
  getNicInstagramURL: "https://api.instagram.com/v1/users/3041604645/media/recent?access_token=3041604645.3ae8b40.7f5d186c0c7d4dbd8a2d7f17a772a8ca&count=7",
  ...config
};
