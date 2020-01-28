/**
 * Template strings:
 * Its solves the string concatanation with dynamic values.
 * it start with backtic with interpolate ${} syntact for js dynamic data.
 * 
 *  */

 /**
  * Tagged Template
  */

  const user={
      name:"pradeep",
      age:22
  }

  const tags={
      HTML:'Hyper text markup language',
      CSS:'Cascading Style Sheet',
      JS:'Javascript'
  }
  
  const sentance = convert`Hello World, My name is ${user.name} and age is ${user.age}, ${"HTML"}, ${"CSS"} and ${"JS"} ${[1,2,3,4,5]}`
  function convert(strings,...values){
      const a = values.map(item=>{
          if (tags[item]){
              return `<mark><abbr title="${tags[item]}">${item}</abbr></mark> `
          }
          return item;
      })
      return strings.reduce((acc, next, index) => `${acc}${a[index - 1] || ""}${next}`,'')
  }


function taggedTemplate(tag){
    const tagss = document.createElement(tag);
    return (style) => {
        tagss.style=style
        return tagss
    }
}
const updatediv = taggedTemplate('div')`
   background-color:red;
   color:blue;
   
`

updatediv.innerHTML=`<h1>Hello</h1>`;
document.createElement("div").innerHTML=sentance
document.body.append(updatediv)
