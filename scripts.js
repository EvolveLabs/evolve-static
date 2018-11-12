function handleOutboundLinkClicks(event, category) {
  ga('send', 'event', {
    eventCategory: category,
    eventAction: 'click',
    eventLabel: event.target.href
  });
}
