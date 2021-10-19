import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Welcome"
      description="Description will go into a meta tag in <head />">
      <main>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          COMING SOON
        </p>
      </div>
      </main>
    </Layout>
  );
}
