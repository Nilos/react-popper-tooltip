(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./docs/readme.mdx":function(e,t,o){"use strict";o.r(t);var n=o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),r=o.n(n),i=o("./node_modules/react/index.js"),l=o.n(i),a=o("./node_modules/@mdx-js/tag/dist/index.js"),s=o("./node_modules/docz/dist/index.m.js"),d=(o("./node_modules/core-js/modules/es6.object.assign.js"),o("./node_modules/@babel/runtime/helpers/objectSpread.js")),c=o.n(d),p=o("./node_modules/@babel/runtime/helpers/classCallCheck.js"),u=o.n(p),m=o("./node_modules/@babel/runtime/helpers/createClass.js"),h=o.n(m),g=o("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),f=o.n(g),v=o("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),y=o.n(v),_=o("./node_modules/@babel/runtime/helpers/inherits.js"),T=o.n(_),b=o("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"),k=o.n(b),C=o("./node_modules/@babel/runtime/helpers/defineProperty.js"),w=o.n(C),O=o("./node_modules/react-dom/index.js"),E=o("./node_modules/react-popper/lib/esm/index.js"),S=(o("./node_modules/core-js/modules/web.dom.iterable.js"),o("./node_modules/core-js/modules/es6.array.for-each.js"),function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return function(){for(var e=arguments.length,o=new Array(e),n=0;n<e;n++)o[n]=arguments[n];return t.forEach(function(e){return e&&e.apply(void 0,o)})}}),P={childList:!0,subtree:!0},j=function(e){function t(){var e,o;u()(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return o=f()(this,(e=y()(t)).call.apply(e,[this].concat(r))),w()(k()(k()(o)),"_handleOutsideClick",function(e){if(!Object(O.findDOMNode)(k()(k()(o))).contains(e.target)){var t=o.props,n=t.hideTooltip,r=t.clearScheduled,i=t.parentOutsideClickHandler;r(),n(),i&&i(e)}}),w()(k()(k()(o)),"_addOutsideClickHandler",function(){return document.addEventListener("click",o._handleOutsideClick)}),w()(k()(k()(o)),"_removeOutsideClickHandler",function(){return document.removeEventListener("click",o._handleOutsideClick)}),w()(k()(k()(o)),"getArrowProps",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return c()({},e,{style:c()({},e.style,o.props.arrowProps.style)})}),w()(k()(k()(o)),"getTooltipProps",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t="hover"===o.props.trigger;return c()({},e,{style:c()({},e.style,o.props.style),onMouseEnter:S(t&&o.props.clearScheduled,e.onMouseEnter),onMouseLeave:S(t&&o.props.hideTooltip,e.onMouseLeave)})}),o}return T()(t,e),h()(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.trigger;if((this.observer=new MutationObserver(function(){e.props.scheduleUpdate()})).observe(Object(O.findDOMNode)(this),P),"click"===t||"right-click"===t){var o=this.props.removeParentOutsideClickHandler;document.addEventListener("click",this._handleOutsideClick),o&&o()}}},{key:"componentWillUnmount",value:function(){var e=this.props.trigger;if(this.observer.disconnect(),"click"===e||"right-click"===e){var t=this.props.addParentOutsideClickHandler;document.removeEventListener("click",this._handleOutsideClick),this._handleOutsideClick=void 0,t&&t()}}},{key:"componentDidUpdate",value:function(){this.props.closeOnOutOfBoundaries&&this.props.outOfBoundaries&&this.props.hideTooltip()}},{key:"render",value:function(){var e=this.props,t=e.arrowProps,o=e.placement,n=e.tooltip,r=e.innerRef;return l.a.createElement(M.Provider,{value:{addParentOutsideClickHandler:this._addOutsideClickHandler,removeParentOutsideClickHandler:this._removeOutsideClickHandler,parentOutsideClickHandler:this._handleOutsideClick}},n({getTooltipProps:this.getTooltipProps,getArrowProps:this.getArrowProps,tooltipRef:r,arrowRef:t.ref,placement:o}))}}]),t}(i.PureComponent);j.__docgenInfo={description:"@private",methods:[{name:"_handleOutsideClick",docblock:null,modifiers:[],params:[{name:"e",type:null}],returns:null},{name:"_addOutsideClickHandler",docblock:null,modifiers:[],params:[],returns:null},{name:"_removeOutsideClickHandler",docblock:null,modifiers:[],params:[],returns:null},{name:"getArrowProps",docblock:null,modifiers:[],params:[{name:"props",type:null}],returns:null},{name:"getTooltipProps",docblock:null,modifiers:[],params:[{name:"props",type:null}],returns:null}],displayName:"Tooltip",props:{innerRef:{type:{name:"func"},required:!1,description:""},style:{type:{name:"object"},required:!1,description:""},arrowProps:{type:{name:"object"},required:!1,description:""},placement:{type:{name:"string"},required:!1,description:""},trigger:{type:{name:"string"},required:!1,description:""},clearScheduled:{type:{name:"func"},required:!1,description:""},tooltip:{type:{name:"func"},required:!1,description:""},hideTooltip:{type:{name:"func"},required:!1,description:""},parentOutsideClickHandler:{type:{name:"func"},required:!1,description:""},scheduleUpdate:{type:{name:"func"},required:!1,description:""},removeParentOutsideClickHandler:{type:{name:"func"},required:!1,description:""},addParentOutsideClickHandler:{type:{name:"func"},required:!1,description:""},closeOnOutOfBoundaries:{type:{name:"bool"},required:!1,description:""},outOfBoundaries:{type:{name:"bool"},required:!1,description:""}}};var H={preventOverflow:{boundariesElement:"viewport",padding:0}},M=l.a.createContext({}),q=function(e){function t(){var e,o;u()(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return o=f()(this,(e=y()(t)).call.apply(e,[this].concat(r))),w()(k()(k()(o)),"state",{tooltipShown:!o._isControlled()&&o.props.defaultTooltipShown}),w()(k()(k()(o)),"_setTooltipState",function(e){var t=function(){return o.props.onVisibilityChange(e)};o._isControlled()?t():o.setState({tooltipShown:e},t)}),w()(k()(k()(o)),"_clearScheduled",function(){clearTimeout(o._hideTimeout),clearTimeout(o._showTimeout)}),w()(k()(k()(o)),"_showTooltip",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.props.delayShow;o._clearScheduled(),o._showTimeout=setTimeout(function(){return o._setTooltipState(!0)},e)}),w()(k()(k()(o)),"_hideTooltip",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.props.delayHide;o._clearScheduled(),o._hideTimeout=setTimeout(function(){return o._setTooltipState(!1)},e)}),w()(k()(k()(o)),"_toggleTooltip",function(e){var t=o._getState()?"_hideTooltip":"_showTooltip";o[t](e)}),w()(k()(k()(o)),"_contextMenuToggle",function(e){e.preventDefault(),o._toggleTooltip()}),w()(k()(k()(o)),"getTriggerProps",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t="click"===o.props.trigger,n="hover"===o.props.trigger,r="right-click"===o.props.trigger;return c()({},e,{onClick:S(t&&o._toggleTooltip,e.onClick),onContextMenu:S(r&&o._contextMenuToggle,e.onContextMenu),onMouseEnter:S(n&&o._showTooltip,e.onMouseEnter),onMouseLeave:S(n&&o._hideTooltip,e.onMouseLeave)})}),o}return T()(t,e),h()(t,[{key:"_isControlled",value:function(){return void 0!==this.props.tooltipShown}},{key:"_getState",value:function(){return this._isControlled()?this.props.tooltipShown:this.state.tooltipShown}},{key:"componentWillUnmount",value:function(){this._clearScheduled()}},{key:"render",value:function(){var e=this,t=this.props,o=t.children,n=t.tooltip,r=t.placement,i=t.trigger,a=t.modifiers,s=t.closeOnOutOfBoundaries;return l.a.createElement(E.a,null,l.a.createElement(E.c,null,function(t){var n=t.ref;return o({getTriggerProps:e.getTriggerProps,triggerRef:n})}),this._getState()&&Object(O.createPortal)(l.a.createElement(E.b,{placement:r,modifiers:c()({},H,a)},function(t){var o=t.ref,r=t.style,a=t.placement,d=t.arrowProps,c=t.outOfBoundaries,p=t.scheduleUpdate;return l.a.createElement(M.Consumer,null,function(t){var u=t.addParentOutsideClickHandler,m=t.removeParentOutsideClickHandler,h=t.parentOutsideClickHandler;return l.a.createElement(j,Object.assign({style:r,arrowProps:d,placement:a,trigger:i,closeOnOutOfBoundaries:s,tooltip:n,addParentOutsideClickHandler:u,removeParentOutsideClickHandler:m,parentOutsideClickHandler:h,outOfBoundaries:c,scheduleUpdate:p},{innerRef:o,hideTooltip:e._hideTooltip,clearScheduled:e._clearScheduled}))})}),document.body))}}]),t}(i.PureComponent);w()(q,"defaultProps",{delayShow:0,delayHide:0,defaultTooltipShown:!1,placement:"right",trigger:"hover",closeOnOutOfBoundaries:!0,onVisibilityChange:function(){}}),q.__docgenInfo={description:"",methods:[{name:"_isControlled",docblock:null,modifiers:[],params:[],returns:null},{name:"_getState",docblock:null,modifiers:[],params:[],returns:null},{name:"_setTooltipState",docblock:null,modifiers:[],params:[{name:"state",type:null}],returns:null},{name:"_clearScheduled",docblock:null,modifiers:[],params:[],returns:null},{name:"_showTooltip",docblock:null,modifiers:[],params:[{name:"delay",type:null}],returns:null},{name:"_hideTooltip",docblock:null,modifiers:[],params:[{name:"delay",type:null}],returns:null},{name:"_toggleTooltip",docblock:null,modifiers:[],params:[{name:"delay",type:null}],returns:null},{name:"_contextMenuToggle",docblock:null,modifiers:[],params:[{name:"event",type:null}],returns:null},{name:"getTriggerProps",docblock:null,modifiers:[],params:[{name:"props",type:null}],returns:null}],displayName:"TooltipTrigger",props:{delayShow:{defaultValue:{value:"0",computed:!1},type:{name:"number"},required:!1,description:"delay in showing the tooltip"},delayHide:{defaultValue:{value:"0",computed:!1},type:{name:"number"},required:!1,description:"delay in hiding the tooltip"},defaultTooltipShown:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"whether tooltip is shown by default"},placement:{defaultValue:{value:"'right'",computed:!1},type:{name:"string"},required:!1,description:"Popper\u2019s placement. Valid placements are:\n - auto\n - top\n - right\n - bottom\n - left\nEach placement can have a variation from this list:\n -start\n -end"},trigger:{defaultValue:{value:"'hover'",computed:!1},type:{name:"enum",value:[{value:"'click'",computed:!1},{value:"'hover'",computed:!1},{value:"'right-click'",computed:!1},{value:"'none'",computed:!1}]},required:!1,description:"the event that triggers the tooltip"},closeOnOutOfBoundaries:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:"whether to close the tooltip when it's trigger is out of the boundary"},onVisibilityChange:{defaultValue:{value:"noop",computed:!0},type:{name:"func"},required:!1,description:"\u0441alled when the visibility of the tooltip changes"},children:{type:{name:"func"},required:!0,description:"trigger"},tooltip:{type:{name:"func"},required:!0,description:"tooltip"},tooltipShown:{type:{name:"bool"},required:!1,description:"use to create controlled tooltip"},modifiers:{type:{name:"object"},required:!1,description:"modifiers passed directly to the underlying popper.js instance\nFor more information, refer to Popper.js\u2019 modifier docs:\n@link https://popper.js.org/popper-documentation.html#modifiers"}}};var B=q,D=(o("./src/styles.css"),function(e){var t=e.tooltip,o=e.children,n=r()(e,["tooltip","children"]);return l.a.createElement(B,Object.assign({},n,{tooltip:function(e){var o=e.getTooltipProps,n=e.getArrowProps,r=e.tooltipRef,i=e.arrowRef,a=e.placement;return l.a.createElement("span",o({ref:r,className:"tooltip-container"}),l.a.createElement("span",n({ref:i,"data-placement":a,className:"tooltip-arrow"})),t)}}),function(e){var t=e.getTriggerProps,n=e.triggerRef;return l.a.createElement("span",t({ref:n}),o)})}),x=D;D.__docgenInfo={description:"",methods:[],displayName:"BasicTooltipTrigger"};var V=function(e){function t(){var e,o;u()(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return o=f()(this,(e=y()(t)).call.apply(e,[this].concat(r))),w()(k()(k()(o)),"_handleKeyDown",function(e){"Escape"===e.key&&o.props.closeTooltip()}),o}return T()(t,e),h()(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this._handleKeyDown)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this._handleKeyDown)}},{key:"render",value:function(){return this.props.children}}]),t}(l.a.Component);V.__docgenInfo={description:"",methods:[{name:"_handleKeyDown",docblock:null,modifiers:[],params:[{name:"{ key }",type:null}],returns:null}],displayName:"EscapeToClose"};var N=function(e){function t(){var e,o;u()(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return o=f()(this,(e=y()(t)).call.apply(e,[this].concat(r))),w()(k()(k()(o)),"state",{on:!1}),w()(k()(k()(o)),"set",function(e){return o.setState({on:e})}),w()(k()(k()(o)),"toggle",function(){return o.setState(function(e){return{on:!e.on}})}),o}return T()(t,e),h()(t,[{key:"render",value:function(){return this.props.children({on:this.state.on,set:this.set,toggle:this.toggle})}}]),t}(l.a.Component);N.__docgenInfo={description:"",methods:[{name:"set",docblock:null,modifiers:[],params:[{name:"on",type:null}],returns:null},{name:"toggle",docblock:null,modifiers:[],params:[],returns:null}],displayName:"StateContainer"};t.default=function(e){var t=e.components,o=r()(e,["components"]);return l.a.createElement(a.MDXTag,{name:"wrapper",components:t},l.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"tooltiptrigger"}},"TooltipTrigger"),l.a.createElement(a.MDXTag,{name:"p",components:t},"The example files are in ",l.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"docs/examples")," directory."),l.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"basic-example"}},"Basic example"),l.a.createElement(s.Playground,{__position:0,__code:'<BasicTooltipTrigger tooltip="Hello, World!">\n  Hover over me\n</BasicTooltipTrigger>',__scope:{props:o,BasicTooltipTrigger:x,EscapeToClose:V,StateContainer:N}},l.a.createElement(x,{tooltip:"Hello, World!"},"Hover over me")),l.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"controlled"}},"Controlled"),l.a.createElement(s.Playground,{__position:1,__code:'<StateContainer>\n  {({ on, set, toggle }) => (\n    <div>\n      <button onClick={toggle}>Toggle tooltip</button>\n      <br />\n      <br />\n      <BasicTooltipTrigger\n        trigger="none"\n        tooltipShown={on}\n        onVisibilityChange={set}\n        tooltip="Hello, Controlled!"\n      >\n        I am state controlled!\n      </BasicTooltipTrigger>\n    </div>\n  )}\n</StateContainer>',__scope:{props:o,BasicTooltipTrigger:x,EscapeToClose:V,StateContainer:N}},l.a.createElement(N,null,function(e){var t=e.on,o=e.set,n=e.toggle;return l.a.createElement("div",null,l.a.createElement("button",{onClick:n},"Toggle tooltip"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(x,{trigger:"none",tooltipShown:t,onVisibilityChange:o,tooltip:"Hello, Controlled!"},"I am state controlled!"))})),l.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"escape-to-close"}},"Escape to close"),l.a.createElement(s.Playground,{__position:2,__code:'<StateContainer>\n  {({ on, set }) => (\n    <BasicTooltipTrigger\n      trigger="click"\n      tooltipShown={on}\n      onVisibilityChange={set}\n      tooltip={\n        <EscapeToClose closeTooltip={() => set(false)}>\n          Press Esc to Close\n        </EscapeToClose>\n      }\n    >\n      Click Here\n    </BasicTooltipTrigger>\n  )}\n</StateContainer>',__scope:{props:o,BasicTooltipTrigger:x,EscapeToClose:V,StateContainer:N}},l.a.createElement(N,null,function(e){var t=e.on,o=e.set;return l.a.createElement(x,{trigger:"click",tooltipShown:t,onVisibilityChange:o,tooltip:l.a.createElement(V,{closeTooltip:function(){return o(!1)}},"Press Esc to Close")},"Click Here")})),l.a.createElement(a.MDXTag,{name:"p",components:t},"Note: ",l.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"StateContainer")," is for demo purpose only and used for state management."))}},"./src/styles.css":function(e,t,o){}}]);