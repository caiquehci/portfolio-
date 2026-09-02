// (novo) utilitário server-side para localizar imagens em public/portfolio-images
import fs from 'fs'
import path from 'path'

const VALID_EXT = /\.(png|jpe?g|webp|avif|svg)$/i

function normalizeName(s: string) {
  return s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove diacríticos
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '') // remove espaços e outros caracteres
}

function findFolderForKey(key: string) {
  const base = path.join(process.cwd(), 'public', 'portfolio-images')
  if (!fs.existsSync(base)) return null

  const entries = fs.readdirSync(base, { withFileTypes: true }).filter((d) => d.isDirectory())
  const keyNorm = normalizeName(key)

  // tenta encontrar pasta cujo nome normalizado contém o key normalizado (ou o inverso)
  for (const dirent of entries) {
    const name = dirent.name
    const nameNorm = normalizeName(name)
    if (nameNorm.includes(keyNorm) || keyNorm.includes(nameNorm)) {
      return path.join(base, name)
    }
  }

  // fallback: pasta com o mesmo nome exato
  const exact = path.join(base, key)
  if (fs.existsSync(exact) && fs.statSync(exact).isDirectory()) return exact

  return null
}

export function getImagesForProject(key: string): string[] {
  if (!key) return []
  const folder = findFolderForKey(key)
  if (!folder) return []

  const files = fs
    .readdirSync(folder)
    .filter((f) => VALID_EXT.test(f))
    .map((f) => `/portfolio-images/${path.basename(folder)}/${f}`)

  // opcional: ordenar para ter consistência
  return files.sort()
}
