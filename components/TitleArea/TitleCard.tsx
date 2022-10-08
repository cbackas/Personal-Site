import { chakra } from '@chakra-ui/react'
import { Fragment } from 'react'

const TitleCard = (): JSX.Element => {
  return (
    <Fragment>
      <chakra.h1
        fontSize={{ base: '4xl', sm: '5xl', md: '6xl' }}
        letterSpacing='tight'
        lineHeight='short'
        fontWeight='extrabold'
        color='gray.900'
        _dark={{ color: 'white' }}
      >
        <chakra.span
          display={{ base: 'block', xl: 'inline' }}
        >
          Zac Gibson
        </chakra.span>

      </chakra.h1>
      <chakra.h2
        mt={{ base: '4xl', sm: '5xl', md: '6xl' }}
        fontSize={{ sm: '1xl', md: '2xl' }}
        letterSpacing='tight'
        lineHeight='short'
        fontWeight='extrabold'
        mx={{ sm: 'auto', lg: 0 }}
        color='gray.500'
      >
        DevOps Engineer
      </chakra.h2>
    </ Fragment>
  )
}

export default TitleCard
