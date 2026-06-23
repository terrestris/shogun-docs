import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import Translate, {translate} from '@docusaurus/Translate';

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
            to="docs/gis-client">
            <Translate>Manual</Translate>
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
              <Translate>Welcome to the SHOGun-Manual.
              This manual is designed to give a comprehensive overview of the functionalities
              of the SHOGun-Web-GIS application.</Translate>
            </p>
            <h2><Translate>Authors</Translate>:</h2>
            <ul class="authors-list">
              <li>
                Fritz Höing (<a href="mailto:hoeing@terrestris.de?subject=SHOGun-Manual">hoeing@terrestris.de</a>)
              </li>
              <li>
                Verena Diewald (<a href="mailto:diewald@terrestris.de?subject=SHOGun-Manual">diewald@terrestris.de</a>)
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
