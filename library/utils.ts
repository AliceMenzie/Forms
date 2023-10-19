import { PRICING, TPricing } from './types'

export const capitaliseFirst = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const formatPricing = (isYearly: boolean, selection: string) => {
  if (isYearly) {
    return `$${PRICING[selection].yearly}/yr`
  }
  return `$${PRICING[selection].monthly}/mo`
}

export const calcTotal = (
  isYearly: boolean,
  plan: string,
  addOns: string[]
) => {
  let total: number
  if (isYearly) {
    total = PRICING[plan].yearly
    addOns.forEach((addOn) => (total += PRICING[addOn].yearly))
    return `$${total}/yr`
  }

  total = PRICING[plan].monthly
  addOns.forEach((addOn) => (total += PRICING[addOn].monthly))
  return `$${total}/mo`
}

export const camelCaseToRegularString = (camelCaseString: string) => {
  // Use a regular expression to insert a space before all capital letters
  // and then convert the string to lowercase
  return camelCaseString.replace(/([A-Z])/g, ' $1').toLowerCase()
}
