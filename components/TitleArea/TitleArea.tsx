import { VStack, Box, Center } from '@chakra-ui/react'
import ButtonCard from './ButtonCard'
import TitleCard from './TitleCard'

const TitleArea = (): JSX.Element => {
  const bg = '#181a1b'
  const skew = 3

  return (
    <Box maxW='100%' mx='auto' h='100vh' zIndex='2'>
      <Box
        pos='relative'
        pb={{ base: 8, sm: 16, md: 20, lg: 28, xl: 32 }}
        pr={{ xl: 10 }}
        h='100vh'
        maxW={{ lg: '2xl' }}
        w={{ lg: '30%' }}
        zIndex={100}
        bg={bg}
        border='solid 1px transparent'
        transform={`skew(-${skew}deg)`}
        transformOrigin={'top'}
        boxShadow={'dark-lg'}
      >
        <Box
          mx='auto'
          maxW={{
            base: '7xl'
          }}
          px={{ base: 4, sm: 6, lg: 8 }}
          mt={{ base: 10, sm: 12, md: 16, lg: 20, xl: 28 }}
          transform={`skew(${skew}deg)`}
          transformOrigin={'top'}
        >
          <VStack spacing='100%'>
            <Box
              w='full'
              textAlign={{ sm: 'center', lg: 'left' }}
              justifyContent='center'
              alignItems='center'
              bg='gray.800'
              rounded={10}
              padding='5'
              boxShadow='dark-lg'
            >
              <TitleCard />
            </Box>
            <Center>
              <ButtonCard />
            </Center>

          </VStack>
        </Box>
      </Box>
    </Box>
  )
}

export default TitleArea
