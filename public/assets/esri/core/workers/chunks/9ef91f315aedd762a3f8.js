"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[4417],{28659:(e,t,r)=>{r.d(t,{B:()=>m});var o=r(70586),s=r(81153),i=r(17452),n=r(41123),a=r(7628),l=r(31263),p=r(5600);function d(e){return u[function(e){return e instanceof Blob?e.type:function(e){const t=(0,i.Ml)(e);return h[t]||c}(e.url)}(e)]||y}const u={},c="text/plain",y=u[c],h={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip"};for(const e in h)u[h[e]]=e;var f=r(25929);function m(e){const t=(0,o.pC)(e)&&e.origins?e.origins:[void 0];return(r,n)=>{const u=function(e,t,r){if((0,o.pC)(e)&&"resource"===e.type)return function(e,t,r){const n=(0,a.VZ)(t,r);return{type:String,read:(e,t,r)=>{const o=(0,f.r)(e,t,r);return n.type===String?o:"function"==typeof n.type?new n.type({url:o}):void 0},write:{writer(t,a,p,u){if(!u||!u.resources)return"string"==typeof t?void(a[p]=(0,f.t)(t,u)):void(a[p]=t.write({},u));const c=function(e){return(0,o.Wi)(e)?null:"string"==typeof e?e:e.url}(t),y=c?(0,f.t)(c,{...u,verifyItemRelativeUrls:u&&u.verifyItemRelativeUrls?{writtenUrls:u.verifyItemRelativeUrls.writtenUrls,rootPath:null}:null},f.M.NO):null,h=n.type!==String&&(!(0,s.l)(this)||u&&u.origin&&this.originIdOf(r)>(0,l.M9)(u.origin));u&&u.portalItem&&(0,o.pC)(y)&&!(0,i.YP)(y)?h?function(e,t,r,o,s,n,a,l){const p=a.portalItem.resourceFromPath(o),u=v(r,o,a);d(u)===(0,i.Ml)(p.path)?(b(e,t,p,u,a.resources.toUpdate),s[n]=o):g(e,t,r,o,s,n,a,l)}(this,r,t,y,a,p,u,e):function(e,t,r,o){o.resources.toKeep.push({resource:o.portalItem.resourceFromPath(e)}),t[r]=e}(y,a,p,u):u&&u.portalItem&&((0,o.Wi)(y)||(0,o.pC)((0,f.i)(y))||(0,i.jc)(y)||h)?g(this,r,t,y,a,p,u,e):a[p]=y}}}}(e,t,r);switch((0,o.pC)(e)&&e.type?e.type:"other"){case"other":return{read:!0,write:!0};case"url":{const{read:e,write:t}=f.p;return{read:e,write:t}}}}(e,r,n);for(const e of t){const t=(0,p.CJ)(r,e,n);for(const e in u)t[e]=u[e]}}}function g(e,t,s,a,l,p,u,c){const y=(0,n.D)(),h=v(s,a,u),f=(0,i.v_)((0,o.U2)(c,"prefix"),y),m=`${f}.${d(h)}`,g=u.portalItem.resourceFromPath(m);(0,i.jc)(a)&&u.resources.pendingOperations.push(async function(e){const t=(await Promise.resolve().then(r.bind(r,3172))).default,{data:o}=await t(e,{responseType:"blob"});return o}(a).then((e=>{g.path=`${f}.${d(e)}`,l[p]=g.itemRelativeUrl})).catch((()=>{}))),b(e,t,g,h,u.resources.toAdd),l[p]=g.itemRelativeUrl}function b(e,t,r,o,s){s.push({resource:r,content:o,finish:r=>{!function(e,t,r){"string"==typeof e[t]?e[t]=r.url:e[t].url=r.url}(e,t,r)}})}function v(e,t,r){return"string"==typeof e?{url:t}:new Blob([JSON.stringify(e.toJSON(r))],{type:"application/json"})}},42033:(e,t,r)=>{r.d(t,{E:()=>s,_:()=>i});var o=r(70586);async function s(e,t){const{WhereClause:o}=await Promise.resolve().then(r.bind(r,41534));return o.create(e,t)}function i(e,t){return(0,o.pC)(e)?(0,o.pC)(t)?`(${e}) AND (${t})`:e:t}},57476:(e,t,r)=>{r.r(t),r.d(t,{default:()=>de});var o=r(43697),s=r(51773),i=(r(16050),r(12501),r(28756),r(92271),r(72529),r(5499),r(84382),r(30687),r(91423),r(32400)),n=r(3172),a=r(46791),l=r(20102),p=r(92604),d=r(70586),u=r(16453),c=r(95330),y=r(17445),h=r(17452),f=r(5600),m=(r(67676),r(80442),r(1153)),g=(r(75215),r(71715)),b=r(52011),v=r(31263),w=r(87085),_=r(54295),I=r(17287),C=r(38009),S=r(16859),F=r(72965),x=r(32271),j=r(15506),L=r(21506),R=r(61960),P=r(85857),A=r(14147),T=r(53518),O=r(99514),U=r(35671),E=r(51161),D=r(2319),N=r(30707),q=r(56765),Z=r(96674);let M=class extends Z.wq{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo"}};(0,o._)([(0,f.Cb)({type:String,json:{read:!0,write:!0}})],M.prototype,"name",void 0),(0,o._)([(0,f.Cb)({type:String,json:{read:!0,write:!0}})],M.prototype,"field",void 0),(0,o._)([(0,f.Cb)({type:[Number],json:{read:!0,write:!0}})],M.prototype,"currentRangeExtent",void 0),(0,o._)([(0,f.Cb)({type:[Number],json:{read:!0,write:!0}})],M.prototype,"fullRangeExtent",void 0),(0,o._)([(0,f.Cb)({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],M.prototype,"type",void 0),M=(0,o._)([(0,b.j)("esri.layers.support.RangeInfo")],M);var k,Q=r(61247),W=r(22974),G=r(28659),V=r(20941),z=(r(37697),r(38913)),$=r(44547);let B=k=class extends((0,Z.eC)(a.Z.ofType(z.Z))){constructor(e){super(e)}clone(){return new k(this.items.map((e=>e.clone())))}write(e,t){return this.toJSON(t)}toJSON(e){const t=e?.layer?.spatialReference;return t?this.toArray().map((r=>{if(!t.equals(r.spatialReference)){if(!(0,$.Up)(r.spatialReference,t))return e&&e.messages&&e.messages.push(new V.Z("scenefilter:unsupported","Scene filters with incompatible spatial references are not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),null;const o=new z.Z;(0,$.Wt)(r,o,t),r=o}const o=r.toJSON(e);return delete o.spatialReference,o})).filter((e=>null!=e)):(e?.messages&&e.messages.push(new V.Z("scenefilter:unsupported","Writing Scene filters without context layer is not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),this.toArray().map((t=>t.toJSON(e))))}static fromJSON(e,t){const r=new k;return e.forEach((e=>r.add(z.Z.fromJSON(e,t)))),r}};B=k=(0,o._)([(0,b.j)("esri.layers.support.PolygonCollection")],B);const J=B;var K,H=r(25929);let Y=K=class extends Z.wq{constructor(e){super(e),this.spatialRelationship="disjoint",this.geometries=new J,this._geometriesSource=null,this._handles=new Q.Z}initialize(){this._handles.add((0,y.on)((()=>this.geometries),"after-changes",(()=>this.geometries=this.geometries),y.Z_))}destroy(){this._handles.destroy()}readGeometries(e,t,r){this._geometriesSource={url:(0,H.f)(e,r),context:r}}async loadGeometries(e,t){if((0,d.Wi)(this._geometriesSource))return;const{url:r,context:o}=this._geometriesSource,s=await(0,n.default)(r,{responseType:"json",signal:(0,d.U2)(t,"signal")}),i=e.toJSON(),a=s.data.map((e=>({...e,spatialReference:i})));this.geometries=J.fromJSON(a,o),this._geometriesSource=null}clone(){return new K({geometries:(0,W.d9)(this.geometries),spatialRelationship:this.spatialRelationship})}};(0,o._)([(0,f.Cb)({type:["disjoint","contains"],nonNullable:!0,json:{write:!0}})],Y.prototype,"spatialRelationship",void 0),(0,o._)([(0,f.Cb)({type:J,nonNullable:!0,json:{write:!0}}),(0,G.B)({origins:["web-scene","portal-item"],type:"resource",prefix:"geometries"})],Y.prototype,"geometries",void 0),(0,o._)([(0,g.r)(["web-scene","portal-item"],"geometries")],Y.prototype,"readGeometries",null),Y=K=(0,o._)([(0,b.j)("esri.layers.support.SceneFilter")],Y);const X=Y;var ee=r(40555),te=r(57444),re=r(32163),oe=r(65242);const se=["3DObject","Point"],ie=p.Z.getLogger("esri.layers.SceneLayer"),ne=(0,T.v)();let ae=class extends((0,x.Vt)((0,I.Y)((0,C.q)((0,S.I)((0,F.M)((0,u.R)((0,_.V)(w.Z)))))))){constructor(...e){super(...e),this.featureReduction=null,this.rangeInfos=null,this.operationalLayerType="ArcGISSceneServiceLayer",this.type="scene",this.fields=null,this.floorInfo=null,this.outFields=null,this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.excludeObjectIds=new a.Z,this.definitionExpression=null,this.filter=null,this.path=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.priority=null,this.semantic=null,this.cachedDrawingInfo={color:!1},this.popupEnabled=!0,this.popupTemplate=null,this.objectIdField=null,this.globalIdField=null,this._fieldUsageInfo={},this.screenSizePerspectiveEnabled=!0}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){const r=this.getFeatureType(t?.feature)?.domains?.[e];return r&&"inherited"!==r.type?r:this.getField(e)?.domain??null}getFeatureType(e){return e&&(0,d.pC)(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}get types(){return(0,d.pC)(this.associatedLayer)?this.associatedLayer.types:[]}get typeIdField(){return(0,d.pC)(this.associatedLayer)?this.associatedLayer.typeIdField:null}get formTemplate(){return(0,d.pC)(this.associatedLayer)?this.associatedLayer.formTemplate:null}get fieldsIndex(){return new O.Z(this.fields)}readNodePages(e,t,r){return"Point"===t.layerType&&(e=t.pointNodePages),null==e||"object"!=typeof e?null:E.U4.fromJSON(e,r)}set elevationInfo(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}get geometryType(){return pe[this.profile]||"mesh"}set renderer(e){(0,U.YN)(e,this.fieldsIndex),this._set("renderer",e)}readCachedDrawingInfo(e){return null!=e&&"object"==typeof e||(e={}),null==e.color&&(e.color=!1),e}get capabilities(){const e=(0,d.pC)(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:j.C,{query:t,editing:{supportsGlobalId:r,supportsRollbackOnFailure:o,supportsUploadWithItemId:s,supportsReturnServiceEditsInSourceSpatialReference:i},data:{supportsZ:n,supportsM:a,isVersioned:l,supportsAttachment:p},operations:{supportsEditing:u,supportsUpdate:c,supportsQuery:y,supportsQueryAttachments:h}}=e,f=e.operations.supportsChangeTracking;return{query:t,editing:{supportsGlobalId:r,supportsReturnServiceEditsInSourceSpatialReference:i,supportsRollbackOnFailure:o,supportsGeometryUpdate:!1,supportsUploadWithItemId:s},data:{supportsAttachment:p,supportsZ:n,supportsM:a,isVersioned:l},operations:{supportsQuery:y,supportsQueryAttachments:h,supportsEditing:u&&f,supportsAdd:!1,supportsDelete:!1,supportsUpdate:c&&f}}}get editingEnabled(){return this._isOverridden("editingEnabled")?this._get("editingEnabled"):this.userHasEditingPrivileges}set editingEnabled(e){null!=e?this._override("editingEnabled",e):this._clearOverride("editingEnabled")}get defaultPopupTemplate(){return(0,d.pC)(this.associatedLayer)||this.attributeStorageInfo?this.createPopupTemplate():null}readObjectIdField(e,t){return!e&&t.fields&&t.fields.some((t=>("esriFieldTypeOID"===t.type&&(e=t.name),!!e))),e||void 0}readGlobalIdField(e,t){return!e&&t.fields&&t.fields.some((t=>("esriFieldTypeGlobalID"===t.type&&(e=t.name),!!e))),e||void 0}get displayField(){return(0,d.pC)(this.associatedLayer)?this.associatedLayer.displayField:null}readProfile(e,t){const r=t.store.profile;return null!=r&&le[r]?le[r]:(ie.error("Unknown or missing profile",{profile:r,layer:this}),"mesh-pyramids")}load(e){const t=(0,d.pC)(e)?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(c.r9).then((()=>this._fetchService(t))).then((()=>Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages,t),this._setAssociatedFeatureLayer(t),(0,d.pC)(this.filter)?this.filter.loadGeometries(this.spatialReference):null]))).then((()=>this._validateElevationInfo())).then((()=>this._applyAssociatedLayerOverrides())).then((()=>this._populateFieldUsageInfo())).then((()=>(0,ee.y)(this,{origin:"service"},t))).then((()=>(0,U.YN)(this.renderer,this.fieldsIndex))).then((()=>this.finishLoadEditablePortalLayer(e)));return this.addResolvingPromise(r),Promise.resolve(this)}async beforeSave(){(0,d.pC)(this.filter)&&await this.load()}createQuery(){const e=new te.Z;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryExtent(e||this.createQuery(),t)))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatureCount(e||this.createQuery(),t)))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatures(e||this.createQuery(),t))).then((e=>{if(e?.features)for(const t of e.features)t.layer=this,t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryObjectIds(e||this.createQuery(),t)))}queryAttachments(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryAttachments(e,t)))}getFieldUsageInfo(e){const t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(ie.error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)}createPopupTemplate(e){return(0,re.eZ)(this,e)}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return(0,d.pC)(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),(0,d.Wi)(this.associatedLayer))throw new l.Z("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new l.Z("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}hasCachedStatistics(e){return null!=this.statisticsInfo&&this.statisticsInfo.some((t=>t.name===e))}async queryCachedStatistics(e,t){if(await this.load(t),!this.statisticsInfo)throw new l.Z("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const r=this.fieldsIndex.get(e);if(!r)throw new l.Z("scenelayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const e of this.statisticsInfo)if(e.name===r.name){const r=(0,h.v_)(this.parsedUrl.path,e.href);return(0,n.default)(r,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then((e=>e.data))}throw new l.Z("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(x.xp.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"};return this._debouncedSaveOperations(x.xp.SAVE,e)}async applyEdits(e,t){const o=await r.e(4720).then(r.bind(r,14720));if(await this.load(),(0,d.Wi)(this.associatedLayer))throw new l.Z(`${this.type}-layer:not-editable`,"Service is not editable");return await this.associatedLayer.load(),o.applyEdits(this,this.associatedLayer.source,e,t)}on(e,t){return super.on(e,t)}validateLayer(e){if(e.layerType&&!se.includes(e.layerType))throw new l.Z("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new l.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});if(this.version.major>2)throw new l.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});!function(e,t){let r=!1,o=!1;if(null==e)r=!0,o=!0;else{const s=t&&t.isGeographic;switch(e){case"east-north-up":case"earth-centered":r=!0,o=s;break;case"vertex-reference-frame":r=!0,o=!s;break;default:r=!1}}if(!r)throw new l.Z("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!o)throw new l.Z("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}(this.normalReferenceFrame,this.spatialReference)}_getTypeKeywords(){const e=[];if("points"===this.profile)e.push("Point");else{if("mesh-pyramids"!==this.profile)throw new l.Z("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e}_populateFieldUsageInfo(){if(this._fieldUsageInfo={},this.fields)for(const e of this.fields){const t=!(!this.attributeStorageInfo||!this.attributeStorageInfo.some((t=>t.name===e.name))),r=!!((0,d.pC)(this.associatedLayer)&&this.associatedLayer.fields&&this.associatedLayer.fields.some((t=>t&&e.name===t.name))),o={supportsLabelingInfo:t,supportsRenderer:t,supportsPopupTemplate:t||r,supportsLayerQuery:r};this._fieldUsageInfo[e.name]=o}}_applyAssociatedLayerOverrides(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides()}_applyAssociatedLayerFieldsOverrides(){if((0,d.Wi)(this.associatedLayer)||!this.associatedLayer.fields)return;let e=null;for(const t of this.associatedLayer.fields){const r=this.getField(t.name);r?(!r.domain&&t.domain&&(r.domain=t.domain.clone()),r.editable=t.editable,r.nullable=t.nullable,r.length=t.length):(e||(e=this.fields?this.fields.slice():[]),e.push(t.clone()))}e&&this._set("fields",e)}_applyAssociatedLayerPopupOverrides(){if((0,d.Wi)(this.associatedLayer))return;const e=["popupTemplate","popupEnabled"],t=(0,m.vw)(this);for(let r=0;r<e.length;r++){const o=e[r],s=this.originIdOf(o),i=this.associatedLayer.originIdOf(o);s<i&&(i===v.s3.SERVICE||i===v.s3.PORTAL_ITEM)&&t.setAtOrigin(o,this.associatedLayer[o],i)}}async _setAssociatedFeatureLayer(e){if(!["mesh-pyramids","points"].includes(this.profile))return;const t=new A.W(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedLayer=await t.fetch()}catch(e){(0,c.D_)(e)||this._logWarningOnPopupEnabled()}}async _logWarningOnPopupEnabled(){await(0,y.N1)((()=>this.popupEnabled&&null!=this.popupTemplate));const e=`this SceneLayer: ${this.title}`;null==this.attributeStorageInfo?ie.warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e}`):ie.info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e}`)}_validateElevationInfo(){const e=this.elevationInfo;e&&("mesh-pyramids"===this.profile&&"relative-to-scene"===e.mode&&ie.warn(".elevationInfo=","Mesh scene layers don't support relative-to-scene elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&ie.warn(".elevationInfo=","Scene layers do not support featureExpressionInfo"))}};(0,o._)([(0,f.Cb)({types:{key:"type",base:R.B,typeMap:{selection:P.Z}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],ae.prototype,"featureReduction",void 0),(0,o._)([(0,f.Cb)({type:[M],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],ae.prototype,"rangeInfos",void 0),(0,o._)([(0,f.Cb)({json:{read:!1}})],ae.prototype,"associatedLayer",void 0),(0,o._)([(0,f.Cb)({type:["show","hide"]})],ae.prototype,"listMode",void 0),(0,o._)([(0,f.Cb)({type:["ArcGISSceneServiceLayer"]})],ae.prototype,"operationalLayerType",void 0),(0,o._)([(0,f.Cb)({json:{read:!1},readOnly:!0})],ae.prototype,"type",void 0),(0,o._)([(0,f.Cb)({...ne.fields,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],ae.prototype,"fields",void 0),(0,o._)([(0,f.Cb)()],ae.prototype,"types",null),(0,o._)([(0,f.Cb)()],ae.prototype,"typeIdField",null),(0,o._)([(0,f.Cb)()],ae.prototype,"formTemplate",null),(0,o._)([(0,f.Cb)({readOnly:!0})],ae.prototype,"fieldsIndex",null),(0,o._)([(0,f.Cb)({type:q.Z,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],ae.prototype,"floorInfo",void 0),(0,o._)([(0,f.Cb)(ne.outFields)],ae.prototype,"outFields",void 0),(0,o._)([(0,f.Cb)({type:E.U4,readOnly:!0,json:{read:!1}})],ae.prototype,"nodePages",void 0),(0,o._)([(0,g.r)("service","nodePages",["nodePages","pointNodePages"])],ae.prototype,"readNodePages",null),(0,o._)([(0,f.Cb)({type:[E.QI],readOnly:!0})],ae.prototype,"materialDefinitions",void 0),(0,o._)([(0,f.Cb)({type:[E.Yh],readOnly:!0})],ae.prototype,"textureSetDefinitions",void 0),(0,o._)([(0,f.Cb)({type:[E.H3],readOnly:!0})],ae.prototype,"geometryDefinitions",void 0),(0,o._)([(0,f.Cb)({readOnly:!0})],ae.prototype,"serviceUpdateTimeStamp",void 0),(0,o._)([(0,f.Cb)({readOnly:!0})],ae.prototype,"attributeStorageInfo",void 0),(0,o._)([(0,f.Cb)({readOnly:!0})],ae.prototype,"statisticsInfo",void 0),(0,o._)([(0,f.Cb)({type:a.Z.ofType(Number),nonNullable:!0,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.excludeObjectIds",write:{enabled:!0}}})],ae.prototype,"excludeObjectIds",void 0),(0,o._)([(0,f.Cb)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],ae.prototype,"definitionExpression",void 0),(0,o._)([(0,f.Cb)({type:X,json:{name:"layerDefinition.polygonFilter",write:!0}})],ae.prototype,"filter",void 0),(0,o._)([(0,f.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],ae.prototype,"path",void 0),(0,o._)([(0,f.Cb)(L.PV)],ae.prototype,"elevationInfo",null),(0,o._)([(0,f.Cb)({type:String})],ae.prototype,"geometryType",null),(0,o._)([(0,f.Cb)(L.iR)],ae.prototype,"labelsVisible",void 0),(0,o._)([(0,f.Cb)({type:[D.Z],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:N.r},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:N.r},write:!0}})],ae.prototype,"labelingInfo",void 0),(0,o._)([(0,f.Cb)(L.rn)],ae.prototype,"legendEnabled",void 0),(0,o._)([(0,f.Cb)({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader(e,t){if("number"==typeof e&&e>=0&&e<=1)return e;const r=t.layerDefinition?.drawingInfo?.transparency;return void 0!==r?(0,oe.b)(r):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],ae.prototype,"opacity",void 0),(0,o._)([(0,f.Cb)({type:["Low","High"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],ae.prototype,"priority",void 0),(0,o._)([(0,f.Cb)({type:["Labels"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],ae.prototype,"semantic",void 0),(0,o._)([(0,f.Cb)({types:i.o,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],ae.prototype,"renderer",null),(0,o._)([(0,f.Cb)({json:{read:!1}})],ae.prototype,"cachedDrawingInfo",void 0),(0,o._)([(0,g.r)("service","cachedDrawingInfo")],ae.prototype,"readCachedDrawingInfo",null),(0,o._)([(0,f.Cb)({readOnly:!0,json:{read:!1}})],ae.prototype,"capabilities",null),(0,o._)([(0,f.Cb)({type:Boolean,json:{read:!1}})],ae.prototype,"editingEnabled",null),(0,o._)([(0,f.Cb)(L.C_)],ae.prototype,"popupEnabled",void 0),(0,o._)([(0,f.Cb)({type:s.Z,json:{name:"popupInfo",write:!0}})],ae.prototype,"popupTemplate",void 0),(0,o._)([(0,f.Cb)({readOnly:!0,json:{read:!1}})],ae.prototype,"defaultPopupTemplate",null),(0,o._)([(0,f.Cb)({type:String,json:{read:!1}})],ae.prototype,"objectIdField",void 0),(0,o._)([(0,g.r)("service","objectIdField",["objectIdField","fields"])],ae.prototype,"readObjectIdField",null),(0,o._)([(0,f.Cb)({type:String,json:{read:!1}})],ae.prototype,"globalIdField",void 0),(0,o._)([(0,g.r)("service","globalIdField",["globalIdField","fields"])],ae.prototype,"readGlobalIdField",null),(0,o._)([(0,f.Cb)({readOnly:!0,type:String,json:{read:!1}})],ae.prototype,"displayField",null),(0,o._)([(0,f.Cb)({type:String,json:{read:!1}})],ae.prototype,"profile",void 0),(0,o._)([(0,g.r)("service","profile",["store.profile"])],ae.prototype,"readProfile",null),(0,o._)([(0,f.Cb)({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],ae.prototype,"normalReferenceFrame",void 0),(0,o._)([(0,f.Cb)(L.YI)],ae.prototype,"screenSizePerspectiveEnabled",void 0),ae=(0,o._)([(0,b.j)("esri.layers.SceneLayer")],ae);const le={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},pe={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"},de=ae},14147:(e,t,r)=>{r.d(t,{W:()=>d});var o=r(40330),s=r(3172),i=r(70586),n=r(95330),a=r(3121),l=r(65587),p=r(15235);class d{constructor(e,t,r,o){this.parsedUrl=e,this.portalItem=t,this.apiKey=r,this.signal=o,this.rootDocument=null;const s=this.parsedUrl.path.match(/^(.*)\/SceneServer\/layers\/([\d]*)\/?$/i);s&&(this.urlParts={root:s[1],layerId:parseInt(s[2],10)})}async fetch(){if(!this.urlParts)return null;const e=this.portalItem??await this._portalItemFromServiceItemId();if((0,i.Wi)(e))return this._loadFromUrl();const t=await this._findAndLoadRelatedPortalItem(e);return(0,i.Wi)(t)?null:this._loadFeatureLayerFromPortalItem(t)}async fetchPortalItem(){if(!this.urlParts)return null;const e=this.portalItem??await this._portalItemFromServiceItemId();return(0,i.Wi)(e)?null:this._findAndLoadRelatedPortalItem(e)}async _fetchRootDocument(){if((0,i.pC)(this.rootDocument))return this.rootDocument;if((0,i.Wi)(this.urlParts))return this.rootDocument={},{};const e={query:{f:"json",token:this.apiKey},responseType:"json",signal:this.signal},t=`${this.urlParts.root}/SceneServer`;try{const r=await(0,s.default)(t,e);this.rootDocument=r.data}catch{this.rootDocument={}}return this.rootDocument}async _fetchServiceOwningPortalUrl(){const e=o.id?.findServerInfo(this.parsedUrl.path);if(e?.owningSystemUrl)return e.owningSystemUrl;const t=this.parsedUrl.path.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const e=(await(0,s.default)(t,{query:{f:"json"},responseType:"json",signal:this.signal})).data.owningSystemUrl;if(e)return e}catch(e){(0,n.r9)(e)}return null}async _findAndLoadRelatedPortalItem(e){try{return(await e.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:this.signal})).find((e=>"Feature Service"===e.type))||null}catch(e){return(0,n.r9)(e),null}}async _loadFeatureLayerFromPortalItem(e){await e.load({signal:this.signal});const t=await this._findMatchingAssociatedSublayerUrl(e.url);return new a.default({url:t,portalItem:e}).load({signal:this.signal})}async _loadFromUrl(){const e=await this._findMatchingAssociatedSublayerUrl(`${this.urlParts.root}/FeatureServer`);return new a.default({url:e}).load({signal:this.signal})}async _findMatchingAssociatedSublayerUrl(e){const t=e.replace(/^(.*FeatureServer)(\/[\d]*\/?)?$/i,"$1"),r={query:{f:"json"},responseType:"json",authMode:"no-prompt",signal:this.signal},o=this.urlParts.layerId,i=this._fetchRootDocument(),n=(0,s.default)(t,r),[a,l]=await Promise.all([n,i]),p=l&&l.layers,d=a.data&&a.data.layers;if(!Array.isArray(d))throw new Error("expected layers array");if(Array.isArray(p)){for(let e=0;e<Math.min(p.length,d.length);e++)if(p[e].id===o)return`${t}/${d[e].id}`}else if(o<d.length)return`${t}/${d[o].id}`;throw new Error("could not find matching associated sublayer")}async _portalItemFromServiceItemId(){const e=(await this._fetchRootDocument()).serviceItemId;if(!e)return null;const t=new p.default({id:e,apiKey:this.apiKey}),r=await this._fetchServiceOwningPortalUrl();(0,i.pC)(r)&&(t.portal=new l.Z({url:r}));try{return t.load({signal:this.signal})}catch(e){return(0,n.r9)(e),null}}}},51161:(e,t,r)=>{r.d(t,{H3:()=>g,QI:()=>u,U4:()=>l,Yh:()=>y});var o=r(43697),s=r(96674),i=r(5600),n=(r(67676),r(80442),r(75215),r(36030)),a=r(52011);let l=class extends s.wq{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};(0,o._)([(0,i.Cb)({type:Number})],l.prototype,"nodesPerPage",void 0),(0,o._)([(0,i.Cb)({type:Number})],l.prototype,"rootIndex",void 0),(0,o._)([(0,i.Cb)({type:String})],l.prototype,"lodSelectionMetricType",void 0),l=(0,o._)([(0,a.j)("esri.layer.support.I3SNodePageDefinition")],l);let p=class extends s.wq{constructor(){super(...arguments),this.factor=1}};(0,o._)([(0,i.Cb)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],p.prototype,"id",void 0),(0,o._)([(0,i.Cb)({type:Number})],p.prototype,"factor",void 0),p=(0,o._)([(0,a.j)("esri.layer.support.I3SMaterialTexture")],p);let d=class extends s.wq{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};(0,o._)([(0,i.Cb)({type:[Number]})],d.prototype,"baseColorFactor",void 0),(0,o._)([(0,i.Cb)({type:p})],d.prototype,"baseColorTexture",void 0),(0,o._)([(0,i.Cb)({type:p})],d.prototype,"metallicRoughnessTexture",void 0),(0,o._)([(0,i.Cb)({type:Number})],d.prototype,"metallicFactor",void 0),(0,o._)([(0,i.Cb)({type:Number})],d.prototype,"roughnessFactor",void 0),d=(0,o._)([(0,a.j)("esri.layer.support.I3SMaterialPBRMetallicRoughness")],d);let u=class extends s.wq{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};(0,o._)([(0,n.J)({opaque:"opaque",mask:"mask",blend:"blend"})],u.prototype,"alphaMode",void 0),(0,o._)([(0,i.Cb)({type:Number})],u.prototype,"alphaCutoff",void 0),(0,o._)([(0,i.Cb)({type:Boolean})],u.prototype,"doubleSided",void 0),(0,o._)([(0,n.J)({none:"none",back:"back",front:"front"})],u.prototype,"cullFace",void 0),(0,o._)([(0,i.Cb)({type:p})],u.prototype,"normalTexture",void 0),(0,o._)([(0,i.Cb)({type:p})],u.prototype,"occlusionTexture",void 0),(0,o._)([(0,i.Cb)({type:p})],u.prototype,"emissiveTexture",void 0),(0,o._)([(0,i.Cb)({type:[Number]})],u.prototype,"emissiveFactor",void 0),(0,o._)([(0,i.Cb)({type:d})],u.prototype,"pbrMetallicRoughness",void 0),u=(0,o._)([(0,a.j)("esri.layer.support.I3SMaterialDefinition")],u);let c=class extends s.wq{};(0,o._)([(0,i.Cb)({type:String,json:{read:{source:["name","index"],reader:(e,t)=>null!=e?e:`${t.index}`}}})],c.prototype,"name",void 0),(0,o._)([(0,n.J)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],c.prototype,"format",void 0),c=(0,o._)([(0,a.j)("esri.layer.support.I3STextureFormat")],c);let y=class extends s.wq{constructor(){super(...arguments),this.atlas=!1}};(0,o._)([(0,i.Cb)({type:[c]})],y.prototype,"formats",void 0),(0,o._)([(0,i.Cb)({type:Boolean})],y.prototype,"atlas",void 0),y=(0,o._)([(0,a.j)("esri.layer.support.I3STextureSetDefinition")],y);let h=class extends s.wq{};(0,o._)([(0,n.J)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],h.prototype,"type",void 0),(0,o._)([(0,i.Cb)({type:Number})],h.prototype,"component",void 0),h=(0,o._)([(0,a.j)("esri.layer.support.I3SGeometryAttribute")],h);let f=class extends s.wq{};(0,o._)([(0,n.J)({draco:"draco"})],f.prototype,"encoding",void 0),(0,o._)([(0,i.Cb)({type:[String]})],f.prototype,"attributes",void 0),f=(0,o._)([(0,a.j)("esri.layer.support.I3SGeometryCompressedAttributes")],f);let m=class extends s.wq{constructor(){super(...arguments),this.offset=0}};(0,o._)([(0,i.Cb)({type:Number})],m.prototype,"offset",void 0),(0,o._)([(0,i.Cb)({type:h})],m.prototype,"position",void 0),(0,o._)([(0,i.Cb)({type:h})],m.prototype,"normal",void 0),(0,o._)([(0,i.Cb)({type:h})],m.prototype,"uv0",void 0),(0,o._)([(0,i.Cb)({type:h})],m.prototype,"color",void 0),(0,o._)([(0,i.Cb)({type:h})],m.prototype,"uvRegion",void 0),(0,o._)([(0,i.Cb)({type:h})],m.prototype,"featureId",void 0),(0,o._)([(0,i.Cb)({type:h})],m.prototype,"faceRange",void 0),(0,o._)([(0,i.Cb)({type:f})],m.prototype,"compressedAttributes",void 0),m=(0,o._)([(0,a.j)("esri.layer.support.I3SGeometryBuffer")],m);let g=class extends s.wq{};(0,o._)([(0,n.J)({triangle:"triangle"})],g.prototype,"topology",void 0),(0,o._)([(0,i.Cb)()],g.prototype,"geometryBuffers",void 0),g=(0,o._)([(0,a.j)("esri.layer.support.I3SGeometryDefinition")],g)},56765:(e,t,r)=>{r.d(t,{Z:()=>d});var o,s=r(43697),i=r(46791),n=r(96674),a=r(5600),l=(r(67676),r(80442),r(75215),r(52011));let p=o=class extends n.wq{constructor(e){super(e),this.floorField=null,this.viewAllMode=!1,this.viewAllLevelIds=new i.Z}clone(){return new o({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}};(0,s._)([(0,a.Cb)({type:String,json:{write:!0}})],p.prototype,"floorField",void 0),(0,s._)([(0,a.Cb)({json:{read:!1,write:!1}})],p.prototype,"viewAllMode",void 0),(0,s._)([(0,a.Cb)({json:{read:!1,write:!1}})],p.prototype,"viewAllLevelIds",void 0),p=o=(0,s._)([(0,l.j)("esri.layers.support.LayerFloorInfo")],p);const d=p},15506:(e,t,r)=>{r.d(t,{C:()=>o});const o={analytics:{supportsCacheHint:!1},attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1,supportsCacheHint:!1,supportsResize:!1},data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsCompactGeometry:!1,supportsDefaultSpatialReference:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsStatistics:!1,tileMaxRecordCount:0}}},51706:(e,t,r)=>{var o,s;function i(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}function n(e){return null!=e&&!isNaN(e)&&isFinite(e)}function a(e){return e.valueExpression?o.Expression:e.field&&"string"==typeof e.field?o.Field:o.Unknown}function l(e,t){const r=t||a(e),i=e.valueUnit||"unknown";return r===o.Unknown?s.Constant:e.stops?s.Stops:null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?s.ClampedLinear:"unknown"===i?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?s.Proportional:s.Additive:s.Identity:s.RealWorldSize}r.d(t,{PS:()=>a,QW:()=>l,RY:()=>o,hL:()=>s,iY:()=>i,qh:()=>n}),function(e){e.Unknown="unknown",e.Expression="expression",e.Field="field"}(o||(o={})),function(e){e.Unknown="unknown",e.Stops="stops",e.ClampedLinear="clamped-linear",e.Proportional="proportional",e.Additive="additive",e.Constant="constant",e.Identity="identity",e.RealWorldSize="real-world-size"}(s||(s={}))}}]);