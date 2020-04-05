import React from 'react'
import PropTypes from 'prop-types'
import { VorstandPageTemplate } from '../../templates/vorstand-page'

const VorstandPagePreview = ({ entry, widgetFor }) => (
  <VorstandPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

VorstandPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default VorstandPagePreview
