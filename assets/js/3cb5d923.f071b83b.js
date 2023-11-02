"use strict";(self.webpackChunkdepinfo_template=self.webpackChunkdepinfo_template||[]).push([[24],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,v=p["".concat(l,".").concat(m)]||p[m]||c[m]||o;return n?r.createElement(v,i(i({ref:t},d),{},{components:n})):r.createElement(v,i({ref:t},d))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63547:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={title:"Installation de DHCP",slug:"installation-dhcp",draft:!1},i="Installation du service DHCP",s={unversionedId:"tutoriels/t02",id:"tutoriels/t02",title:"Installation de DHCP",description:"Dans ce tutoriel, vous apprendrez comment installer et configurer le r\xf4le DHCP sur un serveur Windows.",source:"@site/docs/tutoriels/t02.md",sourceDirName:"tutoriels",slug:"/tutoriels/installation-dhcp",permalink:"/b64-scriptage-sous-windows/tutoriels/installation-dhcp",draft:!1,tags:[],version:"current",frontMatter:{title:"Installation de DHCP",slug:"installation-dhcp",draft:!1},sidebar:"tutoriels",previous:{title:"Cr\xe9ation d'une for\xeat AD",permalink:"/b64-scriptage-sous-windows/tutoriels/ad-creation-foret"},next:{title:"Zone de recherche inverse",permalink:"/b64-scriptage-sous-windows/tutoriels/dns-zone-recherche-inverse"}},l={},u=[{value:"\xc9tape 1: Choix du serveur",id:"\xe9tape-1-choix-du-serveur",level:2},{value:"\xc9tape 2: Installation du r\xf4le de serveur DHCP",id:"\xe9tape-2-installation-du-r\xf4le-de-serveur-dhcp",level:2},{value:"\xc9tape 3: Activation du serveur dans ADDS",id:"\xe9tape-3-activation-du-serveur-dans-adds",level:2},{value:"\xc9tape 4: Configuration des mises \xe0 jour DNS",id:"\xe9tape-4-configuration-des-mises-\xe0-jour-dns",level:2},{value:"\xc9tape 5: Configuration des \xe9tendues",id:"\xe9tape-5-configuration-des-\xe9tendues",level:2},{value:"Cr\xe9ation de l&#39;\xe9tendue",id:"cr\xe9ation-de-l\xe9tendue",level:3},{value:"Ajout d&#39;options d&#39;\xe9tendue",id:"ajout-doptions-d\xe9tendue",level:3},{value:"Activation de l&#39;\xe9tendue",id:"activation-de-l\xe9tendue",level:3},{value:"\xc9tape 6: Nettoyage du gestionnaire de serveur",id:"\xe9tape-6-nettoyage-du-gestionnaire-de-serveur",level:2}],d={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation-du-service-dhcp"},"Installation du service DHCP"),(0,a.kt)("p",null,"Dans ce tutoriel, vous apprendrez comment installer et configurer le r\xf4le DHCP sur un serveur Windows."),(0,a.kt)("h2",{id:"\xe9tape-1-choix-du-serveur"},"\xc9tape 1: Choix du serveur"),(0,a.kt)("p",null,"La premi\xe8re \xe9tape consiste \xe0 choisir sur quel serveur le service DHCP devra \xeatre instal\xe9. "),(0,a.kt)("p",null,"Dans un environnement de domaine Active Directory, on a avantage \xe0 installer le service sur un serveur membre afin de profiter des avantages que procurent les services de domaine. "),(0,a.kt)("p",null,"Dans un environnement de production, on tend \xe0 \xe9viter d'installer ce r\xf4le sur un contr\xf4leur de domaine pour des raisons de s\xe9curit\xe9, mais dans ce tutoriel, puisqu'il s'agit d'un environnement de laboratoire, nous l'installerons sur le contr\xf4leur de domaine."),(0,a.kt)("h2",{id:"\xe9tape-2-installation-du-r\xf4le-de-serveur-dhcp"},"\xc9tape 2: Installation du r\xf4le de serveur DHCP"),(0,a.kt)("p",null,"On doit d'abord installer le r\xf4le ",(0,a.kt)("em",{parentName:"p"},"Serveur DHCP")," sur le serveur. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Install-WindowsFeature -Name DHCP -IncludeManagementTools\n")),(0,a.kt)("p",null,"Cette commande proc\xe8de \xe9galement \xe0 l'installation des outils de gestion (RSAT) n\xe9cessaires pour l'administration du service DHCP. Ces outils comprennent le module PowerShell ",(0,a.kt)("inlineCode",{parentName:"p"},"DhcpServer")," comprenant de nombreuses commandes permettant de contr\xf4ler ce service. Il suffit d'importer ce module \xe0 votre session PowerShell (ou votre script) pour obtenir l'acc\xe8s \xe0 ces commandes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Import-Module -Name DhcpServer\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Vous pouvez voir la liste de toutes les commandes incluses dans ce module avec cette commande:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Get-Command -Module DhcpServer\n"))),(0,a.kt)("h2",{id:"\xe9tape-3-activation-du-serveur-dans-adds"},"\xc9tape 3: Activation du serveur dans ADDS"),(0,a.kt)("p",null,"Si vous installez un serveur DHCP dans un domaine Active Directory, celui-ci doit obligatoirement \xeatre approuv\xe9 dans le domaine. Cette op\xe9ration doit \xeatre faite par un administrateur du domaine et doit sp\xe9cifier le nom DNS du serveur qui h\xe9bergera le service DHCP ainsi que son adresse IP."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'Add-DhcpServerInDC -DnsName "DC01.ad.mondomaine.com" -IPAddress "192.168.21.10"\n')),(0,a.kt)("h2",{id:"\xe9tape-4-configuration-des-mises-\xe0-jour-dns"},"\xc9tape 4: Configuration des mises \xe0 jour DNS"),(0,a.kt)("p",null,"Le serveur DHCP de Windows est capable de communiquer avec le DNS afin d'enregistrer automatiquement les h\xf4tes qui obtiennent une adresse. Ce n'est pas obligatoire, mais dans un environnement de domaine, c'est souvent souhaitable."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Set-DhcpServerv4DnsSetting -DynamicUpdates Always -DeleteDnsRRonLeaseExpiry $True\n")),(0,a.kt)("h2",{id:"\xe9tape-5-configuration-des-\xe9tendues"},"\xc9tape 5: Configuration des \xe9tendues"),(0,a.kt)("p",null,"Pour la configuration des \xe9tendues, les commandes \xe0 utiliser d\xe9pendent fortement de la topologie du r\xe9seau. Voici les \xe9tapes pour un environnement de laboratoire simple \xe0 un seul segment (plat). "),(0,a.kt)("h3",{id:"cr\xe9ation-de-l\xe9tendue"},"Cr\xe9ation de l'\xe9tendue"),(0,a.kt)("p",null,"Dans notre exemple, puisque le segment r\xe9seau contient \xe0 la fois des h\xf4tes dont l'adresse IP est assign\xe9e de mani\xe8re statique et des h\xf4tes dont elle est assign\xe9e dynamiquement, nous d\xe9finissons une \xe9tendue dont la plage d'adresses va de ",(0,a.kt)("em",{parentName:"p"},".100")," \xe0 ",(0,a.kt)("em",{parentName:"p"},".254"),", et on laisse le reste des adresses hors de l'\xe9tendue pour les assignations statiques. Aussi, nous sp\xe9cifions un \xe9tat ",(0,a.kt)("strong",{parentName:"p"},"inactif"),"; on l'activera une fois sa configuration compl\xe9t\xe9e."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'$DhcpScopeSplat = @{\n    Name       = "Mon\xc9tendue"\n    StartRange = "192.168.21.100"\n    EndRange   = "192.168.21.254"\n    SubnetMask = "255.255.255.0"\n    State      = "Inactive"\n}\n\nAdd-DhcpServerv4Scope @DhcpScopeSplat\n')),(0,a.kt)("h3",{id:"ajout-doptions-d\xe9tendue"},"Ajout d'options d'\xe9tendue"),(0,a.kt)("p",null,"On souhaite \xe9galement ajouter \xe0 cette \xe9tendue certaines options, notamment:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"La passerelle par d\xe9faut (option 3)"),(0,a.kt)("li",{parentName:"ul"},"Le(s) r\xe9solveur(s) DNS (option 6)"),(0,a.kt)("li",{parentName:"ul"},"Le nom de domaine DNS (option 15)")),(0,a.kt)("p",null,"Notez que la valeur de ",(0,a.kt)("inlineCode",{parentName:"p"},"ScopeId")," correspond \xe0 ",(0,a.kt)("strong",{parentName:"p"},"l'adresse r\xe9seau")," de l'\xe9tendue."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'$DhcpScopeOptionSplat = @{\n    ScopeId   = "192.168.21.0"\n    Router    = "192.168.21.1"\n    DnsServer = "192.168.21.10"\n    DnsDomain = "ad.mondomaine.com"\n}\n\nSet-DhcpServerv4OptionValue @DhcpScopeOptionSplat\n')),(0,a.kt)("h3",{id:"activation-de-l\xe9tendue"},"Activation de l'\xe9tendue"),(0,a.kt)("p",null,"Finalement, une fois la configuration de l'\xe9tendue termin\xe9e, on peut activer cette derni\xe8re."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Set-DhcpServerv4Scope -ScopeId 192.168.21.0 -State Active\n")),(0,a.kt)("h2",{id:"\xe9tape-6-nettoyage-du-gestionnaire-de-serveur"},"\xc9tape 6: Nettoyage du gestionnaire de serveur"),(0,a.kt)("p",null,"Cette derni\xe8re \xe9tape n'est pas directement en lien avec le service DHCP, mais plut\xf4t avec le gestionnaire de serveur. Lorsqu'on installe le r\xf4le DHCP, le gestionnaire de serveur de Windows affiche un petit drapeau pour nous inciter \xe0 activer et configurer le serveur. Comme nous configurons le service par PowerShell, cette notification n'est pas n\xe9cessaire et peut m\xeame induire en erreur, en laissant faussement croire qu'il reste une \xe9tape \xe0 effectuer. Il suffit alors d'inscrire au registre que cette op\xe9ration a \xe9t\xe9 effectu\xe9e. "),(0,a.kt)("p",null,"Cette op\xe9ration n'est pas obligatoire, mais elle est souhaitable dans la mesure o\xf9 on utilise le gestionnaire de serveur."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'$ServerMgrCleanupSplat = @{\n    Path  = "registry::HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\ServerManager\\Roles\\12"\n    Name  = "ConfigurationState"\n    Value = 2\n}\n\nSet-ItemProperty @ServerMgrCleanupSplat\n')))}c.isMDXComponent=!0}}]);