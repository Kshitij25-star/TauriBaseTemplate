import PocketBase from 'pocketbase';

// This URL should match where your PocketBase instance is hosted.
// For local dev: 'http://127.0.0.1:8090'
const PB_URL = process.env.REACT_APP_PB_URL || 'http://127.0.0.1:8090';

const pb = new PocketBase(PB_URL);

export default pb;