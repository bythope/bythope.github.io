"use strict";(self.webpackChunkbythope_github_io=self.webpackChunkbythope_github_io||[]).push([[85],{7979:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(7294),a=n(6010),c=n(6698),o=n(3905),l=n(6845),i=n(571),u=n(941),s="mdxPageWrapper_3qD3";var f=function(e){var t=e.content,n=t.frontMatter,f=t.metadata,m=n.title,d=n.description,v=n.wrapperClassName,h=n.hide_table_of_contents,p=f.permalink;return r.createElement(c.Z,{title:m,description:d,permalink:p,wrapperClassName:null!=v?v:u.kM.wrapper.mdxPages,pageClassName:u.kM.page.mdxPage},r.createElement("main",{className:"container container--fluid margin-vert--lg"},r.createElement("div",{className:(0,a.Z)("row",s)},r.createElement("div",{className:(0,a.Z)("col",!h&&"col--8")},r.createElement(o.Zo,{components:l.Z},r.createElement(t,null))),!h&&t.toc&&r.createElement("div",{className:"col col--2"},r.createElement(i.Z,{toc:t.toc})))))}},571:function(e,t,n){n.d(t,{r:function(){return d},Z:function(){return v}});var r=n(7294),a=n(6010),c=n(941);function o(e){var t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function l(e){var t,n=e.anchorTopOffset,r=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),a=r.find((function(e){return o(e).top>=n}));return a?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(a))?a:null!=(t=r[r.indexOf(a)-1])?t:null:r[r.length-1]}function i(){var e=(0,r.useRef)(0),t=(0,c.LU)().navbar.hideOnScroll;return(0,r.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}var u=function(e){var t=(0,r.useRef)(void 0),n=i();(0,r.useEffect)((function(){var r=e.linkClassName,a=e.linkActiveClassName;function c(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),c=l({anchorTopOffset:n.current}),o=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){if(n){var r;t.current&&t.current!==e&&(null==(r=t.current)||r.classList.remove(a)),e.classList.add(a),t.current=e}else e.classList.remove(a)}(e,e===o)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),function(){document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])},s="tableOfContents_35-E",f="table-of-contents__link",m={linkClassName:f,linkActiveClassName:"table-of-contents__link--active"};function d(e){var t=e.toc,n=e.isChild;return t.length?r.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:f,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(d,{isChild:!0,toc:e.children}))}))):null}var v=function(e){var t=e.toc;return u(m),r.createElement("div",{className:(0,a.Z)(s,"thin-scrollbar")},r.createElement(d,{toc:t}))}}}]);