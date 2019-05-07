export default {
  namespaced: true,
  state: {
    activeTheme: 0,
    theme: [
      {
        fontColor: '#fff',
        background: '#000',
        name: 'Темная тема'
      },
      {
        fontColor: '#000',
        background: 'white',
        name: 'Белая тема'
      },
      {
        fontColor: '#19c8cc',
        background: 'pink',
        name: 'Розовая тема'
      },
      {
        fontColor: '#a39801',
        background: '#3a085f',
        name: 'Фиолетовая тема'
      }
    ]
  },
  getters: {
    activeTheme (state) {
      return state.activeTheme
    },
    theme (state) {
      return state.theme
    }
  },
  mutations: {
    selectTheme (state, index) {
      state.activeTheme = index
    }
  },
  action: {
  }
}
