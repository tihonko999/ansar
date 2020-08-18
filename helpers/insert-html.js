export default (el, html) => {
  el.insertAdjacentHTML('beforeend', html)
  const scripts = el.getElementsByTagName('script')
  for (const script of scripts) {
    const newScript = document.createElement('script')
    script.src
      ? newScript.src = script.src
      : newScript.textContent = script.textContent
    script.replaceWith(newScript)
  }
}
