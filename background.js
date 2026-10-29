const JOBS_URL = "https://www.linkedin.com/jobs/";
const FEED_PATH = /^\/feed\/?$/;

// LinkedIn is a single-page app: in-site navigation uses the History API and
// never hits the network, so declarativeNetRequest alone can't catch it.
function redirectIfFeed({ tabId, frameId, url }) {
  if (frameId !== 0) return;
  const { pathname } = new URL(url);
  if (FEED_PATH.test(pathname)) {
    chrome.tabs.update(tabId, { url: JOBS_URL });
  }
}

const filter = { url: [{ hostEquals: "www.linkedin.com", pathPrefix: "/feed" }] };

chrome.webNavigation.onBeforeNavigate.addListener(redirectIfFeed, filter);
chrome.webNavigation.onHistoryStateUpdated.addListener(redirectIfFeed, filter);
chrome.webNavigation.onReferenceFragmentUpdated.addListener(redirectIfFeed, filter);
