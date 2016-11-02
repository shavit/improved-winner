// require("babel-core").transform("code", options)

// var Xray = require('x-ray');
// var x = Xray();
//
// x('https://dribbble.com', 'li.group', [{
//   title: '.dribbble-img strong',
//   image: '.dribbble-img [data-src]@data-src',
// }])
//   .paginate('.next_page@href')
//   .limit(3)
//   .write('results.json')

let X = require('x-ray')()

export default class Subtitles {

  constructor(){
    this.defaults = {
      baseURL: "https://subscene.com",
      searchURL: "https://subscene.com/subtitles/title?q="
    }
  }

  Search(term){
    console.log("---> Searching "+this.defaults.searchURL+term)
    var subtitlesResults

    X(this.defaults.searchURL+term, ".byTitle ul", [
      {
        title: "div.title a",
        description: "div.count",
        link: "div.title a@attr"
      }
    ])((err, results) => {
      console.log("---> Found "+results.length+" results")
      subtitlesResults = results
      console.log(results)
    })

    return subtitlesResults
  }
}

// let subtitles = new Subtitles()
// let res = subtitles.Search("funny")
