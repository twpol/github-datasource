/*! For license information please see module.js.LICENSE.txt */
define(["react","@grafana/ui","@grafana/data","@grafana/runtime","emotion","app/core/core_module","lodash"],(function(e,t,n,r,a,o,i){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=7)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=a},function(e,t){e.exports=o},function(e,t){e.exports=i},function(e,t,n){"use strict";n.r(t);var r=n(2),a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function o(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function l(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{u(r.next(e))}catch(e){o(e)}}function l(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}u((r=r.apply(e,t||[])).next())}))}function u(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}}function c(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function s(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return i}function f(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var p=n(3),d=function(e,t,n){return t?e.replace(t,n):t},m=function(e){return!!e.queryType},h={userId:"userId",login:"login",email:"email",avatarUrl:"avatarUrl",time:"time",timeEnd:"timeEnd",title:"title",text:"text",tags:"tags"};function g(e,t){var n,a,o,l,u,f,p,d=[];if(!e||!e.length)return d;var m=!1,g=!1,y={};try{for(var v=c(e.fields),b=v.next();!b.done;b=v.next()){y[(N=b.value).name.toLowerCase()]=N}}catch(e){n={error:e}}finally{try{b&&!b.done&&(a=v.return)&&a.call(v)}finally{if(n)throw n.error}}t=i({field:{},regex:{}},t);var E=[],w=i(i({},h),null==t?void 0:t.field);try{for(var C=c(Object.entries(w)),T=C.next();!T.done;T=C.next()){var q=s(T.value,2),O=q[0],x=q[1],k=x?x.toLowerCase():"";if(k&&y[k]){switch((Q={key:O,field:y[k]}).key){case"time":m=!0;break;case"text":g=!0;break;case"tags":Q.split=","}var j=t.regex[Q.key];j&&(Q.regex=new RegExp(j)),E.push(Q)}}}catch(e){o={error:e}}finally{try{T&&!T.done&&(l=C.return)&&l.call(C)}finally{if(o)throw o.error}}if(!m){if(!(F=e.fields.find((function(e){return e.type===r.FieldType.time}))))return[];E.push({key:"time",field:F})}if(!g){var F;if(!(F=e.fields.find((function(e){return e.type===r.FieldType.string}))))return[];var S={key:"text",field:F};(null===(p=null==t?void 0:t.regex)||void 0===p?void 0:p.text)&&(S.regex=new RegExp(t.regex.text)),E.push(S)}for(var P=0;P<e.length;P++){var R={};try{for(var I=(u=void 0,c(E)),A=I.next();!A.done;A=I.next()){var N,Q=(N=A.value).field.values.get(P);if(N.regex){var _=N.regex.exec(Q);_&&(Q=_[1]?_[1]:_[0])}N.split&&(Q=Q.split(",")),R[N.key]=Q}}catch(e){u={error:e}}finally{try{A&&!A.done&&(f=I.return)&&f.call(I)}finally{if(u)throw u.error}}d.push(R)}return d}var y,v,b,E,w=function(e){function t(t){var n=e.call(this,t)||this;return n.templateSrv=Object(p.getTemplateSrv)(),n.filterQuery=function(e){return m(e)},n}return o(t,e),t.prototype.applyTemplateVariables=function(e,t){return function(e,t,n){if(Object.keys(t).forEach((function(r){"string"==typeof t[r]&&(t[r]=d(e,t[r],n))})),t.options){var r=t.options;Object.keys(r).forEach((function(t){"string"==typeof r[t]&&(r[t]=d(e,r[t],n))})),t.options=r}return t}(this.templateSrv,e,t)},t.prototype.getLabels=function(e,t,n){return l(this,void 0,Promise,(function(){return u(this,(function(r){return[2,this.getResource("labels",{repository:e,owner:t,query:n})]}))}))},t.prototype.annotationQuery=function(e){var t;return l(this,void 0,Promise,(function(){var n,r,a;return u(this,(function(o){switch(o.label){case 0:return n=e.annotation.annotation,r={targets:[i(i({},n),{datasourceId:this.id})],range:e.range,interval:e.interval},[4,this.query(r).toPromise()];case 1:return a=o.sent(),(null===(t=null==a?void 0:a.data)||void 0===t?void 0:t.length)?[2,g(a.data[0],{field:{time:n.timeField,text:n.field||"name"}})]:[2,[]]}}))}))},t.prototype.getChoices=function(e){var t;return l(this,void 0,Promise,(function(){var n,r,a;return u(this,(function(o){switch(o.label){case 0:n={targets:[i(i({},e),{refId:"metricFindQuery"})],range:{to:{},from:{}}},o.label=1;case 1:return o.trys.push([1,3,,4]),[4,this.query(n).toPromise()];case 2:return r=o.sent(),[2,(null===(t=r.data[0])||void 0===t?void 0:t.fields.map((function(e){return e.name})))||[]];case 3:return a=o.sent(),[2,Promise.reject(a)];case 4:return[2]}}))}))},t.prototype.metricFindQuery=function(e,t){return l(this,void 0,Promise,(function(){var n,a,o;return u(this,(function(l){switch(l.label){case 0:n={targets:[i(i({},e),{refId:"metricFindQuery"})],range:t.range,rangeRaw:t.rangeRaw},l.label=1;case 1:return l.trys.push([1,3,,4]),[4,this.query(n).toPromise()];case 2:return a=l.sent(),[3,4];case 3:return o=l.sent(),[2,Promise.reject(o)];case 4:return!a||!a.data||a.data.length<0?[2,[]]:[2,new r.DataFrameView(a.data[0]).map((function(t){return{text:t[e.field||"name"]}}))]}}))}))},t}(p.DataSourceWithBackend),C=n(0),T=n.n(C),q=n(1),O={ConfigEditor:{AccessToken:{input:"Config editor access token"}},QueryEditor:{Owner:{input:"Query editor owner"},Repository:{input:"Query editor repository"},Query:{input:"Query editor query"},Ref:{input:"Query editor ref"}},AnnotationEditor:{container:"Annotation editor container"}},x=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onSettingReset=function(e){return function(n){t.onSettingUpdate(e,!1)({target:{value:void 0}})}},t.onSettingUpdate=function(e,n){return void 0===n&&(n=!0),function(r){var a,o,l=t.props,u=l.onOptionsChange,c=l.options;u(i(i({},c),{secureJsonData:i(i({},c.secureJsonData),(a={},a[e]=r.target.value,a)),secureJsonFields:i(i({},c.secureJsonFields),(o={},o[e]=n,o))}))}},t}return o(t,e),t.prototype.render=function(){var e=this.props.options,t=e.jsonData,n=e.secureJsonData,a=e.secureJsonFields,o=n||{};return T.a.createElement(T.a.Fragment,null,T.a.createElement(q.InfoBox,{title:"Access Token Permissions"},T.a.createElement("p",null,"To create a new Access Token, navigate to"," ",T.a.createElement("a",{href:"https://github.com/settings/tokens"},"Personal Access Tokens ",T.a.createElement(q.Icon,{name:"link"}))," ",'and create a click "Generate new token."'),T.a.createElement("p",null,"Ensure that your token has the following permissions:"),T.a.createElement("h4",null,"For all repositories:"),T.a.createElement("pre",null,T.a.createElement("ul",null,T.a.createElement("li",null,"public_repo"),T.a.createElement("li",null,"repo:status"),T.a.createElement("li",null,"repo_deployment"),T.a.createElement("li",null,"read:packages")),T.a.createElement("ul",null,T.a.createElement("li",null,"user:read"),T.a.createElement("li",null,"user:email"))),T.a.createElement("h4",null,"An extra setting is required for private repositories:"),T.a.createElement("pre",null,T.a.createElement("ul",null,T.a.createElement("li",null,"repo (Full control of private repositories)")))),T.a.createElement("div",{className:"gf-form-group"},T.a.createElement("h3",{className:"page-heading"},"Service Account Access"),T.a.createElement("div",{className:"gf-form"},T.a.createElement(q.LegacyForms.SecretFormField,{"aria-label":O.ConfigEditor.AccessToken.input,label:"Access Token",inputWidth:27,labelWidth:10,onChange:this.onSettingUpdate("accessToken",!1),onBlur:this.onSettingUpdate("accessToken"),value:o.accessToken||"",placeholder:"Github Personal Access Token",onReset:this.onSettingReset("accessToken"),isConfigured:a.accessToken}))),T.a.createElement("div",{className:"gf-form-group"},T.a.createElement("h3",{className:"page-heading"},"GitHub Enterprise"),T.a.createElement("div",{className:"gf-form"},T.a.createElement(q.InlineFormLabel,{className:"width-10"},"GitHub Enterprise URL"),T.a.createElement(q.Input,{css:"",className:"width-27",value:t.githubUrl,placeholder:"URL of GitHub Enterprise",summary:"URL for GitHub Enterprise, such as https://github.company.com, leave blank if using github.com",onChange:Object(r.onUpdateDatasourceJsonDataOption)(this.props,"githubUrl")}))),T.a.createElement(q.InfoBox,{title:"GitHub Enterprise"},T.a.createElement("p",null,"For GitHub Enterprise enter the URL, such as https://github.company.com"),T.a.createElement("p",null,"Leave blank if not using GitHub Enterprise, which will default to github.com")))},t}(C.PureComponent);!function(e){e.Commits="Commits",e.Issues="Issues",e.Contributors="Contributors",e.Tags="Tags",e.Releases="Releases",e.Pull_Requests="Pull_Requests",e.Labels="Labels",e.Repositories="Repositories",e.Organizations="Organizations",e.GraphQL="GraphQL",e.Milestones="Milestones",e.Packages="Packages"}(y||(y={})),function(e){e.NPM="NPM",e.RUBYGEMS="RUBYGEMS",e.MAVEN="MAVEN",e.DOCKER="DOCKER",e.DEBIAN="DEBIAN",e.NUGET="NUGET",e.PYPI="PYPI"}(v||(v={})),function(e){e[e.ClosedAt=0]="ClosedAt",e[e.CreatedAt=1]="CreatedAt",e[e.MergedAt=2]="MergedAt",e[e.None=3]="None"}(b||(b={})),function(e){e[e.CreatedAt=0]="CreatedAt",e[e.ClosedAt=1]="ClosedAt"}(E||(E={}));var k,j,F,S=y.Issues,P=function(e){var t=e.label,n=e.labelWidth,r=void 0===n?8:n,a=e.tooltip,o=e.children;return T.a.createElement(T.a.Fragment,null,T.a.createElement(q.InlineFormLabel,{width:r,className:"query-keyword",tooltip:a},t),o)},R=function(){return T.a.createElement("div",{className:"gf-form gf-form--grow"},T.a.createElement("div",{className:"gf-form-label gf-form-label--grow"}))},I=function(e){var t=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,[]);return T.a.createElement(A,null,T.a.createElement(P,i({},t)))},A=function(e){return T.a.createElement("div",{className:"gf-form-inline"},e.children,T.a.createElement(R,null))},N=function(e){var t=s(Object(C.useState)(e.repository||""),2),n=t[0],r=t[1],a=s(Object(C.useState)(e.owner||""),2),o=a[0],l=a[1];return T.a.createElement(A,null,T.a.createElement(q.InlineFormLabel,{className:"query-keyword",tooltip:"The owner (organization or user) of the GitHub repository (example: 'grafana')",width:K},"Owner"),T.a.createElement(q.Input,{"aria-label":O.QueryEditor.Owner.input,css:"",width:X,value:o,onChange:function(e){return l(e.currentTarget.value)},onBlur:function(t){return e.onChange(i(i({},e),{owner:t.currentTarget.value}))}}),T.a.createElement(q.InlineFormLabel,{className:"query-keyword",tooltip:"The name of the GitHub repository",width:K},"Repository"),T.a.createElement(q.Input,{"aria-label":O.QueryEditor.Repository.input,css:"",width:X,value:n,onChange:function(e){return r(e.currentTarget.value)},onBlur:function(t){return e.onChange(i(i({},e),{repository:t.currentTarget.value}))}}))},Q=function(){return T.a.createElement(T.a.Fragment,null)},_=function(e){var t=s(Object(C.useState)(e.gitRef||""),2),n=t[0],r=t[1];return T.a.createElement(T.a.Fragment,null,T.a.createElement(I,{labelWidth:K,label:"Ref (Branch / Tag)"},T.a.createElement(q.Input,{"aria-label":O.QueryEditor.Ref.input,css:"",width:X,value:n,onChange:function(e){return r(e.currentTarget.value)},onBlur:function(t){return e.onChange(i(i({},e),{gitRef:t.currentTarget.value}))}})))},L=Object.keys(E).filter((function(e,t){return void 0!==E[t]})).map((function(e,t){return{label:""+E[t],value:t}})),M=function(e){var t=s(Object(C.useState)(e.query||""),2),n=t[0],r=t[1];return T.a.createElement(T.a.Fragment,null,T.a.createElement(I,{labelWidth:K,label:"Query",tooltip:"For more information, visit https://docs.github.com/en/github/searching-for-information-on-github/searching-issues-and-pull-requests"},T.a.createElement(q.Input,{css:"",value:n,width:2*X+K,onChange:function(e){return r(e.currentTarget.value)},onBlur:function(t){return e.onChange(i(i({},e),{query:t.currentTarget.value}))}})),T.a.createElement(I,{labelWidth:K,label:"Time Field",tooltip:"The time field to filter on th time range"},T.a.createElement(q.Select,{width:X,options:L,value:e.timeField||0,onChange:function(t){return e.onChange(i(i({},e),{timeField:t.value}))}})))},W=function(e){var t=s(Object(C.useState)(e.query||""),2),n=t[0],r=t[1];return T.a.createElement(T.a.Fragment,null,T.a.createElement(I,{labelWidth:K,label:"Query",tooltip:"Query milestones by title"},T.a.createElement(q.Input,{css:"",value:n,width:2*X+K,onChange:function(e){return r(e.currentTarget.value)},onBlur:function(t){return e.onChange(i(i({},e),{query:t.currentTarget.value}))}})))},G=Object.keys(b).filter((function(e,t){return void 0!==b[t]})).map((function(e,t){return{label:""+b[t],value:t}})),U=G[0].value,B=function(e){var t=s(Object(C.useState)(e.query||""),2),n=t[0],r=t[1];return T.a.createElement(T.a.Fragment,null,T.a.createElement(I,{labelWidth:K,label:"Query",tooltip:"For more information, visit https://docs.github.com/en/github/searching-for-information-on-github/searching-issues-and-pull-requests"},T.a.createElement(q.Input,{css:"",value:n,width:X,onChange:function(e){return r(e.currentTarget.value)},onBlur:function(t){return e.onChange(i(i({},e),{query:t.currentTarget.value}))}})),T.a.createElement(I,{labelWidth:K,label:"Time Field",tooltip:"The time field to filter on the time range. WARNING: If selecting 'None', be mindful of the amount of data being queried. On larger repositories, querying all pull requests could easily cause rate limiting"},T.a.createElement(q.Select,{width:X,options:G,value:e.timeField||U,onChange:function(t){return e.onChange(i(i({},e),{timeField:t.value}))}})))},D=function(){return T.a.createElement(T.a.Fragment,null)},H=function(e){var t=s(Object(C.useState)(e.query||""),2),n=t[0],r=t[1];return T.a.createElement(T.a.Fragment,null,T.a.createElement(I,{labelWidth:K,label:"Query (optional)"},T.a.createElement(q.Input,{css:"",width:X,value:n,onChange:function(e){return r(e.currentTarget.value)},onBlur:function(t){return e.onChange(i(i({},e),{query:t.currentTarget.value}))}})))},J=function(e){var t=s(Object(C.useState)(e.query||""),2),n=t[0],r=t[1];return T.a.createElement(T.a.Fragment,null,T.a.createElement(I,{labelWidth:K,label:"Query (optional)"},T.a.createElement(q.Input,{css:"",width:X,value:n,onChange:function(e){return r(e.currentTarget.value)},onBlur:function(t){return e.onChange(i(i({},e),{query:t.currentTarget.value}))}})))},V=v.NPM,Y=Object.keys(v).map((function(e){return{label:e.replace("/_/gi"," "),value:e}})),z=function(e){var t=s(Object(C.useState)(e.names||""),2),n=t[0],r=t[1];return T.a.createElement(T.a.Fragment,null,T.a.createElement(I,{labelWidth:K,label:"Package type"},T.a.createElement(q.Select,{options:Y,value:e.packageType||V,width:X,onChange:function(t){return e.onChange(i(i({},e),{packageType:t.value}))}})),T.a.createElement(I,{labelWidth:K,label:"Names",tooltip:"Search for packages using a comma delimited list of names"},T.a.createElement(q.Input,{css:"",value:n,width:2*X+K,onChange:function(e){return r(e.currentTarget.value)},onBlur:function(t){return e.onChange(i(i({},e.query),{names:t.currentTarget.value}))}})))},K=10,X=36,Z=((k={})[y.Repositories]={component:function(e,t){return T.a.createElement(T.a.Fragment,null)}},k[y.Labels]={component:function(e,t){return T.a.createElement(J,i({},e.query.options||{},{onChange:t}))}},k[y.Contributors]={component:function(e,t){return T.a.createElement(H,i({},e.query.options||{},{onChange:t}))}},k[y.Tags]={component:function(e,t){return T.a.createElement(D,i({},e.query.options||{}))}},k[y.Releases]={component:function(e,t){return T.a.createElement(Q,i({},e.query.options||{}))}},k[y.Commits]={component:function(e,t){return T.a.createElement(_,i({},e.query.options||{},{onChange:t}))}},k[y.Milestones]={component:function(e,t){return T.a.createElement(W,i({},e.query.options||{},{onChange:t}))}},k[y.Issues]={component:function(e,t){return T.a.createElement(M,i({},e.query.options||{},{onChange:t}))}},k[y.Packages]={component:function(e,t){return T.a.createElement(z,i({},e.query.options||{},{onChange:t}))}},k[y.Pull_Requests]={component:function(e,t){return T.a.createElement(B,i({},e.query.options||{},{onChange:t}))}},k),$=Object.keys(y).map((function(e){return{label:e.replace(/_/gi," "),value:e}})),ee=function(e){var t=Object(C.useCallback)((function(t){e.onChange(t),m(t)&&e.onRunQuery()}),[e]),n=Object(C.useCallback)((function(n,r){var a;t(i(i({},e.query),((a={})[n]=r,a)))}),[t,e.query]),r=Z[e.query.queryType||S],a=e.queryTypes||Object.keys(Z);return T.a.createElement(T.a.Fragment,null,T.a.createElement(I,{label:"Query Type",tooltip:"What resource are you querying for?",labelWidth:K},T.a.createElement(q.Select,{width:X,options:$.filter((function(e){return a.includes(e.value)})),value:e.query.queryType,onChange:function(e){return n("queryType",e.value||S)}})),T.a.createElement(N,{repository:e.query.repository,owner:e.query.owner,onChange:function(n){t(i(i({},e.query),n))}}),r?r.component(e,(function(e){return n("options",e||void 0)})):T.a.createElement("span",null,"Unsupported Query Type"))},te=n(4),ne=Object(te.css)(j||(j=f(["\n  align-items: center;\n"],["\n  align-items: center;\n"]))),re=Object(te.css)(F||(F=f(["\n  margin: 0px 3px;\n  padding: 0px 3px;\n"],["\n  margin: 0px 3px;\n  padding: 0px 3px;\n"]))),ae=function(e){var t=e.onChange,n=e.options,r=e.value,a=e.width,o=e.loading;return T.a.createElement("div",{className:ne+" gf-form-inline"},T.a.createElement(q.Select,{value:r,onChange:function(e){return t(e.value)},width:a,disabled:o,placeholder:o?"Loading...":"Select...",options:n.map((function(e){return{label:e,value:e}}))}),o&&T.a.createElement("div",null,T.a.createElement(q.Spinner,{className:re})))},oe=function(e){var t=e.datasource.name+" - "+(e.query.queryType||S),n=s(Object(C.useState)(),2),r=n[0],a=n[1];return Object(C.useMemo)((function(){return l(void 0,void 0,void 0,(function(){var t;return u(this,(function(n){switch(n.label){case 0:return m(e.query)?(t=a,[4,e.datasource.getChoices(e.query)]):[3,2];case 1:t.apply(void 0,[n.sent()]),n.label=2;case 2:return[2]}}))}))}),[e.query,e.datasource]),T.a.createElement(T.a.Fragment,null,T.a.createElement(ee,{query:e.query,datasource:e.datasource,onChange:function(n){return e.onChange(i(i({},n),{field:e.query.field}),t)},onRunQuery:function(){},queryTypes:[y.Repositories,y.Contributors,y.Tags,y.Releases,y.Labels,y.Milestones]}),T.a.createElement(I,{width:10,labelWidth:10,label:"Display Field",tooltip:"This field determines the text / value used for the variable"},T.a.createElement(ae,{onChange:function(n){return e.onChange(i(i({},e.query),{field:n}),t)},options:r||[],width:64,value:e.query.field,loading:!r})))},ie=n(5),le=function(e){var t=s(Object(C.useState)(),2),n=t[0],r=t[1],a=e.annotation;Object(C.useMemo)((function(){return l(void 0,void 0,void 0,(function(){var t;return u(this,(function(n){switch(n.label){case 0:return m(e.annotation.annotation)?(t=r,[4,e.datasource.getChoices(e.annotation.annotation)]):[3,2];case 1:t.apply(void 0,[n.sent()]),n.label=2;case 2:return[2]}}))}))}),[e.annotation.annotation,e.datasource]);var o=Object(C.useCallback)((function(t){e.change(i(i({},e.annotation),{annotation:i(i(i({},a.annotation),t),{datasource:e.datasource.name})}))}),[e,a.annotation]);return T.a.createElement("div",{"aria-label":O.AnnotationEditor.container},T.a.createElement(ee,{query:a.annotation,datasource:e.datasource,onChange:function(e){return o(i(i({},e),{field:a.annotation.field}))},onRunQuery:function(){},queryTypes:[y.Commits,y.Releases,y.Pull_Requests,y.Issues,y.Milestones,y.Tags]}),m(e.annotation.annotation)&&T.a.createElement(T.a.Fragment,null,T.a.createElement(I,{width:10,labelWidth:10,label:"Display Field",tooltip:"This field determines the text / value displayed on the annotation"},T.a.createElement(ae,{onChange:function(e){return o(i(i({},a.annotation),{field:e}))},options:n||[],width:64,value:a.annotation.field,loading:!n})),T.a.createElement(I,{width:10,labelWidth:10,label:"Time Field",tooltip:"This field is used to determine where the annotation will display on a graph"},T.a.createElement(ae,{onChange:function(e){return o(i(i({},a.annotation),{timeField:e}))},options:n||[],width:64,value:a.annotation.timeField,loading:!n}))))};n.n(ie).a.directive("githubAnnotationEditor",["reactDirective",function(e){return e(le,["annotation","datasource","change"])}]);var ue=n(6),ce={queryType:S,refId:""},se=function(){function e(){var e=this;this.onChange=function(t){e.annotation.annotation=t.annotation},this.annotation.annotation=Object(ue.defaultsDeep)(this.annotation.annotation,ce),this.annotation.datasourceId=this.datasource.id}return e.templateUrl="partials/annotations.editor.html",e}();n.d(t,"plugin",(function(){return fe}));var fe=new r.DataSourcePlugin(w).setConfigEditor(x).setVariableQueryEditor(oe).setQueryEditor(ee).setAnnotationQueryCtrl(se)}])}));
//# sourceMappingURL=module.js.map