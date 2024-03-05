'use client'

import { Anchor, Group, Text } from '@mantine/core'
import useStyles from './style'

type Props = {
  links: {
    link: string
    label: string
  }[]
}

export function Footer({ links }: Props) {
  const { classes } = useStyles()

  const items = links.map((link) => (
    <Anchor<'a'>
      color="dimmed"
      key={link.label}
      href={link.link}
      sx={{ lineHeight: 1 }}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ))

  return (
    <div className={classes.footer}>
      <section className={classes.curved}>
        <div className={classes.inner}>
          <Group className={classes.links}>{items}</Group>
          <Text color="dimmed">Copyright © 2023 ONEUP-CARTEL</Text>
          <Group spacing="xs" position="right" noWrap />
        </div>
      </section>
    </div>
  )
}
