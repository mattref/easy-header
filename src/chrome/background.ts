import { rules } from './rules';

// https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest
chrome.declarativeNetRequest.updateDynamicRules({
  removeRuleIds: rules.map((rule) => rule.id), // remove existing rules
  addRules: rules,
});
