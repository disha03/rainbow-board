(this["webpackJsonprainbow-board"]=this["webpackJsonprainbow-board"]||[]).push([[0],{170:function(e,t,a){},309:function(e,t,a){},310:function(e,t,a){},312:function(e,t,a){},313:function(e,t,a){},315:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(0),r=a.n(s),c=a(123),i=a.n(c),o=a(10),l=a(11),d=a(13),h=a(12),b=a(20),j=a(32),u=a(18),m=a.n(u),g=a(124),f=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={latestVersion:j.a,downloadURLs:{deb:"",snap:"",exe:"",zip_linux:"",appimg:"",dmg:""}},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{children:(!navigator.userAgent.toLowerCase().includes("electron")||Object(g.gt)(this.state.latestVersion,j.a))&&Object(n.jsxs)("div",{children:[Object(n.jsxs)("button",{className:"dropdown-trigger btn center brand-gradient gradient-text","data-target":"download-dropdown",children:[Object(n.jsx)("i",{className:"fa fa-download left"}),"Download ",navigator.userAgent.toLowerCase().includes("electron")?"New Version":"Desktop App"]}),Object(n.jsxs)("ul",{id:"download-dropdown",className:"dropdown-content",children:[""!==this.state.downloadURLs.deb&&Object(n.jsx)("li",{children:Object(n.jsxs)("a",{target:"_blank",rel:"noreferrer",href:this.state.downloadURLs.deb,className:"btn-flat brand-gradient gradient-text",children:[Object(n.jsx)("i",{className:"fa fa-linux"}),"Linux (deb)"]})}),""!==this.state.downloadURLs.appimg&&Object(n.jsx)("li",{children:Object(n.jsxs)("a",{target:"_blank",rel:"noreferrer",href:this.state.downloadURLs.appimg,className:"btn-flat brand-gradient gradient-text",children:[Object(n.jsx)("i",{className:"fa fa-linux"}),"Linux (portable)"]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("a",{target:"_blank",rel:"noreferrer",href:"https://snapcraft.io/rainbow-board",className:"btn-flat brand-gradient gradient-text",children:[Object(n.jsx)("i",{className:"fa fa-linux"}),"Linux (snap)"]})}),""!==this.state.downloadURLs.zip_linux&&Object(n.jsx)("li",{children:Object(n.jsxs)("a",{target:"_blank",rel:"noreferrer",href:this.state.downloadURLs.zip_linux,className:"btn-flat brand-gradient gradient-text",children:[Object(n.jsx)("i",{className:"fa fa-linux"}),"Linux (zip)"]})}),""!==this.state.downloadURLs.exe&&Object(n.jsx)("li",{children:Object(n.jsxs)("a",{target:"_blank",rel:"noreferrer",href:this.state.downloadURLs.exe,className:"btn-flat brand-gradient gradient-text",children:[Object(n.jsx)("i",{className:"fa fa-windows"}),"Windows (EXE)"]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("a",{href:""!==this.state.downloadURLs.dmg?this.state.downloadURLs.dmg:"https://github.com/HarshKhandeparkar/rainbow-board/blob/master/MAC_PUBLISH.md",target:"_blank",rel:"noopener noreferrer",className:"btn-flat brand-gradient gradient-text",children:[Object(n.jsx)("i",{className:"fa fa-apple"}),""!==this.state.downloadURLs.dmg?"Mac (DMG)":"Need Help"]})})]})]})})}},{key:"componentDidUpdate",value:function(){var e=document.querySelectorAll(".dropdown-trigger");m.a.Dropdown.init(e)}},{key:"componentDidMount",value:function(){var e=this,t=document.querySelectorAll(".dropdown-trigger");m.a.Dropdown.init(t);var a=new XMLHttpRequest;a.onreadystatechange=function(){if(4===a.readyState&&200===a.status){var t=JSON.parse(a.responseText),n=t.assets.find((function(e){return e.name.includes(".deb")})),s=t.assets.find((function(e){return e.name.includes(".zip")&&e.name.includes("linux")})),r=t.assets.find((function(e){return e.name.includes(".exe")})),c=t.assets.find((function(e){return e.name.includes(".snap")})),i=t.assets.find((function(e){return e.name.toLowerCase().includes(".appimage")})),o=t.assets.find((function(e){return e.name.toLowerCase().includes(".dmg")}));e.setState({latestVersion:t.tag_name,downloadURLs:{deb:n?n.browser_download_url:"",zip_linux:s?s.browser_download_url:"",exe:r?r.browser_download_url:"",snap:c?c.browser_download_url:"",appimg:i?i.browser_download_url:"",dmg:o?o.browser_download_url:""}})}},a.open("GET","https://api.github.com/repos/HarshKhandeparkar/rainbow-board/releases/latest",!0),a.send(null),a.onerror=console.log}}]),a}(s.Component);var x=function(e){var t=e.toggleTheme,a=e.getTheme;return Object(n.jsxs)("div",{id:"main",children:[Object(n.jsx)("nav",{children:Object(n.jsx)("div",{className:"nav-wrapper header brand-gradient",children:Object(n.jsx)("span",{className:"logo-text brand-logo center",children:"Rainbow Board"})})}),Object(n.jsxs)("div",{className:"container center",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("p",{children:"Open Source, Cross Platform Whiteboard software made with React JS, Electron and GPU.JS Real Renderer."})}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col offset-s2 s4",children:Object(n.jsxs)(b.b,{to:"/pages",className:"btn center brand-gradient gradient-text",children:[Object(n.jsx)("i",{className:"fa fa-paint-brush left"})," Start New"]})}),Object(n.jsx)("div",{className:"col s4",children:Object(n.jsxs)(b.b,{to:"/",className:"btn center disabled",children:[Object(n.jsx)("i",{className:"fa fa-folder-open left"})," Open Saved File"]})})]}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col s12",children:Object(n.jsx)(f,{})})})]}),Object(n.jsxs)("footer",{className:"page-footer brand-gradient gradient-text",children:[Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col s6",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("h5",{children:"Additional Links"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://github.com/HarshKhandeparkar/rainbow-board/issues/new/choose",target:"_blank",rel:"noreferrer",children:"Feedback or Questions"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://github.com/HarshKhandeparkar/rainbow-board/",target:"_blank",rel:"noreferrer",children:"Star on Github"})})]})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"switch",title:"Change Theme",children:Object(n.jsxs)("label",{children:[Object(n.jsx)("i",{className:"fa fa-sun-o"}),Object(n.jsx)("input",{type:"checkbox",onInput:function(e){return t()},defaultChecked:"dark"===a()}),Object(n.jsx)("span",{className:"lever"}),Object(n.jsx)("i",{className:"fa fa-moon-o"})]})})})]}),Object(n.jsxs)("div",{className:"col s6",children:[Object(n.jsx)("h5",{children:"Made Using"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://electronjs.org",target:"_blank",rel:"noreferrer",children:"Electron"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://reactjs.org",target:"_blank",rel:"noreferrer",children:"React"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://gpu.rocks",target:"_blank",rel:"noreferrer",children:"GPU.js"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://harshkhandeparkar.github.io/gpujs-real-renderer",target:"_blank",rel:"noreferrer",children:"GPU.js Real Renderer"})}),Object(n.jsx)("li",{children:Object(n.jsx)(b.b,{to:"/credits",children:"Full Credits"})})]})]})]})}),Object(n.jsx)("div",{className:"footer-copyright container-fluid center brand-gradient gradient-text z-depth-2",children:Object(n.jsxs)("p",{className:"center",style:{width:"100%"},children:["v",j.a]})})]})]})},p=(a(170),a(85)),O=(a(61),a(126)),v=a(127),w=a(83),N=a(132),k=(a(309),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={selected:e.props.initialColor,brushSize:e.props.initialBrushSize,eraserSize:e.props.initialEraserSize},e.handleChangeComplete=function(t){e.props.onPickColor(t),e.setState({selected:t})},e.onBrushSizeChange=function(){e.props.onBrushSizeChange(Number(e.brushSizeRangeRef.current.value)),e.setState({brushSize:Number(e.brushSizeRangeRef.current.value)})},e.onEraserSizeChange=function(){e.props.onEraserSizeChange(Number(e.eraserSizeRangeRef.current.value)),e.setState({eraserSize:Number(e.eraserSizeRangeRef.current.value)})},e.brushSizeRangeRef=Object(s.createRef)(),e.eraserSizeRangeRef=Object(s.createRef)(),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){m.a.Range.init(this.brushSizeRangeRef.current),m.a.Range.init(this.eraserSizeRangeRef.current)}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col s5 offset-s1 center",children:[Object(n.jsx)("h5",{children:"Brush color"}),Object(n.jsx)(N.a,{className:"color-picker",color:this.state.selected,onChangeComplete:this.handleChangeComplete})]}),Object(n.jsxs)("div",{className:"col s5 center",children:[Object(n.jsx)("h5",{children:"Brush and Eraser sizes"}),Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("p",{className:"range-field",children:[Object(n.jsx)("label",{htmlFor:"brush-size",children:"Brush Size:"}),Object(n.jsx)("input",{type:"range",id:"brush-size",min:"0",max:"100",value:this.state.brushSize,ref:this.brushSizeRangeRef,onChange:this.onBrushSizeChange})]})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("p",{className:"range-field",children:[Object(n.jsx)("label",{htmlFor:"eraser-size",children:"Eraser Size:"}),Object(n.jsx)("input",{type:"range",id:"eraser-size",min:"0",max:"100",value:this.state.eraserSize,ref:this.eraserSizeRangeRef,onChange:this.onEraserSizeChange})]})})]})]})})}}]),a}(s.Component)),R=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={mode:"paint"},e.canvasRef=Object(s.createRef)(),e.modalRef=Object(s.createRef)(),e.colorPickerRef=Object(s.createRef)(),e.goHomeRef=Object(s.createRef)(),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this._initializeFAB(),this._initializeModal(),this.setState({drawBoard:new v.RealDrawBoard(Object(p.a)(Object(p.a)({canvas:this.canvasRef.current,GPU:O.GPU,dimensions:[this.canvasRef.current.clientWidth,this.canvasRef.current.clientHeight]},a.boardOptions),{},{bgColor:"white"===this.props.getTheme()?[1,1,1]:[0,0,0],brushColor:"white"===this.props.getTheme()?[0,0,0]:[1,1,1]})).draw().startRender()}),navigator.userAgent.toLowerCase().includes("electron")||(window.onbeforeunload=function(){return"Do you want to leave this page? You may lose saved changes."})}},{key:"componentWillUnmount",value:function(){window.onbeforeunload=function(){}}},{key:"componentDidUpdate",value:function(){this._initializeFAB(),this._initializeModal()}},{key:"_setMode",value:function(e){this.state.drawBoard.changeMode(e),this.setState({mode:e})}},{key:"_clearBoard",value:function(){this.state.drawBoard.clear()}},{key:"_initializeFAB",value:function(){var e=document.querySelectorAll(".fixed-action-btn");m.a.FloatingActionButton.init(e,{hoverEnabled:!1})}},{key:"_initializeModal",value:function(){this.modalInstance=m.a.Modal.init(this.modalRef.current),this.colorPickerInstance=m.a.Modal.init(this.colorPickerRef.current),this.goHomeInstance=m.a.Modal.init(this.goHomeRef.current)}},{key:"_save",value:function(){for(var e=new w.PNG({width:this.canvasRef.current.clientWidth,height:this.canvasRef.current.clientHeight}),t=this.state.drawBoard.graphPixels.toArray(),a=0;a<t.length;a++)for(var n=0;n<t[0].length;n++){var s=t[0].length*(t.length-a)+n<<2;e.data[s]=255*t[a][n][0],e.data[s+1]=255*t[a][n][1],e.data[s+2]=255*t[a][n][2],e.data[s+3]=255}var r="data:image/png;base64,"+w.PNG.sync.write(e).toString("base64"),c=document.createElement("a");c.href=r,c.download="slide.png",document.body.append(c),c.click(),c.remove()}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"undo-redo-btns",children:[Object(n.jsx)("button",{className:"btn-floating",title:"Undo",style:{marginRight:"1rem"},onClick:function(t){return e.state.drawBoard.undo()},children:Object(n.jsx)("i",{className:"material-icons brand-gradient gradient-text",children:"undo"})}),Object(n.jsx)("button",{className:"btn-floating",title:"Redo",onClick:function(t){return e.state.drawBoard.redo()},children:Object(n.jsx)("i",{className:"material-icons brand-gradient gradient-text",children:"redo"})})]}),Object(n.jsx)("canvas",{className:"page",ref:this.canvasRef}),Object(n.jsxs)("div",{className:"fixed-action-btn",children:[Object(n.jsx)("button",{className:"btn-floating btn-large",children:Object(n.jsx)("i",{className:"brand-gradient gradient- fa fa-".concat("paint"===this.state.mode?"paint-brush":"eraser")})}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("button",{title:"Go to home",className:"btn-floating",children:Object(n.jsx)("i",{className:"material-icons brand-gradient gradient-text",onClick:function(t){return e.goHomeInstance.open()},children:"home"})})}),Object(n.jsx)("li",{children:Object(n.jsx)("button",{title:"Save this page",className:"btn-floating",children:Object(n.jsx)("i",{className:"material-icons brand-gradient gradient-text",onClick:function(t){return e._save()},children:"save"})})}),Object(n.jsx)("li",{children:Object(n.jsx)("button",{title:"Pick Color and Size",className:"btn-floating",children:Object(n.jsx)("i",{className:"material-icons brand-gradient gradient-text",onClick:function(t){return e.colorPickerInstance.open()},children:"palette"})})}),Object(n.jsx)("li",{children:Object(n.jsx)("button",{title:"eraser"===this.state.mode?"Eraser":"Brush",className:"btn-floating",onClick:function(t){return e._setMode("erase"===e.state.mode?"paint":"erase")},children:Object(n.jsx)("i",{className:"fa fa-".concat("paint"===this.state.mode?"eraser":"paint-brush"," brand-gradient gradient-text")})})}),Object(n.jsx)("li",{children:Object(n.jsx)("button",{title:"Clear the board",className:"btn-floating",onClick:function(t){return e.modalInstance.open()},children:Object(n.jsx)("i",{className:"fa fa-ban brand-gradient gradient-text"})})})]})]}),Object(n.jsxs)("div",{className:"modal bottom-sheet",ref:this.goHomeRef,children:[Object(n.jsxs)("div",{className:"modal-content container center",children:[Object(n.jsx)("h4",{children:"Are you sure you want to go to the home page?"}),Object(n.jsxs)("p",{children:["If you do this, ",Object(n.jsx)("b",{children:"ALL"})," the changes you made will be ",Object(n.jsx)("b",{children:"LOST FOREVER."})]})]}),Object(n.jsxs)("div",{className:"modal-footer container",children:[Object(n.jsx)("button",{className:"btn green-text right",onClick:function(t){return e.goHomeInstance.close()},children:"No"}),Object(n.jsx)(b.b,{to:"/",className:"btn red-text left",children:"Yes"})]})]}),Object(n.jsxs)("div",{className:"modal bottom-sheet",ref:this.modalRef,children:[Object(n.jsxs)("div",{className:"modal-content container center",children:[Object(n.jsx)("h4",{children:"Do you want to clear the board?"}),Object(n.jsxs)("p",{children:["If you clear the board, ",Object(n.jsx)("b",{children:"ALL"})," the changes you made will be ",Object(n.jsx)("b",{children:"LOST FOREVER."})]})]}),Object(n.jsxs)("div",{className:"modal-footer container",children:[Object(n.jsx)("button",{className:"btn green-text right",onClick:function(t){return e.modalInstance.close()},children:"No"}),Object(n.jsx)("button",{className:"btn red-text left",onClick:function(t){e._clearBoard(),e.modalInstance.close()},children:"Yes"})]})]}),Object(n.jsxs)("div",{className:"modal bottom-sheet",ref:this.colorPickerRef,children:[Object(n.jsx)("div",{className:"modal-content",children:Object(n.jsx)(k,{initialColor:"#000",initialBrushSize:a.boardOptions.brushSize,initialEraserSize:a.boardOptions.eraserSize,onBrushSizeChange:function(t){return e.state.drawBoard.changeBrushSize(t)},onEraserSizeChange:function(t){return e.state.drawBoard.changeEraserSize(t)},onPickColor:function(t){e.state.drawBoard.changeBrushColor([t.rgb.r/255,t.rgb.g/255,t.rgb.b/255])}})}),Object(n.jsx)("div",{className:"modal-footer container",children:Object(n.jsx)("button",{className:"btn green brand-gradient gradient-text",onClick:function(t){return e.colorPickerInstance.close()},children:"Done"})})]})]})}}]),a}(s.Component);R.boardOptions={xScaleFactor:1,yScaleFactor:1,drawAxes:!1,xOffset:0,yOffset:0,brushSize:3,eraserSize:10};var S=R,C=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).addPage=function(t){t.preventDefault(),e.state.pagesList.push(Object(n.jsx)(S,{getTheme:e.props.getTheme},e.state.pagesList.length)),e.setState({pagesList:e.state.pagesList,currentPage:e.state.pagesList.length-1})},e.nextPage=function(t){t.preventDefault(),e.setState({currentPage:e.state.currentPage+1})},e.lastPage=function(t){t.preventDefault(),e.setState({currentPage:e.state.currentPage-1})},e.state={pagesList:[],currentPage:0,mode:"paint"},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"container-fluid center",id:"pages",children:0===this.state.pagesList.length?Object(n.jsx)("button",{title:"Add a new page",className:"btn-floating btn-large page-btn",onClick:this.addPage,children:Object(n.jsx)("i",{className:"fa fa-plus gradient-text brand-gradient"})}):Object(n.jsxs)("div",{children:[0!==this.state.currentPage&&Object(n.jsx)("button",{className:"btn-floating left page-btn",onClick:this.lastPage,children:Object(n.jsx)("i",{className:"fa fa-chevron-left gradient-text brand-gradient"})}),this.state.pagesList[this.state.currentPage]]})})}}]),a}(s.Component),y=a(5);a(310);function z(e){var t=e.title,a=e.desc,s=e.link;return Object(n.jsxs)("div",{className:"card",children:[Object(n.jsxs)("div",{className:"card-content",children:[Object(n.jsx)("span",{className:"card-title brand-gradient gradient-text styled-text",children:t}),Object(n.jsx)("p",{children:a})]}),Object(n.jsx)("div",{className:"card-action",children:Object(n.jsx)("a",{href:s,children:"Link"})})]})}var L=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("nav",{className:"brand-gradient",children:Object(n.jsxs)("div",{className:"nav-wrapper header container",children:[Object(n.jsx)("span",{className:"logo-text brand-logo center styled-text",children:"Credits"}),Object(n.jsx)(b.b,{to:"/",title:"Home",children:Object(n.jsx)("i",{className:"material-icons",children:"home"})})]})}),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"row valign-wrapper",children:[Object(n.jsx)("div",{className:"col s4",children:Object(n.jsx)(z,{title:"Electron",desc:"Used to create the desktop version of the app.",link:"https://electronjs.org"})}),Object(n.jsx)("div",{className:"col s4",children:Object(n.jsx)(z,{title:"React",desc:"Used to create the UI.",link:"https://reactjs.org"})}),Object(n.jsx)("div",{className:"col s4",children:Object(n.jsx)(z,{title:"GPU.js",desc:"Used to supercharge Rainbow Board by running normal JavaScript on the GPU!",link:"https://gpu.rocks"})})]}),Object(n.jsxs)("div",{className:"row valign-wrapper",children:[Object(n.jsx)("div",{className:"col s4",children:Object(n.jsx)(z,{title:"GPU.js Real Renderer",desc:"Used to make the whiteboard work.",link:"https://harshkhandeparkar.github.io/gpujs-real-renderer"})}),Object(n.jsx)("div",{className:"col s4",children:Object(n.jsx)(z,{title:"Electron Forge",desc:"Used to package the app for different operating systems.",link:"https://electronforge.io"})}),Object(n.jsx)("div",{className:"col s4",children:Object(n.jsx)(z,{title:"Electron Builder",desc:"Used to package the app for even more operating systems.",link:"https://electron.build"})})]}),Object(n.jsxs)("div",{className:"row valign-wrapper",children:[Object(n.jsx)("div",{className:"col s4",children:Object(n.jsx)(z,{title:"Materialize CSS",desc:"Used to make the UI look cool.",link:"https://materializecss.com"})}),Object(n.jsx)("div",{className:"col s4",children:Object(n.jsx)(z,{title:"Font Awesome",desc:"Awesome icons.",link:"https://fontawesome.com"})}),Object(n.jsx)("div",{className:"col s4",children:Object(n.jsx)(z,{title:"React Color",desc:"Simple color picker.",link:"https://casesandberg.github.io/react-color/"})})]}),Object(n.jsxs)("div",{className:"row valign-wrapper",children:[Object(n.jsx)("div",{className:"col s4",children:Object(n.jsx)(z,{title:"PNGjs",desc:"Used to download the PNG slides.",link:"https://github.com/lukeapage/pngjs"})}),Object(n.jsx)("div",{className:"col s4",children:Object(n.jsx)(z,{title:"Oxygen Font",desc:"The default font used.",link:"https://fonts.google.com/specimen/Oxygen"})}),Object(n.jsx)("div",{className:"col s4",children:Object(n.jsx)(z,{title:"Finger Paint Font",desc:"The paint-brush styled font used on this page.",link:"https://fonts.google.com/specimen/Finger+Paint"})})]}),Object(n.jsxs)("div",{className:"row valign-wrapper",children:[Object(n.jsx)("div",{className:"col s4",children:Object(n.jsx)(z,{title:"GIMP",desc:"Used to create the logo.",link:"https://gimp.org"})}),Object(n.jsx)("div",{className:"col s4",children:Object(n.jsx)(z,{title:"CSSGradient.io",desc:"Used to create the gradient used everywhere.",link:"https://cssgradient.io"})}),Object(n.jsx)("div",{className:"col s4",children:Object(n.jsx)(z,{title:"Full List of Libraries",desc:"Complete list of dependencies used.",link:"https://github.com/HarshKhandeparkar/rainbow-board/network/dependencies"})})]})]})]})}}]),a}(s.Component),P=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).whiteTheme={bgColor:"white",bg1:"#f0f0f0",bg2:"#ebebeb",textColor:"black"},e.darkTheme={bgColor:"#121212",bg1:"#202020",bg2:"#303030",textColor:"#f1f1f1"},e.state={theme:e.whiteTheme},e}return Object(l.a)(a,[{key:"setTheme",value:function(e){"white"===e?this.setState({theme:this.whiteTheme}):"dark"===e&&this.setState({theme:this.darkTheme})}},{key:"toggleTheme",value:function(){this.state.theme===this.whiteTheme?this.setState({theme:this.darkTheme}):this.setState({theme:this.whiteTheme})}},{key:"getTheme",value:function(){return this.state.theme===this.whiteTheme?"white":"dark"}},{key:"render",value:function(){var e=this;return Object(n.jsxs)(b.a,{children:[Object(n.jsx)("style",{children:"\n            body, .modal, .modal-footer {\n              background-color: ".concat(this.state.theme.bgColor," !important;\n              color: ").concat(this.state.theme.textColor," !important;\n            }\n\n            button, .btn, .btn-flat, .btn-floating, .lever, .card, .color-picker {\n              background-color: ").concat(this.state.theme.bg1," !important;\n            }\n\n            .color-picker * {\n              color: ").concat(this.state.theme.textColor," !important;\n            }\n\n            button:hover, .btn:hover, .btn-flat:hover, .btn-floating:hover, .lever::after, .btn.disabled {\n              background-color: ").concat(this.state.theme.bg2," !important;\n            }\n\n            .dropdown-content {\n              background-color: ").concat(this.state.theme.bgColor," !important;\n            }\n\n            .dropdown-content li:hover {\n              background-color: ").concat(this.state.theme.bg1," !important;\n            }\n            ")}),Object(n.jsx)(y.a,{exact:!0,path:"/",render:function(){return Object(n.jsx)(x,{getTheme:function(){return e.getTheme()},setTheme:function(t){return e.setTheme(t)},toggleTheme:function(){return e.toggleTheme()}})}}),Object(n.jsx)(y.a,{path:"/pages",render:function(){return Object(n.jsx)(C,{getTheme:function(){return e.getTheme()}})}}),Object(n.jsx)(y.a,{path:"/credits",component:L})]})}}]),a}(s.Component),_=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,317)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),r(e),c(e)}))};a(311),a(312),a(313),a(314);i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(P,{})}),document.getElementById("root")),_()},32:function(e){e.exports=JSON.parse('{"a":"0.2.1"}')},61:function(e,t,a){}},[[315,1,2]]]);
//# sourceMappingURL=main.e52b3627.chunk.js.map