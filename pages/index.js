import Head from 'next/head'
import { useState } from 'react'

import Hero from 'components/Hero'
import ProjectList from 'components/ProjectList'
import About from 'components/About'

import list from 'service/projectList'

export default function Home() {

  return (
    <>
      <Head>
        <title>Yuiko | My Design to Code Portfolio</title>
      </Head>
      <Hero />
      <ProjectList data={list}/>
      {/* <Modal show={showModal} data={modalData} /> */}
      <About />
    </>
  )
}
