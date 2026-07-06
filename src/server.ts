import handler, { createServerEntry } from '@tanstack/react-start/server-entry'

export default createServerEntry({
  fetch(request) {
    // TanStack Start automatically parses the request URL, 
    // routes it to either a UI page or a server handler (like your GraphQL route), 
    // and returns the proper Response object.
    return handler.fetch(request)
  },
})