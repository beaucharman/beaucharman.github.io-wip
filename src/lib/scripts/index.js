fetchJSONFile(path, callback) {
  const httpRequest = new XMLHttpRequest()
  httpRequest.onreadystatechange = () => {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        const data = JSON.parse(httpRequest.responseText)
        if (callback) {
          callback(data)
        }
      }
    }
  };
  httpRequest.open('GET', path)
  httpRequest.send()
}

module.exports = {
  fetchJSONFile,
}
