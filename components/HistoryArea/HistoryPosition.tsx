import { Box, chakra } from '@chakra-ui/react'
import { PositionEntry } from './HistoryItem'

const HistoryPosition = ({ title, start, end }: PositionEntry): JSX.Element => {
  return (
    <Box>
      <chakra.h3>{title}</chakra.h3>
    </Box>
  )
}

export default HistoryPosition
