export const TEAM_QUERY = `*[
  _type == "team"
] {
  _id,
  fullName, 
  role, 
  image
}`;