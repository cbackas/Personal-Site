import { Center, Divider, Grid, GridItem, Heading, Icon, Tag, VStack } from '@chakra-ui/react'
import { Fragment } from 'react'
import { HistoryEntry } from '../../interfaces/History'
import HistoryPosition from './HistoryPosition'

const HistoryItem = ({ entry }: { entry: HistoryEntry }): JSX.Element => {
  return (
    <Fragment>
      <Divider />
      <Grid
        w={'full'}
        padding='5'
        templateRows='1em 1fr'
        templateColumns='5px repeat(12, 1fr)'
        gap={4}
      >
        <GridItem colSpan={13}>
          <Heading fontSize={{ base: 'xl', sm: 'md', md: 'xl' }}>
            {entry.company}{' '}
            <Tag
              colorScheme={'gray'}
            >
              {entry.tenureString}
            </Tag>
          </Heading>
        </GridItem>
        <GridItem colSpan={1}>
          <Center h='full' w={'full'} textAlign={'right'}>
            <Icon
              h='80%'
              w='.2rem'
              color={entry.color}
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
                .map((p, i) => <HistoryPosition key={i} position={p} />)
            }
          </VStack>
        </GridItem>
      </Grid>
    </Fragment>
  )
}

export default HistoryItem
