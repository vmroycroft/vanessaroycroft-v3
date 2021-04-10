(function(t){function e(e){for(var a,o,r=e[0],c=e[1],l=e[2],f=0,p=[];f<r.length;f++)o=r[f],s[o]&&p.push(s[o][0]),s[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},s={app:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vanessaroycroft-v3/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"00d5":function(t,e,n){},"065e":function(t,e,n){t.exports=n.p+"img/umw-seal.b4ba0e20.png"},3812:function(t,e,n){"use strict";var a=n("38e5"),s=n.n(a);s.a},"38e5":function(t,e,n){},"411c":function(t,e,n){},"4ce8":function(t,e,n){"use strict";var a=n("411c"),s=n.n(a);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("2d26"),n("96cf");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],attrs:{id:"app"}},[n("Header"),n("AboutMe"),n("Experience"),n("Education"),n("PlainSection"),n("Footer")],1)},i=[],o=new a["a"],r=o,c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("div",{staticClass:"top-bar resize-larger"},[n("div",{staticClass:"top-bar-content text-accent-font animated fadeOut hidden"},[n("h2",{staticClass:"top-bar-name"},[t._v("Vanessa Roycroft")]),n("div",{staticClass:"top-bar-links"},[n("span",{staticClass:"top-bar-link"},[n("a",{attrs:{href:"http://vanessaroycroft.com/Vanessa_Roycroft_Resume.pdf",target:"_blank",title:"Resume"}},[n("font-awesome-icon",{attrs:{icon:["far","file"]}}),n("span",{staticClass:"link-text"},[t._v("Resume")])],1)]),n("span",{staticClass:"top-bar-link"},[n("a",{attrs:{href:"mailto:vmroycroft@gmail.com",title:"Contact"}},[n("font-awesome-icon",{attrs:{icon:["far","envelope"]}}),n("span",{staticClass:"link-text"},[t._v("Contact")])],1)]),n("span",{staticClass:"top-bar-link"},[n("a",{attrs:{href:"https://github.com/vmroycroft/vanessaroycroft-v3",target:"_blank",title:"GitHub"}},[n("font-awesome-icon",{attrs:{icon:["fas","code-branch"]}}),n("span",{staticClass:"link-text"},[t._v("GitHub")])],1)])])])]),n("div",[n("h1",{staticClass:"text-accent-color text-accent-font animated main-name hidden"},[t._v("\n      Vanessa Roycroft\n    ")]),n("div",{staticClass:"description animated hidden"},[t._v("\n      I'm a full stack developer with a background in software engineering.\n      "),n("div",{staticClass:"interests"},[t._v("\n        I\n        "),n("font-awesome-icon",{staticClass:"heart-icon text-accent-color",attrs:{icon:"heart"}}),t._v("\n        snowboarding, running, & learning.\n      ")],1)])]),n("div",{staticClass:"angle-left"}),n("div",{staticClass:"angle-right"})])},l=[],u={name:"Header",data:function(){return{}},mounted:function(){var t=this;this.mainName=document.querySelector(".main-name"),setTimeout(function(){t.mainName.classList.replace("hidden","fadeInUp"),t.mainName.addEventListener("animationend",function(){document.querySelector(".description").classList.replace("hidden","fadeIn")})},1e3),this.topBar=document.querySelector(".top-bar"),this.topBarContent=document.querySelector(".top-bar-content");var e=document.querySelector(".description");this.target=e.offsetTop+e.clientHeight,r.$on("scroll",this.repositionName)},methods:{repositionName:function(){window.pageYOffset>this.target?(this.topBarContent.classList.remove("hidden"),this.topBarContent.classList.replace("fadeOut","fadeIn"),this.topBar.classList.replace("resize-larger","resize-smaller")):(this.topBarContent.classList.replace("fadeIn","fadeOut"),this.topBar.classList.replace("resize-smaller","resize-larger"))}}},f=u,p=(n("cbd0"),n("2877")),d=Object(p["a"])(f,c,l,!1,null,"660f14f4",null),m=d.exports,v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[n("h2",{staticClass:"text-accent-font"},[t._v("About Me")]),n("div",{staticClass:"summary"},[n("p",[t._v("\n        I'm a well-rounded, hard-working team player with 8 years of\n        experience throughout the software development life cycle. I'm\n        dedicated to efficiently solving problems and providing an exceptional\n        user experience through thoughtful web application design and\n        development.\n      ")]),n("p",[t._v("\n        I write uncluttered and understandable code, as well as the\n        requirements specifications, software design, and user documentation\n        to go along with it.\n      ")]),n("p",[t._v("\n        I have experience with a variety of frameworks, libraries, and tools\n        on both the frontend and backend. Some technologies I use day-to-day\n        are:\n      ")]),n("div",{staticClass:"grid-container"},[n("span",{staticClass:"item lg"},[t._v("JavaScript (ES6)")]),n("span",{staticClass:"item"},[t._v("HTML")]),n("span",{staticClass:"item"},[t._v("SCSS")]),n("span",{staticClass:"item md"},[t._v("Apache")]),n("span",{staticClass:"item md"},[t._v("jQuery")]),n("span",{staticClass:"item"},[t._v("SQL")]),n("span",{staticClass:"item"},[t._v("npm")]),n("span",{staticClass:"item md"},[t._v("Vue.js")]),n("span",{staticClass:"item lg"},[t._v("Subversion")]),n("span",{staticClass:"item"},[t._v("Git")]),n("span",{staticClass:"item md"},[t._v("GraphQL")]),n("span",{staticClass:"item"},[t._v("PHP")]),n("span",{staticClass:"item md"},[t._v("MongoDB")]),n("span",{staticClass:"item md"},[t._v("Node.js")]),n("span",{staticClass:"item lg"},[t._v("Amazon Web Services")])])])])])}],g={name:"AboutMe",props:{}},_=g,b=(n("ccc1"),Object(p["a"])(_,v,h,!1,null,"48391631",null)),C=b.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[n("h2",{staticClass:"text-accent-font"},[t._v("Experience")]),t._m(0),n("ul",{staticClass:"list fa-ul"},[n("li",[n("span",{staticClass:"fa-li"},[n("font-awesome-icon",{attrs:{icon:"chevron-right"}})],1),t._v("\n        Lead teams of engineers on the design and development of training web\n        applications used by the US Navy\n      ")]),n("li",[n("span",{staticClass:"fa-li"},[n("font-awesome-icon",{attrs:{icon:"chevron-right"}})],1),t._v("\n        Communicate with engineers, graphic artists, instructional systems\n        designers, and testers to plan, design, develop, test, and improve\n        applications\n      ")]),n("li",[n("span",{staticClass:"fa-li"},[n("font-awesome-icon",{attrs:{icon:"chevron-right"}})],1),t._v("\n        Build full stack applications by writing well-organized, maintainable\n        code in JavaScript and PHP using a variety of frameworks and runtimes\n        such as Vue.js and Node.js\n      ")]),n("li",[n("span",{staticClass:"fa-li"},[n("font-awesome-icon",{attrs:{icon:"chevron-right"}})],1),t._v("\n        Rapidly create application prototypes to confirm project feasibility\n        and transition the prototypes to fully developed applications\n      ")]),n("li",[n("span",{staticClass:"fa-li"},[n("font-awesome-icon",{attrs:{icon:"chevron-right"}})],1),t._v("\n        Meet with clients to determine software requirements, demonstrate\n        software, and discuss feedback on applications\n      ")]),n("li",[n("span",{staticClass:"fa-li"},[n("font-awesome-icon",{attrs:{icon:"chevron-right"}})],1),t._v("\n        Write and review technical documents including Software Requirements\n        Specifications, Software Design Documents, Training Requirements\n        Documents, Software Users Guides, Software Installation Instructions,\n        Project Proposals, and White Papers\n      ")]),n("li",[n("span",{staticClass:"fa-li"},[n("font-awesome-icon",{attrs:{icon:"chevron-right"}})],1),t._v("\n        Deploy and maintain web applications on remote Amazon Elastic Compute\n        Cloud instances\n      ")]),n("li",[n("span",{staticClass:"fa-li"},[n("font-awesome-icon",{attrs:{icon:"chevron-right"}})],1),t._v("\n        Facilitate and provide support for beta tests of training applications\n        with US Navy students\n      ")])]),t._m(1),n("ul",{staticClass:"list fa-ul"},[n("li",[n("span",{staticClass:"fa-li"},[n("font-awesome-icon",{attrs:{icon:"chevron-right"}})],1),t._v("\n        Designed and implemented an iPhone application which displayed\n        upcoming concerts in the user’s local area\n      ")]),n("li",[n("span",{staticClass:"fa-li"},[n("font-awesome-icon",{attrs:{icon:"chevron-right"}})],1),t._v("\n        Delivered a formal presentation of my work to fellow scholars and\n        professors\n      ")])])])])},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-flex"},[a("img",{staticClass:"logo",attrs:{src:n("ed53")}}),a("div",[a("b",[t._v("Senior Software Engineer")]),a("br"),a("b",[t._v("Tech Wizards")]),a("span",{staticClass:"date"},[t._v("2011 - Now")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-flex"},[a("img",{staticClass:"logo",attrs:{src:n("b534")}}),a("div",[a("b",[t._v("Application Development Scholar")]),a("br"),a("b",[t._v("University of Mary Washington")]),a("span",{staticClass:"date"},[t._v("2010")])])])}],S={name:"Experience"},x=S,E=(n("4ce8"),Object(p["a"])(x,w,y,!1,null,"54a4aa86",null)),O=E.exports,k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},L=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section"},[a("div",{staticClass:"container"},[a("h2",{staticClass:"text-accent-font"},[t._v("Education")]),a("div",{staticClass:"container-flex"},[a("img",{staticClass:"logo",attrs:{src:n("065e")}}),a("div",[a("b",[t._v("Computer Science, B.S.")]),a("br"),a("b",[t._v("University of Mary Washington")]),a("span",{staticClass:"date"},[t._v("2011")])])])])])}],j={name:"Education"},P=j,M=(n("e0c6"),Object(p["a"])(P,k,L,!1,null,"2d601e4c",null)),N=M.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section"})},D=[],R={name:"PlainSection"},A=R,I=(n("3812"),Object(p["a"])(A,T,D,!1,null,"04934c72",null)),$=I.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"reveal"}),n("div",[n("span",{staticClass:"icon-right"},[t._v("Designed & Built by Vanessa Roycroft")]),n("font-awesome-icon",{staticClass:"text-accent-color",attrs:{icon:"grin-beam"}})],1)])},H=[],q={name:"Footer"},z=q,G=(n("e053"),Object(p["a"])(z,B,H,!1,null,"16188ff0",null)),V=G.exports,U={name:"app",components:{Header:m,AboutMe:C,Experience:O,Education:N,PlainSection:$,Footer:V},methods:{onScroll:function(){r.$emit("scroll")}}},W=U,F=(n("5c0b"),Object(p["a"])(W,s,i,!1,null,null,null)),J=F.exports,Q=n("ecee"),Y=n("c074"),X=n("b702"),K=n("ad3d");
/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
"document"in self&&("classList"in document.createElement("_")&&(!document.createElementNS||"classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))||function(t){if("Element"in t){var e="classList",n="prototype",a=t.Element[n],s=Object,i=String[n].trim||function(){return this.replace(/^\s+|\s+$/g,"")},o=Array[n].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1},r=function(t,e){this.name=t,this.code=DOMException[t],this.message=e},c=function(t,e){if(""===e)throw new r("SYNTAX_ERR","The token must not be empty.");if(/\s/.test(e))throw new r("INVALID_CHARACTER_ERR","The token must not contain space characters.");return o.call(t,e)},l=function(t){for(var e=i.call(t.getAttribute("class")||""),n=e?e.split(/\s+/):[],a=0,s=n.length;s>a;a++)this.push(n[a]);this._updateClassName=function(){t.setAttribute("class",this.toString())}},u=l[n]=[],f=function(){return new l(this)};if(r[n]=Error[n],u.item=function(t){return this[t]||null},u.contains=function(t){return~c(this,t+"")},u.add=function(){var t,e=arguments,n=0,a=e.length,s=!1;do{t=e[n]+"",~c(this,t)||(this.push(t),s=!0)}while(++n<a);s&&this._updateClassName()},u.remove=function(){var t,e,n=arguments,a=0,s=n.length,i=!1;do{for(t=n[a]+"",e=c(this,t);~e;)this.splice(e,1),i=!0,e=c(this,t)}while(++a<s);i&&this._updateClassName()},u.toggle=function(t,e){var n=this.contains(t),a=n?!0!==e&&"remove":!1!==e&&"add";return a&&this[a](t),!0===e||!1===e?e:!n},u.replace=function(t,e){var n=c(t+"");~n&&(this.splice(n,1,e),this._updateClassName())},u.toString=function(){return this.join(" ")},s.defineProperty){var p={get:f,enumerable:!0,configurable:!0};try{s.defineProperty(a,e,p)}catch(d){void 0!==d.number&&-2146823252!==d.number||(p.enumerable=!1,s.defineProperty(a,e,p))}}else s[n].__defineGetter__&&a.__defineGetter__(e,f)}}(self),function(){var t=document.createElement("_");if(t.classList.add("c1","c2"),!t.classList.contains("c2")){var e=function(t){var e=DOMTokenList.prototype[t];DOMTokenList.prototype[t]=function(t){var n,a=arguments.length;for(n=0;a>n;n++)t=arguments[n],e.call(this,t)}};e("add"),e("remove")}if(t.classList.toggle("c3",!1),t.classList.contains("c3")){var n=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,e){return 1 in arguments&&!this.contains(t)==!e?e:n.call(this,t)}}"replace"in document.createElement("_").classList||(DOMTokenList.prototype.replace=function(t,e){var n=this.toString().split(" "),a=n.indexOf(t+"");~a&&(n=n.slice(a),this.remove.apply(this,n),this.add(e),this.add.apply(this,n.slice(1)))}),t=null}()),Q["c"].add([Y["d"],Y["c"],Y["b"],X["b"],X["a"],Y["a"]]),a["a"].component("font-awesome-icon",K["a"]),a["a"].config.productionTip=!1,a["a"].directive("scroll",{inserted:function(t,e){var n=function n(a){e.value(a,t)&&window.removeEventListener("scroll",n)};window.addEventListener("scroll",n)}}),new a["a"]({render:function(t){return t(J)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("5e27"),s=n.n(a);s.a},"5e27":function(t,e,n){},"71bf":function(t,e,n){},b00c:function(t,e,n){},b534:function(t,e,n){t.exports=n.p+"img/umw-logo.6cadef1a.jpg"},cbd0:function(t,e,n){"use strict";var a=n("00d5"),s=n.n(a);s.a},ccc1:function(t,e,n){"use strict";var a=n("feaf"),s=n.n(a);s.a},e053:function(t,e,n){"use strict";var a=n("71bf"),s=n.n(a);s.a},e0c6:function(t,e,n){"use strict";var a=n("b00c"),s=n.n(a);s.a},ed53:function(t,e,n){t.exports=n.p+"img/twi-logo.6c58a687.png"},feaf:function(t,e,n){}});
//# sourceMappingURL=app.4b5692b4.js.map