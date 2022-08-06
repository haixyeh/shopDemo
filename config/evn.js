const evnMap = {
  development: {
    I18N_LOAD_PAGE: '/locales/{{lng}}/{{ns}}.json'
  },
  production: {
    I18N_LOAD_PAGE: '/shopDemo/dist/locales/{{lng}}/{{ns}}.json'
  }
}

export default evnMap;