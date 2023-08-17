'use client'

import './styles.module.scss'
import React from 'react'
import ContentSection from '@/components/organisms/content-section'
import { Blockquote } from '@mantine/core'

export default function AboutSection() {
  return (
    <ContentSection title="ABOUT" preset="primary">
      <div className="flex flex-col justify-center items-center">
        <article className="prose text-black">
          <h4 className="font-black text-center text-black">
            WHO ARE THE KINGS MEN
          </h4>
          <p>
            Before explaining who the King&apos;s Men are, we need to first talk
            about who is the King, and of what Kingdom is this king.
          </p>
          <p className="text-black">
            <strong className="">Jesus Christ</strong> our risen Lord s our
            King. We believe <strong>Jesus Christ</strong> is the{' '}
            <strong>Son of God</strong> to be our <strong>Lord</strong>
            and <strong>Saviour</strong>. We believe He died and was raised from
            the dead on the third day for our redemption.
          </p>
          <p>
            We believe in the <strong className="text-black">5 Solas</strong>.
          </p>
          <ul>
            <li>
              <strong className="text-black">Solas Scriptura</strong> - Theology
              must be Scripturally grounded.
            </li>
            <li>
              <strong className="text-black">Solus Christus</strong> - Theology
              must be Christ focused.
            </li>
            <li>
              <strong className="text-black">Solas Fide</strong> - Theology must
              be faith driven.
            </li>
            <li>
              <strong className="text-black">Solus Gratia</strong> - Theology
              must be grace-saturated.
            </li>
            <li>
              <strong className="text-black">Solus Deo Gloria</strong> -
              Theology must be God-dominated.
            </li>
          </ul>
          <Blockquote cite="– RC Sproul" className="text-black">
            A god who is all love, all grace, all mercy, no sovereignty, no
            justice, no holiness, and no wrath is an idol
          </Blockquote>
          <h4 className="font-black text-center text-black">
            WHAT IS BACK TO THE CROSS
          </h4>
          <h6 className="font-black text-center text-black"></h6>
        </article>
      </div>
    </ContentSection>
  )
}
