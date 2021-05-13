import Head from 'next/head'
import { Container, Heading, Box, Text, Button } from "@chakra-ui/react"
import { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSadCry, faLaughBeam } from '@fortawesome/free-regular-svg-icons'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export default function Home() {

  const [ stockData, setStockData ] = useState(null);

  useEffect(() => {

    fetch('https://www.boots.com/webapp/wcs/stores/servlet/CVOSShowStockView?productId=927582&storeId=11352&storeId=11352&catalogId=28501&langId=-1&krypto=46Kqi7H%2B5ZzMDs8tfhrzBzmoY1PafMUQEJLnYsD17cvgmlVO8ZyCxkgPU3sMj3pbUhvMAGVmLrlJEjTMfBopJ8K4wPBwMvjTjyHt0IiclqkAQmRzITqlSYWhs7YL%2FmpFwfJfWwWYzfSaG2pygUpedO8XJCePq1ev9SVTT52cvbFjhHgTpk6a20IYhbKp2wZ7grog8glpTE4bEUJr8VSPfDHV3fy9w0C87wdjCYh%2FcOo%3D', { method: 'GET', mode: 'no-cors' })
      .then(response => console.log(response))
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
        <Heading size="xl" mb="10" lineHeight="1.2" fontFamily="Poppins" fontWeight="900">Is Boots Essentials Curl Creme In Stock Yet?</Heading>
        <Box py="5">
          { !stockData &&
            <Box>
              <Box mb="3" color="pink"><FontAwesomeIcon size="5x" icon={faSpinner} spin /></Box>
              <Text mb="3" fontWeight="700" fontSize="2xl">Checking...</Text>
            </Box>
          }
          { stockData &&
            <Box>
              <Box mb="3" color="pink"><FontAwesomeIcon size="5x" icon={faSadCry} /></Box>
              <Text mb="3" fontWeight="700" fontSize="3xl">No...</Text>
              <Button onClick={e=>setStockData({})}>Check again...</Button>
            </Box>
          }
          { stockData &&
            <Box>
              <Box mb="3" color="pink"><FontAwesomeIcon size="5x" icon={faLaughBeam} spin /></Box>
              <Text mb="3" fontWeight="700" fontSize="3xl">Yes!</Text>
              <Button href="https://www.boots.com/boots-essentials-curl-creme-250ml-10088417" colorScheme="pink">Go get it!</Button>
            </Box>
          }
        </Box>
      </Container>

    </>
  )


}
