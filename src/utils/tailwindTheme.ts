import resolveConfig from 'tailwindcss/resolveConfig'
import { TailwindConfig } from 'tailwindcss/tailwind-config'
import tailwindConfig from '../../tailwind.config'

type Extended = typeof tailwindConfig & TailwindConfig
const config = resolveConfig(tailwindConfig as Extended)
const { theme } = config

export { theme }
