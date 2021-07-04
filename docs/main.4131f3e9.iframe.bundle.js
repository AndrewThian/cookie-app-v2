(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{468:function(module,exports){module.exports={purge:["./pages/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}"],darkMode:!1,theme:{fontWeight:{normal:400,medium:500},fontSize:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.5rem",xl:"2rem",xxl:"2.5rem"},extend:{colors:{blue:{400:"#2D3CFD",300:"#BDCDF6",200:"#F1F5FF"},green:{400:"#52C851",300:"#83E182",200:"#C2F5C1"},yellow:{400:"#FFD66B",300:"#FFE7A7",200:"#FFF2D0"},grey:{400:"#343A40",300:"#6E6E83",200:"#C3C3D4",100:"#EAEBF0"},pink:{400:"#FD2D78",300:"#FFC7DB",200:"#FFEDF3"}}}},variants:{extend:{}},plugins:[]}},490:function(module,exports,__webpack_require__){__webpack_require__(491),__webpack_require__(647),__webpack_require__(648),__webpack_require__(890),__webpack_require__(888),__webpack_require__(892),__webpack_require__(893),__webpack_require__(891),__webpack_require__(889),__webpack_require__(894),__webpack_require__(895),module.exports=__webpack_require__(839)},558:function(module,exports){},648:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(341)},835:function(module,exports,__webpack_require__){var api=__webpack_require__(836),content=__webpack_require__(837);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},837:function(module,exports,__webpack_require__){(exports=__webpack_require__(838)(!1)).push([module.i,"/*! tailwindcss v2.1.2 | MIT License | https://tailwindcss.com */\n\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\n/**\nAdd the correct font size in all browsers.\n*/\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\n/**\n * Work around a Firefox/IE bug where the transparent `button` background\n * results in a loss of the default `button` focus styles.\n */\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\n/**\n * Make replaced elements `display: block` by default as that's\n * the behavior you want almost all of the time. Inspired by\n * CSS Remedy, with `svg` added as well.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\n* {\n  --tw-shadow: 0 0 #0000;\n}\n\n* {\n  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n}\n\n@-webkit-keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes ping {\n  75%, 100% {\n    transform: scale(2);\n    opacity: 0;\n  }\n}\n\n@keyframes ping {\n  75%, 100% {\n    transform: scale(2);\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes pulse {\n  50% {\n    opacity: .5;\n  }\n}\n\n@keyframes pulse {\n  50% {\n    opacity: .5;\n  }\n}\n\n@-webkit-keyframes bounce {\n  0%, 100% {\n    transform: translateY(-25%);\n    -webkit-animation-timing-function: cubic-bezier(0.8,0,1,1);\n            animation-timing-function: cubic-bezier(0.8,0,1,1);\n  }\n\n  50% {\n    transform: none;\n    -webkit-animation-timing-function: cubic-bezier(0,0,0.2,1);\n            animation-timing-function: cubic-bezier(0,0,0.2,1);\n  }\n}\n\n@keyframes bounce {\n  0%, 100% {\n    transform: translateY(-25%);\n    -webkit-animation-timing-function: cubic-bezier(0.8,0,1,1);\n            animation-timing-function: cubic-bezier(0.8,0,1,1);\n  }\n\n  50% {\n    transform: none;\n    -webkit-animation-timing-function: cubic-bezier(0,0,0.2,1);\n            animation-timing-function: cubic-bezier(0,0,0.2,1);\n  }\n}\n\n@media (min-width: 640px) {\n}\n\n@media (min-width: 768px) {\n}\n\n@media (min-width: 1024px) {\n}\n\n@media (min-width: 1280px) {\n}\n\n@media (min-width: 1536px) {\n}",""]),module.exports=exports},839:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(341).configure)([__webpack_require__(840),__webpack_require__(885)],module,!1)}).call(this,__webpack_require__(134)(module))},840:function(module,exports,__webpack_require__){var map={"./components/Introduction.stories.mdx":896};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=840},885:function(module,exports,__webpack_require__){var map={"./components/Button/Button.stories.tsx":897,"./components/Dropdown/Dropdown.stories.tsx":898};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=885},895:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__(15),__webpack_require__(30),__webpack_require__(47),__webpack_require__(833),__webpack_require__(38),__webpack_require__(39),__webpack_require__(834),__webpack_require__(431),__webpack_require__(432);var client_api=__webpack_require__(903),esm=__webpack_require__(5),parameters=(__webpack_require__(835),{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}});function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.b)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.c)(loader,!1)}));case"parameters":return Object(client_api.d)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.d)(v,!1);default:return console.log(key+" was not supported :( !")}}))},896:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(8),__webpack_require__(15),__webpack_require__(21),__webpack_require__(30),__webpack_require__(0);var esm=__webpack_require__(13),blocks=__webpack_require__(50),resolveConfig=__webpack_require__(467),resolveConfig_default=__webpack_require__.n(resolveConfig),tailwind_config=__webpack_require__(468),tailwind_config_default=__webpack_require__.n(tailwind_config),theme=resolveConfig_default()(tailwind_config_default.a).theme;function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,["components"]);return Object(esm.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.b)(blocks.d,{title:"Introduction",mdxType:"Meta"}),Object(esm.b)("h1",{id:"introduction"},"Introduction"),Object(esm.b)("h2",{id:"colours"},"Colours"),Object(esm.b)(blocks.c,{mdxType:"ColorPalette"},Object(esm.b)(blocks.b,{title:"grey",colors:[theme.colors.grey[400],theme.colors.grey[300],theme.colors.grey[200],theme.colors.grey[100]],mdxType:"ColorItem"}),Object(esm.b)(blocks.b,{title:"blue",colors:[theme.colors.blue[400],theme.colors.blue[300],theme.colors.blue[200]],mdxType:"ColorItem"}),Object(esm.b)(blocks.b,{title:"green",colors:[theme.colors.green[400],theme.colors.green[300],theme.colors.green[200]],mdxType:"ColorItem"}),Object(esm.b)(blocks.b,{title:"yellow",colors:[theme.colors.yellow[400],theme.colors.yellow[300],theme.colors.yellow[200]],mdxType:"ColorItem"}),Object(esm.b)(blocks.b,{title:"pink",colors:[theme.colors.pink[400],theme.colors.pink[300],theme.colors.pink[200]],mdxType:"ColorItem"})),Object(esm.b)("h2",{id:"fonts"},"Fonts"),Object(esm.b)("h3",{id:"header"},"Header"),Object(esm.b)(blocks.e,{fontFamily:"Rubik",fontSizes:[24,32,40],fontWeight:500,sampleText:"Cookies are for smart people",mdxType:"Typeset"}),Object(esm.b)("h3",{id:"body"},"Body"),Object(esm.b)("h4",{id:"regular"},"Regular"),Object(esm.b)("p",null,Object(esm.b)("strong",{parentName:"p"},"size"),": 16px\n",Object(esm.b)("strong",{parentName:"p"},"weight"),": 400"),Object(esm.b)(blocks.e,{fontFamily:"Rubik",fontSizes:[16],fontWeight:400,sampleText:"Cookies are for smart people",mdxType:"Typeset"}),Object(esm.b)("h4",{id:"medium"},"Medium"),Object(esm.b)("p",null,Object(esm.b)("strong",{parentName:"p"},"size"),": 14px\n",Object(esm.b)("strong",{parentName:"p"},"weight"),": 500"),Object(esm.b)(blocks.e,{fontFamily:"Rubik",fontSizes:[16],fontWeight:500,sampleText:"Cookies are for smart people",mdxType:"Typeset"}),Object(esm.b)("h3",{id:"descriptor"},"Descriptor"),Object(esm.b)("p",null,Object(esm.b)("strong",{parentName:"p"},"size"),": 14px\n",Object(esm.b)("strong",{parentName:"p"},"weight"),": 400"),Object(esm.b)(blocks.e,{fontFamily:"Rubik",fontSizes:[14],fontWeight:400,sampleText:"Cookies are for smart people",mdxType:"Typeset"}),Object(esm.b)("h3",{id:"subsection"},"Subsection"),Object(esm.b)("p",null,Object(esm.b)("strong",{parentName:"p"},"size"),": 14px\n",Object(esm.b)("strong",{parentName:"p"},"weight"),": 500"),Object(esm.b)(blocks.e,{fontFamily:"Rubik",fontSizes:[14],fontWeight:500,sampleText:"Cookies are for smart people",mdxType:"Typeset"}),Object(esm.b)("h3",{id:"error"},"Error"),Object(esm.b)("p",null,Object(esm.b)("strong",{parentName:"p"},"size"),": 12px\n",Object(esm.b)("strong",{parentName:"p"},"weight"),": 400"),Object(esm.b)(blocks.e,{fontFamily:"Rubik",fontSizes:[12],fontWeight:400,sampleText:"Cookies are for smart people",mdxType:"Typeset"}))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Introduction",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(esm.b)(blocks.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(esm.b)(MDXContent,null))}});__webpack_exports__.default=componentMeta},897:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary}));__webpack_require__(8),__webpack_require__(443),__webpack_require__(0);var jsx_runtime=__webpack_require__(105),Button_Button=function Button(){return Object(jsx_runtime.jsx)("button",{children:"text button"})};Button_Button.displayName="Button";try{Button_Button.displayName="Button",Button_Button.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button_Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Components/Button",component:Button_Button};var Button_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(Button_Button,Object.assign({},args))};Button_stories_Template.displayName="Template";var Primary=Button_stories_Template.bind({});Primary.args={label:"Button"},Primary.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Primary.parameters)},898:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary}));__webpack_require__(8),__webpack_require__(443),__webpack_require__(0);var jsx_runtime=__webpack_require__(105),Dropdown_Dropdown=function Dropdown(_ref){var label=_ref.label;return Object(jsx_runtime.jsx)("button",{children:label})};Dropdown_Dropdown.displayName="Dropdown";try{Dropdown_Dropdown.displayName="Dropdown",Dropdown_Dropdown.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Dropdown",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Dropdown/Dropdown.tsx#Dropdown"]={docgenInfo:Dropdown_Dropdown.__docgenInfo,name:"Dropdown",path:"src/components/Dropdown/Dropdown.tsx#Dropdown"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Components/Dropdown",component:Dropdown_Dropdown};var Dropdown_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(Dropdown_Dropdown,Object.assign({},args))};Dropdown_stories_Template.displayName="Template";var Primary=Dropdown_stories_Template.bind({});Primary.args={label:"Dropdown"},Primary.parameters=Object.assign({storySource:{source:"(args) => <Dropdown {...args} />"}},Primary.parameters)}},[[490,2,3]]]);