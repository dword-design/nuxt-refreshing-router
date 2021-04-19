import pushPlugins from 'nuxt-push-plugins'

export default function () {
  pushPlugins(this, require.resolve('./plugin'))
}
