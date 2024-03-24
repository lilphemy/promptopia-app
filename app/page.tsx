import React from 'react'
import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text_center'>
        DISCOVER & SHARE
        <br className='max-md:hidden'/>
        <span className='orange_gradient text_center'>
          AI powered prompts
        </span>
      </h1>
      <p>promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts</p>
      <Feed />
    </section>
  )
}

export default Home