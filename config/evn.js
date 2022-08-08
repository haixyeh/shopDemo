const evnMap = {
  development: {
    ROOT_PATH: '',
    I18N_LOAD_PAGE: '/locales/{{lng}}/{{ns}}.json'
  },
  production: {
    ROOT_PATH: '/shopDemo/dist/',
    I18N_LOAD_PAGE: '/shopDemo/dist/locales/{{lng}}/{{ns}}.json'
  }
}

export default evnMap;