export default function({ $axios, redirect}) {
  if (process.server) {
    return
  }
  $axios.interceptors.request.use((config) => {
    $axios.setHeader('Accept', 'application/json')
    $axios.setHeader('Content-Type', 'application/x-www-form-urlencoded')
    $axios.setHeader('Authorization',"Bearer "+process.env.APP_TOKEN)
    return config;
  });
}
