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
          url: '/work',
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
    lang(state) {
      return state.lang
    }
  }
}
