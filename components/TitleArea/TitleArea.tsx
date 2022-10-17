import { Icon, VStack, Box, Center } from '@chakra-ui/react'
import ButtonCard from './ButtonCard'
import TitleCard from './TitleCard'

const TitleArea = (): JSX.Element => {
  const bg = '#181a1b'

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
        // bgGradient="linear(to-br, gray.800, #e87d2c)"
        border='solid 1px transparent'
      >
        <Icon
          display={{ base: 'none', lg: 'block' }}
          position='absolute'
          right={0}
          top={-1}
          bottom={0}
          h='full'
          w={40}
          // color="#e87d2c"
          color={bg}
          transform='translateX(50.5%)'
          fill='currentColor'
          filter='drop-shadow(5px 0 5px)'
          viewBox='0 0 100 100'
          preserveAspectRatio='none'
          aria-hidden='true'
          zIndex={99}
        >
          <polygon points='50,0 100,0 50,100 0,100' />
        </Icon>
        <Box
          mx='auto'
          maxW={{
            base: '7xl'
          }}
          px={{ base: 4, sm: 6, lg: 8 }}
          mt={{ base: 10, sm: 12, md: 16, lg: 20, xl: 28 }}
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
