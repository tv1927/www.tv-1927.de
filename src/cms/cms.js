import CMS from 'netlify-cms-app';
import { de } from 'netlify-cms-locales';

import AreaPagePreview from './preview-templates/AreaPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import InfoPagePreview from './preview-templates/InfoPagePreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';

CMS.registerLocale('de', de);
CMS.registerPreviewTemplate('area', AreaPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('info', InfoPagePreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);