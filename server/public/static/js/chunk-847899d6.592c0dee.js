(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-847899d6"],{7039:function(e,t,i){},8571:function(e,t,i){e.exports=i.p+"static/img/quark--pagecover-image.7f1ae8de.jpg"},"9a69":function(e,t,i){},a413:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"page-home"},[i("p",{staticClass:"page-title paddingB30"},[e._v("H5可视化编辑器")]),i("div",{staticClass:"clearfix my-page-list"},[i("div",{staticClass:"page-item page-add",on:{click:e.createNewPage}},[i("i",{staticClass:"el-icon-plus"}),i("p",[e._v("创建H5")])]),e._l(e.pageList,(function(t,a){return i("div",{key:a,staticClass:"page-item"},[i("div",{staticClass:"page-cover-image"},[i("img",{attrs:{src:t.coverImage||e.defaultCoverImage,alt:""}})]),i("p",{staticClass:"page-item-title"},[e._v(e._s(t.name||"未命名H5页"))]),i("div",{staticClass:"page-op-btn text-center"},[i("el-button",{attrs:{size:"mini"},on:{click:function(i){return e.editPage(t._id)}}},[e._v("编辑")]),i("el-button",{attrs:{size:"mini"},on:{click:function(i){return e.showPreviewFn(t._id)}}},[e._v("预览")]),i("el-button",{attrs:{size:"mini"},on:{click:function(i){return e.deletePage(t._id,a)}}},[e._v("删除")])],1)])}))],2),e.showPreview?i("previewPage",{attrs:{pageId:e.previewId},on:{closePreview:function(t){e.showPreview=!1}}}):e._e()],1)},n=[],s=i("1336"),c=i("fe36"),o={components:{previewPage:c["a"]},data:function(){return{loading:!1,defaultCoverImage:i("8571"),pageList:[],previewId:"",showPreview:!1}},created:function(){this.getPageList()},methods:{getPageList:function(){var e=this;this.$axios.get("/page").then((function(t){e.pageList=t.body||[]}))},createNewPage:function(){var e=this,t=s["a"].getProjectConfig();this.loading=!0,this.$axios.post("/page",{page:JSON.stringify(t)}).then((function(t){e.loading=!1,t.body&&e.$router.push({path:"editor",query:{id:t.body._id}})})).catch((function(){e.loading=!1}))},editPage:function(e){this.$router.push({path:"editor",query:{id:e}})},deletePage:function(e,t){var i=this;this.$confirm("此操作将永久删除该页面, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){i.loading=!0,i.$axios.delete("/page/"+e).then((function(){i.loading=!1,i.pageList.splice(t,1)})).catch((function(){i.loading=!1}))}))},showPreviewFn:function(e){this.previewId=e,this.showPreview=!0}}},r=o,l=(i("d0d9"),i("2877")),d=Object(l["a"])(r,a,n,!1,null,"2112bb15",null);t["default"]=d.exports},cc66:function(e,t,i){"use strict";var a=i("7039"),n=i.n(a);n.a},d0d9:function(e,t,i){"use strict";var a=i("9a69"),n=i.n(a);n.a},fe36:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"components-preview"},[i("div",{staticClass:"setting-bg"}),i("div",{staticClass:"left-panel"},[i("div",{staticClass:"iframe-wrapper"},[i("iframe",{staticStyle:{"background-color":"transparent",width:"100%",height:"100%"},attrs:{src:"http://localhost:4000/page/"+e.pageId,frameborder:"0"}})])]),i("div",{staticClass:"right-panel"},[e._v("\n    预览信息 待完善\n  ")]),i("span",{staticClass:"cloase-btn",on:{click:e.closePreview}},[i("i",{staticClass:"el-icon-close"})])])},n=[],s={name:"preview-page",props:{pageId:String},data:function(){return{}},created:function(){},methods:{closePreview:function(){this.$emit("closePreview",!1)}}},c=s,o=(i("cc66"),i("2877")),r=Object(o["a"])(c,a,n,!1,null,"4cee48d1",null);t["a"]=r.exports}}]);
//# sourceMappingURL=chunk-847899d6.592c0dee.js.map