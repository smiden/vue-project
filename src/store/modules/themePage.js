export default {
  namespaced: true,
  state: {
    activeTheme: 1,
    theme: [
      {
        fontColor: '#a39801',
        background: '#3a085f',
        name: 'default'
      },
      {
        fontColor: '#a39801',
        background: '#3a085f'
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
    },
    returnValueTheme (state) {
      state.theme[1].fontColor = state.theme[0].fontColor
      state.theme[1].background = state.theme[0].background
    },
    setBackgroundPage (state, value) {
      state.theme[1].background = value
    },
    setFontColorPage (state, value) {
      state.theme[1].fontColor = value
    }
  },
  action: {
  }
}
