"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[588],{6588:function(e,l,i){i.d(l,{Z:function(){return shop_FilterShopBox}});var s=i(7437),a=i(8996),t=i(8733),n=i(2265),r=i(3046),d=i(3354),o=i(2159),c=i(2813),u=i(2480),h=i(1396),v=i.n(h),shop_ShopCardList=e=>{let{item:l,addToCart:i,addToWishlist:a}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"row mb-40",children:[(0,s.jsx)("div",{className:"col-lg-4 col-md-12",children:(0,s.jsx)("div",{className:"tpproduct__thumb",children:(0,s.jsx)("div",{className:"tpproduct__thumbitem p-relative",children:(0,s.jsxs)(v(),{href:"/shop-details",children:[(0,s.jsx)("img",{src:"/assets/img/product/".concat(l.imgf),alt:"product-thumb"}),(0,s.jsx)("img",{className:"thumbitem-secondary",src:"/assets/img/product/".concat(l.imgb),alt:"product-thumb"})]})})})}),(0,s.jsx)("div",{className:"col-lg-8 col-md-12",children:(0,s.jsxs)("div",{className:"filter-product ml-20 pt-30",children:[(0,s.jsx)("h3",{className:"filter-product-title",children:(0,s.jsx)(v(),{href:"/shop-details",children:"Miko Wooden Bluetooth Shirt"})}),(0,s.jsxs)("div",{className:"tpproduct__ammount",children:[(0,s.jsx)("span",{children:"$31.00"}),(0,s.jsx)("del",{children:"$25.00"})]}),(0,s.jsx)("div",{className:"tpproduct__rating mb-15",children:(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(v(),{href:"#",children:(0,s.jsx)("i",{className:"fas fa-star"})}),(0,s.jsx)(v(),{href:"#",children:(0,s.jsx)("i",{className:"fas fa-star"})}),(0,s.jsx)(v(),{href:"#",children:(0,s.jsx)("i",{className:"fas fa-star"})}),(0,s.jsx)(v(),{href:"#",children:(0,s.jsx)("i",{className:"fas fa-star"})}),(0,s.jsx)(v(),{href:"#",children:(0,s.jsx)("i",{className:"far fa-star"})})]}),(0,s.jsx)("li",{children:(0,s.jsx)("span",{children:"(81)"})})]})}),(0,s.jsx)("p",{children:"Sed ut perspiciatis unde omnis iste natus error sit volup tatem accusa ntium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam volup tatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione volup tatem sequi nesciunt."}),(0,s.jsx)("p",{children:"Once that's determined, you need to come up with a name and set up a legal structure, such as a corporation. Next, set an ecommerce site with a payment gateway. For instance, a small business owner who runs a dress shop can set up a website promoting their clothing and other related products online and allow customers to make payments with a credit card or through a payment processing service, such as PayPal."}),(0,s.jsxs)("div",{className:"tpproduct__action",children:[(0,s.jsx)(v(),{className:"comphare",href:"#",children:(0,s.jsx)("i",{className:"fal fa-exchange"})}),(0,s.jsx)(v(),{className:"quckview",href:"#",children:(0,s.jsx)("i",{className:"fal fa-eye"})}),(0,s.jsx)("a",{onClick:()=>a(l.id),className:"wishlist",children:(0,s.jsx)("i",{className:"fal fa-heart"})}),(0,s.jsx)("a",{onClick:()=>i(l.id),children:(0,s.jsx)("i",{className:"fal fa-shopping-basket"})})]})]})})]})})},shop_FilterShopBox=()=>{var e,l,i,h,v,m,p,x,j,f,g,N,b,C,w;let{shopList:F,shopSort:y}=(0,r.v9)(e=>e.filter),{price:k,category:_,color:O,brand:S}=F||{},{sort:T,perPage:q}=y,L=(0,r.I0)(),addToCart=e=>{let l=null==d?void 0:d.find(l=>l.id===e);L((0,a.Z5)({product:l}))},addToWishlist=e=>{let l=null==d?void 0:d.find(l=>l.id===e);L((0,t.bj)({product:l}))},[W,J]=(0,n.useState)(2),handleOnClick=e=>{J(e)},priceFilter=e=>{var l,i;return(null==e?void 0:null===(l=e.price)||void 0===l?void 0:l.min)>=(null==k?void 0:k.min)&&(null==e?void 0:null===(i=e.price)||void 0===i?void 0:i.max)<=(null==k?void 0:k.max)},categoryFilter=e=>{var l;return(null==_?void 0:_.length)!==0&&(null==e?void 0:e.category)!==void 0?null==_?void 0:_.includes(null==e?void 0:null===(l=e.category[0])||void 0===l?void 0:l.type.toLocaleLowerCase().split(" ").join("-")):e},colorFilter=e=>{var l;return(null==O?void 0:O.length)!==0&&(null==e?void 0:e.color)!==void 0?null==O?void 0:O.includes(null==e?void 0:null===(l=e.color[0])||void 0===l?void 0:l.type.toLocaleLowerCase().split(" ").join("-")):e},brandFilter=e=>{var l;return(null==S?void 0:S.length)!==0&&(null==e?void 0:e.brand)!==void 0?null==S?void 0:S.includes(null==e?void 0:null===(l=e.brand[0])||void 0===l?void 0:l.type.toLocaleLowerCase().split(" ").join("-")):e},sortFilter=(e,l)=>"des"===T?e.id>l.id&&-1:e.id<l.id&&-1,I=null==d?void 0:null===(v=d.filter(priceFilter))||void 0===v?void 0:null===(h=v.filter(categoryFilter))||void 0===h?void 0:null===(i=h.filter(colorFilter))||void 0===i?void 0:null===(l=i.filter(brandFilter))||void 0===l?void 0:null===(e=l.sort(sortFilter).slice(q.start,0!==q.end?q.end:10))||void 0===e?void 0:e.map((e,l)=>(0,s.jsx)(n.Fragment,{children:(0,s.jsx)(u.Z,{item:e,addToCart:addToCart,addToWishlist:addToWishlist,activeIndex:W,handleOnClick:handleOnClick})},l));return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"product-filter-content mb-40",children:(0,s.jsxs)("div",{className:"row align-items-center",children:[(0,s.jsx)("div",{className:"col-sm-6",children:(0,s.jsx)("div",{className:"product-item-count",children:(0,s.jsxs)("span",{children:[(0,s.jsx)("b",{children:null==I?void 0:I.length})," Item On List"]})})}),(0,s.jsx)("div",{className:"col-sm-6",children:(0,s.jsxs)("div",{className:"product-navtabs d-flex justify-content-end align-items-center",children:[(0,s.jsxs)("div",{className:"tp-shop-selector",children:[(null==k?void 0:k.min)!==0||(null==k?void 0:k.max)!==100||(null==_?void 0:_.length)!==0||(null==O?void 0:O.length)!==0||(null==S?void 0:S.length)!==0||""!==T||0!==q.start||0!==q.end?(0,s.jsx)("button",{onClick:()=>{L((0,o.mN)({min:0,max:100})),L((0,o.tr)()),L((0,c.Ad)()),L((0,o.pn)()),L((0,c.gn)()),L((0,o.RK)()),L((0,c.lV)()),L((0,o.CI)("")),L((0,o.ar)({start:0,end:0}))},className:"btn btn-danger text-nowrap me-2",style:{minHeight:"45px",marginBottom:"15px"},children:"Clear All"}):void 0,(0,s.jsxs)("select",{value:T,className:"chosen-single form-select",onChange:e=>{L((0,o.CI)(e.target.value))},children:[(0,s.jsx)("option",{value:"",children:"Sort by (default)"}),(0,s.jsx)("option",{value:"asc",children:"Newest"}),(0,s.jsx)("option",{value:"des",children:"Oldest"})]}),(0,s.jsxs)("select",{onChange:e=>{let l=JSON.parse(e.target.value);L((0,o.ar)(l))},className:"chosen-single form-select ms-3 ",value:JSON.stringify(q),children:[(0,s.jsx)("option",{value:JSON.stringify({start:0,end:0}),children:"All"}),(0,s.jsx)("option",{value:JSON.stringify({start:0,end:10}),children:"10 per page"}),(0,s.jsx)("option",{value:JSON.stringify({start:0,end:20}),children:"20 per page"}),(0,s.jsx)("option",{value:JSON.stringify({start:0,end:30}),children:"30 per page"})]})]}),(0,s.jsx)("div",{className:"tpproductnav tpnavbar product-filter-nav",children:(0,s.jsx)("nav",{children:(0,s.jsxs)("div",{className:"nav nav-tabs",id:"nav-tab",role:"tablist",children:[(0,s.jsx)("button",{className:1==W?"nav-link active":"nav-link",onClick:()=>handleOnClick(1),children:(0,s.jsx)("i",{className:"fal fa-list-ul"})}),(0,s.jsx)("button",{className:2==W?"nav-link active":"nav-link",onClick:()=>handleOnClick(2),children:(0,s.jsx)("i",{className:"fal fa-th"})})]})})})]})})]})}),(0,s.jsx)("div",{className:"row mb-50",children:(0,s.jsx)("div",{className:"col-lg-12",children:(0,s.jsxs)("div",{className:"tab-content",id:"nav-tabContent",children:[(0,s.jsx)("div",{className:1==W?"tab-pane fade show active":"tab-pane fade",children:null==d?void 0:null===(f=d.filter(priceFilter))||void 0===f?void 0:null===(j=f.filter(categoryFilter))||void 0===j?void 0:null===(x=j.filter(colorFilter))||void 0===x?void 0:null===(p=x.filter(brandFilter))||void 0===p?void 0:null===(m=p.sort(sortFilter).slice(q.start,0!==q.end?q.end:10))||void 0===m?void 0:m.map((e,l)=>(0,s.jsx)(n.Fragment,{children:(0,s.jsx)(shop_ShopCardList,{item:e,addToCart:addToCart,addToWishlist:addToWishlist})},l))}),(0,s.jsx)("div",{className:2==W?"tab-pane fade show active":"tab-pane fade",children:(0,s.jsx)("div",{className:"row row-cols-xxl-4 row-cols-xl-4 row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-1 tpproduct",children:null==d?void 0:null===(w=d.filter(priceFilter))||void 0===w?void 0:null===(C=w.filter(categoryFilter))||void 0===C?void 0:null===(b=C.filter(colorFilter))||void 0===b?void 0:null===(N=b.filter(brandFilter))||void 0===N?void 0:null===(g=N.sort(sortFilter).slice(q.start,0!==q.end?q.end:10))||void 0===g?void 0:g.map((e,l)=>(0,s.jsx)(n.Fragment,{children:(0,s.jsx)(u.Z,{item:e,addToCart:addToCart,addToWishlist:addToWishlist})},l))})})]})})})]})}}}]);