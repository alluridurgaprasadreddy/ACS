"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[781],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3314:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={title:"4. Developing the GetPresence API",sidebar_position:1},o=void 0,l={unversionedId:"Take-A-Break-Reminder-App/Developing-Get-Presence-API",id:"Take-A-Break-Reminder-App/Developing-Get-Presence-API",title:"4. Developing the GetPresence API",description:"In this session, we will develop the API that will return the user's presence status. To do this, we will use the Microsoft Graph Client.",source:"@site/docs/Take-A-Break-Reminder-App/04-Developing-Get-Presence-API.md",sourceDirName:"Take-A-Break-Reminder-App",slug:"/Take-A-Break-Reminder-App/Developing-Get-Presence-API",permalink:"/MicrosoftCloud/tutorials/docs/Take-A-Break-Reminder-App/Developing-Get-Presence-API",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"4. Developing the GetPresence API",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"3. Changing [...nextauth].ts file",permalink:"/MicrosoftCloud/tutorials/docs/Take-A-Break-Reminder-App/Changing-NextauthTs-File"},next:{title:"5. Important Changes in the Reminder Page",permalink:"/MicrosoftCloud/tutorials/docs/Take-A-Break-Reminder-App/Important-Changes-Reminder-Page"}},s={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this session, we will develop the API that will return the user's presence status. To do this, we will use the Microsoft Graph ",(0,i.kt)("inlineCode",{parentName:"p"},"Client"),"."),(0,i.kt)("p",null,"But what is GetPresence API in the Microsoft Graph?"),(0,i.kt)("p",null,"The GetPresence API is a Microsoft Graph API that allows you to get the presence status of a user. The presence status can be one of the following: ",(0,i.kt)("inlineCode",{parentName:"p"},"Available"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"AvailableIdle"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Away"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"BeRightBack"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Busy"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"BusyIdle"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"DoNotDisturb"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Offline"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"PresenceUnknown"),".     "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," if you want to know more User Presence API, please, check the following link: ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/graph/api/resources/presence?view=graph-rest-1.0"},"User Presence API"))),(0,i.kt)("p",null,"If you want to see an example of this API, please, check the following link: ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/graph/api/presence-get?view=graph-rest-1.0&tabs=javascript"},"GetPresence"),"."),(0,i.kt)("p",null,"To use this API, we need to install the ",(0,i.kt)("inlineCode",{parentName:"p"},"@microsoft/microsoft-graph-client")," library. To do this, run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @microsoft/microsoft-graph-client\n")),(0,i.kt)("p",null,"Now, let's create a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"getPresence.ts")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"pages/api")," folder and add the following code:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pages/api/getPresence.ts"),":")),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("b",null,"pages/api/getPresence.ts")),(0,i.kt)("br",null),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { getToken, } from "next-auth/jwt";\nimport { Client } from "@microsoft/microsoft-graph-client";\n\nimport type { NextApiRequest, NextApiResponse } from "next"\n\nexport default async function handler(\n  req: NextApiRequest,\n  res: NextApiResponse\n) {\n  const token = await getToken({\n    req,\n  });\n\n  const accessToken = token?.accessToken;\n\n  if (accessToken) {\n    const client = Client.init({\n      authProvider: (done) => done(null, accessToken),\n    });\n\n    const userPresence = await client.api(\'/me/presence\').get();\n\n    res.status(200).json(userPresence);\n  } else {\n    res.status(401).json({ message: "Unauthorized" });\n  }\n}\n'))),(0,i.kt)("br",null),(0,i.kt)("p",null,"Let's understando what is happening in the code above. Firstly, we are importing the ",(0,i.kt)("inlineCode",{parentName:"p"},"getToken")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Client")," from the ",(0,i.kt)("inlineCode",{parentName:"p"},"next-auth/jwt")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@microsoft/microsoft-graph-client")," libraries, respectively. "),(0,i.kt)("p",null,"Then, we are creating a function called ",(0,i.kt)("inlineCode",{parentName:"p"},"handler")," that will receive the ",(0,i.kt)("inlineCode",{parentName:"p"},"req")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"res")," parameters. "),(0,i.kt)("p",null,"In this function, we are using the ",(0,i.kt)("inlineCode",{parentName:"p"},"getToken")," method to get the ",(0,i.kt)("inlineCode",{parentName:"p"},"accessToken")," from the ",(0,i.kt)("inlineCode",{parentName:"p"},"token")," object. After that, we are using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Client")," to initialize the ",(0,i.kt)("inlineCode",{parentName:"p"},"client")," object. "),(0,i.kt)("p",null,"Then, we are using the ",(0,i.kt)("inlineCode",{parentName:"p"},"client")," object to call the ",(0,i.kt)("inlineCode",{parentName:"p"},"getPresence")," API. Finally, we are returning the ",(0,i.kt)("inlineCode",{parentName:"p"},"userPresence")," object to the client."),(0,i.kt)("p",null,"If everything is fine, the code will return status code ",(0,i.kt)("inlineCode",{parentName:"p"},"200")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"userPresence")," object. Otherwise, it will return status code ",(0,i.kt)("inlineCode",{parentName:"p"},"401")," and the message ",(0,i.kt)("inlineCode",{parentName:"p"},"Unauthorized"),"."),(0,i.kt)("p",null,"This file will be very important for the application. Because it will be responsible for returning the user's presence status and also we will make a connection with the client-side in the application to the ",(0,i.kt)("inlineCode",{parentName:"p"},"reminder.tsx")," file!"),(0,i.kt)("p",null,"And it is we will need to make it. Some important changes in the ",(0,i.kt)("inlineCode",{parentName:"p"},"reminder.tsx")," page. Let's go there?"))}u.isMDXComponent=!0}}]);