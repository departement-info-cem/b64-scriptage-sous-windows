"use strict";(self.webpackChunkdepinfo_template=self.webpackChunkdepinfo_template||[]).push([[225],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),p=a,f=d["".concat(u,".").concat(p)]||d[p]||m[p]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(7462),a=n(7294),o=n(6010),i=n(2466),s=n(6550),u=n(1980),l=n(7392),c=n(12);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=m(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,l]=f({queryString:n,groupId:r}),[d,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),v=(()=>{const e=u??d;return p({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{v&&s(v)}),[v]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),l(e),h(e)}),[l,h,o]),tabValues:o}}var v=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:s,selectValue:u,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),r=l[n].value;r!==s&&(d(t),u(r))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},l.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:m},i,{className:(0,o.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=h(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},a.createElement(g,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function w(e){const t=(0,v.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},9792:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905)),o=n(4866),i=n(5162);const s={title:"Zone de recherche inverse",slug:"dns-zone-recherche-inverse",draft:!1},u="Cr\xe9ation d'une zone de recherche inverse",l={unversionedId:"tutoriels/t03",id:"tutoriels/t03",title:"Zone de recherche inverse",description:"Les services de domaine Active Directory ont une forte d\xe9pendance \xe0 DNS. C'est par ce protocole que les h\xf4tes membres du domaine arrivent, entre autres, \xe0 joindre un contr\xf4leur de domaine. Tout domaine Active Directory doit \xeatre autoritaire d'une zone de recherche directe afin d'y publier les diff\xe9rentes entr\xe9es A et SRV n\xe9cessaires \xe0 son bon fonctionnement. G\xe9n\xe9ralement, on configure un serveur DNS sur chaque contr\xf4leur de domaine afin qu'il puisse h\xe9berger une copie de cette zone, qui sera synchronis\xe9e entre tous les serveurs DNS par le biais du m\xe9canisme de r\xe9plication inh\xe9rent \xe0 Active Directory.",source:"@site/docs/tutoriels/t03.md",sourceDirName:"tutoriels",slug:"/tutoriels/dns-zone-recherche-inverse",permalink:"/b64-scriptage-sous-windows/tutoriels/dns-zone-recherche-inverse",draft:!1,tags:[],version:"current",frontMatter:{title:"Zone de recherche inverse",slug:"dns-zone-recherche-inverse",draft:!1},sidebar:"tutoriels",previous:{title:"Installation de DHCP",permalink:"/b64-scriptage-sous-windows/tutoriels/installation-dhcp"},next:{title:"Jonction au domaine",permalink:"/b64-scriptage-sous-windows/tutoriels/ad-jonction-domaine"}},c={},d=[{value:"Cr\xe9ation de la zone de recherche inverse",id:"cr\xe9ation-de-la-zone-de-recherche-inverse",level:2},{value:"Enregistrement des clients",id:"enregistrement-des-clients",level:2},{value:"V\xe9rification",id:"v\xe9rification",level:2}],m={toc:d},p="wrapper";function f(e){let{components:t,...s}=e;return(0,a.kt)(p,(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cr\xe9ation-dune-zone-de-recherche-inverse"},"Cr\xe9ation d'une zone de recherche inverse"),(0,a.kt)("p",null,"Les services de domaine Active Directory ont une forte d\xe9pendance \xe0 DNS. C'est par ce protocole que les h\xf4tes membres du domaine arrivent, entre autres, \xe0 joindre un contr\xf4leur de domaine. Tout domaine Active Directory doit \xeatre autoritaire d'une zone de recherche directe afin d'y publier les diff\xe9rentes entr\xe9es A et SRV n\xe9cessaires \xe0 son bon fonctionnement. G\xe9n\xe9ralement, on configure un serveur DNS sur chaque contr\xf4leur de domaine afin qu'il puisse h\xe9berger une copie de cette zone, qui sera synchronis\xe9e entre tous les serveurs DNS par le biais du m\xe9canisme de r\xe9plication inh\xe9rent \xe0 Active Directory."),(0,a.kt)("p",null,"Une zone de recherche directe permet notamment de r\xe9soudre un nom d'h\xf4te faisant partie de cette zone pour en conna\xeetre l'adresse IP num\xe9rique. Mais en plus de la zone de recherche directe, on peut, optionnellement, configurer une zone de recherche inverse. Cette derni\xe8re permet l'op\xe9ration inverse, c'est-\xe0-dire obtenir le nom de domaine \xe0 partir d'une adresse IP num\xe9rique. La r\xe9solution inverse est particuli\xe8rement int\xe9ressante dans un environnement d'entreprise."),(0,a.kt)("p",null,"Dans ce tutoriel, vous apprendrez comment ajouter une zone de recherche inverse dans un serveur DNS."),(0,a.kt)("h2",{id:"cr\xe9ation-de-la-zone-de-recherche-inverse"},"Cr\xe9ation de la zone de recherche inverse"),(0,a.kt)("p",null,"Alors qu'une zone de recherche directe est nomm\xe9e en fonction de son espace de nommage DNS, une zone de recherche inverse est nomm\xe9e en fonction de son adresse r\xe9seau num\xe9rique."),(0,a.kt)("p",null,"L'ajout d'une zone de recherche inverse ne tient souvent qu'\xe0 une seule commande. Il suffit de lui procurer son adresse r\xe9seau num\xe9rique (avec son masque en notation CIDR) ainsi que la port\xe9e de r\xe9plication, qui peut \xeatre le domaine, la for\xeat, ou autres."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'Add-DnsServerPrimaryZone -NetworkID "192.168.21.0/24" -ReplicationScope "Forest"\n')),(0,a.kt)("h2",{id:"enregistrement-des-clients"},"Enregistrement des clients"),(0,a.kt)("p",null,"Une fois la zone cr\xe9\xe9e, elle est vide (hormis les enregistrements NS et SOA). Chaque association entre une adresse IP num\xe9rique et un nom d'h\xf4te devra faire l'objet d'un enregistrement PTR, soit en quelque sorte l'inverse d'un enregistrement A. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Zone de recherche inverse",src:n(4227).Z,width:"604",height:"239"})),(0,a.kt)("p",null,"On peut cr\xe9er ces enregistrements de mani\xe8re statique avec la commande ",(0,a.kt)("inlineCode",{parentName:"p"},"Add-DnsServerResourceRecordPtr"),", mais g\xe9n\xe9ralement, dans un environnement d'entreprise, les h\xf4tes membres du domaine mettent \xe0 jour automatiquement leur enregistrement PTR tout comme leur enregistrement A. Un serveur DHCP peut \xe9galement mettre \xe0 jour les enregistrements des l'h\xf4tes auxquels il assigne des baux, si celui-ci est configur\xe9 pour le faire."),(0,a.kt)("p",null,"La plupart du temps, les h\xf4tes vont \xe9ventuellement mettre \xe0 jour leur enregistrement PTR. Ce processus est automatique, mais se fait lors de l'assignation d'une adresse IP. Dans les minutes qui suivent la cr\xe9ation de la zone de recherche inverse, il se peut que tous les h\xf4tes du r\xe9seau n'aient pas eu le temps de cr\xe9er leur enregistrement PTR. On peut forcer l'enregistrement."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"PowerShell",label:"PowerShell",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Register-DnsClient\n"))),(0,a.kt)(i.Z,{value:"Cmd",label:"Cmd",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ipconfig /registerdns\n")))),(0,a.kt)("h2",{id:"v\xe9rification"},"V\xe9rification"),(0,a.kt)("p",null,"On peut effectuer une r\xe9solution inverse de la m\xeame mani\xe8re qu'une r\xe9solution directe, mais en fournissant une adresse IP num\xe9rique au lieu du nom de domaine, \xe0 l'aide des commandes ",(0,a.kt)("inlineCode",{parentName:"p"},"Resolve-DnsName")," en PowerShell, ou ",(0,a.kt)("inlineCode",{parentName:"p"},"nslookup")," \xe0 l'invite de commande classique."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Resolve-DnsName",src:n(5388).Z,width:"882",height:"246"})),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Lorsqu'on teste une adresse IP num\xe9rique avec la commande Ping, on peut lui demander de tenter une r\xe9solution inverse en activant le switch ",(0,a.kt)("inlineCode",{parentName:"p"},"-a"),"."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("img",{alt:"ping -a",src:n(3435).Z,width:"806",height:"164"}))))}f.isMDXComponent=!0},3435:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/reversedns-ping-4371bac4770d0dba8413f536130152fa.png"},5388:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/reversedns-resolution-c16b53ab27862ad7cfd7e619fc937fec.png"},4227:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/reversedns-437cf11cdf40c15a0f85949ecd2f65ff.png"}}]);