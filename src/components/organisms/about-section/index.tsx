'use client'

import './styles.module.scss'
import React from 'react'
import ContentSection from '@/components/organisms/content-section'
import { Blockquote } from '@mantine/core'
import { Heading } from '@radix-ui/themes'
import classnames from 'classnames'

export default function AboutSection() {
  const getBibleVerLink = (verse: string) =>
    `https://bible.com/bible/100/${verse}.NASB1995`

  return (
    <>
      <ContentSection preset="primary">
        <div className="grid md:grid-cols-4 grid-cols-1 gap-0 justify-center items-center px-3 md:px-8 lg:px-8">
          <div className="md:col-span-1 flex justify-center items-center h-full pb-10 md:pb-0">
            <Heading
              className={classnames(
                "md:leading-3 font-['Inter'] text-4xl md:text-7xl lg:text-7xl",
                'font-black max-w-7xl md:whitespace-break-spaces text-center md:text-left tracking-widest main-header-text'
              )}
            >
              WHO ARE THE KINGS MEN
            </Heading>
          </div>
          <div className="md:col-span-3 flex items-center">
            <article className="prose text-black max-w-4xl">
              <p className="text-black">
                <strong className="">Jesus Christ</strong> our risen Lord is our
                King. We believe <strong>Jesus Christ</strong> is the{' '}
                <strong>Son of God</strong>, equal with <strong>God</strong> and
                with Authority from <strong>God</strong> the Father. We believe
                He died and was raised from the dead on the third day for the
                redemption of all those that would <strong>Repent</strong> and
                put their faith in Him.
              </p>

              <h5>
                <b>The King&apos;s Men</b>
              </h5>
              <p className="text-black">
                We are men and women, brothers and sisters from different
                Christian denominations that have dedicated our lives to
                witnessing Jesus Christ to all people, tribe and nations by
                calling all to repentance and trust in Jesus{' '}
                <a href={getBibleVerLink('act.20.21')} target="_blank">
                  Acts 20:22
                </a>
              </p>

              <p className="text-black">
                We are servants of the most High God, saved by Grace not of
                works, through Faith in Christ alone. We hold firm to{' '}
                <strong>The Great Commission</strong> given to us by our King,
                saying.
              </p>
              <blockquote>
                “Go therefore and make disciples of all the nations, baptizing
                them in the name of the Father and the Son and the Holy Spirit,”
                ‭‭Matthew‬ ‭28‬:‭19‬ ‭NASB1995‬‬
              </blockquote>
              <p>
                And thus we point all people to the <b>Cross</b>, eager and
                willing to share The Truth to all those that calls that is lost.
                through;
              </p>
              <ol>
                <li>
                  <p>
                    Direct means such as preaching The Gospel in the streets, or
                    on pulpits or meetings{' '}
                    <a href={getBibleVerLink('mat.12.50')} target="_blank">
                      Mat 12:50
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    Indirectly through the way we live our live{' '}
                    <a href={getBibleVerLink('rom.10.14-15')} target="_blank">
                      Romans 10:14-15
                    </a>
                    , and also supporting missionaries world wide.
                  </p>
                </li>
              </ol>
            </article>
          </div>
        </div>
      </ContentSection>

      <ContentSection preset="black">
        <div className="flex flex-col justify-center items-center px-3 md:px-8 lg:px-8">
          <Heading
            as="h1"
            className={classnames(
              "md:leading-3 text-gray-50 font-['Inter'] text-4xl md:text-7xl lg:text-7xl",
              'font-black max-w-7xl whitespace-break-spaces text-center tracking-widest main-header-text'
            )}
          >
            WHAT IS OUR AIM
          </Heading>
          <div className="flex items-center">
            <h4 className="prose text-center max-w-3xl text-gray-100">
              We aim to see the Gospel preached to all people. We aim to Defend
              the Faith. Taking people back to the Cross. We aim to see the
              message preached on the Alter to be the true Gospel given to us by
              God, through studying the scriptures and also looking back to the
              first century Christians whenever there&apos;s misinterpretation
              in text. By doing so
            </h4>
          </div>
        </div>
      </ContentSection>

      <ContentSection preset="primary">
        <div className="grid md:grid-cols-4 grid-cols-1 gap-0 justify-center items-center px-3 md:px-8 lg:px-8">
          <div className="md:col-span-3 order-last md:order-first flex items-center justify-end">
            <article className="prose text-black max-w-3xl">
              <p>
                We believe in the Trinity meaning that there is{' '}
                <strong>one God</strong> who eternally exists as three distinct
                Persons — the <strong>Father</strong>, <strong>Son</strong>, and{' '}
                <strong>Holy Spirit</strong>. We believe in the Sovereignty of
                God over all things including the salvation of men.
              </p>

              <p>
                We believe we are saved by Grace, through Faith in Christ alone.
                We believe that Christ died on the Cross as an atonement for the
                Sins of His people (<strong>Definite Atonement</strong>).{' '}
                <strong>Definite Atonement</strong> in the sense of a
                Calvinistic theology as some may categorize it. We believe if we
                are not given Grace so sin may abide and thus if we should we
                live a holy life mirroring the Love of God displayed on the
                Cross.
              </p>

              <p>
                We believe the Bible be the written word of God. We believe it
                is inerrant and infallible. We believe the canon of scriptures
                is complete and sealed, and thus there&apos;s no new revelation
                or higher revelation of the word of God.
              </p>

              <p>
                When it comes to the preaching of the word of God and theology,
                we hold to the <strong className="text-black">5 Solas</strong>.
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

              <p>
                We accommodate all 3 eschatological view point such as{' '}
                <strong>Premillennialism</strong>,{' '}
                <strong>Postmillennialism</strong> and
                <strong>Amillennialism</strong> as it is not a salvation issue.,
                though as an organisation we believe{' '}
                <strong>Premillennialism</strong> to be correct theology on
                Eschatology.
              </p>

              <Blockquote cite="– RC Sproul" className="text-black">
                A god who is all love, all grace, all mercy, no sovereignty, no
                justice, no holiness, and no wrath is an idol
              </Blockquote>
            </article>
          </div>
          <div className="md:col-span-1 flex justify-center items-center h-full pb-10 md:pb-0">
            <Heading
              className={classnames(
                "font-['Inter'] text-4xl md:text-7xl lg:text-7xl",
                'font-black max-w-7xl md:whitespace-break-spaces text-center md:text-right tracking-widest main-header-text'
              )}
            >
              WHAT WE BELIEVE AND DON&apos;T
            </Heading>
          </div>
        </div>
      </ContentSection>
    </>
  )
}
