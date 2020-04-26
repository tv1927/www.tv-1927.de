import React from 'react'

import Layout from '../../components/Layout'
import AreaRoll from '../../components/AreaRoll'

export default class AreaIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.png')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #13421e, -0.5rem 0 0 #13421e',
              backgroundColor: '#13421e',
              color: 'white',
              padding: '1rem',
            }}
          >
           Die Sparten in unserem Verein
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <AreaRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
