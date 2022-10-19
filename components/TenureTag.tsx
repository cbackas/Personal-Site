import { Tag, Tooltip } from '@chakra-ui/react'
import { ExtendedDate } from '../interfaces/History'

interface TenureTagProps {
  mode: 'length' | 'range'
  start: ExtendedDate
  end: ExtendedDate
}

const TenureTag = ({ mode, start, end }: TenureTagProps): JSX.Element => {
  const tag = mode === 'range' ? `${start.format()} - ${end.formatEndString()}` : tenureString(start, end)
  const toolTip = mode === 'range' ? tenureString(start, end) : `${start.format()} - ${end.formatEndString()}`
  const color = mode === 'range' && end.formatEndString() === 'Present' ? 'green' : 'gray'

  return (
    <Tooltip label={toolTip}>
      <Tag colorScheme={color}>
        {tag}
      </Tag>
    </Tooltip>
  )
}

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
