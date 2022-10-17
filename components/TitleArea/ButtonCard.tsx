import { Box, Button, Highlight, HStack, Icon, Tooltip, useToast } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaRegEnvelope } from 'react-icons/fa'

const ButtonCard = (): JSX.Element => {
  const toast = useToast()

  const copyEmailToClipboard = (): void => {
    const email = 'zac@zac.gg'
    void navigator.clipboard.writeText(email)

    const toastID = 'email_toast'
    if (!toast.isActive(toastID)) {
      toast({
        id: toastID,
        position: 'bottom-left',
        render: () => (
          <Box color='white' p={3} bg='blue.500' rounded={10}>
            <Highlight query={email} styles={{ px: '2', py: '1', rounded: '10', bg: 'orange.100' }}>
              {email + ' copied to clipboard!'}
            </Highlight>
          </Box>
        ),
        // icon: <Icon as={FaRegEnvelope} boxSize="1.5em" />,
        duration: 2500
      })
    }
  }

  return (
    <HStack
      w='100%'
      spacing='10'
      bg='gray.800'
      rounded={10}
      padding='5'
      boxShadow='dark-lg'
      zIndex='2'
    >
      <Tooltip label='Github'>
        <Button
          paddingX='2' paddingY='6' variant='solid'
          colorScheme='blue' zIndex='2'
          as='a' href='https://www.github.com/cbackas' target='_blank'
        >
          <Icon as={FaGithub} boxSize='2em' />
        </Button>
      </Tooltip>
      <Tooltip label='LinkedIn'>
        <Button
          paddingX='2' paddingY='6' variant='solid'
          colorScheme='linkedin' zIndex='2'
          as='a' href='https://www.linkedin.com/in/zac-gibson' target='_blank'
        >
          <Icon as={FaLinkedin} boxSize='2em' />
        </Button>
      </Tooltip>
      <Tooltip label='Email'>
        <Button
          paddingX='2' paddingY='6' variant='solid'
          colorScheme='orange' zIndex='99'
          onClick={() => copyEmailToClipboard()}
        >
          <Icon as={FaRegEnvelope} boxSize='2em' />
        </Button>
      </Tooltip>
    </HStack>
  )
}

export default ButtonCard
