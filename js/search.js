var themeLocalSearch=function(t){var e=t.search_path,o=t.zip_Path,n=t.version_Path,a=t.input_Trigger,E=t.top_N,i=!1;0===e.length?e="search.xml":/json$/i.test(e);function r(){$(".popup").addClass("scale-out-horizontal").fadeOut(600),$("body").removeClass("body-fixed-search"),$("#local-search-input").val(""),$(".search-result-list").remove(),$("#no-result").remove(),$(".search-result-number").remove(),setTimeout(function(){$(".popup").removeClass("scale-out-horizontal")},1e3)}function l(){$(".popup").addClass("scale-in-hor-center").fadeIn(600);var t=$("#local-search-input");t.attr("autocapitalize","none"),t.attr("autocorrect","off"),t.focus(),setTimeout(function(){$(".popup").removeClass("scale-in-hor-center"),$("body").addClass("body-fixed-search")},1e3)}$.get(n+"?t="+ +new Date,function(t){localStorage.getItem("searchVersion")!==t&&(localStorage.setItem("searchVersion",t),initLoad([o],{loadOptions:{success:function(t){localStorage.setItem("searchJson",t[e])},error:function(t){return console.log(t)}},returnOptions:{json:TYPE_TEXT},mimeOptions:{json:"application/json"}}))});function s(t,e){"use strict";i=!0;var o=JSON.parse(localStorage.getItem("searchJson"));function n(){$(".local-search-popup").animate({scrollTop:0},5);var x=r.value.trim().toLowerCase(),w=x.split(/[\s\-]+/);1<w.length&&w.push(x);var y=[];if(0<x.length&&o.forEach(function(t){var e=!1,o=0,u=0,n=t.title?t.title.trim():"",r=n.toLowerCase(),s=t.content?t.content.trim().replace(/<[^>]+>/g,""):"",a=s.toLowerCase(),i=decodeURIComponent(t.url),l=[],c=[];if(w.forEach(function(t){function e(t,e,o){var n=t.length;if(0===n)return[];var r=0,s=[],a=[];for(o||(e=e.toLowerCase(),t=t.toLowerCase());-1<(s=e.indexOf(t,r));)a.push({position:s,word:t}),r=s+n;return a}l=l.concat(e(t,r,!1)),c=c.concat(e(t,a,!1))}),(0<l.length||0<c.length)&&(e=!0,o=l.length+c.length),e){var h=function(t,e,o,n){for(var r=n[n.length-1],s=r.position,a=r.word,i=[],l=0;s+a.length<=o&&0!=n.length;){a===x&&l++,i.push({position:s,length:a.length});var c=s+a.length;for(n.pop();0!=n.length&&(s=(r=n[n.length-1]).position,a=r.word,s<c);)n.pop()}return u+=l,{hits:i,start:e,end:o,searchTextCount:l}},p=function(o,t){var n="",r=t.start;return t.hits.forEach(function(t){n+=o.substring(r,t.position);var e=t.position+t.length;n+='<b class="search-keyword">'+o.substring(t.position,e)+"</b>",r=e}),n+=o.substring(r,t.end)};[l,c].forEach(function(t){t.sort(function(t,e){return e.position!==t.position?e.position-t.position:t.word.length-e.word.length})});var g=[];0!=l.length&&g.push(h(0,0,n.length,l));for(var d=[];0!=c.length;){var f=c[c.length-1],v=f.position,m=f.word,C=v-20,$=v+80;C<0&&(C=0),$<v+m.length&&($=v+m.length),$>s.length&&($=s.length),d.push(h(0,C,$,c))}d.sort(function(t,e){return t.searchTextCount!==e.searchTextCount?e.searchTextCount-t.searchTextCount:t.hits.length!==e.hits.length?e.hits.length-t.hits.length:t.start-e.start});var T=parseInt(E);0<=T&&(d=d.slice(0,T));var b="";0!=g.length?b+="<li><a target='_blank' href='"+i+"' class='search-result-title'>"+p(n,g[0])+"</a>":b+="<li><a target='_blank' href='"+i+"' class='search-result-title'>"+n+"</a>",d.forEach(function(t){b+='<p class="search-result-content">'+p(s,t)+"...</p>"}),b+="</li>",y.push({item:b,searchTextCount:u,hitCount:o,id:y.length})}}),1===w.length&&""===w[0])s.innerHTML='<div id="no-result"><i class="" />Please type in some words!</div>';else if(0===y.length)s.innerHTML='<div id="no-result"><i class="" />No any results!</div>';else{y.sort(function(t,e){return t.searchTextCount!==e.searchTextCount?e.searchTextCount-t.searchTextCount:t.hitCount!==e.hitCount?e.hitCount-t.hitCount:e.id-t.id});var e='<div class="search-result-number">'+y.length+' results at total!</div><ul class="search-result-list">';y.forEach(function(t){e+=t.item}),e+="</ul>",s.innerHTML=e}}console.log(t);var r=document.getElementById(t),s=document.getElementById(e);"auto"===a?r.addEventListener("input",n):r.addEventListener("keypress",function(t){13===t.keyCode&&n()}),l()}var c,u,h;$(".popup-trigger").click(function(t){t.stopPropagation(),!1===i?($(".sb-close").click(),s("local-search-input","local-search-output")):l()}),$(".popup-btn-close").click(r),$(".popup").click(function(t){t.stopPropagation()}),$(document).on("keyup",function(t){27===t.which&&$(".search-popup").is(":visible")&&r()}),c=".local-search-popup",u="#local-search-input",h=$(".input-prompt").outerHeight(),$(c).scroll(function(){var t=$(c).scrollTop();h/2<=t?$(u).addClass("input-fixed"):$(u).removeClass("input-fixed")}).trigger("scroll")};