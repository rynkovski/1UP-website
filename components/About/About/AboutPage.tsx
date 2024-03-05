'use client'
import { Communities } from '../Communities/Communities'
import { Home } from '../Home/Home'
import { Join } from '../Join/Join'
import { Owned } from '../Owned/Owned'
import { Stats } from '../Stats/Stats'

export function AboutPage() {
  return (
    <>
      <Home />
      <Stats />
      <Communities />
      <Owned />
      <Join />
    </>
  )
}
