import cookies from 'js-cookie';

export default function ({ store, redirect }) {
  //const token = cookies.get('x-access-token');
  if (!store.state['usersAuth'].token) {
    store.dispatch('usersAuth/refreshToken')
      .catch(errors => {
        console.log(errors);
        store.dispatch('usersAuth/logout');
      });
  }
}
