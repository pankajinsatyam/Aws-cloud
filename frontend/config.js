// AWS Configuration
// INSTRUCTIONS: Replace these values with your actual AWS resource IDs after deployment

const AWS_CONFIG = {
    // Cognito Configuration
    region: 'ap-south-1', // Change this to your AWS region
    userPoolId: 'ap-south-1_fwz87PC7n', // Replace with your Cognito User Pool ID
    userPoolWebClientId: '1ejlibur8sbo0lnrvck99436bs', // Replace with your App Client ID
    
    // API Gateway Configuration
    apiEndpoint: 'https://jdxf73d4h6.execute-api.us-east-1.amazonaws.com/prod', // Replace with your API Gateway invoke URL (e.g., https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/prod)
};

// DO NOT EDIT BELOW THIS LINE
window.AWS_CONFIG = AWS_CONFIG;
