import { copyFileSync, existsSync, mkdirSync } from 'node:fs'
import { execSync } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const websiteRoot = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const libraryRoot = path.join(websiteRoot, '..')
const distCss = path.join(libraryRoot, 'dist', 'tailsass-ui.css')
const destDir = path.join(websiteRoot, 'src', 'vendor')
const destCss = path.join(destDir, 'tailsass-ui.css')

execSync('npm run build', { cwd: libraryRoot, stdio: 'inherit' })

mkdirSync(destDir, { recursive: true })
copyFileSync(distCss, destCss)
console.log(`Synced ${distCss} -> ${destCss}`)

if (!existsSync(destCss)) {
  throw new Error(`Expected CSS at ${destCss}`)
}
