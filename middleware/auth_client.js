export default function ({ store, redirect }) {
  if (! store.state['usersAuth'].token) {
    return redirect('/auth/login');
  }
}
