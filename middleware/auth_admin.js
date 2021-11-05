import cookies from 'js-cookie';
export default function ({ store, redirect }) {
  let access_type =cookies.get('x-ac-tp')
  if (!store.state['adminAuth'].token || !(access_type =="a*/d)m")) {
    return redirect('/admin-cpxx/login');
  }
}
