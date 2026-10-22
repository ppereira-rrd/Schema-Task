import type {SlugRule, Rule, UrlRule} from 'sanity'
import { TextRule, StringRule } from 'sanity'

export const slugValidator = (rule: SlugRule) =>
  rule.required().custom((value) => {
    if (!value || !value.current) return "Can't be blank"
    if (!value.current.startsWith('/')) {
      return 'The path must start with a /'
    }
    return true
  })

export const urlValidator = (rule: UrlRule) =>
  rule.required().uri({
    scheme: ['http', 'https'],
  })

export const validateJson = (rule: TextRule) =>
  rule.required().custom((value) => {
    if (!value) return true
    try {
      // Validate the JSON-LD
      // JSON.parse(value)
      return true
    } catch (err) {
      return `Invalid JSON: ${(err as Error).message}`
    }
  })