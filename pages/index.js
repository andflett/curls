import Head from 'next/head'
import { Container, Heading, Box, Text, Button } from "@chakra-ui/react"
import { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSadCry, faLaughBeam } from '@fortawesome/free-regular-svg-icons'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export default function Home() {

  const [ stockData, setStockData ] = useState(null);

  const checkStock = () => {
    setStockData(null)
    fetch('https://simplescraper.io/api/TLm08ZmWuIodHtRNwSNX?apikey=hfpizYVrbuiovbYHofYOjbQxynacovxP&limit=100&run_now=true', { method: 'GET' })
      .then(response => response.json())
      .then(data => setStockData(data))
      .catch(function(error) {
        console.log(error);
      });
  }

  useEffect(() => {

    fetch('https://simplescraper.io/api/TLm08ZmWuIodHtRNwSNX?apikey=hfpizYVrbuiovbYHofYOjbQxynacovxP&limit=100', { method: 'GET' })
      .then(response => response.json())
      .then(data => setStockData(data))
      .catch(function(error) {
        console.log(error);
      });

  }, [])

  return (
    <>
      <Head>
        <title>Is Boots Essentials Curl Creme In Stock Yet?</title>
        <meta name="description" content="Is Boots Essentials Curl Creme In Stock Yet?" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&family=Lato:wght@100;300;400;700;900&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&family=Lato:wght@100;300;400;700;900&display=swap" media="print" onload="this.media='all'" />
      </Head>

      <Container py="20" textAlign="center">
        <Heading fontSize="2.5rem" mb="1" lineHeight="1.2" fontFamily="Poppins" fontWeight="900">Is Boots Essentials Curl Creme In Stock Yet?</Heading>
        <Box py="5">
          { !stockData &&
            <Box>
              <Box mb="4" color="pink"><FontAwesomeIcon size="6x" icon={faSpinner} spin /></Box>
              <Text mb="3" fontWeight="700" fontSize="2xl">Checking...</Text>
            </Box>
          }
          { stockData && stockData?.data[0]['Stock Counter'] === 'Sold out online' &&
            <Box>
              <Box mb="3" color="pink"><FontAwesomeIcon size="6x" icon={faSadCry} /></Box>
              <Text mb="4" fontWeight="700" fontSize="4xl">Nope</Text>
              <Button onClick={e=>checkStock()}>Check again...</Button>
            </Box>
          }
          { stockData && (!stockData?.data[0]['Stock Counter'] || stockData?.data[0]['Stock Counter'] !== 'Sold out online') &&
            <Box>
              <Box mb="3" color="pink"><FontAwesomeIcon size="6x" icon={faLaughBeam} spin /></Box>
              <Text mb="3" fontWeight="700" fontSize="3xl">Yes!</Text>
              <Button href="https://www.boots.com/boots-essentials-curl-creme-250ml-10088417" colorScheme="pink">Go get it!</Button>
            </Box>
          }
        </Box>
      </Container>

    </>
  )


}
