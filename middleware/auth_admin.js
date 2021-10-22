export default function ({ store, redirect }) {
  if (! store.state['adminAuth'].token) {
    return redirect('/admin-cpxx/login');
  }
}
