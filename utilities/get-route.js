export const getRoute = () => {
  const userLang = navigator.language || navigator.userLanguage
  const formattedUserLang = userLang.split('-')[0] || 'en'
  const route = formattedUserLang === 'es' ? '/es' : '/en'

  return route
}
