import { Box, chakra, Tag, Tooltip } from '@chakra-ui/react'
import { PositionEntry } from '../../interfaces/History'

const HistoryPosition = ({ position }: { position: PositionEntry }): JSX.Element => {
  return (
    <Box>
      <chakra.h3>{position.title}</chakra.h3>
      <Tooltip label={position.tenureString}>
        <Tag
          colorScheme={position.end.formatEndString() === 'Present' ? 'green' : 'gray'}
        >
          {position.start.format()} - {position.end.formatEndString()}
        </Tag>
      </Tooltip>
    </Box>
  )
}

export default HistoryPosition
