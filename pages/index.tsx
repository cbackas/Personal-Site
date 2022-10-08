import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import React, { Fragment } from 'react'
import ParticleCanvas from '../components/ParticleCanvas'
import TitleArea from '../components/TitleArea/TitleArea'
import TabArea from '../components/TabArea'

const IndexPage = () => {
  const bg = '#181a1b'
  return (
    <>
      <Head>
        <title>Zac Gibson</title>
      </Head>

      <Box pos='relative' overflow='hidden'>
        <ParticleCanvas />
        <TitleArea />

        {/* <Box
          position={{ lg: 'absolute' }}
          top={{ lg: 0 }}
          bottom={{ lg: 0 }}
          right={{ lg: 0 }}
          mt={{ lg: 150 }}
          mr={{ lg: 150 }}
          mb={{ lg: 150 }}
          pl={{ lg: 500 }}
          w={{ lg: '80%' }}
          border='solid 1px transparent'
          zIndex={1}

        >
          <TabArea />
        </Box> */}
      </Box>
    </>
  )
}

export default IndexPage
