(this["webpackJsonprainbow-board"]=this["webpackJsonprainbow-board"]||[]).push([[0],{173:function(e,t,a){},314:function(e,t,a){},315:function(e,t,a){},316:function(e,t,a){},317:function(e,t,a){},319:function(e,t,a){},320:function(e,t,a){},322:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),s=a.n(r),c=a(125),o=a.n(c),i=a(7),l=a(8),d=a(10),h=a(9),b=a(14),j=a(5),u=a(34),m=a(24),x=a.n(m),p=a(126),O=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={latestVersion:u.a,downloadURLs:{deb:"",exe:"",zip_linux:"",appimg:"",dmg:""}},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{children:(!navigator.userAgent.toLowerCase().includes("electron")||Object(p.gt)(this.state.latestVersion,u.a))&&Object(n.jsxs)("div",{children:[Object(n.jsxs)("button",{className:"dropdown-trigger btn center brand-text","data-target":"download-dropdown",children:[Object(n.jsx)("i",{className:"fa fa-download left"}),"Download ",navigator.userAgent.toLowerCase().includes("electron")?"New Version":"Desktop App"]}),Object(n.jsxs)("ul",{id:"download-dropdown",className:"dropdown-content",children:[Object(n.jsx)("li",{children:Object(n.jsxs)("a",{target:"_blank",rel:"noreferrer",href:"https://snapcraft.io/rainbow-board",className:"btn-flat brand-text",children:[Object(n.jsx)("i",{className:"fa fa-linux"}),"Linux (snap)"]})}),""!==this.state.downloadURLs.exe&&Object(n.jsx)("li",{children:Object(n.jsxs)("a",{target:"_blank",rel:"noreferrer",href:this.state.downloadURLs.exe,className:"btn-flat brand-text",children:[Object(n.jsx)("i",{className:"fa fa-windows"}),"Windows (EXE)"]})}),""!==this.state.downloadURLs.dmg&&Object(n.jsx)("li",{children:Object(n.jsxs)("a",{target:"_blank",rel:"noreferrer",href:this.state.downloadURLs.exe,className:"btn-flat brand-text",children:[Object(n.jsx)("i",{className:"fa fa-apple"}),"Mac (DMG)"]})}),""!==this.state.downloadURLs.deb&&Object(n.jsx)("li",{children:Object(n.jsxs)("a",{target:"_blank",rel:"noreferrer",href:this.state.downloadURLs.deb,className:"btn-flat brand-text",children:[Object(n.jsx)("i",{className:"fa fa-linux"}),"Linux (deb)"]})}),""!==this.state.downloadURLs.appimg&&Object(n.jsx)("li",{children:Object(n.jsxs)("a",{target:"_blank",rel:"noreferrer",href:this.state.downloadURLs.appimg,className:"btn-flat brand-text",children:[Object(n.jsx)("i",{className:"fa fa-linux"}),"Linux (portable)"]})}),""!==this.state.downloadURLs.zip_linux&&Object(n.jsx)("li",{children:Object(n.jsxs)("a",{target:"_blank",rel:"noreferrer",href:this.state.downloadURLs.zip_linux,className:"btn-flat brand-text",children:[Object(n.jsx)("i",{className:"fa fa-linux"}),"Linux (zip)"]})})]})]})})}},{key:"componentDidUpdate",value:function(){var e=document.querySelectorAll(".dropdown-trigger");x.a.Dropdown.init(e)}},{key:"componentDidMount",value:function(){var e=this,t=document.querySelectorAll(".dropdown-trigger");x.a.Dropdown.init(t);var a=new XMLHttpRequest;a.onreadystatechange=function(){if(4===a.readyState&&200===a.status){var t=JSON.parse(a.responseText),n=t.assets.find((function(e){return e.name.includes(".deb")})),r=t.assets.find((function(e){return e.name.includes(".zip")&&e.name.includes("linux")})),s=t.assets.find((function(e){return e.name.includes(".exe")})),c=t.assets.find((function(e){return e.name.toLowerCase().includes(".appimage")})),o=t.assets.find((function(e){return e.name.toLowerCase().includes(".dmg")}));e.setState({latestVersion:t.tag_name,downloadURLs:{deb:n?n.browser_download_url:"",zip_linux:r?r.browser_download_url:"",exe:s?s.browser_download_url:"",appimg:c?c.browser_download_url:"",dmg:o?o.browser_download_url:""}})}},a.open("GET","https://api.github.com/repos/HarshKhandeparkar/rainbow-board/releases/latest",!0),a.send(null),a.onerror=console.log}}]),a}(r.Component);var f=function(e){var t=e.toggleTheme,a=e.getTheme;return Object(n.jsxs)("div",{id:"main",children:[Object(n.jsx)("nav",{children:Object(n.jsx)("div",{className:"nav-wrapper header",children:Object(n.jsx)("span",{className:"logo-text brand-logo center brand-text",children:"Rainbow Board"})})}),Object(n.jsxs)("div",{className:"container center",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("p",{children:"Open Source, Cross Platform Whiteboard software made with React JS, Electron and GPU.JS Real Renderer."})}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col offset-s2 s4",children:Object(n.jsxs)(b.c,{to:"/pages",className:"btn center brand-text",children:[Object(n.jsx)("i",{className:"fa fa-paint-brush left"})," Start New"]})}),Object(n.jsx)("div",{className:"col s4",children:Object(n.jsxs)(b.c,{to:"/new",className:"btn center brand-text",children:[Object(n.jsx)("i",{className:"material-icons left",children:"new_releases"})," What's New!"]})})]}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col s12",children:Object(n.jsx)(O,{})})})]}),Object(n.jsxs)("footer",{className:"page-footer",children:[Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col s6",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("h5",{className:"brand-text",children:"Additional Links"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://github.com/HarshKhandeparkar/rainbow-board/issues/new/choose",target:"_blank",rel:"noreferrer",children:"Feedback or Questions"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://github.com/HarshKhandeparkar/rainbow-board/",target:"_blank",rel:"noreferrer",children:"Star on Github"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://discord.gg/FEpMS43UwR",target:"_blank",rel:"noreferrer",children:"Chat on Discord"})})]})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"switch",title:"Change Theme",children:Object(n.jsxs)("label",{children:[Object(n.jsx)("i",{className:"fa fa-sun-o brand-text"}),Object(n.jsx)("input",{type:"checkbox",onInput:function(e){return t()},defaultChecked:"dark"===a()}),Object(n.jsx)("span",{className:"lever"}),Object(n.jsx)("i",{className:"fa fa-moon-o brand-text"})]})})})]}),Object(n.jsxs)("div",{className:"col s6",children:[Object(n.jsx)("h5",{className:"brand-text",children:"Made Using"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://electronjs.org",target:"_blank",rel:"noreferrer",children:"Electron"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://reactjs.org",target:"_blank",rel:"noreferrer",children:"React"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://gpu.rocks",target:"_blank",rel:"noreferrer",children:"GPU.js"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://harshkhandeparkar.github.io/gpujs-real-renderer",target:"_blank",rel:"noreferrer",children:"GPU.js Real Renderer"})}),Object(n.jsx)("li",{children:Object(n.jsx)(b.c,{to:"/credits",children:"Full Credits"})})]})]})]})}),Object(n.jsx)("div",{className:"footer-copyright container-fluid center z-depth-2",children:Object(n.jsxs)("p",{className:"center",style:{width:"100%"},children:["v",u.a]})})]})]})},g=(a(173),a(26)),v=(a(63),a(128)),w=a(129),N=a(30),k=a(85);var S=a(135),R=a(134),C=(a(314),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={selected:e.props.initialColor},e.handleChangeComplete=function(t){e.props.onPickColor(t),e.setState({selected:t})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"col s12 center",children:[Object(n.jsx)("h5",{children:"Brush and Line Color"}),Object(n.jsx)(R.a,{className:"color-picker",color:this.state.selected,onChangeComplete:this.handleChangeComplete})]})})})}}]),a}(r.Component)),y=(a(315),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={brushSize:e.props.boardOptions.brushSize,eraserSize:e.props.boardOptions.eraserSize},e.onBrushSizeChange=function(){e.props.onBrushSizeChange(Number(e.brushSizeRangeRef.current.value)),e.setState({brushSize:Number(e.brushSizeRangeRef.current.value)})},e.onEraserSizeChange=function(){e.props.onEraserSizeChange(Number(e.eraserSizeRangeRef.current.value)),e.setState({eraserSize:Number(e.eraserSizeRangeRef.current.value)})},e.onLineSizeChange=function(){e.props.onBrushSizeChange(Number(e.lineSizeRangeRef.current.value)),e.setState({brushSize:Number(e.lineSizeRangeRef.current.value)})},e.clearBoardRef=Object(r.createRef)(),e.colorPickerRef=Object(r.createRef)(),e.goHomeRef=Object(r.createRef)(),e.brushSizeRangeRef=Object(r.createRef)(),e.eraserSizeRangeRef=Object(r.createRef)(),e.lineSizeRangeRef=Object(r.createRef)(),e}return Object(l.a)(a,[{key:"_initializeModal",value:function(){this.clearBoardModalInstance=x.a.Modal.init(this.clearBoardRef.current),this.colorPickerInstance=x.a.Modal.init(this.colorPickerRef.current),this.goHomeInstance=x.a.Modal.init(this.goHomeRef.current)}},{key:"componentDidMount",value:function(){this._initializeModal()}},{key:"componentDidUpdate",value:function(){this._initializeModal()}},{key:"render",value:function(){var e=this,t=this.props,a=t.initialBrushColor,r=t.boardState,s=t._setTool,c=t._clearBoard,o=t._save,i=t._onUndo,l=t._onRedo,d=Object(S.a)(a,3),h=d[0],j=d[1],u=d[2];return Object(n.jsxs)("div",{className:"toolbar",children:[Object(n.jsxs)("div",{ref:this.brushTopToolbarRef,className:"top-toolbar z-depth-1 valign-wrapper ".concat("brush"===r.tool?"":"hide"),children:[Object(n.jsx)("label",{children:"Brush Size"}),Object(n.jsx)("input",{type:"range",min:"2",max:"100",value:this.state.brushSize,ref:this.brushSizeRangeRef,onChange:this.onBrushSizeChange})]}),Object(n.jsxs)("div",{ref:this.brushTopToolbarRef,className:"top-toolbar z-depth-1 valign-wrapper ".concat("eraser"===r.tool?"":"hide"),children:[Object(n.jsx)("label",{children:"Eraser Size"}),Object(n.jsx)("input",{type:"range",min:"2",max:"100",value:this.state.eraserSize,ref:this.eraserSizeRangeRef,onChange:this.onEraserSizeChange})]}),Object(n.jsxs)("div",{ref:this.brushTopToolbarRef,className:"top-toolbar z-depth-1 valign-wrapper ".concat("line"===r.tool?"":"hide"),children:[Object(n.jsx)("label",{children:"Line Size"}),Object(n.jsx)("input",{type:"range",min:"2",max:"100",value:this.state.brushSize,ref:this.lineSizeRangeRef,onChange:this.onLineSizeChange})]}),Object(n.jsxs)("div",{className:"bottom-toolbar z-depth-1",children:[Object(n.jsx)("button",{className:"btn-flat ".concat("brush"===r.tool?"active":""," brand-text"),title:"Paint Brush",onClick:function(){return s("brush")},children:Object(n.jsx)("i",{className:"fa fa-paint-brush "})}),Object(n.jsx)("button",{className:"btn-flat ".concat("eraser"===r.tool?"active":""," brand-text"),title:"Eraser",onClick:function(){return s("eraser")},children:Object(n.jsx)("i",{className:"fa fa-eraser "})}),Object(n.jsx)("button",{className:"btn-flat ".concat("line"===r.tool?"active":""," brand-text"),title:"Line Tool",onClick:function(){return s("line")},children:Object(n.jsx)("i",{className:"material-icons ",children:"timeline"})}),Object(n.jsx)("button",{className:"btn-flat brand-text",title:"Color Palette",onClick:function(){return e.colorPickerInstance.open()},children:Object(n.jsx)("i",{className:"material-icons ",children:"palette"})}),Object(n.jsx)("button",{className:"btn-flat brand-text",title:"Undo",onClick:function(){return i()},children:Object(n.jsx)("i",{className:"material-icons ",children:"undo"})}),Object(n.jsx)("button",{className:"btn-flat brand-text",title:"Redo",onClick:function(){return l()},children:Object(n.jsx)("i",{className:"material-icons ",children:"redo"})}),Object(n.jsx)("button",{className:"btn-flat brand-text",title:"Save this slide",onClick:function(){return o()},children:Object(n.jsx)("i",{className:"material-icons ",children:"save"})}),Object(n.jsx)("button",{className:"btn-flat brand-text",title:"Clear the board",onClick:function(){return e.clearBoardModalInstance.open()},children:Object(n.jsx)("i",{className:"fa fa-ban "})}),Object(n.jsx)("button",{className:"btn-flat brand-text",title:"Go to home",onClick:function(){return e.goHomeInstance.open()},children:Object(n.jsx)("i",{className:"material-icons ",children:"home"})})]}),Object(n.jsxs)("div",{className:"modal bottom-sheet",ref:this.goHomeRef,children:[Object(n.jsxs)("div",{className:"modal-content container center",children:[Object(n.jsx)("h4",{children:"Are you sure you want to go to the home page?"}),Object(n.jsxs)("p",{children:["If you do this, ",Object(n.jsx)("b",{children:"ALL"})," the changes you made will be ",Object(n.jsx)("b",{children:"LOST FOREVER."})]})]}),Object(n.jsxs)("div",{className:"modal-footer container",children:[Object(n.jsx)("button",{className:"btn green-text right",onClick:function(t){return e.goHomeInstance.close()},children:"No"}),Object(n.jsx)(b.b,{to:"/",className:"btn red-text left",children:"Yes"})]})]}),Object(n.jsxs)("div",{className:"modal bottom-sheet",ref:this.clearBoardRef,children:[Object(n.jsxs)("div",{className:"modal-content container center",children:[Object(n.jsx)("h4",{children:"Do you want to clear the board?"}),Object(n.jsxs)("p",{children:["If you clear the board, ",Object(n.jsx)("b",{children:"ALL"})," the changes you made will be ",Object(n.jsx)("b",{children:"LOST FOREVER."})]})]}),Object(n.jsxs)("div",{className:"modal-footer container",children:[Object(n.jsx)("button",{className:"btn green-text right",onClick:function(t){return e.clearBoardModalInstance.close()},children:"No"}),Object(n.jsx)("button",{className:"btn red-text left",onClick:function(t){c(),e.clearBoardModalInstance.close()},children:"Yes"})]})]}),Object(n.jsxs)("div",{className:"modal",ref:this.colorPickerRef,children:[Object(n.jsx)("div",{className:"modal-content",children:Object(n.jsx)(C,{initialColor:"rgb(".concat(255*h,", ").concat(255*j,", ").concat(255*u,")"),onPickColor:function(e){r.drawBoard.changeBrushColor([e.rgb.r/255,e.rgb.g/255,e.rgb.b/255])}})}),Object(n.jsx)("div",{className:"modal-footer container",children:Object(n.jsx)("button",{className:"btn brand-text",onClick:function(){return e.colorPickerInstance.close()},children:"Done"})})]})]})}}]),a}(r.Component)),z=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={boardState:{tool:"brush"}},e.canvasRef=Object(r.createRef)(),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setState({boardState:Object(g.a)(Object(g.a)({},this.state.boardState),{},{drawBoard:new w.RealDrawBoard(Object(g.a)(Object(g.a)({canvas:this.canvasRef.current,GPU:v.GPU,dimensions:[this.canvasRef.current.clientWidth,this.canvasRef.current.clientHeight]},a.boardOptions),{},{bgColor:"white"===this.props.getTheme()?[1,1,1]:[0,0,0],brushColor:"white"===this.props.getTheme()?[0,0,0]:[1,1,1]})).draw().startRender()})}),navigator.userAgent.toLowerCase().includes("electron")||(window.onbeforeunload=function(){return"Do you want to leave this page? You may lose saved changes."}),this._removeHotkeys(),this._setHotkeys()}},{key:"componentWillUnmount",value:function(){window.onbeforeunload=function(){},this._removeHotkeys()}},{key:"_setTool",value:function(e){this.state.boardState.drawBoard.changeTool(e),this.setState({boardState:Object(g.a)(Object(g.a)({},this.state.boardState),{},{tool:e})})}},{key:"_clearBoard",value:function(){this.state.boardState.drawBoard.clear()}},{key:"_save",value:function(){!function(e){for(var t=new k.PNG({width:e[0].length,height:e.length}),a=0;a<e.length;a++)for(var n=0;n<e[0].length;n++){var r=e[0].length*(e.length-a)+n<<2;t.data[r]=255*e[a][n][0],t.data[r+1]=255*e[a][n][1],t.data[r+2]=255*e[a][n][2],t.data[r+3]=255}var s="data:image/png;base64,"+k.PNG.sync.write(t).toString("base64"),c=document.createElement("a");c.href=s,c.download="slide.png",document.body.append(c),c.click(),c.remove()}(this.state.boardState.drawBoard.graphPixels.toArray())}},{key:"_setHotkeys",value:function(){var e=this;Object(N.a)("ctrl+z, command+z","drawboard",(function(){e.state.boardState.drawBoard.undo()})),Object(N.a)("ctrl+shift+z, command+shift+z","drawboard",(function(){e.state.boardState.drawBoard.redo()})),Object(N.a)("ctrl+s, command+s","drawboard",(function(t){t.preventDefault(),e._save()})),N.a.setScope("drawboard")}},{key:"_removeHotkeys",value:function(){N.a.deleteScope("drawboard")}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{children:[Object(n.jsx)("canvas",{className:"page",ref:this.canvasRef}),Object(n.jsx)(y,{boardOptions:a.boardOptions,boardState:this.state.boardState,initialBrushColor:"white"===this.props.getTheme()?[0,0,0]:[1,1,1],_setTool:function(t){return e._setTool(t)},_save:function(){return e._save()},_clearBoard:function(){return e._clearBoard()},_onUndo:function(){return e.state.boardState.drawBoard.undo()},_onRedo:function(){return e.state.boardState.drawBoard.redo()},onBrushSizeChange:function(t){return e.state.boardState.drawBoard.changeBrushSize(t)},onEraserSizeChange:function(t){return e.state.boardState.drawBoard.changeEraserSize(t)}})]})}}]),a}(r.Component);z.boardOptions={xScaleFactor:1,yScaleFactor:1,drawAxes:!1,xOffset:0,yOffset:0,brushSize:3,eraserSize:10,allowUndo:!0,maxSnapshots:10};var _=z,T=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).addPage=function(t){t.preventDefault(),e.state.pagesList.push(Object(n.jsx)(_,{getTheme:e.props.getTheme},e.state.pagesList.length)),e.setState({pagesList:e.state.pagesList,currentPage:e.state.pagesList.length-1})},e.nextPage=function(t){t.preventDefault(),e.setState({currentPage:e.state.currentPage+1})},e.lastPage=function(t){t.preventDefault(),e.setState({currentPage:e.state.currentPage-1})},e.state={pagesList:[],currentPage:0,mode:"paint"},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"container-fluid center",id:"pages",children:Object(n.jsx)(_,{getTheme:this.props.getTheme})})}}]),a}(r.Component);a(316);function L(e){var t=e.title,a=e.desc,r=e.link;return Object(n.jsxs)("div",{className:"card",children:[Object(n.jsxs)("div",{className:"card-content",children:[Object(n.jsx)("span",{className:"card-title styled-text brand-text",children:t}),Object(n.jsx)("p",{children:a})]}),Object(n.jsx)("div",{className:"card-action",children:Object(n.jsx)("a",{href:r,children:"Link"})})]})}var U=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("nav",{children:Object(n.jsxs)("div",{className:"nav-wrapper header container",children:[Object(n.jsx)("span",{className:"brand-logo center styled-text brand-text",children:"Credits"}),Object(n.jsx)(b.c,{to:"/",title:"Home",children:Object(n.jsx)("i",{className:"material-icons brand-text",children:"home"})})]})}),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"row valign-wrapper",children:[Object(n.jsx)("div",{className:"col s4",children:Object(n.jsx)(L,{title:"Electron",desc:"Used to create the desktop version of the app.",link:"https://electronjs.org"})}),Object(n.jsx)("div",{className:"col s4",children:Object(n.jsx)(L,{title:"React",desc:"Used to create the UI.",link:"https://reactjs.org"})}),Object(n.jsx)("div",{className:"col s4",children:Object(n.jsx)(L,{title:"GPU.js",desc:"Used to supercharge Rainbow Board by running normal JavaScript on the GPU!",link:"https://gpu.rocks"})})]}),Object(n.jsxs)("div",{className:"row valign-wrapper",children:[Object(n.jsx)("div",{className:"col s4",children:Object(n.jsx)(L,{title:"GPU.js Real Renderer",desc:"Used to make the whiteboard work.",link:"https://harshkhandeparkar.github.io/gpujs-real-renderer"})}),Object(n.jsx)("div",{className:"col s4",children:Object(n.jsx)(L,{title:"Electron Forge",desc:"Used to package the app for different operating systems.",link:"https://electronforge.io"})}),Object(n.jsx)("div",{className:"col s4",children:Object(n.jsx)(L,{title:"Electron Builder",desc:"Used to package the app for even more operating systems.",link:"https://electron.build"})})]}),Object(n.jsxs)("div",{className:"row valign-wrapper",children:[Object(n.jsx)("div",{className:"col s4",children:Object(n.jsx)(L,{title:"Materialize CSS",desc:"Used to make the UI look cool.",link:"https://materializecss.com"})}),Object(n.jsx)("div",{className:"col s4",children:Object(n.jsx)(L,{title:"Font Awesome",desc:"Awesome icons.",link:"https://fontawesome.com"})}),Object(n.jsx)("div",{className:"col s4",children:Object(n.jsx)(L,{title:"React Color",desc:"Simple color picker.",link:"https://casesandberg.github.io/react-color/"})})]}),Object(n.jsxs)("div",{className:"row valign-wrapper",children:[Object(n.jsx)("div",{className:"col s4",children:Object(n.jsx)(L,{title:"PNGjs",desc:"Used to download the PNG slides.",link:"https://github.com/lukeapage/pngjs"})}),Object(n.jsx)("div",{className:"col s4",children:Object(n.jsx)(L,{title:"Oxygen Font",desc:"The default font used.",link:"https://fonts.google.com/specimen/Oxygen"})}),Object(n.jsx)("div",{className:"col s4",children:Object(n.jsx)(L,{title:"Finger Paint Font",desc:"The paint-brush styled font used on this page.",link:"https://fonts.google.com/specimen/Finger+Paint"})})]}),Object(n.jsxs)("div",{className:"row valign-wrapper",children:[Object(n.jsx)("div",{className:"col s6",children:Object(n.jsx)(L,{title:"GIMP",desc:"Used to create the logo.",link:"https://gimp.org"})}),Object(n.jsx)("div",{className:"col s6",children:Object(n.jsx)(L,{title:"Full List of Libraries",desc:"Complete list of dependencies used.",link:"https://github.com/HarshKhandeparkar/rainbow-board/network/dependencies"})})]})]})]})}}]),a}(r.Component);a(317);function B(e){var t=e.title,a=e.desc,r=e.version,s=e.link;return Object(n.jsxs)("div",{className:"card",children:[Object(n.jsxs)("div",{className:"card-content",children:[Object(n.jsx)("span",{className:"card-title styled-text brand-text",children:t}),Object(n.jsx)("p",{children:a})]}),r&&Object(n.jsxs)("div",{className:"card-action",children:["Added in ",Object(n.jsxs)("a",{href:"https://github.com/HarshKhandeparkar/rainbow-board/releases/".concat(r),children:["v",r.replace("v","")]})]}),s&&Object(n.jsx)("div",{className:"card-action",children:Object(n.jsx)("a",{href:s,children:"Link"})})]})}var P=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("nav",{children:Object(n.jsxs)("div",{className:"nav-wrapper header container",children:[Object(n.jsx)("span",{className:"brand-logo center styled-text brand-text",children:"What's New"}),Object(n.jsx)(b.c,{to:"/",title:"Home",children:Object(n.jsx)("i",{className:"material-icons brand-text",children:"home"})})]})}),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"row valign-wrapper",children:[Object(n.jsx)("div",{className:"col s6",children:Object(n.jsx)(B,{title:"Hotkeys",desc:Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"Ctrl+Z"})," or ",Object(n.jsx)("b",{children:"Command+Z"})," to undo, ",Object(n.jsx)("b",{children:"Ctrl+Shift+Z"})," or ",Object(n.jsx)("b",{children:"Command+Shift+Z"})," to redo, and ",Object(n.jsx)("b",{children:"Ctrl+S"})," or ",Object(n.jsx)("b",{children:"Command+S"})," to save the slide!"]}),version:"0.4.0"})}),Object(n.jsx)("div",{className:"col s6",children:Object(n.jsx)(B,{title:"Undo Redo",desc:Object(n.jsxs)("p",{children:["You can now ",Object(n.jsx)("b",{children:"undo"})," and ",Object(n.jsx)("b",{children:"redo"}),"  using the shiny buttons or hotkeys."]}),version:"0.4.0"})})]}),Object(n.jsxs)("div",{className:"row valign-wrapper",children:[Object(n.jsx)("div",{className:"col s6",children:Object(n.jsx)(B,{title:"macOS Support",desc:"Rainbow Board will be published to macOS every time as a dmg file.",version:"v0.4.1"})}),Object(n.jsx)("div",{className:"col s6",children:Object(n.jsx)(B,{title:"Fixed Toolbar Overflow",desc:"Whiteboard toolbar will adjust the size of the buttons in order to prevent overflow on small screen-sizes.",version:"v0.4.1"})})]}),Object(n.jsxs)("div",{className:"row valign-wrapper",children:[Object(n.jsx)("div",{className:"col s6",children:Object(n.jsx)(B,{title:"UI Polish",desc:"The UI no longer has gradients everywhere. The gradients were removed to make the UI more simple and also because there were invisible ninja texts on some browsers!",version:"v0.4.2"})}),Object(n.jsx)("div",{className:"col s6",children:Object(n.jsx)(B,{title:"Discord Server",desc:Object(n.jsxs)("p",{children:["We have created a new ",Object(n.jsx)("a",{href:"https://discord.com",children:"Discord"})," server to discuss and follow the development of Rainbow Board."]}),link:"https://discord.gg/FEpMS43UwR"})})]})]})]})}}]),a}(r.Component),E=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).whiteTheme={bgColor:"white",bg1:"white",bg2:"white",highlight:"#e6e6e6",textColor:"black"},e.darkTheme={bgColor:"#121212",bg1:"#202020",bg2:"#303030",highlight:"#303030",textColor:"#f1f1f1"},e.state={theme:e.whiteTheme},e}return Object(l.a)(a,[{key:"setTheme",value:function(e){"white"===e?this.setState({theme:this.whiteTheme}):"dark"===e&&this.setState({theme:this.darkTheme})}},{key:"toggleTheme",value:function(){this.state.theme===this.whiteTheme?this.setState({theme:this.darkTheme}):this.setState({theme:this.whiteTheme})}},{key:"getTheme",value:function(){return this.state.theme===this.whiteTheme?"white":"dark"}},{key:"render",value:function(){var e=this;return Object(n.jsxs)(b.a,{children:[Object(n.jsx)("style",{children:"\n            body, .modal, .modal-footer {\n              background-color: ".concat(this.state.theme.bgColor," !important;\n              color: ").concat(this.state.theme.textColor," !important;\n            }\n\n            .nav-wrapper, nav {\n              background-color: ").concat(this.state.theme.bg1," !important;\n            }\n\n            button, .btn, .btn-flat, .btn-floating, .card, .color-picker, .bottom-toolbar, .top-toolbar {\n              background-color: ").concat(this.state.theme.bg1," !important;\n              color: ").concat(this.state.theme.textColor,";\n            }\n\n            .color-picker * {\n              color: ").concat(this.state.theme.textColor," !important;\n            }\n\n            button:hover, .btn:hover, .btn-flat:hover, .btn-floating:hover, .lever::after, .lever, .btn.disabled, .active {\n              background-color: ").concat(this.state.theme.highlight," !important;\n            }\n\n            .dropdown-content {\n              background-color: ").concat(this.state.theme.bg1," !important;\n            }\n\n            .dropdown-content a {\n              height: 100%;\n            }\n\n            .dropdown-content li:hover {\n              background-color: ").concat(this.state.theme.highlight," !important;\n            }\n\n            footer {\n              color: ").concat(this.state.theme.textColor," !important;\n              background-color: ").concat(this.state.theme.bg1," !important;\n            }\n\n            .footer-copyright {\n              color: ").concat(this.state.theme.textColor," !important;\n              background-color: ").concat(this.state.theme.bg2," !important;\n            }\n            ")}),Object(n.jsx)(j.a,{exact:!0,path:"/",render:function(){return Object(n.jsx)(f,{getTheme:function(){return e.getTheme()},setTheme:function(t){return e.setTheme(t)},toggleTheme:function(){return e.toggleTheme()}})}}),Object(n.jsx)(j.a,{path:"/pages",render:function(){return Object(n.jsx)(T,{getTheme:function(){return e.getTheme()}})}}),Object(n.jsx)(j.a,{path:"/credits",component:U}),Object(n.jsx)(j.a,{path:"/new",component:P})]})}}]),a}(r.Component),D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,324)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))};a(318),a(319),a(320),a(321);o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(E,{})}),document.getElementById("root")),D()},34:function(e){e.exports=JSON.parse('{"a":"0.4.2"}')},63:function(e,t,a){}},[[322,1,2]]]);
//# sourceMappingURL=main.aedfc1de.chunk.js.map