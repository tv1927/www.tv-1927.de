import React from 'react'
import PropTypes from 'prop-types'
import { AreaPageTemplate } from '../../templates/area-page'

const AreaPagePreview = ({ entry, widgetFor }) => (
  <AreaPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

AreaPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AreaPagePreview
