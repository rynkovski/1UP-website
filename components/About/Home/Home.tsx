'use client'
import AnimatedImages from '@/components/AnimatedImages'
import { Button, Grid, Group, Text } from '@mantine/core'
import { IconBrandDiscord, IconWorld } from '@tabler/icons'

export function Home() {
  return (
    <>
      <Grid>
        <Grid.Col span={8}>
          <Text
            color='white'
            sx={{
              fontFamily: 'Montserrat, sans-serif',
            }}
            ta="left"
            fz={64}
            fw={700}
          >
            Hive Gaming Guild<br />where

            <Text span variant="gradient"
              gradient={{ from: '#162947', to: '#2ecde6', deg: 45 }}> players</Text>  matters.
          </Text>
          <Text
            color='white'
            sx={{
              fontFamily: 'Montserrat, sans-serif',
            }}
            ta="left"
            fz={24}
            fw={500}
            mt={20}
          >
            {/* Introducing the Cartel Guild. */}
            As a guild, we foster collaboration with top gaming developers <br /> across various Hive projects.
          </Text>
          <Group sx={{ display: "flex", gap: "sm" }}>
            <Button
              variant="gradient"
              gradient={{ from: '#162947', to: '#2ecde6', deg: 45 }}

              radius="md"
              size="xl"
              mt={'xl'}
              style={{
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
                // Adjust the shadow properties as needed
              }}
              onClick={() => window.open('https://discord.gg/f7sHEHYZJZ', '_blank')}
              leftIcon={<IconBrandDiscord />}

            >
              Join Discord
            </Button>
            <Button
              variant="gradient"
              gradient={{ from: '#162947', to: '#2ecde6', deg: -45 }}
              radius="md"
              size="xl"
              mt={'xl'}
              style={{
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)', // Adjust the shadow properties as needed
              }}
              leftIcon={<IconWorld />}
            >
              Check Community
            </Button>
          </Group>
        </Grid.Col>
        <Grid.Col span={4}>
          <AnimatedImages />
        </Grid.Col>
      </Grid>
    </>
  )
}
