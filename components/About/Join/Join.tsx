'use client'
import { Card, Center, Grid, Group, Text } from '@mantine/core';

import useStyles from '../style';




export function Join() {
  const { classes } = useStyles()

  const cards = [{
    title: ` Get $CARTEL from `,
    link: <a href={"https://beeswap.dcity.io/tokens/CARTEL"} target="_blank" rel="noreferrer" className={classes.link}><br />HIVE market</a>
  }, {
    title: "Join our community"
  }, {
    title: "Start earning rewards"
  }]


  return (
    <>
      <Text
        color={'#fff'}
        sx={{
          fontFamily: 'Segoe UI, sans-serif',
        }}
        ta="left"
        fz={48}
        fw={700}
        mt={100}
      >
        How to join CARTEL?
      </Text>
      <Text
        color={'#fff'}
        sx={{
          fontFamily: 'Segoe UI, sans-serif',
        }}
        ta="left"
        fz={32}
        fw={500}
        my={20}
      >
        It is simple!
      </Text>

      <Grid >
        {
          cards.map((item, index) =>
          (<Grid.Col span={4} key={index}>

            <Card
              bg={'linear-gradient(#2ecde6 -80%, #162947 95%)'} className={classes.card} mih={'100%'} radius="lg" sx={{ cursor: "default" }}
            >
              <Center>
                <Group align='center' spacing={"md"} noWrap>
                  <Text fz={120} fw={800} color='rgba(3, 219, 252,0.5)' sx={{ fontFamily: 'Montserrat, sans-serif', zIndex: 0 }}>{index + 1}</Text>
                  <Text
                    color='white'
                    sx={{
                      fontFamily: 'Segoe UI, sans-serif',
                      zIndex: 2
                    }}
                    ta="center"
                    fz={24}
                    fw={700}

                  >
                    {item.title}
                    {item.link ? item.link : <></>}
                  </Text>
                </Group>
              </Center>
            </Card>

          </Grid.Col>)
          )
        }


      </Grid>


    </>
  )
}
