(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1ZKsK",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__QzlxA"}},11:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2tXX0",Modal:"Modal_Modal__W2pDR"}},23:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__pMUlK"}},24:function(e,t,a){e.exports={Button:"Button_Button__2iUC8"}},26:function(e,t,a){e.exports={Loader:"Loader_Loader__yYpmB"}},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(21),c=a.n(o),s=a(12),l=a(4),i=a(5),u=a(7),m=a(6),h=a(2),d=a.n(h),g=a(22),p=a.n(g),b=function(e){var t=e.searchQuery,a=e.currentPage;return p.a.get("https://pixabay.com/api/?q=".concat(t,"&page=").concat(a,"&key=").concat("21819092-c619300407dec0bd926653a16","&image_type=photo&orientation=horizontal&per_page=12\n")).then((function(e){return e.data.hits}))};b.propTypes={searchQuery:d.a.string.isRequired,currentPage:d.a.number.isRequired};var j=b,y=a(8),f=a.n(y),O=a(0),v=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(O.jsx)("header",{className:f.a.Searchbar,children:Object(O.jsxs)("form",{onSubmit:this.handleSubmit,className:f.a.SearchForm,children:[Object(O.jsx)("button",{type:"submit",className:f.a.SearchFormButton}),Object(O.jsx)("input",{className:f.a.SearchFormInput,type:"text",value:this.state.query,onChange:this.handleChange,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),_=a(10),I=a.n(_),S=function(e){var t=e.url,a=e.alt,n=e.largeImage,r=e.modalOpen;return Object(O.jsx)("li",{className:I.a.ImageGalleryItem,onClick:function(){r(n)},children:Object(O.jsx)("img",{src:t,alt:a,className:I.a.ImageGalleryItemImage})})},x=a(23),w=a.n(x),C=function(e){var t=e.images,a=e.modalOpen;return Object(O.jsx)("ul",{className:w.a.ImageGallery,children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.tags,o=e.largeImageURL;return Object(O.jsx)(S,{url:n,alt:r,largeImage:o,modalOpen:a},t)}))})},k=a(24),L=a.n(k),B=function(e){var t=e.onClick;return Object(O.jsx)("button",{className:L.a.Button,type:"button",onClick:t,children:"Load more"})},F=a(25),P=a.n(F),G=a(26),M=a.n(G),N=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(O.jsx)(P.a,{className:M.a.Loader,type:"ThreeDots",color:"#3f51b5",height:100,width:200})}}]),a}(n.Component),Q=a(11),D=a.n(Q),q=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.modalClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.modalClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(O.jsx)("div",{className:D.a.Overlay,onClick:this.handleBackdropClick,children:Object(O.jsx)("div",{className:D.a.Modal,children:Object(O.jsx)("img",{src:this.props.largeImage,alt:""})})})}}]),a}(n.Component),U=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],currentPage:1,searchQuery:"",largeImage:"",isLoading:!1,showModal:!1},e.onChangeQuery=function(t){e.setState({searchQuery:t,images:[],currentPage:1})},e.fetchPictures=function(){var t=e.state,a={searchQuery:t.searchQuery,currentPage:t.currentPage};e.setState({isLoading:!0}),setTimeout((function(){j(a).then((function(t){return e.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(t)),currentPage:e.currentPage+1}}))})).then(e.smoothScroll).finally(e.setState({isLoading:!1}))}),500)},e.smoothScroll=function(){e.state.currentPage>2&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.modalOpen=function(t){e.setState({showModal:!0,largeImage:t})},e.modalClose=function(){e.setState({showModal:!1,largeImage:""})},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchPictures()}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.largeImage,n=e.isLoading,r=e.showModal,o=this.modalOpen,c=this.modalClose,s=this.onChangeQuery,l=this.fetchPictures;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(v,{onSubmit:s}),Object(O.jsx)(C,{images:t,modalOpen:o}),r&&Object(O.jsx)(q,{modalClose:c,largeImage:a}),n&&Object(O.jsx)(N,{}),t.length>0&&Object(O.jsx)(B,{onClick:l})]})}}]),a}(n.Component);a(70),a(71);c.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(U,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__dm6LR",SearchForm:"Searchbar_SearchForm__31PZ3",SearchFormButton:"Searchbar_SearchFormButton__3SIoU","SearchFormButton-label":"Searchbar_SearchFormButton-label__1ezpz",SearchFormInput:"Searchbar_SearchFormInput__2Dih4"}}},[[72,1,2]]]);
//# sourceMappingURL=main.1254fc20.chunk.js.map