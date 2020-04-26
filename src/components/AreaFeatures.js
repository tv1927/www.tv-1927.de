import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class AreaPreview extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="column is-6" key={post.id}>
              <section className="section">
                <Link to={post.fields.slug}>
                  <div className="has-text-centered">
                    <div
                      style={{
                        width: '240px',
                        display: 'inline-block',
                      }}
                    >
                      <h4>{post.frontmatter.title}</h4>
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `Bild von Sparte ${post.frontmatter.title}`,
                        }}
                      />
                    </div>
                    <p>{post.frontmatter.description}</p>
                  </div>
                </Link>
              </section>
            </div>
          ))}
      </div>
    )
  }
}

AreaPreview.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query AreaPreviewQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "area-page" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                description
                templateKey
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <AreaPreview data={data} count={count} />}
  />
)
