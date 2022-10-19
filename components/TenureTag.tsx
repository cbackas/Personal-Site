import { Tag, Tooltip } from '@chakra-ui/react'
import { ExtendedDate } from '../interfaces/History'

interface TenureTagProps {
  mode: 'length' | 'range'
  start: ExtendedDate
  end: ExtendedDate
}

/**
 * Componenet that displays the tenure of a position or company
 * Can either show the length of time or the start and end dates
 * @param mode the type of tenure tag to display (defaults to 'range')
 * @param start starting date of the tenure
 * @param end ending date of the tenure
 */
function TenureTag ({ mode = 'range', start, end }: TenureTagProps): JSX.Element {
  const length = tenureString(start, end)
  const range = `${start.format()} - ${end.formatEndString()}`

  let tag = range
  let tooltip = length
  let color = end.formatEndString() === 'Present' ? 'green' : 'gray'
  // reverse the tag and tooltip if the mode is 'length'
  if (mode === 'length') {
    tag = length
    tooltip = range
    color = 'gray'
  }

  return (
    <Tooltip label={tooltip}>
      <Tag colorScheme={color}>
        {tag}
      </Tag>
    </Tooltip>
  )
}

/**
 * Provides a formatted representing the length of time between two dates
 * @param start starting date of the tenure
 * @param end ending date of the tenure
 * @returns tenure string in 'x years and y months' format
 */
const tenureString = (start: Date, end: Date): string => {
  let totalMonths
  totalMonths = (end.getFullYear() - start.getFullYear()) * 12
  totalMonths -= start.getMonth()
  totalMonths += end.getMonth()
  totalMonths = totalMonths <= 0 ? 0 : totalMonths

  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12

  let yearsString = `${years} years`
  if (years === 0) yearsString = ''
  if (years === 1) yearsString = '1 year'

  let monthsString = `${months} months`
  if (months === 0) monthsString = ''
  if (months === 1) monthsString = '1 month'

  const and = years > 0 && months > 0 ? ' and ' : ''

  return `${yearsString}${and}${monthsString}`
}

export default TenureTag
