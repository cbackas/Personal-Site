import { VStack } from '@chakra-ui/react'
import { HistoryEntry } from '../../interfaces/History'
import HistoryItem from './HistoryItem'

const HistoryArea = (): JSX.Element => {
  const workHistory: HistoryEntry[] = [
    new HistoryEntry('Security Enhancement Systems', '#d63543')
      .addPosition('Associate DevOps Engineer', new Date('2021-10-03'), new Date('2022-04-30')),
    new HistoryEntry('Johnson Controls', '#000080')
      .addPosition('DevOps Engineer I', new Date('2022-05-01'), new Date('2022-08-14'))
      .addPosition('DevOps Engineer II', new Date('2022-08-15'), new Date())
  ]

  return (
    <VStack
      w={'full'}
      rounded={10}
      bg='gray.800'
      boxShadow='dark-lg'
    >
      {
        workHistory
          .sort((a, b) => b.end.getMilliseconds() - a.end.getMilliseconds())
          .map((e, i) => <HistoryItem key={i} entry={e} />)
      }
    </VStack>
  )
}

export default HistoryArea
