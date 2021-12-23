import rtlPlugin from "stylis-plugin-rtl"
import { CacheProvider } from "@emotion/react"
import createCache from "@emotion/cache"

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
})

export default function Rtl({ children }) {
  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>
}
