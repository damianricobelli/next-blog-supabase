import "@fontsource/poppins/100.css"
import "@fontsource/poppins/200.css"
import "@fontsource/poppins/300.css"
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/500.css"
import "@fontsource/poppins/600.css"
import "@fontsource/poppins/700.css"
import "@fontsource/poppins/800.css"
import "@fontsource/poppins/900.css"

import Head from "next/head"

import { Container, Stack, Heading, Text } from "@chakra-ui/react"

const App = () => (
  <>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Container>
      <Stack p={10}>
        <Heading>The spectacle before us was indeed sublime.</Heading>
        <Text>
          Apparently we had reached a great height in the atmosphere, for the
          sky was a dead black, and the stars had ceased to twinkle. By the same
          illusion which lifts the horizon of the sea to the level of the
          spectator on a hillside, the sable cloud beneath was dished out, and
          the car seemed to float in the middle of an immense dark sphere, whose
          upper half was strewn with silver. Looking down into the dark gulf
          below, I could see a ruddy light streaming through a rift in the
          clouds.
        </Text>
      </Stack>
    </Container>
  </>
)

export default App
