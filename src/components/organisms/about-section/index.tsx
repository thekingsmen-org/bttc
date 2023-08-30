'use client'

import './styles.module.scss'
import React from 'react'
import ContentSection from '@/components/organisms/content-section'
import { Blockquote } from '@mantine/core'
import { Heading } from '@radix-ui/themes'
import classnames from 'classnames'

export default function AboutSection() {
  return (
    <>
      <ContentSection preset="primary">
        <div className="grid md:grid-cols-4 grid-cols-1 grid-flow-col gap-0 justify-center items-center px-3 md:px-8 lg:px-8">
          <div className="col-span-1 flex justify-center items-center h-full">
            <Heading
              className={classnames(
                "leading-3 font-['Inter'] text-7xl md:text-7xl lg:text-7xl",
                'font-black max-w-7xl whitespace-break-spaces text-left tracking-widest main-header-text'
              )}
            >
              WHO ARE THE KINGS MEN
            </Heading>
          </div>
          <div className="col-span-3 flex items-center">
            <article className="prose text-black">
              <p>
                Before explaining who the King&apos;s Men are, we need to first
                talk about who is the King, and of what Kingdom is this king.
              </p>
              <p className="text-black">
                <strong className="">Jesus Christ</strong> our risen Lord s our
                King. We believe <strong>Jesus Christ</strong> is the{' '}
                <strong>Son of God</strong> to be our <strong>Lord</strong>
                and <strong>Saviour</strong>. We believe He died and was raised
                from the dead on the third day for our redemption.
              </p>
              <p>
                We believe in the{' '}
                <strong className="text-black">5 Solas</strong>.
              </p>
              <ul>
                <li>
                  <strong className="text-black">Solas Scriptura</strong> -
                  Theology must be Scripturally grounded.
                </li>
                <li>
                  <strong className="text-black">Solus Christus</strong> -
                  Theology must be Christ focused.
                </li>
                <li>
                  <strong className="text-black">Solas Fide</strong> - Theology
                  must be faith driven.
                </li>
                <li>
                  <strong className="text-black">Solus Gratia</strong> -
                  Theology must be grace-saturated.
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
            </article>
          </div>
        </div>
      </ContentSection>

      <ContentSection preset="cyan">
        <div className="grid md:grid-cols-4 grid-cols-1 grid-flow-col gap-0 justify-center items-center px-3 md:px-8 lg:px-8">
          <div className="col-span-3 flex items-center justify-end">
            <article className="prose text-black">
              <p>
                Before explaining who the King&apos;s Men are, we need to first
                talk about who is the King, and of what Kingdom is this king.
              </p>
              <p className="text-black">
                <strong className="">Jesus Christ</strong> our risen Lord s our
                King. We believe <strong>Jesus Christ</strong> is the{' '}
                <strong>Son of God</strong> to be our <strong>Lord</strong>
                and <strong>Saviour</strong>. We believe He died and was raised
                from the dead on the third day for our redemption.
              </p>
              <p>
                We believe in the{' '}
                <strong className="text-black">5 Solas</strong>.
              </p>
              <ul>
                <li>
                  <strong className="text-black">Solas Scriptura</strong> -
                  Theology must be Scripturally grounded.
                </li>
                <li>
                  <strong className="text-black">Solus Christus</strong> -
                  Theology must be Christ focused.
                </li>
                <li>
                  <strong className="text-black">Solas Fide</strong> - Theology
                  must be faith driven.
                </li>
                <li>
                  <strong className="text-black">Solus Gratia</strong> -
                  Theology must be grace-saturated.
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
            </article>
          </div>
          <div className="col-span-1 flex justify-center items-center h-full">
            <Heading
              as="h1"
              className={classnames(
                "leading-1 font-['Inter'] text-7xl md:text-7xl lg:text-7xl",
                'font-black max-w-7xl whitespace-break-spaces text-center tracking-widest main-header-text'
              )}
            >
              WHAT IS OUR AIM
            </Heading>
          </div>
        </div>
      </ContentSection>

      <ContentSection preset="white">
        <div className="grid md:grid-cols-4 grid-cols-1 grid-flow-col gap-0 justify-center items-center px-3 md:px-8 lg:px-8">
          <div className="col-span-1 flex justify-center items-center h-full">
            <Heading
              className={classnames(
                "leading-3 font-['Inter'] text-7xl md:text-7xl lg:text-7xl",
                'font-black max-w-7xl whitespace-break-spaces text-left tracking-widest main-header-text'
              )}
            >
              WHO ARE THE KINGS MEN
            </Heading>
          </div>
          <div className="col-span-3 flex items-center">
            <article className="prose text-black">
              <p>
                Before explaining who the King&apos;s Men are, we need to first
                talk about who is the King, and of what Kingdom is this king.
              </p>
              <p className="text-black">
                <strong className="">Jesus Christ</strong> our risen Lord s our
                King. We believe <strong>Jesus Christ</strong> is the{' '}
                <strong>Son of God</strong> to be our <strong>Lord</strong>
                and <strong>Saviour</strong>. We believe He died and was raised
                from the dead on the third day for our redemption.
              </p>
              <p>
                We believe in the{' '}
                <strong className="text-black">5 Solas</strong>.
              </p>
              <ul>
                <li>
                  <strong className="text-black">Solas Scriptura</strong> -
                  Theology must be Scripturally grounded.
                </li>
                <li>
                  <strong className="text-black">Solus Christus</strong> -
                  Theology must be Christ focused.
                </li>
                <li>
                  <strong className="text-black">Solas Fide</strong> - Theology
                  must be faith driven.
                </li>
                <li>
                  <strong className="text-black">Solus Gratia</strong> -
                  Theology must be grace-saturated.
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
            </article>
          </div>
        </div>
      </ContentSection>
    </>
  )
}
