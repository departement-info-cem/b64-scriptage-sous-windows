"use strict";(self.webpackChunkdepinfo_template=self.webpackChunkdepinfo_template||[]).push([[98],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),p=r,f=d["".concat(l,".").concat(p)]||d[p]||m[p]||o;return n?a.createElement(f,u(u({ref:t},c),{},{components:n})):a.createElement(f,u({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,u=new Array(o);u[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,u[1]=i;for(var s=2;s<o;s++)u[s]=n[s];return a.createElement.apply(null,u)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(67294),r=n(86010);const o={tabItem:"tabItem_Ymn6"};function u(e){let{children:t,hidden:n,className:u}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,u),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(87462),r=n(67294),o=n(86010),u=n(12466),i=n(16550),l=n(91980),s=n(67392),c=n(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=m(e),[u,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[l,s]=f({queryString:n,groupId:a}),[d,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),h=(()=>{const e=l??d;return p({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:u,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),v(e)}),[s,v,o]),tabValues:o}}var h=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,u.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=s[n].value;a!==i&&(d(t),l(a))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:u}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:m},u,{className:(0,o.Z)("tabs__item",b.tabItem,u?.className,{"tabs__item--active":i===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=v(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}},58572:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),o=n(74866),u=n(85162);const i={title:"Jonction au domaine",slug:"ad-jonction-domaine",draft:!1},l="Jonction d'une machine au domaine",s={unversionedId:"tutoriels/t04",id:"tutoriels/t04",title:"Jonction au domaine",description:"Dans ce tutoriel, vous apprendrez comment joindre une machine Windows \xe0 un domaine en utilisant Windows PowerShell.",source:"@site/docs/tutoriels/t04.md",sourceDirName:"tutoriels",slug:"/tutoriels/ad-jonction-domaine",permalink:"/b64-scriptage-sous-windows/tutoriels/ad-jonction-domaine",draft:!1,tags:[],version:"current",frontMatter:{title:"Jonction au domaine",slug:"ad-jonction-domaine",draft:!1},sidebar:"tutoriels",previous:{title:"Zone de recherche inverse",permalink:"/b64-scriptage-sous-windows/tutoriels/dns-zone-recherche-inverse"}},c={},d=[{value:"\xc9tape 1: Changement du nom d&#39;h\xf4te",id:"\xe9tape-1-changement-du-nom-dh\xf4te",level:2},{value:"\xc9tape 2: Configuration IP",id:"\xe9tape-2-configuration-ip",level:2},{value:"\xc9tape 3: Jonction au domaine",id:"\xe9tape-3-jonction-au-domaine",level:2}],m={toc:d},p="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"jonction-dune-machine-au-domaine"},"Jonction d'une machine au domaine"),(0,r.kt)("p",null,"Dans ce tutoriel, vous apprendrez comment joindre une machine Windows \xe0 un domaine en utilisant Windows PowerShell."),(0,r.kt)("h2",{id:"\xe9tape-1-changement-du-nom-dh\xf4te"},"\xc9tape 1: Changement du nom d'h\xf4te"),(0,r.kt)("p",null,"\xc0 l'installation du syst\xe8me d'exploitation, il est d'usage de modifier le nom d'h\xf4te de la machine. Le nom d'h\xf4te de Windows \xe0 son installation est g\xe9n\xe9r\xe9 al\xe9atoirement et il est pr\xe9f\xe9rable que les machines de notre environnement aient un nom repr\xe9sentatif de leur r\xf4le. Il est un bon r\xe9flexe de le faire au tout d\xe9but du processus de montage, car il est plus compliqu\xe9 changer le nom d'un syst\xe8me apr\xe8s sa promotion. Je vous recommande de le faire aussit\xf4t le syst\xe8me d'exploitation install\xe9."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"PowerShell",label:"PowerShell",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'Rename-Computer -NewName "NOUVEAUNOM" -Restart\n'))),(0,r.kt)(u.Z,{value:"Cmd",label:"Cmd",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmd"},"wmic computersystem where caption='%COMPUTERNAME%' rename NOUVEAUNOM\nshutdown /r /t 0\n")))),(0,r.kt)("h2",{id:"\xe9tape-2-configuration-ip"},"\xc9tape 2: Configuration IP"),(0,r.kt)("p",null,"Tout d'abord, assurez-vous que la machine que vous souhaitez joindre \xe0 votre domaine dispose d'une connectivit\xe9 \xe0 au moins un contr\xf4leur de domaine, et surtout que la zone DNS du domaine Active Directory soit r\xe9solvable. G\xe9n\xe9ralement, les r\xe9solveurs correspondent aux adresses IP des contr\xf4leurs de domaine."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Si cet h\xf4te a \xe9t\xe9 configur\xe9 de mani\xe8re statique, assurez-vous de lui configurer un r\xe9solveur appartenant au domaine."),(0,r.kt)("li",{parentName:"ul"},"Si cet h\xf4te a \xe9t\xe9 configur\xe9 par DHCP, assurez-vous que ce dernier lui a configur\xe9 un r\xe9solveur appartenant au domaine (option 6).")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Il ne faut ",(0,r.kt)("strong",{parentName:"p"},"jamais")," configurer des r\xe9solveurs DNS publics sur une machine membre du domaine, comme ",(0,r.kt)("em",{parentName:"p"},"8.8.8.8"),", ",(0,r.kt)("em",{parentName:"p"},"8.8.4.4")," ou ",(0,r.kt)("em",{parentName:"p"},"1.1.1.1"),". Puisque le domaine AD, interne et priv\xe9, n'est pas propag\xe9 dans le DNS public, ces r\xe9solveurs ne seront jamais en mesure de r\xe9soudre le ",(0,r.kt)("em",{parentName:"p"},"namespace")," de votre domaine. Il faut imp\xe9rativement que les clients DNS soient configur\xe9s avec ",(0,r.kt)("strong",{parentName:"p"},"uniquement")," des r\xe9solveurs internes, g\xe9n\xe9ralement les contr\xf4leurs de domaine.")),(0,r.kt)("p",null,"Pour tester la r\xe9solution DNS, vous pouvez lancer la commande suivante:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"PowerShell",label:"PowerShell",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'Resolve-DnsName -Name "ad.mondomaine.com"\n'))),(0,r.kt)(u.Z,{value:"Cmd",label:"Cmd",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nslookup ad.mondomaine.com\n")))),(0,r.kt)("h2",{id:"\xe9tape-3-jonction-au-domaine"},"\xc9tape 3: Jonction au domaine"),(0,r.kt)("p",null,"Pour joindre la machine au domaine, vous pouvez utiliser la commande PowerShell ",(0,r.kt)("inlineCode",{parentName:"p"},"Add-Computer"),". La commande suivante red\xe9marrera automatiquement la machine; si vous ne souhaitez pas qu'elle red\xe9marre maintenant, ne sp\xe9cifiez pas ",(0,r.kt)("inlineCode",{parentName:"p"},"-Restart"),". Sachez cependant que le nouveau nom ne prendra effet qu'apr\xe8s un red\xe9marrage complet de la machine."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'Add-Computer -DomainName "ad.mondomaine.com" -Restart\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"On peut utiliser cette commande pour cr\xe9er le compte ordinateur dans une unit\xe9 d'organisation de notre choix, plut\xf4t que dans le conteneur par d\xe9faut \"computers\". Cela peut s'av\xe9rer utile dans un domaine o\xf9 notre compte n'est pas administrateur de domaine et ne dispose de droits de cr\xe9ation de comptes ordinateurs que dans certains OU sp\xe9cifiques, ou encore pour faire en sorte qu'il re\xe7oive des GPO. "),(0,r.kt)("p",{parentName:"admonition"},"Pour sp\xe9cifier l'OU dans lequel cr\xe9er le compte ordinateur, il suffit de passer le nom distinctif (",(0,r.kt)("em",{parentName:"p"},"DistinguishedName"),") de l'unit\xe9 d'organisation ou du conteneur dans lequel cr\xe9er le nouvel objet."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'$AddComputerSplat = @{\n    DomainName = "ad.mondomaine.com" \n    OUPath = "OU=Dhcp,OU=Serveurs,DC=ad,DC=mondomaine,DC=com"\n}\n\nAdd-Computer @AddComputerSplat\n'))))}f.isMDXComponent=!0}}]);