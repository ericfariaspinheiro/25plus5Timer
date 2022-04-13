import{j as b,r as d,R as g,a as y}from"./vendor.c3a529fb.js";const S=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))m(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&m(a)}).observe(document,{childList:!0,subtree:!0});function u(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function m(e){if(e.ep)return;e.ep=!0;const r=u(e);fetch(e.href,r)}};S();const t=b.exports.jsx,o=b.exports.jsxs;function C(n){return o("div",{id:"timer",className:"allItems",children:[o("div",{id:"timer-counter",children:[t("h3",{id:"timer-label",children:n.label}),t("h2",{id:"time-left",children:n.displayFormatter()}),t("audio",{id:"beep",src:"https://sampleswap.org/samples-ghost/SOUND%20EFFECTS%20and%20NOISES/Alarm%20Sounds/137[kb]alarm-synth-verb-hit.wav.mp3"})]}),o("div",{className:"lowerButtons",children:[t("button",{id:"start_stop",onClick:n.handleClickPlayPause,children:"PLAY/PAUSE"}),t("button",{id:"reset",onClick:n.handleClickReset,children:"RESET"})]})]})}function I(n){return o("div",{id:"settings",className:"allItems",children:[o("div",{id:"break",children:[t("h3",{children:"Break Length"}),o("div",{id:"break-label",children:[t("button",{id:"break-decrement",className:"arrowButtons",onClick:n.clickers,children:"\u2193"}),t("h4",{id:"break-length",children:n.timeBreak}),t("button",{id:"break-increment",className:"arrowButtons",onClick:n.clickers,children:"\u2191"})]})]}),o("div",{id:"session",children:[t("h3",{children:"Session Length"}),o("div",{id:"session-label",children:[t("button",{id:"session-decrement",className:"arrowButtons",onClick:n.clickers,children:"\u2193"}),t("h4",{id:"session-length",children:n.timeSession}),t("button",{id:"session-increment",className:"arrowButtons",onClick:n.clickers,children:"\u2191"})]})]})]})}function B(){const[n,c]=d.exports.useState(25),[u,m]=d.exports.useState(5),[e,r]=d.exports.useState(1500),[a,f]=d.exports.useState(!0),[v,h]=d.exports.useState("Session"),[k,p]=d.exports.useState(!1);return d.exports.useEffect(()=>{if(a)return;if(k){if(e===0){r(n*60),document.getElementById("beep").play(),p(!1);return}h("Break");const l=setInterval(()=>{r(i=>i-1)},1e3);return()=>clearInterval(l)}if(e===0){r(u*60),document.getElementById("beep").play(),p(!0);return}const s=setInterval(()=>{h("Session"),r(l=>l-1)},1e3);return()=>clearInterval(s)},[a,e,k]),o("div",{children:[t("div",{className:"header"}),o("div",{id:"full-project",children:[t("div",{id:"title",className:"allItems",children:t("img",{src:"https://upload.wikimedia.org/wikipedia/commons/9/9d/Tomato.png",alt:"tomato"})}),t(I,{timeSession:n,timeBreak:u,clickers:s=>{const l=s.target.id;if(!!a)switch(l){case"break-decrement":return u===1?void 0:m(i=>i-1);case"break-increment":return u===60?void 0:m(i=>i+1);case"session-decrement":if(n===1)return;c(i=>i-1),r(i=>i-60);return;case"session-increment":if(n===60)return;c(i=>i+1),r(i=>i+60);return}}}),t(C,{label:v,displayFormatter:()=>{let s=Math.floor(e/60),l=e-s*60;return l=l<10?"0"+l:l,s=s<10?"0"+s:s,s+":"+l},handleClickPlayPause:()=>f(!a),handleClickReset:()=>{const s=document.getElementById("beep");s.pause(),c(25),m(5),r(1500),f(!0),h("Session"),s.currentTime=0}})]})]})}g.render(t(y.StrictMode,{children:t(B,{})}),document.getElementById("root"));