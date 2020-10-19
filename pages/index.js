import Head from 'next/head'
import Layout from '../components/layout'
import '../styles/utils.scss'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import request from 'umi-request';

export default function Home({ allPostsData }) {
  
 
  return (
    <Layout home>
      {/* <Head>
        <title>{siteTitle}</title>
      </Head> */}
      <section className="headingMd">
        <p>[Your Self Introduction] 第二对对222对次dfgeafsddddg测试</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className="headingMd padding1px">
        <h2 className="headingLg">Blog</h2>
        <ul className="list">
          {allPostsData.map(({ id, date, title }) => (
            <li className="listItem" key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className="lightText">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    }
  }
}
