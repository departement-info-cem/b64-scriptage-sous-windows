"use strict";(self.webpackChunkdepinfo_template=self.webpackChunkdepinfo_template||[]).push([[137],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(a),c=i,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||n;return a?r.createElement(k,l(l({ref:t},p),{},{components:a})):r.createElement(k,l({ref:t},p))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<n;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2429:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var r=a(7462),i=(a(7294),a(3905));const n={title:"Travail pratique 1",slug:"tp1",draft:!1},l="Travail pratique 1 (A2023)",o={unversionedId:"tp/tp1",id:"tp/tp1",title:"Travail pratique 1",description:"Ce TP est \xe0 faire individuellement. Il compte pour 20% de la note du cours. La remise doit obligatoirement se faire par GitHub Classroom.",source:"@site/docs/tp/tp1.md",sourceDirName:"tp",slug:"/tp/tp1",permalink:"/b64-scriptage-sous-windows/tp/tp1",draft:!1,tags:[],version:"current",frontMatter:{title:"Travail pratique 1",slug:"tp1",draft:!1},sidebar:"tp"},s={},u=[{value:"Pr\xe9paration",id:"pr\xe9paration",level:2},{value:"Mandat",id:"mandat",level:2},{value:"Le fichier d\u2019entr\xe9e",id:"le-fichier-dentr\xe9e",level:3},{value:"Comptes utilisateurs",id:"comptes-utilisateurs",level:3},{value:"Lancement du script",id:"lancement-du-script",level:3},{value:"Validation du param\xe8tre",id:"validation-du-param\xe8tre",level:3},{value:"Journalisation",id:"journalisation",level:3},{value:"Consignes de remise",id:"consignes-de-remise",level:2},{value:"Conseils",id:"conseils",level:2},{value:"Crit\xe8res d\u2019\xe9valuation",id:"crit\xe8res-d\xe9valuation",level:2}],p={toc:u},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"travail-pratique-1-a2023"},"Travail pratique 1 (A2023)"),(0,i.kt)("p",null,"Ce TP est \xe0 faire individuellement. Il compte pour ",(0,i.kt)("strong",{parentName:"p"},"20%")," de la note du cours. La remise doit obligatoirement se faire par GitHub Classroom."),(0,i.kt)("h2",{id:"pr\xe9paration"},"Pr\xe9paration"),(0,i.kt)("p",null,"Pour r\xe9aliser ce laboratoire, vous devez minimalement disposer d'un domaine Active Directory. "),(0,i.kt)("p",null,"Voici les \xe9tapes recommand\xe9es (mais si vous avez d\xe9j\xe0 un environnement AD fonctionnel, vous pouvez l'utiliser):"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Montez une passerelle pfSense. Vous pouvez utiliser le mod\xe8le ",(0,i.kt)("inlineCode",{parentName:"p"},"MODELE_pfSense (Sans DHCP)"),", il est d\xe9j\xe0 configur\xe9. Connectez ",(0,i.kt)("strong",{parentName:"p"},"sa deuxi\xe8me interface")," sur l'un de vos VLAN priv\xe9s et d\xe9marrez-le.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Montez un serveur Windows Server dans Labinfo pour agir en tant que contr\xf4leur de domaine. Vous pouvez utiliser le mod\xe8le ",(0,i.kt)("inlineCode",{parentName:"p"},"MODELE_WindowsServer2022_Datacenter_x64_FR")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Connectez son interface \xe0 la m\xeame que la passerelle pfSense."),(0,i.kt)("li",{parentName:"ul"},"Modifiez le nom d'h\xf4te du serveur ",(0,i.kt)("a",{parentName:"li",href:"https://info.cegepmontpetit.ca/b64-scriptage-sous-windows/tutoriels/ad-creation-foret#%C3%A9tape-1-changement-du-nom-dh%C3%B4te"},"[Tutoriel]")),(0,i.kt)("li",{parentName:"ul"},"Configurez le r\xe9seau ",(0,i.kt)("a",{parentName:"li",href:"https://info.cegepmontpetit.ca/b64-scriptage-sous-windows/tutoriels/ad-creation-foret#%C3%A9tape-2-configuration-du-r%C3%A9seau"},"[Tutoriel]")),(0,i.kt)("li",{parentName:"ul"},"Faites la promotion du contr\xf4leur de domaine ",(0,i.kt)("a",{parentName:"li",href:"https://info.cegepmontpetit.ca/b64-scriptage-sous-windows/tutoriels/ad-creation-foret#%C3%A9tape-3-promotion-du-contr%C3%B4leur-de-domaine"},"[Tutoriel]")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Installez le service DHCP sur le contr\xf4leur de domaine ",(0,i.kt)("a",{parentName:"p",href:"https://info.cegepmontpetit.ca/b64-scriptage-sous-windows/tutoriels/installation-dhcp#%C3%A9tape-2-installation-du-r%C3%B4le-de-serveur-dhcp"},"[Tutoriel]"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Cr\xe9ez une zone de recherche inverse sur le DNS ",(0,i.kt)("a",{parentName:"p",href:"https://info.cegepmontpetit.ca/b64-scriptage-sous-windows/tutoriels/dns-zone-recherche-inverse"},"[Tutoriel]"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Joignez votre machine sur laquelle vous avez install\xe9 VS Code au domaine ",(0,i.kt)("a",{parentName:"p",href:"https://info.cegepmontpetit.ca/b64-scriptage-sous-windows/tutoriels/ad-jonction-domaine"},"[Tutoriel]"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Installez les outils RSAT sur votre machine de d\xe9veloppement ",(0,i.kt)("a",{parentName:"p",href:"https://info.cegepmontpetit.ca/b64-scriptage-sous-windows/cours/05#outils-rsat"},"[Tutoriel]"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Si ce n'est pas d\xe9j\xe0 fait, installez l'outil Git sur votre machine de d\xe9veloppement ",(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com/download/win"},"[Lien]")))),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Puis cr\xe9ez une unit\xe9 d'organisation appel\xe9e \"",(0,i.kt)("strong",{parentName:"p"},"Utilisateurs"),'" \xe0 la racine du domaine. ',(0,i.kt)("a",{parentName:"p",href:"https://info.cegepmontpetit.ca/b64-scriptage-sous-windows/cours/05#cr%C3%A9ation-dune-unit%C3%A9-dorganisation"},"[Tutoriel]")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Unit\xe9 d&#39;organisation",src:a(8800).Z,width:"407",height:"210"})))),(0,i.kt)("h2",{id:"mandat"},"Mandat"),(0,i.kt)("p",null,"Vous devez d\xe9velopper un script PowerShell qui vise \xe0 cr\xe9er des utilisateurs ",(0,i.kt)("strong",{parentName:"p"},"du domaine")," en lot. Les utilisateurs \xe0 cr\xe9er sont d\xe9finis dans un fichier CSV."),(0,i.kt)("h3",{id:"le-fichier-dentr\xe9e"},"Le fichier d\u2019entr\xe9e"),(0,i.kt)("p",null,"Le fichier CSV est construit dans le format suivant, s\xe9par\xe9 par des ",(0,i.kt)("strong",{parentName:"p"},"points-virgules")," :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"Prenom";"Nom";"Poste";"NoEmpl";"Admin"\n"Alice";"Robert";"10001";"Non"\n"Bob";"Graton";"10002";"Non"\n"Caroline";"Tremblay";"10003";"Oui"\n"Claude";"Gagnon";"10004";"Non"\n"Denis";"Denis";"10005";"Non"\n')),(0,i.kt)("p",null,"On y trouve le pr\xe9nom, le nom, le poste et le num\xe9ro d\u2019employ\xe9 de chaque utilisateur \xe0 cr\xe9er, ainsi qu\u2019un champ identifiant si l\u2019utilisateur doit \xeatre administrateur du syst\xe8me (oui ou non)."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Notez que je n\u2019exige pas que votre script fonctionne pour les utilisateurs dont le nom de famille est inf\xe9rieur \xe0 4 lettres. Dans mon fichier de correction, tous les utilisateurs ont un nom de famille d\u2019au moins 4 lettres.")),(0,i.kt)("h3",{id:"comptes-utilisateurs"},"Comptes utilisateurs"),(0,i.kt)("p",null,"Votre script devra cr\xe9er un compte sur Active Directory pour chaque utilisateur sp\xe9cifi\xe9 dans ce fichier. Voici les consignes :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Les utilisateurs doivent obligatoirement \xeatre cr\xe9\xe9s dans l'unit\xe9 d'organisation Utilisateurs situ\xe9e \xe0 la racine du domaine. Utilisez la propri\xe9t\xe9 ",(0,i.kt)("strong",{parentName:"p"},"DefaultNamingContext")," de l'objet retourn\xe9 par ",(0,i.kt)("inlineCode",{parentName:"p"},"Get-ADRootDSE")," pour d\xe9terminer dynamiquement le suffixe du nom distinctif.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Le ",(0,i.kt)("strong",{parentName:"p"},"nom d\u2019utilisateur")," doit \xeatre la premi\xe8re lettre du pr\xe9nom et les 4 premi\xe8res du nom de famille, en ",(0,i.kt)("strong",{parentName:"p"},"lettres minuscules"),". (Dans ce travail, il n\u2019y aura pas de noms de famille de moins de 4 caract\xe8res). Les attributs ",(0,i.kt)("strong",{parentName:"p"},"Name"),", ",(0,i.kt)("strong",{parentName:"p"},"sAMAccountName")," et ",(0,i.kt)("strong",{parentName:"p"},"UserPrincipalName")," doivent tous trois porter ce nom.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Le ",(0,i.kt)("strong",{parentName:"p"},"pr\xe9nom")," et le ",(0,i.kt)("strong",{parentName:"p"},"nom")," de l'utilisateur correspond au fichier d'entr\xe9e.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Le ",(0,i.kt)("strong",{parentName:"p"},"nom complet")," de l\u2019utilisateur est son pr\xe9nom suivi de son nom.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"La ",(0,i.kt)("strong",{parentName:"p"},"description")," de l\u2019utilisateur est son num\xe9ro d'employ\xe9..")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Le ",(0,i.kt)("strong",{parentName:"p"},"mot de passe")," doit \xeatre les 2 premi\xe8res lettres du nom de famille en ",(0,i.kt)("strong",{parentName:"p"},"majuscules"),", les 2 premi\xe8res lettres du pr\xe9nom en ",(0,i.kt)("strong",{parentName:"p"},"minuscules"),", suivi du num\xe9ro d\u2019employ\xe9.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"L'utilisateur ",(0,i.kt)("strong",{parentName:"p"},"doit changer son mot de passe")," \xe0 la prochaine ouverture de session.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Si l\u2019utilisateur doit \xeatre ",(0,i.kt)("strong",{parentName:"p"},"admin"),", il doit \xeatre ajout\xe9 au groupe des ",(0,i.kt)("strong",{parentName:"p"},"Admins du domaine"),"."))),(0,i.kt)("p",null,"Si on devait cr\xe9er les utilisateurs manuellement, voici \xe0 quoi ils ressembleraient dans l'interface graphique:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Infos de l&#39;utilisateur",src:a(9392).Z,width:"996",height:"376"})),(0,i.kt)("h3",{id:"lancement-du-script"},"Lancement du script"),(0,i.kt)("p",null,"Le script doit ",(0,i.kt)("strong",{parentName:"p"},"exiger")," un param\xe8tre ",(0,i.kt)("inlineCode",{parentName:"p"},"-Path")," ",(0,i.kt)("strong",{parentName:"p"},"obligatoire")," dans lequel on sp\xe9cifie le chemin du fichier CSV \xe0 charger. Le script doit alors cr\xe9er les utilisateurs selon les param\xe8tres indiqu\xe9s dans le fichier. ",(0,i.kt)("strong",{parentName:"p"},"Le script ne doit rien retourner sur le pipeline et ne doit pas montrer de message d'erreur.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Le param\xe8tre ",(0,i.kt)("inlineCode",{parentName:"strong"},"-Path")," doit aussi pouvoir accepter une valeur \xe0 l'entr\xe9e du pipeline.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Lancement du script",src:a(7580).Z,width:"623",height:"128"})),(0,i.kt)("p",null,"Les comptes ainsi cr\xe9\xe9s devraient \xeatre visibles dans la console Utilisateurs et ordinateurs Active Directory."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"R\xe9sultat dans la console graphique",src:a(2277).Z,width:"540",height:"308"})),(0,i.kt)("h3",{id:"validation-du-param\xe8tre"},"Validation du param\xe8tre"),(0,i.kt)("p",null,"Le script doit planter si le chemin sp\xe9cifi\xe9 en param\xe8tre est invalide. Pour ce faire, vous devez utiliser les ",(0,i.kt)("strong",{parentName:"p"},"fonctionnalit\xe9s de validation des param\xe8tres")," de PowerShell."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Exemple de param\xe8tre non valide",src:a(2464).Z,width:"631",height:"163"})),(0,i.kt)("h3",{id:"journalisation"},"Journalisation"),(0,i.kt)("p",null,"Le script doit aussi garder une trace de toutes les actions qu\u2019il entreprend dans le fichier ",(0,i.kt)("strong",{parentName:"p"},"Import-LocalUsers.log")," :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"D\xe9but du script"),(0,i.kt)("li",{parentName:"ul"},"Traitement d\u2019un utilisateur"),(0,i.kt)("li",{parentName:"ul"},"Cr\xe9ation de l\u2019utilisateur"),(0,i.kt)("li",{parentName:"ul"},"Ajout au groupe d'administration si n\xe9cessaire"),(0,i.kt)("li",{parentName:"ul"},"Fin du script")),(0,i.kt)("p",null,"Chaque ligne doit \xeatre horodat\xe9e (timestamp) dans le format illustr\xe9, avec une pr\xe9cision en millisecondes. Cette fonctionnalit\xe9 doit \xeatre r\xe9alis\xe9e au moyen d\u2019une ",(0,i.kt)("strong",{parentName:"p"},"fonction"),", et cette derni\xe8re doit avoir un maximum d\u2019autonomie. Par ailleurs, le fichier doit \xeatre situ\xe9 sous ",(0,i.kt)("strong",{parentName:"p"},"C:","\\","Users","\\",(0,i.kt)("em",{parentName:"strong"},"utilisateur"),"\\","AppData","\\","Local","\\","Temp","\\","Import-ADUsers","\\")," (celui-ci doit \xeatre cr\xe9\xe9 automatiquement s\u2019il n\u2019existe pas). Vous devez utiliser au maximum les variables d\u2019environnement offertes par Windows. ",(0,i.kt)("strong",{parentName:"p"},"La logique de cr\xe9ation automatique de r\xe9pertoire devrait se trouver dans la fonction de journalisation.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Exemple de fichier log",src:a(6240).Z,width:"720",height:"335"})),(0,i.kt)("admonition",{title:"BONUS! (10%)",type:"info"},(0,i.kt)("h3",{parentName:"admonition",id:"gestion-des-conflits-de-nom"},"Gestion des conflits de nom"),(0,i.kt)("p",{parentName:"admonition"},"Lors du traitement des utilisateurs, il se peut qu\u2019il y ait plusieurs utilisateurs qui portent des noms semblables, qui auraient des noms d\u2019utilisateurs identiques. Programmez la logique n\xe9cessaire dans votre script pour que si un nom d\u2019utilisateur doit \xeatre identique \xe0 un existant, il doit \xeatre suivi d\u2019un 1, puis d'un 2, puis d\u2019un 3, et ainsi de suite, comme illustr\xe9 ci-dessous."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("img",{alt:"Conflits de noms",src:a(3301).Z,width:"660",height:"183"})),(0,i.kt)("p",{parentName:"admonition"},"Une impl\xe9mentation de cette fonctionnalit\xe9 pourrait vous valoir 10% en points bonis!")),(0,i.kt)("h2",{id:"consignes-de-remise"},"Consignes de remise"),(0,i.kt)("p",null,"Vous devez remettre ce travail sur GitHub. Vous \xeates libres d\u2019utiliser le client Git de votre choix (VS Code, GitKraken, GitHub Desktop, SourceTree, git cli, etc.) ou m\xeame simplement t\xe9l\xe9charger vos fichiers par l'interface Web."),(0,i.kt)("h2",{id:"conseils"},"Conseils"),(0,i.kt)("p",null,"Voici quelques conseils qui pourraient vous aider \xe0 mener \xe0 bien ce travail :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Avant de commencer \xe0 coder, d\xe9crivez les \xe9tapes en pseudo-code pour d\xe9terminer la logique g\xe9n\xe9rale du script. Vous pourrez ensuite ","\xab","\xa0","traduire","\xa0","\xbb"," ce pseudo-code en PowerShell, \xe9tape par \xe9tape."),(0,i.kt)("li",{parentName:"ul"},"Utilisez une machine virtuelle pour tester votre script. Vous pouvez installer VS Code sur votre VM pour d\xe9velopper votre script."),(0,i.kt)("li",{parentName:"ul"},"Utilisez le param\xe8tre ",(0,i.kt)("inlineCode",{parentName:"li"},"-WhatIf")," pour tester votre script sans qu\u2019une action r\xe9elle ne soit pos\xe9e."),(0,i.kt)("li",{parentName:"ul"},"Faites-vous un petit script de nettoyage pour effacer les utilisateurs cr\xe9\xe9s en trop."),(0,i.kt)("li",{parentName:"ul"},"Utilisez GitHub \xe0 votre avantage. D\xe8s que vous avez r\xe9ussi quelque chose dans votre script, faites un commit et un push dans GitHub. Vous pourrez ainsi profiter de l\u2019historique."),(0,i.kt)("li",{parentName:"ul"},"Testez des parties de votre script au lieu de lancer le script au complet \xe0 chaque fois. N\u2019h\xe9sitez pas \xe0 tester les commandes toutes seules, d\xe9finir des variables manuellement pour tester, etc.")),(0,i.kt)("h2",{id:"crit\xe8res-d\xe9valuation"},"Crit\xe8res d\u2019\xe9valuation"),(0,i.kt)("p",null,"Le script sera \xe9valu\xe9 selon les crit\xe8res suivants :"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Crit\xe8re d'\xe9valuation"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Pond\xe9ration"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Conception et fonctionnement g\xe9n\xe9ral"),(0,i.kt)("td",{parentName:"tr",align:"right"},"10%")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Param\xe8tres du script"),(0,i.kt)("td",{parentName:"tr",align:"right"},"10%")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Traitement du fichier d\u2019entr\xe9e"),(0,i.kt)("td",{parentName:"tr",align:"right"},"10%")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Cr\xe9ation des utilisateurs"),(0,i.kt)("td",{parentName:"tr",align:"right"},"40%")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Journalisation"),(0,i.kt)("td",{parentName:"tr",align:"right"},"15%")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Lisibilit\xe9 et documentation"),(0,i.kt)("td",{parentName:"tr",align:"right"},"10%")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Respect des consignes"),(0,i.kt)("td",{parentName:"tr",align:"right"},"5%")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Total")),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"100%"))))),(0,i.kt)("p",null,"Voici les d\xe9tails de ce qui sera \xe9valu\xe9 pour chaque crit\xe8re:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Conception et fonctionnement g\xe9n\xe9ral ","[10%]"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Le script fonctionne du premier coup"),(0,i.kt)("li",{parentName:"ul"},"Aucune erreur n\u2019est affich\xe9e pendant l\u2019ex\xe9cution"),(0,i.kt)("li",{parentName:"ul"},"Logique g\xe9n\xe9rale du script (pas de code inutile ou redondant)"),(0,i.kt)("li",{parentName:"ul"},"Respect des bonnes pratiques de programmation"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Param\xe8tres du script ","[10%]"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"D\xe9finition des param\xe8tres conformes \xe0 l\u2019\xe9nonc\xe9"),(0,i.kt)("li",{parentName:"ul"},"Param\xe8tre obligatoire"),(0,i.kt)("li",{parentName:"ul"},"Validation de l\u2019existence du fichier en entr\xe9e"),(0,i.kt)("li",{parentName:"ul"},"Traitement du param\xe8tre par l\u2019entr\xe9e du pipeline"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Traitement du fichier d\u2019entr\xe9e ","[10%]"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Lecture juste du fichier CSV en entr\xe9e"),(0,i.kt)("li",{parentName:"ul"},"Utilisation des commandes et param\xe8tres appropri\xe9s"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Cr\xe9ation des utilisateurs ","[40%]"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Cr\xe9ation correcte des comptes utilisateurs locaux"),(0,i.kt)("li",{parentName:"ul"},"Les attributs sont conformes \xe0 l'\xe9nonc\xe9"),(0,i.kt)("li",{parentName:"ul"},"Utilisation ad\xe9quates des commandes"),(0,i.kt)("li",{parentName:"ul"},"Ajout des comptes admin au groupe des administrateurs du domaine"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Journalisation ","[15%]"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\xc9criture des \xe9tapes d\u2019ex\xe9cution dans un fichier log"),(0,i.kt)("li",{parentName:"ul"},"Emploi d\u2019une fonction de journalisation"),(0,i.kt)("li",{parentName:"ul"},"Autonomie de la fonction"),(0,i.kt)("li",{parentName:"ul"},"Emplacement du fichier log conforme \xe0 la demande"),(0,i.kt)("li",{parentName:"ul"},"Utilisation ad\xe9quate des variables d\u2019environnement"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Lisibilit\xe9 et documentation ","[10%]"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Choix judicieux des noms de variables et de fonctions"),(0,i.kt)("li",{parentName:"ul"},"Utilisation judicieuse des commentaires"),(0,i.kt)("li",{parentName:"ul"},"Indentation correcte"),(0,i.kt)("li",{parentName:"ul"},"Propret\xe9 du code"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Respect des consignes ","[5%]"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Remise du script sur GitHub tel que demand\xe9"),(0,i.kt)("li",{parentName:"ul"},"Nom du script et des param\xe8tres tel que demand\xe9")))))}m.isMDXComponent=!0},3301:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/conflit_noms-edce542b2a905d294f06ba2e866c7d5c.png"},2464:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/erreur_validation-57dec8cf6fb8bc406bbeb6fb6a1f1d45.png"},7580:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/execution-a69d734cb47d81466438896c503370c3.png"},6240:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/fichier_log-943280fc6f3ddeae611f76d200d98e58.png"},9392:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/info_utilisateur-ebb01369861147911616c761dfe337b9.png"},2277:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/resultat_gui-e319a2f999f052174dc697d918a11e8b.png"},8800:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/unite_organisation-41887e67fed56356e6f100b4c95ebe58.png"}}]);