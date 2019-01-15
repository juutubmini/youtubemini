const KEY = '{YOUR_API_KEY}';
const QUERY_ELEMENT = 'query';
const APP_ELEMENT = 'videos';
const FILTER_ELEMENT = 'filter';
const MAX_RESULTS = 10;
const NO_RESULTS_FOUND = 'No results found, try different phrase.';
const VIDEO_URL = 'https://www.youtube.com/watch?v=';
const CHANNEL_URL = 'https://www.youtube.com/channel/';
let URL = 'https://www.googleapis.com/youtube/v3/search/?';

const defaultParamsSearch = {
  key: KEY,
  maxResults: MAX_RESULTS,
  part: 'snippet',
  type: 'video'
}
