import { DateTime } from 'luxon'

export const datesToDuration = (dateFrom = '2018-01', dateTo = '2018-02') => {
  const to = DateTime.fromISO(dateTo)
  const from = DateTime.fromISO(dateFrom)
  const duration = to.diff(from, ['years', 'months'])

  const years = `${duration.years} year${duration.years === 1 ? '' : 's'}`
  const months = `${duration.months} month${duration.months === 1 ? '' : 's'}`

  return `${years}, ${months}`
}