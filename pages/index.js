import Head from 'next/head'
import { useState } from 'react'

import Hero from 'components/Hero'
import ProjectList from 'components/ProjectList'
import Modal from 'components/Modal'
import About from 'components/About'

import list from 'service/projectList'

export default function Home() {

  const [showModal, setShowModal] = useState(false)
  const [modalData, setModalData] = useState({})
  const getData = (id) => {
    setModalData(list[id])
    setShowModal(true)
  }

  return (
    <>
      <Head>
        <title>Yuiko | My Design to Code Portfolio</title>
      </Head>
      <Hero />
      <ProjectList data={list} getData={getData} />
      <Modal data={modalData} show={showModal} triggerModal={setShowModal} />
      <About />
    </>
  )
}
