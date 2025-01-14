import { BentoGrid, BentoGridItem } from '@/app/BentoGrid'
import React from 'react'

const Grid = () => {
  return (
    <section id='about'>
      <BentoGrid>
        {[{title: "Title1", description: "Description1", id: 1}].map((item) => (
          <BentoGridItem 
            id={item.id}
            key={item.id}
            title={item.title}
          />
        ))}
      </BentoGrid>
    </section>
  )
}

export default Grid