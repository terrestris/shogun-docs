import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/overview/">
            Documentation
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} Documentation`}
      description="This manual is designed to give a comprehensive overview of the functionalities of the SHOGun-Web-GIS application">
      <HomepageHeader />
      <main>
        <div
          className={styles.grid}
        >
          <p></p>
          <div />
            <p>
              Welcome to the <b>SHOGun</b>-Manual.<br/>
              This manual is designed to give a comprehensive overview of the functionalities
              of the <b>SHOGun</b>-Web-GIS application based on the Userstories.
            </p>
            <h2>Authors:</h2>
            <ul class="authors-list">
              <li>
                Fritz Höing (<a href="mailto:hoeing@terrestris.de?subject=SHOGun-Manual">hoeing@terrestris.de</a>)
              </li>
              <li>
                Arnulf B. Christl (<a href="mailto:christl@terrestris.de?subject=SHOGun-Manual">christl@terrestris.de</a>)
              </li>
              <li>
                Hannes Blitza (<a href="mailto:blitza@terrestris.de?subject=SHOGun-Manual">blitza@terrestris.de</a>)
              </li>
            </ul>
          <div />
        </div>
      </main>
    </Layout>
  );
}
