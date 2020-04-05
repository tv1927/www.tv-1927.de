import React from 'react'
import PropTypes from 'prop-types'
import { VereinPageTemplate } from '../../templates/verein-page'

const VereinPagePreview = ({ entry, widgetFor }) => (
  <VereinPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

VereinPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default VereinPagePreview
