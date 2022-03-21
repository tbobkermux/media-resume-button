export function exlixirDB(obj)
{
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:4000/api/videos/create", true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({"video": obj}));
}
