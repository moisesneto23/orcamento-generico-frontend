import router from '@/router';
import store from '@/store';
import _vue from 'vue';
import ErroModel from '@/model/ErroModel';

export default (error: any) => {
  if (error.response) {
    const erro = error.response.data.error as ErroModel;
    if (error.response.status === 401) {
      store.dispatch('auth/signOutOidc');
    } else if (error.response.status === 403) {
      router.push('/erroAutorizacao');
    } else if (error.response.status === 400) {
      _vue.prototype.$dialog.warning({
        text: `${erro.message}<br><br>${erro.details && erro.details.length > 0 ? erro.details?.map((o) => o.message).join('<br>') : ''}`,
        title: 'Alerta',
      });
    } else if (error.response.status === 404) {
      _vue.prototype.$dialog.error({
        text: erro.message,
        title: 'Dados não encontrados',
      });
    } else if (error.response.status === 422) {
      _vue.prototype.$dialog.warning({
        text: erro.message,
        title: 'Erro interno ao processar',
      });
    } else if (error.response.status === 500) {
      _vue.prototype.$dialog.error({
        text: `${erro.message} Você pode tentar novamente mais tarde. Se o problema persistir entre em contato com a área técnica.`,
        title: 'Ops!',
      });
    }
  } else {
    _vue.prototype.$dialog.error({
      text:
        'Ocorreu um problema inesperado nesta operação. Você pode tentar novamente mais tarde. Se o problema persistir entre em contato com a área técnica',
      title: 'Ops!',
    });
  }
  return Promise.reject(error);
};
