import { Center, Grid, GridItem, Heading, Icon, VStack } from '@chakra-ui/react'
import HistoryPosition from './HistoryPosition'

const HistoryItem = (entry: HistoryEntry): JSX.Element => {
  return (
    <Grid
      w='full'
      bg='gray.800'
      rounded={10}
      padding='5'
      boxShadow='dark-lg'
      templateRows='1em 1fr'
      templateColumns='5px repeat(12, 1fr)'
      gap={4}
    >
      <GridItem colSpan={13}>
        <Heading fontSize={{ base: 'xl', sm: 'md', md: 'xl' }}>
          {entry.company}
        </Heading>
      </GridItem>
      <GridItem colSpan={1}>
        <Center h='full' w={'full'} textAlign={'right'}>
          <Icon
            h='80%'
            w='.2rem'
            color='red'
            fill='currentColor'
            preserveAspectRatio='none'
            aria-hidden='true'
            zIndex={99}
            rounded="4"
          >
            <polygon points='0,0 100,0 100,100 0,100' />
          </Icon>
        </Center>
      </GridItem>
      <GridItem colSpan={12} h={'full'}>
        <VStack h={'full'} align={'left'}>
          {
            entry.positions
              .sort((a, b) => b.end.getMilliseconds() - a.end.getMilliseconds())
              .map((p, i) => <HistoryPosition key={i} title={p.title} start={p.start} end={p.end} />)
          }
        </VStack>
      </GridItem>
    </Grid>
  )
}

export default HistoryItem

// export interface HistoryEntry {
//   company: string
//   positions: PositionEntry[]
// }

export class HistoryEntry {
  public company: string
  public positions: PositionEntry[]

  constructor (company: string, positions: PositionEntry[]) {
    this.company = company
    this.positions = positions
  }

  get start (): Date {
    return this.positions.reduce((a, b) => a.start < b.start ? a : b).start
  }

  get end (): Date {
    return this.positions.reduce((a, b) => a.end > b.end ? a : b).end
  }
}

export interface PositionEntry {
  title: string
  start: Date
  end: Date
}
