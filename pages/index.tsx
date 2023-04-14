import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { ConnectButton } from '@rainbow-me/rainbowkit'

const Index = () => {
    return (
        <>
        <ConnectButton />
        <Tabs>
            <TabList>
                <Tab>One</Tab>
                <Tab>Two</Tab>
                <Tab>Three</Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                    <p>one!</p>
                </TabPanel>
                <TabPanel>
                    <p>two!</p>
                </TabPanel>
                <TabPanel>
                    <p>three!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
        
        </>
    )
}
export default Index