import{defineComponent as g,ref as d,onBeforeUpdate as h,h as n}from"vue";import"./styles/code-group.scss";const c=({active:p=!1},{slots:u})=>{var e;return n("div",{class:["code-group-item",{active:p}],"aria-selected":p},(e=u.default)==null?void 0:e.call(u))};c.displayName="CodeGroupItem";const y=g({name:"CodeGroup",setup(p,{slots:u}){const e=d(-1),t=d([]);__VUEPRESS_DEV__&&h(()=>{t.value=[]});const i=(a=e.value)=>{e.value=a<t.value.length-1?a+1:0,t.value[e.value].focus()},f=(a=e.value)=>{e.value=a>0?a-1:t.value.length-1,t.value[e.value].focus()},m=(a,o)=>{a.key===" "||a.key==="Enter"?(a.preventDefault(),e.value=o):a.key==="ArrowRight"?(a.preventDefault(),i(o)):a.key==="ArrowLeft"&&(a.preventDefault(),f(o))};return()=>{var a;const o=(((a=u.default)==null?void 0:a.call(u))||[]).filter(l=>l.type.name==="CodeGroupItem").map(l=>(l.props===null&&(l.props={}),l));return o.length===0?null:(e.value<0||e.value>o.length-1?(e.value=o.findIndex(l=>"active"in l.props),e.value===-1&&(e.value=0)):o.forEach((l,r)=>{l.props.active=r===e.value}),n("div",{class:"code-group"},[n("div",{class:"code-group-nav"},o.map((l,r)=>{const s=r===e.value;return n("button",{ref:v=>{v&&(t.value[r]=v)},class:["code-group-nav-tab",{active:s}],"aria-pressed":s,"aria-expanded":s,onClick:()=>{e.value=r},onKeydown:v=>m(v,r)},l.props.title)})),o]))}}});export{y as CodeGroup,c as CodeGroupItem};
//# sourceMappingURL=index.js.map