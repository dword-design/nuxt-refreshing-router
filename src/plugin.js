export default context => {
  if (process.client) {
    context.app.router.beforeEach((to, from, next) => {
      const currentPath = `${window.location.pathname}${window.location.search}${window.location.hash}`
      if (currentPath !== to.fullPath) {
        window.location.href = to.fullPath

        return
      }
      next()
    })
  }
}
