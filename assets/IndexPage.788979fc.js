import{Q as w}from"./QPage.e4795e9c.js";import{c as y,a as C,h as S,e as D,ad as k,ae as $,j as I,$ as R,a0 as u,a1 as t,a2 as s,a3 as a,a4 as o,a6 as c,af as d,a5 as i,Q as g,ag as f,ah as P,r as h,ai as T,aj as N,ak as Q,al as b,am as q}from"./index.d02fe9b7.js";import{Q as z}from"./QCard.44bb6ba4.js";import"./use-dark.5ef000d2.js";var v=y({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:n}){const r=C(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>S(e.tag,{class:r.value},D(n.default))}}),H=y({name:"QCardActions",props:{...k,vertical:Boolean},setup(e,{slots:n}){const r=$(e),p=C(()=>`q-card__actions ${r.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>S("div",{class:p.value},D(n.default))}});const M=I({name:"HomeCard",props:{homecard_data:{Title:{type:String,default:"TEST ENTRY"},Caption:{type:String,default:"something else"},Description:{type:String,default:"test description"},ButtonText:{type:String,default:"TEST ENTRY"},RefType:{type:String,default:"TEST ENTRY"},PageRef:{type:String,default:"TEST ENTRY"},URL:{type:String,default:"TEST ENTRY"}}}}),Y={class:"text-h6"},A={class:"text-subtitle2"};function L(e,n,r,p,_,E){const l=u("router-link");return t(),s(z,{class:P(["homepage-card text-white",e.homecard_data.BackgroundColor])},{default:a(()=>[o(v,null,{default:a(()=>[c("div",Y,d(e.homecard_data.Title),1),c("div",A,d(e.homecard_data.Caption),1)]),_:1}),o(v,null,{default:a(()=>[i(d(e.homecard_data.Description),1)]),_:1}),o(H,{align:"right"},{default:a(()=>[o(l,{to:e.homecard_data.PageRef},{default:a(()=>[e.homecard_data.RefType=="internal"?(t(),s(g,{key:0},{default:a(()=>[i(d(e.homecard_data.ButtonText),1)]),_:1})):f("",!0)]),_:1},8,["to"]),e.homecard_data.RefType!="internal"?(t(),s(g,{key:0},{default:a(()=>[i("External")]),_:1})):f("",!0)]),_:1})]),_:1},8,["class"])}var V=R(M,[["render",L],["__scopeId","data-v-11e3be3c"]]),j=[{Title:"Dynamo",Description:"Model Integration as a Service! Dynamo is a dynamic modelling modelling platform that allows modelers to leverage HPC to facilitate running models",ButtonText:"Read more on MINT",RefType:"internal",PageRef:"dynamo_page",BackgroundColor:"bg-primary"},{Title:"DOLCE Data Management",Description:"Classification, Categorization & Ingest of Data aand Metadata at scale",ButtonText:"Explore DOLCE",RefType:"internal",PageRef:"dolce_page",BackgroundColor:"bg-secondary"},{Title:"Sociotechnical Digital Twins",Description:"Digital Twins are poised to revolutionize simulations. The REDI team is developing tools that streamline the creation and orchestration of Digital Twins using physics-based information to support participatory processes",ButtonText:"More on Digital Twins",RefType:"internal",PageRef:"digital_twins_page",BackgroundColor:"bg-indigo-11"}];const F={name:"IndexPage",components:{HomeCard:V},data(){return{homepagecards:j}},setup(){return{tab:h("Service"),splitterModel:h(20)}}},O=e=>(b("data-v-6663494a"),e=e(),q(),e),U=O(()=>c("div",{class:"row align-items-center site-header"},[i(" REDI Solutions "),c("br"),i(" Facilitating Data Services and Decision Support Systems ")],-1));function G(e,n,r,p,_,E){const l=u("q-section"),x=u("HomeCard");return t(),s(w,{class:"flex flex-center landing"},{default:a(()=>[o(l,{class:"row"},{default:a(()=>[U]),_:1}),o(l,{class:"row"},{default:a(()=>[(t(!0),T(Q,null,N(_.homepagecards,(B,m)=>(t(),T("div",{class:"col-lg-4 col-md-6 col-xs-12",key:m},[(t(),s(x,{class:"q-ma-md",key:m,homecard_data:B},null,8,["homecard_data"]))]))),128))]),_:1})]),_:1})}var Z=R(F,[["render",G],["__scopeId","data-v-6663494a"]]);export{Z as default};