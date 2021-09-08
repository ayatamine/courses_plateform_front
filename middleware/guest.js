export default  function({store,redirect}){
  if(store.getters['auths.js/authenticated']){
    return redirect('/')
  }
}
