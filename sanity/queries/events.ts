export const EVENTS_QUERY = `*[
  _type == "event"
] {
  _id,
  title, 
  description, 
  starts,
  ends, 
  venue
}`;