const h1 = React.createElement('h1' , {} , 'Topics covered')
const p1 = React.createElement( 'p' , {} , 'the following is a list of all the topic we cover in the MDN learning area')
const p2 = React.createElement( 'a' ,{href: "https://github.com/pdd2498" ,  style: {margin:"10px"}}, 'Getting started with the wed')
const a1 = React.createElement( 'a' ,{href: "https://github.com/pdd2498" ,  style: {margin:"10px"}}, 'HTML - Structuring the web')
const pa1 = React.createElement('p',{},'HTML is the language that we use to structure the different parts of out content and define what their meaning or purpose is. this topic teches HTML in detail.')
const a2 = React.createElement('a' ,{href: "https://www.linkedin.com/in/preyesh-dhar-diwan-8324b3194/"}, 'HTML - Style the web')
const pa2 = React.createElement('p',{},'Css is the language that we use to control our web contents style and layout as well adding behavior like animation This topic provides comprehensive coverage of CSS')
const p3 = React.createElement('p' , {} , 'Provides a practical introduction to wed development for complete beginners')
const p4 = React.createElement('p' , {} , 'Thanks For Visit')


const divp = React.createElement('div' , {} , [p2,p3])
const div1 = React.createElement( 'div', {} , [h1,p1])
const div2 = React.createElement('div' , {} ,[a1,pa1])
const div3 = React.createElement('div' , {} , [a2 , pa2 , p4])
const div4 = React.createElement('div' , {} , [div1,divp,div2,div3])


ReactDOM.render( div4 , document.querySelector("#root"))