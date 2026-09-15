import { projects, type Project } from '@/lib/portfolio-data'
import en from '@/messages/en.json'
import pt from '@/messages/pt.json'
import { DEFAULT_LOCALE, type Locale } from './config'

/**
 * Merges a project's structural data with the translated copy for a locale.
 *
 * Structure (slug, cover, year, featured, tags) stays in `portfolio-data.ts`:
 * translating a slug would break every URL, and an image path is not prose.
 * Only the prose fields are overridden, keyed by slug, from the dictionaries.
 *
 * A project with no entry in the dictionary falls through to its original
 * English text, so untranslated projects keep working while the rest migrate.
 */

/** The prose fields a dictionary may override. Everything else is structural. */
export type ProjectCopy = Partial<{
  name: string
  headline: string
  domain: string
  summary: string
  role: string
  period: string
  team: string
  tags: string[]
  metricLabel: string
  whatIDid: string[]
  about: string[]
  outcome: string[]
  initiatives: {
    title: string
    challenge: string
    focusLabel: string
    focus: string
    solution: string
  }[]
}>

const dictionaries = { en, pt } as const

function copyFor(locale: Locale, slug: string): ProjectCopy {
  const all = (dictionaries[locale] as { projects?: Record<string, ProjectCopy> })
    .projects
  return all?.[slug] ?? {}
}

/** Returns one project with its copy swapped for the given locale. */
export function localizeProject(project: Project, locale: Locale): Project {
  if (locale === DEFAULT_LOCALE) return project

  const copy = copyFor(locale, project.slug)
  if (Object.keys(copy).length === 0) return project

  return {
    ...project,
    name: copy.name ?? project.name,
    headline: copy.headline ?? project.headline,
    domain: copy.domain ?? project.domain,
    summary: copy.summary ?? project.summary,
    role: copy.role ?? project.role,
    period: copy.period ?? project.period,
    team: copy.team ?? project.team,
    tags: copy.tags ?? project.tags,
    whatIDid: copy.whatIDid ?? project.whatIDid,
    about: copy.about ?? project.about,
    outcome: copy.outcome ?? project.outcome,
    initiatives: copy.initiatives ?? project.initiatives,
    // The metric's value is a number and stays as-is; only its label is prose.
    metric: project.metric
      ? { ...project.metric, label: copy.metricLabel ?? project.metric.label }
      : undefined,
  }
}

/** The full project list, localized. */
export function localizeProjects(locale: Locale): Project[] {
  return projects.map((project) => localizeProject(project, locale))
}

/** Looks up a single project by slug, localized. Slugs never differ by locale. */
export function findLocalizedProject(
  slug: string,
  locale: Locale,
): Project | undefined {
  const project = projects.find((p) => p.slug === slug)
  return project ? localizeProject(project, locale) : undefined
}
