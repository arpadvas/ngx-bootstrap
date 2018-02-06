import { BaseComponent } from './base.component';

export class PaginationPo extends BaseComponent {
  pageUrl = '/pagination';
  pageTitle = 'Pagination';
  ghLinkToComponent = 'https://github.com/valor-software/ngx-bootstrap/tree/development/src/pagination';
  exampleTitlesArr = [
    'Default',
    'States & Limits',
    'Pager'
  ];
  exampleDemosArr = [
    'demo-pagination-basic',
    'demo-pagination-limit',
    'demo-pagination-pager',
  ];
}