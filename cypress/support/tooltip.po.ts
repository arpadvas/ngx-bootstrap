import { BaseComponent } from './base.component';

export class TooltipPo extends BaseComponent {
  pageUrl = '/tooltip';
  pageTitle = 'Tooltip';
  ghLinkToComponent = 'https://github.com/valor-software/ngx-bootstrap/tree/development/src/tooltip';

  exampleTitlesArr = [
    'Basic',
    'Four directions',
    'Dismiss on next click',
    'Dynamic Content',
    'Dynamic Html',
    'Append to body',
    'Configuring defaults',
    'Custom triggers',
    'Manual triggering',
    'Component level styling',
    'Custom class',
    'Tooltip with delay'
  ];

  exampleDemosArr = [
    'demo-tooltip-basic',
    'demo-tooltip-four-directions',
    'demo-tooltip-dismiss',
    'demo-tooltip-dynamic',
    'demo-tooltip-dynamic-html',
    'demo-tooltip-container',
    'demo-tooltip-config',
    'demo-tooltip-triggers-custom',
    'demo-tooltip-triggers-manual',
    'demo-tooltip-styling-local',
    'demo-tooltip-class',
    'demo-tooltip-delay'
  ];
}