(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{0:function(e,n){},1:function(e,n){},2:function(e,n){},3:function(e,n){},4:function(e,n){},5:function(e,n){},QfWi:function(e,n,t){"use strict";t.r(n);t("yjly"),t("JBxO"),t("FdtR");var r={searchQuery:"",page:1,fetchArticles:function(){var e=this,n="https://newsapi.org/v2/everything?q="+this.searchQuery+"&language=ru&page="+this.page;return fetch(n,{headers:{Authorization:"eed4c8b8e55e4bf8ad4a3c7c448159d8"}}).then((function(e){return e.json()})).then((function(n){var t=n.articles;return e.page+=1,t})).catch((function(e){return console.log(e)}))},resetPage:function(){this.page=1},get query(){return this.searchQuery},set query(e){this.searchQuery=e}},a=t("l8Ea"),o=t.n(a),l={articlesContainer:document.querySelector(".js-articles"),searchForm:document.querySelector(".js-search-form"),loadMoreBtn:document.querySelector("[data-action=load-more]")};var c=function(e){var n=o()(e);l.articlesContainer.insertAdjacentHTML("beforeend",n)};t("NPBq");l.searchForm.addEventListener("submit",(function(e){e.preventDefault();var n=e.currentTarget;r.query=n.elements.query.value,l.articlesContainer.innerHTML="",n.reset(),r.resetPage(),r.fetchArticles().then(c)})),l.loadMoreBtn.addEventListener("click",(function(){r.fetchArticles().then(c)}))},l8Ea:function(e,n,t){var r=t("mp5j");e.exports=(r.default||r).template({1:function(e,n,t,r,a){var o,l=null!=n?n:e.nullContext||{},c=e.hooks.helperMissing,u=e.escapeExpression,i=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'<li><a href="'+u("function"==typeof(o=null!=(o=i(t,"url")||(null!=n?i(n,"url"):n))?o:c)?o.call(l,{name:"url",hash:{},data:a,loc:{start:{line:2,column:13},end:{line:2,column:20}}}):o)+'" target="_blank" rel="noopener noreferrer">'+u("function"==typeof(o=null!=(o=i(t,"title")||(null!=n?i(n,"title"):n))?o:c)?o.call(l,{name:"title",hash:{},data:a,loc:{start:{line:2,column:64},end:{line:2,column:73}}}):o)+"</a></li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,n,t,r,a){var o;return null!=(o=(e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]})(t,"each").call(null!=n?n:e.nullContext||{},n,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:1,column:0},end:{line:3,column:9}}}))?o:""},useData:!0})},yjly:function(e,n,t){}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.86812ad8fa4b4eda83e6.js.map