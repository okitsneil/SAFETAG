(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{Bxyr:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),o=a("KQm4"),c=a("dI71"),i=a("WlC/"),s={margin:"2em 0"},l={listStyleType:"none"},d={margin:"0.5em 0"},u={color:"#aaa",marginRight:"1em"},p=function(e){function t(){for(var t,a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(t=e.call.apply(e,[this].concat(r))||this).state={query:t.props.initialQuery?t.props.initialQuery:"",results:[]},t.search=function(e){var a=e.target.value;if(t.state.query.length>2){var r=t.getSearchResults(a);t.setState({results:r,query:a})}else t.setState({results:[],query:a})},t}Object(c.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.props.initialQuery){console.log("Initial: "+this.props.initialQuery);var e=this.getSearchResults(this.props.initialQuery);this.setState({results:e})}this.searchInput.focus()},a.render=function(){var e=this,t=function(){var t=[],a="",r=Object(i.useTranslation)("site",{useSuspense:!1}).t,o=n.a.useContext(i.I18nextContext);return e.state.results.length>0?e.state.results.map((function(e,a){["activity","method","blog post","tool"].includes(e.type)&&e.lang==o.language&&t.push({key:a,slug:e.url,title:e.title,type:e.type})})):a=e.state.query.length>2?r("No results for ")+e.state.query+".":0===e.state.results.length&&e.state.query.length>0?r("Please insert at least 3 characters."):"",t.length>0?n.a.createElement("div",{className:"m-search__results"},n.a.createElement("ul",{style:l},t.map((function(e){return n.a.createElement("li",{style:d,className:"m-search__result",key:e.key},n.a.createElement("span",{style:u},e.type.replace(/^\w/,(function(e){return e.toUpperCase()}))),n.a.createElement(i.Link,{to:e.slug,className:"link"},e.title))})))):a?n.a.createElement("div",{className:"m-search__results"},n.a.createElement("div",{className:"m-search__result"},a)):""};return n.a.createElement("div",{ref:this.node,className:"row m-search "+this.props.classNames+"__search"},n.a.createElement("div",{className:"m-search__wrapper col-sm-12 col-md-8 col-lg-"+this.props.cols},n.a.createElement("div",{className:"m-search__input"},n.a.createElement("input",{type:"text",style:s,onChange:this.search,placeholder:"Search",value:this.state.query,ref:function(t){return e.searchInput=t}}),n.a.createElement("i",{className:"fas fa-search"})),n.a.createElement(t,null)))},a.getSearchResults=function(e){e&&!this.state.searchQuery&&(console.log("Resetting searchQuery..."),this.setState({searchQuery:e}),console.log(this.state),console.log("State query value: "+this.state.searchQuery));var t=window.__FLEXSEARCH__.en.index,a=window.__FLEXSEARCH__.en.store;if(e&&t){console.log("Searching for "+e);var r=[];return Object.keys(t).forEach((function(a){var n;(n=r).push.apply(n,Object(o.a)(t[a].values.search(e)))})),r=Array.from(new Set(r)),a.filter((function(e){return r.includes(e.id)?e:null})).map((function(e){return e.node}))}return console.log("Not searching"),[]},t}(r.Component),b=a("8MiI"),m=a("vrFN"),g=a("xtXq"),f=a("A8Yw");t.default=function(e){var t=e.location,a="";return t.state&&t.state.searchQuery&&(a=t.state.searchQuery),n.a.createElement(b.a,null,n.a.createElement(m.a,{title:"Safetag"}),n.a.createElement(g.a,null,n.a.createElement(g.b,null,n.a.createElement(g.c,null,n.a.createElement(f.b,{id:"recent-updates",size:"jumbo",variation:"primary",withDeco:!0},"Search SAFETAG"),n.a.createElement(p,{initialQuery:a})))))}},foDo:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return g})),a.d(t,"c",(function(){return f}));var r,n,o=a("MUpH"),c=a("vOnD"),i=a("8c3r"),s=a("qSSW"),l=a("q6fE"),d=a("UDb3"),u=a("A8Yw"),p=function(e){var t=e.border;return"base"===t?Object(i.b)("color.base"):"primary"===t?Object(i.b)("color.primary"):"secondary"===t?Object(i.b)("color.secondary"):"white"===t?Object(i.b)("color.surface"):"inherit"},b=c.d.article.withConfig({displayName:"card__Card",componentId:"sc-1neqwum-0"})(["padding:"," ",";display:flex;flex-flow:column;color:",";background:",";position:relative;"," & >:last-child:not(:first-child){padding-top:",";}&:visited{color:",";}a,a:visited{color:",";}h1,h2,h3{margin:0;}",""],Object(l.b)(2),Object(l.b)(1.5),Object(i.b)("color.base"),(function(e){var t=e.variation;return"base"===t?Object(l.a)(.75,Object(i.b)("color.base")):"primary"===t?Object(l.a)(.5,Object(i.b)("color.primary")):"secondary"===t?Object(l.a)(.525,Object(i.b)("color.secondary")):"white"===t?Object(l.a)(Object(i.b)(.5,"color.surface")):"outline"===t?"transparent":"white"}),(function(e){return e.border&&Object(c.c)(["border:2px solid ",";"],p)}),Object(l.b)(2),Object(i.b)("color.base"),Object(i.b)("color.link"),(function(e){return e.withHover&&Object(c.c)(['&:after{position:absolute;content:"";opacity:0;width:100%;height:100%;left:0;top:0;z-index:-1;border:2px solid ',";background:none;transition:all 0.16s cubic-bezier(0.55,0.085,0.68,0.53);}&:hover{&:after{opacity:1;transform:translate(10px,10px);transition-delay:0.08s;}}"],p)}));t.d=b;var m=c.d.div.withConfig({displayName:"card__CardHeader",componentId:"sc-1neqwum-1"})(["display:flex;align-items:flex-start;img{max-height:2rem;margin-right:1rem;}h1{flex:1;}"]),g=Object(c.d)(u.b).withConfig({displayName:"card__CardHeading",componentId:"sc-1neqwum-2"})(["margin-bottom:",";position:relative;letter-spacing:0.5px;img{max-height:1.5rem;margin-right:0.75rem;}"],Object(l.b)()),f=(c.d.div.withConfig({displayName:"card__CardFooter",componentId:"sc-1neqwum-3"})(["margin-top:auto;"]),c.d.ul.withConfig({displayName:"card__CardList",componentId:"sc-1neqwum-4"})(["",";display:grid;grid-template-columns:repeat(6,1fr);grid-gap:",";","{height:100%;}li{grid-column:auto / span 6;"," ","}"],Object(d.c)(),Object(l.b)(2),b,s.a.smallUp(r||(r=Object(o.a)(["\n      grid-column: auto / span 3;\n    "]))),s.a.largeUp(n||(n=Object(o.a)(["\n      grid-column: auto / span 2;\n    "])))))},xtXq:function(e,t,a){"use strict";a.d(t,"a",(function(){return f})),a.d(t,"g",(function(){return h})),a.d(t,"d",(function(){return y})),a.d(t,"e",(function(){return j})),a.d(t,"f",(function(){return O})),a.d(t,"h",(function(){return w})),a.d(t,"b",(function(){return _})),a.d(t,"c",(function(){return v}));var r,n,o=a("MUpH"),c=a("q1tI"),i=a.n(c),s=a("vOnD"),l=a("UDb3"),d=a("8c3r"),u=a("q6fE"),p=a("A8Yw"),b=a("6KyZ"),m=a("foDo"),g=a("qSSW"),f=s.d.article.withConfig({displayName:"inpage__Inpage",componentId:"sc-1dtk98a-0"})(["display:grid;height:100%;grid-template-rows:auto 1fr;"]),h=Object(s.d)(b.a).withConfig({displayName:"inpage__InpageInnerColumns",componentId:"sc-1dtk98a-1"})(["display:grid;grid-template-columns:1fr;padding-top:",";padding-bottom:",";"," & > section > ","{margin-top:1rem;display:block;}& > *{margin-bottom:2rem;","}"],Object(u.b)(1),Object(u.b)(2),g.a.mediumUp(r||(r=Object(o.a)(["\n    grid-template-columns: ",";\n    gap: ",";\n    padding-top: ",";\n  "])),(function(e){var t=e.columnLayout;return"1:1"===t?"1fr 1fr":"2:1"===t?"2fr 1fr":"3:1"===t?"3fr 1fr":"inherit"}),Object(u.b)(4),Object(u.b)(2)),m.d,g.a.mediumUp(n||(n=Object(o.a)(["\n      margin-bottom: 0;\n    "])))),y=s.d.header.withConfig({displayName:"inpage__InpageHeader",componentId:"sc-1dtk98a-2"})([""," padding-bottom:",";"],(function(e){return e.isHidden&&Object(s.c)(["",""],Object(l.e)())}),Object(u.b)(2)),j=Object(s.d)(b.a).withConfig({displayName:"inpage__InpageHeaderInner",componentId:"sc-1dtk98a-3"})(["display:flex;flex-flow:column nowrap;justify-content:space-between;padding:"," ",";"],Object(u.b)(4),Object(u.b)()),O=s.d.div.withConfig({displayName:"inpage__InpageHeadline",componentId:"sc-1dtk98a-4"})(["display:flex;flex-flow:column;min-width:0;> *:first-child{margin-bottom:",";}> *:last-child{margin-bottom:",";}"],Object(u.b)(),Object(u.b)()),w=(s.d.div.withConfig({displayName:"inpage__InpageToolbar",componentId:"sc-1dtk98a-5"})(["display:flex;flex-flow:row nowrap;align-items:center;padding-left:",";margin-left:auto;"],Object(u.b)(2)),s.d.div.withConfig({displayName:"inpage__InpageTitleWrapper",componentId:"sc-1dtk98a-6"})(["display:flex;flex-flow:row nowrap;min-width:0;margin-bottom:",";"],Object(u.b)(1.5)),Object(s.d)((function(e){var t=Object.assign({},e);return i.a.createElement(p.b,t)})).withConfig({displayName:"inpage__InpageTitle",componentId:"sc-1dtk98a-7"})(["margin-bottom:",";line-height:3rem;"],Object(u.b)(.5))),_=(s.d.p.withConfig({displayName:"inpage__InpageTagline",componentId:"sc-1dtk98a-8"})([""," font-size:0.875rem;line-height:1rem;"],Object(p.c)()),s.d.section.withConfig({displayName:"inpage__InpageBody",componentId:"sc-1dtk98a-9"})(["",";& ~ &{padding-top:",";padding-bottom:",";}p > img{display:block;margin:1rem auto;max-width:100%;}"],(function(e){var t=e.variation;return"dark"===t?Object(s.c)(["background-color:",";& *{color:",";border-color:",";&:after{background-color:",";}a{color:",";text-decoration:underline;}}"],Object(d.b)("color.base"),Object(d.b)("color.surface"),Object(d.b)("color.surface"),Object(d.b)("color.surface"),Object(d.b)("color.surface")):"blue"===t?Object(s.c)(["background-color:",";& *{color:",";border-color:",";&:after{background-color:",";}a{color:",";text-decoration:underline;}a:visited{color:",";}}"],Object(d.b)("color.primary"),Object(d.b)("color.surface"),Object(d.b)("color.surface"),Object(d.b)("color.surface"),Object(d.b)("color.surface"),Object(d.b)("color.surface")):Object(s.c)(["background-color:transparent;"])}),Object(u.b)(2),Object(u.b)(2))),v=Object(s.d)(b.a).withConfig({displayName:"inpage__InpageBodyInner",componentId:"sc-1dtk98a-10"})(["padding:"," ",";& ~ &{padding:",";}"],Object(u.b)(2),Object(u.b)(),Object(u.b)())}}]);
//# sourceMappingURL=component---src-pages-search-js-9726c8afc5d4dc89ebf3.js.map