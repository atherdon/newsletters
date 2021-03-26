import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
    {
        title: 'Easy to Use',
        imageUrl: 'img/undraw_docusaurus_mountain.svg',
        description: (
            <>
                Docusaurus was designed from the ground up to be easily installed and
                used to get your website up and running quickly.
            </>
        ),
    },
    {
        title: 'The Greenest Place for Hackers to Hang Out & Get Published',
        imageUrl: 'img/undraw_docusaurus_tree.svg',
        description: (
            <>
                Hacker Noon is where hackers start their afternoons. We’re talking diehards; lurkers; script kiddies; hats all the way through white, grey, green, blue, red and black; plus a few plain old Tim Ferriss fanboy #LifeHackers - the full spectrum, you’ll find ’em here. Hacker Noon is a close-knit community for cat people and single dads who code. A safe place for power women in tech and misunderstood millennials. For gross teenagers and curious retirees. For hodlrs, venture capitalists and anarchists. For entrepreneurs and engineers. For philosophers, product managers, and futurists. 

​

In short, Hacker Noon has space for everybody.

There is only one rule of engagement: We treat our internet friends with respect. 
            </>
        ),
    },
    {
        title: "Who's Behind Hacker Noon?",
        imageUrl: 'img/undraw_docusaurus_react.svg',
        description: (
            <>
                Hacker Noon is a small, distributed team of 14-ish people* passionate about making the internet a better place by publishing free high quality tech stories - without paywalls, pop-up ads, or a sense of entitlement.

​

*Hacker Noon is also a huge, global team of over 15,000+ writers, founders, makers, thinkers and technologists, plus over 3,000,000+ monthly readers, but unfortunately we didn’t have space to feature them all here.
            </>
        ),
    },
];

function Feature({ imageUrl, title, description }) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div className={clsx('col col--4', styles.feature)}>
            {imgUrl && (
                <div className="text--center">
                    <img className={styles.featureImage} src={imgUrl} alt={title} />
                </div>
            )}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default function Home() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <header className={clsx('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            className={clsx(
                                'button button--outline button--secondary button--lg',
                                styles.getStarted,
                            )}
                            to={useBaseUrl('docs/index')}>
                            Get Started
                        </Link>
                    </div>
                </div>
            </header>
            <main>
                {features && features.length > 0 && (
                    <section className={styles.features}>
                        <div className="container">
                            <div className="row">
                                {features.map((props, idx) => (
                                    <Feature key={idx} {...props} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </Layout>
    );
}
