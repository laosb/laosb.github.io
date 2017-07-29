if (!location.hash) location.hash = '#intro'

window._prevId = location.hash.slice(1)

const handler = e => {
  !e || e.preventDefault()
  document.getElementById('page-' + window._prevId).setAttribute('class', '')
  document.getElementById('page-' + location.hash.slice(1)).setAttribute('class', 'active')
  document.getElementById('nav-' + window._prevId).setAttribute('class', '')
  document.getElementById('nav-' + location.hash.slice(1)).setAttribute('class', 'active')
  window._prevId = location.hash.slice(1)
  return false
}

window.addEventListener('hashchange', handler)

handler()