(this.webpackJsonpmonsterclicker=this.webpackJsonpmonsterclicker||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(6),c=a.n(r),o=a(1),m=a(2),s=a(4),l=a(3),d=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.monster,t=e.id,a=e.img,n=e.name;return i.a.createElement("div",null,i.a.createElement("img",{src:a,alt:n,onClick:this.props.markClicked.bind(this,t)}))}}]),a}(n.Component),u=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).Shuffle=function(e){return e.sort((function(){return Math.random()-.5})),e},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return this.Shuffle(this.props.monsters).map((function(t){return i.a.createElement("div",{className:"col-sm-4"},i.a.createElement(d,{monster:t,key:t.id,id:t.id,name:t.name,img:t.img,clicked:t.clicked,markClicked:e.props.markClicked}))}))}}]),a}(n.Component),h=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={count:-1},e}return Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("span",{className:"navbar-brand navLeft",onClick:this.state.count++},"| Score: ",this.state.count," |"))}}]),a}(i.a.Component);var g=function(){return i.a.createElement("nav",{className:"navbar fixed-top navbar-dark bg-dark"},i.a.createElement("a",{className:"navbar-brand navRight",href:"#"},"Monster Clicker: World"),i.a.createElement("a",{className:"navbar-brand navCenter",href:"#"},"Click an image to begin!"),i.a.createElement("a",{className:"navbar-brand navLeft",href:"#"},i.a.createElement(h,null)))};var k=function(){return i.a.createElement("div",{className:"jumbotron jumbotron-fluid"},i.a.createElement(g,null),i.a.createElement("div",{className:"container mt-5"},i.a.createElement("h1",{className:"display-4"},"Monster Clicker: World"),i.a.createElement("p",{className:"lead"},"Click a monster to complete its hunt. Don't hunter a monster more than once!")))};var p=function(){return i.a.createElement("nav",{className:"navbar sticky-bottom navbar-dark bg-dark"},i.a.createElement("a",{className:"navbar-brand",href:"#"}))},v=(a(12),function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={monsters:[{id:1,Name:"Nergigante",img:"https://oyster.ignimgs.com/mediawiki/apis.ign.com/monster-hunter-world/1/1d/Nergigante_16.jpg?width=325",clicked:!1},{id:2,name:"Vaal Hazak",img:"https://oyster.ignimgs.com/mediawiki/apis.ign.com/monster-hunter-world/b/b5/Vaal_Hazak28.jpg?width=325",clicked:!1},{id:3,name:"Kushala Daora",img:"https://oyster.ignimgs.com/mediawiki/apis.ign.com/monster-hunter-world/e/e2/Kushala_Daora13.jpg?width=325",clicked:!1},{id:4,name:"Teostra",img:"https://oyster.ignimgs.com/mediawiki/apis.ign.com/monster-hunter-world/c/cb/Teostra24.jpg?width=325",clicked:!1},{id:5,name:"Lunastra",img:"https://oyster.ignimgs.com/mediawiki/apis.ign.com/monster-hunter-world/7/7a/Djm-CSgW4AEFEO9.jpg?width=325",clicked:!1},{id:6,name:"Kirin",img:"https://oyster.ignimgs.com/mediawiki/apis.ign.com/monster-hunter-world/e/ee/Kirin11.jpg?width=325",clicked:!1},{id:7,name:"Xeno'jiiva",img:"https://oyster.ignimgs.com/mediawiki/apis.ign.com/monster-hunter-world/b/b6/Djm-GB3WwAIu-db.jpg?width=325",clicked:!1},{id:8,name:"Kulve Taroth",img:"https://oyster.ignimgs.com/mediawiki/apis.ign.com/monster-hunter-world/c/cb/Djm-EXPX4AcK9S-.jpg?width=325",clicked:!1},{id:9,name:"Velkhana",img:"https://oyster.ignimgs.com/mediawiki/apis.ign.com/monster-hunter-world/c/c3/Velkhanaicon.jpg?width=325",clicked:!1},{id:10,name:"Namielle",img:"https://oyster.ignimgs.com/mediawiki/apis.ign.com/monster-hunter-world/a/a4/Namielleicon.jpg?width=325",clicked:!1},{id:11,name:"Shara Ishvalda",img:"https://oyster.ignimgs.com/mediawiki/apis.ign.com/monster-hunter-world/4/4b/Shara_Ishvaldaicon.jpg?width=325",clicked:!1},{id:12,name:"Zinogre",img:"https://oyster.ignimgs.com/mediawiki/apis.ign.com/monster-hunter-world/1/1f/Zinogreicon.jpg?width=325",clicked:!1}]},e.markClicked=function(t){e.setState({monsters:e.state.monsters.map((function(e){return e.id===t&&(e.clicked=!e.clicked,console.log("You guessed correctly!")),e.id===t&&!1!==!e.clicked&&(e.clicked=!e.clicked,alert("Oh No! You have hunted a monster twice. It could go extinct!"),window.location.reload(!1)),e}))})},e}return Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(k,null),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement(u,{monsters:this.state.monsters,markClicked:this.markClicked}))),i.a.createElement(p,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.50b8526c.chunk.js.map