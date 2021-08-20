let dataLayerArgs = {};

//  domain: 'contadores' / 'gestionix',
//   pageView: '2',
//   userId: '',
//   userEmail: '',
//   userName: '',
//   event: '' // para mixpanel el valor es  send-events

export function setDataLayer({
  userId,
  domain,
  pageView = "2",
  userEmail,
  userName,
  ...rest
}) {
  dataLayerArgs = { userId, domain, pageView, userEmail, userName, ...rest };
}

export function pushMixpanelEvents(events) {
  console.log(events);
  return dataLayer.push({
    ...dataLayerArgs,
    sendEvents: events,
    event: "send_events"
  });
}
