(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{45:function(e,t,n){e.exports=n(78)},74:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(40),c=n.n(s),o=n(14),u=n(7),l=n(43),i=(n(54),Object(o.c)({loginMessage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";switch((arguments.length>1?arguments[1]:void 0).type){case"CLEAR_LOGIN_ERROR":return"";case"LOGIN_INPUT_ERROR":return"Enter your username and password!";case"LOGIN_FAILED":return"Oops! The username and password didn't match. Try again!";case"LOGIN_FAILED_NO_CODE":return"Oops! Something went wrong! Is the server running?";default:return e}},registrationMessage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";switch((arguments.length>1?arguments[1]:void 0).type){case"CLEAR_REGISTRATION_ERROR":return"";case"REGISTRATION_INPUT_ERROR":return"Choose a username and password!";case"REGISTRATION_FAILED":return"Oops! That didn't work. The username might already be taken. Try again!";default:return e}}})),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"login";switch((arguments.length>1?arguments[1]:void 0).type){case"SET_TO_LOGIN_MODE":return"login";case"SET_TO_REGISTER_MODE":return"register";default:return e}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return t.payload;case"UNSET_USER":return{};default:return e}},E=Object(o.c)({errors:i,loginMode:p,user:m}),d=n(5),h=n.n(d),b=n(6),O=n(17),g=n.n(O),f=h.a.mark(R),v=h.a.mark(y),w=h.a.mark(I);function R(e){var t;return h.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(b.b)({type:"CLEAR_LOGIN_ERROR"});case 3:return t={headers:{"Content-Type":"application/json"},withCredentials:!0},n.next=6,g.a.post("/api/user/login",e.payload,t);case 6:return n.next=8,Object(b.b)({type:"FETCH_USER"});case 8:n.next=20;break;case 10:if(n.prev=10,n.t0=n.catch(0),console.log("Error with user login:",n.t0),401!==n.t0.response.status){n.next=18;break}return n.next=16,Object(b.b)({type:"LOGIN_FAILED"});case 16:n.next=20;break;case 18:return n.next=20,Object(b.b)({type:"LOGIN_FAILED_NO_CODE"});case 20:case"end":return n.stop()}},f,null,[[0,10]])}function y(e){var t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={headers:{"Content-Type":"application/json"},withCredentials:!0},e.next=4,g.a.post("/api/user/logout",t);case 4:return e.next=6,Object(b.b)({type:"UNSET_USER"});case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error with user logout:",e.t0);case 11:case"end":return e.stop()}},v,null,[[0,8]])}function I(){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.c)("LOGIN",R);case 2:return e.next=4,Object(b.c)("LOGOUT",y);case 4:case"end":return e.stop()}},w)}var j=I,T=h.a.mark(N),_=h.a.mark(x);function N(e){return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(b.b)({type:"CLEAR_REGISTRATION_ERROR"});case 3:return t.next=5,g.a.post("/api/user/register",e.payload);case 5:return t.next=7,Object(b.b)({type:"LOGIN",payload:e.payload});case 7:return t.next=9,Object(b.b)({type:"SET_TO_LOGIN_MODE"});case 9:t.next=16;break;case 11:return t.prev=11,t.t0=t.catch(0),console.log("Error with user registration:",t.t0),t.next=16,Object(b.b)({type:"REGISTRATION_FAILED"});case 16:case"end":return t.stop()}},T,null,[[0,11]])}function x(){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.c)("REGISTER",N);case 2:case"end":return e.stop()}},_)}var C=x,S=h.a.mark(L),k=h.a.mark(G);function L(){var e,t;return h.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e={headers:{"Content-Type":"application/json"},withCredentials:!0},n.next=4,g.a.get("/api/user",e);case 4:return t=n.sent,n.next=7,Object(b.b)({type:"SET_USER",payload:t.data});case 7:n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log("User get request failed",n.t0);case 12:case"end":return n.stop()}},S,null,[[0,9]])}function G(){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.c)("FETCH_USER",L);case 2:case"end":return e.stop()}},k)}var U=G,A=h.a.mark(F);function F(){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)([j(),C(),U()]);case 2:case"end":return e.stop()}},A)}var D=n(18),M=n(19),P=n(21),H=n(20),J=n(22),q=n(15),B=n(16),W=Object(u.b)()(function(e){return r.a.createElement("button",{className:e.className,onClick:function(){return e.dispatch({type:"LOGOUT"})}},"Log Out")}),Y=(n(74),Object(u.b)(function(e){return{user:e.user}})(function(e){return r.a.createElement("div",{className:"nav"},r.a.createElement(q.b,{to:"/home"},r.a.createElement("h2",{className:"nav-title"},"Prime Solo Project")),r.a.createElement("div",{className:"nav-right"},r.a.createElement(q.b,{className:"nav-link",to:"/home"},e.user.id?"Home":"Login / Register"),e.user.id&&r.a.createElement(r.a.Fragment,null,r.a.createElement(q.b,{className:"nav-link",to:"/info"},"Info Page"),r.a.createElement(W,{className:"nav-link"})),r.a.createElement(q.b,{className:"nav-link",to:"/about"},"About")))})),z=(n(76),function(){return r.a.createElement("footer",null,"\xa9 Prime Digital Academy")}),K=n(44),Q=n(28),V=function(e){function t(){var e,n;Object(D.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(P.a)(this,(e=Object(H.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},n.login=function(e){e.preventDefault(),n.state.username&&n.state.password?n.props.dispatch({type:"LOGIN",payload:{username:n.state.username,password:n.state.password}}):n.props.dispatch({type:"LOGIN_INPUT_ERROR"})},n.handleInputChangeFor=function(e){return function(t){n.setState(Object(Q.a)({},e,t.target.value))}},n}return Object(J.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.props.errors.loginMessage&&r.a.createElement("h2",{className:"alert",role:"alert"},this.props.errors.loginMessage),r.a.createElement("form",{onSubmit:this.login},r.a.createElement("h1",null,"Login"),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"username"},"Username:",r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:this.handleInputChangeFor("username")}))),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"password"},"Password:",r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleInputChangeFor("password")}))),r.a.createElement("div",null,r.a.createElement("input",{className:"log-in",type:"submit",name:"submit",value:"Log In"}))),r.a.createElement("center",null,r.a.createElement("button",{type:"button",className:"link-button",onClick:function(){e.props.dispatch({type:"SET_TO_REGISTER_MODE"})}},"Register")))}}]),t}(a.Component),X=Object(u.b)(function(e){return{errors:e.errors}})(V),Z=function(e){function t(){var e,n;Object(D.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(P.a)(this,(e=Object(H.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},n.registerUser=function(e){e.preventDefault(),n.state.username&&n.state.password?n.props.dispatch({type:"REGISTER",payload:{username:n.state.username,password:n.state.password}}):n.props.dispatch({type:"REGISTRATION_INPUT_ERROR"})},n.handleInputChangeFor=function(e){return function(t){n.setState(Object(Q.a)({},e,t.target.value))}},n}return Object(J.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.props.errors.registrationMessage&&r.a.createElement("h2",{className:"alert",role:"alert"},this.props.errors.registrationMessage),r.a.createElement("form",{onSubmit:this.registerUser},r.a.createElement("h1",null,"Register User"),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"username"},"Username:",r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:this.handleInputChangeFor("username")}))),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"password"},"Password:",r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleInputChangeFor("password")}))),r.a.createElement("div",null,r.a.createElement("input",{className:"register",type:"submit",name:"submit",value:"Register"}))),r.a.createElement("center",null,r.a.createElement("button",{type:"button",className:"link-button",onClick:function(){e.props.dispatch({type:"SET_TO_LOGIN_MODE"})}},"Login")))}}]),t}(a.Component),$=Object(u.b)(function(e){return{errors:e.errors}})(Z),ee=Object(u.b)(function(e){return{user:e.user,loginMode:e.loginMode}})(function(e){var t,n=e.component,a=e.user,s=e.loginMode,c=Object(K.a)(e,["component","user","loginMode"]);return t=a.id?n:"login"===s?X:$,r.a.createElement(B.b,Object.assign({},c,{component:t}))}),te=function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",null,"This about page is for anyone to read!")))},ne=Object(u.b)(function(e){return{user:e.user}})(function(e){return r.a.createElement("div",null,r.a.createElement("h1",{id:"welcome"},"Welcome, ",e.user.username,"!"),r.a.createElement("p",null,"Your ID is: ",e.user.id),r.a.createElement(W,{className:"log-in"}))}),ae=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Info Page"))},re=(n(77),function(e){function t(){return Object(D.a)(this,t),Object(P.a)(this,Object(H.a)(t).apply(this,arguments))}return Object(J.a)(t,e),Object(M.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch({type:"FETCH_USER"})}},{key:"render",value:function(){return r.a.createElement(q.a,null,r.a.createElement("div",null,r.a.createElement(Y,null),r.a.createElement(B.d,null,r.a.createElement(B.a,{exact:!0,from:"/",to:"/home"}),r.a.createElement(B.b,{exact:!0,path:"/about",component:te}),r.a.createElement(ee,{exact:!0,path:"/home",component:ne}),r.a.createElement(ee,{exact:!0,path:"/info",component:ae}),r.a.createElement(B.b,{render:function(){return r.a.createElement("h1",null,"404")}})),r.a.createElement(z,null)))}}]),t}(a.Component)),se=Object(u.b)()(re),ce=Object(l.a)(),oe=[ce],ue=Object(o.e)(E,o.a.apply(void 0,oe));ce.run(F),c.a.render(r.a.createElement(u.a,{store:ue},r.a.createElement(se,null)),document.getElementById("react-root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.61f67618.chunk.js.map