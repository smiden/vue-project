export default {
  namespaced: true,
  state: {
    lang: {
      header: {
        logo: '#Лого'
      },
      menu: [
        {
          url: '/main',
          name: 'Главная'
        },
        {
          url: '/logic',
          name: 'Логика'
        },
        {
          url: '/beautiful',
          name: 'Красота'
        },
        {
          url: '/setting',
          name: 'Настройки'
        }
      ]
    }
  },
  getters: {
    lang (state) {
      return state.lang
    }
  }
}
