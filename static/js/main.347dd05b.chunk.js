(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{30:function(e,a,t){},31:function(e,a,t){},36:function(e,a,t){e.exports=t(62)},41:function(e,a,t){},42:function(e,a,t){},62:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),c=t(15),r=t.n(c),i=(t(41),t(3)),o=t(4),l=t(6),m=t(5),u=t(2),d=t.n(u),h=(t(42),t(27)),p=t(24),f=t.n(p),v=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=a.call.apply(a,[this].concat(s))).titles=[],e.downloadCv=[],e}return Object(o.a)(t,[{key:"render",value:function(){var e=this;if(this.props.sharedData){var a=this.props.sharedData.name;this.titles=this.props.sharedData.titles.map((function(e){return[e.toUpperCase(),1500]})).flat(),this.downloadCv=this.props.sharedData.downloadCv}var t=s.a.memo((function(){return s.a.createElement(h.a,{className:"title-styles",steps:e.titles,loop:2,wrapper:"b"})}),(function(e,a){return!0}));return s.a.createElement("header",{id:"home",style:{height:window.innerHeight,display:"block"}},s.a.createElement("div",{className:"row aligner",style:{height:"100%"}},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("div",null,s.a.createElement("img",{style:{height:"150px"},src:"images/devlogo.svg",alt:"logo",className:"devlogo"}),s.a.createElement("br",null),s.a.createElement("h1",{className:"mb-0"},s.a.createElement(h.a,{steps:[a],wrapper:"p"})),s.a.createElement("div",{className:"title-container"},s.a.createElement(t,null))))))}}]),t}(n.Component),g=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("footer",{style:{display:"flex",alignItems:"center",justifyContent:"center"}},s.a.createElement("span",null,"Copyright \xa9"," ",this.props.sharedBasicInfo?this.props.sharedBasicInfo.name:"???"))}}]),t}(n.Component);t(45),t(46),t(47),t(48);var E=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){d()("#cvs-box").hide(),d()(".slide-cvs").click((function(){d()("#cvs-box").slideToggle(500)}))}},{key:"render",value:function(){return s.a.createElement("div",{id:"download-cv"},s.a.createElement("div",{className:"download-btn slide-cvs",onClick:function(){}},this.props.title),s.a.createElement("div",{id:"cvs-box"},s.a.createElement("a",{href:"https://drive.google.com/file/d/1xC__BR-q2ExZLVHHUwicO2uWKkFjGxyN/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",onClick:function(){},className:"slide-cvs"},s.a.createElement("span",{className:"iconify cv-lang-icon","data-icon":"twemoji-flag-for-flag-united-kingdom","data-inline":"false",id:window.$primaryLanguageIconId}),"English"),s.a.createElement("a",{href:"https://drive.google.com/file/d/1m1M8fJFRYGKOehk7bV3zT5_-0kYrB8EE/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",onClick:function(){},className:"slide-cvs"},s.a.createElement("span",{className:"iconify cv-lang-icon","data-icon":"twemoji-flag-for-flag-argentina","data-inline":"false",id:window.$primaryLanguageIconId}),"Espa\xf1ol")))}}]),t}(n.Component),b=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.sharedBasicInfo)var e="images/"+this.props.sharedBasicInfo.image;if(this.props.resumeBasicInfo)var a=this.props.resumeBasicInfo.section_name.about,t=this.props.resumeBasicInfo.description_header,n=this.props.resumeBasicInfo.description,c=this.props.resumeBasicInfo.download_cv;return s.a.createElement("section",{id:"about"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("h1",{style:{color:"black"}},s.a.createElement("span",null,a)),s.a.createElement("div",{className:"row center mx-auto mb-5"},s.a.createElement("img",{className:"my-photo",src:e,alt:"Avatar placeholder"}),s.a.createElement("div",{className:"col-md-8 center"},s.a.createElement("div",{className:"col-md-10"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body font-trebuchet text-justify ml-3 mr-3",style:{height:"auto",fontSize:"132%",lineHeight:"200%"}},s.a.createElement("br",null),s.a.createElement("span",{className:"wave"},t," :) "),s.a.createElement("br",null),s.a.createElement("br",null),n)),s.a.createElement("div",{className:"download-cv-box"},s.a.createElement(E,{title:c})))))))}}]),t}(n.Component),y=t(23),N=(t(54),t(25)),w=(n.Component,t(65)),k=t(29),j=t.n(k),I=t(30),O=t.n(I),x=t(31),C=t.n(x),D=(t(55),function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data){var e=this.props.data.technologies,a=this.props.data.images,t=this.props.data.title,n=this.props.data.description,c=this.props.data.url;if(this.props.data.technologies){var r=e.map((function(e,a){return s.a.createElement("li",{className:"list-inline-item mx-3",key:a},s.a.createElement("span",null,s.a.createElement("div",{className:"text-center"},s.a.createElement("i",{className:e.class,style:{fontSize:"300%"}},s.a.createElement("p",{className:"text-center",style:{fontSize:"30%"}},e.name)))))}));if(this.props.data.images)var i=a.map((function(e,a){return s.a.createElement("div",{key:a,className:"project-img-box-2"},s.a.createElement("img",{src:e,alt:"projectImage",style:{maxWidth:"100%",maxHeight:"100%"}}))}))}}return s.a.createElement(w.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"modal-inside"}),s.a.createElement("span",{onClick:this.props.onHide,className:"modal-close"},s.a.createElement("i",{className:"fas fa-times fa-3x close-icon"})),s.a.createElement("div",{className:"col-md-12"},s.a.createElement("div",{className:"col-md-10 mx-auto",style:{paddingBottom:"50px"}},s.a.createElement("div",{className:"slider-tab"},s.a.createElement("span",{className:"iconify slider-iconfiy","data-icon":"emojione:red-circle","data-inline":"false",style:{marginLeft:"5px"}})," ","\xa0"," ",s.a.createElement("span",{className:"iconify slider-iconfiy","data-icon":"twemoji:yellow-circle","data-inline":"false"})," ","\xa0"," ",s.a.createElement("span",{className:"iconify slider-iconfiy","data-icon":"twemoji:green-circle","data-inline":"false"})),s.a.createElement(j.a,{cssModule:[O.a,C.a],animation:"scaleOutAnimation",className:"slider-image"},i)),s.a.createElement("div",{className:"col-md-10 mx-auto"},s.a.createElement("h3",{style:{padding:"5px 5px 0 5px"}},t,c?s.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:"link-href"},s.a.createElement("i",{className:"fas fa-external-link-alt",style:{marginLeft:"10px"}})):null),s.a.createElement("p",{className:"modal-description"},n),s.a.createElement("div",{className:"col-md-12 text-center"},s.a.createElement("ul",{className:"list-inline mx-auto"},r)))))}}]),t}(n.Component)),M=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={deps:{},detailsModalShow:!1},n}return Object(o.a)(t,[{key:"render",value:function(){var e=this;if(this.props.resumeProjects&&this.props.resumeBasicInfo)var a=this.props.resumeBasicInfo.section_name.projects,t=this.props.resumeProjects.map((function(a){return s.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-4",key:a.title,style:{cursor:"pointer"}},s.a.createElement("span",{className:"portfolio-item d-block"},s.a.createElement("div",{className:"foto",onClick:function(){return t=a,void e.setState({detailsModalShow:!0,deps:t});var t}},s.a.createElement("div",{className:"project-box"},s.a.createElement("div",{className:"project-img-box"},s.a.createElement("img",{src:a.images[0],alt:"projectImages"})),s.a.createElement("span",{className:"project-date"},a.startDate),s.a.createElement("br",null),s.a.createElement("p",{className:"project-title-settings mt-3"},a.title)))))}));return s.a.createElement("section",{id:"portfolio"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("h1",{className:"section-title",style:{color:"black"}},s.a.createElement("span",null,a)),s.a.createElement("div",{className:"col-md-12 mx-auto"},s.a.createElement("div",{className:"row mx-auto",style:{display:"flex",justifyContent:"center"}},t)),s.a.createElement(D,{show:this.state.detailsModalShow,onHide:function(){return e.setState({detailsModalShow:!1})},data:this.state.deps})))}}]),t}(n.Component),L=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.sharedSkills&&this.props.resumeBasicInfo)var e=this.props.resumeBasicInfo.section_name.skills,a=this.props.sharedSkills.icons.map((function(e,a){return s.a.createElement("li",{className:"list-inline-item mx-3",key:a},s.a.createElement("span",null,s.a.createElement("div",{className:"text-center skills-tile"},s.a.createElement("i",{className:e.class,style:{fontSize:"220%"}},s.a.createElement("p",{className:"text-center",style:{fontSize:"30%",marginTop:"4px"}},e.name)))))}));return s.a.createElement("section",{id:"skills"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("h1",{className:"section-title"},s.a.createElement("span",{className:"skills-title"},e))),s.a.createElement("div",{className:"col-md-12 text-center"},s.a.createElement("ul",{className:"list-inline mx-auto skill-icon"},a))))}}]),t}(n.Component),S=(t(57),t(19)),B=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).state={checked:!1},e.onThemeSwitchChange=e.onThemeSwitchChange.bind(Object(S.a)(e)),e}return Object(o.a)(t,[{key:"onThemeSwitchChange",value:function(e){this.setState({checked:e}),this.setTheme()}},{key:"setTheme",value:function(){var e=document.body,a="dark"===e.getAttribute("data-theme")?"light":"dark";e.setAttribute("data-theme",a)}},{key:"render",value:function(){return s.a.createElement("div",{className:"switch-container"},s.a.createElement(f.a,{checked:this.state.checked,onChange:this.onThemeSwitchChange,offColor:"#858ae3",onColor:"#0c1821",className:"react-switch mx-auto",width:90,height:40,uncheckedIcon:s.a.createElement("span",{className:"iconify","data-icon":"emojione-monotone:crescent-moon","data-inline":"false",style:{display:"block",height:"100%",fontSize:25,textAlign:"end",marginLeft:"20px",color:"#353239"}}),checkedIcon:s.a.createElement("span",{className:"iconify","data-icon":"emojione-v1:sun","data-inline":"false",style:{display:"block",height:"100%",fontSize:25,textAlign:"end",marginLeft:"10px",color:"#353239"}}),id:"icon-switch"}))}}]),t}(n.Component),P=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"lang-container"},s.a.createElement("div",{onClick:function(){return e.props.applyPickedLanguage(window.$primaryLanguage,window.$secondaryLanguageIconId)}},s.a.createElement("span",{className:"iconify language-icon lang-icon","data-icon":"twemoji-flag-for-flag-united-kingdom","data-inline":"false",id:window.$primaryLanguageIconId})),s.a.createElement("div",{onClick:function(){return e.props.applyPickedLanguage(window.$secondaryLanguage,window.$primaryLanguageIconId)}},s.a.createElement("span",{className:"iconify language-icon lang-icon","data-icon":"twemoji-flag-for-flag-spain","data-inline":"false",id:window.$secondaryLanguageIconId})))}}]),t}(n.Component),_=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).state={logo:null},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=d()("nav").outerHeight();d()(".navbar-toggler").on("click",(function(){d()("#mainNav").hasClass("navbar-reduce")||d()("#mainNav").addClass("navbar-reduce")})),d()("body").scrollspy({target:"#mainNav",offset:e}),d()(".js-scroll").on("click",(function(){d()(".navbar-collapse").collapse("hide")})),window.addEventListener("scroll",(function(){window.pageYOffset>50?(document.querySelector(".navbar-expand-md").classList.add("navbar-reduce"),document.querySelector(".navbar-expand-md").classList.remove("navbar-trans")):(document.querySelector(".navbar-expand-md").classList.add("navbar-trans"),document.querySelector(".navbar-expand-md").classList.remove("navbar-reduce"))})),d()('a.js-scroll[href*="#"]:not([href="#"])').on("click",(function(){if(window.location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&window.location.hostname===this.hostname){var a=d()(this.hash);if((a=a.length?a:d()("[name="+this.hash.slice(1)+"]")).length)return d()("html, body").animate({scrollTop:a.offset().top-e+5},750,"easeInExpo"),!1}})),d()(".js-scroll").on("click",(function(){d()(".navbar-collapse").collapse("hide")}))}},{key:"render",value:function(){return s.a.createElement("nav",{className:"navbar navbar-b navbar-trans navbar-expand-md fixed-top",id:"mainNav"},s.a.createElement("div",{className:"nav-container"},s.a.createElement("button",{className:"navbar-toggler collapsed",type:"button","data-toggle":"collapse","data-target":"#navbarDefault","aria-controls":"navbarDefault","aria-expanded":"false","aria-label":"Toggle navigation"},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null)),s.a.createElement("div",{className:"navbar-collapse collapse",id:"navbarDefault"},s.a.createElement("ul",{className:"navbar-nav"},s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link js-scroll active",href:"#home"},this.props.resumeData?this.props.resumeData.home:"Home")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link js-scroll",href:"#about"},this.props.resumeData?this.props.resumeData.about:"About")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link js-scroll",href:"#portfolio"},this.props.resumeData?this.props.resumeData.projects:"Projects")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link js-scroll",href:"#skills"},this.props.resumeData?this.props.resumeData.skills:"Skills")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link js-scroll",href:"#contact"},this.props.resumeData?this.props.resumeData.contact:"Contact"))))),s.a.createElement("div",{className:"switches-container"},s.a.createElement(P,{applyPickedLanguage:this.props.applyPickedLanguage}),s.a.createElement(B,null)))}}]),t}(s.a.Component),$=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=a.call.apply(a,[this].concat(s))).contact={},e.social=[],e.sectionName="",e}return Object(o.a)(t,[{key:"render",value:function(){var e,a,t;return this.props.resumeData.contact&&this.props.sharedBasicInfo&&(this.contact=this.props.resumeData.contact,this.social=this.props.sharedBasicInfo.social,this.sectionName=this.props.resumeData.basic_info.section_name.contact),s.a.createElement("section",{id:"contact"},s.a.createElement("h1",{className:"section-title contact-title"},s.a.createElement("span",null,this.sectionName)),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-12"},s.a.createElement("div",{className:"contact-mf"},s.a.createElement("div",{className:"box-shadow-full"},s.a.createElement("div",{className:"row contact-container"},s.a.createElement("div",{className:"col-md-6"},s.a.createElement("div",{className:"title-box-2"},s.a.createElement("h5",{className:"contact-subtitle"},this.contact.formTitle)),s.a.createElement("div",null,s.a.createElement("form",{action:"https://formspree.io/f/xwkyolgg",method:"POST",className:"contactForm"},s.a.createElement("div",{id:"sendmessage"},this.contact.success),s.a.createElement("div",{id:"errormessage"},this.contact.error),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-12 mb-3"},s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"text",name:"name",className:"form-control",id:"name",placeholder:this.contact.labels&&this.contact.labels[0],"data-rule":"minlen:4","data-msg":this.contact.labels&&this.contact.labels[1]}),s.a.createElement("div",{className:"validation"}))),s.a.createElement("div",{className:"col-md-12 mb-3"},s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"email",className:"form-control",name:"email",id:"email",placeholder:this.contact.labels&&(null===(e=this.contact)||void 0===e?void 0:e.labels[2]),"data-rule":"email","data-msg":"Please enter a valid email"}),s.a.createElement("div",{className:"validation"}))),s.a.createElement("div",{className:"col-md-12 mb-3"},s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"text",className:"form-control",name:"subject",id:"subject",placeholder:this.contact.labels&&(null===(a=this.contact)||void 0===a?void 0:a.labels[3]),"data-rule":"minlen:4","data-msg":"Please enter at least 8 chars of subject"}),s.a.createElement("div",{className:"validation"}))),s.a.createElement("div",{className:"col-md-12 mb-3"},s.a.createElement("div",{className:"form-group"},s.a.createElement("textarea",{className:"form-control",name:"message",rows:"5","data-rule":"required","data-msg":"Please write something for us",placeholder:this.contact.labels&&(null===(t=this.contact)||void 0===t?void 0:t.labels[4])}),s.a.createElement("div",{className:"validation"}))),s.a.createElement("div",{className:"col-md-12"},s.a.createElement("button",{type:"submit",className:"button button-a button-big button-rouded"},this.contact.submit)))))),s.a.createElement("div",{className:"col-md-6"},s.a.createElement("div",{className:"title-box-2 pt-4 pt-md-0"},s.a.createElement("h5",{className:"contact-subtitle"},this.contact.title)),s.a.createElement("div",{className:"more-info"},s.a.createElement("p",{className:"contact-p"},this.contact.description,s.a.createElement("br",null),s.a.createElement("br",null),this.contact.description2)),s.a.createElement("div",{className:"socials"},s.a.createElement("ul",null,this.social.map((function(e){return s.a.createElement("li",{key:e.name},s.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},s.a.createElement("span",{className:"ico-circle"},s.a.createElement("i",{className:e.class,style:{height:"100%",width:"100%"}}))))}))))))))))))}}]),t}(s.a.Component),A=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this)).state={foo:"bar",resumeData:{},sharedData:{}},n}return Object(o.a)(t,[{key:"applyPickedLanguage",value:function(e,a){this.swapCurrentlyActiveLanguage(a),document.documentElement.lang=e;var t=document.documentElement.lang===window.$primaryLanguage?"res_primaryLanguage.json":"res_secondaryLanguage.json";this.loadResumeFromPath(t)}},{key:"swapCurrentlyActiveLanguage",value:function(e){var a=e===window.$primaryLanguageIconId?window.$secondaryLanguageIconId:window.$primaryLanguageIconId;document.getElementById(e).removeAttribute("filter","brightness(40%)"),document.getElementById(a).setAttribute("filter","brightness(40%)")}},{key:"componentDidMount",value:function(){this.loadSharedData(),this.applyPickedLanguage(window.$primaryLanguage,window.$secondaryLanguageIconId)}},{key:"loadResumeFromPath",value:function(e){d.a.ajax({url:e,dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,a,t){alert(t)}})}},{key:"loadSharedData",value:function(){d.a.ajax({url:"portfolio_shared_data.json",dataType:"json",cache:!1,success:function(e){this.setState({sharedData:e}),document.title="".concat(this.state.sharedData.basic_info.name)}.bind(this),error:function(e,a,t){alert(t)}})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(_,{resumeData:this.state.resumeData.navbar,applyPickedLanguage:this.applyPickedLanguage.bind(this)}),s.a.createElement(v,{sharedData:this.state.sharedData.basic_info}),s.a.createElement(b,{resumeBasicInfo:this.state.resumeData.basic_info,sharedBasicInfo:this.state.sharedData.basic_info}),s.a.createElement(M,{resumeProjects:this.state.resumeData.projects,resumeBasicInfo:this.state.resumeData.basic_info}),s.a.createElement(L,{sharedSkills:this.state.sharedData.skills,resumeBasicInfo:this.state.resumeData.basic_info}),s.a.createElement($,{resumeData:this.state.resumeData,sharedBasicInfo:this.state.sharedData.basic_info}),s.a.createElement(g,{sharedBasicInfo:this.state.sharedData.basic_info}))}}]),t}(n.Component),T=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function q(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(60),t(61);d.a.easing.jswing=d.a.easing.swing,d.a.extend(d.a.easing,{def:"easeOutQuad",swing:function(e,a,t,n,s){return d.a.easing[d.a.easing.def](e,a,t,n,s)},easeInQuad:function(e,a,t,n,s){return n*(a/=s)*a+t},easeOutQuad:function(e,a,t,n,s){return-n*(a/=s)*(a-2)+t},easeInOutQuad:function(e,a,t,n,s){return(a/=s/2)<1?n/2*a*a+t:-n/2*(--a*(a-2)-1)+t},easeInCubic:function(e,a,t,n,s){return n*(a/=s)*a*a+t},easeOutCubic:function(e,a,t,n,s){return n*((a=a/s-1)*a*a+1)+t},easeInOutCubic:function(e,a,t,n,s){return(a/=s/2)<1?n/2*a*a*a+t:n/2*((a-=2)*a*a+2)+t},easeInQuart:function(e,a,t,n,s){return n*(a/=s)*a*a*a+t},easeOutQuart:function(e,a,t,n,s){return-n*((a=a/s-1)*a*a*a-1)+t},easeInOutQuart:function(e,a,t,n,s){return(a/=s/2)<1?n/2*a*a*a*a+t:-n/2*((a-=2)*a*a*a-2)+t},easeInQuint:function(e,a,t,n,s){return n*(a/=s)*a*a*a*a+t},easeOutQuint:function(e,a,t,n,s){return n*((a=a/s-1)*a*a*a*a+1)+t},easeInOutQuint:function(e,a,t,n,s){return(a/=s/2)<1?n/2*a*a*a*a*a+t:n/2*((a-=2)*a*a*a*a+2)+t},easeInSine:function(e,a,t,n,s){return-n*Math.cos(a/s*(Math.PI/2))+n+t},easeOutSine:function(e,a,t,n,s){return n*Math.sin(a/s*(Math.PI/2))+t},easeInOutSine:function(e,a,t,n,s){return-n/2*(Math.cos(Math.PI*a/s)-1)+t},easeInExpo:function(e,a,t,n,s){return 0==a?t:n*Math.pow(2,10*(a/s-1))+t},easeOutExpo:function(e,a,t,n,s){return a==s?t+n:n*(1-Math.pow(2,-10*a/s))+t},easeInOutExpo:function(e,a,t,n,s){return 0==a?t:a==s?t+n:(a/=s/2)<1?n/2*Math.pow(2,10*(a-1))+t:n/2*(2-Math.pow(2,-10*--a))+t},easeInCirc:function(e,a,t,n,s){return-n*(Math.sqrt(1-(a/=s)*a)-1)+t},easeOutCirc:function(e,a,t,n,s){return n*Math.sqrt(1-(a=a/s-1)*a)+t},easeInOutCirc:function(e,a,t,n,s){return(a/=s/2)<1?-n/2*(Math.sqrt(1-a*a)-1)+t:n/2*(Math.sqrt(1-(a-=2)*a)+1)+t},easeInElastic:function(e,a,t,n,s){var c=1.70158,r=0,i=n;if(0==a)return t;if(1==(a/=s))return t+n;if(r||(r=.3*s),i<Math.abs(n)){i=n;c=r/4}else c=r/(2*Math.PI)*Math.asin(n/i);return-i*Math.pow(2,10*(a-=1))*Math.sin((a*s-c)*(2*Math.PI)/r)+t},easeOutElastic:function(e,a,t,n,s){var c=1.70158,r=0,i=n;if(0==a)return t;if(1==(a/=s))return t+n;if(r||(r=.3*s),i<Math.abs(n)){i=n;c=r/4}else c=r/(2*Math.PI)*Math.asin(n/i);return i*Math.pow(2,-10*a)*Math.sin((a*s-c)*(2*Math.PI)/r)+n+t},easeInOutElastic:function(e,a,t,n,s){var c=1.70158,r=0,i=n;if(0==a)return t;if(2==(a/=s/2))return t+n;if(r||(r=s*(.3*1.5)),i<Math.abs(n)){i=n;c=r/4}else c=r/(2*Math.PI)*Math.asin(n/i);return a<1?i*Math.pow(2,10*(a-=1))*Math.sin((a*s-c)*(2*Math.PI)/r)*-.5+t:i*Math.pow(2,-10*(a-=1))*Math.sin((a*s-c)*(2*Math.PI)/r)*.5+n+t},easeInBack:function(e,a,t,n,s,c){return void 0==c&&(c=1.70158),n*(a/=s)*a*((c+1)*a-c)+t},easeOutBack:function(e,a,t,n,s,c){return void 0==c&&(c=1.70158),n*((a=a/s-1)*a*((c+1)*a+c)+1)+t},easeInOutBack:function(e,a,t,n,s,c){return void 0==c&&(c=1.70158),(a/=s/2)<1?n/2*(a*a*((1+(c*=1.525))*a-c))+t:n/2*((a-=2)*a*((1+(c*=1.525))*a+c)+2)+t},easeInBounce:function(e,a,t,n,s){return n-d.a.easing.easeOutBounce(e,s-a,0,n,s)+t},easeOutBounce:function(e,a,t,n,s){return(a/=s)<1/2.75?n*(7.5625*a*a)+t:a<2/2.75?n*(7.5625*(a-=1.5/2.75)*a+.75)+t:a<2.5/2.75?n*(7.5625*(a-=2.25/2.75)*a+.9375)+t:n*(7.5625*(a-=2.625/2.75)*a+.984375)+t},easeInOutBounce:function(e,a,t,n,s){return a<s/2?.5*d.a.easing.easeInBounce(e,2*a,0,n,s)+t:.5*d.a.easing.easeOutBounce(e,2*a-s,0,n,s)+.5*n+t}}),window.$primaryLanguage="en",window.$secondaryLanguage="pl",window.$primaryLanguageIconId="primary-lang-icon",window.$secondaryLanguageIconId="secondary-lang-icon",r.a.render(s.a.createElement(A,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/portfolio",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/portfolio","/service-worker.js");T?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):q(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):q(a,e)}))}}()}},[[36,1,2]]]);
//# sourceMappingURL=main.347dd05b.chunk.js.map