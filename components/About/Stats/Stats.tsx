'use client'

import { Box, Grid, Stack, Text } from '@mantine/core'

const cards = [
  {
    title: 'Total volume',
    description: '999999',

  },
  {
    title: 'Crypto',
    description: '999999',

  },
  {
    title: 'Users',
    description: '999999',

  }]

export function Stats() {


  return (
    <>
      <Box bg={'linear-gradient(#2ecde6 -80%, #162947 95%)'} mt={"180px"} sx={{ borderRadius: "14px" }} py={30} >
        <Grid align='center ' justify='center' >
          {
            cards.map((item, index) => (
              <Grid.Col span={4} key={index}>


                <Stack>
                  <Text
                    c={"white"}
                    fz={24}
                    fw={700}
                    ta="center"
                  >
                    {item.title}
                  </Text>
                  <Text
                    c={"white"}
                    fz={16}
                    fw={500}
                    ta="center">
                    {item.description}
                  </Text>
                </Stack>




              </Grid.Col >
            ))}
        </Grid>
      </Box >
    </>
  )
}
