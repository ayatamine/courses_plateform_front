export default function({ $axios, redirect,store}) {
  const app_url = process.env.IS_TEST_MODE ? process.env.APP_URL || 'http://localhost:8001'
    : process.env.APP_URL_S || 'https://arabicdevs.com/course_plateform/public';

  if (process.server) {
    return
  }
  $axios.interceptors.request.use((config) => {
    $axios.setHeader('Accept', 'application/json')
    $axios.setBaseURL(app_url)
    // $axios.setHeader('Content-Type', 'application/x-www-form-urlencoded')
    $axios.setHeader('token',store.state['adminAuth'].token)
    config.baseURL = app_url
    return config;
  });
}
