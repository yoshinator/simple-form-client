headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};
let uri = ""

if (process.ENV !== "production" ) {
  uri = "http://localhost:3010/"
}

export function createForm(body, collection) {
  return fetch(`${uri}${collection}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(body)// { key: 'value', key: { key: 'value', key: 'value'} }
  })
}