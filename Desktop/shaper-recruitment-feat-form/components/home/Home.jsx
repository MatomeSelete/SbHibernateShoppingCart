import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import style from '../../styles/Home.module.css';

const HomePage = () => {
    return (
        <>
            <Head>
                <title>Shaper</title>
            </Head>

            <div className={`${style.content} container mt-5`}>
                <div className="row">
                    <section className="col-md-8">
                        <div className="about__shaper">
                            <header>
                                <h1 className="fw-bolder fs-3">
                                    What is Shaper all about?
                                </h1>
                            </header>
                            <div className="summary mt-4">
                                <p className="small">
                                    Shaper, formally{' '}
                                    <span className="fw-bold">
                                        The Digital Academy
                                    </span>
                                    , focuses on creating innovative digital
                                    products in Africa.
                                </p>
                                <p className="small">
                                    Launched in response to a frustrating lack
                                    of digital skills on the continent, their
                                    vision is to create opportunities for youth
                                    through incentive-based learning with
                                    strategic corporate partners who share a
                                    common vision.
                                </p>
                                <p className="small">
                                    Interns learn practical, hands-on skills
                                    that are needed in the real world whilst
                                    building commercial facing products via a
                                    rapid internship programme.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="col-md-4">
                        <Image
                            src="/images/shaper__lady.png"
                            priority={true}
                            width={300}
                            height={400}
                            alt="Shaper ambassador lady"
                        />
                    </section>
                </div>
                <div className="row mt-5">
                    <div className="cta col-sm-12">
                        <p className="text-center fw-bolder fst-italic">
                            <span className={style.quote}>&ldquo;</span> Join us
                            in helping bring the world&apos;s creative ideas to
                            life
                            <span className={style.quote}>&ldquo;</span>
                        </p>
                    </div>
                    <div className="join text-center col-sm-12 mt-4 mb-5">
                        <button className={style.btn__join}>
                            <Link className={style.button__link} href="/apply">
                                join shaper
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
