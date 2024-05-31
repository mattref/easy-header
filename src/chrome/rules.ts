import { assert, Equals } from 'tsafe';

const allResourceTypes = [
  'main_frame',
  'sub_frame',
  'stylesheet',
  'script',
  'image',
  'font',
  'object',
  'xmlhttprequest',
  'ping',
  'csp_report',
  'media',
  'websocket',
  'webtransport',
  'webbundle',
  'other',
] as const satisfies string[];

/* --- Basic check to ensure consistent typing between `allResourceTypes` array and `chrome.declarativeNetRequest.ResourceType` string union --- */
type _allResourceTypes = (typeof allResourceTypes)[number];
assert<Equals<_allResourceTypes, chrome.declarativeNetRequest.ResourceType>>;
/* --- */

export const rules: chrome.declarativeNetRequest.Rule[] = [
  {
    id: 1,
    priority: 1,
    action: {
      type: 'modifyHeaders',
      requestHeaders: [
        {
          operation: 'set',
          header: 'x-test-request-header',
          value: 'test-value-1',
        },
      ],
    },
    condition: {
      // https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest#filter-matching-charactgers
      // https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest#property-RuleCondition-urlFilter
      urlFilter: 'localhost*|',
      resourceTypes: allResourceTypes,
    },
  },
];
