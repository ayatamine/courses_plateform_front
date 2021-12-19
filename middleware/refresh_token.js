
export default function ({ redirect ,app}) {
  if(!app.$auth.loggedIn){
    if(app.$i18n.locale == 'en') {
      return redirect('/auth/login')
    }
    return redirect('/ar/auth/login')
  }
}
