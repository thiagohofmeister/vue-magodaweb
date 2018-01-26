class Route {
  /**
   * @param {Vue} component
   * @param {string} path
   * @param {string} name
   */
  constructor (component, path, name = '') {
    this.children = []
    this.props = false
    this.path = path
    this.name = name
    this.component = component
  }

  /**
   * Seta rotas filhas.
   *
   * @param {Route[]} children
   * @returns {Route}
   */
  setChildren (children) {
    this.children = children
    return this
  }

  /**
   * Verifica se possui rotas filhas.
   *
   * @returns {boolean}
   */
  hasChildren () {
    return this.children.length > 0
  }

  /**
   * Passa atributos da rota para as props do componente.
   *
   * @returns {Route}
   */
  useProps () {
    this.props = true
    return this
  }
}

export default Route
