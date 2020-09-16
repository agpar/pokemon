webpackJsonpCoveo__temporary([64],{501:function(t,e){},90:function(t,e,i){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=i(7),s=i(8),l=i(27),r=i(10),u=i(31),p=i(66),h=i(22),c=i(176),a=i(2),d=i(21),f=i(5),O=i(4),m=i(30),k=i(1),g=i(112),v=i(19),w=i(0),b=i(3);i(501);var y=i(17),A=function(t){function e(i,n,o,u,p){var c=t.call(this,i,e.ID,o)||this;if(c.element=i,c.options=n,c.bindings=o,c.result=u,c.os=p,c.logOpenDocument=w.debounce(function(){c.queryController.saveLastQuery();var t=k.$$(c.element).getAttribute("href");void 0!=t&&""!=t||(t=c.result.clickUri),c.usageAnalytics.logClickEvent(r.analyticsActionCauseList.documentOpen,{documentURL:t,documentTitle:c.result.title,author:O.Utils.getFieldValue(c.result,"author")},c.result,c.root),m.Defer.flush()},1500,!0),c.options=s.ComponentOptions.initComponentOptions(i,e,n),c.options=w.extend({},c.options,c.componentOptionsModel.get(l.ComponentOptionsModel.attributesEnum.resultLink)),c.result=u||c.resolveResult(),null==c.options.openQuickview&&(c.options.openQuickview="ExchangeCrawler"==u.raw.connectortype&&h.DeviceUtils.isMobileDevice()),c.element.setAttribute("tabindex","0"),c.addHeadingRoleIfFirstResultLink(),f.Assert.exists(c.componentOptionsModel),f.Assert.exists(c.result),!c.quickviewShouldBeOpened()){var a=w.once(function(){return c.logOpenDocument()});k.$$(i).on(["contextmenu","click","mousedown","mouseup"],a);var d;k.$$(i).on("touchstart",function(){d=window.setTimeout(a,1e3)}),k.$$(i).on("touchend",function(){d&&clearTimeout(d)})}return c.renderUri(i,u),c.bindEventToOpen(),c}return n(e,t),e.prototype.renderUri=function(t,e){if(/^\s*$/.test(this.element.innerHTML))if(this.options.titleTemplate){var i=v.StringUtils.buildStringTemplateFromResult(this.options.titleTemplate,this.result);this.element.innerHTML=i?g.StreamHighlightUtils.highlightStreamText(i,this.result.termsToHighlight,this.result.phrasesToHighlight):this.result.clickUri}else this.element.innerHTML=this.result.title?p.HighlightUtils.highlightString(this.result.title,this.result.titleHighlights,null,"coveo-highlight"):this.result.clickUri},e.prototype.openLink=function(t){void 0===t&&(t=!0),t&&this.logOpenDocument(),window.location.href=this.getResultUri()},e.prototype.openLinkInNewWindow=function(t){void 0===t&&(t=!0),t&&this.logOpenDocument(),window.open(this.getResultUri(),"_blank")},e.prototype.openLinkInOutlook=function(t){void 0===t&&(t=!0),this.hasOutlookField()&&(t&&this.logOpenDocument(),this.openLink())},e.prototype.openLinkAsConfigured=function(t){void 0===t&&(t=!0),this.toExecuteOnOpen&&(t&&this.logOpenDocument(),this.toExecuteOnOpen())},e.prototype.bindEventToOpen=function(){return this.bindOnClickIfNotUndefined()||this.bindOpenQuickviewIfNotUndefined()||this.setHrefIfNotAlready()||this.openLinkThatIsNotAnAnchor()},e.prototype.addHeadingRoleIfFirstResultLink=function(){this.isFirstResultLink&&(this.element.setAttribute("role","heading"),this.element.setAttribute("aria-level","2"))},Object.defineProperty(e.prototype,"isFirstResultLink",{get:function(){var t=k.$$(this.element).closest("CoveoResult");if(!t)return!1;var i="."+o.Component.computeCssClassNameForType(e.ID);return k.$$(t).find(i)===this.element},enumerable:!0,configurable:!0}),e.prototype.bindOnClickIfNotUndefined=function(){var t=this;return void 0!=this.options.onClick&&(this.toExecuteOnOpen=function(e){t.options.onClick.call(t,e,t.result)},(new y.AccessibleButton).withElement(this.element).withLabel(this.result.title).withSelectAction(function(e){return t.toExecuteOnOpen(e)}).build(),!0)},e.prototype.bindOpenQuickviewIfNotUndefined=function(){var t=this;return!!this.quickviewShouldBeOpened()&&(this.toExecuteOnOpen=function(){k.$$(t.bindings.resultElement).trigger(u.ResultListEvents.openQuickview)},k.$$(this.element).on("click",function(e){e.preventDefault(),t.toExecuteOnOpen()}),!0)},e.prototype.openLinkThatIsNotAnAnchor=function(){var t=this;return!this.elementIsAnAnchor()&&(this.toExecuteOnOpen=function(){t.options.alwaysOpenInNewWindow?t.options.openInOutlook?t.openLinkInOutlook():t.openLinkInNewWindow():t.openLink()},k.$$(this.element).on("click",function(){t.toExecuteOnOpen()}),!0)},e.prototype.setHrefIfNotAlready=function(){return!(!this.elementIsAnAnchor()||O.Utils.isNonEmptyString(k.$$(this.element).getAttribute("href")))&&(k.$$(this.element).setAttribute("href",this.getResultUri()),!this.options.alwaysOpenInNewWindow||this.options.openInOutlook&&this.hasOutlookField()||k.$$(this.element).setAttribute("target","_blank"),!0)},e.prototype.getResultUri=function(){return this.options.hrefTemplate?v.StringUtils.buildStringTemplateFromResult(this.options.hrefTemplate,this.result):(void 0==this.options.field&&this.options.openInOutlook&&this.setField(),void 0!=this.options.field?O.Utils.getFieldValue(this.result,this.options.field):this.result.clickUri)},e.prototype.elementIsAnAnchor=function(){return"A"==this.element.tagName},e.prototype.setField=function(){var t=O.Utils.exists(this.os)?this.os:c.OSUtils.get();t==c.OS_NAME.MACOSX&&this.hasOutlookField()?this.options.field="@outlookformacuri":t==c.OS_NAME.WINDOWS&&this.hasOutlookField()&&(this.options.field="@outlookuri")},e.prototype.hasOutlookField=function(){var t=O.Utils.exists(this.os)?this.os:c.OSUtils.get();return t==c.OS_NAME.MACOSX&&void 0!=this.result.raw.outlookformacuri||t==c.OS_NAME.WINDOWS&&void 0!=this.result.raw.outlookuri},e.prototype.isUriThatMustBeOpenedInQuickview=function(){return 0==this.result.clickUri.toLowerCase().indexOf("ldap://")},e.prototype.quickviewShouldBeOpened=function(){return(this.options.openQuickview||this.isUriThatMustBeOpenedInQuickview())&&d.QueryUtils.hasHTMLVersion(this.result)},e.ID="ResultLink",e.doExport=function(){b.exportGlobally({ResultLink:e})},e.options={field:s.ComponentOptions.buildFieldOption(),openInOutlook:s.ComponentOptions.buildBooleanOption({defaultValue:!1}),openQuickview:s.ComponentOptions.buildBooleanOption({defaultValue:!1}),alwaysOpenInNewWindow:s.ComponentOptions.buildBooleanOption({defaultValue:!1}),hrefTemplate:s.ComponentOptions.buildStringOption(),titleTemplate:s.ComponentOptions.buildStringOption(),onClick:s.ComponentOptions.buildCustomOption(function(){return null})},e}(o.Component);e.ResultLink=A,a.Initialization.registerAutoCreateComponent(A)}});