import { Button, Code, TabList, TabPanel, TabPanels, Tabs, useMultiStyleConfig, useTab } from '@chakra-ui/react'
import React, { useState } from 'react'
import HistoryArea from './HistoryArea/HistoryArea'
import TechArea from './TechArea'

const TabArea = (): JSX.Element => {
  return (
    <Tabs
      isFitted variant='unstyled'
      h='100%' w='100%'
    >
      <TabList mb='1em'>
        <CustomTab>Tech</CustomTab>
        <CustomTab>History</CustomTab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <TechArea />
        </TabPanel>
        <TabPanel>
          <HistoryArea />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default TabArea

// eslint-disable-next-line react/display-name
const CustomTab = React.forwardRef((props, ref) => {
  // 1. Reuse the `useTab` hook

  const tabProps = useTab({ ...props, ref })
  const isSelected = !!tabProps['aria-selected']

  // 2. Hook into the Tabs `size`, `variant`, props
  const styles = useMultiStyleConfig('Tabs', tabProps)

  const [sizeModifier, setSizeModifier] = React.useState(0)

  const fontSize = (isSelected ? 1.7 : 1.5) + (isSelected ? 0 : sizeModifier)

  return (
    <Button __css={styles.tabs} {...tabProps} w='100%'>
      <Code
        variant={'solid'}
        fontSize={fontSize.toString() + 'em'}
        colorScheme={isSelected ? 'yellow' : ''}
        onMouseEnter={() => setSizeModifier(0.1)}
        onMouseLeave={() => setSizeModifier(0)}
        boxShadow={isSelected ? 'dark-lg' : 'none'}
      >
        {tabProps.children}
      </Code>
    </Button>
  )
})
