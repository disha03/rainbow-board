(this["webpackJsonprainbow-board"]=this["webpackJsonprainbow-board"]||[]).push([[0],{168:function(e,t,a){},306:function(e,t,a){},307:function(e,t,a){},309:function(e,t,a){},31:function(e){e.exports=JSON.parse('{"a":"0.1.6"}')},310:function(e,t,a){},312:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),s=a.n(r),i=a(120),c=a.n(i),o=a(19),l=a(31),d=a(25),h=a(26),b=a(28),j=a(27),u=a(14),f=a.n(u),x=a(121),O=function(e){Object(b.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={latestVersion:l.a,downloadURLs:{deb:"",exe:"",zip_linux:""}},e}return Object(h.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{children:(!navigator.userAgent.toLowerCase().includes("electron")||Object(x.gt)(this.state.latestVersion,l.a))&&Object(n.jsxs)("div",{children:[Object(n.jsxs)("button",{className:"dropdown-trigger btn center brand-gradient gradient-text","data-target":"download-dropdown",children:[Object(n.jsx)("i",{className:"fa fa-download left"}),"Download ",navigator.userAgent.toLowerCase().includes("electron")?"New Version":"Desktop App"]}),Object(n.jsxs)("ul",{id:"download-dropdown",className:"dropdown-content",children:[""!==this.state.downloadURLs.deb&&Object(n.jsx)("li",{children:Object(n.jsxs)("a",{target:"_blank",rel:"noreferrer",href:this.state.downloadURLs.deb,className:"btn-flat brand-gradient gradient-text",children:[Object(n.jsx)("i",{className:"fa fa-linux"}),"Linux (deb)"]})}),""!==this.state.downloadURLs.zip_linux&&Object(n.jsx)("li",{children:Object(n.jsxs)("a",{target:"_blank",rel:"noreferrer",href:this.state.downloadURLs.zip_linux,className:"btn-flat brand-gradient gradient-text",children:[Object(n.jsx)("i",{className:"fa fa-linux"}),"Linux (zip)"]})}),""!==this.state.downloadURLs.exe&&Object(n.jsx)("li",{children:Object(n.jsxs)("a",{target:"_blank",rel:"noreferrer",href:this.state.downloadURLs.exe,className:"btn-flat brand-gradient gradient-text",children:[Object(n.jsx)("i",{className:"fa fa-windows"}),"Windows (EXE)"]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("a",{href:"https://github.com/HarshKhandeparkar/rainbow-board/blob/master/MAC_PUBLISH.md",target:"_blank",rel:"noopener noreferrer",className:"btn-flat brand-gradient gradient-text",children:[Object(n.jsx)("i",{className:"fa fa-apple"}),"Need Help"]})})]})]})})}},{key:"componentDidUpdate",value:function(){var e=document.querySelectorAll(".dropdown-trigger");f.a.Dropdown.init(e)}},{key:"componentDidMount",value:function(){var e=this,t=document.querySelectorAll(".dropdown-trigger");f.a.Dropdown.init(t);var a=new XMLHttpRequest;a.onreadystatechange=function(){if(4===a.readyState&&200===a.status){var t=JSON.parse(a.responseText),n=t.assets.find((function(e){return e.name.includes(".deb")})),r=t.assets.find((function(e){return e.name.includes(".zip")&&e.name.includes("linux")})),s=t.assets.find((function(e){return e.name.includes(".exe")}));e.setState({latestVersion:t.tag_name,downloadURLs:{deb:n?n.browser_download_url:"",zip_linux:r?r.browser_download_url:"",exe:s?s.browser_download_url:""}})}},a.open("GET","https://api.github.com/repos/HarshKhandeparkar/rainbow-board/releases/latest",!0),a.send(null),a.onerror=console.log}}]),a}(r.Component);var m=function(){return Object(n.jsxs)("div",{id:"main",children:[Object(n.jsx)("nav",{children:Object(n.jsx)("div",{className:"nav-wrapper header brand-gradient",children:Object(n.jsx)("span",{className:"logo-text brand-logo center",children:"Rainbow Board"})})}),Object(n.jsxs)("div",{className:"container center",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("p",{children:"Open Source, Cross Platform Whiteboard software made with React JS, Electron and GPU.JS Real Renderer."})}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col offset-s2 s4",children:Object(n.jsxs)(o.b,{to:"/pages",className:"btn center brand-gradient gradient-text",children:[Object(n.jsx)("i",{className:"fa fa-paint-brush left"})," Start New"]})}),Object(n.jsx)("div",{className:"col s4",children:Object(n.jsxs)(o.b,{to:"/",className:"btn center brand-gradient gradient-text",children:[Object(n.jsx)("i",{className:"fa fa-folder-open left"})," Open Saved File"]})})]}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col s12",children:Object(n.jsx)(O,{})})})]}),Object(n.jsxs)("footer",{className:"page-footer brand-gradient gradient-text",children:[Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col s6",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("h5",{children:"Rainbow Board"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://github.com/HarshKhandeparkar/rainbow-board/releases",target:"_blank",rel:"noreferrer",children:"Older Releases"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://github.com/HarshKhandeparkar/rainbow-board/",target:"_blank",rel:"noreferrer",children:"Star on Github"})})]})})]}),Object(n.jsxs)("div",{className:"col s6",children:[Object(n.jsx)("h5",{children:"Made Using"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://electronjs.org",target:"_blank",rel:"noreferrer",children:"Electron"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://reactjs.org",target:"_blank",rel:"noreferrer",children:"React"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://gpu.rocks",target:"_blank",rel:"noreferrer",children:"GPU.js"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://harshkhandeparkar.github.io/gpujs-real-renderer",target:"_blank",rel:"noreferrer",children:"GPU.js Real Renderer"})})]})]})]})}),Object(n.jsx)("hr",{}),Object(n.jsx)("div",{className:"footer-copyright container center brand-gradient gradient-text",children:Object(n.jsxs)("p",{className:"center",style:{width:"100%"},children:["v",l.a]})})]})]})},g=a(130),p=(a(168),a(123)),v=a(124),w=a(129),N=(a(306),function(e){Object(b.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={selected:e.props.initialColor,brushSize:e.props.initialBrushSize,eraserSize:e.props.initialEraserSize},e.handleChangeComplete=function(t){e.props.onPickColor(t),e.setState({selected:t})},e.onBrushSizeChange=function(){e.props.onBrushSizeChange(Number(e.brushSizeRangeRef.current.value)),e.setState({brushSize:Number(e.brushSizeRangeRef.current.value)})},e.onEraserSizeChange=function(){e.props.onEraserSizeChange(Number(e.eraserSizeRangeRef.current.value)),e.setState({eraserSize:Number(e.eraserSizeRangeRef.current.value)})},e.brushSizeRangeRef=Object(r.createRef)(),e.eraserSizeRangeRef=Object(r.createRef)(),e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){f.a.Range.init(this.brushSizeRangeRef.current),f.a.Range.init(this.eraserSizeRangeRef.current)}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col s5 offset-s1 center",children:[Object(n.jsx)("h5",{children:"Brush color"}),Object(n.jsx)(w.a,{color:this.state.selected,onChangeComplete:this.handleChangeComplete})]}),Object(n.jsxs)("div",{className:"col s5 center",children:[Object(n.jsx)("h5",{children:"Brush and Eraser sizes"}),Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("p",{className:"range-field",children:[Object(n.jsx)("label",{htmlFor:"brush-size",children:"Brush Size:"}),Object(n.jsx)("input",{type:"range",id:"brush-size",min:"0",max:"100",value:this.state.brushSize,ref:this.brushSizeRangeRef,onChange:this.onBrushSizeChange})]})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("p",{className:"range-field",children:[Object(n.jsx)("label",{htmlFor:"eraser-size",children:"Eraser Size:"}),Object(n.jsx)("input",{type:"range",id:"eraser-size",min:"0",max:"100",value:this.state.eraserSize,ref:this.eraserSizeRangeRef,onChange:this.onEraserSizeChange})]})})]})]})})}}]),a}(r.Component)),R=(a(307),function(e){Object(b.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={pagesList:[],currentPage:0,mode:"paint"},e.canvasRef=Object(r.createRef)(),e.modalRef=Object(r.createRef)(),e.colorPickerRef=Object(r.createRef)(),e.goHomeRef=Object(r.createRef)(),e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this._initializeFAB(),this._initializeModal(),this.setState({drawBoard:new v.RealDrawBoard(Object(g.a)({canvas:this.canvasRef.current,GPU:p.GPU,dimensions:[this.canvasRef.current.clientWidth,this.canvasRef.current.clientHeight]},a.boardOptions)).draw().startRender()}),window.onbeforeunload=function(){return"Do you want to leave this page? You may lose saved changes."}}},{key:"componentDidUpdate",value:function(){this._initializeFAB(),this._initializeModal()}},{key:"_setMode",value:function(e){this.state.drawBoard.changeMode(e),this.setState({mode:e})}},{key:"_clearBoard",value:function(){this.state.drawBoard.clear()}},{key:"_initializeFAB",value:function(){var e=document.querySelectorAll(".fixed-action-btn");f.a.FloatingActionButton.init(e,{hoverEnabled:!1})}},{key:"_initializeModal",value:function(){this.modalInstance=f.a.Modal.init(this.modalRef.current),this.colorPickerInstance=f.a.Modal.init(this.colorPickerRef.current),this.goHomeInstance=f.a.Modal.init(this.goHomeRef.current)}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"container-fluid center",id:"pages",children:[Object(n.jsxs)("div",{className:"undo-redo-btns",children:[Object(n.jsx)("button",{className:"btn-floating white",title:"Undo",style:{marginRight:"1rem"},onClick:function(t){return e.state.drawBoard.undo()},children:Object(n.jsx)("i",{className:"material-icons brand-gradient gradient-text",children:"undo"})}),Object(n.jsx)("button",{className:"btn-floating white",title:"Redo",onClick:function(t){return e.state.drawBoard.redo()},children:Object(n.jsx)("i",{className:"material-icons brand-gradient gradient-text",children:"redo"})})]}),Object(n.jsx)("canvas",{className:"page",ref:this.canvasRef}),Object(n.jsxs)("div",{className:"fixed-action-btn",children:[Object(n.jsx)("button",{className:"btn-floating btn-large",children:Object(n.jsx)("i",{className:"brand-gradient gradient- fa fa-".concat("paint"===this.state.mode?"paint-brush":"eraser")})}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("button",{title:"Go to home",className:"btn-floating white",children:Object(n.jsx)("i",{className:"material-icons brand-gradient gradient-text",onClick:function(t){return e.goHomeInstance.open()},children:"home"})})}),Object(n.jsx)("li",{children:Object(n.jsx)("button",{title:"Pick Color and Size",className:"btn-floating white",children:Object(n.jsx)("i",{className:"material-icons brand-gradient gradient-text",onClick:function(t){return e.colorPickerInstance.open()},children:"palette"})})}),Object(n.jsx)("li",{children:Object(n.jsx)("button",{title:"eraser"===this.state.mode?"Eraser":"Brush",className:"btn-floating white",onClick:function(t){return e._setMode("erase"===e.state.mode?"paint":"erase")},children:Object(n.jsx)("i",{className:"fa fa-".concat("paint"===this.state.mode?"eraser":"paint-brush"," brand-gradient gradient-text")})})}),Object(n.jsx)("li",{children:Object(n.jsx)("button",{title:"Clear the board",className:"btn-floating white",onClick:function(t){return e.modalInstance.open()},children:Object(n.jsx)("i",{className:"fa fa-ban brand-gradient gradient-text"})})})]})]}),Object(n.jsxs)("div",{className:"modal bottom-sheet",ref:this.goHomeRef,children:[Object(n.jsxs)("div",{className:"modal-content container center",children:[Object(n.jsx)("h4",{children:"Are you sure you want to go to the home page?"}),Object(n.jsxs)("p",{children:["If you do this, ",Object(n.jsx)("b",{children:"ALL"})," the changes you made will be ",Object(n.jsx)("b",{children:"LOST FOREVER."})]})]}),Object(n.jsxs)("div",{className:"modal-footer container",children:[Object(n.jsx)("button",{className:"btn white green-text right",onClick:function(t){return e.goHomeInstance.close()},children:"No"}),Object(n.jsx)(o.b,{to:"/",className:"btn white red-text left",children:"Yes"})]})]}),Object(n.jsxs)("div",{className:"modal bottom-sheet",ref:this.modalRef,children:[Object(n.jsxs)("div",{className:"modal-content container center",children:[Object(n.jsx)("h4",{children:"Do you want to clear the board?"}),Object(n.jsxs)("p",{children:["If you clear the board, ",Object(n.jsx)("b",{children:"ALL"})," the changes you made will be ",Object(n.jsx)("b",{children:"LOST FOREVER."})]})]}),Object(n.jsxs)("div",{className:"modal-footer container",children:[Object(n.jsx)("button",{className:"btn white green-text right",onClick:function(t){return e.modalInstance.close()},children:"No"}),Object(n.jsx)("button",{className:"btn white red-text left",onClick:function(t){e._clearBoard(),e.modalInstance.close()},children:"Yes"})]})]}),Object(n.jsxs)("div",{className:"modal bottom-sheet",ref:this.colorPickerRef,children:[Object(n.jsx)("div",{className:"modal-content",children:Object(n.jsx)(N,{initialColor:"#000",initialBrushSize:a.boardOptions.brushSize,initialEraserSize:a.boardOptions.eraserSize,onBrushSizeChange:function(t){return e.state.drawBoard.changeBrushSize(t)},onEraserSizeChange:function(t){return e.state.drawBoard.changeEraserSize(t)},onPickColor:function(t){e.state.drawBoard.changeBrushColor([t.rgb.r/255,t.rgb.g/255,t.rgb.b/255])}})}),Object(n.jsx)("div",{className:"modal-footer container",children:Object(n.jsx)("button",{className:"btn green brand-gradient gradient-text",onClick:function(t){return e.colorPickerInstance.close()},children:"Done"})})]})]})}}]),a}(r.Component));R.boardOptions={bgColor:[1,1,1],brushColor:[0,0,0],xScaleFactor:1,yScaleFactor:1,drawAxes:!1,xOffset:0,yOffset:0,brushSize:3,eraserSize:10};var S=R,z=a(5);var k=function(){return Object(n.jsxs)(o.a,{children:[Object(n.jsx)(z.a,{exact:!0,path:"/",component:m}),Object(n.jsx)(z.a,{path:"/pages",component:S})]})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,314)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),s(e),i(e)}))};a(308),a(309),a(310),a(311);c.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(k,{})}),document.getElementById("root")),C()}},[[312,1,2]]]);
//# sourceMappingURL=main.e8c49624.chunk.js.map