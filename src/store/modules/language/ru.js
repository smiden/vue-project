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
          name: 'Главная',
          children: []
        },
        {
          url: '/logic',
          name: 'Работы'
        },
        {
          url: '/setting',
          name: 'Настройки',
          children: []
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
