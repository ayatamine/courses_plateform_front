import cookies from 'js-cookie'
export default function ({ store, redirect }) {
  let access_type =cookies.get('x-ac-tp')
  console.log(typeof (access_type))
  if (! store.state['adminAuth'].token ) {
    return redirect('/admin-cpxx/login');
  }
}
