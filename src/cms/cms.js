import CMS from 'netlify-cms-app'
import { de } from 'netlify-cms-locales';

import AreaPagePreview from './preview-templates/AreaPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerLocale('de', de);
CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('area', AreaPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
