import { VStack } from '@chakra-ui/react'
import HistoryItem, { HistoryEntry } from './HistoryItem'

const HistoryArea = (): JSX.Element => {
  const workHistory: HistoryEntry[] = [
    new HistoryEntry('Security Enhancement Systems', [
      {
        title: 'Associate DevOps Engineer',
        start: new Date('2021-10-03'),
        end: new Date('2022-04-30')
      }
    ]),
    new HistoryEntry('Johnson Controls', [
      {
        title: 'DevOps Engineer I',
        start: new Date('2022-05-01'),
        end: new Date('2022-08-14')
      },
      {
        title: 'DevOps Engineer II',
        start: new Date('2022-08-15'),
        end: new Date()
      }
    ])
  ]

  // const historySorted = workHistory.sort((a, b) => a.end.getMilliseconds() - b.end.getMilliseconds())

  return (
    <VStack spacing={10} width='100%'>
      {
        workHistory
          .sort((a, b) => b.end.getMilliseconds() - a.end.getMilliseconds())
          .map((e, i) => <HistoryItem key={i} company={e.company} positions={e.positions} start={e.start} end={e.end} />)
      }
    </VStack>
  )
}

export default HistoryArea
