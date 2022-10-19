import { Box, chakra } from '@chakra-ui/react'
import { PositionEntry } from '../../interfaces/History'
import TenureTag from '../TenureTag'

const HistoryPosition = ({ position }: { position: PositionEntry }): JSX.Element => {
  return (
    <Box>
      <chakra.h3>{position.title}</chakra.h3>
      <TenureTag mode='length' start={position.start} end={position.end} />
    </Box>
  )
}

export default HistoryPosition
