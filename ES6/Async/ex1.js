/**
 * 
 */

function fakeAjax(url, cb) {
  const responsesData = {
    file1: 'file 1 print',
    file2: 'file 2 print',
    file3: 'file 3 print',
  }

  const output = responsesData[url];
  cb(output);
}

function getFile(file) {
  fakeAjax(file, function (text) {
    handleResponse(file, text);
  })
}


function handleResponse(filename, content) {
  if (!(filename in responses)) {
    responses[filename] = content;
  }

  const filenames = ["file1", "file2", "file3"];
  for (let i = 0; i < filenames.length; i++) {
    if (filenames[i] in responses) {
      if (typeof responses[filenames[i]] == "string") {
        output(responses[filenames[i]]);
        responses[filenames[i]] = false;
      }
    } else {
      console.log('return')
      return;
    }

  }


}

var responses = {}

function output(input) {
  console.log(input)
}

console.log(responses)
getFile("file1")
getFile("file2")
getFile("file3")