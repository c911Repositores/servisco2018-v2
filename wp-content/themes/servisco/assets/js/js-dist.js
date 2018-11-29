function stp_fast_scroll_to(t){var e=t.attr("data-stp-fastscroll-cmd"),a=$("[data-stp-fastscroll-target="+e+"]"),i=$("[data-stp-fastscroll-exclusion="+e+"]").outerHeight();i||(i=0);var n=a.offset();n=n.top-i,$("html,body").animate({scrollTop:n},500)}function stp_close_popup(a){a.fadeOut(function(){if(0<a.find("iframe").length){var t=a.find("iframe"),e=t.attr("src");t.attr("src",""),t.attr("src",e)}})}function stp_show_popup(t){var e=$("#"+t);e.is(".generated")||(e.contents().wrapAll("<div class='content_wrapper'>"),e.contents().wrapAll("<div class='margin_wrapper'>"),e.contents().wrapAll("<div class='vert_wrapper'>"),e.contents().wrapAll("<div class='hor_wrapper'>"),e.contents().wrapAll("<div class='center_wrapper'>"),e.find(".content_wrapper").append("<span class='close cross'><i class='fa fa-times'></i></span>"),e.addClass("generated"),$.event.trigger({type:"autopopup_created",id_popup:t})),e.fadeIn()}function stp_lift_tester(){if(0<$("[data-stp-lift-pusher]").length)var t=$("[data-stp-lift-pusher]").outerHeight();else t=0;0<$("[data-stp-lift-wrapper]").length&&$(window).scrollTop()>$("[data-stp-lift-wrapper]").offset().top-t?$("[data-stp-lift]").addClass("stp-lift-on"):$("[data-stp-lift]").removeClass("stp-lift-on")}function stp_parallax_move(){$("[data-stp-parallax]").each(function(){var t=$(this).offset().top-$(window).height();t<0&&(t=0,$(this).css("background-position","50% 0%"));var e=$(this).offset().top+$(this).height(),a=($(window).scrollTop()-t)/(e-t)*100;0<a&&a<100&&$(this).css("background-position","50% "+a+"%")})}function autoloader(t){"start"==t?(0==$("#autoloader").length&&$("body").prepend('<div id="autoloader"><i class="fa fa-spinner fa-spin"></i></div>'),$("#autoloader").fadeIn()):"stop"==t&&$("#autoloader").fadeOut()}function stp_show_menu(t){var e=$("[data-stp-menu="+t+"]");0<$("#stp-sidemenu-mask").length||$("body").prepend("<div id='stp-sidemenu-mask'></div>"),e.addClass("stp-menu-open"),$("#stp-sidemenu-mask").fadeIn()}function stp_close_menu(t){t.removeClass("stp-menu-open"),$("#stp-sidemenu-mask").fadeOut()}$=jQuery.noConflict(),function(y){var $=/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);y.sliker=function(t,i){var n={nbr_li:1,vitesse_auto:3e3,vitesse:.5,auto:0,type:"none",cible:"none",isolement:0,pc_only:0,loop:0,liquid:1,drag:0,creer_afficheur:0,fading_mode:0,fading_type:1,buffering_nbr:1,fullscreen:0,bullets:1,bullets_limit:20,bullets_limit_mobile:8,arrows:1},s=this;s.settings={};var a,r,l,o,d,c,f,u,p,_,h,m,g,k,b,v,w=y(t),x=1;y(window).on("load",function(){w.removeClass("sliker--safeload")}),s.init=function(){if(s.settings=y.extend({},n,i),1==s.settings.fading_mode&&2==s.settings.fading_type&&(s.settings.liquid=1),0==$&&1==s.settings.fullscreen&&1==s.settings.liquid&&w.find(".sliker__btn-fullscreen").length<1&&w.append('<a class="sliker__btn-fullscreen" href=""><i class="fa fa-expand"></i></a>'),0==$&&1==s.settings.arrows){if(w.is("[data-arrow]"))var t=w.attr("data-arrow");else t="fa fa-chevron";w.find(".sliker__arrow-left").length<1&&(w.append('<a class="sliker__arrow-left" href=""><i class="'+t+'-left"></i></a>'),w.append('<a class="sliker__arrow-right" href=""><i class="'+t+'-right"></i></a>'))}if(0!=$&&("mobile"==s.settings.drag&&(s.settings.drag=1,s.settings.fading_mode=0),w.addClass("mobile"),1==s.settings.pc_only&&w.remove(),"auto"==s.settings.bullets_limit_mobile||(s.settings.bullets_limit=s.settings.bullets_limit_mobile)),1==s.settings.creer_afficheur&&(0==$&&"none"!=s.settings.cible||(w.prepend('<div class="sliker__displayer"><img class="sliker__displayer-img" src=""></div>'),w.find(".sliker__displayer img").attr("src",w.find(".sliker__item:first-child img").attr("src")),w.find(".sliker__item").click(function(){w.find(".sliker__displayer .sliker__displayer-img").attr("src",y(this).find("img").attr("src"))}))),0==y(".sliker-isolation").length&&1==s.settings.isolement&&y("body").append('<div class="sliker-isolation"></div>'),1==s.settings.drag&&(s.settings.loop=0),1==s.settings.fading_mode&&(s.settings.loop=0),s.reset(),0!=s.settings.auto){var a=1;!function t(){if(0==a&&(x++,1==s.settings.loop||x<=c||(x=1),s.defilement_images()),a=0,"custom"==s.settings.auto)var e=w.find(".sliker__item:nth-child("+x+")").attr("data-timer");else e=s.settings.vitesse_auto;f=setTimeout(t,e)}()}var e;(s.reset(),1==s.settings.drag&&(0==$?(w.mousedown(function(t){s.appuyer(t)}),w.mouseup(function(t){s.lacher()}),w.find(".sliker__window").mouseout(function(t){s.lacher()})):(w.bind("touchstart",function(t){clearTimeout(f),s.appuyer(t)}),w.bind("touchend",function(t){s.lacher()})),w.find("img").on("dragstart",function(t){t.preventDefault()})),w.on("click",".sliker__btn-fullscreen",function(){return clearTimeout(f),w.hasClass("sliker--fullscreen")?(w.removeClass("sliker--fullscreen"),s.settings.fading_mode=v):(w.addClass("sliker--fullscreen"),v=s.settings.fading_mode,s.settings.fading_mode=1),s.reset(),!1}),y(window).resize(function(){s.reset()}),w.mousedown(function(t){clearTimeout(f)}),w.on("click",".sliker__arrow-left, .sliker__pages-btn-left",function(){return clearTimeout(f),x-=1,1==s.settings.isolement&&0==$&&s.afficher_cache(),s.defilement_images(),!1}),w.on("click",".sliker__arrow-right, .sliker__pages-btn-right",function(){return clearTimeout(f),x+=1,1==s.settings.isolement&&0==$&&s.afficher_cache(),s.defilement_images(),!1}),w.on("click",".sliker__bulletitem",function(){return x=y(this).index()+1,1==s.settings.isolement&&0==$&&s.afficher_cache(),s.defilement_images(),clearTimeout(f),!1}),"visualiseur"==s.settings.type)&&(y(s.settings.cible).on("mousedown"," .sliker__item",function(t){e=t.pageX}),y(s.settings.cible).on("click"," .sliker__item",function(t){if((e=Math.abs(t.pageX-e))<10||0!=$)return y(this).parents(".sliker__track").children("li:first-child").is("[data-group]")?(x=0,y(this).prevAll().each(function(){x+=Math.round(y(this).attr("data-group"))}),x++):x=y(this).index()+1,s.defilement_images(),clearTimeout(f),1==s.settings.isolement&&0==$&&s.afficher_cache(),!1}));y(window).scroll(function(){y(".sliker-isolation").fadeOut()}),y("body").on("click",".sliker-isolation",function(){y(".sliker-isolation").fadeOut()}),s.buffering_imgs()},s.defilement_images=function(){y.event.trigger({type:"sliker_defilement",cpt:x,slider:w}),s.buffering_imgs(),w.find(".sliker__bulletitem").removeClass("sliker__bulletitem--selected"),w.find(".sliker__bulletitem:nth-child("+x+")").addClass("sliker__bulletitem--selected"),1!=s.settings.fading_mode&&(w.find(".sliker__item").removeClass("sliker__item--selected"),w.find(".sliker__item:nth-child("+x+")").addClass("sliker__item--selected")),1==x?w.find(".sliker__arrow-left, .sliker__pages-btn-left").css("visibility","hidden"):w.find(".sliker__arrow-left, .sliker__pages-btn-left").css("visibility","visible"),c<=x?w.find(".sliker__arrow-right, .sliker__pages-btn-right").css("visibility","hidden"):w.find(".sliker__arrow-right, .sliker__pages-btn-right").css("visibility","visible"),1==s.settings.loop&&(w.find(".sliker__arrow-right, .sliker__pages-btn-right").css("visibility","visible"),w.find(".sliker__arrow-left, .sliker__pages-btn-left").css("visibility","visible")),w.find(".sliker__track").stop();w.find(".sliker__item.rajout:first").index();w.find(".sliker__pages .sliker__pages-text .sliker__pages-text-nbr").text(x),1==s.settings.fading_mode||x==c+1||0==x||s.moveTo("-"+r*(x-1)),1!=s.settings.fading_mode&&y.event.trigger({type:"sliker_defilement_end",cpt:x,slider:w})},s.moveTo=function(t){w.find(".sliker__track").css({"transition-duration":s.settings.vitesse+"s","-webkit-transform":"translate("+t+"px,0) translateZ(0)","-ms-transform":"translate("+t+"px,0) translateZ(0)",transform:"translate("+t+"px,0) translateZ(0)"})},s.instantMoveTo=function(t){w.find(".sliker__track").css({"transition-duration":"0s","-webkit-transform":"translate("+t+"px,0) translateZ(0)","-ms-transform":"translate("+t+"px,0) translateZ(0)",transform:"translate("+t+"px,0) translateZ(0)"})},s.afficher_cache=function(){y(".sliker-isolation").fadeIn()},s.buffering_imgs=function(){for(var t=x-s.settings.buffering_nbr;t<=x+s.settings.buffering_nbr;t++){if(void 0===w.find(".sliker__item:nth-child("+t+") img[data-sliker-src]").attr("src")){var e=w.find(".sliker__item:nth-child("+t+") img[data-sliker-src]").attr("data-sliker-src");w.find(".sliker__item:nth-child("+t+") img[data-sliker-src]").attr("src",e)}}},s.appuyer=function(t){if(w.find(".sliker__track").stop(),g=1,0==$)b=Math.round(t.pageX-u.left);else{var e=t.originalEvent.touches[0];b=Math.round(e.pageX-u.left)}k=w.find(".sliker__track").position(),k=Math.round(k.left),0==$?w.find(".sliker__window").mousemove(function(t){m=Math.round(t.pageX-u.left),s.bouger(t)}):w.find(".sliker__window").bind("touchmove",function(t){var e=t.originalEvent.touches[0];return m=Math.round(e.pageX-u.left),s.bouger(t),!1})},s.bouger=function(t){var e=k+(m-b);return w.find(".sliker__track").css({"transition-duration":"0s","-webkit-transform":"translate("+e+"px,0px) translateZ(0)","-moz-transform":"translate("+e+"px,0px) translateZ(0)","-ms-transform":"translate("+e+"px,0px) translateZ(0)","-o-transform":"translate("+e+"px,0px) translateZ(0)",transform:"translate("+e+"px,0px) translateZ(0)"}),m-b<p/8*-1&&(h=0,_=1),p/8<m-b&&(_=0,h=1),!1},s.lacher=function(t){1==g&&((g=0)==$?w.find(".sliker__window").unbind("mousemove"):w.find(".sliker__window").unbind("touchmove"),1==_?(_=0,c<(x+=1)&&(x=c),1==s.settings.isolement&&0==$&&s.afficher_cache()):1==h&&(h=0,(x-=1)<1&&(x=1),1==s.settings.isolement&&0==$&&s.afficher_cache()),s.defilement_images())},s.reset=function(){if(1==s.settings.liquid&&w.find(".sliker__window .sliker__item").width(w.find(".sliker__window").width()),w.find(".rajout").remove(),(a=w.find(".sliker__item").outerWidth(!0))||(a=20),l=w.find(".sliker__window").width()/a,o=Math.floor(l),.8<l-o&&(o+=1),o<1&&(o=1),o<s.settings.nbr_li&&(s.settings.nbr_li=o),r=a*s.settings.nbr_li,d=Math.ceil(w.find(".sliker__item").length),(c=Math.ceil((d-(o-s.settings.nbr_li))/s.settings.nbr_li))<=1&&(c=1,clearTimeout(f)),1==s.settings.loop&&(c=Math.ceil(d/s.settings.nbr_li)),c<x&&(x=c),1==w.find(".sliker__item--selected").length?x=w.find(".sliker__item--selected").index()+1:w.find(".sliker__item:first-child").addClass("sliker__item--selected"),s.instantMoveTo(-1*(x-1)*a),1==c||0==c?w.find(".sliker__arrow-left, .sliker__arrow-right").css("visibility","hidden"):1==s.settings.loop?w.find(".sliker__arrow-left, .sliker__arrow-right").css("visibility","visible"):1==x?(w.find(".sliker__arrow-left").css("visibility","hidden"),w.find(".sliker__arrow-right").css("visibility","visible")):x==c?(w.find(".sliker__arrow-left").css("visibility","visible"),w.find(".sliker__arrow-right").css("visibility","hidden")):w.find(".sliker__arrow-left, .sliker__arrow-right").css("visibility","visible"),w.find(".sliker__bullets").remove(),w.find(".sliker__pages").remove(),1==s.settings.bullets&&1<c)if(s.settings.bullets_limit>=c){w.find(".sliker__window").after('<ul class="sliker__bullets"></ul>');for(var t=1;t<=c;t++)w.is("[data-bullet]")?w.find(".sliker__bullets").append('<li class="sliker__bulletitem">'+w.attr("data-bullet")+"</li>"):w.find(".sliker__bullets").append('<li class="sliker__bulletitem"><span class="sliker__bullet-classic">"+i+"</span></li>')}else{if(w.is("[data-arrow]"))var e=w.attr("data-arrow");else e="fa fa-chevron";w.find(".sliker__window").after('<div class="sliker__pages"><div class="sliker__pages-wrap"></div></div>'),w.find(".sliker__pages .sliker__pages-wrap").append('<span class="sliker__pages-btn-left"><i class="'+e+'-left"></i></span>'),w.find(".sliker__pages .sliker__pages-wrap").append('<span class="sliker__pages-text"><span class="sliker__pages-text-nbr">'+x+"</span>/"+c+"</span>"),w.find(".sliker__pages .sliker__pages-wrap").append('<span class="sliker__pages-btn-right"><i class="'+e+'-right"></i></span>')}if(w.find(".sliker__bulletitem:nth-child("+x+")").addClass("sliker__bulletitem--selected"),1==s.settings.loop)for(t=0;t<=2*o;t++)w.find(".sliker__item:nth-child("+t+")").clone().addClass("rajout").appendTo(w.find(".sliker__track"));u=w.find(".sliker__window").offset(),p=w.find(".sliker__window li").width()},s.init()},y.fn.sliker=function(e){return this.each(function(){if(void 0===y(this).data("sliker")){var t=new y.sliker(this,e);y(this).data("sliker",t)}})}}(jQuery),$(document).ready(function(){$("[data-stp-fastscroll-cmd]").click(function(){return stp_fast_scroll_to($(this)),!1})}),$(document).ready(function(){$("[data-popup]").click(function(){return stp_show_popup($(this).attr("data-popup")),!1}),$(".autopopup.test").each(function(){return stp_show_popup($(this).attr("id")),!1}),$("body").on("click",".autopopup .close",function(){stp_close_popup($(this).parents(".autopopup"))}),$("body").on("click","[id^='popup_']",function(t){($(t.target).is(".autopopup")||$(t.target).is(".vert_wrapper"))&&stp_close_popup($(this))})}),$(document).ready(function(){stp_lift_tester()}),$(window).scroll(function(){stp_lift_tester()}),$(window).load(function(){stp_parallax_move()}),$(window).scroll(function(){stp_parallax_move()}),$(document).ready(function(){$("[data-stp-menu-open]").click(function(){return stp_show_menu($(this).attr("data-stp-menu-open")),!1}),$("[data-stp-menu-close]").on("click",function(){return stp_close_menu($(this).closest("[data-stp-menu]")),!1}),$("body").on("click","#stp-sidemenu-mask",function(){stp_close_menu($(".stp-menu-open"))})}),function(d){function e(){d("[data-radio-auto-menu] input").each(function(){1==d(this).parents(".ffx-fieldset").find("input:checked").length?d(this).is(":checked")&&t(d(this).parents("[data-radio-auto-menu]")):1==d(this).parents(".ffx-fieldset").find(".uncheck_default").length&&t(d(this).parents(".ffx-fieldset").find(".uncheck_default"))})}function t(t){var e=d(t).attr("data-radio-auto-menu"),a=new Array;for(d(t).parents(".ffx-fieldset").find("[data-radio-auto-menu]").each(function(){a.push(d(this).attr("data-radio-auto-menu"))}),i=0;i<a.length;i++){d("[data-target~="+a[i]+"]").each(function(){d(this).hide(),d(this).not(".no_disabled").find("input,select,textarea").attr("disabled","disabled"),d(this).filter(".empty_input").find("input,select,textarea").val("")})}var n=d("[data-target~="+e+"]");d(n).show(),d(n).find("input,select,textarea").removeAttr("disabled")}function a(){d("[data-checkbox-auto-menu] input").each(function(){d(this).is(":checked")?n(d(this).parents("[data-checkbox-auto-menu]"),"-yes"):n(d(this).parents("[data-checkbox-auto-menu]"),"-no")})}function n(t,e){var a=d(t).attr("data-checkbox-auto-menu");d("[data-target="+a+"-yes]").hide(),d("[data-target="+a+"-no]").hide(),d(t).is(".checkbox-disabled")&&(d("[data-target="+a+"-yes]").find("input, textarea, select").attr("disabled","disabled"),d("[data-target="+a+"-no]").find("input, textarea, select").attr("disabled","disabled")),d("[data-target="+a+e+"]").show(),d(t).is(".checkbox-disabled")&&d("[data-target="+a+e+"]").find("input, textarea, select").removeAttr("disabled")}function s(){d("[data-ffx-select-automenu]").each(function(){r(d(this),d(this).find("option:checked"))})}function r(t,e){var a=d(t).attr("data-ffx-select-automenu")+"-"+d(e).attr("data-key"),n=new Array;for(d(t).find("option").each(function(){n.push(d(t).attr("data-ffx-select-automenu")+"-"+d(this).attr("data-key"))}),i=0;i<n.length;i++){d("[data-ffx-select-target~="+n[i]+"]").each(function(){d(this).hide(),d(this).not(".no_disabled").find("input,select,textarea").attr("disabled","disabled"),d(this).filter(".empty_input").find("input,select,textarea").val("")})}var s=d("[data-ffx-select-target~="+a+"]");d(s).show(),d(s).find("input,select,textarea").removeAttr("disabled")}function c(){d("[data-lang-menu] [data-lang]").each(function(){1==d(this).parents("[data-lang-menu]").find("[data-lang].selected").length?d(this).is(".selected")&&l(d(this)):l(d(this).parents("[data-lang-menu]").find("[data-lang]:first"))})}function l(t){var e=d(t).parents("[data-lang-menu]").attr("data-lang-menu"),a=e+"-"+d(t).attr("data-lang");d(t).parents("[data-lang-menu]").find("[data-lang]").removeClass("selected"),d(t).addClass("selected"),d("[data-lang-category="+e+"]").hide(),d("[data-lang-target~="+a+"]").show()}function o(t){d(t).is("[data-name-safe]")&&(d(t).attr("name",d(t).attr("data-name-safe")),d(t).removeAttr("data-name-safe"));var e=d(t).attr("name"),a=e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&");d(t).parents("label").next("input.uncheck-safe[name='"+a+"']").remove(),d(t).is(":checked")||(d('<input class="uncheck-safe" type="hidden" name="'+e+'" value="0">').insertAfter(d(t).parents("label")),d(t).attr("data-name-safe",e),d(t).removeAttr("name"))}function f(){d(".ffx-error").each(function(){if(0<d(this).closest(".ffx-label, .ffx-checkskin").length){d(this).css({left:"0px",top:"-22px"})}})}function u(){d(".sortable").sortable({handle:".move",update:function(t,e){m(d(this).find("[data-group]"))},stop:function(t,e){if(e.item.parent().is(".ffx-children-wrapper")){_(a=e.item.parent().children(".category"))}else{var a=e.item.attr("data-group");_(d("[data-group="+a+"]"))}}})}function p(t){var e,a=d(t).attr("data-group"),i=d("[data-group="+a+"]").first(),n=d("[data-group="+a+"]").last(),s=d(i).clone(!0).addClass("ffx-clone");d.event.trigger({type:"form_element_before_cloned",original:i}),d(e=s).find('input[type="text"],input[type="password"],textarea').val(""),d(e).find("input, textarea").removeAttr("checked"),d(e).find(".checked").removeClass("checked"),d(e).find(".ffx-children-wrapper").remove(),d(e).find("input, textarea, select").removeAttr("readonly"),d(s).insertAfter(n),m(t),d(s).is(".manual_increment")&&function(t,e,a,i){if(t.addClass("manual_increment"),e.is("[data-group-cpt]")){var n=e.attr("data-group-cpt");n++}else n=t.prevAll("[data-group="+a+"]").length;d("[data-group="+a+"]").attr("data-group-cpt",n),t.attr("data-this-cpt",n);var s=i.find("[data-formflex-base]").first().addBack().attr("data-formflex-base");t.find("[data-lang-iso]").attr("data-formflex-base",s);var r=s+"["+n+"]";1<=t.find("[data-lang-iso]").length?t.find("[data-formflex-base]").each(function(){var n=d(this).attr("data-lang-iso");d(this).find("[data-name]").each(function(){var t=d(this).attr("data-name");if(d(this).is("[data-inner_child]")){var e=d(this).attr("data-inner_child"),a=r+"["+e+"]["+n+"][0]["+t+"]";d(this).attr("name",a)}else{var i=r+"["+t+"]["+n+"]";d(this).attr("name",i)}})}):t.find("[data-formflex-base]").addBack().each(function(){1<=d(this).find("[data-name]").length?d(this).find("[data-name]").each(function(){var t=d(this).attr("data-name"),e=r+"["+t+"]";d(this).attr("name",e)}):d(this).find("input, textarea, select").each(function(){d(this).attr("name",r)})})}(s,i,a,n),_(d("[data-group="+a+"]")),d.event.trigger({type:"form_element_cloned",element:s,original:i})}function _(t){var e=0;t.each(function(){d(this).find(".sortable_get_position:first").val(e),e++})}function h(t){var e=t.parent();t.remove(),m(t),_(e.children(".category")),d.event.trigger({type:"element_deleted",new_item:t})}function m(t){var e=t.attr("data-group"),a=d("[data-group="+e+"]").last();d("[data-group="+e+"]").removeClass("dupplicate_wrapper"),a.addClass("dupplicate_wrapper")}d(document).ready(function(){e()}),d(document).on("formflex_refresh",function(t){e()}),d("body").on("change","[data-radio-auto-menu] input",function(){d(this).is(":checked")&&t(d(this).parents("[data-radio-auto-menu]"))}),d(document).ready(function(){a()}),d(document).on("formflex_refresh",function(t){a()}),d("body").on("change","[data-checkbox-auto-menu] input",function(){d(this).is(":checked")?n(d(this).parents("[data-checkbox-auto-menu]"),"-yes"):n(d(this).parents("[data-checkbox-auto-menu]"),"-no")}),d(document).ready(function(){s()}),d(document).on("formflex_refresh",function(t){s()}),d("body").on("change","[data-ffx-select-automenu]",function(){r(d(this),d(this).find("option:checked"))}),d(document).ready(function(){c()}),d(document).on("formflex_refresh",function(t){c()}),d("body").on("click","[data-lang-menu] [data-lang]",function(){l(d(this))}),d(document).ready(function(){d("input[data-uncheck-safe]").each(function(){o(d(this))})}),d(document).on("formflex_refresh",function(t){d("input[data-uncheck-safe]").each(function(){o(d(this))})}),d("body").on("change","input[data-uncheck-safe]",function(){o(d(this))}),d(document).ready(function(){f()}),d(document).on("formflex_refresh",function(t){f()}),d(document).ready(function(){d("[data-group]").each(function(){m(d(this))}),1<=d(".sortable").length&&u()}),d(document).on("formflex_refresh",function(t){d("[data-group]").each(function(){m(d(this))}),1<=d(".sortable").length&&u()}),d("body").on("click",".ffx-round-icon--dupplicate",function(t){return t.preventDefault(),p(d(this).closest("[data-group]")),!1}),d("body").on("click","[data-ffx-children-add]",function(t){return t.preventDefault(),function(t){var e=d(t).attr("data-ffx-children-add"),a=d("[data-ffx-child-template="+e+"]");d(t).closest(".category").find(".ffx-children-wrapper").length<1&&(1<=d(t).parents(".sortable").length?(d(t).closest(".category").append('<div class="sortable ffx-children-wrapper">'),u()):d(t).closest(".category").append('<div class="ffx-children-wrapper">'));var i=d(t).closest(".category").find(".ffx-children-wrapper:first"),n=d(t).closest(".category"),s=d(a).clone(!0).removeAttr("data-ffx-child-template");i.append(s);var r=d(t).closest("[data-formflex-base]").attr("data-formflex-base");if(i.is("[data-child-cpt]")){var l=i.attr("data-child-cpt");l++}else l=s.prevAll(".category").length;i.attr("data-child-cpt",l);var o=n.find("[data-lang-category]").attr("data-lang-category");s.find("[data-lang-iso]").each(function(){var t=d(this).attr("data-lang-iso"),e=d(this).closest("[data-this-cpt]").attr("data-this-cpt");d(this).attr("data-lang-target",o+"-"+t),d(this).attr("data-lang-category",o);var a=r+"["+e+"][children]["+t+"]["+l+"]";d(this).find("input, textarea").attr("data-structure",a)}),s.find("[data-name]").each(function(){d(this).attr("name",d(this).attr("data-structure")+"["+d(this).attr("data-name")+"]")}),c(),_(n.find(".category")),d.event.trigger({type:"child_added",new_item:s})}(d(this)),!1}),d("body").on("click",".ffx-round-icon--delete",function(){return 0<d(this).parents(".category").length?h(d(this).closest(".category")):h(d(this).closest("[data-group]")),!1})}(jQuery),function(a){function t(){50<a(window).scrollTop()?a(".header").addClass("header--scrolled"):a(".header").removeClass("header--scrolled")}a(document).ready(function(){a(".header__button").on("click",function(){a(this).is(".header__button--pccrossed")?(a(".header__navbarlist").removeClass("header__navbarlist--pcopen"),a(".header__button").removeClass("header__button--pccrossed")):(a(".header__navbarlist").addClass("header__navbarlist--pcopen"),a(".header__button").addClass("header__button--pccrossed")),a(this).is(".header__button--mobilecrossed")?(a(".header__navbarlist").removeClass("header__navbarlist--mobileopen"),a(".header__button").removeClass("header__button--mobilecrossed")):(a(".header__navbarlist").addClass("header__navbarlist--mobileopen"),a(".header__button").addClass("header__button--mobilecrossed"))})}),a(document).ready(function(){t(),a(window).scroll(function(){t()})}),a(document).ready(function(){a(".scrollsignal__arrow").on("click",function(){var t;t=a(window).height(),a("html,body").animate({scrollTop:t},1e3)})}),a(document).ready(function(){if(1==a("#js-banner-numbers").length){var e=!1;a(window).scroll(function(){var t=a(window).scrollTop();a("#js-banner-numbers").position().top<=t+a(window).height()/2&&0==e&&(e=!0,a("[data-js-autoincrement]").each(function(){var e=a(this),t=a(this).attr("data-js-autoincrement");a({percentage:0}).stop(!0).animate({percentage:t},{duration:4e3,easing:"easeOutExpo",step:function(){var t=Math.round(this.percentage);e.text(t)}}).promise().done(function(){e.text(t)})}))})}})}(jQuery);
//# sourceMappingURL=js-dist.js.map