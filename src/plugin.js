export default ({ app: { router } }) => {
  if (process.client) {
    router.beforeEach(({ fullPath }, from, next) => {
      const currentPath = `${window.location.pathname}${window.location.search}${window.location.hash}`
      if (currentPath !== fullPath) {
        window.location.href = fullPath
        return
      }
      next()
    })
  }
}