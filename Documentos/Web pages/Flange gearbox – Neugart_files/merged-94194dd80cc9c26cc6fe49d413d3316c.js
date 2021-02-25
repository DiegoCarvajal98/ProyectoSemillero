
!function(e){"use strict";var t={i18n:{ru:{months:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],dayOfWeek:["Вск","Пн","Вт","Ср","Чт","Пт","Сб"]},en:{months:["January","February","March","April","May","June","July","August","September","October","November","December"],dayOfWeek:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},de:{months:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],dayOfWeek:["So","Mo","Di","Mi","Do","Fr","Sa"]},nl:{months:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],dayOfWeek:["zo","ma","di","wo","do","vr","za"]},tr:{months:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],dayOfWeek:["Paz","Pts","Sal","Çar","Per","Cum","Cts"]},fr:{months:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],dayOfWeek:["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"]},es:{months:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],dayOfWeek:["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"]},th:{months:["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],dayOfWeek:["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."]},pl:{months:["styczeń","luty","marzec","kwiecień","maj","czerwiec","lipiec","sierpień","wrzesień","październik","listopad","grudzień"],dayOfWeek:["nd","pn","wt","śr","cz","pt","sb"]},pt:{months:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],dayOfWeek:["Dom","Seg","Ter","Qua","Qui","Sex","Sab"]},ch:{months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],dayOfWeek:["日","一","二","三","四","五","六"]},se:{months:["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"],dayOfWeek:["Sön","Mån","Tis","Ons","Tor","Fre","Lör"]},kr:{months:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],dayOfWeek:["일","월","화","수","목","금","토"]},it:{months:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],dayOfWeek:["Dom","Lun","Mar","Mer","Gio","Ven","Sab"]},da:{months:["January","Februar","Marts","April","Maj","Juni","July","August","September","Oktober","November","December"],dayOfWeek:["Søn","Man","Tir","ons","Tor","Fre","lør"]},ja:{months:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],dayOfWeek:["日","月","火","水","木","金","土"]},vi:{months:["Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6","Tháng 7","Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12"],dayOfWeek:["CN","T2","T3","T4","T5","T6","T7"]}},value:"",lang:"en",format:"Y/m/d H:i",formatTime:"H:i",formatDate:"Y/m/d",startDate:!1,step:60,closeOnDateSelect:!1,closeOnWithoutClick:!0,timepicker:!0,datepicker:!0,minDate:!1,maxDate:!1,minTime:!1,maxTime:!1,allowTimes:[],opened:!1,initTime:!0,inline:!1,onSelectDate:function(){},onSelectTime:function(){},onChangeMonth:function(){},onChangeDateTime:function(){},onShow:function(){},onClose:function(){},onGenerate:function(){},withoutCopyright:!0,inverseButton:!1,hours12:!1,next:"xdsoft_next",prev:"xdsoft_prev",dayOfWeekStart:0,timeHeightInTimePicker:25,timepickerScrollbar:!0,todayButton:!0,defaultSelect:!0,scrollMonth:!0,scrollTime:!0,scrollInput:!0,lazyInit:!1,mask:!1,validateOnBlur:!0,allowBlank:!0,yearStart:1950,yearEnd:2050,style:"",id:"",roundTime:"round",className:"",weekends:[],yearOffset:0};Array.prototype.indexOf||(Array.prototype.indexOf=function(e,t){for(var n=t||0,a=this.length;n<a;n++)if(this[n]===e)return n;return-1}),e.fn.xdsoftScroller=function(t){return this.each(function(){var n=e(this);if(!e(this).hasClass("xdsoft_scroller_box")){var a=function(e){var t={x:0,y:0};if("touchstart"==e.type||"touchmove"==e.type||"touchend"==e.type||"touchcancel"==e.type){var n=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0];t.x=n.pageX,t.y=n.pageY}else"mousedown"!=e.type&&"mouseup"!=e.type&&"mousemove"!=e.type&&"mouseover"!=e.type&&"mouseout"!=e.type&&"mouseenter"!=e.type&&"mouseleave"!=e.type||(t.x=e.pageX,t.y=e.pageY);return t},r=0,o=n.children().eq(0),s=n[0].clientHeight,i=o[0].offsetHeight,d=e('<div class="xdsoft_scrollbar"></div>'),u=e('<div class="xdsoft_scroller"></div>'),c=100,l=!1;d.append(u),n.addClass("xdsoft_scroller_box").append(d),u.on("mousedown.xdsoft_scroller",function(a){s||n.trigger("resize_scroll.xdsoft_scroller",[t]);var o=a.pageY,i=parseInt(u.css("margin-top")),l=d[0].offsetHeight;e(document.body).addClass("xdsoft_noselect"),e([document.body,window]).on("mouseup.xdsoft_scroller",function f(){e([document.body,window]).off("mouseup.xdsoft_scroller",f).off("mousemove.xdsoft_scroller",r).removeClass("xdsoft_noselect")}),e(document.body).on("mousemove.xdsoft_scroller",r=function(e){var t=e.pageY-o+i;t<0&&(t=0),t+u[0].offsetHeight>l&&(t=l-u[0].offsetHeight),n.trigger("scroll_element.xdsoft_scroller",[c?t/c:0])})}),n.on("scroll_element.xdsoft_scroller",function(e,t){s||n.trigger("resize_scroll.xdsoft_scroller",[t,!0]),t=t>1?1:t<0||isNaN(t)?0:t,u.css("margin-top",c*t),o.css("marginTop",-parseInt((i-s)*t))}).on("resize_scroll.xdsoft_scroller",function(e,t,a){s=n[0].clientHeight,i=o[0].offsetHeight;var r=s/i,l=r*d[0].offsetHeight;r>1?u.hide():(u.show(),u.css("height",parseInt(l>10?l:10)),c=d[0].offsetHeight-u[0].offsetHeight,a!==!0&&n.trigger("scroll_element.xdsoft_scroller",[t?t:Math.abs(parseInt(o.css("marginTop")))/(i-s)]))}),n.mousewheel&&n.mousewheel(function(e,t,a,r){var d=Math.abs(parseInt(o.css("marginTop")));return n.trigger("scroll_element.xdsoft_scroller",[(d-20*t)/(i-s)]),e.stopPropagation(),!1}),n.on("touchstart",function(e){l=a(e)}),n.on("touchmove",function(e){if(l){var t=a(e),r=Math.abs(parseInt(o.css("marginTop")));n.trigger("scroll_element.xdsoft_scroller",[(r-(t.y-l.y))/(i-s)]),e.stopPropagation(),e.preventDefault()}}),n.on("touchend touchcancel",function(e){l=!1})}n.trigger("resize_scroll.xdsoft_scroller",[t])})},e.fn.datetimepicker=function(n){var a=48,r=57,o=96,s=105,i=17,d=46,u=13,c=27,l=8,f=37,m=38,h=39,g=40,p=9,x=116,v=65,y=67,D=86,T=90,w=89,b=!1,_=e.isPlainObject(n)||!n?e.extend(!0,{},t,n):e.extend({},t),M=0,k=function(e){e.on("open.xdsoft focusin.xdsoft mousedown.xdsoft",function t(n){e.is(":disabled")||e.is(":hidden")||!e.is(":visible")||e.data("xdsoft_datetimepicker")||(clearTimeout(M),M=setTimeout(function(){e.data("xdsoft_datetimepicker")||S(e),e.off("open.xdsoft focusin.xdsoft mousedown.xdsoft",t).trigger("open.xdsoft")},100))})},S=function(t){function n(){var e=_.value?_.value:t&&t.val&&t.val()?t.val():"";return e&&W.isValidDate(e=Date.parseDate(e,_.format))?M.data("changed",!0):e="",e||_.startDate===!1||(e=W.strToDateTime(_.startDate)),e?e:0}var M=e("<div "+(_.id?'id="'+_.id+'"':"")+" "+(_.style?'style="'+_.style+'"':"")+' class="xdsoft_datetimepicker xdsoft_noselect '+_.className+'"></div>'),k=e('<div class="xdsoft_copyright"><a target="_blank" href="http://xdsoft.net/jqplugins/datetimepicker/">xdsoft.net</a></div>'),S=e('<div class="xdsoft_datepicker active"></div>'),O=e('<div class="xdsoft_mounthpicker"><button type="button" class="xdsoft_prev"></button><button type="button" class="xdsoft_today_button"></button><div class="xdsoft_label xdsoft_month"><span></span></div><div class="xdsoft_label xdsoft_year"><span></span></div><button type="button" class="xdsoft_next"></button></div>'),F=e('<div class="xdsoft_calendar"></div>'),I=e('<div class="xdsoft_timepicker active"><button type="button" class="xdsoft_prev"></button><div class="xdsoft_time_box"></div><button type="button" class="xdsoft_next"></button></div>'),C=I.find(".xdsoft_time_box").eq(0),H=e('<div class="xdsoft_time_variant"></div>'),Y=e('<div class="xdsoft_scrollbar"></div>'),P=(e('<div class="xdsoft_scroller"></div>'),e('<div class="xdsoft_select xdsoft_monthselect"><div></div></div>')),A=e('<div class="xdsoft_select xdsoft_yearselect"><div></div></div>');O.find(".xdsoft_month span").after(P),O.find(".xdsoft_year span").after(A),O.find(".xdsoft_month,.xdsoft_year").on("mousedown.xdsoft",function(t){O.find(".xdsoft_select").hide();var n=e(this).find(".xdsoft_select").eq(0),a=0,r=0;W.currentTime&&(a=W.currentTime[e(this).hasClass("xdsoft_month")?"getMonth":"getFullYear"]()),n.show();for(var o=n.find("div.xdsoft_option"),s=0;s<o.length&&o.eq(s).data("value")!=a;s++)r+=o[0].offsetHeight;return n.xdsoftScroller(r/(n.children()[0].offsetHeight-n[0].clientHeight)),t.stopPropagation(),!1}),O.find(".xdsoft_select").xdsoftScroller().on("mousedown.xdsoft",function(e){e.stopPropagation(),e.preventDefault()}).on("mousedown.xdsoft",".xdsoft_option",function(t){W&&W.currentTime&&W.currentTime[e(this).parent().parent().hasClass("xdsoft_monthselect")?"setMonth":"setFullYear"](e(this).data("value")),e(this).parent().parent().hide(),M.trigger("xchange.xdsoft"),_.onChangeMonth&&_.onChangeMonth.call&&_.onChangeMonth.call(M,W.currentTime,M.data("input"))}),M.setOptions=function(n){if(_=e.extend(!0,{},_,n),n.allowTimes&&e.isArray(n.allowTimes)&&n.allowTimes.length&&(_.allowTimes=e.extend(!0,[],n.allowTimes)),n.weekends&&e.isArray(n.weekends)&&n.weekends.length&&(_.weekends=e.extend(!0,[],n.weekends)),!_.open&&!_.opened||_.inline||t.trigger("open.xdsoft"),_.inline&&(M.addClass("xdsoft_inline"),t.after(M).hide(),M.trigger("afterOpen.xdsoft")),_.inverseButton&&(_.next="xdsoft_prev",_.prev="xdsoft_next"),_.datepicker?S.addClass("active"):S.removeClass("active"),_.timepicker?I.addClass("active"):I.removeClass("active"),_.value&&(t&&t.val&&t.val(_.value),W.setCurrentTime(_.value)),isNaN(_.dayOfWeekStart)||parseInt(_.dayOfWeekStart)<0||parseInt(_.dayOfWeekStart)>6?_.dayOfWeekStart=0:_.dayOfWeekStart=parseInt(_.dayOfWeekStart),_.timepickerScrollbar||Y.hide(),_.minDate&&/^-(.*)$/.test(_.minDate)&&(_.minDate=W.strToDateTime(_.minDate).dateFormat(_.formatDate)),_.maxDate&&/^\+(.*)$/.test(_.maxDate)&&(_.maxDate=W.strToDateTime(_.maxDate).dateFormat(_.formatDate)),O.find(".xdsoft_today_button").css("visibility",_.todayButton?"visible":"hidden"),_.mask){var k=function(e){try{if(document.selection&&document.selection.createRange){var t=document.selection.createRange();return t.getBookmark().charCodeAt(2)-2}if(e.setSelectionRange)return e.selectionStart}catch(n){return 0}},F=function(e,t){var e="string"==typeof e||e instanceof String?document.getElementById(e):e;if(!e)return!1;if(e.createTextRange){var n=e.createTextRange();return n.collapse(!0),n.moveEnd(t),n.moveStart(t),n.select(),!0}return!!e.setSelectionRange&&(e.setSelectionRange(t,t),!0)},C=function(e,t){var n=e.replace(/([\[\]\/\{\}\(\)\-\.\+]{1})/g,"\\$1").replace(/_/g,"{digit+}").replace(/([0-9]{1})/g,"{digit$1}").replace(/\{digit([0-9]{1})\}/g,"[0-$1_]{1}").replace(/\{digit[\+]\}/g,"[0-9_]{1}");return RegExp(n).test(t)};switch(t.off("keydown.xdsoft"),!0){case _.mask===!0:_.mask=_.format.replace(/Y/g,"9999").replace(/F/g,"9999").replace(/m/g,"19").replace(/d/g,"39").replace(/H/g,"29").replace(/i/g,"59").replace(/s/g,"59");case"string"==e.type(_.mask):C(_.mask,t.val())||t.val(_.mask.replace(/[0-9]/g,"_")),t.on("keydown.xdsoft",function(n){var M=this.value,S=n.which;switch(!0){case S>=a&&S<=r||S>=o&&S<=s||S==l||S==d:var O=k(this),I=S!=l&&S!=d?String.fromCharCode(o<=S&&S<=s?S-a:S):"_";for(S!=l&&S!=d||!O||(O--,I="_");/[^0-9_]/.test(_.mask.substr(O,1))&&O<_.mask.length&&O>0;)O+=S==l||S==d?-1:1;if(M=M.substr(0,O)+I+M.substr(O+1),""==e.trim(M))M=_.mask.replace(/[0-9]/g,"_");else if(O==_.mask.length)break;for(O+=S==l||S==d?0:1;/[^0-9_]/.test(_.mask.substr(O,1))&&O<_.mask.length&&O>0;)O+=S==l||S==d?-1:1;C(_.mask,M)?(this.value=M,F(this,O)):""==e.trim(M)?this.value=_.mask.replace(/[0-9]/g,"_"):t.trigger("error_input.xdsoft");break;case!!~[v,y,D,T,w].indexOf(S)&&b:case!!~[c,m,g,f,h,x,i,p,u].indexOf(S):return!0}return n.preventDefault(),!1})}}_.validateOnBlur&&t.off("blur.xdsoft").on("blur.xdsoft",function(){_.allowBlank&&!e.trim(e(this).val()).length?(e(this).val(null),M.data("xdsoft_datetime").empty()):Date.parseDate(e(this).val(),_.format)?M.data("xdsoft_datetime").setCurrentTime(e(this).val()):(e(this).val(W.now().dateFormat(_.format)),M.data("xdsoft_datetime").setCurrentTime(e(this).val())),M.trigger("changedatetime.xdsoft")}),_.dayOfWeekStartPrev=0==_.dayOfWeekStart?6:_.dayOfWeekStart-1,M.trigger("xchange.xdsoft")},M.data("options",_).on("mousedown.xdsoft",function(e){return e.stopPropagation(),e.preventDefault(),A.hide(),P.hide(),!1});var N=I.find(".xdsoft_time_box");N.append(H),N.xdsoftScroller(),M.on("afterOpen.xdsoft",function(){N.xdsoftScroller()}),M.append(S).append(I),_.withoutCopyright!==!0&&M.append(k),S.append(O).append(F),e("body").append(M);var W=new function(){var e=this;e.now=function(){var e=new Date;return _.yearOffset&&e.setFullYear(e.getFullYear()+_.yearOffset),e},e.currentTime=this.now(),e.isValidDate=function(e){return"[object Date]"===Object.prototype.toString.call(e)&&!isNaN(e.getTime())},e.setCurrentTime=function(t){e.currentTime="string"==typeof t?e.strToDateTime(t):e.isValidDate(t)?t:e.now(),M.trigger("xchange.xdsoft")},e.empty=function(){e.currentTime=null},e.getCurrentTime=function(t){return e.currentTime},e.nextMonth=function(){var t=e.currentTime.getMonth()+1;return 12==t&&(e.currentTime.setFullYear(e.currentTime.getFullYear()+1),t=0),e.currentTime.setDate(Math.min(Date.daysInMonth[t],e.currentTime.getDate())),e.currentTime.setMonth(t),_.onChangeMonth&&_.onChangeMonth.call&&_.onChangeMonth.call(M,W.currentTime,M.data("input")),M.trigger("xchange.xdsoft"),t},e.prevMonth=function(){var t=e.currentTime.getMonth()-1;return t==-1&&(e.currentTime.setFullYear(e.currentTime.getFullYear()-1),t=11),e.currentTime.setDate(Math.min(Date.daysInMonth[t],e.currentTime.getDate())),e.currentTime.setMonth(t),_.onChangeMonth&&_.onChangeMonth.call&&_.onChangeMonth.call(M,W.currentTime,M.data("input")),M.trigger("xchange.xdsoft"),t},e.strToDateTime=function(t){var n,a,r=[];return(r=/^(\+|\-)(.*)$/.exec(t))&&(r[2]=Date.parseDate(r[2],_.formatDate))?(n=r[2].getTime()-1*r[2].getTimezoneOffset()*6e4,a=new Date(W.now().getTime()+parseInt(r[1]+"1")*n)):a=t?Date.parseDate(t,_.format):e.now(),e.isValidDate(a)||(a=e.now()),a},e.strtodate=function(t){var n=t?Date.parseDate(t,_.formatDate):e.now();return e.isValidDate(n)||(n=e.now()),n},e.strtotime=function(t){var n=t?Date.parseDate(t,_.formatTime):e.now();return e.isValidDate(n)||(n=e.now()),n},e.str=function(){return e.currentTime.dateFormat(_.format)}};O.find(".xdsoft_today_button").on("mousedown.xdsoft",function(){M.data("changed",!0),W.setCurrentTime(0),M.trigger("afterOpen.xdsoft")}).on("dblclick.xdsoft",function(){t.val(W.str()),M.trigger("close.xdsoft")}),O.find(".xdsoft_prev,.xdsoft_next").on("mousedown.xdsoft",function(){var t=e(this),n=0,a=!1;!function r(e){W.currentTime.getMonth();t.hasClass(_.next)?W.nextMonth():t.hasClass(_.prev)&&W.prevMonth(),!a&&(n=setTimeout(r,e?e:100))}(500),e([document.body,window]).on("mouseup.xdsoft",function o(){clearTimeout(n),a=!0,e([document.body,window]).off("mouseup.xdsoft",o)})}),I.find(".xdsoft_prev,.xdsoft_next").on("mousedown.xdsoft",function(){var t=e(this),n=0,a=!1,r=110;!function o(e){var s=C[0].clientHeight,i=H[0].offsetHeight,d=Math.abs(parseInt(H.css("marginTop")));t.hasClass(_.next)&&i-s-_.timeHeightInTimePicker>=d?H.css("marginTop","-"+(d+_.timeHeightInTimePicker)+"px"):t.hasClass(_.prev)&&d-_.timeHeightInTimePicker>=0&&H.css("marginTop","-"+(d-_.timeHeightInTimePicker)+"px"),C.trigger("scroll_element.xdsoft_scroller",[Math.abs(parseInt(H.css("marginTop"))/(i-s))]),r=r>10?10:r-10,!a&&(n=setTimeout(o,e?e:r))}(500),e([document.body,window]).on("mouseup.xdsoft",function s(){clearTimeout(n),a=!0,e([document.body,window]).off("mouseup.xdsoft",s)})});var z=0;M.on("xchange.xdsoft",function(t){clearTimeout(z),z=setTimeout(function(){for(var t="",n=new Date(W.currentTime.getFullYear(),W.currentTime.getMonth(),1,12,0,0),a=0,r=W.now();n.getDay()!=_.dayOfWeekStart;)n.setDate(n.getDate()-1);t+="<table><thead><tr>";for(var o=0;o<7;o++)t+="<th>"+_.i18n[_.lang].dayOfWeek[o+_.dayOfWeekStart>6?0:o+_.dayOfWeekStart]+"</th>";t+="</tr></thead>",t+="<tbody><tr>";var s=!1,i=!1;_.maxDate!==!1&&(s=W.strtodate(_.maxDate),s=new Date(s.getFullYear(),s.getMonth(),s.getDate(),23,59,59,999)),_.minDate!==!1&&(i=W.strtodate(_.minDate),i=new Date(i.getFullYear(),i.getMonth(),i.getDate()));for(var d,u,c,l=[];a<W.currentTime.getDaysInMonth()||n.getDay()!=_.dayOfWeekStart||W.currentTime.getMonth()==n.getMonth();)l=[],a++,d=n.getDate(),u=n.getFullYear(),c=n.getMonth(),l.push("xdsoft_date"),(s!==!1&&n>s||i!==!1&&n<i)&&l.push("xdsoft_disabled"),W.currentTime.getMonth()!=c&&l.push("xdsoft_other_month"),(_.defaultSelect||M.data("changed"))&&W.currentTime.dateFormat("d.m.Y")==n.dateFormat("d.m.Y")&&l.push("xdsoft_current"),r.dateFormat("d.m.Y")==n.dateFormat("d.m.Y")&&l.push("xdsoft_today"),(0==n.getDay()||6==n.getDay()||~_.weekends.indexOf(n.dateFormat("d.m.Y")))&&l.push("xdsoft_weekend"),_.beforeShowDay&&"function"==typeof _.beforeShowDay&&l.push(_.beforeShowDay(n)),t+='<td data-date="'+d+'" data-month="'+c+'" data-year="'+u+'" class="xdsoft_date xdsoft_day_of_week'+n.getDay()+" "+l.join(" ")+'"><div>'+d+"</div></td>",n.getDay()==_.dayOfWeekStartPrev&&(t+="</tr>"),n.setDate(d+1);t+="</tbody></table>",F.html(t),O.find(".xdsoft_label span").eq(0).text(_.i18n[_.lang].months[W.currentTime.getMonth()]),O.find(".xdsoft_label span").eq(1).text(W.currentTime.getFullYear());var f="",m="",c="",h=function(e,t){var n=W.now();n.setHours(e),e=parseInt(n.getHours()),n.setMinutes(t),t=parseInt(n.getMinutes()),l=[],(_.maxTime!==!1&&W.strtotime(_.maxTime).getTime()<n.getTime()||_.minTime!==!1&&W.strtotime(_.minTime).getTime()>n.getTime())&&l.push("xdsoft_disabled"),(_.initTime||_.defaultSelect||M.data("changed"))&&parseInt(W.currentTime.getHours())==parseInt(e)&&(_.step>59||Math[_.roundTime](W.currentTime.getMinutes()/_.step)*_.step==parseInt(t))&&(_.defaultSelect||M.data("changed")?l.push("xdsoft_current"):_.initTime&&l.push("xdsoft_init_time")),parseInt(r.getHours())==parseInt(e)&&parseInt(r.getMinutes())==parseInt(t)&&l.push("xdsoft_today"),f+='<div class="xdsoft_time '+l.join(" ")+'" data-hour="'+e+'" data-minute="'+t+'">'+n.dateFormat(_.formatTime)+"</div>"};if(_.allowTimes&&e.isArray(_.allowTimes)&&_.allowTimes.length)for(var a=0;a<_.allowTimes.length;a++)m=W.strtotime(_.allowTimes[a]).getHours(),c=W.strtotime(_.allowTimes[a]).getMinutes(),h(m,c);else for(var a=0,o=0;a<(_.hours12?12:24);a++)for(o=0;o<60;o+=_.step)m=(a<10?"0":"")+a,c=(o<10?"0":"")+o,h(m,c);H.html(f);var g="",a=0;for(a=parseInt(_.yearStart,10)+_.yearOffset;a<=parseInt(_.yearEnd,10)+_.yearOffset;a++)g+='<div class="xdsoft_option '+(W.currentTime.getFullYear()==a?"xdsoft_current":"")+'" data-value="'+a+'">'+a+"</div>";for(A.children().eq(0).html(g),a=0,g="";a<=11;a++)g+='<div class="xdsoft_option '+(W.currentTime.getMonth()==a?"xdsoft_current":"")+'" data-value="'+a+'">'+_.i18n[_.lang].months[a]+"</div>";P.children().eq(0).html(g),e(this).trigger("generate.xdsoft")},10),t.stopPropagation()}).on("afterOpen.xdsoft",function(){if(_.timepicker){var e;if(H.find(".xdsoft_current").length?e=".xdsoft_current":H.find(".xdsoft_init_time").length&&(e=".xdsoft_init_time"),e){var t=C[0].clientHeight,n=H[0].offsetHeight,a=H.find(e).index()*_.timeHeightInTimePicker+1;n-t<a&&(a=n-t),H.css("marginTop","-"+parseInt(a)+"px"),C.trigger("scroll_element.xdsoft_scroller",[parseInt(a)/(n-t)])}}});var J=0;F.on("click.xdsoft","td",function(n){n.stopPropagation(),J++;var a=e(this),r=W.currentTime;return!a.hasClass("xdsoft_disabled")&&(r.setDate(a.data("date")),r.setMonth(a.data("month")),r.setFullYear(a.data("year")),M.trigger("select.xdsoft",[r]),t.val(W.str()),(J>1||_.closeOnDateSelect===!0||0===_.closeOnDateSelect&&!_.timepicker)&&!_.inline&&M.trigger("close.xdsoft"),_.onSelectDate&&_.onSelectDate.call&&_.onSelectDate.call(M,W.currentTime,M.data("input")),M.data("changed",!0),M.trigger("xchange.xdsoft"),M.trigger("changedatetime.xdsoft"),void setTimeout(function(){J=0},200))}),H.on("click.xdsoft","div",function(t){t.stopPropagation();var n=e(this),a=W.currentTime;return!n.hasClass("xdsoft_disabled")&&(a.setHours(n.data("hour")),a.setMinutes(n.data("minute")),M.trigger("select.xdsoft",[a]),M.data("input").val(W.str()),!_.inline&&M.trigger("close.xdsoft"),_.onSelectTime&&_.onSelectTime.call&&_.onSelectTime.call(M,W.currentTime,M.data("input")),M.data("changed",!0),M.trigger("xchange.xdsoft"),void M.trigger("changedatetime.xdsoft"))}),M.mousewheel&&S.mousewheel(function(e,t,n,a){return!_.scrollMonth||(t<0?W.nextMonth():W.prevMonth(),!1)}),M.mousewheel&&C.unmousewheel().mousewheel(function(e,t,n,a){if(!_.scrollTime)return!0;var r=C[0].clientHeight,o=H[0].offsetHeight,s=Math.abs(parseInt(H.css("marginTop"))),i=!0;return t<0&&o-r-_.timeHeightInTimePicker>=s?(H.css("marginTop","-"+(s+_.timeHeightInTimePicker)+"px"),i=!1):t>0&&s-_.timeHeightInTimePicker>=0&&(H.css("marginTop","-"+(s-_.timeHeightInTimePicker)+"px"),i=!1),C.trigger("scroll_element.xdsoft_scroller",[Math.abs(parseInt(H.css("marginTop"))/(o-r))]),e.stopPropagation(),i}),M.on("changedatetime.xdsoft",function(){if(_.onChangeDateTime&&_.onChangeDateTime.call){var e=M.data("input");_.onChangeDateTime.call(M,W.currentTime,e),e.trigger("change")}}).on("generate.xdsoft",function(){_.onGenerate&&_.onGenerate.call&&_.onGenerate.call(M,W.currentTime,M.data("input"))});var j=0;t.mousewheel&&t.mousewheel(function(e,n,a,r){return!_.scrollInput||(!_.datepicker&&_.timepicker?(j=H.find(".xdsoft_current").length?H.find(".xdsoft_current").eq(0).index():0,j+n>=0&&j+n<H.children().length&&(j+=n),H.children().eq(j).length&&H.children().eq(j).trigger("mousedown"),!1):_.datepicker&&!_.timepicker?(S.trigger(e,[n,a,r]),t.val&&t.val(W.str()),M.trigger("changedatetime.xdsoft"),!1):void 0)});var L=function(){var t=M.data("input").offset(),n=t.top+M.data("input")[0].offsetHeight-1,a=t.left;n+M[0].offsetHeight>e(window).height()+e(window).scrollTop()&&(n=t.top-M[0].offsetHeight+1),n<0&&(n=0),a+M[0].offsetWidth>e(window).width()&&(a=t.left-M[0].offsetWidth+M.data("input")[0].offsetWidth),M.css({left:a,top:n})};M.on("open.xdsoft",function(){var t=!0;_.onShow&&_.onShow.call&&(t=_.onShow.call(M,W.currentTime,M.data("input"))),t!==!1&&(M.show(),M.trigger("afterOpen.xdsoft"),L(),e(window).off("resize.xdsoft",L).on("resize.xdsoft",L),_.closeOnWithoutClick&&e([document.body,window]).on("mousedown.xdsoft",function n(){M.trigger("close.xdsoft"),e([document.body,window]).off("mousedown.xdsoft",n)}))}).on("close.xdsoft",function(e){var t=!0;_.onClose&&_.onClose.call&&(t=_.onClose.call(M,W.currentTime,M.data("input"))),t===!1||_.opened||_.inline||M.hide(),e.stopPropagation()}).data("input",t);var E=0;M.data("xdsoft_datetime",W),M.setOptions(_),W.setCurrentTime(n()),M.trigger("afterOpen.xdsoft"),t.data("xdsoft_datetimepicker",M).on("open.xdsoft focusin.xdsoft mousedown.xdsoft",function(e){t.is(":disabled")||t.is(":hidden")||!t.is(":visible")||(clearTimeout(E),E=setTimeout(function(){t.is(":disabled")||t.is(":hidden")||!t.is(":visible")||(W.setCurrentTime(n()),M.trigger("open.xdsoft"))},100))}).on("keydown.xdsoft",function(t){var n=(this.value,t.which);switch(!0){case!!~[u].indexOf(n):var a=e("input:visible,textarea:visible");return M.trigger("close.xdsoft"),a.eq(a.index(this)+1).focus(),!1;case!!~[p].indexOf(n):return M.trigger("close.xdsoft"),!0}})},O=function(t){var n=t.data("xdsoft_datetimepicker");n&&(n.data("xdsoft_datetime",null),n.remove(),t.data("xdsoft_datetimepicker",null).off("open.xdsoft focusin.xdsoft focusout.xdsoft mousedown.xdsoft blur.xdsoft keydown.xdsoft"),e(window).off("resize.xdsoft"),e([window,document.body]).off("mousedown.xdsoft"),t.unmousewheel&&t.unmousewheel())};return e(document).off("keydown.xdsoftctrl keyup.xdsoftctrl").on("keydown.xdsoftctrl",function(e){e.keyCode==i&&(b=!0)}).on("keyup.xdsoftctrl",function(e){e.keyCode==i&&(b=!1)}),this.each(function(){var t;if(t=e(this).data("xdsoft_datetimepicker")){if("string"===e.type(n))switch(n){case"show":e(this).select().focus(),t.trigger("open.xdsoft");break;case"hide":t.trigger("close.xdsoft");break;case"destroy":O(e(this));break;case"reset":this.value=this.defaultValue,this.value&&t.data("xdsoft_datetime").isValidDate(Date.parseDate(this.value,_.format))||t.data("changed",!1),t.data("xdsoft_datetime").setCurrentTime(this.value)}else t.setOptions(n);return 0}"string"!==e.type(n)&&(!_.lazyInit||_.open||_.inline?S(e(this)):k(e(this)))})}}(jQuery),Date.parseFunctions={count:0},Date.parseRegexes=[],Date.formatFunctions={count:0},Date.prototype.dateFormat=function(e){if("unixtime"==e)return parseInt(this.getTime()/1e3);null==Date.formatFunctions[e]&&Date.createNewFormat(e);var t=Date.formatFunctions[e];return this[t]()},Date.createNewFormat=function(format){var funcName="format"+Date.formatFunctions.count++;Date.formatFunctions[format]=funcName;for(var code="Date.prototype."+funcName+" = function() {return ",special=!1,ch="",i=0;i<format.length;++i)ch=format.charAt(i),special||"\\"!=ch?special?(special=!1,code+="'"+String.escape(ch)+"' + "):code+=Date.getFormatCode(ch):special=!0;eval(code.substring(0,code.length-3)+";}")},Date.getFormatCode=function(e){switch(e){case"d":return"String.leftPad(this.getDate(), 2, '0') + ";case"D":return"Date.dayNames[this.getDay()].substring(0, 3) + ";case"j":return"this.getDate() + ";case"l":return"Date.dayNames[this.getDay()] + ";case"S":return"this.getSuffix() + ";case"w":return"this.getDay() + ";case"z":return"this.getDayOfYear() + ";case"W":return"this.getWeekOfYear() + ";case"F":return"Date.monthNames[this.getMonth()] + ";case"m":return"String.leftPad(this.getMonth() + 1, 2, '0') + ";case"M":return"Date.monthNames[this.getMonth()].substring(0, 3) + ";case"n":return"(this.getMonth() + 1) + ";case"t":return"this.getDaysInMonth() + ";case"L":return"(this.isLeapYear() ? 1 : 0) + ";case"Y":return"this.getFullYear() + ";case"y":return"('' + this.getFullYear()).substring(2, 4) + ";case"a":return"(this.getHours() < 12 ? 'am' : 'pm') + ";case"A":return"(this.getHours() < 12 ? 'AM' : 'PM') + ";case"g":return"((this.getHours() %12) ? this.getHours() % 12 : 12) + ";case"G":return"this.getHours() + ";case"h":return"String.leftPad((this.getHours() %12) ? this.getHours() % 12 : 12, 2, '0') + ";case"H":return"String.leftPad(this.getHours(), 2, '0') + ";case"i":return"String.leftPad(this.getMinutes(), 2, '0') + ";case"s":return"String.leftPad(this.getSeconds(), 2, '0') + ";case"O":return"this.getGMTOffset() + ";case"T":return"this.getTimezone() + ";case"Z":return"(this.getTimezoneOffset() * -60) + ";default:return"'"+String.escape(e)+"' + "}},Date.parseDate=function(e,t){if("unixtime"==t)return new Date(isNaN(parseInt(e))?0:1e3*parseInt(e));null==Date.parseFunctions[t]&&Date.createParser(t);var n=Date.parseFunctions[t];return Date[n](e)},Date.createParser=function(format){var funcName="parse"+Date.parseFunctions.count++,regexNum=Date.parseRegexes.length,currentGroup=1;Date.parseFunctions[format]=funcName;for(var code="Date."+funcName+" = function(input) {\nvar y = -1, m = -1, d = -1, h = -1, i = -1, s = -1, z = -1;\nvar d = new Date();\ny = d.getFullYear();\nm = d.getMonth();\nd = d.getDate();\nvar results = input.match(Date.parseRegexes["+regexNum+"]);\nif (results && results.length > 0) {",regex="",special=!1,ch="",i=0;i<format.length;++i)ch=format.charAt(i),special||"\\"!=ch?special?(special=!1,regex+=String.escape(ch)):(obj=Date.formatCodeToRegex(ch,currentGroup),currentGroup+=obj.g,regex+=obj.s,obj.g&&obj.c&&(code+=obj.c)):special=!0;code+="if (y > 0 && z > 0){\nvar doyDate = new Date(y,0);\ndoyDate.setDate(z);\nm = doyDate.getMonth();\nd = doyDate.getDate();\n}",code+="if (y > 0 && m >= 0 && d > 0 && h >= 0 && i >= 0 && s >= 0)\n{return new Date(y, m, d, h, i, s);}\nelse if (y > 0 && m >= 0 && d > 0 && h >= 0 && i >= 0)\n{return new Date(y, m, d, h, i);}\nelse if (y > 0 && m >= 0 && d > 0 && h >= 0)\n{return new Date(y, m, d, h);}\nelse if (y > 0 && m >= 0 && d > 0)\n{return new Date(y, m, d);}\nelse if (y > 0 && m >= 0)\n{return new Date(y, m);}\nelse if (y > 0)\n{return new Date(y);}\n}return null;}",Date.parseRegexes[regexNum]=new RegExp("^"+regex+"$"),eval(code)},Date.formatCodeToRegex=function(e,t){switch(e){case"D":return{g:0,c:null,s:"(?:Sun|Mon|Tue|Wed|Thu|Fri|Sat)"};case"j":case"d":return{g:1,c:"d = parseInt(results["+t+"], 10);\n",s:"(\\d{1,2})"};case"l":return{g:0,c:null,s:"(?:"+Date.dayNames.join("|")+")"};case"S":return{g:0,c:null,s:"(?:st|nd|rd|th)"};case"w":return{g:0,c:null,s:"\\d"};case"z":return{g:1,c:"z = parseInt(results["+t+"], 10);\n",s:"(\\d{1,3})"};case"W":return{g:0,c:null,s:"(?:\\d{2})"};case"F":return{g:1,c:"m = parseInt(Date.monthNumbers[results["+t+"].substring(0, 3)], 10);\n",s:"("+Date.monthNames.join("|")+")"};case"M":return{g:1,c:"m = parseInt(Date.monthNumbers[results["+t+"]], 10);\n",s:"(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)"};case"n":case"m":return{g:1,c:"m = parseInt(results["+t+"], 10) - 1;\n",s:"(\\d{1,2})"};case"t":return{g:0,c:null,s:"\\d{1,2}"};case"L":return{g:0,c:null,s:"(?:1|0)"};case"Y":return{g:1,c:"y = parseInt(results["+t+"], 10);\n",s:"(\\d{4})"};case"y":return{g:1,c:"var ty = parseInt(results["+t+"], 10);\ny = ty > Date.y2kYear ? 1900 + ty : 2000 + ty;\n",s:"(\\d{1,2})"};case"a":return{g:1,c:"if (results["+t+"] == 'am') {\nif (h == 12) { h = 0; }\n} else { if (h < 12) { h += 12; }}",s:"(am|pm)"};case"A":return{g:1,c:"if (results["+t+"] == 'AM') {\nif (h == 12) { h = 0; }\n} else { if (h < 12) { h += 12; }}",s:"(AM|PM)"};case"g":case"G":case"h":case"H":return{g:1,c:"h = parseInt(results["+t+"], 10);\n",s:"(\\d{1,2})"};case"i":return{g:1,c:"i = parseInt(results["+t+"], 10);\n",s:"(\\d{2})"};case"s":return{g:1,c:"s = parseInt(results["+t+"], 10);\n",s:"(\\d{2})"};case"O":return{g:0,c:null,s:"[+-]\\d{4}"};case"T":return{g:0,c:null,s:"[A-Z]{3}"};case"Z":return{g:0,c:null,s:"[+-]\\d{1,5}"};default:return{g:0,c:null,s:String.escape(e)}}},Date.prototype.getTimezone=function(){return this.toString().replace(/^.*? ([A-Z]{3}) [0-9]{4}.*$/,"$1").replace(/^.*?\(([A-Z])[a-z]+ ([A-Z])[a-z]+ ([A-Z])[a-z]+\)$/,"$1$2$3")},Date.prototype.getGMTOffset=function(){return(this.getTimezoneOffset()>0?"-":"+")+String.leftPad(Math.floor(Math.abs(this.getTimezoneOffset())/60),2,"0")+String.leftPad(Math.abs(this.getTimezoneOffset())%60,2,"0")},Date.prototype.getDayOfYear=function(){var e=0;Date.daysInMonth[1]=this.isLeapYear()?29:28;for(var t=0;t<this.getMonth();++t)e+=Date.daysInMonth[t];return e+this.getDate()},Date.prototype.getWeekOfYear=function(){var e=this.getDayOfYear()+(4-this.getDay()),t=new Date(this.getFullYear(),0,1),n=7-t.getDay()+4;return String.leftPad(Math.ceil((e-n)/7)+1,2,"0")},Date.prototype.isLeapYear=function(){var e=this.getFullYear();return 0==(3&e)&&(e%100||e%400==0&&e)},Date.prototype.getFirstDayOfMonth=function(){var e=(this.getDay()-(this.getDate()-1))%7;return e<0?e+7:e},Date.prototype.getLastDayOfMonth=function(){var e=(this.getDay()+(Date.daysInMonth[this.getMonth()]-this.getDate()))%7;return e<0?e+7:e},Date.prototype.getDaysInMonth=function(){return Date.daysInMonth[1]=this.isLeapYear()?29:28,Date.daysInMonth[this.getMonth()]},Date.prototype.getSuffix=function(){switch(this.getDate()){case 1:case 21:case 31:return"st";case 2:case 22:return"nd";case 3:case 23:return"rd";default:return"th"}},String.escape=function(e){return e.replace(/('|\\)/g,"\\$1")},String.leftPad=function(e,t,n){var a=new String(e);for(null==n&&(n=" ");a.length<t;)a=n+a;return a},Date.daysInMonth=[31,28,31,30,31,30,31,31,30,31,30,31],Date.monthNames=["January","February","March","April","May","June","July","August","September","October","November","December"],Date.dayNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Date.y2kYear=50,Date.monthNumbers={Jan:0,Feb:1,Mar:2,
Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11},Date.patterns={ISO8601LongPattern:"Y-m-d H:i:s",ISO8601ShortPattern:"Y-m-d",ShortDatePattern:"n/j/Y",LongDatePattern:"l, F d, Y",FullDateTimePattern:"l, F d, Y g:i:s A",MonthDayPattern:"F d",ShortTimePattern:"g:i A",LongTimePattern:"g:i:s A",SortableDateTimePattern:"Y-m-d\\TH:i:s",UniversalSortableDateTimePattern:"Y-m-d H:i:sO",YearMonthPattern:"F, Y"},function(e){"function"==typeof define&&define.amd?define(["jquery.flot.min"],e):"object"==typeof exports?module.exports=e:e(jQuery)}(function(e){function t(t){var r,o=t||window.event,s=[].slice.call(arguments,1),i=0,d=0,u=0,c=0,l=0;return t=e.event.fix(o),t.type="mousewheel",o.wheelDelta&&(i=o.wheelDelta),o.detail&&(i=o.detail*-1),o.deltaY&&(u=o.deltaY*-1,i=u),o.deltaX&&(d=o.deltaX,i=d*-1),void 0!==o.wheelDeltaY&&(u=o.wheelDeltaY),void 0!==o.wheelDeltaX&&(d=o.wheelDeltaX*-1),c=Math.abs(i),(!n||c<n)&&(n=c),l=Math.max(Math.abs(u),Math.abs(d)),(!a||l<a)&&(a=l),r=i>0?"floor":"ceil",i=Math[r](i/n),d=Math[r](d/a),u=Math[r](u/a),s.unshift(t,i,d,u),(e.event.dispatch||e.event.handle).apply(this,s)}var n,a,r=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],o="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"];if(e.event.fixHooks)for(var s=r.length;s;)e.event.fixHooks[r[--s]]=e.event.mouseHooks;e.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var e=o.length;e;)this.addEventListener(o[--e],t,!1);else this.onmousewheel=t},teardown:function(){if(this.removeEventListener)for(var e=o.length;e;)this.removeEventListener(o[--e],t,!1);else this.onmousewheel=null}},e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})});
function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}var _slice=Array.prototype.slice,_slicedToArray=function(){function e(e,t){var i=[],n=!0,r=!1,s=void 0;try{for(var a,o=e[Symbol.iterator]();!(n=(a=o.next()).done)&&(i.push(a.value),!t||i.length!==t);n=!0);}catch(l){r=!0,s=l}finally{try{!n&&o["return"]&&o["return"]()}finally{if(r)throw s}}return i}return function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e};!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],t):e.parsley=t(e.jQuery)}(this,function(e){"use strict";function t(e,t){return e.parsleyAdaptedCallback||(e.parsleyAdaptedCallback=function(){var i=Array.prototype.slice.call(arguments,0);i.unshift(this),e.apply(t||T,i)}),e.parsleyAdaptedCallback}function i(e){return 0===e.lastIndexOf(D,0)?e.substr(D.length):e}function n(){var t=this,i=window||global;_extends(this,{isNativeEvent:function(e){return e.originalEvent&&e.originalEvent.isTrusted!==!1},fakeInputEvent:function(i){t.isNativeEvent(i)&&e(i.target).trigger("input")},misbehaves:function(i){t.isNativeEvent(i)&&(t.behavesOk(i),e(document).on("change.inputevent",i.data.selector,t.fakeInputEvent),t.fakeInputEvent(i))},behavesOk:function(i){t.isNativeEvent(i)&&e(document).off("input.inputevent",i.data.selector,t.behavesOk).off("change.inputevent",i.data.selector,t.misbehaves)},install:function(){if(!i.inputEventPatched){i.inputEventPatched="0.0.3";for(var n=["select",'input[type="checkbox"]','input[type="radio"]','input[type="file"]'],r=0;r<n.length;r++){var s=n[r];e(document).on("input.inputevent",s,{selector:s},t.behavesOk).on("change.inputevent",s,{selector:s},t.misbehaves)}}},uninstall:function(){delete i.inputEventPatched,e(document).off(".inputevent")}})}var r=1,s={},a={attr:function(e,t,i){var n,r,s,a=new RegExp("^"+t,"i");if("undefined"==typeof i)i={};else for(n in i)i.hasOwnProperty(n)&&delete i[n];if(!e)return i;for(s=e.attributes,n=s.length;n--;)r=s[n],r&&r.specified&&a.test(r.name)&&(i[this.camelize(r.name.slice(t.length))]=this.deserializeValue(r.value));return i},checkAttr:function(e,t,i){return e.hasAttribute(t+i)},setAttr:function(e,t,i,n){e.setAttribute(this.dasherize(t+i),String(n))},generateID:function(){return""+r++},deserializeValue:function(t){var i;try{return t?"true"==t||"false"!=t&&("null"==t?null:isNaN(i=Number(t))?/^[\[\{]/.test(t)?e.parseJSON(t):t:i):t}catch(n){return t}},camelize:function(e){return e.replace(/-+(.)?/g,function(e,t){return t?t.toUpperCase():""})},dasherize:function(e){return e.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()},warn:function(){var e;window.console&&"function"==typeof window.console.warn&&(e=window.console).warn.apply(e,arguments)},warnOnce:function(e){s[e]||(s[e]=!0,this.warn.apply(this,arguments))},_resetWarnings:function(){s={}},trimString:function(e){return e.replace(/^\s+|\s+$/g,"")},parse:{date:function S(e){var t=e.match(/^(\d{4,})-(\d\d)-(\d\d)$/);if(!t)return null;var i=t.map(function(e){return parseInt(e,10)}),n=_slicedToArray(i,4),r=(n[0],n[1]),s=n[2],a=n[3],S=new Date(r,s-1,a);return S.getFullYear()!==r||S.getMonth()+1!==s||S.getDate()!==a?null:S},string:function(e){return e},integer:function(e){return isNaN(e)?null:parseInt(e,10)},number:function(e){if(isNaN(e))throw null;return parseFloat(e)},"boolean":function(e){return!/^\s*false\s*$/i.test(e)},object:function(e){return a.deserializeValue(e)},regexp:function(e){var t="";return/^\/.*\/(?:[gimy]*)$/.test(e)?(t=e.replace(/.*\/([gimy]*)$/,"$1"),e=e.replace(new RegExp("^/(.*?)/"+t+"$"),"$1")):e="^"+e+"$",new RegExp(e,t)}},parseRequirement:function(e,t){var i=this.parse[e||"string"];if(!i)throw'Unknown requirement specification: "'+e+'"';var n=i(t);if(null===n)throw"Requirement is not a "+e+': "'+t+'"';return n},namespaceEvents:function(t,i){return t=this.trimString(t||"").split(/\s+/),t[0]?e.map(t,function(e){return e+"."+i}).join(" "):""},difference:function(t,i){var n=[];return e.each(t,function(e,t){i.indexOf(t)==-1&&n.push(t)}),n},all:function(t){return e.when.apply(e,_toConsumableArray(t).concat([42,42]))},objectCreate:Object.create||function(){var e=function(){};return function(t){if(arguments.length>1)throw Error("Second argument not supported");if("object"!=typeof t)throw TypeError("Argument must be an object");e.prototype=t;var i=new e;return e.prototype=null,i}}(),_SubmitSelector:'input[type="submit"], button:submit'},o={namespace:"data-parsley-",inputs:"input, textarea, select",excluded:"input[type=button], input[type=submit], input[type=reset], input[type=hidden]",priorityEnabled:!0,multiple:null,group:null,uiEnabled:!0,validationThreshold:3,focus:"first",trigger:!1,triggerAfterFailure:"input",errorClass:"parsley-error",successClass:"parsley-success",classHandler:function(e){},errorsContainer:function(e){},errorsWrapper:'<ul class="parsley-errors-list"></ul>',errorTemplate:"<li></li>"},l=function(){this.__id__=a.generateID()};l.prototype={asyncSupport:!0,_pipeAccordingToValidationResult:function(){var t=this,i=function(){var i=e.Deferred();return!0!==t.validationResult&&i.reject(),i.resolve().promise()};return[i,i]},actualizeOptions:function(){return a.attr(this.element,this.options.namespace,this.domOptions),this.parent&&this.parent.actualizeOptions&&this.parent.actualizeOptions(),this},_resetOptions:function(e){this.domOptions=a.objectCreate(this.parent.options),this.options=a.objectCreate(this.domOptions);for(var t in e)e.hasOwnProperty(t)&&(this.options[t]=e[t]);this.actualizeOptions()},_listeners:null,on:function(e,t){this._listeners=this._listeners||{};var i=this._listeners[e]=this._listeners[e]||[];return i.push(t),this},subscribe:function(t,i){e.listenTo(this,t.toLowerCase(),i)},off:function(e,t){var i=this._listeners&&this._listeners[e];if(i)if(t)for(var n=i.length;n--;)i[n]===t&&i.splice(n,1);else delete this._listeners[e];return this},unsubscribe:function(t,i){e.unsubscribeTo(this,t.toLowerCase())},trigger:function(e,t,i){t=t||this;var n,r=this._listeners&&this._listeners[e];if(r)for(var s=r.length;s--;)if(n=r[s].call(t,t,i),n===!1)return n;return!this.parent||this.parent.trigger(e,t,i)},asyncIsValid:function(e,t){return a.warnOnce("asyncIsValid is deprecated; please use whenValid instead"),this.whenValid({group:e,force:t})},_findRelated:function(){return this.options.multiple?e(this.parent.element.querySelectorAll("["+this.options.namespace+'multiple="'+this.options.multiple+'"]')):this.$element}};var u=function(e,t){var i=e.match(/^\s*\[(.*)\]\s*$/);if(!i)throw'Requirement is not an array: "'+e+'"';var n=i[1].split(",").map(a.trimString);if(n.length!==t)throw"Requirement has "+n.length+" values when "+t+" are needed";return n},d=function(e,t,i){var n=null,r={};for(var s in e)if(s){var o=i(s);"string"==typeof o&&(o=a.parseRequirement(e[s],o)),r[s]=o}else n=a.parseRequirement(e[s],t);return[n,r]},h=function(t){e.extend(!0,this,t)};h.prototype={validate:function(e,t){if(this.fn)return arguments.length>3&&(t=[].slice.call(arguments,1,-1)),this.fn(e,t);if(Array.isArray(e)){if(!this.validateMultiple)throw"Validator `"+this.name+"` does not handle multiple values";return this.validateMultiple.apply(this,arguments)}var i=arguments[arguments.length-1];if(this.validateDate&&i._isDateInput())return arguments[0]=a.parse.date(arguments[0]),null!==arguments[0]&&this.validateDate.apply(this,arguments);if(this.validateNumber)return!isNaN(e)&&(arguments[0]=parseFloat(arguments[0]),this.validateNumber.apply(this,arguments));if(this.validateString)return this.validateString.apply(this,arguments);throw"Validator `"+this.name+"` only handles multiple values"},parseRequirements:function(t,i){if("string"!=typeof t)return Array.isArray(t)?t:[t];var n=this.requirementType;if(Array.isArray(n)){for(var r=u(t,n.length),s=0;s<r.length;s++)r[s]=a.parseRequirement(n[s],r[s]);return r}return e.isPlainObject(n)?d(n,t,i):[a.parseRequirement(n,t)]},requirementType:"string",priority:2};var p=function(e,t){this.__class__="ValidatorRegistry",this.locale="en",this.init(e||{},t||{})},c={email:/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,number:/^-?(\d*\.)?\d+(e[-+]?\d+)?$/i,integer:/^-?\d+$/,digits:/^\d+$/,alphanum:/^\w+$/i,date:{test:function(e){return null!==a.parse.date(e)}},url:new RegExp("^(?:(?:https?|ftp)://)?(?:\\S+(?::\\S*)?@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:/\\S*)?$","i")};c.range=c.number;var f=function(e){var t=(""+e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return t?Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0)):0},m=function(e,t){return t.map(a.parse[e])},g=function(e,t){return function(i){for(var n=arguments.length,r=Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];return r.pop(),t.apply(void 0,[i].concat(_toConsumableArray(m(e,r))))}},v=function(e){return{validateDate:g("date",e),validateNumber:g("number",e),requirementType:e.length<=2?"string":["string","string"],priority:30}};p.prototype={init:function(e,t){this.catalog=t,this.validators=_extends({},this.validators);for(var i in e)this.addValidator(i,e[i].fn,e[i].priority);window.Parsley.trigger("parsley:validator:init")},setLocale:function(e){if("undefined"==typeof this.catalog[e])throw new Error(e+" is not available in the catalog");return this.locale=e,this},addCatalog:function(e,t,i){return"object"==typeof t&&(this.catalog[e]=t),!0===i?this.setLocale(e):this},addMessage:function(e,t,i){return"undefined"==typeof this.catalog[e]&&(this.catalog[e]={}),this.catalog[e][t]=i,this},addMessages:function(e,t){for(var i in t)this.addMessage(e,i,t[i]);return this},addValidator:function(e,t,i){if(this.validators[e])a.warn('Validator "'+e+'" is already defined.');else if(o.hasOwnProperty(e))return void a.warn('"'+e+'" is a restricted keyword and is not a valid validator name.');return this._setValidator.apply(this,arguments)},updateValidator:function(e,t,i){return this.validators[e]?this._setValidator.apply(this,arguments):(a.warn('Validator "'+e+'" is not already defined.'),this.addValidator.apply(this,arguments))},removeValidator:function(e){return this.validators[e]||a.warn('Validator "'+e+'" is not defined.'),delete this.validators[e],this},_setValidator:function(e,t,i){"object"!=typeof t&&(t={fn:t,priority:i}),t.validate||(t=new h(t)),this.validators[e]=t;for(var n in t.messages||{})this.addMessage(n,e,t.messages[n]);return this},getErrorMessage:function(e){var t;if("type"===e.name){var i=this.catalog[this.locale][e.name]||{};t=i[e.requirements]}else t=this.formatMessage(this.catalog[this.locale][e.name],e.requirements);return t||this.catalog[this.locale].defaultMessage||this.catalog.en.defaultMessage},formatMessage:function(e,t){if("object"==typeof t){for(var i in t)e=this.formatMessage(e,t[i]);return e}return"string"==typeof e?e.replace(/%s/i,t):""},validators:{notblank:{validateString:function(e){return/\S/.test(e)},priority:2},required:{validateMultiple:function(e){return e.length>0},validateString:function(e){return/\S/.test(e)},priority:512},type:{validateString:function(e,t){var i=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],n=i.step,r=void 0===n?"any":n,s=i.base,a=void 0===s?0:s,o=c[t];if(!o)throw new Error("validator type `"+t+"` is not supported");if(!o.test(e))return!1;if("number"===t&&!/^any$/i.test(r||"")){var l=Number(e),u=Math.max(f(r),f(a));if(f(l)>u)return!1;var d=function(e){return Math.round(e*Math.pow(10,u))};if((d(l)-d(a))%d(r)!=0)return!1}return!0},requirementType:{"":"string",step:"string",base:"number"},priority:256},pattern:{validateString:function(e,t){return t.test(e)},requirementType:"regexp",priority:64},minlength:{validateString:function(e,t){return e.length>=t},requirementType:"integer",priority:30},maxlength:{validateString:function(e,t){return e.length<=t},requirementType:"integer",priority:30},length:{validateString:function(e,t,i){return e.length>=t&&e.length<=i},requirementType:["integer","integer"],priority:30},mincheck:{validateMultiple:function(e,t){return e.length>=t},requirementType:"integer",priority:30},maxcheck:{validateMultiple:function(e,t){return e.length<=t},requirementType:"integer",priority:30},check:{validateMultiple:function(e,t,i){return e.length>=t&&e.length<=i},requirementType:["integer","integer"],priority:30},min:v(function(e,t){return e>=t}),max:v(function(e,t){return e<=t}),range:v(function(e,t,i){return e>=t&&e<=i}),equalto:{validateString:function(t,i){var n=e(i);return n.length?t===n.val():t===i},priority:256}}};var y={},_=function k(e,t,i){for(var n=[],r=[],s=0;s<e.length;s++){for(var a=!1,o=0;o<t.length;o++)if(e[s].assert.name===t[o].assert.name){a=!0;break}a?r.push(e[s]):n.push(e[s])}return{kept:r,added:n,removed:i?[]:k(t,e,!0).added}};y.Form={_actualizeTriggers:function(){var e=this;this.$element.on("submit.Parsley",function(t){e.onSubmitValidate(t)}),this.$element.on("click.Parsley",a._SubmitSelector,function(t){e.onSubmitButton(t)}),!1!==this.options.uiEnabled&&this.element.setAttribute("novalidate","")},focus:function(){if(this._focusedField=null,!0===this.validationResult||"none"===this.options.focus)return null;for(var e=0;e<this.fields.length;e++){var t=this.fields[e];if(!0!==t.validationResult&&t.validationResult.length>0&&"undefined"==typeof t.options.noFocus&&(this._focusedField=t.$element,"first"===this.options.focus))break}return null===this._focusedField?null:this._focusedField.focus()},_destroyUI:function(){this.$element.off(".Parsley")}},y.Field={_reflowUI:function(){if(this._buildUI(),this._ui){var e=_(this.validationResult,this._ui.lastValidationResult);this._ui.lastValidationResult=this.validationResult,this._manageStatusClass(),this._manageErrorsMessages(e),this._actualizeTriggers(),!e.kept.length&&!e.added.length||this._failedOnce||(this._failedOnce=!0,this._actualizeTriggers())}},getErrorsMessages:function(){if(!0===this.validationResult)return[];for(var e=[],t=0;t<this.validationResult.length;t++)e.push(this.validationResult[t].errorMessage||this._getErrorMessage(this.validationResult[t].assert));return e},addError:function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=t.message,n=t.assert,r=t.updateClass,s=void 0===r||r;this._buildUI(),this._addError(e,{message:i,assert:n}),s&&this._errorClass()},updateError:function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=t.message,n=t.assert,r=t.updateClass,s=void 0===r||r;this._buildUI(),this._updateError(e,{message:i,assert:n}),s&&this._errorClass()},removeError:function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=t.updateClass,n=void 0===i||i;this._buildUI(),this._removeError(e),n&&this._manageStatusClass()},_manageStatusClass:function(){this.hasConstraints()&&this.needsValidation()&&!0===this.validationResult?this._successClass():this.validationResult.length>0?this._errorClass():this._resetClass()},_manageErrorsMessages:function(t){if("undefined"==typeof this.options.errorsMessagesDisabled){if("undefined"!=typeof this.options.errorMessage)return t.added.length||t.kept.length?(this._insertErrorWrapper(),0===this._ui.$errorsWrapper.find(".parsley-custom-error-message").length&&this._ui.$errorsWrapper.append(e(this.options.errorTemplate).addClass("parsley-custom-error-message")),this._ui.$errorsWrapper.addClass("filled").find(".parsley-custom-error-message").html(this.options.errorMessage)):this._ui.$errorsWrapper.removeClass("filled").find(".parsley-custom-error-message").remove();for(var i=0;i<t.removed.length;i++)this._removeError(t.removed[i].assert.name);for(i=0;i<t.added.length;i++)this._addError(t.added[i].assert.name,{message:t.added[i].errorMessage,assert:t.added[i].assert});for(i=0;i<t.kept.length;i++)this._updateError(t.kept[i].assert.name,{message:t.kept[i].errorMessage,assert:t.kept[i].assert})}},_addError:function(t,i){var n=i.message,r=i.assert;this._insertErrorWrapper(),this._ui.$errorsWrapper.addClass("filled").append(e(this.options.errorTemplate).addClass("parsley-"+t).html(n||this._getErrorMessage(r)))},_updateError:function(e,t){var i=t.message,n=t.assert;this._ui.$errorsWrapper.addClass("filled").find(".parsley-"+e).html(i||this._getErrorMessage(n))},_removeError:function(e){this._ui.$errorsWrapper.removeClass("filled").find(".parsley-"+e).remove()},_getErrorMessage:function(e){var t=e.name+"Message";return"undefined"!=typeof this.options[t]?window.Parsley.formatMessage(this.options[t],e.requirements):window.Parsley.getErrorMessage(e)},_buildUI:function(){if(!this._ui&&!1!==this.options.uiEnabled){var t={};this.element.setAttribute(this.options.namespace+"id",this.__id__),t.$errorClassHandler=this._manageClassHandler(),t.errorsWrapperId="parsley-id-"+(this.options.multiple?"multiple-"+this.options.multiple:this.__id__),t.$errorsWrapper=e(this.options.errorsWrapper).attr("id",t.errorsWrapperId),t.lastValidationResult=[],t.validationInformationVisible=!1,this._ui=t}},_manageClassHandler:function(){if("string"==typeof this.options.classHandler)return 0===e(this.options.classHandler).length&&ParsleyUtils.warn("No elements found that match the selector `"+this.options.classHandler+"` set in options.classHandler or data-parsley-class-handler"),e(this.options.classHandler);if("function"==typeof this.options.classHandler)var t=this.options.classHandler.call(this,this);return"undefined"!=typeof t&&t.length?t:this._inputHolder()},_inputHolder:function(){return this.options.multiple&&"SELECT"!==this.element.nodeName?this.$element.parent():this.$element},_insertErrorWrapper:function(){var t;if(0!==this._ui.$errorsWrapper.parent().length)return this._ui.$errorsWrapper.parent();if("string"==typeof this.options.errorsContainer){if(e(this.options.errorsContainer).length)return e(this.options.errorsContainer).append(this._ui.$errorsWrapper);a.warn("The errors container `"+this.options.errorsContainer+"` does not exist in DOM")}else"function"==typeof this.options.errorsContainer&&(t=this.options.errorsContainer.call(this,this));return"undefined"!=typeof t&&t.length?t.append(this._ui.$errorsWrapper):this._inputHolder().after(this._ui.$errorsWrapper)},_actualizeTriggers:function(){var e,t=this,i=this._findRelated();i.off(".Parsley"),this._failedOnce?i.on(a.namespaceEvents(this.options.triggerAfterFailure,"Parsley"),function(){t._validateIfNeeded()}):(e=a.namespaceEvents(this.options.trigger,"Parsley"))&&i.on(e,function(e){t._validateIfNeeded(e)})},_validateIfNeeded:function(e){var t=this;e&&/key|input/.test(e.type)&&(!this._ui||!this._ui.validationInformationVisible)&&this.getValue().length<=this.options.validationThreshold||(this.options.debounce?(window.clearTimeout(this._debounced),this._debounced=window.setTimeout(function(){return t.validate()},this.options.debounce)):this.validate())},_resetUI:function(){this._failedOnce=!1,this._actualizeTriggers(),"undefined"!=typeof this._ui&&(this._ui.$errorsWrapper.removeClass("filled").children().remove(),this._resetClass(),this._ui.lastValidationResult=[],this._ui.validationInformationVisible=!1)},_destroyUI:function(){this._resetUI(),"undefined"!=typeof this._ui&&this._ui.$errorsWrapper.remove(),delete this._ui},_successClass:function(){this._ui.validationInformationVisible=!0,this._ui.$errorClassHandler.removeClass(this.options.errorClass).addClass(this.options.successClass)},_errorClass:function(){this._ui.validationInformationVisible=!0,this._ui.$errorClassHandler.removeClass(this.options.successClass).addClass(this.options.errorClass)},_resetClass:function(){this._ui.$errorClassHandler.removeClass(this.options.successClass).removeClass(this.options.errorClass)}};var w=function(t,i,n){this.__class__="Form",this.element=t,this.$element=e(t),this.domOptions=i,this.options=n,this.parent=window.Parsley,this.fields=[],this.validationResult=null},b={pending:null,resolved:!0,rejected:!1};w.prototype={onSubmitValidate:function(e){var t=this;if(!0!==e.parsley){var i=this._submitSource||this.$element.find(a._SubmitSelector)[0];if(this._submitSource=null,this.$element.find(".parsley-synthetic-submit-button").prop("disabled",!0),!i||null===i.getAttribute("formnovalidate")){window.Parsley._remoteCache={};var n=this.whenValidate({event:e});"resolved"===n.state()&&!1!==this._trigger("submit")||(e.stopImmediatePropagation(),e.preventDefault(),"pending"===n.state()&&n.done(function(){t._submit(i)}))}}},onSubmitButton:function(e){this._submitSource=e.currentTarget},_submit:function(t){if(!1!==this._trigger("submit")){if(t){var i=this.$element.find(".parsley-synthetic-submit-button").prop("disabled",!1);0===i.length&&(i=e('<input class="parsley-synthetic-submit-button" type="hidden">').appendTo(this.$element)),i.attr({name:t.getAttribute("name"),value:t.getAttribute("value")})}this.$element.trigger(_extends(e.Event("submit"),{parsley:!0}))}},validate:function(t){if(arguments.length>=1&&!e.isPlainObject(t)){a.warnOnce("Calling validate on a parsley form without passing arguments as an object is deprecated.");var i=_slice.call(arguments),n=i[0],r=i[1],s=i[2];t={group:n,force:r,event:s}}return b[this.whenValidate(t).state()]},whenValidate:function(){var t,i=this,n=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],r=n.group,s=n.force,o=n.event;this.submitEvent=o,o&&(this.submitEvent=_extends({},o,{preventDefault:function(){a.warnOnce("Using `this.submitEvent.preventDefault()` is deprecated; instead, call `this.validationResult = false`"),i.validationResult=!1}})),this.validationResult=!0,this._trigger("validate"),this._refreshFields();var l=this._withoutReactualizingFormOptions(function(){return e.map(i.fields,function(e){return e.whenValidate({force:s,group:r})})});return(t=a.all(l).done(function(){i._trigger("success")}).fail(function(){i.validationResult=!1,i.focus(),i._trigger("error")}).always(function(){i._trigger("validated")})).pipe.apply(t,_toConsumableArray(this._pipeAccordingToValidationResult()))},isValid:function(t){if(arguments.length>=1&&!e.isPlainObject(t)){a.warnOnce("Calling isValid on a parsley form without passing arguments as an object is deprecated.");var i=_slice.call(arguments),n=i[0],r=i[1];t={group:n,force:r}}return b[this.whenValid(t).state()]},whenValid:function(){var t=this,i=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=i.group,r=i.force;this._refreshFields();var s=this._withoutReactualizingFormOptions(function(){return e.map(t.fields,function(e){return e.whenValid({group:n,force:r})})});return a.all(s)},reset:function(){for(var e=0;e<this.fields.length;e++)this.fields[e].reset();this._trigger("reset")},destroy:function(){this._destroyUI();for(var e=0;e<this.fields.length;e++)this.fields[e].destroy();this.$element.removeData("Parsley"),this._trigger("destroy")},_refreshFields:function(){return this.actualizeOptions()._bindFields()},_bindFields:function(){var t=this,i=this.fields;return this.fields=[],this.fieldsMappedById={},this._withoutReactualizingFormOptions(function(){t.$element.find(t.options.inputs).not(t.options.excluded).each(function(e,i){var n=new window.Parsley.Factory(i,{},t);if(("Field"===n.__class__||"FieldMultiple"===n.__class__)&&!0!==n.options.excluded){var r=n.__class__+"-"+n.__id__;"undefined"==typeof t.fieldsMappedById[r]&&(t.fieldsMappedById[r]=n,t.fields.push(n))}}),e.each(a.difference(i,t.fields),function(e,t){t.reset()})}),this},_withoutReactualizingFormOptions:function(e){var t=this.actualizeOptions;this.actualizeOptions=function(){return this};var i=e();return this.actualizeOptions=t,i},_trigger:function(e){return this.trigger("form:"+e)}};var F=function(e,t,i,n,r){var s=window.Parsley._validatorRegistry.validators[t],a=new h(s);n=n||e.options[t+"Priority"]||a.priority,r=!0===r,_extends(this,{validator:a,name:t,requirements:i,priority:n,isDomConstraint:r}),this._parseRequirements(e.options)},C=function(e){var t=e[0].toUpperCase();return t+e.slice(1)};F.prototype={validate:function(e,t){var i;return(i=this.validator).validate.apply(i,[e].concat(_toConsumableArray(this.requirementList),[t]))},_parseRequirements:function(e){var t=this;this.requirementList=this.validator.parseRequirements(this.requirements,function(i){return e[t.name+C(i)]})}};var E=function(t,i,n,r){this.__class__="Field",this.element=t,this.$element=e(t),"undefined"!=typeof r&&(this.parent=r),this.options=n,this.domOptions=i,this.constraints=[],this.constraintsByName={},this.validationResult=!0,this._bindConstraints()},A={pending:null,resolved:!0,rejected:!1};E.prototype={validate:function(t){arguments.length>=1&&!e.isPlainObject(t)&&(a.warnOnce("Calling validate on a parsley field without passing arguments as an object is deprecated."),t={options:t});var i=this.whenValidate(t);if(!i)return!0;switch(i.state()){case"pending":return null;case"resolved":return!0;case"rejected":return this.validationResult}},whenValidate:function(){var e,t=this,i=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=i.force,r=i.group;if(this.refreshConstraints(),!r||this._isInGroup(r))return this.value=this.getValue(),this._trigger("validate"),(e=this.whenValid({force:n,value:this.value,_refreshed:!0}).always(function(){t._reflowUI()}).done(function(){t._trigger("success")}).fail(function(){t._trigger("error")}).always(function(){t._trigger("validated")})).pipe.apply(e,_toConsumableArray(this._pipeAccordingToValidationResult()))},hasConstraints:function(){return 0!==this.constraints.length},needsValidation:function(e){return"undefined"==typeof e&&(e=this.getValue()),!(!e.length&&!this._isRequired()&&"undefined"==typeof this.options.validateIfEmpty)},_isInGroup:function(t){return Array.isArray(this.options.group)?-1!==e.inArray(t,this.options.group):this.options.group===t},isValid:function(t){if(arguments.length>=1&&!e.isPlainObject(t)){a.warnOnce("Calling isValid on a parsley field without passing arguments as an object is deprecated.");var i=_slice.call(arguments),n=i[0],r=i[1];t={force:n,value:r}}var s=this.whenValid(t);return!s||A[s.state()]},whenValid:function(){var t=this,i=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=i.force,r=void 0!==n&&n,s=i.value,o=i.group,l=i._refreshed;if(l||this.refreshConstraints(),!o||this._isInGroup(o)){if(this.validationResult=!0,!this.hasConstraints())return e.when();if("undefined"!=typeof s&&null!==s||(s=this.getValue()),!this.needsValidation(s)&&!0!==r)return e.when();var u=this._getGroupedConstraints(),d=[];return e.each(u,function(i,n){var r=a.all(e.map(n,function(e){return t._validateConstraint(s,e)}));if(d.push(r),"rejected"===r.state())return!1}),a.all(d)}},_validateConstraint:function(t,i){var n=this,r=i.validate(t,this);return!1===r&&(r=e.Deferred().reject()),a.all([r]).fail(function(e){n.validationResult instanceof Array||(n.validationResult=[]),n.validationResult.push({assert:i,errorMessage:"string"==typeof e&&e})})},getValue:function(){var e;return e="function"==typeof this.options.value?this.options.value(this):"undefined"!=typeof this.options.value?this.options.value:this.$element.val(),"undefined"==typeof e||null===e?"":this._handleWhitespace(e)},reset:function(){return this._resetUI(),this._trigger("reset")},destroy:function(){this._destroyUI(),this.$element.removeData("Parsley"),this.$element.removeData("FieldMultiple"),this._trigger("destroy")},refreshConstraints:function(){return this.actualizeOptions()._bindConstraints()},addConstraint:function(e,t,i,n){if(window.Parsley._validatorRegistry.validators[e]){var r=new F(this,e,t,i,n);"undefined"!==this.constraintsByName[r.name]&&this.removeConstraint(r.name),this.constraints.push(r),this.constraintsByName[r.name]=r}return this},removeConstraint:function(e){for(var t=0;t<this.constraints.length;t++)if(e===this.constraints[t].name){this.constraints.splice(t,1);break}return delete this.constraintsByName[e],this},updateConstraint:function(e,t,i){return this.removeConstraint(e).addConstraint(e,t,i)},_bindConstraints:function(){for(var e=[],t={},i=0;i<this.constraints.length;i++)!1===this.constraints[i].isDomConstraint&&(e.push(this.constraints[i]),t[this.constraints[i].name]=this.constraints[i]);this.constraints=e,this.constraintsByName=t;for(var n in this.options)this.addConstraint(n,this.options[n],void 0,!0);return this._bindHtml5Constraints()},_bindHtml5Constraints:function(){null!==this.element.getAttribute("required")&&this.addConstraint("required",!0,void 0,!0),null!==this.element.getAttribute("pattern")&&this.addConstraint("pattern",this.element.getAttribute("pattern"),void 0,!0);var e=this.element.getAttribute("min"),t=this.element.getAttribute("max");null!==e&&null!==t?this.addConstraint("range",[e,t],void 0,!0):null!==e?this.addConstraint("min",e,void 0,!0):null!==t&&this.addConstraint("max",t,void 0,!0),null!==this.element.getAttribute("minlength")&&null!==this.element.getAttribute("maxlength")?this.addConstraint("length",[this.element.getAttribute("minlength"),this.element.getAttribute("maxlength")],void 0,!0):null!==this.element.getAttribute("minlength")?this.addConstraint("minlength",this.element.getAttribute("minlength"),void 0,!0):null!==this.element.getAttribute("maxlength")&&this.addConstraint("maxlength",this.element.getAttribute("maxlength"),void 0,!0);var i=this.element.type;return"number"===i?this.addConstraint("type",["number",{step:this.element.getAttribute("step")||"1",base:e||this.element.getAttribute("value")}],void 0,!0):/^(email|url|range|date)$/i.test(i)?this.addConstraint("type",i,void 0,!0):this},_isRequired:function(){return"undefined"!=typeof this.constraintsByName.required&&!1!==this.constraintsByName.required.requirements},_trigger:function(e){return this.trigger("field:"+e)},_handleWhitespace:function(e){return!0===this.options.trimValue&&a.warnOnce('data-parsley-trim-value="true" is deprecated, please use data-parsley-whitespace="trim"'),"squish"===this.options.whitespace&&(e=e.replace(/\s{2,}/g," ")),"trim"!==this.options.whitespace&&"squish"!==this.options.whitespace&&!0!==this.options.trimValue||(e=a.trimString(e)),e},_isDateInput:function(){var e=this.constraintsByName.type;return e&&"date"===e.requirements},_getGroupedConstraints:function(){if(!1===this.options.priorityEnabled)return[this.constraints];for(var e=[],t={},i=0;i<this.constraints.length;i++){var n=this.constraints[i].priority;t[n]||e.push(t[n]=[]),t[n].push(this.constraints[i])}return e.sort(function(e,t){return t[0].priority-e[0].priority}),e}};var x=E,$=function(){this.__class__="FieldMultiple"};$.prototype={addElement:function(e){return this.$elements.push(e),this},refreshConstraints:function(){var t;if(this.constraints=[],"SELECT"===this.element.nodeName)return this.actualizeOptions()._bindConstraints(),
this;for(var i=0;i<this.$elements.length;i++)if(e("html").has(this.$elements[i]).length){t=this.$elements[i].data("FieldMultiple").refreshConstraints().constraints;for(var n=0;n<t.length;n++)this.addConstraint(t[n].name,t[n].requirements,t[n].priority,t[n].isDomConstraint)}else this.$elements.splice(i,1);return this},getValue:function(){if("function"==typeof this.options.value)return this.options.value(this);if("undefined"!=typeof this.options.value)return this.options.value;if("INPUT"===this.element.nodeName){if("radio"===this.element.type)return this._findRelated().filter(":checked").val()||"";if("checkbox"===this.element.type){var t=[];return this._findRelated().filter(":checked").each(function(){t.push(e(this).val())}),t}}return"SELECT"===this.element.nodeName&&null===this.$element.val()?[]:this.$element.val()},_init:function(){return this.$elements=[this.$element],this}};var P=function(t,i,n){this.element=t,this.$element=e(t);var r=this.$element.data("Parsley");if(r)return"undefined"!=typeof n&&r.parent===window.Parsley&&(r.parent=n,r._resetOptions(r.options)),"object"==typeof i&&_extends(r.options,i),r;if(!this.$element.length)throw new Error("You must bind Parsley on an existing element.");if("undefined"!=typeof n&&"Form"!==n.__class__)throw new Error("Parent instance must be a Form instance");return this.parent=n||window.Parsley,this.init(i)};P.prototype={init:function(e){return this.__class__="Parsley",this.__version__="2.7.2",this.__id__=a.generateID(),this._resetOptions(e),"FORM"===this.element.nodeName||a.checkAttr(this.element,this.options.namespace,"validate")&&!this.$element.is(this.options.inputs)?this.bind("parsleyForm"):this.isMultiple()?this.handleMultiple():this.bind("parsleyField")},isMultiple:function(){return"radio"===this.element.type||"checkbox"===this.element.type||"SELECT"===this.element.nodeName&&null!==this.element.getAttribute("multiple")},handleMultiple:function(){var t,i,n=this;if(this.options.multiple=this.options.multiple||(t=this.element.getAttribute("name"))||this.element.getAttribute("id"),"SELECT"===this.element.nodeName&&null!==this.element.getAttribute("multiple"))return this.options.multiple=this.options.multiple||this.__id__,this.bind("parsleyFieldMultiple");if(!this.options.multiple)return a.warn("To be bound by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.",this.$element),this;this.options.multiple=this.options.multiple.replace(/(:|\.|\[|\]|\{|\}|\$)/g,""),t&&e('input[name="'+t+'"]').each(function(e,t){"radio"!==t.type&&"checkbox"!==t.type||t.setAttribute(n.options.namespace+"multiple",n.options.multiple)});for(var r=this._findRelated(),s=0;s<r.length;s++)if(i=e(r.get(s)).data("Parsley"),"undefined"!=typeof i){this.$element.data("FieldMultiple")||i.addElement(this.$element);break}return this.bind("parsleyField",!0),i||this.bind("parsleyFieldMultiple")},bind:function(t,i){var n;switch(t){case"parsleyForm":n=e.extend(new w(this.element,this.domOptions,this.options),new l,window.ParsleyExtend)._bindFields();break;case"parsleyField":n=e.extend(new x(this.element,this.domOptions,this.options,this.parent),new l,window.ParsleyExtend);break;case"parsleyFieldMultiple":n=e.extend(new x(this.element,this.domOptions,this.options,this.parent),new $,new l,window.ParsleyExtend)._init();break;default:throw new Error(t+"is not a supported Parsley type")}return this.options.multiple&&a.setAttr(this.element,this.options.namespace,"multiple",this.options.multiple),"undefined"!=typeof i?(this.$element.data("FieldMultiple",n),n):(this.$element.data("Parsley",n),n._actualizeTriggers(),n._trigger("init"),n)}};var V=e.fn.jquery.split(".");if(parseInt(V[0])<=1&&parseInt(V[1])<8)throw"The loaded version of jQuery is too old. Please upgrade to 1.8.x or better.";V.forEach||a.warn("Parsley requires ES5 to run properly. Please include https://github.com/es-shims/es5-shim");var O=_extends(new l,{element:document,$element:e(document),actualizeOptions:null,_resetOptions:null,Factory:P,version:"2.7.2"});_extends(x.prototype,y.Field,l.prototype),_extends(w.prototype,y.Form,l.prototype),_extends(P.prototype,l.prototype),e.fn.parsley=e.fn.psly=function(t){if(this.length>1){var i=[];return this.each(function(){i.push(e(this).parsley(t))}),i}return e(this).length?new P(this[0],t):void a.warn("You must bind Parsley on an existing element.")},"undefined"==typeof window.ParsleyExtend&&(window.ParsleyExtend={}),O.options=_extends(a.objectCreate(o),window.ParsleyConfig),window.ParsleyConfig=O.options,window.Parsley=window.psly=O,O.Utils=a,window.ParsleyUtils={},e.each(a,function(e,t){"function"==typeof t&&(window.ParsleyUtils[e]=function(){return a.warnOnce("Accessing `window.ParsleyUtils` is deprecated. Use `window.Parsley.Utils` instead."),a[e].apply(a,arguments)})});var M=window.Parsley._validatorRegistry=new p(window.ParsleyConfig.validators,window.ParsleyConfig.i18n);window.ParsleyValidator={},e.each("setLocale addCatalog addMessage addMessages getErrorMessage formatMessage addValidator updateValidator removeValidator".split(" "),function(e,t){window.Parsley[t]=function(){return M[t].apply(M,arguments)},window.ParsleyValidator[t]=function(){var e;return a.warnOnce("Accessing the method '"+t+"' through Validator is deprecated. Simply call 'window.Parsley."+t+"(...)'"),(e=window.Parsley)[t].apply(e,arguments)}}),window.Parsley.UI=y,window.ParsleyUI={removeError:function(e,t,i){var n=!0!==i;return a.warnOnce("Accessing UI is deprecated. Call 'removeError' on the instance directly. Please comment in issue 1073 as to your need to call this method."),e.removeError(t,{updateClass:n})},getErrorsMessages:function(e){return a.warnOnce("Accessing UI is deprecated. Call 'getErrorsMessages' on the instance directly."),e.getErrorsMessages()}},e.each("addError updateError".split(" "),function(e,t){window.ParsleyUI[t]=function(e,i,n,r,s){var o=!0!==s;return a.warnOnce("Accessing UI is deprecated. Call '"+t+"' on the instance directly. Please comment in issue 1073 as to your need to call this method."),e[t](i,{message:n,assert:r,updateClass:o})}}),!1!==window.ParsleyConfig.autoBind&&e(function(){e("[data-parsley-validate]").length&&e("[data-parsley-validate]").parsley()});var T=e({}),R=function(){a.warnOnce("Parsley's pubsub module is deprecated; use the 'on' and 'off' methods on parsley instances or window.Parsley")},D="parsley:";e.listen=function(e,n){var r;if(R(),"object"==typeof arguments[1]&&"function"==typeof arguments[2]&&(r=arguments[1],n=arguments[2]),"function"!=typeof n)throw new Error("Wrong parameters");window.Parsley.on(i(e),t(n,r))},e.listenTo=function(e,n,r){if(R(),!(e instanceof x||e instanceof w))throw new Error("Must give Parsley instance");if("string"!=typeof n||"function"!=typeof r)throw new Error("Wrong parameters");e.on(i(n),t(r))},e.unsubscribe=function(e,t){if(R(),"string"!=typeof e||"function"!=typeof t)throw new Error("Wrong arguments");window.Parsley.off(i(e),t.parsleyAdaptedCallback)},e.unsubscribeTo=function(e,t){if(R(),!(e instanceof x||e instanceof w))throw new Error("Must give Parsley instance");e.off(i(t))},e.unsubscribeAll=function(t){R(),window.Parsley.off(i(t)),e("form,input,textarea,select").each(function(){var n=e(this).data("Parsley");n&&n.off(i(t))})},e.emit=function(e,t){var n;R();var r=t instanceof x||t instanceof w,s=Array.prototype.slice.call(arguments,r?2:1);s.unshift(i(e)),r||(t=window.Parsley),(n=t).trigger.apply(n,_toConsumableArray(s))};e.extend(!0,O,{asyncValidators:{"default":{fn:function(e){return e.status>=200&&e.status<300},url:!1},reverse:{fn:function(e){return e.status<200||e.status>=300},url:!1}},addAsyncValidator:function(e,t,i,n){return O.asyncValidators[e]={fn:t,url:i||!1,options:n||{}},this}}),O.addValidator("remote",{requirementType:{"":"string",validator:"string",reverse:"boolean",options:"object"},validateString:function(t,i,n,r){var s,a,o={},l=n.validator||(!0===n.reverse?"reverse":"default");if("undefined"==typeof O.asyncValidators[l])throw new Error("Calling an undefined async validator: `"+l+"`");i=O.asyncValidators[l].url||i,i.indexOf("{value}")>-1?i=i.replace("{value}",encodeURIComponent(t)):o[r.element.getAttribute("name")||r.element.getAttribute("id")]=t;var u=e.extend(!0,n.options||{},O.asyncValidators[l].options);s=e.extend(!0,{},{url:i,data:o,type:"GET"},u),r.trigger("field:ajaxoptions",r,s),a=e.param(s),"undefined"==typeof O._remoteCache&&(O._remoteCache={});var d=O._remoteCache[a]=O._remoteCache[a]||e.ajax(s),h=function(){var t=O.asyncValidators[l].fn.call(r,d,i,n);return t||(t=e.Deferred().reject()),e.when(t)};return d.then(h,h)},priority:-1}),O.on("form:submit",function(){O._remoteCache={}}),l.prototype.addAsyncValidator=function(){return a.warnOnce("Accessing the method `addAsyncValidator` through an instance is deprecated. Simply call `Parsley.addAsyncValidator(...)`"),O.addAsyncValidator.apply(O,arguments)},O.addMessages("en",{defaultMessage:"This value seems to be invalid.",type:{email:"This value should be a valid email.",url:"This value should be a valid url.",number:"This value should be a valid number.",integer:"This value should be a valid integer.",digits:"This value should be digits.",alphanum:"This value should be alphanumeric."},notblank:"This value should not be blank.",required:"This value is required.",pattern:"This value seems to be invalid.",min:"This value should be greater than or equal to %s.",max:"This value should be lower than or equal to %s.",range:"This value should be between %s and %s.",minlength:"This value is too short. It should have %s characters or more.",maxlength:"This value is too long. It should have %s characters or fewer.",length:"This value length is invalid. It should be between %s and %s characters long.",mincheck:"You must select at least %s choices.",maxcheck:"You must select %s choices or fewer.",check:"You must select between %s and %s choices.",equalto:"This value should be the same."}),O.setLocale("en");var I=new n;I.install();var q=O;return q});
jQuery(document).ready(function(e){function a(e,a){l(e,a),e.find(a.container).first().show()}function n(a,n){if(n.tabs){var t=e("<div />",{"class":n.tabMenuClassName}).insertBefore(a.children(n.container).filter(":first"));a.children(n.container).each(function(i,r){var l=e("<button/>").html(e(this).children(n.header).html()).addClass(0==i?n.tabMenuItemActiveClassName:"").addClass("item"+i).addClass("btn btn-default").prop("type","button").on("click keypress",{container:a.children(n.container),fieldset:e(r)},function(){var t=e(this),i=t.parent().children().index(t);s(a,n,t,i)});n.tabIndex&&l.prop("tabindex",i),t.append(l)})}}function t(a,n){n.navigation&&a.children(n.container).each(function(t){var i=e("<div />").addClass("powermail_fieldwrap").addClass("powermail_tab_navigation").appendTo(e(this));t>0&&i.append(c(a,n)),t<a.children(n.container).length-1&&i.append(o(a,n))})}function i(a,n){e.fn.parsley&&"data-parsley-validate"===a.data("parsley-validate")&&a.parsley().subscribe("parsley:field:validated",function(){v(a,n),C(a,n)})}function r(a,n){n.openTabOnError&&e.fn.parsley&&e.listen("parsley:field:error",function(){setTimeout(function(){a.find("."+n.tabMenuClassName+" > ."+n.tabMenuItemErrorClassName+":first").click()},50)})}function s(a,n,t,i){$activeTab=b(a,n),$activeTab.removeClass(n.tabMenuItemActiveClassName),t.addClass(n.tabMenuItemActiveClassName),l(a,n),e(".powermail_fieldset",a).slice(i,i+1).show()}function l(e,a){e.children(a.container).hide()}function c(a,n){return e("<a />").prop("href","#").addClass("btn btn-warning").html("<").click(function(e){e.preventDefault(),u(a,n)})}function o(a,n){return e("<a />").prop("href","#").addClass("btn btn-primary pull-right").html(">").click(function(e){e.preventDefault(),d(a,n)})}function d(e,a){var n=m(e,a);$activeTab=b(e,a),$activeTab.removeClass(a.tabMenuItemActiveClassName).next().addClass(a.tabMenuItemActiveClassName),f(e,a,n+1)}function u(e,a){var n=m(e,a);$activeTab=b(e,a),$activeTab.removeClass(a.tabMenuItemActiveClassName).prev().addClass(a.tabMenuItemActiveClassName),f(e,a,n-1)}function f(e,a,n){l(e,a),e.find(".powermail_fieldset").slice(n,n+1).show()}function m(e,a){var n=p(e,a),t=n.index(b(e,a));return parseInt(t)}function p(e,a){return e.find("."+a.tabMenuClassName).children()}function b(e,a){var n=p(e,a);return n.filter("."+a.tabMenuItemActiveClassName)}function v(e,a){var n=p(e,a);n.removeClass(a.tabMenuItemErrorClassName)}function C(a,n){a.parsley().isValid()||a.find(".parsley-error").each(function(){var t=a.find(".powermail_fieldset").index(e(this).closest(".powermail_fieldset")),i=p(a,n),r=i.slice(t,t+1);r.addClass(n.tabMenuItemErrorClassName)})}e.fn.powermailTabs=function(e){"use strict";var s=jQuery(this);e=jQuery.extend({container:"fieldset",header:"legend",tabs:!0,navigation:!0,openTabOnError:!0,tabIndex:!0,tabMenuClassName:"btn-group",tabMenuItemActiveClassName:"btn-primary",tabMenuItemErrorClassName:"btn-danger"},e),a(s,e),n(s,e),t(s,e),i(s,e),r(s,e)}});
function PowermailForm(e){"use strict";this.initialize=function(){t(),a(),i(),r(),o(),n(),f(),l()};var t=function(){e.fn.powermailTabs&&e(".powermail_morestep").each(function(){e(this).powermailTabs()})},a=function(){e("form[data-powermail-ajax]").length&&p()},i=function(){if(e('*[data-powermail-location="prefill"]').length&&navigator.geolocation){e(this);navigator.geolocation.getCurrentPosition(function(t){var a=t.coords.latitude,i=t.coords.longitude,r=C()+"/index.php?eID=powermailEidGetLocation";jQuery.ajax({url:r,data:"lat="+a+"&lng="+i,cache:!1,success:function(t){t&&e('*[data-powermail-location="prefill"]').val(t)}})})}},r=function(){e.fn.datetimepicker&&e(".powermail_date").each(function(){var t=e(this);if("date"===t.prop("type")||"datetime-local"===t.prop("type")||"time"===t.prop("type")){if(!t.data("datepicker-force")){if(e(this).data("date-value")){var a=g(e(this).data("date-value"),e(this).data("datepicker-format"),t.prop("type"));null!==a&&e(this).val(a)}return}t.prop("type","text"),t.val(e(this).data("date-value"))}var i=!0,r=!0;"date"===t.data("datepicker-settings")?r=!1:"time"===t.data("datepicker-settings")&&(i=!1),t.datetimepicker({format:t.data("datepicker-format"),timepicker:r,datepicker:i,lang:"en",i18n:{en:{months:t.data("datepicker-months").split(","),dayOfWeek:t.data("datepicker-days").split(",")}}})})},o=function(){e(".powermail_all_type_password.powermail_all_value").html("********")},n=function(){e.fn.parsley&&e(".powermail_reset").on("click","",function(){e('form[data-parsley-validate="data-parsley-validate"]').parsley().reset()})},l=function(){window.Parsley&&(x(),b())},p=function(){var t,a=!1;e(document).on("submit","form[data-powermail-ajax]",function(i){var r=e(this),o=r.closest(".tx-powermail");r.data("powermail-ajax-uri")&&(t=r.data("powermail-ajax-uri"));var n=r.data("powermail-form");a||(e.ajax({type:"POST",url:r.prop("action"),data:new FormData(r.get(0)),contentType:!1,processData:!1,beforeSend:function(){s(r)},complete:function(){d(r),f(),c(o)},success:function(i){var o=e('*[data-powermail-form="'+n+'"]:first',i);o.length?(e('*[data-powermail-form="'+n+'"]:first').closest(".tx-powermail").html(o),e.fn.powermailTabs&&e(".powermail_morestep").powermailTabs(),e.fn.parsley&&e('form[data-parsley-validate="data-parsley-validate"]').parsley(),w()):(t?D(t):r.submit(),a=!0)}}),i.preventDefault())})},s=function(t){d(t),e(".powermail_submit",t).length?e(".powermail_submit",t).parent().append(y()):t.closest(".tx-powermail").append(y())},d=function(e){e.closest(".tx-powermail").find(".powermail_progressbar").remove()},c=function(t){var a=e.Event("submitted.powermail.form");t.trigger(a)},f=function(){e(".powermail_fieldwrap_file").find(".deleteAllFiles").each(function(){u(e(this).closest(".powermail_fieldwrap_file").find('input[type="file"]'))}),e(".deleteAllFiles").click(function(){m(e(this).closest(".powermail_fieldwrap_file").find('input[type="hidden"]')),e(this).closest("ul").fadeOut(function(){e(this).remove()})})},u=function(e){e.prop("disabled","disabled").addClass("hide").prop("type","hidden")},m=function(e){e.prop("disabled",!1).removeClass("hide").prop("type","file")},w=function(){e("img.powermail_captchaimage").each(function(){var t=h(e(this).prop("src"));e(this).prop("src",t+"?hash="+v(5))})},h=function(e){var t=e.split("?");return t[0]},v=function(e){for(var t="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=0;i<e;i++)t+=a.charAt(Math.floor(Math.random()*a.length));return t},g=function(e,t,a){var i=Date.parseDate(e,t);if(null===i)return null;var r=new Date(i),o=r.getFullYear()+"-";o+=("0"+(r.getMonth()+1)).slice(-2)+"-",o+=("0"+r.getDate()).slice(-2);var n=("0"+r.getHours()).slice(-2)+":"+("0"+r.getMinutes()).slice(-2),l=o+"T"+n;return"date"===a?o:"datetime-local"===a?l:"time"===a?n:null},y=function(){return e("<div />").addClass("powermail_progressbar").html(e("<div />").addClass("powermail_progress").html(e("<div />").addClass("powermail_progress_inner")))},_=function(e){for(var t=e.get(0),a=0,i=0;i<t.files.length;i++){var r=t.files[i];r.size>a&&(a=r.size)}return parseInt(a)},x=function(){window.Parsley.addValidator("powermailfilesize",function(t,a){if(a.indexOf(",")!==-1){var i=a.split(","),r=parseInt(i[0]),o=e('*[name="tx_powermail_pi1[field]['+i[1]+'][]"]');if(o.length&&_(o)>r)return!1}return!0},32).addMessage("en","powermailfilesize","Error")},b=function(){window.Parsley.addValidator("powermailfileextensions",function(t,a){var i=e('*[name="tx_powermail_pi1[field]['+a+'][]"]');return!i.length||k(j(t),i.prop("accept"))},32).addMessage("en","powermailfileextensions","Error")},k=function(e,t){return t.indexOf("."+e)!==-1},j=function(e){return e.split(".").pop().toLowerCase()},D=function(e){e.indexOf("http")!==-1?window.location=e:window.location.pathname=e},C=function(){var t;return t=e("base").length>0?jQuery("base").prop("href"):"https:"!=window.location.protocol?"http://"+window.location.hostname:"https://"+window.location.hostname}}jQuery(document).ready(function(e){"use strict";var t=new window.PowermailForm(e);t.initialize()});
!function(n){"use strict";function t(n,t){var r=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(r>>16)<<16|65535&r}function r(n,t){return n<<t|n>>>32-t}function e(n,e,o,u,c,f){return t(r(t(t(e,n),t(u,f)),c),o)}function o(n,t,r,o,u,c,f){return e(t&r|~t&o,n,t,u,c,f)}function u(n,t,r,o,u,c,f){return e(t&o|r&~o,n,t,u,c,f)}function c(n,t,r,o,u,c,f){return e(t^r^o,n,t,u,c,f)}function f(n,t,r,o,u,c,f){return e(r^(t|~o),n,t,u,c,f)}function i(n,r){n[r>>5]|=128<<r%32,n[14+(r+64>>>9<<4)]=r;var e,i,a,d,h,l=1732584193,g=-271733879,v=-1732584194,m=271733878;for(e=0;e<n.length;e+=16)i=l,a=g,d=v,h=m,g=f(g=f(g=f(g=f(g=c(g=c(g=c(g=c(g=u(g=u(g=u(g=u(g=o(g=o(g=o(g=o(g,v=o(v,m=o(m,l=o(l,g,v,m,n[e],7,-680876936),g,v,n[e+1],12,-389564586),l,g,n[e+2],17,606105819),m,l,n[e+3],22,-1044525330),v=o(v,m=o(m,l=o(l,g,v,m,n[e+4],7,-176418897),g,v,n[e+5],12,1200080426),l,g,n[e+6],17,-1473231341),m,l,n[e+7],22,-45705983),v=o(v,m=o(m,l=o(l,g,v,m,n[e+8],7,1770035416),g,v,n[e+9],12,-1958414417),l,g,n[e+10],17,-42063),m,l,n[e+11],22,-1990404162),v=o(v,m=o(m,l=o(l,g,v,m,n[e+12],7,1804603682),g,v,n[e+13],12,-40341101),l,g,n[e+14],17,-1502002290),m,l,n[e+15],22,1236535329),v=u(v,m=u(m,l=u(l,g,v,m,n[e+1],5,-165796510),g,v,n[e+6],9,-1069501632),l,g,n[e+11],14,643717713),m,l,n[e],20,-373897302),v=u(v,m=u(m,l=u(l,g,v,m,n[e+5],5,-701558691),g,v,n[e+10],9,38016083),l,g,n[e+15],14,-660478335),m,l,n[e+4],20,-405537848),v=u(v,m=u(m,l=u(l,g,v,m,n[e+9],5,568446438),g,v,n[e+14],9,-1019803690),l,g,n[e+3],14,-187363961),m,l,n[e+8],20,1163531501),v=u(v,m=u(m,l=u(l,g,v,m,n[e+13],5,-1444681467),g,v,n[e+2],9,-51403784),l,g,n[e+7],14,1735328473),m,l,n[e+12],20,-1926607734),v=c(v,m=c(m,l=c(l,g,v,m,n[e+5],4,-378558),g,v,n[e+8],11,-2022574463),l,g,n[e+11],16,1839030562),m,l,n[e+14],23,-35309556),v=c(v,m=c(m,l=c(l,g,v,m,n[e+1],4,-1530992060),g,v,n[e+4],11,1272893353),l,g,n[e+7],16,-155497632),m,l,n[e+10],23,-1094730640),v=c(v,m=c(m,l=c(l,g,v,m,n[e+13],4,681279174),g,v,n[e],11,-358537222),l,g,n[e+3],16,-722521979),m,l,n[e+6],23,76029189),v=c(v,m=c(m,l=c(l,g,v,m,n[e+9],4,-640364487),g,v,n[e+12],11,-421815835),l,g,n[e+15],16,530742520),m,l,n[e+2],23,-995338651),v=f(v,m=f(m,l=f(l,g,v,m,n[e],6,-198630844),g,v,n[e+7],10,1126891415),l,g,n[e+14],15,-1416354905),m,l,n[e+5],21,-57434055),v=f(v,m=f(m,l=f(l,g,v,m,n[e+12],6,1700485571),g,v,n[e+3],10,-1894986606),l,g,n[e+10],15,-1051523),m,l,n[e+1],21,-2054922799),v=f(v,m=f(m,l=f(l,g,v,m,n[e+8],6,1873313359),g,v,n[e+15],10,-30611744),l,g,n[e+6],15,-1560198380),m,l,n[e+13],21,1309151649),v=f(v,m=f(m,l=f(l,g,v,m,n[e+4],6,-145523070),g,v,n[e+11],10,-1120210379),l,g,n[e+2],15,718787259),m,l,n[e+9],21,-343485551),l=t(l,i),g=t(g,a),v=t(v,d),m=t(m,h);return[l,g,v,m]}function a(n){var t,r="",e=32*n.length;for(t=0;t<e;t+=8)r+=String.fromCharCode(n[t>>5]>>>t%32&255);return r}function d(n){var t,r=[];for(r[(n.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;var e=8*n.length;for(t=0;t<e;t+=8)r[t>>5]|=(255&n.charCodeAt(t/8))<<t%32;return r}function h(n){return a(i(d(n),8*n.length))}function l(n,t){var r,e,o=d(n),u=[],c=[];for(u[15]=c[15]=void 0,o.length>16&&(o=i(o,8*n.length)),r=0;r<16;r+=1)u[r]=909522486^o[r],c[r]=1549556828^o[r];return e=i(u.concat(d(t)),512+8*t.length),a(i(c.concat(e),640))}function g(n){var t,r,e="";for(r=0;r<n.length;r+=1)t=n.charCodeAt(r),e+="0123456789abcdef".charAt(t>>>4&15)+"0123456789abcdef".charAt(15&t);return e}function v(n){return unescape(encodeURIComponent(n))}function m(n){return h(v(n))}function p(n){return g(m(n))}function s(n,t){return l(v(n),v(t))}function C(n,t){return g(s(n,t))}function A(n,t,r){return t?r?s(t,n):C(t,n):r?m(n):p(n)}"function"==typeof define&&define.amd?define(function(){return A}):"object"==typeof module&&module.exports?module.exports=A:n.md5=A}(this);
//# sourceMappingURL=md5.min.js.map
var IYOPRO;(function(t){var e;(function(t){var e;(function(t){var e=function(){function t(){}t.Calculate=function(e){var r=[];var n;e.split(t._allOperators).forEach(function(t){if(t!=""){n=Number(t);if(!isNaN(n)){r.push(n)}else{throw new TypeError}}});t.EvaluateMathString({mathEquation:e,numbers:r},0);return r[0]};t.EvaluateMathString=function(e,r){var n=t.GetNextToken(e.mathEquation);while(n!=""){e.mathEquation=e.mathEquation.substr(n.length);if(t._grouping.indexOf(n)>=0){switch(n){case"(":t.EvaluateMathString(e,r);break;case")":return}}if(t._operators.indexOf(n)>=0){var i=t.GetNextToken(e.mathEquation);if(i=="("){t.EvaluateMathString(e,r+1)}if(e.numbers.length>r+1&&(i=="("||Number(i)==e.numbers[r+1])){switch(n){case"+":e.numbers[r]=e.numbers[r]+e.numbers[r+1];break;case"-":e.numbers[r]=e.numbers[r]-e.numbers[r+1];break;case"*":e.numbers[r]=e.numbers[r]*e.numbers[r+1];break;case"/":e.numbers[r]=e.numbers[r]/e.numbers[r+1];break;case"%":e.numbers[r]=e.numbers[r]%e.numbers[r+1];break;case"^":e.numbers[r]=Math.pow(e.numbers[r],e.numbers[r+1]);break}e.numbers.splice(r+1,1)}else{throw new TypeError("Next token is not the expected number")}}var n=t.GetNextToken(e.mathEquation)}};t.GetNextToken=function(e){if(e==""){return""}var r="";for(var n=0,i=e.length;n<i;n++){var a=e[n];if(t._sallOperators.indexOf(a)>=0){return r==""?a:r}else{r+=a}}return r};t.GetCommandArgs=function(t,e,r){if(r===void 0){r=0}var n=t.indexOf(e+"(",r);var i=t.indexOf(")",n);var a=t.substr(n+e.length+1,i-n-e.length-1);var u=a.split(",");for(var s=0,l=u.length;s<l;s++)u[s]=u[s].trim();return u};t._sallOperators="+-*/^%()";t._allOperators=/[\+\-\*\/^%\(\)]/;t._grouping=["(",")"];t._operators=["+","-","*","/","^","%"];return t}();t.Calculator=e})(e=t.RuleEngine||(t.RuleEngine={}))})(e=t.PLM||(t.PLM={}))})(IYOPRO||(IYOPRO={}));var IYOPRO;(function(t){var e;(function(t){var e;(function(t){var e=function(){function t(){}t.Size=function(t,e,r){if(e===void 0){e="|"}if(r===void 0){r='"'}var n=1;var i;i=e;for(var a=0,u=t.length;a<u;a++){if(t[a]==r&&i==e){for(a++;a<t.length;a++){if(t[a]==r){a++;if(a<t.length){if(t[a]==r){continue}else break}else{return n}}}}if(t[a]==e)n++;i=t[a]}return n};t.Entry=function(t,e,r,n){if(r===void 0){r="|"}if(n===void 0){n='"'}var i=0;var a;var u="";a=r;if(e<0)return null;for(var s=0,l=t.length;s<l;s++){if(t[s]==n&&a==r){for(s++;s<t.length;s++){if(t[s]==n){s++;if(s<t.length){if(t[s]==n){if(i==e){u+=t[s]}continue}else{if(i==e)return u;break}}else{return u}}if(i==e){u+=t[s]}}}if(i==e&&t[s]!=r){u+=t[s]}if(t[s]==r)i++;if(i>e)return u;a=t[s]}if(i<e)return null;return u};t.SplitString=function(e){var r=[];var n=t.Size(e);for(var i=0;i<n;i++){var a=t.Entry(e,i);r.push(a)}return r};t.MakeCSVString=function(t,e,r){if(e===void 0){e="|"}if(r===void 0){r='"'}if(t==null||t.length==0)return"";var n="";var i=r+r;var a=r;t.forEach(function(t){var r=t.replace(a,i);if(r.indexOf(e)>-1)r=a+r+a;if(n.length>0)n+=e;n=n+r});return n};return t}();t.CSV=e})(e=t.RuleEngine||(t.RuleEngine={}))})(e=t.PLM||(t.PLM={}))})(IYOPRO||(IYOPRO={}));var IYOPRO;(function(t){var e;(function(t){var e;(function(t){var e=function(){function t(){this.maxID=4;this.m_IndexToStringsMap={};this.m_StringsToIndexMap={};this.AddString(r.EmptyString);this.AddString(r.NullString)}t.prototype.AddString=function(t,e){if(typeof t==="string"){var n=this.GetIDByString(t);if(n!=r.InvalidString)return n;var i=++this.maxID;return this.AddString(new r(i,t))}if(typeof t==="number"){if(t>this.maxID)this.maxID=t;this.AddString(new r(t,e));return}this.m_IndexToStringsMap[t.Id]=t;this.m_StringsToIndexMap[t.SValue]=t;return t};t.prototype.GetStringByID=function(t){return this.m_IndexToStringsMap[t]};t.prototype.GetIDByString=function(t){var e=r.InvalidString;if(t.length==0){e=r.EmptyString}else if(t in this.m_StringsToIndexMap){var e=this.m_StringsToIndexMap[t]}return e};return t}();t.StringMapper=e;(function(t){var e;(function(t){t[t["INVALID_STRING"]=0]="INVALID_STRING";t[t["EMPTY_STRING"]=1]="EMPTY_STRING";t[t["EXPLICIT_NULL_STRING"]=2]="EXPLICIT_NULL_STRING"})(e=t.StringType||(t.StringType={}))})(e=t.StringMapper||(t.StringMapper={}));var r=function(){function r(e,r){this.IsNumber=false;this.IsStringList=false;this.Id=e;this.SValue=r;if(r&&r.length>0&&!isNaN(Number(r))){this.IsNumber=true;this.DValue=Number(r)}if(!(r==null||r==="")&&t.CSV.Size(r)>1){this.IsStringList=true}}Object.defineProperty(r.prototype,"StrValueList",{get:function(){if(this.IsStringList)return t.CSV.SplitString(this.SValue);return new Array},enumerable:true,configurable:true});r.EmptyString=new r(e.StringType.EMPTY_STRING,"");r.NullString=new r(e.StringType.EXPLICIT_NULL_STRING,"NULL");r.InvalidString=new r(e.StringType.INVALID_STRING,null);return r}();t.StringEntity=r})(e=t.RuleEngine||(t.RuleEngine={}))})(e=t.PLM||(t.PLM={}))})(IYOPRO||(IYOPRO={}));var __extends=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)if(e.hasOwnProperty(r))t[r]=e[r]};return function(e,r){t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var IYOPRO;(function(t){var e;(function(t){var e;(function(t){var e=function(t){__extends(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e}(Array);t.RuleColumns=e;var r=function(){function t(t,e){this.Name=null;this.Cells=null;this.Name=t;this.Cells=e}return t}();t.RuleColumn=r;var n=function(t){__extends(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e}(Array);t.RuleCells=n;var i=function(){function t(){this.Values=new Array}return t}();t.RuleCell=i;var a=function(){function t(t){this.Value=null;this.Operation=0;if(t){this.Value=t.Value;this.Operation=t.Operation}}return t}();t.RuleCellValue=a})(e=t.RuleEngine||(t.RuleEngine={}))})(e=t.PLM||(t.PLM={}))})(IYOPRO||(IYOPRO={}));var P;(function(t){function e(){return new o}t.defer=e;function r(t){return e().resolve(t).promise()}t.resolve=r;function n(t){return e().reject(t).promise()}t.reject=n;function i(t,r){var n=e();var i=new Array;a(i,n,t,r);return n.promise()}t.unfold=i;function a(e,r,n,i){var u=n(i);if(!u){r.resolve(e);return}while(u.next&&u.promise.status==t.Status.Resolved){e.push(u.promise.result);u=n(u.next);if(!u){r.resolve(e);return}}u.promise.done(function(t){e.push(t);if(!u.next)r.resolve(e);else a(e,r,n,u.next)}).fail(function(t){r.reject(t)})}var u;(function(t){t[t["Unfulfilled"]=0]="Unfulfilled";t[t["Rejected"]=1]="Rejected";t[t["Resolved"]=2]="Resolved"})(u=t.Status||(t.Status={}));function s(){var t=[];for(var r=0;r<arguments.length;r++){t[r]=arguments[r]}var n=e();if(!t.length){n.resolve([]);return n.promise()}var i=0;var a=[];t.forEach(function(e,r){e.done(function(e){a[r]=e;++i;if(i===t.length&&n.status!==u.Rejected)n.resolve(a)}).fail(function(t){if(n.status!==u.Rejected)n.reject(new Error("when: one or more promises were rejected"))})});return n.promise()}t.when=s;var l=function(){function t(t){this.deferred=t}Object.defineProperty(t.prototype,"status",{get:function(){return this.deferred.status},enumerable:true,configurable:true});Object.defineProperty(t.prototype,"result",{get:function(){return this.deferred.result},enumerable:true,configurable:true});Object.defineProperty(t.prototype,"error",{get:function(){return this.deferred.error},enumerable:true,configurable:true});t.prototype.done=function(t){this.deferred.done(t);return this};t.prototype.fail=function(t){this.deferred.fail(t);return this};t.prototype.always=function(t){this.deferred.always(t);return this};t.prototype.then=function(t){return this.deferred.then(t)};return t}();var o=function(){function t(){this._resolved=function(t){};this._rejected=function(t){};this._status=u.Unfulfilled;this._error={message:""};this._promise=new l(this)}t.prototype.promise=function(){return this._promise};Object.defineProperty(t.prototype,"status",{get:function(){return this._status},enumerable:true,configurable:true});Object.defineProperty(t.prototype,"result",{get:function(){if(this._status!=u.Resolved)throw new Error("Promise: result not available");return this._result},enumerable:true,configurable:true});Object.defineProperty(t.prototype,"error",{get:function(){if(this._status!=u.Rejected)throw new Error("Promise: rejection reason not available");return this._error},enumerable:true,configurable:true});t.prototype.then=function(t){var r=e();this.done(function(e){var n=t(e);if(n instanceof l){var i=n;i.done(function(t){return r.resolve(t)}).fail(function(t){return r.reject(t)});return i}r.resolve(n)}).fail(function(t){return r.reject(t)});return r.promise()};t.prototype.done=function(t){if(this.status===u.Resolved){t(this._result);return this}if(this.status!==u.Unfulfilled)return this;var e=this._resolved;this._resolved=function(r){e(r);t(r)};return this};t.prototype.fail=function(t){if(this.status===u.Rejected){t(this._error);return this}if(this.status!==u.Unfulfilled)return this;var e=this._rejected;this._rejected=function(r){e(r);t(r)};return this};t.prototype.always=function(t){this.done(function(e){return t(e)}).fail(function(e){return t(null,e)});return this};t.prototype.resolve=function(t){if(this._status!==u.Unfulfilled)throw new Error("tried to resolve a fulfilled promise");this._result=t;this._status=u.Resolved;this._resolved(t);this.detach();return this};t.prototype.reject=function(t){if(this._status!==u.Unfulfilled)throw new Error("tried to reject a fulfilled promise");this._error=t;this._status=u.Rejected;this._rejected(t);this.detach();return this};t.prototype.detach=function(){this._resolved=function(t){};this._rejected=function(t){}};return t}();function f(t){return function(){return h(t())}}t.generator=f;function h(t){return new c(t)}t.iterator=h;var c=function(){function t(t){this.f=t;this.current=undefined}t.prototype.advance=function(){var t=this;var e=this.f();return e.then(function(e){if(g(e))return false;t.current=e;return true})};return t}();function p(t,r){var n=e();v(n,t(),r);return n.promise()}t.each=p;function v(t,e,r){e.advance().done(function(n){if(!n){t.resolve({});return}r(e.current);v(t,e,r)}).fail(function(e){return t.reject(e)})}function g(t){return typeof t==="undefined"}t.isUndefined=g})(P||(P={}));var IYOPRO;(function(t){var e;(function(t){var e;(function(t){var e=function(){function t(){this.keyArray=new Array;this.valArray=new Array;this.keyArray=new Array;this.valArray=new Array}t.prototype.put=function(t,e){var r=null;var n=this.findIt(t);if(n==-1){this.keyArray.push(t);this.valArray.push(e)}else{r=this.valArray[n];this.valArray[n]=e}return r};t.prototype.get=function(t){var e=null;var r=this.findIt(t);if(r!=-1){e=this.valArray[r]}return e};t.prototype.del=function(t){var e=null;var r=this.findIt(t);if(r!=-1){this.keyArray.splice(r,1);this.valArray.splice(r,1);return true}return false};t.prototype.size=function(){return this.keyArray.length};t.prototype.clear=function(){while(this.keyArray.length>0){this.keyArray.pop();this.valArray.pop()}};t.prototype.keys=function(){return this.keyArray};t.prototype.values=function(){return this.valArray};t.prototype.showMe=function(){var t="";for(var e=0;e<this.keyArray.length;e++){t+="Key: "+this.keyArray[e]+"\tValues: "+this.valArray[e]+"\n"}return t};t.prototype.findIt=function(t){return this.keyArray.indexOf(t)};return t}();t.HashMap=e;var r=function(){function t(){this.guid=null;this.empty="00000000-0000-0000-0000-000000000000";this.guid=this.empty}t.newGuid=function(){var e=new t;e.guid="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=Math.random()*16|0,r=t=="x"?e:e&3|8;return r.toString(16)});return e};return t}();t.Guid=r;var n=function(){function t(){}t.parseBool=function(t){if(typeof t==="string"&&t.toLowerCase()==="true")return true;else if(typeof t==="string"&&t.toLowerCase()==="false")return false;return null};return t}();t.Converters=n;function i(t,e){return t.reduce(function(t,r){return t.then(function(){return e(r)})},P.defer().resolve(null))}t.forEachPromise=i})(e=t.RuleEngine||(t.RuleEngine={}))})(e=t.PLM||(t.PLM={}))})(IYOPRO||(IYOPRO={}));var IYOPRO;(function(t){var e;(function(t){var e;(function(t){var e=function(){function e(e,r,n,i,a,u,s){this.m_InputAttrsValues={};this.m_InputAttrsTests=new t.RuleColumns;this.m_OutputAttrsValues=new t.RuleColumns;this.m_FormulaInputs=new Array;this.m_stringsMap=null;this.m_logger=null;this.RowCount=0;this.bHasChain=false;this.bHasExternal=false;this.bHasCalc=false;this.bHasPython=false;this.bHasJavascript=false;this.bGetAll=false;this.bNullSet=false;this.CreateRuleTable(e,r,n,i,a,u,s)}e.prototype.ResetTable=function(){this.RowCount=0;this.bHasChain=false;this.bHasExternal=false;this.bHasPython=false;this.bHasCalc=false;this.bHasJavascript=false;this.bGetAll=false;this.bNullSet=false;this.m_InputAttrsTests=[];this.m_InputAttrsValues={};this.m_OutputAttrsValues=[];this.m_FormulaInputs=[]};e.prototype.CreateRuleTable=function(t,e,r,n,i,a,u){this.ResetTable();this.m_FormulaInputs=r;this.m_InputAttrsTests=t;this.m_OutputAttrsValues=e;if(this.m_OutputAttrsValues.length>0)this.RowCount=this.m_OutputAttrsValues[0].Cells.length;this.m_Name=a;this.m_stringsMap=n;this.m_logger=i;this.bHasChain=false;this.bHasExternal=false;this.bHasPython=false;this.bHasCalc=false;this.bHasJavascript=false;this.bGetAll=u};e.prototype.GetStringMapper=function(){return this.m_stringsMap};e.prototype.GetAllInputAttrNames=function(){var t=new Array;this.m_InputAttrsTests.forEach(function(e){if(e.Name.length>0)t.push(e.Name)});return t};e.prototype.GetAllOutputAttrNames=function(){var t=new Array;this.m_OutputAttrsValues.forEach(function(e){if(e.Name.length>0)t.push(e.Name)});return t};e.prototype.GetAllInputDependencies=function(){var t=this.GetAllInputAttrNames();this.m_FormulaInputs.forEach(function(e){t.push(e)});return t};e.prototype.GetOutputAttrsValues=function(){return this.m_OutputAttrsValues};e.prototype.GetInputAttrsTests=function(){return this.m_InputAttrsTests};e.prototype.GetAllPossibleOutputs=function(t){var e=new Array;var r=new Array;var n={};try{this.m_OutputAttrsValues.forEach(function(e){if(e.Name==t){e.Cells.forEach(function(t){t.Values.forEach(function(t){if(r.indexOf(t.Value)<0)r.push(t.Value)})});throw n}})}catch(t){if(t!==n)throw t}r.sort(function(t,e){return t.Id>e.Id?1:e.Id>t.Id?-1:0});r.forEach(function(t){e.push(t.SValue)});return e};e.prototype.GetAllPossibleInputs=function(t){var e=new Array;var r=new Array;var n={};try{this.m_InputAttrsTests.forEach(function(e){if(e.Name==t){e.Cells.forEach(function(t){t.Values.forEach(function(t){if(r.indexOf(t.Value)<0)r.push(t.Value)})});throw n}})}catch(t){if(t!==n)throw t}r.sort(function(t,e){return t.Id>e.Id?1:e.Id>t.Id?-1:0});r.forEach(function(t){e.push(t.SValue)});return e};e.prototype.IsGetAll=function(){return this.bGetAll};e.prototype.HasChain=function(){return this.bHasChain};e.prototype.HasExternal=function(){return this.bHasExternal};e.prototype.HasCalc=function(){return this.bHasCalc};e.prototype.SetInputValues=function(t){this.bNullSet=false;this.m_InputAttrsValues=t};e.prototype.EvaluateTable=function(t,e,r){if(typeof t==="boolean"){return this.EvaluateTable1(t,e)}return this.EvaluateTable2(t,e,r)};e.prototype.EvaluateTable1=function(t,e){var r=this;var n={};var i=null;if(e)i=this.m_OutputAttrsValues;else i=this.m_InputAttrsTests;i.forEach(function(i){var a=r.EvaluateTable(i.Name,t,e);n[i.Name]=a});return n};e.prototype.EvaluateTable2=function(e,r,n){var i=this;if(r===void 0){r=true}if(n===void 0){n=true}var a=new t.ResultColumn;var u=new Array;var s;var l;if(n){s=this.m_InputAttrsTests;l=this.m_OutputAttrsValues}else{s=this.m_OutputAttrsValues;l=this.m_InputAttrsTests}this.SetInvalidAttrs();var o=new Array(this.RowCount);for(var f=0;f<o.length;f++){o[f]=true}if(Object.keys(this.m_InputAttrsValues).length>0&&s.length>0){s.forEach(function(t){var e=t.Name;if(i.m_InputAttrsValues[e]!=undefined){u.push(i.m_InputAttrsValues[e])}});var h=true;var c=new Array(this.RowCount);for(var f=0;f<c.length;f++){c[f]=false}o=c;for(var p=0;p<this.RowCount;p++){var v=0;var g={};try{s.forEach(function(e){if(p<e.Cells.length){var r=new t.Decoder(u[v],e.Cells[p],i.m_InputAttrsValues,i.m_stringsMap);h=r.EvaluateInputCell()}v++;if(!h){throw g}})}catch(t){if(t!==g)throw t}o[p]=h;if(h&&!r)break}}var m=new t.RuleCells;for(var E=0;E<l.length;E++){if(l[E].Name==e){m=l[E].Cells}}for(var E=0;E<this.RowCount;E++){if(o[E]&&E<m.length){var _=m[E];var d=new t.Decoder(_,this.m_InputAttrsValues,this.m_stringsMap);_.Values.forEach(function(e){if((e.Operation&t.Decoder.Operator.CHAIN)!=0)i.bHasChain=true;if((e.Operation&t.Decoder.Operator.EXTERNAL)!=0)i.bHasExternal=true;if((e.Operation&t.Decoder.Operator.CALC)!=0)i.bHasCalc=true});var A=d.EvaluateOutputCell();A.forEach(function(t){a.push(t)})}}return a};e.prototype.SetInvalidAttrs=function(){var e=this;if(!this.bNullSet){this.m_InputAttrsTests.forEach(function(r){if(!(r.Name in e.m_InputAttrsValues)){e.m_InputAttrsValues[r.Name]=t.StringEntity.InvalidString}})}this.bNullSet=true};return e}();t.RuleTable=e})(e=t.RuleEngine||(t.RuleEngine={}))})(e=t.PLM||(t.PLM={}))})(IYOPRO||(IYOPRO={}));var IYOPRO;(function(t){var e;(function(t){var e;(function(t){var e=function(){function e(t,e,r,n){this.m_tests=null;this.m_stringsMap=null;this.m_inputValues=null;if(!n){this.Decoder1(t,e,r)}else{this.Decoder2(t,e,r,n)}}e.prototype.Decoder1=function(t,e,r){this.m_tests=t.Values;this.m_stringsMap=r;this.m_inputValues=e};e.prototype.Decoder2=function(t,e,r,n){this.m_value=t;this.m_tests=e.Values;this.m_stringsMap=n;this.m_inputValues=r;this.CheckForInputGets()};e.prototype.CheckForInputGets=function(){var r=new Array;for(var n=0;n<this.m_tests.length;n++){if((this.m_tests[n].Operation&e.Operator.GETS)!=0){var i=new t.RuleCellValue(this.m_tests[n]);var a=this.ParseStringForGets(i.Value,false);i.Value=this.m_stringsMap.GetIDByString(a);r.push(i)}else{r.push(this.m_tests[n])}}this.m_tests=r};e.prototype.ParseStringForGets=function(t,r){return e.ParseStringForGets(this.m_inputValues,this.m_stringsMap,t,r)};e.ParseStringForGets=function(t,e,r,n){var i="";var a=r.SValue;if(a.indexOf("get(")>=0){do{a=this.ReplaceAGet(t,e,a,n);i=a}while(a.indexOf("get(")>=0)}else i=a;return i};e.prototype.ReplaceAGet=function(t,r){return e.ReplaceAGet(this.m_inputValues,this.m_stringsMap,t,r)};e.ReplaceAGet=function(t,e,r,n){var i="";var a=r.indexOf("get(",0);var u=r.indexOf(")",a);if(a>=0&&u>a){var s=r.substr(a+4,u-a-4);var l="get("+s+")";var o=-1;var f=-1;if(s.indexOf(",")>=0){var h=s.split(",");s=h[0].trim();var c=h[1].trim();o=Number(c);if(isNaN(o)){o=-1}if(h.length>2){var p=h[2].trim();f=Number(p);if(isNaN(f)){f=-1}}}var v=false;if(t!=null&&Object.keys(t).length>0){if(s in t){var g=t[s].SValue;if(o>=0){if(f>=0){g=g.substr(o,f)}else{g=g.substr(o)}}if(g.length>0){v=true;i=r.replace(l,g)}}}if(!v){if(n)i=r.replace(l,"0");else i=r.replace(l,"")}}return i};e.prototype.EvaluateOutputCell=function(){var r=this;var n=new Array;try{this.m_tests.forEach(function(i){if((i.Operation&e.Operator.GETS)!=0){var a=r.ParseStringForGets(i.Value,false);var u=r.m_stringsMap.GetIDByString(a);if(u==t.StringEntity.InvalidString){u=r.m_stringsMap.AddString(a)}if(u.IsStringList){n=n.concat(u.StrValueList)}else{n.push(a)}}else{n.push(i.Value.SValue)}})}catch(t){}return n};e.prototype.EvaluateInputCell=function(){var t=true;try{for(var r=0;r<this.m_tests.length;r++){if((this.m_tests[r].Operation&e.Operator.EQUALS)!=0){t=false;if(this.EvaluateEQUALS(this.m_tests[r]))return true}else if((this.m_tests[r].Operation&e.Operator.NOT_EQUAL)!=0){t=false;if(this.EvaluateNOT_EQUAL(this.m_tests[r]))return true}else if((this.m_tests[r].Operation&e.Operator.LESS_THAN)!=0||(this.m_tests[r].Operation&e.Operator.LESS_THAN_EQUAL)!=0||(this.m_tests[r].Operation&e.Operator.GREATER_THAN)!=0||(this.m_tests[r].Operation&e.Operator.GREATER_THAN_EQUAL)!=0){t=false;if(this.EvaluateGT_LT(this.m_tests[r]))return true}else if((this.m_tests[r].Operation&e.Operator.RANGE_INCLUSIVE)!=0||(this.m_tests[r].Operation&e.Operator.RANGE_END_INCLUSIVE)!=0||(this.m_tests[r].Operation&e.Operator.RANGE_START_INCLUSIVE)!=0||(this.m_tests[r].Operation&e.Operator.RANGE_NOT_INCLUSIVE)!=0){t=false;if(this.EvaluateRANGE(this.m_tests[r]))return true}else if((this.m_tests[r].Operation&e.Operator.CALC)!=0){var n="calculation not supported as an input";throw new TypeError(n)}}}catch(t){}return t};e.prototype.EvaluateEQUALS=function(e){var r=e.Value;if(r.IsNumber&&this.m_value.IsNumber&&r.DValue==this.m_value.DValue){return true}else if(this.m_value.IsStringList&&r!=t.StringEntity.InvalidString&&this.m_value.StrValueList.indexOf(r.SValue)>-1){return true}else{if(r==this.m_value&&r!=t.StringEntity.InvalidString){return true}}if(r==t.StringEntity.NullString&&this.m_value==t.StringEntity.EmptyString)return true;return false};e.prototype.EvaluateNOT_EQUAL=function(t){return!this.EvaluateEQUALS(t)};e.prototype.EvaluateGT_LT=function(t){var r=t.Value.SValue;var n=this.m_value.SValue;var i=t.Value.IsNumber&&this.m_value.IsNumber;var a=this.m_value.DValue;var u=t.Value.DValue;if((t.Operation&e.Operator.LESS_THAN)!=0){if(i){return a<u}else{return n.localeCompare(r)<0}}else if((t.Operation&e.Operator.LESS_THAN_EQUAL)!=0){if(i){return a<=u}else{return n.localeCompare(r)<=0}}else if((t.Operation&e.Operator.GREATER_THAN)!=0){if(i){return a>u}else{return n.localeCompare(r)>0}}else if((t.Operation&e.Operator.GREATER_THAN_EQUAL)!=0){if(i){return a>=u}else{return n.localeCompare(r)>=0}}return false};e.prototype.EvaluateRANGE=function(t){var r=t.Value.SValue;var n=this.m_value.SValue;var i=0;var a=0;var u=0;var s=r.split(",");if(s.length==2){try{i=Number(s[0]);a=Number(s[1]);u=Number(n);if(isNaN(i)||isNaN(a)){throw new TypeError}}catch(r){var l=s[0].trim();var o=s[1].trim();if(!this.m_value.IsStringList){var f=this.m_value.SValue;if(f==null)return false;if((t.Operation&e.Operator.RANGE_INCLUSIVE)!=0){return f.localeCompare(l)>=0&&f.localeCompare(o)<=0}else if((t.Operation&e.Operator.RANGE_END_INCLUSIVE)!=0){return f.localeCompare(l)>0&&f.localeCompare(o)<=0}else if((t.Operation&e.Operator.RANGE_START_INCLUSIVE)!=0){return f.localeCompare(l)>=0&&f.localeCompare(o)<0}else if((t.Operation&e.Operator.RANGE_NOT_INCLUSIVE)!=0){return f.localeCompare(l)>0&&f.localeCompare(o)<0}else{return false}}else{for(f in this.m_value.StrValueList){if((t.Operation&e.Operator.RANGE_INCLUSIVE)!=0){if(f.localeCompare(l)>=0&&f.localeCompare(o)<=0)return true}else if((t.Operation&e.Operator.RANGE_END_INCLUSIVE)!=0){if(f.localeCompare(l)>0&&f.localeCompare(o)<=0)return true}else if((t.Operation&e.Operator.RANGE_START_INCLUSIVE)!=0){if(f.localeCompare(l)>=0&&f.localeCompare(o)<0)return true}else if((t.Operation&e.Operator.RANGE_NOT_INCLUSIVE)!=0){if(f.localeCompare(l)>0&&f.localeCompare(o)<0)return true}}return false}}if((t.Operation&e.Operator.RANGE_INCLUSIVE)!=0){return u>=i&&u<=a}else if((t.Operation&e.Operator.RANGE_END_INCLUSIVE)!=0){return u>i&&u<=a}else if((t.Operation&e.Operator.RANGE_START_INCLUSIVE)!=0){return u>=i&&u<a}else if((t.Operation&e.Operator.RANGE_NOT_INCLUSIVE)!=0){return u>i&&u<a}}return false};return e}();t.Decoder=e;(function(t){var e;(function(t){t[t["EQUALS"]=1]="EQUALS";t[t["NOT_EQUAL"]=2]="NOT_EQUAL";t[t["LESS_THAN"]=4]="LESS_THAN";t[t["LESS_THAN_EQUAL"]=8]="LESS_THAN_EQUAL";t[t["GREATER_THAN"]=16]="GREATER_THAN";t[t["GREATER_THAN_EQUAL"]=32]="GREATER_THAN_EQUAL";t[t["RANGE_INCLUSIVE"]=64]="RANGE_INCLUSIVE";t[t["RANGE_END_INCLUSIVE"]=128]="RANGE_END_INCLUSIVE";t[t["RANGE_START_INCLUSIVE"]=256]="RANGE_START_INCLUSIVE";t[t["RANGE_NOT_INCLUSIVE"]=512]="RANGE_NOT_INCLUSIVE";t[t["PYTHON"]=1024]="PYTHON";t[t["GETS"]=2048]="GETS";t[t["CHAIN"]=4096]="CHAIN";t[t["JAVASCRIPT"]=8192]="JAVASCRIPT";t[t["EXTERNAL"]=16384]="EXTERNAL";t[t["CALC"]=32768]="CALC"})(e=t.Operator||(t.Operator={}))})(e=t.Decoder||(t.Decoder={}))})(e=t.RuleEngine||(t.RuleEngine={}))})(e=t.PLM||(t.PLM={}))})(IYOPRO||(IYOPRO={}));var IYOPRO;(function(t){var e;(function(t){var e;(function(t){var e=function(t){__extends(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e}(Array);t.ResultColumn=e;var r=function(){function t(){}return t}();t.ResultColumns=r})(e=t.RuleEngine||(t.RuleEngine={}))})(e=t.PLM||(t.PLM={}))})(IYOPRO||(IYOPRO={}));var IYOPRO;(function(t){var e;(function(t){var e;(function(t){var e=function(){function t(){this.InputAttributes={};this.OutputAttributes=new Array;this.Results=new Array}return t}();t.DecisionTableRequestDataEventArgs=e;var r=function(){function r(){this.m_IsOpen=false;this.mapBaseIDtoTranslations=new t.HashMap;this.m_GlobalInputAttrsValues={};this.m_TableSet=new t.TableSet;this.iRecursingDepth=0;this.m_StateParameter=null;this.m_stringsMap=new t.StringMapper;this.m_logger=new t.Logger;this.m_Cache=new t.KnowledgeBaseCache;this.Init()}r.prototype.Init=function(){this.mapBaseIDtoTranslations=new t.HashMap;this.m_GlobalInputAttrsValues={};this.m_GlobalInputAttrsValues[t.StringEntity.EmptyString.SValue]=t.StringEntity.EmptyString;this.m_GlobalInputAttrsValues[t.StringEntity.NullString.SValue]=t.StringEntity.NullString};r.prototype.SendRequestExternalData=function(t,e){if(this.RequestExternalData){this.RequestExternalData(t,function(r){if(r==null)r=t.Results;e(r);return})}else{e(null)}};r.prototype.IsOpen=function(){return this.m_IsOpen};r.prototype.TableCount=function(){return this.m_TableSet.length};r.prototype.SetTablesTable=function(t){this.m_IsOpen=true;this.AddTablesTable(t)};r.prototype.AddTablesTable=function(t){var e=this;t.forEach(function(t){e.m_TableSet.AddTable(t)});this.m_TableSet.Initialize()};r.prototype.GetOutputAttrs=function(t){return this.m_TableSet.GetOutputAttrs(t)};r.prototype.GetInputAttrs=function(t){return this.m_TableSet.GetInputAttrs(t)};r.prototype.GetInputDependencies=function(t){return this.m_TableSet.GetInputDependencies(t)};r.prototype.GetAllPossibleOutputs=function(t,e){return this.m_TableSet.GetTable(t).GetAllPossibleOutputs(e)};r.prototype.TableIsGetAll=function(t){var e=this.m_TableSet.GetTable(t);return e.IsGetAll()};r.prototype.SetInputValue=function(t,e){var r=this.m_stringsMap.AddString(e);this.m_GlobalInputAttrsValues[t]=r};r.prototype.GetStringMapper=function(){return this.m_stringsMap};r.prototype.GetLogger=function(){return this.m_logger};r.prototype.SetLoglevel=function(t){this.m_logger.SetLoglevel(t)};r.prototype.EvaluateTable=function(t,e,r){if(!e){return this.EvaluateTable1(t)}if(typeof e==="boolean"){return this.EvaluateTable2(t,e)}if(r==undefined){return this.EvaluateTable3(t,e)}return this.EvaluateTable4(t,e,r)};r.prototype.EvaluateTable1=function(t){return this.EvaluateTable(t,this.TableIsGetAll(t))};r.prototype.EvaluateTable2=function(t,e){return this.EvaluateTableWithParam(t,"",e)};r.prototype.EvaluateTable3=function(t,e){return this.EvaluateTable(t,e,this.TableIsGetAll(t))};r.prototype.EvaluateTable4=function(t,e,r){return this.EvaluateTableWithParam(t,e,"",r)};r.prototype.EvaluateTableWithParam=function(t,e,r,n){if(typeof r==="boolean"){return this.EvaluateTableWithParam0(t,e,r)}if(n==undefined){return this.EvaluateTableWithParam1(t,e,r)}return this.EvaluateTableWithParam2(t,e,r,n)};r.prototype.EvaluateTableWithParam0=function(e,r,n){var i=P.defer();var a=new t.ResultColumns;var u=this.m_TableSet.GetTable(e);var s=u.GetOutputAttrsValues();var l=this;function o(t){var i=P.defer();l.EvaluateTableWithParam(e,t.Name,r,n).then(function(e){a[t.Name]=e;i.resolve(null)});return i.promise()}t.forEachPromise(s,o).then(function(t){i.resolve(a)});return i.promise()};r.prototype.EvaluateTableWithParam1=function(t,e,r){return this.EvaluateTableWithParam(t,e,r,this.TableIsGetAll(t))};r.prototype.EvaluateTableWithParam2=function(r,n,i,a){var u=this;var s=P.defer();var l=this;this.m_logger.Log(1,"Evaluating table "+r);this.m_logger.IncreaseIntent();try{var o=this.m_TableSet.GetTable(r);var f=new t.ResultColumn;if(this.iRecursingDepth==0){this.m_StateParameter=i}this.iRecursingDepth++;o.SetInputValues(this.m_GlobalInputAttrsValues);var h=function(t){var e=P.defer();setTimeout(function(){var t=o.EvaluateTable(n,a);e.resolve(t)},0);return e.promise()};var c=function(r){var s=P.defer();var l=function(i){var s=P.defer();if(o.HasExternal()==true){u.m_logger.Log(2,"Result requests external data");u.m_logger.IncreaseIntent();var l=new t.ResultColumn;var f=new t.ResultColumn;var h=function(t){var i=P.defer();if(t.indexOf("ext(")>=0){u.m_logger.Log(2,"processing result: "+t);var s=new e;var l=t.substr(4,t.length-5);s.CommandArguments=l.split(",");var h=u.m_Cache.GetResult(o,n,a,u.m_GlobalInputAttrsValues,r);if(h==null||s.CommandArguments.indexOf("Select")>=0){var c=o.GetAllInputAttrNames();c.forEach(function(t){var e=u.m_GlobalInputAttrsValues[t];s.InputAttributes[t]=e.SValue});s.OutputAttributes.push(n);try{u.SendRequestExternalData(s,function(t){u.m_Cache.SetResult(o,n,a,u.m_GlobalInputAttrsValues,r,t);t.forEach(function(t){f.push(""+t)});i.resolve(f)})}catch(t){h=new Array}}else{h.forEach(function(t){f.push(""+t)});i.resolve(f)}}else{f.push(t);i.resolve(f)}return i.promise()};t.forEachPromise(r,h).then(function(){r=new t.ResultColumn;f.forEach(function(t){r.push(t)});u.m_logger.DecreaseIntent();s.resolve(r)})}else{s.resolve(r)}return s.promise()};var f=function(e){var n=P.defer();if(o.HasChain()==true){u.m_logger.Log(2,"Result requests evaluation of another table");u.m_logger.IncreaseIntent();var a=new Array;var s=new Array;var l=function(e){var r=P.defer();if(e.indexOf("eval(")>=0){u.m_logger.Log(2,"processing result: "+e);var n=e.substr(5,e.length-6);var a=n.split(",");var l=new Array;var o="";if(a.length==2||a.length==3){var f=a[0].trim();var h=a[1].trim();u.EvaluateTableWithParam(f,h,i,u.TableIsGetAll(f)).then(function(e){e.forEach(function(t){s.push(t)});if(a.length==3&&s.length>0){var n=a[2].trim().toUpperCase();if(n=="TOLIST"){u.m_logger.Log(2,"Result post processing TOLIST");var i=t.CSV.MakeCSVString(s);s=new t.ResultColumn;s.push(i)}if(n=="MIN"||n=="MAX"){if(n=="MIN")u.m_logger.Log(2,"Result post processing MIN");if(n=="MAX")u.m_logger.Log(2,"Result post processing MAX");var l=null;var o=null;var f=Number.MAX_VALUE;var h=Number.MIN_VALUE;var c;var p;var v=true;s.forEach(function(t){if(l==null||l.toUpperCase()>t.toUpperCase())l=t;if(o==null||t.toUpperCase()>o.toUpperCase())o=t;var e=Number(t);if(isNaN(e)||!v){v=false}else{if(e<f){c=t;f=e}if(e>h){p=t;h=e}}});if(v){l=c;o=p}s=new t.ResultColumn;if(n=="MIN")s.push(l);if(n=="MAX")s.push(o)}}r.resolve(s)})}else{r.resolve(s)}}else{s.push(e);r.resolve(s)}return r.promise()};t.forEachPromise(r,l).then(function(e){r=new t.ResultColumn;if(e){e.forEach(function(t){r.push(t)})}u.m_logger.DecreaseIntent();n.resolve(r)})}else{n.resolve(r)}return n.promise()};var h=function(e){var n=P.defer();if(o.HasCalc()){u.m_logger.Log(2,"Result requests math calculation");u.m_logger.IncreaseIntent();var i=new Array;var a=new Array;r.forEach(function(e){if(e.indexOf("calc(")>=0){u.m_logger.Log(2,"processing result: "+e);var r="";try{var n=e.lastIndexOf(")");var i=e.substr(5,n-5);var s=t.Calculator.Calculate(i);var l=e.substr(n+1);if(!(l==null||l==="")&&l.length>0&&l[0]=="["&&l[l.length-1]=="]"){var o=l.substr(1,l.length-2);var f=Number(o);if(!isNaN(f)){var h=Math.pow(10,f);s=Math.round(s*h)/h;r=s+""}}else{r=s+""}}catch(t){u.m_logger.Log(3,"invalid math calculation - ignored")}a.push(r)}else{a.push(e)}});r=new t.ResultColumn;a.forEach(function(t){r.push(t)});u.m_logger.DecreaseIntent()}n.resolve(r);return n.promise()};u.iRecursingDepth--;l(null).then(f).then(h).then(function(t){s.resolve(t)});return s.promise()};var p=function(t){u.m_logger.DecreaseIntent();s.resolve(t)};h(null).then(c).then(p);return s.promise()}catch(t){return null}finally{}};r.prototype.ReverseEvaluateTable=function(t,e){var r={};try{var n=this.m_TableSet.GetTable(t);n.SetInputValues(this.m_GlobalInputAttrsValues);var i=n.GetInputAttrsTests();i.forEach(function(t){var i=n.EvaluateTable(t.Name,e,false);r[t.Name]=i})}catch(t){}return r};r.prototype.GetEvalParameter=function(){return this.m_StateParameter};r.prototype.Localize=function(t,e){return this.Translate(t,"",e)};r.prototype.DeLocalize=function(t){var e=this;var r=t;this.mapBaseIDtoTranslations.keys().forEach(function(n){var i=e.mapBaseIDtoTranslations.get(n);Object.keys(i).forEach(function(e){var a=i[e];if(a==t){r=n.SValue;return r}})});return r};r.prototype.Translate=function(e,r,n){var i=this;var a=e;var u=t.StringEntity.InvalidString;if(r.length==0)u=this.m_stringsMap.GetIDByString(e);else{this.mapBaseIDtoTranslations.keys().forEach(function(n){if(u!=t.StringEntity.InvalidString)return;var a=i.mapBaseIDtoTranslations.get(n);Object.keys(a).forEach(function(t){var i=a[t];if(t==r&&i==e){u=n;return}})})}if(u!=t.StringEntity.InvalidString){var s=this.mapBaseIDtoTranslations.get(u);if(s!=null){Object.keys(s).forEach(function(t){if(t==n){a=s[n];return a}})}}return a};r.prototype.SetLogger=function(t){this.m_logger=t};r.prototype.GetAllTableNames=function(){return[].concat(this.m_TableSet.GetTableNames())};return r}();t.KnowledgeBase=r})(e=t.RuleEngine||(t.RuleEngine={}))})(e=t.PLM||(t.PLM={}))})(IYOPRO||(IYOPRO={}));var IYOPRO;(function(t){var e;(function(t){var e;(function(t){var e=function(){function t(){}return t}();t.IOMDictionaryAttributeDictionary=e;var r=function(){function r(t){this.m_ROMContext=null;this.CreateROMDictionary(t)}r.prototype.CreateROMDictionary=function(t){this.m_ROMContext=t};r.prototype.LoadDictionary=function(r,n){var i=this;this.m_dict=new e;this.m_ROMContext.EvaluateTable(r).then(function(e){var r=e["Name"];for(var a=0;a<r.length;a++){var u=new t.ROMDictionaryAttribute;u.Name=r[a];if(e["DefaultValue"].length>0&&e["DefaultValue"][a]!="~")u.DefaultValue=e["DefaultValue"][a];if(e["Description"].length>0&&e["Description"][a]!="~")u.Description=e["Description"][a];if(e["RuleTable"].length>0&&e["RuleTable"][a]!="~")u.RuleTable=e["RuleTable"][a];if(e["ClearValues"].length>0&&e["ClearValues"][a]!="~"){var s=e["ClearValues"][a];var l=t.Converters.parseBool(s);if(l!=null)u.ClearOnAvailableValuesChanged=l}if(e["ClearValuesWithDefault"].length>0&&e["ClearValuesWithDefault"][a]!="~"){var s=e["ClearValuesWithDefault"][a];var l=t.Converters.parseBool(s);if(l!=null)u.ClearOnAvailableValuesChangedWithDefault=l}var o="";if(e["AttributeType"].length>0&&e["AttributeType"][a]!="~")o=e["AttributeType"][a].toUpperCase();if(o.length==0||o=="SINGLESELECT"){u.AttributeType=t.ROMDictionaryAttributeType.SINGLESELECT}else if(o=="MULTISELECT"){u.AttributeType=t.ROMDictionaryAttributeType.MULTISELECT}else if(o=="BOOLEAN"){u.AttributeType=t.ROMDictionaryAttributeType.BOOLEANSELECT}else if(o=="EDIT"){u.AttributeType=t.ROMDictionaryAttributeType.EDIT}else if(o=="STATIC"){u.AttributeType=t.ROMDictionaryAttributeType.STATIC}else if(o=="BUTTON"){u.AttributeType=t.ROMDictionaryAttributeType.BUTTON}else if(o=="INFORMATION"){u.AttributeType=t.ROMDictionaryAttributeType.INFORMATION}else if(o=="WARNING"){u.AttributeType=t.ROMDictionaryAttributeType.WARNING}else if(o=="ERROR"){u.AttributeType=t.ROMDictionaryAttributeType.ERROR}else if(o=="PICTURE"){u.AttributeType=t.ROMDictionaryAttributeType.PICTURE}else if(o=="URL"){u.AttributeType=t.ROMDictionaryAttributeType.URL}var f=i.m_ROMContext.GetAttribute(u.Name);if((f.length==0&&u.RuleTable.length==0||u.AttributeType==t.ROMDictionaryAttributeType.STATIC)&&u.DefaultValue.length>0&&u.DefaultValue!="~"){i.m_ROMContext.SetAttribute(u.Name,u.DefaultValue)}if(u.RuleTable.length>0)u.PossibleValues=i.m_ROMContext.GetPossibleValues(u.RuleTable,u.Name);i.m_dict[u.Name]=u}n()})};r.prototype.GetAllDictionaryAttrs=function(){return this.m_dict};return r}();t.ROMDictionary=r})(e=t.RuleEngine||(t.RuleEngine={}))})(e=t.PLM||(t.PLM={}))})(IYOPRO||(IYOPRO={}));var IYOPRO;(function(t){var e;(function(e){var r;(function(e){var r=function(r){__extends(n,r);function n(t,e,n){var i=r.call(this,t)||this;i.MAX_RECURSION=1e3;i.INVISPREFIX="^";i.DEFAULTPREFIX="@";i.DISABLEPREFIX="#";i.m_Logger=null;i.InitialEvaluation=false;i.InitializeEngine(e,n);return i}n.prototype.InitializeEngine=function(t,e){var r=this;var n=this.m_ROMContext.GetKnowledgeBase();if(n!=null){this.m_Logger=n.GetLogger();this.INVISPREFIX="^";this.DEFAULTPREFIX="@";this.DISABLEPREFIX="#";this.m_vEvalList=new Array;this.m_mapTriggers={};this.LoadDictionary(t,function(){Object.keys(r.m_dict).forEach(function(t){var e=r.m_dict[t];r.m_vEvalList.push(e);var i=n.GetInputDependencies(e.RuleTable);i.forEach(function(t){if(t in r.m_mapTriggers){var n=r.m_mapTriggers[t];if(n.indexOf(e.Name)<0)n.push(e.Name)}else if(t in r.m_dict){var i=new Array;i.push(e.Name);r.m_mapTriggers[t]=i}})});r.m_CurrentRecursion=0;r.m_vEvalListRecursChecker=new Array;r.OrderDictionary();e()})}else{e()}};n.prototype.OrderDictionary=function(){var t=this;this.m_CurrentRecursion++;var e=(new Array).concat(this.m_vEvalList);Object.keys(this.m_mapTriggers).forEach(function(e){var n=t.m_mapTriggers[e];if(n!=null&&n.length>0){var i=0;var a=false;for(i=0;i<t.m_vEvalList.length;i++){if(t.m_vEvalList[i].Name==e){a=true;break}}var u=i;if(a){for(r=0;r<n.length;r++){var s=n[r];if(s.length>0){var l=0;for(l=0;l<t.m_vEvalList.length;l++){if(t.m_vEvalList[l].Name==s)break}if(l<i)i=l}}if(u!=i){var o=t.m_vEvalList[u];t.m_vEvalList.splice(u,1);t.m_vEvalList.splice(i,0,o)}}}});for(var r=0;r<e.length;r++){if(e[r]!=this.m_vEvalList[r]&&this.m_CurrentRecursion<this.MAX_RECURSION){if(this.m_CurrentRecursion%2==0&&this.m_vEvalListRecursChecker.length>0){for(var n=0;n<this.m_vEvalListRecursChecker.length;n++){if(this.m_vEvalList[n]!=this.m_vEvalListRecursChecker[n]){this.OrderDictionary();break}}}else this.OrderDictionary();break}}if(this.m_CurrentRecursion%2==0){this.m_vEvalListRecursChecker=(new Array).concat(this.m_vEvalList)}};n.prototype.OrderDictionary_old=function(){var t=this;this.m_CurrentRecursion++;var e=(new Array).concat(this.m_vEvalList);Object.keys(this.m_mapTriggers).forEach(function(e){var r=t.m_mapTriggers[e];r.forEach(function(n){var i=0;var a=false;for(i=0;i<t.m_vEvalList.length;i++){if(t.m_vEvalList[i].Name==e){a=true;break}}var u=i;if(a){r.forEach(function(e){if(e.length>0){var r=0;for(r=0;r<t.m_vEvalList.length;r++){if(t.m_vEvalList[r].Name==e)break}if(r<i)i=r}});if(u!=i){var s=t.m_vEvalList[u];t.m_vEvalList.splice(u,1);t.m_vEvalList.splice(i,0,s)}}})});for(var r=0;r<e.length;r++){if(e[r]!=this.m_vEvalList[r]&&this.m_CurrentRecursion<this.MAX_RECURSION){if(this.m_CurrentRecursion%2==0&&this.m_vEvalListRecursChecker.length>0){for(var n=0;n<this.m_vEvalListRecursChecker.length;n++){if(this.m_vEvalList[n]!=this.m_vEvalListRecursChecker[n]){this.OrderDictionary();break}}}else this.OrderDictionary();break}}if(this.m_CurrentRecursion%2==0){this.m_vEvalListRecursChecker=this.m_vEvalList}};n.prototype.InitialEvaluate=function(t){var e=this;this.InitialEvaluation=true;this.EvaluateAll(function(){e.InitialEvaluation=false;t()})};n.prototype.EvaluateAll=function(e){var r=this;this.m_Logger.Log(1,"Evaluating all attributes without dependencies");this.m_Logger.IncreaseIntent();var n=this;function i(t){var e=P.defer();var r=n.GetSelectedValues(t);n.EvaluateForAttribute(t.Name,r,function(){e.resolve(t)},false,true);return e.promise()}t.PLM.RuleEngine.forEachPromise(this.m_vEvalList,i).then(function(){r.m_Logger.DecreaseIntent();e()})};n.prototype.GetSelectedValues=function(t){var r=new Array;var n=this.m_ROMContext.GetAttribute(t.Name,true);switch(t.AttributeType){case e.ROMDictionaryAttributeType.SINGLESELECT:r.push(n);break;case e.ROMDictionaryAttributeType.MULTISELECT:r=r.concat(e.CSV.SplitString(n));break;case e.ROMDictionaryAttributeType.BOOLEANSELECT:r.push(n);break;case e.ROMDictionaryAttributeType.EDIT:r.push(n);break;default:r.push(n);break}return r};n.prototype.EvaluateForAttribute=function(t,e,r,n,i){if(typeof e==="string"){this.EvaluateForAttribute1(t,e,r,n);return}this.EvaluateForAttribute2(t,e,r,n,i)};n.prototype.EvaluateForAttribute1=function(t,e,r,n){if(n===void 0){n=true}var i=new Array;i.push(e);this.EvaluateForAttribute(t,i,r,n)};n.prototype.EvaluateForAttribute2=function(t,r,n,i,a){var u=this;if(i===void 0){i=true}if(a===void 0){a=false}var s=false;if(t in this.m_dict){this.m_Logger.Log(1,"Evaluating attribute "+t);this.m_Logger.IncreaseIntent();this.m_dict[t].ChangedByUser=!a;var l=this;var o=function(e){if(i&&e){u.EvaluateDependencies(t,function(){l.m_Logger.DecreaseIntent();n()})}else{l.m_Logger.DecreaseIntent();n()}};switch(this.m_dict[t].AttributeType){case e.ROMDictionaryAttributeType.SINGLESELECT:this.EvalSingleSelect(t,r[0],o);break;case e.ROMDictionaryAttributeType.MULTISELECT:this.EvalMultiSelect(t,r,o);break;case e.ROMDictionaryAttributeType.BOOLEANSELECT:this.EvalBoolean(t,r[0],o);break;case e.ROMDictionaryAttributeType.EDIT:this.EvalEdit(t,r[0],o);break;case e.ROMDictionaryAttributeType.BUTTON:this.EvalButton(t,r[0],o);break;case e.ROMDictionaryAttributeType.INFORMATION:this.EvalInformation(t,r[0],o);break;case e.ROMDictionaryAttributeType.WARNING:this.EvalWarning(t,r[0],o);break;case e.ROMDictionaryAttributeType.ERROR:this.EvalError(t,r[0],o);break;case e.ROMDictionaryAttributeType.URL:this.EvalUrl(t,r[0],o);break;default:this.EvalSingleSelect(t,r[0],o);break}}};n.prototype.SetCheckedAttributeValue=function(t,e){if(t in this.m_dict){var r=this.m_dict[t];r.AvailableValues=[];r.AvailableValues.push(e);r.Valid=true;r.Enabled=true;r.ChangedByUser=false;this.m_ROMContext.SetAttribute(t,e);return true}else{return false}};n.prototype.EvalInformation=function(t,e,r){var n=this;var i=false;this.m_ROMContext.EvaluateTable(this.m_dict[t].RuleTable,t).then(function(e){var a=new Array;n.m_dict[t].Enabled=true;n.m_dict[t].Valid=true;var u=n.ParseOutPrefixes(e,a);n.m_dict[t].AvailableValues=a;r(i)})};n.prototype.EvalWarning=function(t,e,r){this.EvalInformation(t,e,r)};n.prototype.EvalError=function(t,e,r){var n=this;var i=false;this.m_ROMContext.EvaluateTable(this.m_dict[t].RuleTable,t).then(function(e){var a=new Array;n.m_dict[t].Enabled=true;n.m_dict[t].Valid=true;var u=n.ParseOutPrefixes(e,a);n.m_dict[t].AvailableValues=a;if(a.length>0)n.m_dict[t].Valid=false;r(i)})};n.prototype.EvalUrl=function(t,e,r){this.EvalInformation(t,e,r)};n.prototype.EvalSingleSelect=function(t,e,r){var n=this;var i=false;this.m_ROMContext.EvaluateTable(this.m_dict[t].RuleTable,t).then(function(a){var u=new Array;n.m_dict[t].Enabled=true;n.m_dict[t].Valid=true;var s=n.m_dict[t].ClearOnAvailableValuesChanged;var l=n.ParseOutPrefixes(a,u);if(s&&!n.InitialEvaluation){s=!n.AreStringListsEqual(n.m_dict[t].AvailableValues,u);if(s){e="";var o=n.m_dict[t].ClearOnAvailableValuesChangedWithDefault;if(o){for(var f=0;f<l.length;f++){if(l[f]==n.DEFAULTPREFIX&&f<u.length){e=u[f];break}}}}}n.m_dict[t].AvailableValues=u;var h=n.m_ROMContext.GetAttribute(t,true);n.m_Logger.Log(1,"Old attribute value: "+h);if(e.length==0){if(n.m_dict[t].DefaultValue.length>0){e=n.m_dict[t].DefaultValue}}if(u.length==1){e=u[0];n.m_dict[t].ChangedByUser=false}if((h.length==0||u.indexOf(h)<0)&&l.length>0){for(var c=0;c<l.length;c++){if(l[c].indexOf(n.DEFAULTPREFIX)>=0){e=u[c];n.m_dict[t].ChangedByUser=false;break}}}else if(u.length==0){n.m_dict[t].Enabled=false}if(l.length>0&&l[0].length>0&&l[0].indexOf(n.INVISPREFIX)>=0)n.m_dict[t].Visible=false;else n.m_dict[t].Visible=true;if(e.length>0&&u.indexOf(e)>=0){if(h!=e){n.m_Logger.Log(1,"New attribute value: "+e);n.m_ROMContext.SetAttribute(t,e);i=true}}else{if(n.m_dict[t].Enabled==true)n.m_dict[t].Valid=false;if(h!=""){n.m_Logger.Log(1,"New attribute set to empty");n.m_ROMContext.SetAttribute(t,"");i=true}else n.m_Logger.Log(1,"New attribute remains empty");n.m_dict[t].ChangedByUser=false}r(i)})};n.prototype.EvalMultiSelect=function(t,r,n){var i=this;var a=false;this.m_ROMContext.EvaluateTable(this.m_dict[t].RuleTable,t).then(function(u){var s=new Array;i.m_dict[t].Enabled=true;i.m_dict[t].Valid=true;var l=i.ParseOutPrefixes(u,s);i.m_dict[t].AvailableValues=s;var o=i.m_ROMContext.GetAttribute(t,false);i.m_Logger.Log(1,"Old attribute value: "+o);var f=e.CSV.SplitString(o);var h=new Array;if(r.length==0){if(i.m_dict[t].DefaultValue.length>0){r.push(i.m_dict[t].DefaultValue);i.m_dict[t].ChangedByUser=false}}if(s.length==1){h.push(s[0]);i.m_dict[t].ChangedByUser=false}else if(f.length==1&&(f[0].length==0||s.indexOf(f[0])<0)&&l.length>0){for(var c=0;c<l.length;c++){if(l[c].indexOf(i.DEFAULTPREFIX)>=0){h.push(s[c]);i.m_dict[t].ChangedByUser=false}}}else if(s.length==0){i.m_dict[t].Enabled=false}if(h.length==0&&f.length>0){for(var c=0;c<r.length;c++){if(s.indexOf(r[c])>=0){h.push(r[c])}}}var p=e.CSV.MakeCSVString(h);if(p!=o){i.m_Logger.Log(1,"New attribute value: "+p);i.m_ROMContext.SetAttribute(t,p);a=true}n(a)})};n.prototype.EvalBoolean=function(t,e,r){var n=this;var i=false;this.m_ROMContext.EvaluateTable(this.m_dict[t].RuleTable,t,false).then(function(a){var u=new Array;var s=n.ParseOutPrefixes(a,u);n.m_dict[t].AvailableValues=u;if(s.length>0&&s[0].length>0&&s[0][0]=="^")n.m_dict[t].Visible=false;else n.m_dict[t].Visible=true;var l=n.m_ROMContext.GetAttribute(t,false);n.m_Logger.Log(1,"Old attribute value: "+l);n.m_dict[t].Valid=true;n.m_dict[t].Enabled=true;if(e.length==0){if(n.m_dict[t].DefaultValue.length>0)e=n.m_dict[t].DefaultValue}if(u.length==0){if(l!="N"){n.m_Logger.Log(1,"New attribute value: N");n.m_ROMContext.SetAttribute(t,"N");i=true}n.m_dict[t].ChangedByUser=false;r(i);return}else if(u.length==1){if(u[0].length==0||u[0]=="N"){if(l!="N"){n.m_Logger.Log(1,"New attribute value: N");n.m_ROMContext.SetAttribute(t,"N");i=true}r(i);return}else if(u[0]=="YN"){if(l.length==0){n.m_Logger.Log(1,"New attribute value: Y");n.m_ROMContext.SetAttribute(t,"Y");i=true}}else if(u[0]=="YY"){if(l!="Y"){n.m_Logger.Log(1,"New attribute value: Y");n.m_ROMContext.SetAttribute(t,"Y");i=true}n.m_dict[t].ChangedByUser=false;n.m_dict[t].Enabled=false}else if(u[0]=="NN"){if(l!="N"){n.m_Logger.Log(1,"New attribute value: N");n.m_ROMContext.SetAttribute(t,"N");i=true}n.m_dict[t].ChangedByUser=false;n.m_dict[t].Enabled=false}else if(e.length==1){if(l!=e){n.m_Logger.Log(1,"New attribute value: "+e);n.m_ROMContext.SetAttribute(t,e);i=true}}}r(i);return})};n.prototype.EvalEdit=function(t,e,r){var n=this;var i=false;this.m_ROMContext.EvaluateTable(this.m_dict[t].RuleTable,t).then(function(a){var u=new Array;var s=n.m_ROMContext.GetAttribute(t,false);n.m_Logger.Log(1,"Old attribute value: "+s);var l=n.m_dict[t].ClearOnAvailableValuesChanged;var o=n.ParseOutPrefixes(a,u);if(l&&!n.InitialEvaluation){l=!n.AreStringListsEqual(n.m_dict[t].AvailableValues,u);if(l){e="";var f=n.m_dict[t].ClearOnAvailableValuesChangedWithDefault;if(f){for(var h=0;h<o.length;h++){if(o[h]==n.DEFAULTPREFIX&&h<u.length){e=u[h];break}}}}}n.m_dict[t].AvailableValues=u;n.m_dict[t].Enabled=true;n.m_dict[t].Valid=true;if(e.length==0){if(n.m_dict[t].DefaultValue.length>0)e=n.m_dict[t].DefaultValue}if(u.length==1){if(o[0].indexOf(n.DISABLEPREFIX)>=0){n.m_dict[t].Enabled=false;n.m_dict[t].ChangedByUser=false;if(s!=o[0]){n.m_Logger.Log(1,"New attribute value: "+o[0]);n.m_ROMContext.SetAttribute(t,o[0]);i=true}}else n.m_dict[t].Enabled=true;if(u[0].length>=1&&u[0][0]=="["){var c=0;var p=0;var v=0;var g=u[0];g=g.replace("[","");g=g.replace("]","");var m=g.split(",");if(!isNaN(Number(e)))c=Number(e);if(!isNaN(Number(m[0])))p=Number(m[0]);if(!isNaN(Number(m[1])))v=Number(m[1]);if(c<=v&&c>=p){if(s!=e){n.m_Logger.Log(1,"New attribute value: "+e);n.m_ROMContext.SetAttribute(t,e);i=true}}else if(c>v){if(s!=m[1]){n.m_Logger.Log(1,"New attribute value: "+m[1]);n.m_ROMContext.SetAttribute(t,m[1]);i=true}}else if(c<p){if(s!=m[0]){n.m_Logger.Log(1,"New attribute value: "+m[0]);n.m_ROMContext.SetAttribute(t,m[0]);i=true}}}else if(u[0].length==1&&u[0][0]=="Y"){if(s!=e){n.m_Logger.Log(1,"New attribute value: "+e);n.m_ROMContext.SetAttribute(t,e);i=true}}else if(u[0].length==1&&u[0][0]=="N"){if(s!=""){n.m_Logger.Log(1,"New attribute set to empty");n.m_ROMContext.SetAttribute(t,"");i=true}n.m_dict[t].ChangedByUser=false;n.m_dict[t].Enabled=false}else if(u[0].length==2&&u[0]=="YY"){if(s!=e){n.m_Logger.Log(1,"New attribute value: "+e);n.m_ROMContext.SetAttribute(t,e);i=true}n.m_dict[t].Valid=e.length>0}else{if(s!=u[0]){n.m_Logger.Log(1,"New attribute value: "+u[0]);n.m_ROMContext.SetAttribute(t,u[0]);i=true}n.m_dict[t].ChangedByUser=false}}else if(u.length==0){if(s!=e){n.m_Logger.Log(1,"New attribute value: "+e);n.m_ROMContext.SetAttribute(t,e);i=true}n.m_dict[t].ChangedByUser=false;n.m_dict[t].Enabled=false}else if(u.length==1&&u[0].length>0){if(s!=u[0]){n.m_Logger.Log(1,"New attribute value: "+u[0]);n.m_ROMContext.SetAttribute(t,u[0]);i=true}n.m_dict[t].ChangedByUser=false}else if(u.length>0){if(u.indexOf(e)>=0){if(s!=e){n.m_Logger.Log(1,"New attribute value: "+e);n.m_ROMContext.SetAttribute(t,e);i=true}}else{if(s!=e){n.m_Logger.Log(1,"New attribute set to empty");n.m_ROMContext.SetAttribute(t,"");i=true}n.m_dict[t].ChangedByUser=false}}if(o.length>0&&o[0].indexOf(n.INVISPREFIX)>=0)n.m_dict[t].Visible=false;else n.m_dict[t].Visible=true;r(i)})};n.prototype.EvalButton=function(t,e,r){var n=this;var i=false;var a=null;var u=this.m_ROMContext.GetAttribute(t,false);this.m_Logger.Log(1,"Old attribute value: "+u);var s=true;var l=t;if(e=="Click"){l=t+"_Click"}this.m_ROMContext.EvaluateTable(this.m_dict[t].RuleTable,l).then(function(a){if(e=="Click"){if(a==null||a.length==0){a=new Array;a.push(u);s=n.m_dict[t].Valid}}var l=new Array;var o=n.m_dict[t].ClearOnAvailableValuesChanged;var f=n.ParseOutPrefixes(a,l);if(o&&!n.InitialEvaluation){o=!n.AreStringListsEqual(n.m_dict[t].AvailableValues,l);if(o){e="";var h=n.m_dict[t].ClearOnAvailableValuesChangedWithDefault;if(h){for(var c=0;c<f.length;c++){if(f[c]==n.DEFAULTPREFIX&&c<l.length){e=l[c];break}}}}}n.m_dict[t].AvailableValues=l;n.m_dict[t].Enabled=true;n.m_dict[t].Valid=s;if(e.length==0){if(n.m_dict[t].DefaultValue.length>0)e=n.m_dict[t].DefaultValue}if(l.length==1){if(f[0].indexOf(n.DISABLEPREFIX)>=0){n.m_dict[t].Enabled=false;n.m_dict[t].ChangedByUser=false;if(u!=f[0]){n.m_Logger.Log(1,"New attribute value: "+f[0]);n.m_ROMContext.SetAttribute(t,f[0]);i=true}}else n.m_dict[t].Enabled=true;if(l[0].length==1&&l[0][0]=="Y"){if(u!=e){n.m_Logger.Log(1,"New attribute value: "+e);n.m_ROMContext.SetAttribute(t,e);i=true}}else if(l[0].length==2&&l[0]=="YY"){if(u!=e){n.m_Logger.Log(1,"New attribute value: "+e);n.m_ROMContext.SetAttribute(t,e);i=true}n.m_dict[t].Valid=e.length>0}else{if(u!=l[0]){n.m_Logger.Log(1,"New attribute value: "+l[0]);n.m_ROMContext.SetAttribute(t,l[0]);i=true}n.m_dict[t].ChangedByUser=false}}else if(l.length==0){if(u!=e){n.m_Logger.Log(1,"New attribute value: "+e);n.m_ROMContext.SetAttribute(t,e);i=true}n.m_dict[t].ChangedByUser=false;n.m_dict[t].Enabled=false}if(f.length>0&&f[0].indexOf(n.INVISPREFIX)>=0)n.m_dict[t].Visible=false;else n.m_dict[t].Visible=true;r(i)})};n.prototype.EvaluateDependencies=function(e,r){var n=this;if(e in this.m_mapTriggers){this.m_Logger.Log(1,"Evaluating dependencies");this.m_Logger.IncreaseIntent();var i=this.m_mapTriggers[e];var a=this;var u=function(t){var e=P.defer();var r=true;if(t in n.m_dict){var i=a.m_dict[t];var u=a.GetSelectedValues(i);var s=i.ChangedByUser;a.EvaluateForAttribute(t,u,function(){if(s){var r=true;var n=a.GetSelectedValues(i);if(n.length!=u.length)r=false;else for(var l=0;l<u.length;l++){if(n.indexOf(u[l])<0){r=false;break}}i.ChangedByUser=r}e.resolve(t)},true,true)}else{e.resolve(t)}return e.promise()};t.PLM.RuleEngine.forEachPromise(i,u).then(function(){n.m_Logger.DecreaseIntent();r()})}else{this.m_Logger.Log(1,"Attribute has no dependencies to evaluate");r()}};n.prototype.AreStringListsEqual=function(t,e){var r=new Array;r=r.concat(t);if(r.length!=e.length)return false;for(var n=0;n<e.length;n++){var i=e[n];var a=r.indexOf(i);if(a<0){return false}r.splice(a,1)}if(r.length!=0)return false;return true};n.prototype.ParseOutPrefixes=function(t,e){var r=t;var n=new Array;e.splice(0,e.length);var i=this;r.forEach(function(t){var r=""+t;var a="";if(r.indexOf(i.INVISPREFIX)>=0){a+=i.INVISPREFIX;r=r.replace(i.INVISPREFIX,"")}if(r.indexOf(i.DEFAULTPREFIX)>=0){a+=i.DEFAULTPREFIX;r=r.replace(i.DEFAULTPREFIX,"")}if(r.indexOf(i.DISABLEPREFIX)>=0){a+=i.DISABLEPREFIX;r=r.replace(i.DISABLEPREFIX,"")}n.push(a);e.push(r)});return n};n.prototype.GetAllDependencies=function(){var t=new Array;var e=this.m_ROMContext.GetKnowledgeBase();var r=e.GetAllTableNames();r.forEach(function(r){var n=e.GetOutputAttrs(r);var i=e.GetInputDependencies(r);i.forEach(function(e){n.forEach(function(n){var i=[n,e,r];t.push(i)})})});return t};return n}(e.ROMDictionary);e.LinearEngine=r})(r=e.RuleEngine||(e.RuleEngine={}))})(e=t.PLM||(t.PLM={}))})(IYOPRO||(IYOPRO={}));var IYOPRO;(function(t){var e;(function(t){var e;(function(t){var e=function(){function t(t,e){this.TimeStamp=new Date;this.Intend=0;this.Intend=t;this.Value=e}t.prototype.GetLogAsText=function(){var t="";return this.getTimeStamp(this.TimeStamp)+" "+this.padLeft(this.Intend*2)+this.Value};t.prototype.padLeft=function(t,e){return Array(t).join(e||" ")};t.prototype.getTimeStamp=function(t){return t.getMonth()+1+"/"+t.getDate()+"/"+t.getFullYear()+" "+t.getHours()+":"+(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+":"+(t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds())};return t}();t.LogEntry=e;var r=function(){function t(){this.Entries=new Array;this.Intent=0;this.LogLevel=0}t.prototype.IncreaseIntent=function(){this.Intent++};t.prototype.DecreaseIntent=function(){this.Intent--;if(this.Intent<0)this.Intent=0};t.prototype.ResetIntent=function(){this.Intent=0};t.prototype.Log=function(t,r){if(t>this.LogLevel)return;this.Entries.push(new e(this.Intent,r))};t.prototype.SetLoglevel=function(t){this.LogLevel=t};t.prototype.GetLogAsText=function(){var t="";this.Entries.forEach(function(e){if(!(t==null||t==="")){t=t+"\n"}t=t+e.GetLogAsText()});return t};t.prototype.SetInvalidAttributeNames=function(t){this.invalidAttributeNames=t};t.prototype.GetInvalidAttributeInfo=function(){var t={firstName:null,otherNames:new Array};if(this.invalidAttributeNames==null||this.invalidAttributeNames.length==0)return t;this.invalidAttributeNames.forEach(function(e){if(t.firstName==null)t.firstName=e;else{t.otherNames.push(e)}});return t};t.prototype.IsLogging=function(){return this.LogLevel>0};return t}();t.Logger=r})(e=t.RuleEngine||(t.RuleEngine={}))})(e=t.PLM||(t.PLM={}))})(IYOPRO||(IYOPRO={}));var IYOPRO;(function(t){var e;(function(t){var e;(function(t){var e=function(){function e(e){this.m_KnowledgeBase=null;this.m_guid=t.Guid.newGuid();this.m_parent=null;this.m_children=new Array;this.m_attrs={};this.m_bChanged=true;this.m_id=null;if(!(e==null))this.CreateROMNode(e)}e.prototype.CreateROMNode=function(t){t=t.replace(" ","_");this.m_id=t};e.prototype.GetParent=function(){return this.m_parent};e.prototype.GetKnowledgeBase=function(){if(this.m_KnowledgeBase!=null)return this.m_KnowledgeBase;if(this.GetParent()!=null)return this.GetParent().GetKnowledgeBase();this.m_KnowledgeBase=new t.KnowledgeBase;return this.m_KnowledgeBase};e.prototype.EvaluateTable=function(t,e,r){if(!e){return this.EvaluateTable1(t)}if(r==null){return this.EvaluateTable2(t,e)}return this.EvaluateTable3(t,e,r)};e.prototype.EvaluateTable1=function(e){var r=new t.ResultColumns;var n=this.GetKnowledgeBase();if(n!=null){this.LoadInputs(e);return n.EvaluateTable(e)}return P.defer().resolve(r).promise()};e.prototype.EvaluateTable2=function(t,e){var r=new Array;var n=this.GetKnowledgeBase();if(n!=null){this.LoadInputs(t);return n.EvaluateTable(t,e)}return P.defer().resolve(r).promise()};e.prototype.EvaluateTable3=function(t,e,r){var n=new Array;var i=this.GetKnowledgeBase();if(i!=null){this.LoadInputs(t);return i.EvaluateTable(t,e,r)}return P.defer().resolve(n).promise()};e.prototype.LoadInputs=function(t){var e=this;var r=new Array;var n=this.GetKnowledgeBase();if(n!=null){r=n.GetInputDependencies(t);r.forEach(function(t){var r=e.GetATableInputValue(t);n.SetInputValue(t,r)})}return r};e.prototype.GetATableInputValue=function(t){var e;if(t.indexOf("xpath(")>=0){var r=t.substr(6,t.length-7);e=""}else if(t=="CLASSID"){e=this.GetROMObjectID()}else{e=this.GetAttribute(t)}return e};e.prototype.GetAttribute=function(t,e,r){if(typeof e==="boolean"||e==null){return this.GetAttribute1(t,e)}return this.GetAttribute2(t,e,r)};e.prototype.GetAttribute1=function(t,e){if(e===void 0){e=false}return this.GetAttribute2(t,"value",e)};e.prototype.GetAttribute2=function(t,e,r){var n="";var i=false;if(t in this.m_attrs){var a=this.m_attrs[t];if(e in a){n=a[e];i=true}}if(!r&&!i){var u=this.GetParent();if(u!=null){n=u.GetAttribute2(t,e,r)}}return n};e.prototype.SetAttribute=function(t,e,r){if(r==null){return this.SetAttribute1(t,e)}return this.SetAttribute2(t,e,r)};e.prototype.SetAttribute1=function(t,e){return this.SetAttribute2(t,"value",e)};e.prototype.SetAttribute2=function(t,e,r){var n=true;if(!(t in this.m_attrs)){this.m_attrs[t]={}}this.m_attrs[t][e]=r;this.m_bChanged=n;return n};e.prototype.GetPossibleValues=function(t,e){var r=new Array;var n=this.GetKnowledgeBase();if(n!=null){r=n.GetAllPossibleOutputs(t,e)}return r};e.prototype.GetROMObjectID=function(){return this.m_id};e.prototype.GetRoot=function(){var t=this;do{if(t!=null)t=t.GetParent()}while(t!=null);if(t==null)t=this;return t};e.prototype.GetAllAttributes=function(){return this.m_attrs};e.prototype.SetAllAttributes=function(t){this.m_attrs=t};e.prototype.GetCachedString=function(e,r){if(r===void 0){r=false}var n=this.m_KnowledgeBase.GetStringMapper().GetIDByString(e);if(r&&n==t.StringEntity.InvalidString){n=this.m_KnowledgeBase.GetStringMapper().AddString(e)}return n};return e}();t.ROMNode=e})(e=t.RuleEngine||(t.RuleEngine={}))})(e=t.PLM||(t.PLM={}))})(IYOPRO||(IYOPRO={}));var IYOPRO;(function(t){var e;(function(e){var r;(function(e){var r;(function(t){t[t["Input"]=0]="Input";t[t["Output"]=1]="Output"})(r=e.LogicTableColumnType||(e.LogicTableColumnType={}));var n=function(){function t(t,e){this.Column=t;this.Value=e}return t}();e.LogicTableCell=n;var i=function(t){__extends(e,t);function e(e){var r=t.apply(this,e)||this;r.Depth=0;r.Attribute=r;return r}e.create=function(){var t=Object.create(e.prototype);t.Attribute=t;return t};e.prototype.Set=function(t,e){if(typeof t==="string"){return this.Set2(t,e)}return this.Set1(t,e)};e.prototype.Set1=function(t,e){return this.Set2(t.UUID,e)};e.prototype.Set2=function(t,e){var r=this.Get(t);if(r==null){r=new n(t,e);this.Attribute.push(r);return r}r.Value=e;return r};e.prototype.Add=function(t,e){return this.Set(t,e)};e.prototype.Get=function(t){if(typeof t==="string"){return this.Get2(t)}return this.Get1(t)};e.prototype.Get1=function(t){return this.Get(t.UUID)};e.prototype.Get2=function(t){for(var e=0;e<this.Attribute.length;e++){if(this.Attribute[e].Column==t)return this.Attribute[e]}return null};e.prototype.GetAttribute=function(t){for(var e=0;e<this.Attribute.length;e++){if(this.Attribute[e].Column==t)return this.Attribute[e]}return this.Add(t,null)};return e}(Array);e.LogicTableRow=i;var a=function(){function t(){this.UUID="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=Math.random()*16|0,r=t=="x"?e:e&3|8;return r.toString(16)});this.ColumnType=r.Input}return t}();e.LogicTableColumn=a;var u=function(t){__extends(e,t);function e(e){return t.apply(this,e)||this}e.create=function(){return Object.create(e.prototype)};e.prototype.Get=function(t){this.forEach(function(e){if(e.UUID==t)return e});return null};return e}(Array);e.LogicTableColumns=u;var s=function(n){__extends(s,n);function s(t){var e=n.apply(this,t)||this;e.Name="";e.GetAll=false;e.Columns=u.create();e.NameRow=i.create();e.SupressColumnsChanged=false;e._suppressNotification=false;e._hadNotifications=false;return e}s.prototype.Set=function(t){var e=this;this._hadNotifications=false;this._suppressNotification=true;this.splice(0,length);t.forEach(function(t){e.push(t)});this._suppressNotification=false};s.create=function(){var t=Object.create(s.prototype);t.Reset();return t};s.prototype.Reset=function(){this.Columns=u.create();this.splice(0,length);this.NameRow=i.create();this.push(this.NameRow)};s.prototype.InsertRow=function(t){if(t===void 0){t=null}var e=i.create();if(t==null||this.indexOf(t)<0){this.push(e);return e}this.splice(this.indexOf(t),0,e);return e};s.prototype.SetAt=function(t,e,r){if(typeof t==="string"){this.SetAt2(t,e,r);return}return this.SetAt1(t,e,r)};s.prototype.SetAt1=function(t,e,r){this.SetAt2(t.UUID,e,r)};s.prototype.SetAt2=function(t,e,r){e++;if(this.length<=e){for(var n=this.length;n<e+1;n++)this.push(i.create())}this[e].Set(t,r)};s.prototype.AddInputColumn=function(t){var e=new a;e.Variable=t;e.ColumnType=r.Input;this.NameRow.Add(e.UUID,t);var n=-1;for(var i=0;i<this.Columns.length;i++){if(this.Columns[i].ColumnType==r.Output){n=i;break}}if(n>=0)this.Columns.splice(n,0,e);else this.Columns.push(e);return e};s.prototype.AddOutputColumn=function(t){var e=new a;e.Variable=t;e.ColumnType=r.Output;this.NameRow.Add(e.UUID,t);this.Columns.push(e);return e};s.prototype.SetColumns=function(t){var e=this;this.SupressColumnsChanged=true;this.Reset();t.forEach(function(t){e.NameRow.Add(t.UUID,t.Variable);e.Columns.push(t)});this.SupressColumnsChanged=false};s.prototype.DeleteColumn=function(t){var e=this.Columns.indexOf(t);if(e>=0){this.Columns.splice(e,1)}};s.MapTable=function(n,i){var a=n.GetStringMapper();var u=n.GetLogger();var s=new e.RuleColumns;var l=new e.RuleColumns;i.Columns.forEach(function(n){var u=new e.RuleCells;for(var o=1;o<i.length;o++){var f=new e.RuleCell;var h=i[o];var c=h.Get(n);if(c!=null){var p;var v=e.CSV.SplitString(c.Value);v.forEach(function(u){var s="";if(n.ColumnType==r.Input){var l=i.GetValuesForCell(u,p,s);p=l["operation"];s=l["resttext"]}else{var l=i.GetValuesForCell(u,p,s);p=l["operation"];s=l["resttext"];if((p&t.PLM.RuleEngine.Decoder.Operator.GREATER_THAN)==t.PLM.RuleEngine.Decoder.Operator.GREATER_THAN){p&=~t.PLM.RuleEngine.Decoder.Operator.GREATER_THAN;p|=t.PLM.RuleEngine.Decoder.Operator.EQUALS;s=">"+s}if((p&t.PLM.RuleEngine.Decoder.Operator.GREATER_THAN_EQUAL)==t.PLM.RuleEngine.Decoder.Operator.GREATER_THAN_EQUAL){p&=~t.PLM.RuleEngine.Decoder.Operator.GREATER_THAN_EQUAL;p|=t.PLM.RuleEngine.Decoder.Operator.EQUALS;s=">="+s}if((p&t.PLM.RuleEngine.Decoder.Operator.LESS_THAN)==t.PLM.RuleEngine.Decoder.Operator.LESS_THAN){p&=~t.PLM.RuleEngine.Decoder.Operator.LESS_THAN;p|=t.PLM.RuleEngine.Decoder.Operator.EQUALS;s="<"+s}if((p&t.PLM.RuleEngine.Decoder.Operator.LESS_THAN_EQUAL)==t.PLM.RuleEngine.Decoder.Operator.LESS_THAN_EQUAL){p&=~t.PLM.RuleEngine.Decoder.Operator.LESS_THAN;p|=t.PLM.RuleEngine.Decoder.Operator.EQUALS;s="<="+s}if((p&t.PLM.RuleEngine.Decoder.Operator.NOT_EQUAL)==t.PLM.RuleEngine.Decoder.Operator.NOT_EQUAL){p&=~t.PLM.RuleEngine.Decoder.Operator.NOT_EQUAL;p|=t.PLM.RuleEngine.Decoder.Operator.EQUALS;s="!="+s}if((p&t.PLM.RuleEngine.Decoder.Operator.RANGE_NOT_INCLUSIVE)==t.PLM.RuleEngine.Decoder.Operator.RANGE_NOT_INCLUSIVE){p&=~t.PLM.RuleEngine.Decoder.Operator.RANGE_NOT_INCLUSIVE;p|=t.PLM.RuleEngine.Decoder.Operator.EQUALS;s="["+s+"]"}if((p&t.PLM.RuleEngine.Decoder.Operator.RANGE_END_INCLUSIVE)==t.PLM.RuleEngine.Decoder.Operator.RANGE_END_INCLUSIVE){p&=~t.PLM.RuleEngine.Decoder.Operator.RANGE_END_INCLUSIVE;p|=t.PLM.RuleEngine.Decoder.Operator.EQUALS;s="["+s+")"}if((p&t.PLM.RuleEngine.Decoder.Operator.RANGE_INCLUSIVE)==t.PLM.RuleEngine.Decoder.Operator.RANGE_INCLUSIVE){p&=~t.PLM.RuleEngine.Decoder.Operator.RANGE_INCLUSIVE;p|=t.PLM.RuleEngine.Decoder.Operator.EQUALS;s="("+s+")"}if((p&t.PLM.RuleEngine.Decoder.Operator.RANGE_START_INCLUSIVE)==t.PLM.RuleEngine.Decoder.Operator.RANGE_START_INCLUSIVE){p&=~t.PLM.RuleEngine.Decoder.Operator.RANGE_START_INCLUSIVE;p|=t.PLM.RuleEngine.Decoder.Operator.EQUALS;s="("+s+"]"}}var o=a.AddString(s);var h=new e.RuleCellValue;h.Value=o;h.Operation=p;f.Values.push(h)})}u.push(f)}var g=new e.RuleColumn(n.Variable,u);if(n.ColumnType==r.Input)s.push(g);else l.push(g)});var o=new Array;var f=new e.RuleTable(s,l,o,a,u,i.Name,i.GetAll);return f};s.CreateLogic=function(t){var r=this;var n=new e.ROMNode("Root");var i=n.GetKnowledgeBase();var a=i.GetStringMapper();var u=new Array;t.forEach(function(t){var e=r.MapTable(i,t);u.push(e)});i.SetTablesTable(u);return n};s.CreateEngine=function(t,r,n){return new e.LinearEngine(t,r,n)};s.prototype.GetValuesForCell=function(e,r,n){var r=t.PLM.RuleEngine.Decoder.Operator.EQUALS;var n="";var i={operation:r,resttext:n};if(e.length==0){return i}switch(e[0]){case"<":if(e.length>=2&&e[1]=="="){r=t.PLM.RuleEngine.Decoder.Operator.LESS_THAN_EQUAL;n=e.substr(2)}else if(e.length>=2&&e[1]==">"){r=t.PLM.RuleEngine.Decoder.Operator.NOT_EQUAL;n=e.substr(2)}else{r=t.PLM.RuleEngine.Decoder.Operator.LESS_THAN;n=e.substr(1)}break;case">":if(e.length>=2&&e[1]=="="){r=t.PLM.RuleEngine.Decoder.Operator.GREATER_THAN_EQUAL;n=e.substr(2)}else{r=t.PLM.RuleEngine.Decoder.Operator.GREATER_THAN;n=e.substr(1)}break;case"(":if(e.length>=2&&e[e.length-1]==")"){r=t.PLM.RuleEngine.Decoder.Operator.RANGE_INCLUSIVE}else{r=t.PLM.RuleEngine.Decoder.Operator.RANGE_START_INCLUSIVE}n=e.substr(1,e.length-2);break;case"[":if(e.length>=2&&e[e.length-1]=="]"){r=t.PLM.RuleEngine.Decoder.Operator.RANGE_NOT_INCLUSIVE}else{r=t.PLM.RuleEngine.Decoder.Operator.RANGE_END_INCLUSIVE}n=e.substr(1,e.length-2);break;case"!":if(e.length>=2&&e[1]=="="){r=t.PLM.RuleEngine.Decoder.Operator.NOT_EQUAL;n=e.substr(2)}break;default:if(e.indexOf("eval(")>=0)r=t.PLM.RuleEngine.Decoder.Operator.CHAIN;else if(e.indexOf("ext(")>=0)r=t.PLM.RuleEngine.Decoder.Operator.EXTERNAL;else r=t.PLM.RuleEngine.Decoder.Operator.EQUALS;n=e;break}if(e.indexOf("get(")>=0)r|=t.PLM.RuleEngine.Decoder.Operator.GETS;if(e.indexOf("py(")>=0)r|=t.PLM.RuleEngine.Decoder.Operator.PYTHON;if(e.indexOf("calc(")>=0)r|=t.PLM.RuleEngine.Decoder.Operator.CALC;if(e.indexOf("js(")>=0)r|=t.PLM.RuleEngine.Decoder.Operator.JAVASCRIPT;i={operation:r,resttext:n};return i};s.prototype.AddToKnowledgeBase=function(t){var e=s.MapTable(t,this);var r=new Array;r.push(e);t.AddTablesTable(r)};s.CreateLogger=function(){return new e.Logger};return s}(Array);e.LogicTable=s})(r=e.RuleEngine||(e.RuleEngine={}))})(e=t.PLM||(t.PLM={}))})(IYOPRO||(IYOPRO={}));var IYOPRO;(function(t){var e;(function(t){var e;(function(t){var e=function(t){__extends(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}e.prototype.GetResult=function(t,e,r,n,i){var a=this.GetOutputAttributeCacheData(t,e,r);if(a==null)return null;return a.GetResult(t,n,i)};e.prototype.GetOutputAttributeCacheData=function(t,e,r){var n=this.get(t);if(!n)return null;return n.GetOutputAttributeCacheData(e,r)};e.prototype.SetResult=function(t,e,n,i,a,u){var s=this.get(t);if(!s){s=new r;this.put(t,s)}s.SetResult(t,e,n,i,a,u)};return e}(t.HashMap);t.KnowledgeBaseCache=e;var r=function(t){__extends(e,t);function e(){return t.call(this)||this}e.prototype.GetOutputAttributeCacheData=function(t,e){var r=this.get(t);if(!r)return null;return r.GetOutputAttributeCacheData(e)};e.prototype.SetResult=function(t,e,r,i,a,u){var s=this.get(e);if(!s){s=new n;this.put(e,s)}s.SetResult(t,r,i,a,u)};return e}(t.HashMap);t.RuleTableCache=r;var n=function(t){__extends(e,t);function e(){return t.call(this)||this}e.prototype.GetOutputAttributeCacheData=function(t){var e=this.get(t);if(!e)return null;return e};e.prototype.SetResult=function(t,e,r,n,a){var u=this.get(e);if(!u){u=new i;this.put(e,u)}u.SetResult(t,r,n,a)};return e}(t.HashMap);t.OutputAttributeCache=n;var i=function(){function e(){this.CachhedInput={};this.Output=null;this.TableResults=null}e.prototype.GetResult=function(e,r,n){var i=e.GetInputAttrsTests();for(var a=0;a<i.length;a++){var u=i[a];var s=t.StringEntity.InvalidString;var l=u.Name;if(l in r){var s=r[l];var o=s.SValue;if(o.indexOf("get(")>=0){var f=t.Decoder.ParseStringForGets(r,e.GetStringMapper(),s,false);s=e.GetStringMapper().GetIDByString(f)}}if(!(l in this.CachhedInput)){return null}if(this.CachhedInput[l]!=s){return null}}if(this.TableResults.length!=n.length){return null}for(var a=0;a<this.TableResults.length;a++)if(this.TableResults[a]!=n[a]){return null}return this.Output};e.prototype.SetResult=function(e,r,n,i){var a=this;this.CachhedInput={};var u=e.GetInputAttrsTests();u.forEach(function(n){var i=t.StringEntity.InvalidString;var u=n.Name;if(u in r){i=r[u];var s=i.SValue;if(i!=t.StringEntity.InvalidString&&s.indexOf("get(")>=0){var l=t.Decoder.ParseStringForGets(r,e.GetStringMapper(),i,false);i=e.GetStringMapper().GetIDByString(l)}}a.CachhedInput[u]=i});this.TableResults=(new Array).concat(n);this.Output=(new Array).concat(i)};return e}();t.OutputAttributeCacheData=i})(e=t.RuleEngine||(t.RuleEngine={}))})(e=t.PLM||(t.PLM={}))})(IYOPRO||(IYOPRO={}));var IYOPRO;(function(t){var e;(function(t){var e;(function(t){var e;(function(t){t[t["SINGLESELECT"]=0]="SINGLESELECT";t[t["MULTISELECT"]=1]="MULTISELECT";t[t["BOOLEANSELECT"]=2]="BOOLEANSELECT";t[t["EDIT"]=3]="EDIT";t[t["STATIC"]=4]="STATIC";t[t["BUTTON"]=5]="BUTTON";t[t["INFORMATION"]=6]="INFORMATION";t[t["WARNING"]=7]="WARNING";t[t["ERROR"]=8]="ERROR";t[t["PICTURE"]=9]="PICTURE";t[t["URL"]=10]="URL"})(e=t.ROMDictionaryAttributeType||(t.ROMDictionaryAttributeType={}));var r=function(){function t(){this.Name="";this.DefaultValue="";this.Description="";this.RuleTable="";this.AttributeType=e.SINGLESELECT;this.PossibleValues=new Array;this.AvailableValues=new Array;this.ClearOnAvailableValuesChanged=false;this.ClearOnAvailableValuesChangedWithDefault=false;this.Visible=true;this.Valid=false;this.ChangedByUser=false;this.Enabled=true}return t}();t.ROMDictionaryAttribute=r})(e=t.RuleEngine||(t.RuleEngine={}))})(e=t.PLM||(t.PLM={}))})(IYOPRO||(IYOPRO={}));var IYOPRO;(function(t){var e;(function(t){var e;(function(t){var e=function(){function e(){this.m_tables={};this.m_inputAttrsByTable={};this.m_outputAttrsByTable={};this.m_inputDependenciesByTable={}}e.prototype.Initialize=function(){var t=this;Object.keys(this.m_tables).forEach(function(e){t.LoadTableInfo(t.m_tables[e])})};e.prototype.AddTable=function(t,e,r,n,i,a,u){if(u==undefined){this.AddTable2(t);return}this.AddTable1(t,e,r,n,i,a,u)};e.prototype.AddTable1=function(e,r,n,i,a,u,s){this.AddTable2(new t.RuleTable(e,r,n,i,a,u,s))};e.prototype.AddTable2=function(t){this.m_tables[t.m_Name]=t};e.prototype.LoadTableInfo=function(e){var r=this;var n=e.GetAllInputDependencies();var i=e.GetAllInputAttrNames();if(i.length>0)this.m_inputAttrsByTable[e.m_Name]=i;i.forEach(function(r){var i=e.GetAllPossibleInputs(r);i.forEach(function(e){if(e==null)return;if(e.indexOf("get(")>=0){var r=e;while(r.indexOf("get(")>=0){r=r.substr(r.indexOf("get("));var i=t.Calculator.GetCommandArgs(r,"get")[0];if(n.indexOf(i)<0){n.push(i)}r=r.substr(4)}}})});var a=e.GetAllOutputAttrNames();if(a.length>0)this.m_outputAttrsByTable[e.m_Name]=a;a.forEach(function(i){var a=e.GetAllPossibleOutputs(i);a.forEach(function(e){if(e==null)return;if(e.indexOf("get(")>=0){var i=e;while(i.indexOf("get(")>=0){i=i.substr(i.indexOf("get("));var a=t.Calculator.GetCommandArgs(i,"get")[0];if(n.indexOf(a)<0){n.push(a)}i=i.substr(4)}}if(e.indexOf("eval(")>=0){var u=t.Calculator.GetCommandArgs(e,"eval");if(u.length>0){var s=r.ParseTablesAndChainsForInputs(u[0]);s.forEach(function(t){if(n.indexOf(t)<0){n.push(t)}})}}})});if(n.length>0)this.m_inputDependenciesByTable[e.m_Name]=n};e.prototype.ParseTablesAndChainsForInputs=function(t){var e=this;var r=new Array;var n=null;try{n=this.m_tables[t];if(!n)throw new TypeError}catch(e){throw new TypeError("Die folgende Tabelle existiert nicht: "+t)}r=n.GetAllInputDependencies();var i=n.GetAllOutputAttrNames();i.forEach(function(t){var i=n.GetAllPossibleOutputs(t);i.forEach(function(t){if(t.indexOf("eval(")>=0){var n=t.substr(5,t.length-6);var i=n.split(",");if(i.length>0){var a=e.ParseTablesAndChainsForInputs(i[0]);a.forEach(function(t){if(r.indexOf(t)<0){r.push(t)}})}}})});return r};Object.defineProperty(e.prototype,"length",{get:function(){return Object.keys(this.m_tables).length},enumerable:true,configurable:true});e.prototype.GetTable=function(e){if(e in this.m_tables)return this.m_tables[e];var r=new t.RuleTable(new t.RuleColumns,new t.RuleColumns,new Array,null,null,e,false);this.m_tables[e]=r;return r};e.prototype.GetOutputAttrs=function(t){return this.m_outputAttrsByTable[t]};e.prototype.GetInputAttrs=function(t){return this.m_inputAttrsByTable[t]};e.prototype.GetInputDependencies=function(t){if(t in this.m_inputDependenciesByTable)return this.m_inputDependenciesByTable[t];return new Array};e.prototype.GetTableNames=function(){return Object.keys(this.m_tables)};return e}();t.TableSet=e})(e=t.RuleEngine||(t.RuleEngine={}))})(e=t.PLM||(t.PLM={}))})(IYOPRO||(IYOPRO={}));
(function () {
  var $trigger = jQuery('[data-offcanvas-trigger]');
  var $offcanvas = jQuery('[data-offcanvas]');
  var $overlay = jQuery('.overlay__dark__transparent');
  var $html = jQuery('html');

  $trigger.click(function(e) {
    e.preventDefault();

    // close current
    $offcanvas.removeClass('tdf-offcanvas--visible');

    // open
    var identifier = jQuery(this).attr('data-offcanvas-trigger');

    $offcanvas.filter('[data-offcanvas="'+ identifier +'"]').toggleClass('tdf-offcanvas--visible');

    $overlay.addClass('offcanvas-overlay-'+identifier);
    $overlay.addClass('offcanvas-open');

    $html.addClass('overflow-hidden');

    jQuery(document).trigger('tdf.offcanvas.open', identifier);
  });

  $offcanvas.find('[data-close]').click(function() {
    jQuery(this).closest('[data-offcanvas]').removeClass('tdf-offcanvas--visible');

    $overlay.removeClass('offcanvas-overlay-user offcanvas-overlay-basket');
    $overlay.removeClass('offcanvas-open');

    $html.removeClass('overflow-hidden');

    jQuery(document).trigger('tdf.offcanvas.close');
  });

  $overlay.click(function() {
    $offcanvas.removeClass('tdf-offcanvas--visible');
    jQuery(this).removeClass('offcanvas-overlay-user offcanvas-overlay-basket');
    jQuery(this).removeClass('offcanvas-open');

    $html.removeClass('overflow-hidden');

    jQuery(document).trigger('tdf.offcanvas.close');
  });


  //basket content


  jQuery('.basket__item__col__cad__main__cb').find('input:checkbox').change(function() {
    var thisChecked = jQuery(this)[0].checked;


    if(thisChecked) {
      //gearsChecked++;
    } else {
      //gearsChecked--;
    }

    /*if(gearsChecked > 0) {
      jQuery('.comparison__sidebar__download__button').prop("disabled", false);
      jQuery('.comparison__sidebar__download').removeClass('download-disabled');
    } else {
      jQuery('.comparison__sidebar__download__button').prop("disabled", true);
      jQuery('.comparison__sidebar__download').addClass('download-disabled');
    }

    jQuery('#' + stickyHeaderCheckbox).prop('checked', thisChecked);*/
  });
}());
jQuery(document).ready(function() {
  var initializePopover=function($element) {
    $element.popover({
      container: 'body',
      trigger: 'hover',
      html: true,
      content: function() {
        if(jQuery(this).is('[data-content]')) {
          return jQuery(this).attr('data-content').text();
        }

        if(jQuery(this).is('[data-content-container]')) {
          return jQuery('#' + jQuery(this).attr('data-content-container')).html();
        }

        return jQuery(this).find('.popover-content').html();
      }
    }).on('click', function(e) {
      e.preventDefault();
    });
  };

  initializePopover(jQuery('[data-toggle="popover-tdf"]'));

  jQuery(document).on('initialize.popover', function(e, $element) {
    initializePopover($element);
  });


  // close other accordions
  jQuery('.tdf .tdf__module .accordion_wrapper').on('click', function() {
    jQuery('.tdf .accordion_wrapper').not(this).each(function() {
      var inFancybox=jQuery(this).parents('.tdf-fancybox').length > 0;

      if(inFancybox) {
        return;
      }

      jQuery(this).find('.accordion-body.collapse').collapse('hide');
    });
  });

  jQuery('.tdf-fancybox .accordion_wrapper').on('click', function() {
    jQuery('.tdf-fancybox .accordion_wrapper').not(this).each(function() {
      jQuery(this).find('.accordion-body.collapse').collapse('hide');
    });
  });

  jQuery('#close-well').on('click', function() {
    jQuery('.well').hide();
  });

  jQuery('input').on('input', (function() {
    //console.log("input filled", jQuery(this).val().length > 0);
  }));

  jQuery('#fancybox-login').find('.user-tdf').focus(function() {
    jQuery(this).addClass('hasText');
  });

  jQuery('#fancybox-login').find('.pass-tdf').focus(function() {
    jQuery(this).addClass('hasText');
  });

  //geht nicht, weil in fancybox? Klasse setzen, wenn Feld gefüllt ist
  jQuery('#user-tdf').on('input', (function() {
    if(jQuery(this).val().length > 0) {
      jQuery(this).addClass('has-value');
    } else {
      jQuery(this).removeClass('has-value');
    }
  }));

  var propertiesCollapseMinHeight=100;
  // var propertiesCollapseSpaceBottom=55;
  jQuery('.tdf__overview .module-preview__complete__properties').click(function() {
    var $collapse=jQuery(this);
    var $collapseInner=$collapse.find('.properties__wrapper');
    if($collapse.hasClass('module-preview__complete__properties--open')) {
      $collapse.stop().animate({height: propertiesCollapseMinHeight}, 300);
      $collapse.removeClass('module-preview__complete__properties--open');
    } else {
      $collapse.stop().animate({
        height: $collapseInner.outerHeight()
      }, 300, function() {
        $collapse.height('auto');
      });
      $collapse.addClass('module-preview__complete__properties--open');
    }
  });

  // motor manual inputfield
  jQuery('.layer__full').find('select').each(function() {
    jQuery(this).removeClass('hasText');
  });

  // gear frame size selected state
  jQuery('.tdf__module__gear__section__framesizes__row .value .button--white').click(function() {
    jQuery(this).addClass('selected');
  });
  jQuery('.gear_accordion__row .value, .section__series__delete__button').click(function() {
    jQuery('.tdf__module__gear__section__framesizes__row .value .button--white.selected').removeClass('selected');
  });

  // scroll to section after selection
  jQuery(document).on('tdf.attribute.series_changed', function(event, attribute) {
    jQuery('html,body').stop().animate({
      scrollTop: jQuery('.tdf__module__gear__section__framesizes').offset().top - 50
    }, 600);
  });
  jQuery(document).on('tdf.attribute.framesize_changed', function(event, attribute) {
    jQuery('html,body').stop().animate({
      scrollTop: jQuery('.tdf__module__gear .layer__more__options').offset().top - 50
    }, 600);
  });
  jQuery('.tdf__module__gear .layer__more__options [data-confirm-button], .tdf__module__motor [data-confirm-button]').click(function(event, attribute) {
    jQuery('html,body').stop().animate({
      scrollTop: jQuery('.tdf__overview').offset().top - 100
    }, 600);
  });

  // check if layer "other options" is active (sticky buttons on mobile)
  var checkForMoreOptionsAreVisible=function() {
    var $layerMoreOptions=jQuery('.tdf__module__gear .layer__more__options');
    if($layerMoreOptions.length) {
      if($layerMoreOptions.hasClass('layer--active') && jQuery(window).outerWidth() < 992) {
        jQuery('body').css('padding-bottom', $layerMoreOptions.find('.layer__more__options__submit__wrapper').outerHeight() + 'px');
        jQuery('body').addClass('tdf__gear__submit--active');
      } else {
        jQuery('body').css('padding-bottom', 0);
        jQuery('body').removeClass('tdf__gear__submit--active');
      }
    }
  };

  jQuery(window).on('scroll resize', function() {
    checkForMoreOptionsAreVisible();
  });
  jQuery(document).on('tdf.load', function() {
    checkForMoreOptionsAreVisible();
  });

});

jQuery(document).ready(function() {
  var $tdfComparison=jQuery('.tdf__comparison');
  if($tdfComparison.length) {
    var gearsChecked=0;
    var comparisonStickyHeaderHeight=250;
    var collapseElements='.sidebar__download__wrapper,' +
      '.comparison__configuration__checkbox,' +
      '.comparison__configuration__key .key__image,' +
      '.comparison__configuration__key .key__text,' +
      '.comparison__configuration__key .product__delete,' +
      '.comparison__newgear__link';
    var transitionTimeCss=350;
    var transitionTimeJs=transitionTimeCss - 50;
    var transitionTimeWidth=150;
    var comparisonInnerSpaceBefore=80;
    var mobileStickyBreakpoint=130;
    var isStickyHeaderMobile=false;

    var addMobileDeleteButtons=function($stickyHeader) {
      // copy delete button from configuration list to legend
      $stickyHeader.find('.product__delete[data-copy-from-configuration]').not('.btn-loaded').each(function() {
        jQuery(this).append($tdfComparison.find('.comparison__configuration[data-configuration-id="' + jQuery(this).data('copy-from-configuration') + '"] .comparison__configuration__delete').clone());
        jQuery(this).addClass('btn-loaded');
      });
    };

    var setupMobileMarkup=function() {
      var $comparisonStickyHeader=$tdfComparison.find('.tdf__comparison__sticky__header');

      // add property-values below proberty-labels
      $tdfComparison.find('.comparison__parameters__parameter__text').each(function() {
        var $valueElement=jQuery('.comparison__configuration__properties__category__inner .value__pair[data-value-pair-id="' + jQuery(this).data('field-id') + '"]').clone();

        if(!jQuery(this).hasClass('mobile-loaded')) {
          if($valueElement.length) {
            jQuery(this).find('[data-values]').append($valueElement);
          }
          jQuery(this).addClass('mobile-loaded');
        }
      });

      // copy image from configuration list to legend
      $comparisonStickyHeader.find('.key__image[data-copy-from-configuration]').not('.img-loaded').each(function() {
        var $originalImg=$tdfComparison.find('.comparison__configuration[data-configuration-id="' + jQuery(this).data('copy-from-configuration') + '"] .comparison__configuration__image__wrapper img');
        if($originalImg.length) {
          var $img=jQuery('<img/>', {
            src: $originalImg.attr('src'),
            alt: $originalImg.attr('alt')
          });
          jQuery(this).append($img);
          jQuery(this).addClass('img-loaded');
        }
      });

      addMobileDeleteButtons($comparisonStickyHeader);
    }

    var updateMobileStickyHeader=function($stickyHeader) {
      if($tdfComparison.find('.tdf__comparison__inner').offset().top - jQuery(window).scrollTop() - mobileStickyBreakpoint <= 0) {
        if(!$stickyHeader.hasClass('sticky')) {
          $tdfComparison.find('.tdf__comparison__inner').css('margin-top', (comparisonStickyHeaderHeight + comparisonInnerSpaceBefore) + 'px');
          $stickyHeader.addClass('animate-in');
          $stickyHeader.addClass('sticky');

          setTimeout(function() {
            $stickyHeader.removeClass('animate-in');
          }, transitionTimeWidth);

          $stickyHeader.find(collapseElements).stop().slideUp(transitionTimeJs);
          $stickyHeader.addClass('elements-collapsed');
        }
      } else {
        if($stickyHeader.hasClass('sticky')) {
          $stickyHeader.addClass('animate-out');
          $stickyHeader.removeClass('sticky');

          setTimeout(function() {
            $stickyHeader.find(collapseElements).stop().slideDown(transitionTimeJs);
            $stickyHeader.removeClass('elements-collapsed');

            $tdfComparison.find('.tdf__comparison__inner').stop().animate({
              'margin-top': comparisonInnerSpaceBefore
            }, transitionTimeCss + transitionTimeWidth);
          }, transitionTimeWidth);

          setTimeout(function() {
            $stickyHeader.removeClass('animate-out');
            claculateCheckboxLineLength();
          }, transitionTimeCss + transitionTimeWidth);
        }
      }
    };

    var initMobileStickyHeader=function() {
      var $stickyHeader=$tdfComparison.find('.tdf__comparison__sticky__header');
      $stickyHeader.removeClass('sticky');
      $stickyHeader.removeClass('elements-collapsed');
      $stickyHeader.find(collapseElements).stop().slideDown(transitionTimeJs);
      $tdfComparison.find('.tdf__comparison__inner').css('margin-top', comparisonInnerSpaceBefore);
      isStickyHeaderMobile=true;

      jQuery('body,html').stop().animate({
        scrollTop: $tdfComparison.offset().top
      }, 50, function() {
        setTimeout(function() {
          jQuery('body,html').scrollTop($tdfComparison.offset().top);
          $stickyHeader.removeClass('sticky');
          $stickyHeader.removeClass('elements-collapsed');
          $stickyHeader.find(collapseElements).stop().slideDown(transitionTimeJs);
          $tdfComparison.find('.tdf__comparison__inner').css('margin-top', comparisonInnerSpaceBefore);
          comparisonStickyHeaderHeight=$tdfComparison.find('.tdf__comparison__sticky__header').outerHeight();
        }, transitionTimeCss);
      })

    };

    resizeElements();
    if(window.innerWidth <= 991) {
      setupMobileMarkup();
      initMobileStickyHeader();
    }

    jQuery(document).on('tdf.comparison.resize', function() {
      isStickyHeaderMobile=false;
      jQuery(window).trigger('resize');
    });

    jQuery(window).resize(function() {
      resizeElements();

      if(window.innerWidth < 992) {
        setupMobileMarkup();
        if(!isStickyHeaderMobile)
          initMobileStickyHeader();
      } else {
        isStickyHeaderMobile=false;
      }

      // set current sticky header height
      if(!$tdfComparison.find('.tdf__comparison__sticky__header.sticky').length)
        comparisonStickyHeaderHeight=$tdfComparison.find('.tdf__comparison__sticky__header').outerHeight();
    });

    jQuery(window).on('scroll', function() {
      var $comparisonStickyHeader=$tdfComparison.find('.tdf__comparison__sticky__header');

      // set current sticky header height
      if(comparisonStickyHeaderHeight != null && !$comparisonStickyHeader.hasClass('sticky'))
        comparisonStickyHeaderHeight=$comparisonStickyHeader.outerHeight();
    });

    // sticky comparison header
    jQuery(window).on('load scroll resize', function() {
      var $comparisonStickyHeader=$tdfComparison.find('.tdf__comparison__sticky__header');

      if(window.innerWidth <= 991) {
        // mobile
        updateMobileStickyHeader($comparisonStickyHeader);
      } else {
        // desktop
        $comparisonStickyHeader.attr('data-test', (new Date()).getTime());
        if(jQuery(document).scrollTop() > 200) {
          $comparisonStickyHeader.addClass('sticky');
          $comparisonStickyHeader.css('top', '55px');

          // revert collapse from mobile
          if($comparisonStickyHeader.hasClass('elements-collapsed')) {
            $comparisonStickyHeader.find(collapseElements).stop().slideDown(transitionTimeJs);
            $comparisonStickyHeader.removeClass('elements-collapsed');
          }
        } else {
          $comparisonStickyHeader.removeClass('sticky');
          $comparisonStickyHeader.css('top', '-200px');
        }
      }
    });

    // scroll top after clicking collapsed mobile sticky header
    jQuery('body').on('click', '.tdf__comparison .tdf__comparison__sticky__header', function() {
      if(window.innerWidth < 992 && jQuery(this).hasClass('sticky')) {
        jQuery('html,body').animate({
          scrollTop: $tdfComparison.find('.tdf__toolbar').offset().top + $tdfComparison.find('.tdf__toolbar').outerHeight() - 50
        }, 400);
      }
    });

    function resizeElements() {
      if($tdfComparison.find('.tdf__comparison__inner').length === 0)
        return;

      //Sticky Header same width as main view
      if(window.innerWidth >= 992) {
        var comparisonInnerOffsetLeft=$tdfComparison.find('.tdf__comparison__inner').offset().left;
        jQuery('.tdf__comparison__sticky__header').css({
          'left': comparisonInnerOffsetLeft + 'px',
          'right': comparisonInnerOffsetLeft + 'px'
        });
      } else {
        jQuery('.tdf__comparison__sticky__header').css({
          'left': 'auto',
          'right': 'auto'
        });
      }

      var $gearWrapper=$tdfComparison.find('.tdf__comparison__inner').find('.comparison__gear__wrapper');
      var $gearInnerWidth=0;
      $gearWrapper.find('.comparison__configuration').each(function() {
        $gearInnerWidth+=jQuery(this).outerWidth();
      });

      if($gearWrapper.innerWidth() < $gearInnerWidth) {
        $gearWrapper.addClass('has-scrollbar');
      } else {
        $gearWrapper.removeClass('has-scrollbar');
      }
    }
    
    var bindEvents = function() {
      //show markers in main view
      jQuery('.comparison__sidebar__show__differences').unbind('click').on('click', function() {
        jQuery('.tdf__comparison__inner').toggleClass('show-differences');
      });

      //Sync current scroll position of main view to sticky header elements
      $tdfComparison.find('.tdf__comparison__inner').find('.comparison__gear__wrapper').on('scroll', function() {
        var $other=jQuery('.tdf__comparison__sticky__header').find('.comparison__gear__wrapper')[0];
        var percentage=this.scrollLeft / (this.scrollWidth - this.offsetWidth);
        $other.scrollLeft=percentage * ($other.scrollWidth - $other.offsetWidth);

        var $scrollShadowRight=jQuery(this).find('.scroll-shadow--right');
        var $scrollShadowLeft=jQuery(this).find('.scroll-shadow--left');

        $scrollShadowRight.css('right', this.scrollLeft * -1);
        $scrollShadowLeft.css('left', this.scrollLeft);

        if(percentage >= 1) {
          $scrollShadowRight.addClass('scroll-shadow--hidden');
        } else {
          $scrollShadowRight.removeClass('scroll-shadow--hidden');
        }

        if(percentage === 0) {
          $scrollShadowLeft.addClass('scroll-shadow--hidden');
        } else {
          $scrollShadowLeft.removeClass('scroll-shadow--hidden');
        }
      });

      // Sync the checkboxes in main view and sticky header
      jQuery('.tdf__comparison__inner .comparison__configuration__checkbox').find('input:checkbox').change(function() {
        var stickyHeaderCheckbox=jQuery(this)[0].id + '-stickyheader';
        var thisChecked=jQuery(this)[0].checked;

        if(thisChecked) {
          gearsChecked++;
        } else {
          gearsChecked--;
        }

        if(gearsChecked > 0) {
          jQuery('.comparison__sidebar__download__button').prop("disabled", false);
          jQuery('.comparison__sidebar__download').removeClass('download-disabled');
        } else {
          jQuery('.comparison__sidebar__download__button').prop("disabled", true);
          jQuery('.comparison__sidebar__download').addClass('download-disabled');
        }

        jQuery('#' + stickyHeaderCheckbox).prop('checked', thisChecked);
      });
      jQuery('.tdf__comparison__sticky__header .comparison__configuration__checkbox').find('input:checkbox').change(function() {
        var mainCheckbox=(jQuery(this)[0].id).replace('-stickyheader', '');
        var thisChecked=jQuery(this)[0].checked;

        if(thisChecked) {
          gearsChecked++;
        } else {
          gearsChecked--;
        }

        if(gearsChecked > 0) {
          jQuery('.comparison__sidebar__download__button').prop("disabled", false);
          jQuery('.comparison__sidebar__download').removeClass('download-disabled');
        } else {
          jQuery('.comparison__sidebar__download__button').prop("disabled", true);
          jQuery('.comparison__sidebar__download').addClass('download-disabled');
        }

        jQuery('#' + mainCheckbox).prop('checked', thisChecked);
      });

      //reorder gears configurations
      jQuery('.order__wrapper .order__left').on('click', function() {
        var $currentConfiguration=jQuery(this).parents('.comparison__configuration').first();
        var $prevConfiguration=$currentConfiguration.prev('.comparison__configuration');
        var $currentStickyConfiguration=jQuery('.tdf__comparison__sticky__header [data-sticky-configuration-id="' + $currentConfiguration.data('configuration-id') + '"]');
        var $prevStickyConfiguration=jQuery('.tdf__comparison__sticky__header [data-sticky-configuration-id="' + $prevConfiguration.data('configuration-id') + '"]');

        if($prevConfiguration.length) {
          $prevConfiguration.before($currentConfiguration);
          $prevStickyConfiguration.after($currentStickyConfiguration);
        }
      });

      jQuery('.order__wrapper .order__right').on('click', function() {
        var $currentConfiguration=jQuery(this).parents('.comparison__configuration').first();
        var $nextConfiguration=$currentConfiguration.next('.comparison__configuration');
        var $currentStickyConfiguration=jQuery('.tdf__comparison__sticky__header [data-sticky-configuration-id="' + $currentConfiguration.data('configuration-id') + '"]');
        var $nextStickyConfiguration=jQuery('.tdf__comparison__sticky__header [data-sticky-configuration-id="' + $nextConfiguration.data('configuration-id') + '"]');

        if($nextConfiguration.length) {
          $nextConfiguration.after($currentConfiguration);
          $nextStickyConfiguration.after($currentStickyConfiguration);
        }
      });
    };

    jQuery(document).on('comparision.refresh', function() {
      gearsChecked = 0;
      bindEvents();
    });

    bindEvents();

    jQuery(window).on('load resize', function() {

      jQuery('#motor-imperial-switch-manual').off('change').on('change', function() {
        var main = jQuery('.tdf__comparison').closest('main');

        main.toggleClass('global__unit--metric');
        main.toggleClass('global__unit--imperial');
      })

      var $comparisonStickyHeader=$tdfComparison.find('.tdf__comparison__sticky__header');

      // mobile
      enquire.register("screen and (max-width: 991px)", function() {
        if(!$comparisonStickyHeader.hasClass('sticky')) {
          claculateCheckboxLineLength();
        }
      });

      // desktop
      enquire.register("screen and (min-width: 992px)", function() {
        // remove offset top from mobile sticky header
        $tdfComparison.find('.tdf__comparison__inner').css('margin-top', 0);
      });

      //trigger configurations category data when trigger in sidebar
      jQuery('.comparison__parameters .comparison__parameters__category').each(function() {
        var category=jQuery(this).find('.comparison__parameters__trigger').data('category');

        // on collapse close
        jQuery(this).find('.collapse').on('hide.bs.collapse', function() {
          jQuery('.comparison__configuration .comparison__configuration__properties__category[data-category="' + category + '"]').each(function() {
            jQuery(this).find('.comparison__configuration__properties__category__inner').stop(true, false).slideUp(250);
            jQuery(this).removeClass('open');
          });
        });

        // on collapse open
        jQuery(this).find('.collapse').on('show.bs.collapse', function() {
          jQuery('.comparison__configuration .comparison__configuration__properties__category[data-category="' + category + '"]').each(function() {
            jQuery(this).find('.comparison__configuration__properties__category__inner').stop(true, false).slideDown(250);
            jQuery(this).addClass('open');
          });
        });
      });

    });

    function claculateCheckboxLineLength() {
      var $comparisonStickyHeader=$tdfComparison.find('.tdf__comparison__sticky__header');

      $comparisonStickyHeader.find('.comparison__configuration').each(function() {
        var $line=jQuery(this).find('.checkbox__dashed-line');
        var lineHeight=jQuery(this).outerHeight() / 2;

        if(jQuery(this).prev().length) {
          lineHeight+=jQuery(this).prev().outerHeight() / 2;
        } else {
          lineHeight+=$comparisonStickyHeader.find('.sidebar__download__wrapper').outerHeight() / 2 + 20; // 20 = margin bottom
        }

        $line.height(lineHeight);
      });
    }

  }

});
jQuery(document).ready(function ()
{
  var $historyWrapper = jQuery('.history__wrapper');

  //unter -md
  var mobileNavi = $(window).width() <= 992;

  setZIndexForEachRow();
  initCheckboxListener();

  jQuery(window).resize(function () {
    //resizeElements();
    mobileNavi = $(window).width() <= 992;

    enquire.register("screen and (max-width: 991px)", function () {
      jQuery('.history__topline').removeClass('history__topline__fixed');
    });
  });

  jQuery(window).scroll(function () {
    if(!mobileNavi) {
      if (jQuery(document).scrollTop() > 200) {
        jQuery('.history__topline').addClass('history__topline__fixed');
      } else {
        jQuery('.history__topline').removeClass('history__topline__fixed');
      }
    }
  });

  function setZIndexForEachRow() {
    jQuery('.history__list').find('.configuration__list >.row').each(function(index){
      jQuery(this).css({
        'z-index': 99 - index
      });
    });
  }

  function initCheckboxListener() {
    var $historySelectButton = jQuery('#history-select-action:not([data-initialized])');

    if($historySelectButton.length > 0)
    {
      $historySelectButton.on('change', function() {
        jQuery('.history__checkbox__wrapper').first().trigger('change');
      });
      $historySelectButton.attr('data-initialized', 1);
    }

    //rebind checkbox listener after loading new rows
    jQuery('.history__checkbox__wrapper').off().on('change', function() {
      var gearsChecked = jQuery('.history__checkbox__wrapper input[type="checkbox"]:checked').length;

      if((gearsChecked > 0 && jQuery('#history-select-action').val() === 'action-offer') || (gearsChecked > 0 && gearsChecked <= 5)) {
        $historyWrapper.find('.request__button').prop("disabled", false);
        $historyWrapper.find('.request__button').removeClass('request-disabled');
      } else {
        $historyWrapper.find('.request__button').prop("disabled", true);
        $historyWrapper.find('.request__button').addClass('request-disabled');
      }
    });
  }

  $historyWrapper.find('div[data-articleloader-trigger]').on('click', function() {
    //call functions on finished request
    jQuery(document).ajaxComplete(function() {
      setZIndexForEachRow();
      initCheckboxListener();
    });
  });

});
jQuery.fn.history=function(basketUri, successMessage, failureMaessage) {

  var $historyContainer=jQuery('.history'),
    $actionSelect=$historyContainer.find('select');

  var groupDates=function(rows) {
    var $shownDate='init';

    for(var i=0; i < rows.length; i++) {
      var $currentRow=jQuery(rows[i]).find('.history__date');
      if($shownDate !== $currentRow.html()) {
        $shownDate=$currentRow.html();
      } else {
        jQuery(rows[i]).addClass('no-sectionheader')
      }
    }

    rows.filter(':not(.no-sectionheader)').last().addClass('last-sectiontitle');
  };

  var advanceFancyboxQueue=function(fancyboxQueue) {
    jQuery.fancybox({
      href: '#' + fancyboxQueue.shift(),
      helpers: {
        overlay: {
          locked: false
        }
      },
      beforeShow: function() {
        jQuery('html').addClass('overflow-hidden');
      },
      beforeClose: function() {
        jQuery('html').removeClass('overflow-hidden');
      }
    });
  };

  var handleRequests=function(ids, fancyboxQueue) {

    // intialize fancyboxes
    jQuery('.tdf-fancybox').each(function() {
      var rowData=jQuery('.configuration__row[data-configuration-id=' + ids[0] + ']').data();
      var fancybox=jQuery(this);

      if(rowData['cadLanguage'] === '') {
        rowData['cadLanguage']=30;
      }
      if(rowData['offerLanguage'] === '') {
        rowData['offerLanguage']=30;
      }

      fancybox.find('[name="tx_avtecdatafinder_configurator[configuration]"]').attr('value', ids[0]);
      fancybox.find('[name="tx_avtecdatafinder_configurator[individualName]"]').val(rowData['individualName']).trigger('change');
      fancybox.find('[name="tx_avtecdatafinder_configurator[stage]"]').val(rowData['stages']).trigger('change');
      fancybox.find('.js-cad[name="tx_avtecdatafinder_configurator[language]"]').val(rowData['cadLanguage']).trigger('change');
      fancybox.find('.js-offer[name="tx_avtecdatafinder_configurator[language]"]').val(rowData['offerLanguage']).trigger('change');
      fancybox.find('[data-selection="PCOUT Produktschlüssel"] span').html(rowData['productKey']);


      if(fancyboxQueue.indexOf('action-offer') != -1) {
        var uri=$actionSelect.data('ajax-action');
        jQuery.post(uri,
          {'tx_avtecdatafinder_configurator[configuration]': ids[0]},
          function(data) {
            jQuery('#action-offer').attr('data-price-info', JSON.stringify(data));
            jQuery(document).trigger('tdf.price-info-loaded', data);

          })
      }

      if(rowData['cadFormats'] !== '') {
        var formats=rowData['cadFormats'].split(',');
        fancybox.find('[name="tx_avtecdatafinder_configurator[cadFormats][]"]').each(function() {
          var self=jQuery(this);
          if(formats.indexOf(self.attr('value')) !== -1) {
            self.prop('checked', true);
          } else {
            self.prop('checked', false);
          }
        });
      }


      fancybox.find('input[data-quantity-input]').each(function() {
        var self=jQuery(this);
        if(self.attr("data-primary-quantity-input")) {
          self.val(1);
        } else {
          self.removeAttr('value');
        }
      })
    });

    var action=fancyboxQueue.shift();

    jQuery.fancybox({
      href: '#' + action,
      helpers: {
        overlay: {
          locked: false
        }
      }
    });

    // fancyboxforms
    var ajaxForms=jQuery('form[data-tdf-ajax]');

    ajaxForms.each(function() {
      var form=jQuery(this);

      form.find('[name="tx_avtecdatafinder_configurator[configuration]"]').attr('value', ids[0]);
      form.find('input[type="submit"]').on('click', function() {
        var self=jQuery(this),
          buttonAction=self.attr('data-action'),
          isBasketRequest=buttonAction === 'to_basket',
          isProceedForm=buttonAction === 'proceed';

        form.find('input[type="hidden"][name="tx_avtecdatafinder_configurator[isBasketRequest]"]').val(isBasketRequest ? 1 : 0);
      });

      form.off('submit');

      form.on('submit', function(e) {
        e.preventDefault();
        var self=jQuery(this);
        jQuery.fancybox.showLoading();
        var submitButton=jQuery(this).find('[type="submit"]:enabled');

        if(submitButton.attr('data-action') === 'proceed') {

          var formValues=self.serialize(),
            cadAction=self.attr('action'),
            offerForm=$historyContainer.find('#action-offer form');
          offerForm.attr('data-cad-action', cadAction);
          offerForm.attr('data-cad-arguments', formValues);
          offerForm.find('[name="tx_avtecdatafinder_configurator[createNew]"]').val(0);
          advanceFancyboxQueue(fancyboxQueue);
          return;
        } else {

          submitButton.prop('disabled', true);
          var isBasketRequest=jQuery(this).find('[name="tx_avtecdatafinder_configurator[isBasketRequest]"]').val() == 1,
            cadAction=self.attr('data-cad-action');

          if(typeof cadAction != 'undefined' && cadAction !== '') {
            var cadArguments=self.attr('data-cad-arguments');
            if(isBasketRequest) {
              var pattern=/isBasketRequest%5D=0&/;
              cadArguments=cadArguments.replace(pattern, 'isBasketRequest%5D=1&');
            }

            jQuery.post(cadAction, cadArguments, function(data) {

              //make sure that offerrequest is added to the same configuration as the cadrequest
              self.find('[name="tx_avtecdatafinder_configurator[configuration]"]').attr('value', data['configurationUid']);

              // affer cadrequest is created add offerrequest to configuration
              jQuery.post(self.attr('action'), self.serialize(), function(data) {
                handleFormSubmit(ids, data, isBasketRequest, submitButton, fancyboxQueue);
              });
            });
          } else {

            jQuery.post(jQuery(this).attr('action'),
              jQuery(this).serialize(),
              function(data) {
                handleFormSubmit(ids, data, isBasketRequest, submitButton, fancyboxQueue);
              });
          }


        }
      });

    });
  };

  var handleFormSubmit=function(ids, data, isBasketRequest, submitButton, fancyboxQueue) {

    if(isBasketRequest) {
      handleBasketRequest(ids, submitButton, fancyboxQueue);
    } else {
      handleDirectRequest(ids, data, submitButton, fancyboxQueue);
      jQuery.fancybox.hideLoading();
      submitButton.prop('disabled', false);
    }
  };

  var handleBasketRequest=function(ids, submitButton, fancyboxQueue) {

    jQuery.post(basketUri, function(content) {
      jQuery.fancybox.close();
      var basketAjaxContent=jQuery('[data-offcanvas="basket"] [data-ajax-content]');
      basketAjaxContent.html(content).trigger('container.bindevents');
      var basketItems=basketAjaxContent.find('form').data('basket-items');
      jQuery(document).trigger('tdf.basket-loaded', [basketItems]);
      jQuery.fancybox.hideLoading();
      submitButton.prop('disabled', false);

      if(fancyboxQueue.length > 0) {
        advanceFancyboxQueue(fancyboxQueue);
      } else {
        ids.shift();
        if(ids.length > 0) {
          handleRequests(ids, $actionSelect.val().split(','), false);
        } else {
          jQuery.fancybox.close();
          jQuery('[data-offcanvas-trigger="basket"]').first().trigger('click');
        }
      }
    });
  };

  var handleDirectRequest=function(ids, data, submitButton, fancyboxQueue) {

    if(fancyboxQueue.length > 0) {
      advanceFancyboxQueue(fancyboxQueue);
    } else if(data.message != undefined && data.message != '') {
      ids.shift();

      if(ids.length > 0) {
        handleRequests(ids, $actionSelect.val().split(','), false);
      } else {
        jQuery.fancybox.close();
        jQuery.fancybox({
          content: data.message,
          helpers: {
            overlay: {
              locked: false
            }
          },
          beforeShow: function() {
            jQuery('html').addClass('overflow-hidden');
          },
          beforeClose: function() {
            jQuery('html').removeClass('overflow-hidden');
          },
          afterClose: function() {
            jQuery('form[data-tdf-ajax]').removeAttr('data-initialized');
            location.reload();

          }
        });
      }
    } else {
      jQuery.fancybox.close();
    }
  };

  var init=function() {

    var $history=jQuery('.tdf.history');
    var $historyList=$history.find('.history__list');
    var $moreInfoContainer=$historyList.find('.list__right [data-articleloader-sectionheader]');
    var $trigger=jQuery('[data-history-trigger]');
    var $rows=jQuery(".configuration__list [data-articleloader-sectionheader]");

    groupDates($rows);

    if($historyContainer.find('.configuration__list').length)
      $historyContainer.addClass('has-items');
    else
      $historyContainer.removeClass('has-items');

    $historyList.find('.history__section').each(function() {
      if($(this).prev('.history__section').length)
        $(this).prev().addClass('has-next');
    });

    $actionSelect.on('change', function() {
      var self=jQuery(this);
      if('delete' === self.val()) {
        $trigger.val($trigger.attr('data-delete-label'));
      } else {
        $trigger.val($trigger.attr('data-inquiry-label'));
      }
    });

    $historyContainer.on("click", function(e) {
      var $target=jQuery(e.target);
      if($target.is("A")) {
        var $uri=$target.data('ajax-action');

        if($uri !== undefined && $uri !== '') {
          jQuery.post($uri, function(content) {

            var $alertPlaceholder=jQuery('#alert_placeholder');

            if(parseInt(content) < 6) {

              jQuery(document).trigger('tdf.comparison-update', [content]);

              $alertPlaceholder.html('<div class="alert alert-success alert-dismissible fade in show" role="alert"><div class="alert-inner">' +
                '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                '<span class="alert-title">' + 'Sucess' + '</span>' +
                '<span>' + successMessage + '</span>' +
                '</div></div>');

              $target.hide();
            } else {
              $alertPlaceholder.html('<div class="alert alert-danger alert-dismissible fade in show" role="alert"><div class="alert-inner">' +
                '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                '<span class="alert-title">' + 'Alert' + '</span>' +
                '<span>' + failureMaessage + '</span>' +
                '</div></div>');

            }

            $alertPlaceholder.fadeIn();
            setTimeout(function() {
              {
                $alertPlaceholder.fadeOut();
              }
            }, 10000);


          });
        }
      }
    });

    $trigger.on('click', function(e) {
      e.preventDefault();
      var $actionSelect=$historyContainer.find('select'),
        fancyboxQueue=$actionSelect.val().split(','),
        $rows=jQuery("[data-articleloader-sectionheader]"),
        configIds=[],
        submit=jQuery('.js-submit'),
        proceed=jQuery('.js-proceed');


      //setup first fancybox
      if(fancyboxQueue.length === 2) {
        submit.hide();
        submit.find('[type="input"]').prop('disabled', true);
        proceed.show();
        proceed.find('input').prop('disabled', false);
      } else {
        submit.show();
        submit.find('[type="input"]').prop('disabled', false);
        proceed.hide();
        proceed.find('input').prop('disabled', true);
      }


      // collect selected configurations
      $rows.each(function() {
        if(jQuery(this).find('input[type="checkbox"]').prop('checked')) {
          configIds.push(jQuery(this).data('articleloader-sectionheader'))
        }
      });

      var fancyboxQueue=$actionSelect.val().split(',');


      handleRequests(configIds, fancyboxQueue);
    });

    jQuery(document).on('articleloader.ContentSet', function() {
      var $rows=jQuery(".configuration__list [data-articleloader-sectionheader]");
      groupDates($rows);

      var $lastConfigurationList=jQuery('.tdf.history .pagination_content .configuration__list:last-of-type');
      if($lastConfigurationList.prev('.configuration__list').length) {
        $lastConfigurationList.prev().append($lastConfigurationList.html());
        $lastConfigurationList.remove();
      }

      enquire.register("screen and (max-width: 991px)", function() {
        calculateCheckboxLineHeight();
      });
    });

    // mobile accordion
    $history.on('click', '[data-history-accordion-trigger]', function(event) {
      enquire.register("screen and (max-width: 991px)", function() {
        var $trigger=jQuery(event.target);
        var accordionId=$trigger.data('history-accordion-trigger');

        jQuery('.tdf.history').find('[data-history-accordion-collapse="' + accordionId + '"]').each(function() {
          if(jQuery(this).hasClass('collapsed')) {
            jQuery(this).stop(true).slideDown(300);
            jQuery(this).removeClass('collapsed');
            $trigger.removeClass('collapsed');
          } else {
            jQuery(this).stop(true).slideUp(300);
            jQuery(this).addClass('collapsed');
            $trigger.addClass('collapsed');
          }
        });
      });
    });

    jQuery(window).on('resize', function() {
      enquire.register("screen and (min-width: 992px)", function() {
        // revert accordion on desktop
        var $collapsedRows=jQuery('.tdf.history [data-history-accordion-collapse].collapsed');
        $collapsedRows.stop(true).slideDown(300);
        $collapsedRows.removeClass('collapsed');
        $collapsedRows.prev().removeClass('collapsed');

        // revert show more on desktop
        $historyList.height('auto');

        calculateCheckboxLineHeight();
      });
    });

    // mobile show more
    var showMoreScrollTime=400;
    var showMoreAnimateHeightTime=300;
    $history.on('click', '.trigger-more', function(event) {
      var $trigger=jQuery(event.target);
      var configurationId=$trigger.data('configuration-id');

      if($historyList.hasClass('show-more')) {
        $historyList.removeClass('show-more');

        // calculate container height
        $historyList.animate({
          height: $historyList.find('.list__left').outerHeight()
        }, showMoreAnimateHeightTime);

        // scroll to more info container after height is set
        setTimeout(function() {
          jQuery('html,body').stop(true).animate({
            scrollTop: $historyList.find('.list__left .configuration__row[data-configuration-id="' + configurationId + '"]').offset().top - 70
          }, showMoreScrollTime, function() {
            $historyList.height('auto');
          });
        }, showMoreAnimateHeightTime - 100);
      } else {
        var $listRight=$historyList.find('.list__right');

        $moreInfoContainer.html($historyList.find('.list__left .configuration__row[data-configuration-id="' + configurationId + '"]').clone());
        $moreInfoContainer.find('.configuration__row').append($moreInfoContainer.find('.history__gear__compare'));
        $historyList.addClass('show-more');

        // scroll to more info container
        jQuery('html,body').stop(true).animate({
          scrollTop: $listRight.offset().top - 70
        }, showMoreScrollTime);

        // calculate container height
        setTimeout(function() {
          $historyList.animate({
            height: $listRight.outerHeight()
          }, showMoreAnimateHeightTime);
        }, showMoreAnimateHeightTime);
      }
    });

    function calculateCheckboxLineHeight() {
      $historyList.find('.history__section').each(function() {
        var $container=jQuery(this);
        var $line=$container.find('.history__checkbox__line');
        var $historyDate=$container.find('.history__date');
        var height=$container.find('.configuration__row').outerHeight() / 2;

        if($container.is('first-child')) {
          height+=$historyDate.outerHeight(true);
          height+=15;
        } else {
          height+=$container.prevAll('.history__section').first().find('.configuration__row').outerHeight() / 2;
          if(!$container.hasClass('no-sectionheader')) {
            height+=$historyDate.outerHeight(true);
          }
        }

        $line.height(height);
      });
    }

  };

  init();
};
jQuery.fn.comparison=function(uri) {

  // clear temporary saved configuration
  localStorage.removeItem('tdf.lastconfiguration');

  var $comparisonContainer=jQuery('.tdf__comparison');
  var configurationIds=[];

  var updateComparisonIndicators=function(items) {
    var itemNumber=parseInt(items);
    jQuery(".tdf__indicator--comparison").attr('data-indicator-items', itemNumber);
    jQuery(".usersidebar__links__compare__indicator").html(itemNumber);
  };

  var highlightDifferences=function() {

    var $parameters=jQuery(".comparison__configuration").find('div[data-field-id]');
    var $dataItems=jQuery(".comparison__configuration__properties, .comparison__parameters__parameter__text").find("div[data-unit='metric']");

    var dataRows={};
    $parameters.each(function() {
      var self=jQuery(this);
      var id=self.data('field-id');
      dataRows[id]=[];
    });

    $dataItems.each(function() {
      var self=jQuery(this);
      var id=self.data('field-id');
      dataRows[id].push(jQuery.trim(self.text()));
    });

    for(var key in dataRows) {
      if(!dataRows[key].every(function(val, i, arr) {
        return val === arr[0];
      })) {
        var found=$dataItems.filter('[data-field-id="' + key + '"]');
        found.addClass("difference");
        found.next().addClass("difference");
      }
    }
  };

  var bindEvents=function() {


    var configField=jQuery('#action-cad_neutral').find('input[type="hidden"][name="tx_avtecdatafinder_comparison[configurations]"]');
    var headline=jQuery('#action-cad_neutral').find('p.h3');


    jQuery('.comparison__sidebar__download__button').on('click', function(e) {
      e.preventDefault();

      var checkboxes=$comparisonContainer.find(".tdf__comparison__inner [type='checkbox'][id^='download']");
      var selectedIds=[];
      var selectedKeys=[];
      checkboxes.each(function() {
        var self=jQuery(this);
        if(self[0].checked) {
          selectedIds.push(self.data('config-id'));
          selectedKeys.push(self.data('config-key'));
        }
      });

      configField.val(selectedIds.toString());
      var list='';
      for(var i=0; i < selectedKeys.length; i++) {
        list+='<div class="cad_neutral__key" >' + selectedKeys[i] + '</div>';
      }

      headline.append('<div class="keylist">' + list + '</div>');


      jQuery('#comparison-download').on('submit', function(e) {
        var self=jQuery(this);

        var content=self.attr('data-download-info');
        jQuery.fancybox({
          content: content,
          helpers: {
            overlay: {
              locked: false
            }
          },
          beforeShow: function() {
            jQuery('html').addClass('overflow-hidden');
          },
          beforeClose: function() {
            jQuery('html').removeClass('overflow-hidden');
          }
        });
      });


      jQuery.fancybox({
        href: "#action-cad_neutral",
        helpers: {
          overlay: {
            locked: false
          }
        },
        beforeShow: function() {
          jQuery('html').addClass('overflow-hidden');
        },
        beforeClose: function() {
          jQuery('.cad_neutral__key').remove();
          jQuery('html').removeClass('overflow-hidden');
        }
      });
    });
  };

  var init=function() {

    var $comparisonItems=$comparisonContainer.find(".comparison__configuration[data-configuration-id]");

    var indicators={comparison: 0, basket: 0};

    jQuery.get(uri, function(data) {
      indicators=data;
      jQuery(".tdf__indicator--comparison").attr('data-indicator-items', indicators.comparison);
      jQuery(".usersidebar__links__compare__indicator").html(indicators.comparison);
    });

    $comparisonItems.each(function() {
      configurationIds.push(jQuery(this).data("configuration-id"));
    });

    //open everything
    jQuery('.comparison__sidebar__open__all').off().on('click', function() {
      jQuery('.comparison__parameters').find('.accordion-body.collapse').collapse('show');
    });

    $comparisonContainer.on('click', 'button[data-ajax-action]', function(e) {
      e.preventDefault();

      jQuery(document).trigger('tdf.load', [true]);

      jQuery.post(jQuery(this).data('ajax-action'), function(content) {
        var $page=jQuery(content);

        $comparisonContainer.html($page.find(".tdf__comparison").html());
        updateComparisonIndicators($page.find('[data-comparison-items]').data('comparison-items'));
        init();
        bindEvents();
        highlightDifferences();
        jQuery(document).trigger('comparision.refresh');

        // select 2
        jQuery(document).trigger('neugart.setup.select', [$comparisonContainer.find('select')]);

        $comparisonContainer.find('.comparison__sidebar__show__differences').unbind('click').on('click', function() {
          $comparisonContainer.find('.tdf__comparison__inner').toggleClass('show-differences');
        });

        jQuery(document).trigger('initialize.popover', [$comparisonContainer.find('[data-toggle="popover-tdf"]')]);

        jQuery(document).trigger('tdf.comparison.resize');
      });
      jQuery(document).trigger('tdf.load', [false]);
    });
  };

  init();
  bindEvents();
  highlightDifferences();

  jQuery(document).on('tdf.comparison-update', function(e, items) {
    updateComparisonIndicators(items);
  });
};
(function () {
  // quantities
  var initializeQuantities = function($element) {
    $element.find('[data-quantity-group]').each(function() {
      var $rows = jQuery(this).find('[data-quantity-row]');
      var $addButton = jQuery(this).find('[data-quantity-add]');

      $rows.each(function() {
        var $input = jQuery(this).find('input[data-quantity-input]');

        if($input.is('[data-primary-quantity-input]'))
        {
          return;
        }

        var value = parseInt($input.val());

        if(isNaN(value) || value == 0)
        {
          jQuery(this).addClass('hidden');
        }
      });

      $addButton.on('click', function(e) {
        e.preventDefault();

        $rows.filter('.hidden').eq(0).removeClass('hidden');

        if($rows.filter('.hidden').length == 0)
        {
          jQuery(this).addClass('hidden');
        }
      });

      if($rows.filter('.hidden').length == 0)
      {
        $addButton.addClass('hidden');
      }

      jQuery(this).find('[data-quantity-remove]').on('click', function(e) {
        e.preventDefault();

        var $currentRow = jQuery(this).closest('[data-quantity-row]');

        $currentRow.find('input').val(0);
        $currentRow.addClass('hidden');

        $addButton.removeClass('hidden');
      });

    });
  };

  initializeQuantities(jQuery('#action-offer'));

  var validateBasket = function() {
    var cadAmount = jQuery('.tdf-offcanvas [data-cad-checkbox]:checked').length;

    var $alertPlaceholder = jQuery('#alert_placeholder');
    var $submitButton = jQuery('.tdf-offcanvas [type="submit"]');

    if(cadAmount > 5)
    {
      $alertPlaceholder.html('<div class="alert alert-danger alert-dismissible fade in show" role="alert"><div class="alert-inner">' +
        '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
        '<span class="alert-title"></span>' +
        '<span>' + jQuery('.tdf__offcanvas__basket').attr('data-cad-limit-message') + '</span>' +
        '</div></div>');
      $alertPlaceholder.fadeIn();
      $submitButton.prop('disabled', true);
    }
    else
    {
      $alertPlaceholder.hide();
      $submitButton.prop('disabled', false);
    }
  };

  // update indicator of triggers
  jQuery(document).on('tdf.basket-loaded', function (e, items) {
    var $basket = jQuery('.tdf__offcanvas__basket'),
      $messagebox = jQuery('#basket-success'),
      $form = $basket.find('form');

    $basket.salespartner();

    jQuery(document).trigger('form.refresh.floatinginput', [$basket]);

    if(jQuery('[data-offcanvas="basket"]').hasClass('tdf-offcanvas--visible')){
      validateBasket();
    }
    // handle basketform
    var submitform = function() {
      $form.submit(function (e) {
        e.preventDefault();
        $basket.find('.loading-indicator').show();


        jQuery.post(jQuery(this).attr('action'),jQuery(this).serialize(),function (content) {

          try{
            var response=jQuery.parseJSON(content);

            if(typeof response =='object' && response.targetUrl != undefined && response.targetUrl != '') {
              if (response.events != undefined && response.events != '' && (typeof dataLayer !== 'undefined')) {
                for(var eventKey in response.events)
                {
                  dataLayer.push(response.events[eventKey]);
                }
              }

              location.href = response.targetUrl;
              return;
            }
            else {
              throw "no valid json";
            }
          }
          catch (e) {
            jQuery(document).trigger('tdf.basket-submit');
            var $content = jQuery(content),
              $message = $content.find('#basket-message');
            $messagebox.html($message.html());
            $basket.find('.loading-indicator').hide();
            $basket.html(jQuery(content).html());
            jQuery('[data-close="basket"]').trigger('click');
            jQuery.fancybox({href: '#basket-success'});
          }
        });
      });
    };

    submitform();

    // refresh trigger items
    jQuery(".trigger__basket").attr('data-indicator-items', items);
    jQuery("[data-basket-item-amount]").text(items);

    // refresh "pieces" in basket
    var refreshAmount = function() {
      var sum = 0,
        priceSum=0;

      $basket.find('[data-area]:not(.cad-hidden):not(.offer-hidden) .offer__row').each(function() {
        var self = jQuery(this);
        var $price = self.find('.js-price');
        var value = parseInt(self.find('input[data-quantity-input]').val()),
          priceData = $price.attr('data-prices');

        if(isNaN(value))
        {
          return;
        }
        sum+= value;
        if(!priceData)
        {
          return;
        }

        priceData=JSON.parse(priceData);

        var factor = 1;
        var price = priceData.price;

        for(var i=0; i<priceData.discounts.length;  ++i){
          if( value <= parseInt(priceData.discounts[i]['quantity'])){
            break;
          }
          factor=(1-priceData.discounts[i]['discount']);
        }

        price*=factor;

        var currentPriceSum = Math.round((price * value) * 100) / 100;

        $price.text(currentPriceSum.toFixed(2).toString().replace('.', ','));

        priceSum+=currentPriceSum;
      });

      $basket.find('span[data-pieces]').text(sum);
      $basket.find('span[data-price]').text(priceSum.toFixed(2).toString().replace('.', ','));
    };

    refreshAmount();

    jQuery(document).on('tdf.offcanvas.open', function(e, identifier) {
      if(identifier === 'basket')
      {
        validateBasket();
      }
    });

    jQuery(document).on('tdf.offcanvas.close', function() {
      jQuery('#alert_placeholder').hide();
    });

    var $quantityInput = $basket.find('input[data-quantity-input]');

    $quantityInput.on('change', function() {
      refreshAmount();
    });

    $quantityInput.on('click', function() {
      jQuery(this).select();
    });

    // show / hide cad / offer
    $basket.find('[data-area-switch]').change(function() {
      var self =  jQuery(this);
      var areaId = self.attr('data-area-switch');
      var isChecked = self.is(':checked');
      var isCad=areaId.substring(0, 3) === 'cad';

      var hiddenClass = isCad ? 'cad-hidden' : 'offer-hidden';

      if(!isCad)
      {
        var offerCol=self.closest('.basket__item__col__offer');
        offerCol.find('input').val(1);
        jQuery.post(self.data('prepare-action'),function (data) {
          offerCol.find('.js-price').html(data['price']);
        });


      }

      var $area = $basket.find('[data-area="'+ areaId +'"]');

      $area.toggleClass(hiddenClass, !isChecked);

      setTimeout(function() {
        // $area.find('input[data-quantity-input]').val(0);
        $area.find('[data-quantity-remove]').trigger('click');
      }, 500);

      refreshAmount();
      validateBasket();
    });

    // continue
    $basket.find('[data-continue]').click(function() {
      jQuery('[data-close="basket"]').trigger('click');
      location.href=jQuery(this).attr('data-start-link');
    });

    // select 2
    jQuery(document).trigger('neugart.setup.select', [$basket.find('select')]);

    // quantities
    initializeQuantities($basket);
  });


}());
var RegistrationForm = (function () {

  function RegistrationForm(container) {
    this.stateCountries = [36, 148, 220];
    this.chinaId = 46;
    this.noZipCountries=[46,220];
    this.container = container;
    this.countrySelect = this.container.find('#user-country');
    this.stateSelect = this.container.find("#user-state");
    this.areaCodeSelect = this.container.find('#user-areatelcode');
    this.countryCodeSelect = this.container.find('#user-countrytelcode');
    this.accountType = this.container.find('#user-permanentAccount');
    this.passwordRow= this.container.find('#password__row');
    this.errorList=this.container.find('#errorlist');
    this.zipLabel = this.container.find('[for="user-zip"]');
  }

  RegistrationForm.prototype.start = function () {

    var self = this;
    self.countryMapping = new Map();
    self.countryMapping.set(36, 'CA');
    self.countryMapping.set(148, 'MX');
    self.countryMapping.set(220, 'US');
    var stateError=self.errorList.find('[data-property="user.state"]');

    if(stateError.length > 0)
      self.stateSelect.addClass('f3-form-error');

    self.hideStates();
    self.hideAreaCode();

    self.refreshForCountry(jQuery(self.countrySelect),true);

    self.countrySelect.on('change', function () {
      self.refreshForCountry(jQuery(self.countrySelect),false);
    });


  };

  RegistrationForm.prototype.refreshForCountry = function (select, init) {
    var self=this;
    var value = parseInt(select.val());
    var zipRequired=self.zipLabel.find('.js-required');

    if(!isNaN(value)) {
      if(self.noZipCountries.indexOf(value) > -1) {
        zipRequired.hide();
      }
      else{
        zipRequired.show();
      }
    }

    if(!init ||self.container.find('.alert').length>0){
      var countrycodeVal=self.countryCodeSelect.find("option[data-country-id^="+value+"]").attr('value');
      self.countryCodeSelect.val(countrycodeVal).trigger('change');
    }


    if (self.stateCountries.indexOf(value) > -1) {
      self.showStates(value);
      self.hideAreaCode();
    }
    else if (value == self.chinaId) {
      self.showAreaCode();
      self.hideStates();
    }
    else {
      self.hideStates();
      self.hideAreaCode();
    }
    self.stateSelect.select2();
  }

  RegistrationForm.prototype.showStates = function (value) {
    var self = this;
    var val = value;
    var country = self.countryMapping.get(val);
    var stateId=self.stateSelect.data('user-state');

    self.stateSelect.val('');
    self.stateSelect.find('option').each(function () {
      var option = jQuery(this);

      if (option.attr('data-country') == country) {

        if( option.val()==stateId){
          self.stateSelect.val(stateId);
        };
        option.prop('disabled', false);
      }
      else {
        option.prop('disabled', true);
      }
    });

    self.stateSelect.trigger('change');
    self.stateSelect.closest('.col').show();
  };
  RegistrationForm.prototype.showAreaCode = function () {
    this.areaCodeSelect.closest('.col').show();
  };
  RegistrationForm.prototype.hideStates = function () {
    var self = this;
    self.stateSelect.closest('.col').hide();
  };
  RegistrationForm.prototype.hideAreaCode = function () {
    this.areaCodeSelect.closest('.col').hide();
  };
  return RegistrationForm;
}());
jQuery.fn.salespartner = function () {

  var consultantUri = jQuery('.tdf-offcanvas-basket-wrapper').data('salesparnter-action');
  var self=jQuery(this),
    $container=jQuery(document).find('.salespartner'),
    numberOfSelects=$container.length,
    updated=0,
    source=consultantUri;

  var loadConsultants = function (containter) {
    var $self= jQuery(containter),
      $select=$self.find('select.customers'),
      customerId=$select.val(),
      others=jQuery(document).find('select.customers').filter(function (index,element) {
        return jQuery(this).val() !== customerId;
      });

    if(updated === 0)
    {
      jQuery.get(
        source,
        {'tx_avtecdatafinder_salespartner[customerId]':customerId},
        function (data){
          jQuery(document).find('select.consultants').html(data);
          others.val(customerId).trigger('change');
        });

      if(numberOfSelects > 1) {
        updated+=1;
      }
    } else if ( updated < numberOfSelects-1) {
      updated+=1
    } else {
      updated=0;
    }
  };

  $container.each(function () {
    var self = jQuery(this),
      select=self.find('select.customers');

    select.on('change', function (e){
      loadConsultants(self)
    });
    loadConsultants(self);
  });

  jQuery(document).on('tdf.consultants-loaded', function (e,id) {});
};

var productTdfLink =(function () {

  jQuery('.product__body').each(function () {
      var self=jQuery(this),
        frameSizeSwitch=self.find("[data-framesize-switch]"),
        tdfUrl=frameSizeSwitch.filter('.highlight').data('tdf-url'),
        button=self.find('.product__tdf-link');

      frameSizeSwitch.each(function() {
          jQuery(this).on('click', function () {
            tdfUrl=jQuery(this).data('tdf-url');
          })
        }
      );

      button.on('click',function (e) {
        e.preventDefault();
        if(typeof tdfUrl != 'undefined') {
          location.href=tdfUrl;
        }
        else {
          location.href=jQuery(this).attr('href');
        }
      });
    }
  );


  var setTdfLinks = function() {

    jQuery('.item').each(function () {
      var tdfUrl='',
        self=jQuery(this),
        framesizes=self.find('.framesize').not('.inactive');

      if(framesizes.length == 1){
        tdfUrl=framesizes.data('tdf-url');
      }

      self.find('.productfilter__tdf-link').on('click',function(e) {
        e.preventDefault();
        if(typeof tdfUrl !='undefined' && tdfUrl!=='' ) {
          location.href=tdfUrl;
        }
        else {
          location.href=jQuery(this).attr('href');
        }
      });
    });
  };

  jQuery(document).on('productfilter.loaded', function () {
    setTdfLinks()
  });


  setTdfLinks();

}());
(function () {
  // var $searchForm = jQuery('#header-search-form');
  // var $searchInput = $searchForm.find('input[name="q"]');
  //
  // var gearPattern = '[a-zA-Z]+[0-9]{3}\-[0-9]{3}\-[a-zA-Z]{4}[0-9]{1}[a-zA-Z]{2}\-[a-zA-Z]{1}';
  // var motorPattern = '[0-9.,]+/[0-9.,]+/[0-9.,]+/[0-9.,]+/[B0-9]{2,3}/[M0-9.,]+';
  //
  // var patterns = [
  //   gearPattern, // e.g. PLFE110-008-SLSE3AF-Z
  //   gearPattern + motorPattern // e.g. PLFE110-008-SLSE3AF-Z14/40/80/100/B5/M6
  // ];
  //
  // $searchInput.on('keyup', function() {
  //   var value = jQuery(this).val();
  //
  //   var isProductKey = false;
  //
  //   for(var i in patterns)
  //   {
  //     var regExp = new RegExp('^'+ patterns[i] +'$');
  //
  //     if(value.match(regExp))
  //     {
  //       isProductKey = true;
  //
  //       break;
  //     }
  //   }
  //
  //   if(isProductKey)
  //   {
  //     console.log('action: '+ $searchForm.attr('data-tdf-action'));
  //     $searchForm.attr('action', $searchForm.attr('data-tdf-action'));
  //   }
  //   else
  //   {
  //     console.log('action: '+ $searchForm.attr('data-action'));
  //     $searchForm.attr('action', $searchForm.attr('data-action'));
  //   }
  // });
}());
var priceInfo = (function () {
  var offerBox=jQuery("#action-offer");
  var init = function () {

    jQuery(document).on('tdf.price-info-loaded',function (e, info) {

      var discounts=info['discounts'];

      if(info['price'])
      {
        offerBox.find('.price__row').show();
      }
      else
      {
        offerBox.find('.price__row').hide();
      }

      offerBox.find('.js-primary-offer__row .js-price, .js-primary-offer__row .js-price-single').each(function () {
        var self=jQuery(this);
        if(info['price']) {
          self.html(info['price'].toFixed(2).toString().replace('.', ','));
        }
      });


      offerBox.find('.offer__row').each(function () {
        var self=jQuery(this);

        self.find("input").on('change',function () {
          var val=jQuery(this).val(),
            price=info['price'],
            factor=1;

          for(var i=0; i<discounts.length;  ++i){
            if( val <= parseInt(discounts[i]['quantity'])){
              break;
            }
            factor=(1-discounts[i]['discount']);
          }

          price*=factor;

          self.find('.js-price').html((Math.round((price * val) * 100) / 100).toFixed(2).toString().replace('.', ','));
          self.find('.js-price-single').html((Math.round(price * 100) / 100).toFixed(2).toString().replace('.', ','));
        })
      });
    });
  };

  init();
})();
(function () {
  function bindEvents($container) {

    $container.find('[data-ajax-action]').click(function (e) {
      e.preventDefault();

      var $container = jQuery(this).closest('[data-ajax-content]');

      if ($container.length === 0) {
        return;
      }

      jQuery.fancybox.showLoading();

      loadContent($container, jQuery(this).data('ajax-action'), function() {
        jQuery.fancybox.hideLoading();
      });
    });
  }

  function loadContent($container, url, callback)
  {
    $container.addClass('content--loading');


    jQuery.get(url, function (content) {
      var items=0;

      $container.html(content);
      if(typeof $container.find('form').data('basket-items')!="undefined")
      {
        items= $container.find('form').data('basket-items');
      }

      if($container.closest('.tdf-offcanvas').hasClass("tdf-offcanvas-basket-wrapper")){
        jQuery(document).trigger('tdf.basket-loaded',items);
      }

      bindEvents($container);
      $container.removeClass('content--loading');

      if(callback !== undefined)
      {
        callback();
      }
    });
  }

  jQuery('[data-ajax-source]').each(function () {
    var $container = jQuery(this).find('[data-ajax-content]');

    if ($container.length === 0) {
      return;
    }

    $container.on('container.bindevents', function() {
      bindEvents($container);
    });

    loadContent($container, jQuery(this).data('ajax-source'));
  });


  jQuery('[data-user-ajax]').each(function () {
    var $container = jQuery(this);

    jQuery.get(jQuery(this).data('user-ajax'), function (content) {
      $container.html(content);
    });

  })
}());
!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this.drag=a.extend({},m),this.state=a.extend({},n),this.e=a.extend({},o),this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._invalidated={},this._pipe=[],a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a[0].toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Pipe,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}function f(a){if(a.touches!==d)return{x:a.touches[0].pageX,y:a.touches[0].pageY};if(a.touches===d){if(a.pageX!==d)return{x:a.pageX,y:a.pageY};if(a.pageX===d)return{x:a.clientX,y:a.clientY}}}function g(a){var b,d,e=c.createElement("div"),f=a;for(b in f)if(d=f[b],"undefined"!=typeof e.style[d])return e=null,[d,b];return[!1]}function h(){return g(["transition","WebkitTransition","MozTransition","OTransition"])[1]}function i(){return g(["transform","WebkitTransform","MozTransform","OTransform","msTransform"])[0]}function j(){return g(["perspective","webkitPerspective","MozPerspective","OPerspective","MsPerspective"])[0]}function k(){return"ontouchstart"in b||!!navigator.msMaxTouchPoints}function l(){return b.navigator.msPointerEnabled}var m,n,o;m={start:0,startX:0,startY:0,current:0,currentX:0,currentY:0,offsetX:0,offsetY:0,distance:null,startTime:0,endTime:0,updatedX:0,targetEl:null},n={isTouch:!1,isScrolling:!1,isSwiping:!1,direction:!1,inMotion:!1},o={_onDragStart:null,_onDragMove:null,_onDragEnd:null,_transitionEnd:null,_resizer:null,_responsiveCall:null,_goToLoop:null,_checkVisibile:null},e.Defaults={items:3,loop:!1,center:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,responsiveClass:!1,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",themeClass:"owl-theme",baseClass:"owl-carousel",itemClass:"owl-item",centerClass:"center",activeClass:"active"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Plugins={},e.Pipe=[{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){var a=this._clones,b=this.$stage.children(".cloned");(b.length!==a.length||!this.settings.loop&&a.length>0)&&(this.$stage.children(".cloned").remove(),this._clones=[])}},{filter:["items","settings"],run:function(){var a,b,c=this._clones,d=this._items,e=this.settings.loop?c.length-Math.max(2*this.settings.items,4):0;for(a=0,b=Math.abs(e/2);b>a;a++)e>0?(this.$stage.children().eq(d.length+c.length-1).remove(),c.pop(),this.$stage.children().eq(0).remove(),c.pop()):(c.push(c.length/2),this.$stage.append(d[c[c.length-1]].clone().addClass("cloned")),c.push(d.length-1-(c.length-1)/2),this.$stage.prepend(d[c[c.length-1]].clone().addClass("cloned")))}},{filter:["width","items","settings"],run:function(){var a,b,c,d=this.settings.rtl?1:-1,e=(this.width()/this.settings.items).toFixed(3),f=0;for(this._coordinates=[],b=0,c=this._clones.length+this._items.length;c>b;b++)a=this._mergers[this.relative(b)],a=this.settings.mergeFit&&Math.min(a,this.settings.items)||a,f+=(this.settings.autoWidth?this._items[this.relative(b)].width()+this.settings.margin:e*a)*d,this._coordinates.push(f)}},{filter:["width","items","settings"],run:function(){var b,c,d=(this.width()/this.settings.items).toFixed(3),e={width:Math.abs(this._coordinates[this._coordinates.length-1])+2*this.settings.stagePadding,"padding-left":this.settings.stagePadding||"","padding-right":this.settings.stagePadding||""};if(this.$stage.css(e),e={width:this.settings.autoWidth?"auto":d-this.settings.margin},e[this.settings.rtl?"margin-left":"margin-right"]=this.settings.margin,!this.settings.autoWidth&&a.grep(this._mergers,function(a){return a>1}).length>0)for(b=0,c=this._coordinates.length;c>b;b++)e.width=Math.abs(this._coordinates[b])-Math.abs(this._coordinates[b-1]||0)-this.settings.margin,this.$stage.children().eq(b).css(e);else this.$stage.children().css(e)}},{filter:["width","items","settings"],run:function(a){a.current&&this.reset(this.$stage.children().index(a.current))}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;d>c;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children("."+this.settings.activeClass).removeClass(this.settings.activeClass),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass(this.settings.activeClass),this.settings.center&&(this.$stage.children("."+this.settings.centerClass).removeClass(this.settings.centerClass),this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))}}],e.prototype.initialize=function(){if(this.trigger("initialize"),this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl",this.settings.rtl),this.browserSupport(),this.settings.autoWidth&&this.state.imagesLoaded!==!0){var b,c,e;if(b=this.$element.find("img"),c=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,e=this.$element.children(c).width(),b.length&&0>=e)return this.preloadAutoWidthImages(b),!1}this.$element.addClass("owl-loading"),this.$stage=a("<"+this.settings.stageElement+' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'),this.$element.append(this.$stage.parent()),this.replace(this.$element.children().not(this.$stage.parent())),this._width=this.$element.width(),this.refresh(),this.$element.removeClass("owl-loading").addClass("owl-loaded"),this.eventsCall(),this.internalEvents(),this.addTriggerableEvents(),this.trigger("initialized")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){b>=a&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),delete e.responsive,e.responsiveClass&&this.$element.attr("class",function(a,b){return b.replace(/\b owl-responsive-\S+/g,"")}).addClass("owl-responsive-"+d)):e=a.extend({},this.options),(null===this.settings||this._breakpoint!==d)&&(this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}}))},e.prototype.optionsLogic=function(){this.$element.toggleClass("owl-center",this.settings.center),this.settings.loop&&this._items.length<this.settings.items&&(this.settings.loop=!1),this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.settings.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};c>b;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={}},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){if(0===this._items.length)return!1;(new Date).getTime();this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$stage.addClass("owl-refresh"),this.update(),this.$stage.removeClass("owl-refresh"),this.state.orientation=b.orientation,this.watchVisibility(),this.trigger("refreshed")},e.prototype.eventsCall=function(){this.e._onDragStart=a.proxy(function(a){this.onDragStart(a)},this),this.e._onDragMove=a.proxy(function(a){this.onDragMove(a)},this),this.e._onDragEnd=a.proxy(function(a){this.onDragEnd(a)},this),this.e._onResize=a.proxy(function(a){this.onResize(a)},this),this.e._transitionEnd=a.proxy(function(a){this.transitionEnd(a)},this),this.e._preventClick=a.proxy(function(a){this.preventClick(a)},this)},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this.e._onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return this._items.length?this._width===this.$element.width()?!1:this.trigger("resize").isDefaultPrevented()?!1:(this._width=this.$element.width(),this.invalidate("width"),this.refresh(),void this.trigger("resized")):!1},e.prototype.eventsRouter=function(a){var b=a.type;"mousedown"===b||"touchstart"===b?this.onDragStart(a):"mousemove"===b||"touchmove"===b?this.onDragMove(a):"mouseup"===b||"touchend"===b?this.onDragEnd(a):"touchcancel"===b&&this.onDragEnd(a)},e.prototype.internalEvents=function(){var c=(k(),l());this.settings.mouseDrag?(this.$stage.on("mousedown",a.proxy(function(a){this.eventsRouter(a)},this)),this.$stage.on("dragstart",function(){return!1}),this.$stage.get(0).onselectstart=function(){return!1}):this.$element.addClass("owl-text-select-on"),this.settings.touchDrag&&!c&&this.$stage.on("touchstart touchcancel",a.proxy(function(a){this.eventsRouter(a)},this)),this.transitionEndVendor&&this.on(this.$stage.get(0),this.transitionEndVendor,this.e._transitionEnd,!1),this.settings.responsive!==!1&&this.on(b,"resize",a.proxy(this.onThrottledResize,this))},e.prototype.onDragStart=function(d){var e,g,h,i;if(e=d.originalEvent||d||b.event,3===e.which||this.state.isTouch)return!1;if("mousedown"===e.type&&this.$stage.addClass("owl-grab"),this.trigger("drag"),this.drag.startTime=(new Date).getTime(),this.speed(0),this.state.isTouch=!0,this.state.isScrolling=!1,this.state.isSwiping=!1,this.drag.distance=0,g=f(e).x,h=f(e).y,this.drag.offsetX=this.$stage.position().left,this.drag.offsetY=this.$stage.position().top,this.settings.rtl&&(this.drag.offsetX=this.$stage.position().left+this.$stage.width()-this.width()+this.settings.margin),this.state.inMotion&&this.support3d)i=this.getTransformProperty(),this.drag.offsetX=i,this.animate(i),this.state.inMotion=!0;else if(this.state.inMotion&&!this.support3d)return this.state.inMotion=!1,!1;this.drag.startX=g-this.drag.offsetX,this.drag.startY=h-this.drag.offsetY,this.drag.start=g-this.drag.startX,this.drag.targetEl=e.target||e.srcElement,this.drag.updatedX=this.drag.start,("IMG"===this.drag.targetEl.tagName||"A"===this.drag.targetEl.tagName)&&(this.drag.targetEl.draggable=!1),a(c).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents",a.proxy(function(a){this.eventsRouter(a)},this))},e.prototype.onDragMove=function(a){var c,e,g,h,i,j;this.state.isTouch&&(this.state.isScrolling||(c=a.originalEvent||a||b.event,e=f(c).x,g=f(c).y,this.drag.currentX=e-this.drag.startX,this.drag.currentY=g-this.drag.startY,this.drag.distance=this.drag.currentX-this.drag.offsetX,this.drag.distance<0?this.state.direction=this.settings.rtl?"right":"left":this.drag.distance>0&&(this.state.direction=this.settings.rtl?"left":"right"),this.settings.loop?this.op(this.drag.currentX,">",this.coordinates(this.minimum()))&&"right"===this.state.direction?this.drag.currentX-=(this.settings.center&&this.coordinates(0))-this.coordinates(this._items.length):this.op(this.drag.currentX,"<",this.coordinates(this.maximum()))&&"left"===this.state.direction&&(this.drag.currentX+=(this.settings.center&&this.coordinates(0))-this.coordinates(this._items.length)):(h=this.coordinates(this.settings.rtl?this.maximum():this.minimum()),i=this.coordinates(this.settings.rtl?this.minimum():this.maximum()),j=this.settings.pullDrag?this.drag.distance/5:0,this.drag.currentX=Math.max(Math.min(this.drag.currentX,h+j),i+j)),(this.drag.distance>8||this.drag.distance<-8)&&(c.preventDefault!==d?c.preventDefault():c.returnValue=!1,this.state.isSwiping=!0),this.drag.updatedX=this.drag.currentX,(this.drag.currentY>16||this.drag.currentY<-16)&&this.state.isSwiping===!1&&(this.state.isScrolling=!0,this.drag.updatedX=this.drag.start),this.animate(this.drag.updatedX)))},e.prototype.onDragEnd=function(b){var d,e,f;if(this.state.isTouch){if("mouseup"===b.type&&this.$stage.removeClass("owl-grab"),this.trigger("dragged"),this.drag.targetEl.removeAttribute("draggable"),this.state.isTouch=!1,this.state.isScrolling=!1,this.state.isSwiping=!1,0===this.drag.distance&&this.state.inMotion!==!0)return this.state.inMotion=!1,!1;this.drag.endTime=(new Date).getTime(),d=this.drag.endTime-this.drag.startTime,e=Math.abs(this.drag.distance),(e>3||d>300)&&this.removeClick(this.drag.targetEl),f=this.closest(this.drag.updatedX),this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(f),this.invalidate("position"),this.update(),this.settings.pullDrag||this.drag.updatedX!==this.coordinates(f)||this.transitionEnd(),this.drag.distance=0,a(c).off(".owl.dragEvents")}},e.prototype.removeClick=function(c){this.drag.targetEl=c,a(c).on("click.preventClick",this.e._preventClick),b.setTimeout(function(){a(c).off("click.preventClick")},300)},e.prototype.preventClick=function(b){b.preventDefault?b.preventDefault():b.returnValue=!1,b.stopPropagation&&b.stopPropagation(),a(b.target).off("click.preventClick")},e.prototype.getTransformProperty=function(){var a,c;return a=b.getComputedStyle(this.$stage.get(0),null).getPropertyValue(this.vendorName+"transform"),a=a.replace(/matrix(3d)?\(|\)/g,"").split(","),c=16===a.length,c!==!0?a[4]:a[12]},e.prototype.closest=function(b){var c=-1,d=30,e=this.width(),f=this.coordinates();return this.settings.freeDrag||a.each(f,a.proxy(function(a,g){return b>g-d&&g+d>b?c=a:this.op(b,"<",g)&&this.op(b,">",f[a+1]||g-e)&&(c="left"===this.state.direction?a+1:a),-1===c},this)),this.settings.loop||(this.op(b,">",f[this.minimum()])?c=b=this.minimum():this.op(b,"<",f[this.maximum()])&&(c=b=this.maximum())),c},e.prototype.animate=function(b){this.trigger("translate"),this.state.inMotion=this.speed()>0,this.support3d?this.$stage.css({transform:"translate3d("+b+"px,0px, 0px)",transition:this.speed()/1e3+"s"}):this.state.isTouch?this.$stage.css({left:b+"px"}):this.$stage.animate({left:b},this.speed()/1e3,this.settings.fallbackEasing,a.proxy(function(){this.state.inMotion&&this.transitionEnd()},this))},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(a){this._invalidated[a]=!0},e.prototype.reset=function(a){a=this.normalize(a),a!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(b,c){var e=c?this._items.length:this._items.length+this._clones.length;return!a.isNumeric(b)||1>e?d:b=this._clones.length?(b%e+e)%e:Math.max(this.minimum(c),Math.min(this.maximum(c),b))},e.prototype.relative=function(a){return a=this.normalize(a),a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=0,f=this.settings;if(a)return this._items.length-1;if(!f.loop&&f.center)b=this._items.length-1;else if(f.loop||f.center)if(f.loop||f.center)b=this._items.length+f.items;else{if(!f.autoWidth&&!f.merge)throw"Can not detect maximum absolute position.";for(revert=f.rtl?1:-1,c=this.$stage.width()-this.$element.width();(d=this.coordinates(e))&&!(d*revert>=c);)b=++e}else b=this._items.length-f.items;return b},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2===0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c=null;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[b-1]||0))/2*(this.settings.rtl?-1:1)):c=this._coordinates[b-1]||0,c)},e.prototype.duration=function(a,b,c){return Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(c,d){if(this.settings.loop){var e=c-this.relative(this.current()),f=this.current(),g=this.current(),h=this.current()+e,i=0>g-h?!0:!1,j=this._clones.length+this._items.length;h<this.settings.items&&i===!1?(f=g+this._items.length,this.reset(f)):h>=j-this.settings.items&&i===!0&&(f=g-this._items.length,this.reset(f)),b.clearTimeout(this.e._goToLoop),this.e._goToLoop=b.setTimeout(a.proxy(function(){this.speed(this.duration(this.current(),f+e,d)),this.current(f+e),this.update()},this),30)}else this.speed(this.duration(this.current(),c,d)),this.current(c),this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.transitionEnd=function(a){return a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0))?!1:(this.state.inMotion=!1,void this.trigger("translated"))},e.prototype.viewport=function(){var d;if(this.options.responsiveBaseElement!==b)d=a(this.options.responsiveBaseElement).width();else if(b.innerWidth)d=b.innerWidth;else{if(!c.documentElement||!c.documentElement.clientWidth)throw"Can not detect viewport width.";d=c.documentElement.clientWidth}return d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)},this)),this.reset(a.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(a,b){b=b===d?this._items.length:this.normalize(b,!0),this.trigger("add",{content:a,position:b}),0===this._items.length||b===this._items.length?(this.$stage.append(a),this._items.push(a),this._mergers.push(1*a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)):(this._items[b].before(a),this._items.splice(b,0,a),this._mergers.splice(b,0,1*a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)),this.invalidate("items"),this.trigger("added",{content:a,position:b})},e.prototype.remove=function(a){a=this.normalize(a,!0),a!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.addTriggerableEvents=function(){var b=a.proxy(function(b,c){return a.proxy(function(a){a.relatedTarget!==this&&(this.suppress([c]),b.apply(this,[].slice.call(arguments,1)),this.release([c]))},this)},this);a.each({next:this.next,prev:this.prev,to:this.to,destroy:this.destroy,refresh:this.refresh,replace:this.replace,add:this.add,remove:this.remove},a.proxy(function(a,c){this.$element.on(a+".owl.carousel",b(c,a+".owl.carousel"))},this))},e.prototype.watchVisibility=function(){function c(a){return a.offsetWidth>0&&a.offsetHeight>0}function d(){c(this.$element.get(0))&&(this.$element.removeClass("owl-hidden"),this.refresh(),b.clearInterval(this.e._checkVisibile))}c(this.$element.get(0))||(this.$element.addClass("owl-hidden"),b.clearInterval(this.e._checkVisibile),this.e._checkVisibile=b.setInterval(a.proxy(d,this),500))},e.prototype.preloadAutoWidthImages=function(b){var c,d,e,f;c=0,d=this,b.each(function(g,h){e=a(h),f=new Image,f.onload=function(){c++,e.attr("src",f.src),e.css("opacity",1),c>=b.length&&(d.state.imagesLoaded=!0,d.initialize())},f.src=e.attr("src")||e.attr("data-src")||e.attr("data-src-retina")})},e.prototype.destroy=function(){this.$element.hasClass(this.settings.themeClass)&&this.$element.removeClass(this.settings.themeClass),this.settings.responsive!==!1&&a(b).off("resize.owl.carousel"),this.transitionEndVendor&&this.off(this.$stage.get(0),this.transitionEndVendor,this.e._transitionEnd);for(var d in this._plugins)this._plugins[d].destroy();(this.settings.mouseDrag||this.settings.touchDrag)&&(this.$stage.off("mousedown touchstart touchcancel"),a(c).off(".owl.dragEvents"),this.$stage.get(0).onselectstart=function(){},this.$stage.off("dragstart",function(){return!1})),this.$element.off(".owl"),this.$stage.children(".cloned").remove(),this.e=null,this.$element.removeData("owlCarousel"),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.unwrap()},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:c>a;case">":return d?c>a:a>c;case">=":return d?c>=a:a>=c;case"<=":return d?a>=c:c>=a}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d){var e={item:{count:this._items.length,index:this.current()}},f=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),g=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},e,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(g)}),this.$element.trigger(g),this.settings&&"function"==typeof this.settings[f]&&this.settings[f].apply(this,g)),g},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.browserSupport=function(){if(this.support3d=j(),this.support3d){this.transformVendor=i();var a=["transitionend","webkitTransitionEnd","transitionend","oTransitionEnd"];this.transitionEndVendor=a[h()],this.vendorName=this.transformVendor.replace(/Transform/i,""),this.vendorName=""!==this.vendorName?"-"+this.vendorName.toLowerCase()+"-":""}this.state.orientation=b.orientation},a.fn.owlCarousel=function(b){return this.each(function(){a(this).data("owlCarousel")||a(this).data("owlCarousel",new e(this,b))})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b){var c=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type))for(var c=this._core.settings,d=c.center&&Math.ceil(c.items/2)||c.items,e=c.center&&-1*d||0,f=(b.property&&b.property.value||this._core.current())+e,g=this._core.clones().length,h=a.proxy(function(a,b){this.load(b)},this);e++<d;)this.load(g/2+this._core.relative(f)),g&&a.each(this._core.clones(this._core.relative(f++)),h)},this)},this._core.options=a.extend({},c.Defaults,this._core.options),this._core.$element.on(this._handlers)};c.Defaults={lazyLoad:!1},c.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":"url("+g+")",opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},c.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=c}(window.Zepto||window.jQuery,window,document),function(a){var b=function(c){this._core=c,this._handlers={"initialized.owl.carousel":a.proxy(function(){this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){this._core.settings.autoHeight&&"position"==a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass)===this._core.$stage.children().eq(this._core.current())&&this.update()},this)},this._core.options=a.extend({},b.Defaults,this._core.options),this._core.$element.on(this._handlers)};b.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},b.prototype.update=function(){this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)},b.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=b}(window.Zepto||window.jQuery,window,document),function(a,b,c){var d=function(b){this._core=b,this._videos={},this._playing=null,this._fullscreen=!1,this._handlers={"resize.owl.carousel":a.proxy(function(a){this._core.settings.video&&!this.isInFullScreen()&&a.preventDefault()},this),"refresh.owl.carousel changed.owl.carousel":a.proxy(function(){this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))},this)},this._core.options=a.extend({},d.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};d.Defaults={video:!1,videoHeight:!1,videoWidth:!1},d.prototype.fetch=function(a,b){var c=a.attr("data-vimeo-id")?"vimeo":"youtube",d=a.attr("data-vimeo-id")||a.attr("data-youtube-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else{if(!(d[3].indexOf("vimeo")>-1))throw new Error("Video URL not supported.");c="vimeo"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},d.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?'style="width:'+c.width+"px;height:"+c.height+'px;"':"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(a){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?'<div class="owl-video-tn '+j+'" '+i+'="'+a+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+a+')"></div>',b.after(d),b.after(e)};return b.wrap('<div class="owl-video-wrapper"'+g+"></div>"),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length?(l(h.attr(i)),h.remove(),!1):void("youtube"===c.type?(f="http://img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type&&a.ajax({type:"GET",url:"http://vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}))},d.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null},d.prototype.play=function(b){this._core.trigger("play",null,"video"),this._playing&&this.stop();var c,d,e=a(b.target||b.srcElement),f=e.closest("."+this._core.settings.itemClass),g=this._videos[f.attr("data-video")],h=g.width||"100%",i=g.height||this._core.$stage.height();"youtube"===g.type?c='<iframe width="'+h+'" height="'+i+'" src="http://www.youtube.com/embed/'+g.id+"?autoplay=1&v="+g.id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===g.type&&(c='<iframe src="http://player.vimeo.com/video/'+g.id+'?autoplay=1" width="'+h+'" height="'+i+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'),f.addClass("owl-video-playing"),this._playing=f,d=a('<div style="height:'+i+"px; width:"+h+'px" class="owl-video-frame">'+c+"</div>"),e.after(d)},d.prototype.isInFullScreen=function(){var d=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return d&&a(d).parent().hasClass("owl-video-frame")&&(this._core.speed(0),this._fullscreen=!0),d&&this._fullscreen&&this._playing?!1:this._fullscreen?(this._fullscreen=!1,!1):this._playing&&this._core.state.orientation!==b.orientation?(this._core.state.orientation=b.orientation,!1):!0},d.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=d}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){this.swapping="translated"==a.type},this),"translate.owl.carousel":a.proxy(function(){this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&this.core.support3d){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",c)),f&&e.addClass("animated owl-animated-in").addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",c))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.transitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c){var d=function(b){this.core=b,this.core.options=a.extend({},d.Defaults,this.core.options),this.handlers={"translated.owl.carousel refreshed.owl.carousel":a.proxy(function(){this.autoplay()
},this),"play.owl.autoplay":a.proxy(function(a,b,c){this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(){this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this.core.settings.autoplayHoverPause&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this.core.settings.autoplayHoverPause&&this.autoplay()},this)},this.core.$element.on(this.handlers)};d.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},d.prototype.autoplay=function(){this.core.settings.autoplay&&!this.core.state.videoPlay?(b.clearInterval(this.interval),this.interval=b.setInterval(a.proxy(function(){this.play()},this),this.core.settings.autoplayTimeout)):b.clearInterval(this.interval)},d.prototype.play=function(){return c.hidden===!0||this.core.state.isTouch||this.core.state.isScrolling||this.core.state.isSwiping||this.core.state.inMotion?void 0:this.core.settings.autoplay===!1?void b.clearInterval(this.interval):void this.core.next(this.core.settings.autoplaySpeed)},d.prototype.stop=function(){b.clearInterval(this.interval)},d.prototype.pause=function(){b.clearInterval(this.interval)},d.prototype.destroy=function(){var a,c;b.clearInterval(this.interval);for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=d}(window.Zepto||window.jQuery,window,document),function(a){"use strict";var b=function(c){this._core=c,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){this._core.settings.dotsData&&this._templates.push(a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))},this),"add.owl.carousel":a.proxy(function(b){this._core.settings.dotsData&&this._templates.splice(b.position,0,a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))},this),"remove.owl.carousel prepared.owl.carousel":a.proxy(function(a){this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"change.owl.carousel":a.proxy(function(a){if("position"==a.property.name&&!this._core.state.revert&&!this._core.settings.loop&&this._core.settings.navRewind){var b=this._core.current(),c=this._core.maximum(),d=this._core.minimum();a.data=a.property.value>c?b>=c?d:c:a.property.value<d?c:a.property.value}},this),"changed.owl.carousel":a.proxy(function(a){"position"==a.property.name&&this.draw()},this),"refreshed.owl.carousel":a.proxy(function(){this._initialized||(this.initialize(),this._initialized=!0),this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation")},this)},this._core.options=a.extend({},b.Defaults,this._core.options),this.$element.on(this._handlers)};b.Defaults={nav:!1,navRewind:!0,navText:["prev","next"],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotData:!1,dotsSpeed:!1,dotsContainer:!1,controlsClass:"owl-controls"},b.prototype.initialize=function(){var b,c,d=this._core.settings;d.dotsData||(this._templates=[a("<div>").addClass(d.dotClass).append(a("<span>")).prop("outerHTML")]),d.navContainer&&d.dotsContainer||(this._controls.$container=a("<div>").addClass(d.controlsClass).appendTo(this.$element)),this._controls.$indicators=d.dotsContainer?a(d.dotsContainer):a("<div>").hide().addClass(d.dotsClass).appendTo(this._controls.$container),this._controls.$indicators.on("click","div",a.proxy(function(b){var c=a(b.target).parent().is(this._controls.$indicators)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(c,d.dotsSpeed)},this)),b=d.navContainer?a(d.navContainer):a("<div>").addClass(d.navContainerClass).prependTo(this._controls.$container),this._controls.$next=a("<"+d.navElement+">"),this._controls.$previous=this._controls.$next.clone(),this._controls.$previous.addClass(d.navClass[0]).html(d.navText[0]).hide().prependTo(b).on("click",a.proxy(function(){this.prev(d.navSpeed)},this)),this._controls.$next.addClass(d.navClass[1]).html(d.navText[1]).hide().appendTo(b).on("click",a.proxy(function(){this.next(d.navSpeed)},this));for(c in this._overrides)this._core[c]=a.proxy(this[c],this)},b.prototype.destroy=function(){var a,b,c,d;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},b.prototype.update=function(){var a,b,c,d=this._core.settings,e=this._core.clones().length/2,f=e+this._core.items().length,g=d.center||d.autoWidth||d.dotData?1:d.dotsEach||d.items;if("page"!==d.slideBy&&(d.slideBy=Math.min(d.slideBy,d.items)),d.dots||"page"==d.slideBy)for(this._pages=[],a=e,b=0,c=0;f>a;a++)(b>=g||0===b)&&(this._pages.push({start:a-e,end:a-e+g-1}),b=0,++c),b+=this._core.mergers(this._core.relative(a))},b.prototype.draw=function(){var b,c,d="",e=this._core.settings,f=(this._core.$stage.children(),this._core.relative(this._core.current()));if(!e.nav||e.loop||e.navRewind||(this._controls.$previous.toggleClass("disabled",0>=f),this._controls.$next.toggleClass("disabled",f>=this._core.maximum())),this._controls.$previous.toggle(e.nav),this._controls.$next.toggle(e.nav),e.dots){if(b=this._pages.length-this._controls.$indicators.children().length,e.dotData&&0!==b){for(c=0;c<this._controls.$indicators.children().length;c++)d+=this._templates[this._core.relative(c)];this._controls.$indicators.html(d)}else b>0?(d=new Array(b+1).join(this._templates[0]),this._controls.$indicators.append(d)):0>b&&this._controls.$indicators.children().slice(b).remove();this._controls.$indicators.find(".active").removeClass("active"),this._controls.$indicators.children().eq(a.inArray(this.current(),this._pages)).addClass("active")}this._controls.$indicators.toggle(e.dots)},b.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotData?1:c.dotsEach||c.items)}},b.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,function(a){return a.start<=b&&a.end>=b}).pop()},b.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},b.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},b.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},b.prototype.to=function(b,c,d){var e;d?a.proxy(this._overrides.to,this._core)(b,c):(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c))},a.fn.owlCarousel.Constructor.Plugins.Navigation=b}(window.Zepto||window.jQuery,window,document),function(a,b){"use strict";var c=function(d){this._core=d,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(){"URLHash"==this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){var c=a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");this._hashes[c]=b.content},this)},this._core.options=a.extend({},c.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(){var a=b.location.hash.substring(1),c=this._core.$stage.children(),d=this._hashes[a]&&c.index(this._hashes[a])||0;return a?void this._core.to(d,!1,!0):!1},this))};c.Defaults={URLhashListener:!1},c.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=c}(window.Zepto||window.jQuery,window,document);
/*! =========================================================
 * bootstrap-slider.js
 *
 * Maintainers:
 *		Kyle Kemp
 *			- Twitter: @seiyria
 *			- Github:  seiyria
 *		Rohit Kalkur
 *			- Twitter: @Rovolutionary
 *			- Github:  rovolution
 *
 * =========================================================
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */


/**
 * Bridget makes jQuery widgets
 * v1.0.1
 * MIT license
 */

(function(factory) {
	if(typeof define === "function" && define.amd) {
		try {
			define(["jquery"], factory);
		} catch (err) {
			define([], factory);
		}
	}
	else if(typeof module === "object" && module.exports) {
		var jQuery;
		try {
			jQuery = require("jquery");
		}
		catch (err) {
			jQuery = null;
		}
		module.exports = factory(jQuery);
	}
	else if(window) {
		window.Slider = factory(window.jQuery);
	}
}(function($) {
	// Reference to Slider constructor
	var Slider;


	(function( $ ) {

		'use strict';

		// -------------------------- utils -------------------------- //

		var slice = Array.prototype.slice;

		function noop() {}

		// -------------------------- definition -------------------------- //

		function defineBridget( $ ) {

			// bail if no jQuery
			if ( !$ ) {
				return;
			}

			// -------------------------- addOptionMethod -------------------------- //

			/**
			 * adds option method -> $().plugin('option', {...})
			 * @param {Function} PluginClass - constructor class
			 */
			function addOptionMethod( PluginClass ) {
				// don't overwrite original option method
				if ( PluginClass.prototype.option ) {
					return;
				}

			  // option setter
			  PluginClass.prototype.option = function( opts ) {
			    // bail out if not an object
			    if ( !$.isPlainObject( opts ) ){
			      return;
			    }
			    this.options = $.extend( true, this.options, opts );
			  };
			}


			// -------------------------- plugin bridge -------------------------- //

			// helper function for logging errors
			// $.error breaks jQuery chaining
			var logError = typeof console === 'undefined' ? noop :
			  function( message ) {
			    console.error( message );
			  };

			/**
			 * jQuery plugin bridge, access methods like $elem.plugin('method')
			 * @param {String} namespace - plugin name
			 * @param {Function} PluginClass - constructor class
			 */
			function bridge( namespace, PluginClass ) {
			  // add to jQuery fn namespace
			  $.fn[ namespace ] = function( options ) {
			    if ( typeof options === 'string' ) {
			      // call plugin method when first argument is a string
			      // get arguments for method
			      var args = slice.call( arguments, 1 );

			      for ( var i=0, len = this.length; i < len; i++ ) {
			        var elem = this[i];
			        var instance = $.data( elem, namespace );
			        if ( !instance ) {
			          logError( "cannot call methods on " + namespace + " prior to initialization; " +
			            "attempted to call '" + options + "'" );
			          continue;
			        }
			        if ( !$.isFunction( instance[options] ) || options.charAt(0) === '_' ) {
			          logError( "no such method '" + options + "' for " + namespace + " instance" );
			          continue;
			        }

			        // trigger method with arguments
			        var returnValue = instance[ options ].apply( instance, args);

			        // break look and return first value if provided
			        if ( returnValue !== undefined && returnValue !== instance) {
			          return returnValue;
			        }
			      }
			      // return this if no return value
			      return this;
			    } else {
			      var objects = this.map( function() {
			        var instance = $.data( this, namespace );
			        if ( instance ) {
			          // apply options & init
			          instance.option( options );
			          instance._init();
			        } else {
			          // initialize new instance
			          instance = new PluginClass( this, options );
			          $.data( this, namespace, instance );
			        }
			        return $(this);
			      });

			      if(!objects || objects.length > 1) {
			      	return objects;
			      } else {
			      	return objects[0];
			      }
			    }
			  };

			}

			// -------------------------- bridget -------------------------- //

			/**
			 * converts a Prototypical class into a proper jQuery plugin
			 *   the class must have a ._init method
			 * @param {String} namespace - plugin name, used in $().pluginName
			 * @param {Function} PluginClass - constructor class
			 */
			$.bridget = function( namespace, PluginClass ) {
			  addOptionMethod( PluginClass );
			  bridge( namespace, PluginClass );
			};

			return $.bridget;

		}

	  	// get jquery from browser global
	  	defineBridget( $ );

	})( $ );


	/*************************************************

			BOOTSTRAP-SLIDER SOURCE CODE

	**************************************************/

	(function($) {

		var ErrorMsgs = {
			formatInvalidInputErrorMsg : function(input) {
				return "Invalid input value '" + input + "' passed in";
			},
			callingContextNotSliderInstance : "Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method"
		};

		var SliderScale = {
			linear: {
				toValue: function(percentage) {
					var rawValue = percentage/100 * (this.options.max - this.options.min);
					var shouldAdjustWithBase = true;
					if (this.options.ticks_positions.length > 0) {
						var minv, maxv, minp, maxp = 0;
						for (var i = 1; i < this.options.ticks_positions.length; i++) {
							if (percentage <= this.options.ticks_positions[i]) {
								minv = this.options.ticks[i-1];
								minp = this.options.ticks_positions[i-1];
								maxv = this.options.ticks[i];
								maxp = this.options.ticks_positions[i];

								break;
							}
						}
						var partialPercentage = (percentage - minp) / (maxp - minp);
						rawValue = minv + partialPercentage * (maxv - minv);
						shouldAdjustWithBase = false;
					}

					var adjustment = shouldAdjustWithBase ? this.options.min : 0;
					var value = adjustment + Math.round(rawValue / this.options.step) * this.options.step;
					if (value < this.options.min) {
						return this.options.min;
					} else if (value > this.options.max) {
						return this.options.max;
					} else {
						return value;
					}
				},
				toPercentage: function(value) {
					if (this.options.max === this.options.min) {
						return 0;
					}

					if (this.options.ticks_positions.length > 0) {
						var minv, maxv, minp, maxp = 0;
						for (var i = 0; i < this.options.ticks.length; i++) {
							if (value  <= this.options.ticks[i]) {
								minv = (i > 0) ? this.options.ticks[i-1] : 0;
								minp = (i > 0) ? this.options.ticks_positions[i-1] : 0;
								maxv = this.options.ticks[i];
								maxp = this.options.ticks_positions[i];

								break;
							}
						}
						if (i > 0) {
							var partialPercentage = (value - minv) / (maxv - minv);
							return minp + partialPercentage * (maxp - minp);
						}
					}

					return 100 * (value - this.options.min) / (this.options.max - this.options.min);
				}
			},

			logarithmic: {
				/* Based on http://stackoverflow.com/questions/846221/logarithmic-slider */
				toValue: function(percentage) {
					var min = (this.options.min === 0) ? 0 : Math.log(this.options.min);
					var max = Math.log(this.options.max);
					var value = Math.exp(min + (max - min) * percentage / 100);
					value = this.options.min + Math.round((value - this.options.min) / this.options.step) * this.options.step;
					/* Rounding to the nearest step could exceed the min or
					 * max, so clip to those values. */
					if (value < this.options.min) {
						return this.options.min;
					} else if (value > this.options.max) {
						return this.options.max;
					} else {
						return value;
					}
				},
				toPercentage: function(value) {
					if (this.options.max === this.options.min) {
						return 0;
					} else {
						var max = Math.log(this.options.max);
						var min = this.options.min === 0 ? 0 : Math.log(this.options.min);
						var v = value === 0 ? 0 : Math.log(value);
						return 100 * (v - min) / (max - min);
					}
				}
			}
		};


		/*************************************************

							CONSTRUCTOR

		**************************************************/
		Slider = function(element, options) {
			createNewSlider.call(this, element, options);
			return this;
		};

		function createNewSlider(element, options) {

			/*
				The internal state object is used to store data about the current 'state' of slider.

				This includes values such as the `value`, `enabled`, etc...
			*/
			this._state = {
				value: null,
				enabled: null,
				offset: null,
				size: null,
				percentage: null,
				inDrag: false,
				over: false
			};


			if(typeof element === "string") {
				this.element = document.querySelector(element);
			} else if(element instanceof HTMLElement) {
				this.element = element;
			}

			/*************************************************

							Process Options

			**************************************************/
			options = options ? options : {};
			var optionTypes = Object.keys(this.defaultOptions);

			for(var i = 0; i < optionTypes.length; i++) {
				var optName = optionTypes[i];

				// First check if an option was passed in via the constructor
				var val = options[optName];
				// If no data attrib, then check data atrributes
				val = (typeof val !== 'undefined') ? val : getDataAttrib(this.element, optName);
				// Finally, if nothing was specified, use the defaults
				val = (val !== null) ? val : this.defaultOptions[optName];

				// Set all options on the instance of the Slider
				if(!this.options) {
					this.options = {};
				}
				this.options[optName] = val;
			}

			/*
				Validate `tooltip_position` against 'orientation`
				- if `tooltip_position` is incompatible with orientation, swith it to a default compatible with specified `orientation`
					-- default for "vertical" -> "right"
					-- default for "horizontal" -> "left"
			*/
			if(this.options.orientation === "vertical" && (this.options.tooltip_position === "top" || this.options.tooltip_position === "bottom")) {

				this.options.tooltip_position	= "right";

			}
			else if(this.options.orientation === "horizontal" && (this.options.tooltip_position === "left" || this.options.tooltip_position === "right")) {

				this.options.tooltip_position	= "top";

			}

			function getDataAttrib(element, optName) {
				var dataName = "data-slider-" + optName.replace(/_/g, '-');
				var dataValString = element.getAttribute(dataName);

				try {
					return JSON.parse(dataValString);
				}
				catch(err) {
					return dataValString;
				}
			}

			/*************************************************

							Create Markup

			**************************************************/

			var origWidth = this.element.style.width;
			var updateSlider = false;
			var parent = this.element.parentNode;
			var sliderTrackSelection;
			var sliderTrackLow, sliderTrackHigh;
			var sliderMinHandle;
			var sliderMaxHandle;

			if (this.sliderElem) {
				updateSlider = true;
			} else {
				/* Create elements needed for slider */
				this.sliderElem = document.createElement("div");
				this.sliderElem.className = "slider";

				/* Create slider track elements */
				var sliderTrack = document.createElement("div");
				sliderTrack.className = "slider-track";

				sliderTrackLow = document.createElement("div");
				sliderTrackLow.className = "slider-track-low";

				sliderTrackSelection = document.createElement("div");
				sliderTrackSelection.className = "slider-selection";

				sliderTrackHigh = document.createElement("div");
				sliderTrackHigh.className = "slider-track-high";

				sliderMinHandle = document.createElement("div");
				sliderMinHandle.className = "slider-handle min-slider-handle";
				sliderMinHandle.setAttribute('role', 'slider');
				sliderMinHandle.setAttribute('aria-valuemin', this.options.min);
				sliderMinHandle.setAttribute('aria-valuemax', this.options.max);

				sliderMaxHandle = document.createElement("div");
				sliderMaxHandle.className = "slider-handle max-slider-handle";
				sliderMaxHandle.setAttribute('role', 'slider');
				sliderMaxHandle.setAttribute('aria-valuemin', this.options.min);
				sliderMaxHandle.setAttribute('aria-valuemax', this.options.max);

				sliderTrack.appendChild(sliderTrackLow);
				sliderTrack.appendChild(sliderTrackSelection);
				sliderTrack.appendChild(sliderTrackHigh);

				/* Add aria-labelledby to handle's */
				var isLabelledbyArray = Array.isArray(this.options.labelledby);
				if (isLabelledbyArray && this.options.labelledby[0]) {
					sliderMinHandle.setAttribute('aria-labelledby', this.options.labelledby[0]);
				}
				if (isLabelledbyArray && this.options.labelledby[1]) {
					sliderMaxHandle.setAttribute('aria-labelledby', this.options.labelledby[1]);
				}
				if (!isLabelledbyArray && this.options.labelledby) {
					sliderMinHandle.setAttribute('aria-labelledby', this.options.labelledby);
					sliderMaxHandle.setAttribute('aria-labelledby', this.options.labelledby);
				}

				/* Create ticks */
				this.ticks = [];
				if (Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
					for (i = 0; i < this.options.ticks.length; i++) {
						var tick = document.createElement('div');
						tick.className = 'slider-tick';

						this.ticks.push(tick);
						sliderTrack.appendChild(tick);
					}

					sliderTrackSelection.className += " tick-slider-selection";
				}

				sliderTrack.appendChild(sliderMinHandle);
				sliderTrack.appendChild(sliderMaxHandle);

				this.tickLabels = [];
				if (Array.isArray(this.options.ticks_labels) && this.options.ticks_labels.length > 0) {
					this.tickLabelContainer = document.createElement('div');
					this.tickLabelContainer.className = 'slider-tick-label-container';

					for (i = 0; i < this.options.ticks_labels.length; i++) {
						var label = document.createElement('div');
						var noTickPositionsSpecified = this.options.ticks_positions.length === 0;
						var tickLabelsIndex = (this.options.reversed && noTickPositionsSpecified) ? (this.options.ticks_labels.length - (i + 1)) : i;
						label.className = 'slider-tick-label';
						label.innerHTML = this.options.ticks_labels[tickLabelsIndex];

						this.tickLabels.push(label);
						this.tickLabelContainer.appendChild(label);
					}
				}


				var createAndAppendTooltipSubElements = function(tooltipElem) {
					var arrow = document.createElement("div");
					arrow.className = "tooltip-arrow";

					var inner = document.createElement("div");
					inner.className = "tooltip-inner";

					tooltipElem.appendChild(arrow);
					tooltipElem.appendChild(inner);

				};

				/* Create tooltip elements */
				var sliderTooltip = document.createElement("div");
				sliderTooltip.className = "tooltip tooltip-main";
				sliderTooltip.setAttribute('role', 'presentation');
				createAndAppendTooltipSubElements(sliderTooltip);

				var sliderTooltipMin = document.createElement("div");
				sliderTooltipMin.className = "tooltip tooltip-min";
				sliderTooltipMin.setAttribute('role', 'presentation');
				createAndAppendTooltipSubElements(sliderTooltipMin);

				var sliderTooltipMax = document.createElement("div");
				sliderTooltipMax.className = "tooltip tooltip-max";
				sliderTooltipMax.setAttribute('role', 'presentation');
				createAndAppendTooltipSubElements(sliderTooltipMax);


				/* Append components to sliderElem */
				this.sliderElem.appendChild(sliderTrack);
				this.sliderElem.appendChild(sliderTooltip);
				this.sliderElem.appendChild(sliderTooltipMin);
				this.sliderElem.appendChild(sliderTooltipMax);

				if (this.tickLabelContainer) {
					this.sliderElem.appendChild(this.tickLabelContainer);
				}

				/* Append slider element to parent container, right before the original <input> element */
				parent.insertBefore(this.sliderElem, this.element);

				/* Hide original <input> element */
				this.element.style.display = "none";
			}
			/* If JQuery exists, cache JQ references */
			if($) {
				this.$element = $(this.element);
				this.$sliderElem = $(this.sliderElem);
			}

			/*************************************************

								Setup

			**************************************************/
			this.eventToCallbackMap = {};
			this.sliderElem.id = this.options.id;

			this.touchCapable = 'ontouchstart' in window || (window.DocumentTouch && document instanceof window.DocumentTouch);

			this.touchX = 0;
			this.touchY = 0;

			this.tooltip = this.sliderElem.querySelector('.tooltip-main');
			this.tooltipInner = this.tooltip.querySelector('.tooltip-inner');

			this.tooltip_min = this.sliderElem.querySelector('.tooltip-min');
			this.tooltipInner_min = this.tooltip_min.querySelector('.tooltip-inner');

			this.tooltip_max = this.sliderElem.querySelector('.tooltip-max');
			this.tooltipInner_max= this.tooltip_max.querySelector('.tooltip-inner');

			if (SliderScale[this.options.scale]) {
				this.options.scale = SliderScale[this.options.scale];
			}

			if (updateSlider === true) {
				// Reset classes
				this._removeClass(this.sliderElem, 'slider-horizontal');
				this._removeClass(this.sliderElem, 'slider-vertical');
				this._removeClass(this.tooltip, 'hide');
				this._removeClass(this.tooltip_min, 'hide');
				this._removeClass(this.tooltip_max, 'hide');

				// Undo existing inline styles for track
				["left", "top", "width", "height"].forEach(function(prop) {
					this._removeProperty(this.trackLow, prop);
					this._removeProperty(this.trackSelection, prop);
					this._removeProperty(this.trackHigh, prop);
				}, this);

				// Undo inline styles on handles
				[this.handle1, this.handle2].forEach(function(handle) {
					this._removeProperty(handle, 'left');
					this._removeProperty(handle, 'top');
				}, this);

				// Undo inline styles and classes on tooltips
				[this.tooltip, this.tooltip_min, this.tooltip_max].forEach(function(tooltip) {
					this._removeProperty(tooltip, 'left');
					this._removeProperty(tooltip, 'top');
					this._removeProperty(tooltip, 'margin-left');
					this._removeProperty(tooltip, 'margin-top');

					this._removeClass(tooltip, 'right');
					this._removeClass(tooltip, 'top');
				}, this);
			}

			if(this.options.orientation === 'vertical') {
				this._addClass(this.sliderElem,'slider-vertical');
				this.stylePos = 'top';
				this.mousePos = 'pageY';
				this.sizePos = 'offsetHeight';
			} else {
				this._addClass(this.sliderElem, 'slider-horizontal');
				this.sliderElem.style.width = origWidth;
				this.options.orientation = 'horizontal';
				this.stylePos = 'left';
				this.mousePos = 'pageX';
				this.sizePos = 'offsetWidth';

			}
			this._setTooltipPosition();
			/* In case ticks are specified, overwrite the min and max bounds */
			if (Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
					this.options.max = Math.max.apply(Math, this.options.ticks);
					this.options.min = Math.min.apply(Math, this.options.ticks);
			}

			if (Array.isArray(this.options.value)) {
				this.options.range = true;
				this._state.value = this.options.value;
			}
			else if (this.options.range) {
				// User wants a range, but value is not an array
				this._state.value = [this.options.value, this.options.max];
			}
			else {
				this._state.value = this.options.value;
			}

			this.trackLow = sliderTrackLow || this.trackLow;
			this.trackSelection = sliderTrackSelection || this.trackSelection;
			this.trackHigh = sliderTrackHigh || this.trackHigh;

			if (this.options.selection === 'none') {
				this._addClass(this.trackLow, 'hide');
				this._addClass(this.trackSelection, 'hide');
				this._addClass(this.trackHigh, 'hide');
			}

			this.handle1 = sliderMinHandle || this.handle1;
			this.handle2 = sliderMaxHandle || this.handle2;

			if (updateSlider === true) {
				// Reset classes
				this._removeClass(this.handle1, 'round triangle');
				this._removeClass(this.handle2, 'round triangle hide');

				for (i = 0; i < this.ticks.length; i++) {
					this._removeClass(this.ticks[i], 'round triangle hide');
				}
			}

			var availableHandleModifiers = ['round', 'triangle', 'custom'];
			var isValidHandleType = availableHandleModifiers.indexOf(this.options.handle) !== -1;
			if (isValidHandleType) {
				this._addClass(this.handle1, this.options.handle);
				this._addClass(this.handle2, this.options.handle);

				for (i = 0; i < this.ticks.length; i++) {
					this._addClass(this.ticks[i], this.options.handle);
				}
			}

			this._state.offset = this._offset(this.sliderElem);
			this._state.size = this.sliderElem[this.sizePos];
			this.setValue(this._state.value);

			/******************************************

						Bind Event Listeners

			******************************************/

			// Bind keyboard handlers
			this.handle1Keydown = this._keydown.bind(this, 0);
			this.handle1.addEventListener("keydown", this.handle1Keydown, false);

			this.handle2Keydown = this._keydown.bind(this, 1);
			this.handle2.addEventListener("keydown", this.handle2Keydown, false);

			this.mousedown = this._mousedown.bind(this);
			this.touchstart = this._touchstart.bind(this);
			this.touchmove = this._touchmove.bind(this);

			if (this.touchCapable) {
				// Bind touch handlers
				this.sliderElem.addEventListener("touchstart", this.touchstart, false);
				this.sliderElem.addEventListener("touchmove", this.touchmove, false);
			}
			this.sliderElem.addEventListener("mousedown", this.mousedown, false);

			// Bind window handlers
			this.resize = this._resize.bind(this);
			window.addEventListener("resize", this.resize, false);


			// Bind tooltip-related handlers
			if(this.options.tooltip === 'hide') {
				this._addClass(this.tooltip, 'hide');
				this._addClass(this.tooltip_min, 'hide');
				this._addClass(this.tooltip_max, 'hide');
			}
			else if(this.options.tooltip === 'always') {
				this._showTooltip();
				this._alwaysShowTooltip = true;
			}
			else {
				this.showTooltip = this._showTooltip.bind(this);
				this.hideTooltip = this._hideTooltip.bind(this);

				this.sliderElem.addEventListener("mouseenter", this.showTooltip, false);
				this.sliderElem.addEventListener("mouseleave", this.hideTooltip, false);

				this.handle1.addEventListener("focus", this.showTooltip, false);
				this.handle1.addEventListener("blur", this.hideTooltip, false);

				this.handle2.addEventListener("focus", this.showTooltip, false);
				this.handle2.addEventListener("blur", this.hideTooltip, false);
			}

			if(this.options.enabled) {
				this.enable();
			} else {
				this.disable();
			}

		}



		/*************************************************

					INSTANCE PROPERTIES/METHODS

		- Any methods bound to the prototype are considered
		part of the plugin's `public` interface

		**************************************************/
		Slider.prototype = {
			_init: function() {}, // NOTE: Must exist to support bridget

			constructor: Slider,

			defaultOptions: {
				id: "",
			  min: 0,
				max: 10,
				step: 1,
				precision: 0,
				orientation: 'horizontal',
				value: 5,
				range: false,
				selection: 'before',
				tooltip: 'show',
				tooltip_split: false,
				handle: 'round',
				reversed: false,
				enabled: true,
				formatter: function(val) {
					if (Array.isArray(val)) {
						return val[0] + " : " + val[1];
					} else {
						return val;
					}
				},
				natural_arrow_keys: false,
				ticks: [],
				ticks_positions: [],
				ticks_labels: [],
				ticks_snap_bounds: 0,
				scale: 'linear',
				focus: false,
				tooltip_position: null,
				labelledby: null
			},

			getElement: function() {
				return this.sliderElem;
			},

			getValue: function() {
				if (this.options.range) {
					return this._state.value;
				}
				else {
					return this._state.value[0];
				}
			},

			setValue: function(val, triggerSlideEvent, triggerChangeEvent) {
				if (!val) {
					val = 0;
				}
				var oldValue = this.getValue();
				this._state.value = this._validateInputValue(val);
				var applyPrecision = this._applyPrecision.bind(this);

				if (this.options.range) {
					this._state.value[0] = applyPrecision(this._state.value[0]);
					this._state.value[1] = applyPrecision(this._state.value[1]);

					this._state.value[0] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[0]));
					this._state.value[1] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[1]));
				}
				else {
					this._state.value = applyPrecision(this._state.value);
					this._state.value = [ Math.max(this.options.min, Math.min(this.options.max, this._state.value))];
					this._addClass(this.handle2, 'hide');
					if (this.options.selection === 'after') {
						this._state.value[1] = this.options.max;
					} else {
						this._state.value[1] = this.options.min;
					}
				}

				if (this.options.max > this.options.min) {
					this._state.percentage = [
						this._toPercentage(this._state.value[0]),
						this._toPercentage(this._state.value[1]),
						this.options.step * 100 / (this.options.max - this.options.min)
					];
				} else {
					this._state.percentage = [0, 0, 100];
				}

				this._layout();
				var newValue = this.options.range ? this._state.value : this._state.value[0];

				this._setDataVal(newValue);
				if(triggerSlideEvent === true) {
					this._trigger('slide', newValue);
				}
				if( (oldValue !== newValue) && (triggerChangeEvent === true) ) {
					this._trigger('change', {
						oldValue: oldValue,
						newValue: newValue
					});
				}

				return this;
			},

			destroy: function(){
				// Remove event handlers on slider elements
				this._removeSliderEventHandlers();

				// Remove the slider from the DOM
				this.sliderElem.parentNode.removeChild(this.sliderElem);
				/* Show original <input> element */
				this.element.style.display = "";

				// Clear out custom event bindings
				this._cleanUpEventCallbacksMap();

				// Remove data values
				this.element.removeAttribute("data");

				// Remove JQuery handlers/data
				if($) {
					this._unbindJQueryEventHandlers();
					this.$element.removeData('slider');
				}
			},

			disable: function() {
				this._state.enabled = false;
				this.handle1.removeAttribute("tabindex");
				this.handle2.removeAttribute("tabindex");
				this._addClass(this.sliderElem, 'slider-disabled');
				this._trigger('slideDisabled');

				return this;
			},

			enable: function() {
				this._state.enabled = true;
				this.handle1.setAttribute("tabindex", 0);
				this.handle2.setAttribute("tabindex", 0);
				this._removeClass(this.sliderElem, 'slider-disabled');
				this._trigger('slideEnabled');

				return this;
			},

			toggle: function() {
				if(this._state.enabled) {
					this.disable();
				} else {
					this.enable();
				}
				return this;
			},

			isEnabled: function() {
				return this._state.enabled;
			},

			on: function(evt, callback) {
				this._bindNonQueryEventHandler(evt, callback);
				return this;
			},

      off: function(evt, callback) {
          if($) {
              this.$element.off(evt, callback);
              this.$sliderElem.off(evt, callback);
          } else {
              this._unbindNonQueryEventHandler(evt, callback);
          }
      },

			getAttribute: function(attribute) {
				if(attribute) {
					return this.options[attribute];
				} else {
					return this.options;
				}
			},

			setAttribute: function(attribute, value) {
				this.options[attribute] = value;
				return this;
			},

			refresh: function() {
				this._removeSliderEventHandlers();
				createNewSlider.call(this, this.element, this.options);
				if($) {
					// Bind new instance of slider to the element
					$.data(this.element, 'slider', this);
				}
				return this;
			},

			relayout: function() {
				this._resize();
				this._layout();
				return this;
			},

			/******************************+

						HELPERS

			- Any method that is not part of the public interface.
			- Place it underneath this comment block and write its signature like so:

			  					_fnName : function() {...}

			********************************/
			_removeSliderEventHandlers: function() {
				// Remove keydown event listeners
				this.handle1.removeEventListener("keydown", this.handle1Keydown, false);
				this.handle2.removeEventListener("keydown", this.handle2Keydown, false);

				if (this.showTooltip) {
					this.handle1.removeEventListener("focus", this.showTooltip, false);
					this.handle2.removeEventListener("focus", this.showTooltip, false);
				}
				if (this.hideTooltip) {
					this.handle1.removeEventListener("blur", this.hideTooltip, false);
					this.handle2.removeEventListener("blur", this.hideTooltip, false);
				}

				// Remove event listeners from sliderElem
				if (this.showTooltip) {
					this.sliderElem.removeEventListener("mouseenter", this.showTooltip, false);
				}
				if (this.hideTooltip) {
					this.sliderElem.removeEventListener("mouseleave", this.hideTooltip, false);
				}
				this.sliderElem.removeEventListener("touchstart", this.touchstart, false);
				this.sliderElem.removeEventListener("touchmove", this.touchmove, false);
				this.sliderElem.removeEventListener("mousedown", this.mousedown, false);

				// Remove window event listener
				window.removeEventListener("resize", this.resize, false);
			},
			_bindNonQueryEventHandler: function(evt, callback) {
				if(this.eventToCallbackMap[evt] === undefined) {
					this.eventToCallbackMap[evt] = [];
				}
				this.eventToCallbackMap[evt].push(callback);
			},
      _unbindNonQueryEventHandler: function(evt, callback) {
          var callbacks = this.eventToCallbackMap[evt];
          if(callbacks !== undefined) {
              for (var i = 0; i < callbacks.length; i++) {
                  if (callbacks[i] === callback) {
                      callbacks.splice(i, 1);
                      break;
                  }
              }
          }
      },
			_cleanUpEventCallbacksMap: function() {
				var eventNames = Object.keys(this.eventToCallbackMap);
				for(var i = 0; i < eventNames.length; i++) {
					var eventName = eventNames[i];
					this.eventToCallbackMap[eventName] = null;
				}
			},
			_showTooltip: function() {
				if (this.options.tooltip_split === false ){
        	this._addClass(this.tooltip, 'in');
        	this.tooltip_min.style.display = 'none';
        	this.tooltip_max.style.display = 'none';
		    } else {
          this._addClass(this.tooltip_min, 'in');
          this._addClass(this.tooltip_max, 'in');
          this.tooltip.style.display = 'none';
		    }
				this._state.over = true;
			},
			_hideTooltip: function() {
				if (this._state.inDrag === false && this.alwaysShowTooltip !== true) {
					this._removeClass(this.tooltip, 'in');
					this._removeClass(this.tooltip_min, 'in');
					this._removeClass(this.tooltip_max, 'in');
				}
				this._state.over = false;
			},
			_layout: function() {
				var positionPercentages;

				if(this.options.reversed) {
					positionPercentages = [ 100 - this._state.percentage[0], this.options.range ? 100 - this._state.percentage[1] : this._state.percentage[1]];
				}
				else {
					positionPercentages = [ this._state.percentage[0], this._state.percentage[1] ];
				}

				this.handle1.style[this.stylePos] = positionPercentages[0]+'%';
				this.handle1.setAttribute('aria-valuenow', this._state.value[0]);

				this.handle2.style[this.stylePos] = positionPercentages[1]+'%';
				this.handle2.setAttribute('aria-valuenow', this._state.value[1]);

				/* Position ticks and labels */
				if (Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {

					var styleSize = this.options.orientation === 'vertical' ? 'height' : 'width';
					var styleMargin = this.options.orientation === 'vertical' ? 'marginTop' : 'marginLeft';
					var labelSize = this._state.size / (this.options.ticks.length - 1);

					if (this.tickLabelContainer) {
						var extraMargin = 0;
						if (this.options.ticks_positions.length === 0) {
							if (this.options.orientation !== 'vertical') {
								this.tickLabelContainer.style[styleMargin] = -labelSize/2 + 'px';
							}

							extraMargin = this.tickLabelContainer.offsetHeight;
						} else {
							/* Chidren are position absolute, calculate height by finding the max offsetHeight of a child */
							for (i = 0 ; i < this.tickLabelContainer.childNodes.length; i++) {
								if (this.tickLabelContainer.childNodes[i].offsetHeight > extraMargin) {
									extraMargin = this.tickLabelContainer.childNodes[i].offsetHeight;
								}
							}
						}
						if (this.options.orientation === 'horizontal') {
							this.sliderElem.style.marginBottom = extraMargin + 'px';
						}
					}
					for (var i = 0; i < this.options.ticks.length; i++) {

						var percentage = this.options.ticks_positions[i] || this._toPercentage(this.options.ticks[i]);

						if (this.options.reversed) {
							percentage = 100 - percentage;
						}

						this.ticks[i].style[this.stylePos] = percentage + '%';

						/* Set class labels to denote whether ticks are in the selection */
						this._removeClass(this.ticks[i], 'in-selection');
						if (!this.options.range) {
							if (this.options.selection === 'after' && percentage >= positionPercentages[0]){
								this._addClass(this.ticks[i], 'in-selection');
							} else if (this.options.selection === 'before' && percentage <= positionPercentages[0]) {
								this._addClass(this.ticks[i], 'in-selection');
							}
						} else if (percentage >= positionPercentages[0] && percentage <= positionPercentages[1]) {
							this._addClass(this.ticks[i], 'in-selection');
						}

						if (this.tickLabels[i]) {
							this.tickLabels[i].style[styleSize] = labelSize + 'px';

							if (this.options.orientation !== 'vertical' && this.options.ticks_positions[i] !== undefined) {
								this.tickLabels[i].style.position = 'absolute';
								this.tickLabels[i].style[this.stylePos] = percentage + '%';
								this.tickLabels[i].style[styleMargin] = -labelSize/2 + 'px';
							} else if (this.options.orientation === 'vertical') {
								this.tickLabels[i].style['marginLeft'] =  this.sliderElem.offsetWidth + 'px';
								this.tickLabelContainer.style['marginTop'] = this.sliderElem.offsetWidth / 2 * -1 + 'px';
							}
						}
					}
				}

				var formattedTooltipVal;

				if (this.options.range) {
					formattedTooltipVal = this.options.formatter(this._state.value);
					this._setText(this.tooltipInner, formattedTooltipVal);
					this.tooltip.style[this.stylePos] = (positionPercentages[1] + positionPercentages[0])/2 + '%';

					if (this.options.orientation === 'vertical') {
						this._css(this.tooltip, 'margin-top', -this.tooltip.offsetHeight / 2 + 'px');
					} else {
						this._css(this.tooltip, 'margin-left', -this.tooltip.offsetWidth / 2 + 'px');
					}

					if (this.options.orientation === 'vertical') {
						this._css(this.tooltip, 'margin-top', -this.tooltip.offsetHeight / 2 + 'px');
					} else {
						this._css(this.tooltip, 'margin-left', -this.tooltip.offsetWidth / 2 + 'px');
					}

					var innerTooltipMinText = this.options.formatter(this._state.value[0]);
					this._setText(this.tooltipInner_min, innerTooltipMinText);

					var innerTooltipMaxText = this.options.formatter(this._state.value[1]);
					this._setText(this.tooltipInner_max, innerTooltipMaxText);

					this.tooltip_min.style[this.stylePos] = positionPercentages[0] + '%';

					if (this.options.orientation === 'vertical') {
						this._css(this.tooltip_min, 'margin-top', -this.tooltip_min.offsetHeight / 2 + 'px');
					} else {
						this._css(this.tooltip_min, 'margin-left', -this.tooltip_min.offsetWidth / 2 + 'px');
					}

					this.tooltip_max.style[this.stylePos] = positionPercentages[1] + '%';

					if (this.options.orientation === 'vertical') {
						this._css(this.tooltip_max, 'margin-top', -this.tooltip_max.offsetHeight / 2 + 'px');
					} else {
						this._css(this.tooltip_max, 'margin-left', -this.tooltip_max.offsetWidth / 2 + 'px');
					}
				} else {
					formattedTooltipVal = this.options.formatter(this._state.value[0]);
					this._setText(this.tooltipInner, formattedTooltipVal);

					this.tooltip.style[this.stylePos] = positionPercentages[0] + '%';
					if (this.options.orientation === 'vertical') {
						this._css(this.tooltip, 'margin-top', -this.tooltip.offsetHeight / 2 + 'px');
					} else {
						this._css(this.tooltip, 'margin-left', -this.tooltip.offsetWidth / 2 + 'px');
					}
				}

				if (this.options.orientation === 'vertical') {
					this.trackLow.style.top = '0';
					this.trackLow.style.height = Math.min(positionPercentages[0], positionPercentages[1]) +'%';

					this.trackSelection.style.top = Math.min(positionPercentages[0], positionPercentages[1]) +'%';
					this.trackSelection.style.height = Math.abs(positionPercentages[0] - positionPercentages[1]) +'%';

					this.trackHigh.style.bottom = '0';
					this.trackHigh.style.height = (100 - Math.min(positionPercentages[0], positionPercentages[1]) - Math.abs(positionPercentages[0] - positionPercentages[1])) +'%';
				}
				else {
					this.trackLow.style.left = '0';
					this.trackLow.style.width = Math.min(positionPercentages[0], positionPercentages[1]) +'%';

					this.trackSelection.style.left = Math.min(positionPercentages[0], positionPercentages[1]) +'%';
					this.trackSelection.style.width = Math.abs(positionPercentages[0] - positionPercentages[1]) +'%';

					this.trackHigh.style.right = '0';
					this.trackHigh.style.width = (100 - Math.min(positionPercentages[0], positionPercentages[1]) - Math.abs(positionPercentages[0] - positionPercentages[1])) +'%';

			        var offset_min = this.tooltip_min.getBoundingClientRect();
			        var offset_max = this.tooltip_max.getBoundingClientRect();

			        if (this.options.tooltip_position === 'bottom') {
			        	if (offset_min.right > offset_max.left) {
			        		this._removeClass(this.tooltip_max, 'bottom');
			        		this._addClass(this.tooltip_max, 'top');
			        		this.tooltip_max.style.top = '';
                            this.tooltip_max.style.bottom = 22 + 'px';
                        } else {
                            this._removeClass(this.tooltip_max, 'top');
                            this._addClass(this.tooltip_max, 'bottom');
                            this.tooltip_max.style.top = this.tooltip_min.style.top;
                            this.tooltip_max.style.bottom = '';
			        	}
			        } else {
				        if (offset_min.right > offset_max.left) {
				            this._removeClass(this.tooltip_max, 'top');
				            this._addClass(this.tooltip_max, 'bottom');
				            this.tooltip_max.style.top = 18 + 'px';
				        } else {
				            this._removeClass(this.tooltip_max, 'bottom');
				            this._addClass(this.tooltip_max, 'top');
				            this.tooltip_max.style.top = this.tooltip_min.style.top;
				        }
			        }
				}
			},
			_resize: function (ev) {
				/*jshint unused:false*/
				this._state.offset = this._offset(this.sliderElem);
				this._state.size = this.sliderElem[this.sizePos];
				this._layout();
			},
			_removeProperty: function(element, prop) {
				if (element.style.removeProperty) {
				    element.style.removeProperty(prop);
				} else {
				    element.style.removeAttribute(prop);
				}
			},
			_mousedown: function(ev) {
				if(!this._state.enabled) {
					return false;
				}

				this._state.offset = this._offset(this.sliderElem);
				this._state.size = this.sliderElem[this.sizePos];

				var percentage = this._getPercentage(ev);

				if (this.options.range) {
					var diff1 = Math.abs(this._state.percentage[0] - percentage);
					var diff2 = Math.abs(this._state.percentage[1] - percentage);
					this._state.dragged = (diff1 < diff2) ? 0 : 1;
					this._adjustPercentageForRangeSliders(percentage);
				} else {
					this._state.dragged = 0;
				}

				this._state.percentage[this._state.dragged] = percentage;
				this._layout();

				if (this.touchCapable) {
					document.removeEventListener("touchmove", this.mousemove, false);
					document.removeEventListener("touchend", this.mouseup, false);
				}

				if(this.mousemove){
					document.removeEventListener("mousemove", this.mousemove, false);
				}
				if(this.mouseup){
					document.removeEventListener("mouseup", this.mouseup, false);
				}

				this.mousemove = this._mousemove.bind(this);
				this.mouseup = this._mouseup.bind(this);

				if (this.touchCapable) {
					// Touch: Bind touch events:
					document.addEventListener("touchmove", this.mousemove, false);
					document.addEventListener("touchend", this.mouseup, false);
				}
				// Bind mouse events:
				document.addEventListener("mousemove", this.mousemove, false);
				document.addEventListener("mouseup", this.mouseup, false);

				this._state.inDrag = true;
				var newValue = this._calculateValue();

				this._trigger('slideStart', newValue);

				this._setDataVal(newValue);
				this.setValue(newValue, false, true);

				this._pauseEvent(ev);

				if (this.options.focus) {
					this._triggerFocusOnHandle(this._state.dragged);
				}

				return true;
			},
			_touchstart: function(ev) {
				if (ev.changedTouches === undefined) {
					this._mousedown(ev);
					return;
				}

				var touch = ev.changedTouches[0];
				this.touchX = touch.pageX;
				this.touchY = touch.pageY;
			},
			_triggerFocusOnHandle: function(handleIdx) {
				if(handleIdx === 0) {
					this.handle1.focus();
				}
				if(handleIdx === 1) {
					this.handle2.focus();
				}
			},
			_keydown: function(handleIdx, ev) {
				if(!this._state.enabled) {
					return false;
				}

				var dir;
				switch (ev.keyCode) {
					case 37: // left
					case 40: // down
						dir = -1;
						break;
					case 39: // right
					case 38: // up
						dir = 1;
						break;
				}
				if (!dir) {
					return;
				}

				// use natural arrow keys instead of from min to max
				if (this.options.natural_arrow_keys) {
					var ifVerticalAndNotReversed = (this.options.orientation === 'vertical' && !this.options.reversed);
					var ifHorizontalAndReversed = (this.options.orientation === 'horizontal' && this.options.reversed);

					if (ifVerticalAndNotReversed || ifHorizontalAndReversed) {
						dir = -dir;
					}
				}

				var val = this._state.value[handleIdx] + dir * this.options.step;
				if (this.options.range) {
					val = [ (!handleIdx) ? val : this._state.value[0],
						    ( handleIdx) ? val : this._state.value[1]];
				}

				this._trigger('slideStart', val);
				this._setDataVal(val);
				this.setValue(val, true, true);

				this._setDataVal(val);
				this._trigger('slideStop', val);
				this._layout();

				this._pauseEvent(ev);

				return false;
			},
			_pauseEvent: function(ev) {
				if(ev.stopPropagation) {
					ev.stopPropagation();
				}
			    if(ev.preventDefault) {
			    	ev.preventDefault();
			    }
			    ev.cancelBubble=true;
			    ev.returnValue=false;
			},
			_mousemove: function(ev) {
				if(!this._state.enabled) {
					return false;
				}

				var percentage = this._getPercentage(ev);
				this._adjustPercentageForRangeSliders(percentage);
				this._state.percentage[this._state.dragged] = percentage;
				this._layout();

				var val = this._calculateValue(true);
				this.setValue(val, true, true);

				return false;
			},
			_touchmove: function(ev) {
				if (ev.changedTouches === undefined) {
					return;
				}

				var touch = ev.changedTouches[0];

				var xDiff = touch.pageX - this.touchX;
				var yDiff = touch.pageY - this.touchY;

				if (!this._state.inDrag) {
					// Vertical Slider
					if (this.options.orientation === 'vertical' && (xDiff <= 5 && xDiff >= -5) && (yDiff >=15 || yDiff <= -15)) {
						this._mousedown(ev);
					}
					// Horizontal slider.
					else if ((yDiff <= 5 && yDiff >= -5) && (xDiff >= 15 || xDiff <= -15)) {
						this._mousedown(ev);
					}
				}
			},
			_adjustPercentageForRangeSliders: function(percentage) {
				if (this.options.range) {
					var precision = this._getNumDigitsAfterDecimalPlace(percentage);
					precision = precision ? precision - 1 : 0;
					var percentageWithAdjustedPrecision = this._applyToFixedAndParseFloat(percentage, precision);
					if (this._state.dragged === 0 && this._applyToFixedAndParseFloat(this._state.percentage[1], precision) < percentageWithAdjustedPrecision) {
						this._state.percentage[0] = this._state.percentage[1];
						this._state.dragged = 1;
					} else if (this._state.dragged === 1 && this._applyToFixedAndParseFloat(this._state.percentage[0], precision) > percentageWithAdjustedPrecision) {
						this._state.percentage[1] = this._state.percentage[0];
						this._state.dragged = 0;
					}
				}
			},
			_mouseup: function() {
				if(!this._state.enabled) {
					return false;
				}
				if (this.touchCapable) {
					// Touch: Unbind touch event handlers:
					document.removeEventListener("touchmove", this.mousemove, false);
					document.removeEventListener("touchend", this.mouseup, false);
				}
                // Unbind mouse event handlers:
                document.removeEventListener("mousemove", this.mousemove, false);
                document.removeEventListener("mouseup", this.mouseup, false);

				this._state.inDrag = false;
				if (this._state.over === false) {
					this._hideTooltip();
				}
				var val = this._calculateValue(true);

				this._layout();
				this._setDataVal(val);
				this._trigger('slideStop', val);

				return false;
			},
			_calculateValue: function(snapToClosestTick) {
				var val;
				if (this.options.range) {
					val = [this.options.min,this.options.max];
			        if (this._state.percentage[0] !== 0){
			            val[0] = this._toValue(this._state.percentage[0]);
			            val[0] = this._applyPrecision(val[0]);
			        }
			        if (this._state.percentage[1] !== 100){
			            val[1] = this._toValue(this._state.percentage[1]);
			            val[1] = this._applyPrecision(val[1]);
			        }
				} else {
		            val = this._toValue(this._state.percentage[0]);
					val = parseFloat(val);
					val = this._applyPrecision(val);
				}

				if (snapToClosestTick) {
					var min = [val, Infinity];
					for (var i = 0; i < this.options.ticks.length; i++) {
						var diff = Math.abs(this.options.ticks[i] - val);
						if (diff <= min[1]) {
							min = [this.options.ticks[i], diff];
						}
					}
					if (min[1] <= this.options.ticks_snap_bounds) {
						return min[0];
					}
				}

				return val;
			},
			_applyPrecision: function(val) {
				var precision = this.options.precision || this._getNumDigitsAfterDecimalPlace(this.options.step);
				return this._applyToFixedAndParseFloat(val, precision);
			},
			_getNumDigitsAfterDecimalPlace: function(num) {
				var match = (''+num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
				if (!match) { return 0; }
				return Math.max(0, (match[1] ? match[1].length : 0) - (match[2] ? +match[2] : 0));
			},
			_applyToFixedAndParseFloat: function(num, toFixedInput) {
				var truncatedNum = num.toFixed(toFixedInput);
				return parseFloat(truncatedNum);
			},
			/*
				Credits to Mike Samuel for the following method!
				Source: http://stackoverflow.com/questions/10454518/javascript-how-to-retrieve-the-number-of-decimals-of-a-string-number
			*/
			_getPercentage: function(ev) {
				if (this.touchCapable && (ev.type === 'touchstart' || ev.type === 'touchmove')) {
					ev = ev.touches[0];
				}

				var eventPosition = ev[this.mousePos];
				var sliderOffset = this._state.offset[this.stylePos];
				var distanceToSlide = eventPosition - sliderOffset;
				// Calculate what percent of the length the slider handle has slid
				var percentage = (distanceToSlide / this._state.size) * 100;
				percentage = Math.round(percentage / this._state.percentage[2]) * this._state.percentage[2];
				if (this.options.reversed) {
					percentage = 100 - percentage;
				}

				// Make sure the percent is within the bounds of the slider.
				// 0% corresponds to the 'min' value of the slide
				// 100% corresponds to the 'max' value of the slide
				return Math.max(0, Math.min(100, percentage));
			},
			_validateInputValue: function(val) {
				if (typeof val === 'number') {
					return val;
				} else if (Array.isArray(val)) {
					this._validateArray(val);
					return val;
				} else {
					throw new Error( ErrorMsgs.formatInvalidInputErrorMsg(val) );
				}
			},
			_validateArray: function(val) {
				for(var i = 0; i < val.length; i++) {
					var input =  val[i];
					if (typeof input !== 'number') { throw new Error( ErrorMsgs.formatInvalidInputErrorMsg(input) ); }
				}
			},
			_setDataVal: function(val) {
				this.element.setAttribute('data-value', val);
				this.element.setAttribute('value', val);
        this.element.value = val;
			},
			_trigger: function(evt, val) {
				val = (val || val === 0) ? val : undefined;

				var callbackFnArray = this.eventToCallbackMap[evt];
				if(callbackFnArray && callbackFnArray.length) {
					for(var i = 0; i < callbackFnArray.length; i++) {
						var callbackFn = callbackFnArray[i];
						callbackFn(val);
					}
				}

				/* If JQuery exists, trigger JQuery events */
				if($) {
					this._triggerJQueryEvent(evt, val);
				}
			},
			_triggerJQueryEvent: function(evt, val) {
				var eventData = {
					type: evt,
					value: val
				};
				this.$element.trigger(eventData);
				this.$sliderElem.trigger(eventData);
			},
			_unbindJQueryEventHandlers: function() {
				this.$element.off();
				this.$sliderElem.off();
			},
			_setText: function(element, text) {
                if(typeof element.textContent !== "undefined") {
                    element.textContent = text;
                } else if(typeof element.innerText !== "undefined") {
                	element.innerText = text;
                }
			},
			_removeClass: function(element, classString) {
				var classes = classString.split(" ");
				var newClasses = element.className;

				for(var i = 0; i < classes.length; i++) {
					var classTag = classes[i];
					var regex = new RegExp("(?:\\s|^)" + classTag + "(?:\\s|$)");
					newClasses = newClasses.replace(regex, " ");
				}

				element.className = newClasses.trim();
			},
			_addClass: function(element, classString) {
				var classes = classString.split(" ");
				var newClasses = element.className;

				for(var i = 0; i < classes.length; i++) {
					var classTag = classes[i];
					var regex = new RegExp("(?:\\s|^)" + classTag + "(?:\\s|$)");
					var ifClassExists = regex.test(newClasses);

					if(!ifClassExists) {
						newClasses += " " + classTag;
					}
				}

				element.className = newClasses.trim();
			},
			_offsetLeft: function(obj){
				return obj.getBoundingClientRect().left;
			},
			_offsetTop: function(obj){
				var offsetTop = obj.offsetTop;
				while((obj = obj.offsetParent) && !isNaN(obj.offsetTop)){
					offsetTop += obj.offsetTop;
					if( obj.tagName !== 'BODY') {
						offsetTop -= obj.scrollTop;
					}
				}
				return offsetTop;
			},
		    _offset: function (obj) {
				return {
					left: this._offsetLeft(obj),
					top: this._offsetTop(obj)
				};
		    },
			_css: function(elementRef, styleName, value) {
                if ($) {
                    $.style(elementRef, styleName, value);
                } else {
                    var style = styleName.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function (all, letter) {
                        return letter.toUpperCase();
                    });
                    elementRef.style[style] = value;
                }
			},
			_toValue: function(percentage) {
				return this.options.scale.toValue.apply(this, [percentage]);
			},
			_toPercentage: function(value) {
				return this.options.scale.toPercentage.apply(this, [value]);
			},
			_setTooltipPosition: function(){
				var tooltips = [this.tooltip, this.tooltip_min, this.tooltip_max];
				if (this.options.orientation === 'vertical'){
					var tooltipPos = this.options.tooltip_position || 'right';
					var oppositeSide = (tooltipPos === 'left') ? 'right' : 'left';
					tooltips.forEach(function(tooltip){
						this._addClass(tooltip, tooltipPos);
						tooltip.style[oppositeSide] = '100%';
					}.bind(this));
				} else if(this.options.tooltip_position === 'bottom') {
					tooltips.forEach(function(tooltip){
						this._addClass(tooltip, 'bottom');
						tooltip.style.top = 22 + 'px';
					}.bind(this));
				} else {
					tooltips.forEach(function(tooltip){
						this._addClass(tooltip, 'top');
						tooltip.style.top = -this.tooltip.outerHeight - 14 + 'px';
					}.bind(this));
				}
			}
		};

		/*********************************

			Attach to global namespace

		*********************************/
		if($) {
			var namespace = $.fn.slider ? 'bootstrapSlider' : 'slider';
			$.bridget(namespace, Slider);

			// Auto-Register data-provide="slider" Elements
			$(function() {
				$("input[data-provide=slider]")[namespace]();
			});
		}

	})( $ );

	return Slider;
}));

/*!
 * enquire.js v2.1.2 - Awesome Media Queries in JavaScript
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/enquire.js
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

;
(function(name, context, factory) {
    var matchMedia = window.matchMedia;

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = factory(matchMedia);
    } else if (typeof define === 'function' && define.amd) {
        define(function() {
            return (context[name] = factory(matchMedia));
        });
    } else {
        context[name] = factory(matchMedia);
    }
}('enquire', this, function(matchMedia) {

    'use strict';

    /*jshint unused:false */
    /**
     * Helper function for iterating over a collection
     *
     * @param collection
     * @param fn
     */
    function each(collection, fn) {
        var i = 0,
            length = collection.length,
            cont;

        for (i; i < length; i++) {
            cont = fn(collection[i], i);
            if (cont === false) {
                break; //allow early exit
            }
        }
    }

    /**
     * Helper function for determining whether target object is an array
     *
     * @param target the object under test
     * @return {Boolean} true if array, false otherwise
     */
    function isArray(target) {
        return Object.prototype.toString.apply(target) === '[object Array]';
    }

    /**
     * Helper function for determining whether target object is a function
     *
     * @param target the object under test
     * @return {Boolean} true if function, false otherwise
     */
    function isFunction(target) {
        return typeof target === 'function';
    }

    /**
     * Delegate to handle a media query being matched and unmatched.
     *
     * @param {object} options
     * @param {function} options.match callback for when the media query is matched
     * @param {function} [options.unmatch] callback for when the media query is unmatched
     * @param {function} [options.setup] one-time callback triggered the first time a query is matched
     * @param {boolean} [options.deferSetup=false] should the setup callback be run immediately, rather than first time query is matched?
     * @constructor
     */
    function QueryHandler(options) {
        this.options = options;
        !options.deferSetup && this.setup();
    }
    QueryHandler.prototype = {

        /**
         * coordinates setup of the handler
         *
         * @function
         */
        setup: function() {
            if (this.options.setup) {
                this.options.setup();
            }
            this.initialised = true;
        },

        /**
         * coordinates setup and triggering of the handler
         *
         * @function
         */
        on: function() {
            !this.initialised && this.setup();
            this.options.match && this.options.match();
        },

        /**
         * coordinates the unmatch event for the handler
         *
         * @function
         */
        off: function() {
            this.options.unmatch && this.options.unmatch();
        },

        /**
         * called when a handler is to be destroyed.
         * delegates to the destroy or unmatch callbacks, depending on availability.
         *
         * @function
         */
        destroy: function() {
            this.options.destroy ? this.options.destroy() : this.off();
        },

        /**
         * determines equality by reference.
         * if object is supplied compare options, if function, compare match callback
         *
         * @function
         * @param {object || function} [target] the target for comparison
         */
        equals: function(target) {
            return this.options === target || this.options.match === target;
        }

    };
    /**
     * Represents a single media query, manages it's state and registered handlers for this query
     *
     * @constructor
     * @param {string} query the media query string
     * @param {boolean} [isUnconditional=false] whether the media query should run regardless of whether the conditions are met. Primarily for helping older browsers deal with mobile-first design
     */
    function MediaQuery(query, isUnconditional) {
        this.query = query;
        this.isUnconditional = isUnconditional;
        this.handlers = [];
        this.mql = matchMedia(query);

        var self = this;
        this.listener = function(mql) {
            self.mql = mql;
            self.assess();
        };
        this.mql.addListener(this.listener);
    }
    MediaQuery.prototype = {

        /**
         * add a handler for this query, triggering if already active
         *
         * @param {object} handler
         * @param {function} handler.match callback for when query is activated
         * @param {function} [handler.unmatch] callback for when query is deactivated
         * @param {function} [handler.setup] callback for immediate execution when a query handler is registered
         * @param {boolean} [handler.deferSetup=false] should the setup callback be deferred until the first time the handler is matched?
         */
        addHandler: function(handler) {
            var qh = new QueryHandler(handler);
            this.handlers.push(qh);

            this.matches() && qh.on();
        },

        /**
         * removes the given handler from the collection, and calls it's destroy methods
         * 
         * @param {object || function} handler the handler to remove
         */
        removeHandler: function(handler) {
            var handlers = this.handlers;
            each(handlers, function(h, i) {
                if (h.equals(handler)) {
                    h.destroy();
                    return !handlers.splice(i, 1); //remove from array and exit each early
                }
            });
        },

        /**
         * Determine whether the media query should be considered a match
         * 
         * @return {Boolean} true if media query can be considered a match, false otherwise
         */
        matches: function() {
            return this.mql.matches || this.isUnconditional;
        },

        /**
         * Clears all handlers and unbinds events
         */
        clear: function() {
            each(this.handlers, function(handler) {
                handler.destroy();
            });
            this.mql.removeListener(this.listener);
            this.handlers.length = 0; //clear array
        },

        /*
         * Assesses the query, turning on all handlers if it matches, turning them off if it doesn't match
         */
        assess: function() {
            var action = this.matches() ? 'on' : 'off';

            each(this.handlers, function(handler) {
                handler[action]();
            });
        }
    };
    /**
     * Allows for registration of query handlers.
     * Manages the query handler's state and is responsible for wiring up browser events
     *
     * @constructor
     */
    function MediaQueryDispatch() {
        if (!matchMedia) {
            throw new Error('matchMedia not present, legacy browsers require a polyfill');
        }

        this.queries = {};
        this.browserIsIncapable = !matchMedia('only all').matches;
    }

    MediaQueryDispatch.prototype = {

        /**
         * Registers a handler for the given media query
         *
         * @param {string} q the media query
         * @param {object || Array || Function} options either a single query handler object, a function, or an array of query handlers
         * @param {function} options.match fired when query matched
         * @param {function} [options.unmatch] fired when a query is no longer matched
         * @param {function} [options.setup] fired when handler first triggered
         * @param {boolean} [options.deferSetup=false] whether setup should be run immediately or deferred until query is first matched
         * @param {boolean} [shouldDegrade=false] whether this particular media query should always run on incapable browsers
         */
        register: function(q, options, shouldDegrade) {
            var queries = this.queries,
                isUnconditional = shouldDegrade && this.browserIsIncapable;

            if (!queries[q]) {
                queries[q] = new MediaQuery(q, isUnconditional);
            }

            //normalise to object in an array
            if (isFunction(options)) {
                options = { match: options };
            }
            if (!isArray(options)) {
                options = [options];
            }
            each(options, function(handler) {
                if (isFunction(handler)) {
                    handler = { match: handler };
                }
                queries[q].addHandler(handler);
            });

            return this;
        },

        /**
         * unregisters a query and all it's handlers, or a specific handler for a query
         *
         * @param {string} q the media query to target
         * @param {object || function} [handler] specific handler to unregister
         */
        unregister: function(q, handler) {
            var query = this.queries[q];

            if (query) {
                if (handler) {
                    query.removeHandler(handler);
                } else {
                    query.clear();
                    delete this.queries[q];
                }
            }

            return this;
        }
    };

    return new MediaQueryDispatch();

}));

// iepp v2.1pre @jon_neal & @aFarkas github.com/aFarkas/iepp
// html5shiv @rem remysharp.com/html5-enabling-script
// Dual licensed under the MIT or GPL Version 2 licenses
/*@cc_on(function(a,b){function r(a){var b=-1;while(++b<f)a.createElement(e[b])}if(!window.attachEvent||!b.createStyleSheet||!function(){var a=document.createElement("div");return a.innerHTML="<elem></elem>",a.childNodes.length!==1}())return;a.iepp=a.iepp||{};var c=a.iepp,d=c.html5elements||"abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|subline|summary|time|video",e=d.split("|"),f=e.length,g=new RegExp("(^|\\s)("+d+")","gi"),h=new RegExp("<(/*)("+d+")","gi"),i=/^\s*[\{\}]\s*$/,j=new RegExp("(^|[^\\n]*?\\s)("+d+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),k=b.createDocumentFragment(),l=b.documentElement,m=b.getElementsByTagName("script")[0].parentNode,n=b.createElement("body"),o=b.createElement("style"),p=/print|all/,q;c.getCSS=function(a,b){try{if(a+""===undefined)return""}catch(d){return""}var e=-1,f=a.length,g,h=[];while(++e<f){g=a[e];if(g.disabled)continue;b=g.media||b,p.test(b)&&h.push(c.getCSS(g.imports,b),g.cssText),b="all"}return h.join("")},c.parseCSS=function(a){var b=[],c;while((c=j.exec(a))!=null)b.push(((i.exec(c[1])?"\n":c[1])+c[2]+c[3]).replace(g,"$1.iepp-$2")+c[4]);return b.join("\n")},c.writeHTML=function(){var a=-1;q=q||b.body;while(++a<f){var c=b.getElementsByTagName(e[a]),d=c.length,g=-1;while(++g<d)c[g].className.indexOf("iepp-")<0&&(c[g].className+=" iepp-"+e[a])}k.appendChild(q),l.appendChild(n),n.className=q.className,n.id=q.id,n.innerHTML=q.innerHTML.replace(h,"<$1font")},c._beforePrint=function(){if(c.disablePP)return;o.styleSheet.cssText=c.parseCSS(c.getCSS(b.styleSheets,"all")),c.writeHTML()},c.restoreHTML=function(){if(c.disablePP)return;n.swapNode(q)},c._afterPrint=function(){c.restoreHTML(),o.styleSheet.cssText=""},r(b),r(k);if(c.disablePP)return;m.insertBefore(o,m.firstChild),o.media="print",o.className="iepp-printshim",a.attachEvent("onbeforeprint",c._beforePrint),a.attachEvent("onafterprint",c._afterPrint)})(this,document)@*/
/*! Select2 4.0.3 | https://github.com/select2/select2/blob/master/LICENSE.md */!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b=function(){if(a&&a.fn&&a.fn.select2&&a.fn.select2.amd)var b=a.fn.select2.amd;var b;return function(){if(!b||!b.requirejs){b?c=b:b={};var a,c,d;!function(b){function e(a,b){return u.call(a,b)}function f(a,b){var c,d,e,f,g,h,i,j,k,l,m,n=b&&b.split("/"),o=s.map,p=o&&o["*"]||{};if(a&&"."===a.charAt(0))if(b){for(a=a.split("/"),g=a.length-1,s.nodeIdCompat&&w.test(a[g])&&(a[g]=a[g].replace(w,"")),a=n.slice(0,n.length-1).concat(a),k=0;k<a.length;k+=1)if(m=a[k],"."===m)a.splice(k,1),k-=1;else if(".."===m){if(1===k&&(".."===a[2]||".."===a[0]))break;k>0&&(a.splice(k-1,2),k-=2)}a=a.join("/")}else 0===a.indexOf("./")&&(a=a.substring(2));if((n||p)&&o){for(c=a.split("/"),k=c.length;k>0;k-=1){if(d=c.slice(0,k).join("/"),n)for(l=n.length;l>0;l-=1)if(e=o[n.slice(0,l).join("/")],e&&(e=e[d])){f=e,h=k;break}if(f)break;!i&&p&&p[d]&&(i=p[d],j=k)}!f&&i&&(f=i,h=j),f&&(c.splice(0,h,f),a=c.join("/"))}return a}function g(a,c){return function(){var d=v.call(arguments,0);return"string"!=typeof d[0]&&1===d.length&&d.push(null),n.apply(b,d.concat([a,c]))}}function h(a){return function(b){return f(b,a)}}function i(a){return function(b){q[a]=b}}function j(a){if(e(r,a)){var c=r[a];delete r[a],t[a]=!0,m.apply(b,c)}if(!e(q,a)&&!e(t,a))throw new Error("No "+a);return q[a]}function k(a){var b,c=a?a.indexOf("!"):-1;return c>-1&&(b=a.substring(0,c),a=a.substring(c+1,a.length)),[b,a]}function l(a){return function(){return s&&s.config&&s.config[a]||{}}}var m,n,o,p,q={},r={},s={},t={},u=Object.prototype.hasOwnProperty,v=[].slice,w=/\.js$/;o=function(a,b){var c,d=k(a),e=d[0];return a=d[1],e&&(e=f(e,b),c=j(e)),e?a=c&&c.normalize?c.normalize(a,h(b)):f(a,b):(a=f(a,b),d=k(a),e=d[0],a=d[1],e&&(c=j(e))),{f:e?e+"!"+a:a,n:a,pr:e,p:c}},p={require:function(a){return g(a)},exports:function(a){var b=q[a];return"undefined"!=typeof b?b:q[a]={}},module:function(a){return{id:a,uri:"",exports:q[a],config:l(a)}}},m=function(a,c,d,f){var h,k,l,m,n,s,u=[],v=typeof d;if(f=f||a,"undefined"===v||"function"===v){for(c=!c.length&&d.length?["require","exports","module"]:c,n=0;n<c.length;n+=1)if(m=o(c[n],f),k=m.f,"require"===k)u[n]=p.require(a);else if("exports"===k)u[n]=p.exports(a),s=!0;else if("module"===k)h=u[n]=p.module(a);else if(e(q,k)||e(r,k)||e(t,k))u[n]=j(k);else{if(!m.p)throw new Error(a+" missing "+k);m.p.load(m.n,g(f,!0),i(k),{}),u[n]=q[k]}l=d?d.apply(q[a],u):void 0,a&&(h&&h.exports!==b&&h.exports!==q[a]?q[a]=h.exports:l===b&&s||(q[a]=l))}else a&&(q[a]=d)},a=c=n=function(a,c,d,e,f){if("string"==typeof a)return p[a]?p[a](c):j(o(a,c).f);if(!a.splice){if(s=a,s.deps&&n(s.deps,s.callback),!c)return;c.splice?(a=c,c=d,d=null):a=b}return c=c||function(){},"function"==typeof d&&(d=e,e=f),e?m(b,a,c,d):setTimeout(function(){m(b,a,c,d)},4),n},n.config=function(a){return n(a)},a._defined=q,d=function(a,b,c){if("string"!=typeof a)throw new Error("See almond README: incorrect module build, no module name");b.splice||(c=b,b=[]),e(q,a)||e(r,a)||(r[a]=[a,b,c])},d.amd={jQuery:!0}}(),b.requirejs=a,b.require=c,b.define=d}}(),b.define("almond",function(){}),b.define("jquery",[],function(){var b=a||$;return null==b&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),b}),b.define("select2/utils",["jquery"],function(a){function b(a){var b=a.prototype,c=[];for(var d in b){var e=b[d];"function"==typeof e&&"constructor"!==d&&c.push(d)}return c}var c={};c.Extend=function(a,b){function c(){this.constructor=a}var d={}.hasOwnProperty;for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},c.Decorate=function(a,c){function d(){var b=Array.prototype.unshift,d=c.prototype.constructor.length,e=a.prototype.constructor;d>0&&(b.call(arguments,a.prototype.constructor),e=c.prototype.constructor),e.apply(this,arguments)}function e(){this.constructor=d}var f=b(c),g=b(a);c.displayName=a.displayName,d.prototype=new e;for(var h=0;h<g.length;h++){var i=g[h];d.prototype[i]=a.prototype[i]}for(var j=(function(a){var b=function(){};a in d.prototype&&(b=d.prototype[a]);var e=c.prototype[a];return function(){var a=Array.prototype.unshift;return a.call(arguments,b),e.apply(this,arguments)}}),k=0;k<f.length;k++){var l=f[k];d.prototype[l]=j(l)}return d};var d=function(){this.listeners={}};return d.prototype.on=function(a,b){this.listeners=this.listeners||{},a in this.listeners?this.listeners[a].push(b):this.listeners[a]=[b]},d.prototype.trigger=function(a){var b=Array.prototype.slice,c=b.call(arguments,1);this.listeners=this.listeners||{},null==c&&(c=[]),0===c.length&&c.push({}),c[0]._type=a,a in this.listeners&&this.invoke(this.listeners[a],b.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},d.prototype.invoke=function(a,b){for(var c=0,d=a.length;d>c;c++)a[c].apply(this,b)},c.Observable=d,c.generateChars=function(a){for(var b="",c=0;a>c;c++){var d=Math.floor(36*Math.random());b+=d.toString(36)}return b},c.bind=function(a,b){return function(){a.apply(b,arguments)}},c._convertData=function(a){for(var b in a){var c=b.split("-"),d=a;if(1!==c.length){for(var e=0;e<c.length;e++){var f=c[e];f=f.substring(0,1).toLowerCase()+f.substring(1),f in d||(d[f]={}),e==c.length-1&&(d[f]=a[b]),d=d[f]}delete a[b]}}return a},c.hasScroll=function(b,c){var d=a(c),e=c.style.overflowX,f=c.style.overflowY;return e!==f||"hidden"!==f&&"visible"!==f?"scroll"===e||"scroll"===f?!0:d.innerHeight()<c.scrollHeight||d.innerWidth()<c.scrollWidth:!1},c.escapeMarkup=function(a){var b={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof a?a:String(a).replace(/[&<>"'\/\\]/g,function(a){return b[a]})},c.appendMany=function(b,c){if("1.7"===a.fn.jquery.substr(0,3)){var d=a();a.map(c,function(a){d=d.add(a)}),c=d}b.append(c)},c}),b.define("select2/results",["jquery","./utils"],function(a,b){function c(a,b,d){this.$element=a,this.data=d,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<ul class="select2-results__options" role="tree"></ul>');return this.options.get("multiple")&&b.attr("aria-multiselectable","true"),this.$results=b,b},c.prototype.clear=function(){this.$results.empty()},c.prototype.displayMessage=function(b){var c=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var d=a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),e=this.options.get("translations").get(b.message);d.append(c(e(b.args))),d[0].className+=" select2-results__message",this.$results.append(d)},c.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},c.prototype.append=function(a){this.hideLoading();var b=[];if(null==a.results||0===a.results.length)return void(0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"}));a.results=this.sort(a.results);for(var c=0;c<a.results.length;c++){var d=a.results[c],e=this.option(d);b.push(e)}this.$results.append(b)},c.prototype.position=function(a,b){var c=b.find(".select2-results");c.append(a)},c.prototype.sort=function(a){var b=this.options.get("sorter");return b(a)},c.prototype.highlightFirstItem=function(){var a=this.$results.find(".select2-results__option[aria-selected]"),b=a.filter("[aria-selected=true]");b.length>0?b.first().trigger("mouseenter"):a.first().trigger("mouseenter"),this.ensureHighlightVisible()},c.prototype.setClasses=function(){var b=this;this.data.current(function(c){var d=a.map(c,function(a){return a.id.toString()}),e=b.$results.find(".select2-results__option[aria-selected]");e.each(function(){var b=a(this),c=a.data(this,"data"),e=""+c.id;null!=c.element&&c.element.selected||null==c.element&&a.inArray(e,d)>-1?b.attr("aria-selected","true"):b.attr("aria-selected","false")})})},c.prototype.showLoading=function(a){this.hideLoading();var b=this.options.get("translations").get("searching"),c={disabled:!0,loading:!0,text:b(a)},d=this.option(c);d.className+=" loading-results",this.$results.prepend(d)},c.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},c.prototype.option=function(b){var c=document.createElement("li");c.className="select2-results__option";var d={role:"treeitem","aria-selected":"false"};b.disabled&&(delete d["aria-selected"],d["aria-disabled"]="true"),null==b.id&&delete d["aria-selected"],null!=b._resultId&&(c.id=b._resultId),b.title&&(c.title=b.title),b.children&&(d.role="group",d["aria-label"]=b.text,delete d["aria-selected"]);for(var e in d){var f=d[e];c.setAttribute(e,f)}if(b.children){var g=a(c),h=document.createElement("strong");h.className="select2-results__group";a(h);this.template(b,h);for(var i=[],j=0;j<b.children.length;j++){var k=b.children[j],l=this.option(k);i.push(l)}var m=a("<ul></ul>",{"class":"select2-results__options select2-results__options--nested"});m.append(i),g.append(h),g.append(m)}else this.template(b,c);return a.data(c,"data",b),c},c.prototype.bind=function(b,c){var d=this,e=b.id+"-results";this.$results.attr("id",e),b.on("results:all",function(a){d.clear(),d.append(a.data),b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("results:append",function(a){d.append(a.data),b.isOpen()&&d.setClasses()}),b.on("query",function(a){d.hideMessages(),d.showLoading(a)}),b.on("select",function(){b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("unselect",function(){b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("open",function(){d.$results.attr("aria-expanded","true"),d.$results.attr("aria-hidden","false"),d.setClasses(),d.ensureHighlightVisible()}),b.on("close",function(){d.$results.attr("aria-expanded","false"),d.$results.attr("aria-hidden","true"),d.$results.removeAttr("aria-activedescendant")}),b.on("results:toggle",function(){var a=d.getHighlightedResults();0!==a.length&&a.trigger("mouseup")}),b.on("results:select",function(){var a=d.getHighlightedResults();if(0!==a.length){var b=a.data("data");"true"==a.attr("aria-selected")?d.trigger("close",{}):d.trigger("select",{data:b})}}),b.on("results:previous",function(){var a=d.getHighlightedResults(),b=d.$results.find("[aria-selected]"),c=b.index(a);if(0!==c){var e=c-1;0===a.length&&(e=0);var f=b.eq(e);f.trigger("mouseenter");var g=d.$results.offset().top,h=f.offset().top,i=d.$results.scrollTop()+(h-g);0===e?d.$results.scrollTop(0):0>h-g&&d.$results.scrollTop(i)}}),b.on("results:next",function(){var a=d.getHighlightedResults(),b=d.$results.find("[aria-selected]"),c=b.index(a),e=c+1;if(!(e>=b.length)){var f=b.eq(e);f.trigger("mouseenter");var g=d.$results.offset().top+d.$results.outerHeight(!1),h=f.offset().top+f.outerHeight(!1),i=d.$results.scrollTop()+h-g;0===e?d.$results.scrollTop(0):h>g&&d.$results.scrollTop(i)}}),b.on("results:focus",function(a){a.element.addClass("select2-results__option--highlighted")}),b.on("results:message",function(a){d.displayMessage(a)}),a.fn.mousewheel&&this.$results.on("mousewheel",function(a){var b=d.$results.scrollTop(),c=d.$results.get(0).scrollHeight-b+a.deltaY,e=a.deltaY>0&&b-a.deltaY<=0,f=a.deltaY<0&&c<=d.$results.height();e?(d.$results.scrollTop(0),a.preventDefault(),a.stopPropagation()):f&&(d.$results.scrollTop(d.$results.get(0).scrollHeight-d.$results.height()),a.preventDefault(),a.stopPropagation())}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(b){var c=a(this),e=c.data("data");return"true"===c.attr("aria-selected")?void(d.options.get("multiple")?d.trigger("unselect",{originalEvent:b,data:e}):d.trigger("close",{})):void d.trigger("select",{originalEvent:b,data:e})}),this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(b){var c=a(this).data("data");d.getHighlightedResults().removeClass("select2-results__option--highlighted"),d.trigger("results:focus",{data:c,element:a(this)})})},c.prototype.getHighlightedResults=function(){var a=this.$results.find(".select2-results__option--highlighted");return a},c.prototype.destroy=function(){this.$results.remove()},c.prototype.ensureHighlightVisible=function(){var a=this.getHighlightedResults();if(0!==a.length){var b=this.$results.find("[aria-selected]"),c=b.index(a),d=this.$results.offset().top,e=a.offset().top,f=this.$results.scrollTop()+(e-d),g=e-d;f-=2*a.outerHeight(!1),2>=c?this.$results.scrollTop(0):(g>this.$results.outerHeight()||0>g)&&this.$results.scrollTop(f)}},c.prototype.template=function(b,c){var d=this.options.get("templateResult"),e=this.options.get("escapeMarkup"),f=d(b,c);null==f?c.style.display="none":"string"==typeof f?c.innerHTML=e(f):a(c).append(f)},c}),b.define("select2/keys",[],function(){var a={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46};return a}),b.define("select2/selection/base",["jquery","../utils","../keys"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,b.Observable),d.prototype.render=function(){var b=a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=this.$element.data("old-tabindex")?this._tabindex=this.$element.data("old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),b.attr("title",this.$element.attr("title")),b.attr("tabindex",this._tabindex),this.$selection=b,b},d.prototype.bind=function(a,b){var d=this,e=(a.id+"-container",a.id+"-results");this.container=a,this.$selection.on("focus",function(a){d.trigger("focus",a)}),this.$selection.on("blur",function(a){d._handleBlur(a)}),this.$selection.on("keydown",function(a){d.trigger("keypress",a),a.which===c.SPACE&&a.preventDefault()}),a.on("results:focus",function(a){d.$selection.attr("aria-activedescendant",a.data._resultId)}),a.on("selection:update",function(a){d.update(a.data)}),a.on("open",function(){d.$selection.attr("aria-expanded","true"),d.$selection.attr("aria-owns",e),d._attachCloseHandler(a)}),a.on("close",function(){d.$selection.attr("aria-expanded","false"),d.$selection.removeAttr("aria-activedescendant"),d.$selection.removeAttr("aria-owns"),d.$selection.focus(),d._detachCloseHandler(a)}),a.on("enable",function(){d.$selection.attr("tabindex",d._tabindex)}),a.on("disable",function(){d.$selection.attr("tabindex","-1")})},d.prototype._handleBlur=function(b){var c=this;window.setTimeout(function(){document.activeElement==c.$selection[0]||a.contains(c.$selection[0],document.activeElement)||c.trigger("blur",b)},1)},d.prototype._attachCloseHandler=function(b){a(document.body).on("mousedown.select2."+b.id,function(b){var c=a(b.target),d=c.closest(".select2"),e=a(".select2.select2-container--open");e.each(function(){var b=a(this);if(this!=d[0]){var c=b.data("element");c.select2("close")}})})},d.prototype._detachCloseHandler=function(b){a(document.body).off("mousedown.select2."+b.id)},d.prototype.position=function(a,b){var c=b.find(".selection");c.append(a)},d.prototype.destroy=function(){this._detachCloseHandler(this.container)},d.prototype.update=function(a){throw new Error("The `update` method must be defined in child classes.")},d}),b.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(a,b,c,d){function e(){e.__super__.constructor.apply(this,arguments)}return c.Extend(e,b),e.prototype.render=function(){var a=e.__super__.render.call(this);return a.addClass("select2-selection--single"),a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),a},e.prototype.bind=function(a,b){var c=this;e.__super__.bind.apply(this,arguments);var d=a.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",d),this.$selection.attr("aria-labelledby",d),this.$selection.on("mousedown",function(a){1===a.which&&c.trigger("toggle",{originalEvent:a})}),this.$selection.on("focus",function(a){}),this.$selection.on("blur",function(a){}),a.on("focus",function(b){a.isOpen()||c.$selection.focus()}),a.on("selection:update",function(a){c.update(a.data)})},e.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},e.prototype.display=function(a,b){var c=this.options.get("templateSelection"),d=this.options.get("escapeMarkup");return d(c(a,b))},e.prototype.selectionContainer=function(){return a("<span></span>")},e.prototype.update=function(a){if(0===a.length)return void this.clear();var b=a[0],c=this.$selection.find(".select2-selection__rendered"),d=this.display(b,c);c.empty().append(d),c.prop("title",b.title||b.text)},e}),b.define("select2/selection/multiple",["jquery","./base","../utils"],function(a,b,c){function d(a,b){d.__super__.constructor.apply(this,arguments)}return c.Extend(d,b),d.prototype.render=function(){var a=d.__super__.render.call(this);return a.addClass("select2-selection--multiple"),a.html('<ul class="select2-selection__rendered"></ul>'),a},d.prototype.bind=function(b,c){var e=this;d.__super__.bind.apply(this,arguments),this.$selection.on("click",function(a){e.trigger("toggle",{originalEvent:a})}),this.$selection.on("click",".select2-selection__choice__remove",function(b){if(!e.options.get("disabled")){var c=a(this),d=c.parent(),f=d.data("data");e.trigger("unselect",{originalEvent:b,data:f})}})},d.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},d.prototype.display=function(a,b){var c=this.options.get("templateSelection"),d=this.options.get("escapeMarkup");return d(c(a,b))},d.prototype.selectionContainer=function(){var b=a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');return b},d.prototype.update=function(a){if(this.clear(),0!==a.length){for(var b=[],d=0;d<a.length;d++){var e=a[d],f=this.selectionContainer(),g=this.display(e,f);f.append(g),f.prop("title",e.title||e.text),f.data("data",e),b.push(f)}var h=this.$selection.find(".select2-selection__rendered");c.appendMany(h,b)}},d}),b.define("select2/selection/placeholder",["../utils"],function(a){function b(a,b,c){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c)}return b.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},b.prototype.createPlaceholder=function(a,b){var c=this.selectionContainer();return c.html(this.display(b)),c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),c},b.prototype.update=function(a,b){var c=1==b.length&&b[0].id!=this.placeholder.id,d=b.length>1;if(d||c)return a.call(this,b);this.clear();var e=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(e)},b}),b.define("select2/selection/allowClear",["jquery","../keys"],function(a,b){function c(){}return c.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(a){d._handleClear(a)}),b.on("keypress",function(a){d._handleKeyboardClear(a,b)})},c.prototype._handleClear=function(a,b){if(!this.options.get("disabled")){var c=this.$selection.find(".select2-selection__clear");if(0!==c.length){b.stopPropagation();for(var d=c.data("data"),e=0;e<d.length;e++){var f={data:d[e]};if(this.trigger("unselect",f),f.prevented)return}this.$element.val(this.placeholder.id).trigger("change"),this.trigger("toggle",{})}}},c.prototype._handleKeyboardClear=function(a,c,d){d.isOpen()||(c.which==b.DELETE||c.which==b.BACKSPACE)&&this._handleClear(c)},c.prototype.update=function(b,c){if(b.call(this,c),!(this.$selection.find(".select2-selection__placeholder").length>0||0===c.length)){var d=a('<span class="select2-selection__clear">&times;</span>');d.data("data",c),this.$selection.find(".select2-selection__rendered").prepend(d)}},c}),b.define("select2/selection/search",["jquery","../utils","../keys"],function(a,b,c){function d(a,b,c){a.call(this,b,c)}return d.prototype.render=function(b){var c=a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');this.$searchContainer=c,this.$search=c.find("input");var d=b.call(this);return this._transferTabIndex(),d},d.prototype.bind=function(a,b,d){var e=this;a.call(this,b,d),b.on("open",function(){e.$search.trigger("focus")}),b.on("close",function(){e.$search.val(""),e.$search.removeAttr("aria-activedescendant"),e.$search.trigger("focus")}),b.on("enable",function(){e.$search.prop("disabled",!1),e._transferTabIndex()}),b.on("disable",function(){e.$search.prop("disabled",!0)}),b.on("focus",function(a){e.$search.trigger("focus")}),b.on("results:focus",function(a){e.$search.attr("aria-activedescendant",a.id)}),this.$selection.on("focusin",".select2-search--inline",function(a){e.trigger("focus",a)}),this.$selection.on("focusout",".select2-search--inline",function(a){e._handleBlur(a)}),this.$selection.on("keydown",".select2-search--inline",function(a){a.stopPropagation(),e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented();var b=a.which;if(b===c.BACKSPACE&&""===e.$search.val()){var d=e.$searchContainer.prev(".select2-selection__choice");if(d.length>0){var f=d.data("data");e.searchRemoveChoice(f),a.preventDefault()}}});var f=document.documentMode,g=f&&11>=f;this.$selection.on("input.searchcheck",".select2-search--inline",function(a){return g?void e.$selection.off("input.search input.searchcheck"):void e.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(a){if(g&&"input"===a.type)return void e.$selection.off("input.search input.searchcheck");var b=a.which;b!=c.SHIFT&&b!=c.CTRL&&b!=c.ALT&&b!=c.TAB&&e.handleSearch(a)})},d.prototype._transferTabIndex=function(a){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},d.prototype.createPlaceholder=function(a,b){this.$search.attr("placeholder",b.text)},d.prototype.update=function(a,b){var c=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),a.call(this,b),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch(),c&&this.$search.focus()},d.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var a=this.$search.val();this.trigger("query",{term:a})}this._keyUpPrevented=!1},d.prototype.searchRemoveChoice=function(a,b){this.trigger("unselect",{data:b}),this.$search.val(b.text),this.handleSearch()},d.prototype.resizeSearch=function(){this.$search.css("width","25px");var a="";if(""!==this.$search.attr("placeholder"))a=this.$selection.find(".select2-selection__rendered").innerWidth();else{var b=this.$search.val().length+1;a=.75*b+"em"}this.$search.css("width",a)},d}),b.define("select2/selection/eventRelay",["jquery"],function(a){function b(){}return b.prototype.bind=function(b,c,d){var e=this,f=["open","opening","close","closing","select","selecting","unselect","unselecting"],g=["opening","closing","selecting","unselecting"];b.call(this,c,d),c.on("*",function(b,c){if(-1!==a.inArray(b,f)){c=c||{};var d=a.Event("select2:"+b,{params:c});e.$element.trigger(d),-1!==a.inArray(b,g)&&(c.prevented=d.isDefaultPrevented())}})},b}),b.define("select2/translation",["jquery","require"],function(a,b){function c(a){this.dict=a||{}}return c.prototype.all=function(){return this.dict},c.prototype.get=function(a){return this.dict[a]},c.prototype.extend=function(b){this.dict=a.extend({},b.all(),this.dict)},c._cache={},c.loadPath=function(a){if(!(a in c._cache)){var d=b(a);c._cache[a]=d}return new c(c._cache[a])},c}),b.define("select2/diacritics",[],function(){var a={"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ω":"ω","ς":"σ"};return a}),b.define("select2/data/base",["../utils"],function(a){function b(a,c){b.__super__.constructor.call(this)}return a.Extend(b,a.Observable),b.prototype.current=function(a){throw new Error("The `current` method must be defined in child classes.")},b.prototype.query=function(a,b){throw new Error("The `query` method must be defined in child classes.")},b.prototype.bind=function(a,b){},b.prototype.destroy=function(){},b.prototype.generateResultId=function(b,c){var d=b.id+"-result-";return d+=a.generateChars(4),d+=null!=c.id?"-"+c.id.toString():"-"+a.generateChars(4)},b}),b.define("select2/data/select",["./base","../utils","jquery"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,a),d.prototype.current=function(a){var b=[],d=this;this.$element.find(":selected").each(function(){var a=c(this),e=d.item(a);b.push(e)}),a(b)},d.prototype.select=function(a){var b=this;if(a.selected=!0,c(a.element).is("option"))return a.element.selected=!0,void this.$element.trigger("change");
if(this.$element.prop("multiple"))this.current(function(d){var e=[];a=[a],a.push.apply(a,d);for(var f=0;f<a.length;f++){var g=a[f].id;-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")});else{var d=a.id;this.$element.val(d),this.$element.trigger("change")}},d.prototype.unselect=function(a){var b=this;if(this.$element.prop("multiple"))return a.selected=!1,c(a.element).is("option")?(a.element.selected=!1,void this.$element.trigger("change")):void this.current(function(d){for(var e=[],f=0;f<d.length;f++){var g=d[f].id;g!==a.id&&-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")})},d.prototype.bind=function(a,b){var c=this;this.container=a,a.on("select",function(a){c.select(a.data)}),a.on("unselect",function(a){c.unselect(a.data)})},d.prototype.destroy=function(){this.$element.find("*").each(function(){c.removeData(this,"data")})},d.prototype.query=function(a,b){var d=[],e=this,f=this.$element.children();f.each(function(){var b=c(this);if(b.is("option")||b.is("optgroup")){var f=e.item(b),g=e.matches(a,f);null!==g&&d.push(g)}}),b({results:d})},d.prototype.addOptions=function(a){b.appendMany(this.$element,a)},d.prototype.option=function(a){var b;a.children?(b=document.createElement("optgroup"),b.label=a.text):(b=document.createElement("option"),void 0!==b.textContent?b.textContent=a.text:b.innerText=a.text),a.id&&(b.value=a.id),a.disabled&&(b.disabled=!0),a.selected&&(b.selected=!0),a.title&&(b.title=a.title);var d=c(b),e=this._normalizeItem(a);return e.element=b,c.data(b,"data",e),d},d.prototype.item=function(a){var b={};if(b=c.data(a[0],"data"),null!=b)return b;if(a.is("option"))b={id:a.val(),text:a.text(),disabled:a.prop("disabled"),selected:a.prop("selected"),title:a.prop("title")};else if(a.is("optgroup")){b={text:a.prop("label"),children:[],title:a.prop("title")};for(var d=a.children("option"),e=[],f=0;f<d.length;f++){var g=c(d[f]),h=this.item(g);e.push(h)}b.children=e}return b=this._normalizeItem(b),b.element=a[0],c.data(a[0],"data",b),b},d.prototype._normalizeItem=function(a){c.isPlainObject(a)||(a={id:a,text:a}),a=c.extend({},{text:""},a);var b={selected:!1,disabled:!1};return null!=a.id&&(a.id=a.id.toString()),null!=a.text&&(a.text=a.text.toString()),null==a._resultId&&a.id&&null!=this.container&&(a._resultId=this.generateResultId(this.container,a)),c.extend({},b,a)},d.prototype.matches=function(a,b){var c=this.options.get("matcher");return c(a,b)},d}),b.define("select2/data/array",["./select","../utils","jquery"],function(a,b,c){function d(a,b){var c=b.get("data")||[];d.__super__.constructor.call(this,a,b),this.addOptions(this.convertToOptions(c))}return b.Extend(d,a),d.prototype.select=function(a){var b=this.$element.find("option").filter(function(b,c){return c.value==a.id.toString()});0===b.length&&(b=this.option(a),this.addOptions(b)),d.__super__.select.call(this,a)},d.prototype.convertToOptions=function(a){function d(a){return function(){return c(this).val()==a.id}}for(var e=this,f=this.$element.find("option"),g=f.map(function(){return e.item(c(this)).id}).get(),h=[],i=0;i<a.length;i++){var j=this._normalizeItem(a[i]);if(c.inArray(j.id,g)>=0){var k=f.filter(d(j)),l=this.item(k),m=c.extend(!0,{},j,l),n=this.option(m);k.replaceWith(n)}else{var o=this.option(j);if(j.children){var p=this.convertToOptions(j.children);b.appendMany(o,p)}h.push(o)}}return h},d}),b.define("select2/data/ajax",["./array","../utils","jquery"],function(a,b,c){function d(a,b){this.ajaxOptions=this._applyDefaults(b.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),d.__super__.constructor.call(this,a,b)}return b.Extend(d,a),d.prototype._applyDefaults=function(a){var b={data:function(a){return c.extend({},a,{q:a.term})},transport:function(a,b,d){var e=c.ajax(a);return e.then(b),e.fail(d),e}};return c.extend({},b,a,!0)},d.prototype.processResults=function(a){return a},d.prototype.query=function(a,b){function d(){var d=f.transport(f,function(d){var f=e.processResults(d,a);e.options.get("debug")&&window.console&&console.error&&(f&&f.results&&c.isArray(f.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),b(f)},function(){d.status&&"0"===d.status||e.trigger("results:message",{message:"errorLoading"})});e._request=d}var e=this;null!=this._request&&(c.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var f=c.extend({type:"GET"},this.ajaxOptions);"function"==typeof f.url&&(f.url=f.url.call(this.$element,a)),"function"==typeof f.data&&(f.data=f.data.call(this.$element,a)),this.ajaxOptions.delay&&null!=a.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(d,this.ajaxOptions.delay)):d()},d}),b.define("select2/data/tags",["jquery"],function(a){function b(b,c,d){var e=d.get("tags"),f=d.get("createTag");void 0!==f&&(this.createTag=f);var g=d.get("insertTag");if(void 0!==g&&(this.insertTag=g),b.call(this,c,d),a.isArray(e))for(var h=0;h<e.length;h++){var i=e[h],j=this._normalizeItem(i),k=this.option(j);this.$element.append(k)}}return b.prototype.query=function(a,b,c){function d(a,f){for(var g=a.results,h=0;h<g.length;h++){var i=g[h],j=null!=i.children&&!d({results:i.children},!0),k=i.text===b.term;if(k||j)return f?!1:(a.data=g,void c(a))}if(f)return!0;var l=e.createTag(b);if(null!=l){var m=e.option(l);m.attr("data-select2-tag",!0),e.addOptions([m]),e.insertTag(g,l)}a.results=g,c(a)}var e=this;return this._removeOldTags(),null==b.term||null!=b.page?void a.call(this,b,c):void a.call(this,b,d)},b.prototype.createTag=function(b,c){var d=a.trim(c.term);return""===d?null:{id:d,text:d}},b.prototype.insertTag=function(a,b,c){b.unshift(c)},b.prototype._removeOldTags=function(b){var c=(this._lastTag,this.$element.find("option[data-select2-tag]"));c.each(function(){this.selected||a(this).remove()})},b}),b.define("select2/data/tokenizer",["jquery"],function(a){function b(a,b,c){var d=c.get("tokenizer");void 0!==d&&(this.tokenizer=d),a.call(this,b,c)}return b.prototype.bind=function(a,b,c){a.call(this,b,c),this.$search=b.dropdown.$search||b.selection.$search||c.find(".select2-search__field")},b.prototype.query=function(b,c,d){function e(b){var c=g._normalizeItem(b),d=g.$element.find("option").filter(function(){return a(this).val()===c.id});if(!d.length){var e=g.option(c);e.attr("data-select2-tag",!0),g._removeOldTags(),g.addOptions([e])}f(c)}function f(a){g.trigger("select",{data:a})}var g=this;c.term=c.term||"";var h=this.tokenizer(c,this.options,e);h.term!==c.term&&(this.$search.length&&(this.$search.val(h.term),this.$search.focus()),c.term=h.term),b.call(this,c,d)},b.prototype.tokenizer=function(b,c,d,e){for(var f=d.get("tokenSeparators")||[],g=c.term,h=0,i=this.createTag||function(a){return{id:a.term,text:a.term}};h<g.length;){var j=g[h];if(-1!==a.inArray(j,f)){var k=g.substr(0,h),l=a.extend({},c,{term:k}),m=i(l);null!=m?(e(m),g=g.substr(h+1)||"",h=0):h++}else h++}return{term:g}},b}),b.define("select2/data/minimumInputLength",[],function(){function a(a,b,c){this.minimumInputLength=c.get("minimumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){return b.term=b.term||"",b.term.length<this.minimumInputLength?void this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:b.term,params:b}}):void a.call(this,b,c)},a}),b.define("select2/data/maximumInputLength",[],function(){function a(a,b,c){this.maximumInputLength=c.get("maximumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){return b.term=b.term||"",this.maximumInputLength>0&&b.term.length>this.maximumInputLength?void this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:b.term,params:b}}):void a.call(this,b,c)},a}),b.define("select2/data/maximumSelectionLength",[],function(){function a(a,b,c){this.maximumSelectionLength=c.get("maximumSelectionLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){var d=this;this.current(function(e){var f=null!=e?e.length:0;return d.maximumSelectionLength>0&&f>=d.maximumSelectionLength?void d.trigger("results:message",{message:"maximumSelected",args:{maximum:d.maximumSelectionLength}}):void a.call(d,b,c)})},a}),b.define("select2/dropdown",["jquery","./utils"],function(a,b){function c(a,b){this.$element=a,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<span class="select2-dropdown"><span class="select2-results"></span></span>');return b.attr("dir",this.options.get("dir")),this.$dropdown=b,b},c.prototype.bind=function(){},c.prototype.position=function(a,b){},c.prototype.destroy=function(){this.$dropdown.remove()},c}),b.define("select2/dropdown/search",["jquery","../utils"],function(a,b){function c(){}return c.prototype.render=function(b){var c=b.call(this),d=a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');return this.$searchContainer=d,this.$search=d.find("input"),c.prepend(d),c},c.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),this.$search.on("keydown",function(a){e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented()}),this.$search.on("input",function(b){a(this).off("keyup")}),this.$search.on("keyup input",function(a){e.handleSearch(a)}),c.on("open",function(){e.$search.attr("tabindex",0),e.$search.focus(),window.setTimeout(function(){e.$search.focus()},0)}),c.on("close",function(){e.$search.attr("tabindex",-1),e.$search.val("")}),c.on("focus",function(){c.isOpen()&&e.$search.focus()}),c.on("results:all",function(a){if(null==a.query.term||""===a.query.term){var b=e.showSearch(a);b?e.$searchContainer.removeClass("select2-search--hide"):e.$searchContainer.addClass("select2-search--hide")}})},c.prototype.handleSearch=function(a){if(!this._keyUpPrevented){var b=this.$search.val();this.trigger("query",{term:b})}this._keyUpPrevented=!1},c.prototype.showSearch=function(a,b){return!0},c}),b.define("select2/dropdown/hidePlaceholder",[],function(){function a(a,b,c,d){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c,d)}return a.prototype.append=function(a,b){b.results=this.removePlaceholder(b.results),a.call(this,b)},a.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},a.prototype.removePlaceholder=function(a,b){for(var c=b.slice(0),d=b.length-1;d>=0;d--){var e=b[d];this.placeholder.id===e.id&&c.splice(d,1)}return c},a}),b.define("select2/dropdown/infiniteScroll",["jquery"],function(a){function b(a,b,c,d){this.lastParams={},a.call(this,b,c,d),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return b.prototype.append=function(a,b){this.$loadingMore.remove(),this.loading=!1,a.call(this,b),this.showLoadingMore(b)&&this.$results.append(this.$loadingMore)},b.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),c.on("query",function(a){e.lastParams=a,e.loading=!0}),c.on("query:append",function(a){e.lastParams=a,e.loading=!0}),this.$results.on("scroll",function(){var b=a.contains(document.documentElement,e.$loadingMore[0]);if(!e.loading&&b){var c=e.$results.offset().top+e.$results.outerHeight(!1),d=e.$loadingMore.offset().top+e.$loadingMore.outerHeight(!1);c+50>=d&&e.loadMore()}})},b.prototype.loadMore=function(){this.loading=!0;var b=a.extend({},{page:1},this.lastParams);b.page++,this.trigger("query:append",b)},b.prototype.showLoadingMore=function(a,b){return b.pagination&&b.pagination.more},b.prototype.createLoadingMore=function(){var b=a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),c=this.options.get("translations").get("loadingMore");return b.html(c(this.lastParams)),b},b}),b.define("select2/dropdown/attachBody",["jquery","../utils"],function(a,b){function c(b,c,d){this.$dropdownParent=d.get("dropdownParent")||a(document.body),b.call(this,c,d)}return c.prototype.bind=function(a,b,c){var d=this,e=!1;a.call(this,b,c),b.on("open",function(){d._showDropdown(),d._attachPositioningHandler(b),e||(e=!0,b.on("results:all",function(){d._positionDropdown(),d._resizeDropdown()}),b.on("results:append",function(){d._positionDropdown(),d._resizeDropdown()}))}),b.on("close",function(){d._hideDropdown(),d._detachPositioningHandler(b)}),this.$dropdownContainer.on("mousedown",function(a){a.stopPropagation()})},c.prototype.destroy=function(a){a.call(this),this.$dropdownContainer.remove()},c.prototype.position=function(a,b,c){b.attr("class",c.attr("class")),b.removeClass("select2"),b.addClass("select2-container--open"),b.css({position:"absolute",top:-999999}),this.$container=c},c.prototype.render=function(b){var c=a("<span></span>"),d=b.call(this);return c.append(d),this.$dropdownContainer=c,c},c.prototype._hideDropdown=function(a){this.$dropdownContainer.detach()},c.prototype._attachPositioningHandler=function(c,d){var e=this,f="scroll.select2."+d.id,g="resize.select2."+d.id,h="orientationchange.select2."+d.id,i=this.$container.parents().filter(b.hasScroll);i.each(function(){a(this).data("select2-scroll-position",{x:a(this).scrollLeft(),y:a(this).scrollTop()})}),i.on(f,function(b){var c=a(this).data("select2-scroll-position");a(this).scrollTop(c.y)}),a(window).on(f+" "+g+" "+h,function(a){e._positionDropdown(),e._resizeDropdown()})},c.prototype._detachPositioningHandler=function(c,d){var e="scroll.select2."+d.id,f="resize.select2."+d.id,g="orientationchange.select2."+d.id,h=this.$container.parents().filter(b.hasScroll);h.off(e),a(window).off(e+" "+f+" "+g)},c.prototype._positionDropdown=function(){var b=a(window),c=this.$dropdown.hasClass("select2-dropdown--above"),d=this.$dropdown.hasClass("select2-dropdown--below"),e=null,f=this.$container.offset();f.bottom=f.top+this.$container.outerHeight(!1);var g={height:this.$container.outerHeight(!1)};g.top=f.top,g.bottom=f.top+g.height;var h={height:this.$dropdown.outerHeight(!1)},i={top:b.scrollTop(),bottom:b.scrollTop()+b.height()},j=i.top<f.top-h.height,k=i.bottom>f.bottom+h.height,l={left:f.left,top:g.bottom},m=this.$dropdownParent;"static"===m.css("position")&&(m=m.offsetParent());var n=m.offset();l.top-=n.top,l.left-=n.left,c||d||(e="below"),k||!j||c?!j&&k&&c&&(e="below"):e="above",("above"==e||c&&"below"!==e)&&(l.top=g.top-n.top-h.height),null!=e&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+e),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+e)),this.$dropdownContainer.css(l)},c.prototype._resizeDropdown=function(){var a={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(a.minWidth=a.width,a.position="relative",a.width="auto"),this.$dropdown.css(a)},c.prototype._showDropdown=function(a){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},c}),b.define("select2/dropdown/minimumResultsForSearch",[],function(){function a(b){for(var c=0,d=0;d<b.length;d++){var e=b[d];e.children?c+=a(e.children):c++}return c}function b(a,b,c,d){this.minimumResultsForSearch=c.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),a.call(this,b,c,d)}return b.prototype.showSearch=function(b,c){return a(c.data.results)<this.minimumResultsForSearch?!1:b.call(this,c)},b}),b.define("select2/dropdown/selectOnClose",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("close",function(a){d._handleSelectOnClose(a)})},a.prototype._handleSelectOnClose=function(a,b){if(b&&null!=b.originalSelect2Event){var c=b.originalSelect2Event;if("select"===c._type||"unselect"===c._type)return}var d=this.getHighlightedResults();if(!(d.length<1)){var e=d.data("data");null!=e.element&&e.element.selected||null==e.element&&e.selected||this.trigger("select",{data:e})}},a}),b.define("select2/dropdown/closeOnSelect",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("select",function(a){d._selectTriggered(a)}),b.on("unselect",function(a){d._selectTriggered(a)})},a.prototype._selectTriggered=function(a,b){var c=b.originalEvent;c&&c.ctrlKey||this.trigger("close",{originalEvent:c,originalSelect2Event:b})},a}),b.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(a){var b=a.input.length-a.maximum,c="Please delete "+b+" character";return 1!=b&&(c+="s"),c},inputTooShort:function(a){var b=a.minimum-a.input.length,c="Please enter "+b+" or more characters";return c},loadingMore:function(){return"Loading more results…"},maximumSelected:function(a){var b="You can only select "+a.maximum+" item";return 1!=a.maximum&&(b+="s"),b},noResults:function(){return"No results found"},searching:function(){return"Searching…"}}}),b.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C){function D(){this.reset()}D.prototype.apply=function(l){if(l=a.extend(!0,{},this.defaults,l),null==l.dataAdapter){if(null!=l.ajax?l.dataAdapter=o:null!=l.data?l.dataAdapter=n:l.dataAdapter=m,l.minimumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,r)),l.maximumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,s)),l.maximumSelectionLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,t)),l.tags&&(l.dataAdapter=j.Decorate(l.dataAdapter,p)),(null!=l.tokenSeparators||null!=l.tokenizer)&&(l.dataAdapter=j.Decorate(l.dataAdapter,q)),null!=l.query){var C=b(l.amdBase+"compat/query");l.dataAdapter=j.Decorate(l.dataAdapter,C)}if(null!=l.initSelection){var D=b(l.amdBase+"compat/initSelection");l.dataAdapter=j.Decorate(l.dataAdapter,D)}}if(null==l.resultsAdapter&&(l.resultsAdapter=c,null!=l.ajax&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,x)),null!=l.placeholder&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,w)),l.selectOnClose&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,A))),null==l.dropdownAdapter){if(l.multiple)l.dropdownAdapter=u;else{var E=j.Decorate(u,v);l.dropdownAdapter=E}if(0!==l.minimumResultsForSearch&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,z)),l.closeOnSelect&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,B)),null!=l.dropdownCssClass||null!=l.dropdownCss||null!=l.adaptDropdownCssClass){var F=b(l.amdBase+"compat/dropdownCss");l.dropdownAdapter=j.Decorate(l.dropdownAdapter,F)}l.dropdownAdapter=j.Decorate(l.dropdownAdapter,y)}if(null==l.selectionAdapter){if(l.multiple?l.selectionAdapter=e:l.selectionAdapter=d,null!=l.placeholder&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,f)),l.allowClear&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,g)),l.multiple&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,h)),null!=l.containerCssClass||null!=l.containerCss||null!=l.adaptContainerCssClass){var G=b(l.amdBase+"compat/containerCss");l.selectionAdapter=j.Decorate(l.selectionAdapter,G)}l.selectionAdapter=j.Decorate(l.selectionAdapter,i)}if("string"==typeof l.language)if(l.language.indexOf("-")>0){var H=l.language.split("-"),I=H[0];l.language=[l.language,I]}else l.language=[l.language];if(a.isArray(l.language)){var J=new k;l.language.push("en");for(var K=l.language,L=0;L<K.length;L++){var M=K[L],N={};try{N=k.loadPath(M)}catch(O){try{M=this.defaults.amdLanguageBase+M,N=k.loadPath(M)}catch(P){l.debug&&window.console&&console.warn&&console.warn('Select2: The language file for "'+M+'" could not be automatically loaded. A fallback will be used instead.');continue}}J.extend(N)}l.translations=J}else{var Q=k.loadPath(this.defaults.amdLanguageBase+"en"),R=new k(l.language);R.extend(Q),l.translations=R}return l},D.prototype.reset=function(){function b(a){function b(a){return l[a]||a}return a.replace(/[^\u0000-\u007E]/g,b)}function c(d,e){if(""===a.trim(d.term))return e;if(e.children&&e.children.length>0){for(var f=a.extend(!0,{},e),g=e.children.length-1;g>=0;g--){var h=e.children[g],i=c(d,h);null==i&&f.children.splice(g,1)}return f.children.length>0?f:c(d,f)}var j=b(e.text).toUpperCase(),k=b(d.term).toUpperCase();return j.indexOf(k)>-1?e:null}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:j.escapeMarkup,language:C,matcher:c,minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,sorter:function(a){return a},templateResult:function(a){return a.text},templateSelection:function(a){return a.text},theme:"default",width:"resolve"}},D.prototype.set=function(b,c){var d=a.camelCase(b),e={};e[d]=c;var f=j._convertData(e);a.extend(this.defaults,f)};var E=new D;return E}),b.define("select2/options",["require","jquery","./defaults","./utils"],function(a,b,c,d){function e(b,e){if(this.options=b,null!=e&&this.fromElement(e),this.options=c.apply(this.options),e&&e.is("input")){var f=a(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=d.Decorate(this.options.dataAdapter,f)}}return e.prototype.fromElement=function(a){var c=["select2"];null==this.options.multiple&&(this.options.multiple=a.prop("multiple")),null==this.options.disabled&&(this.options.disabled=a.prop("disabled")),null==this.options.language&&(a.prop("lang")?this.options.language=a.prop("lang").toLowerCase():a.closest("[lang]").prop("lang")&&(this.options.language=a.closest("[lang]").prop("lang"))),null==this.options.dir&&(a.prop("dir")?this.options.dir=a.prop("dir"):a.closest("[dir]").prop("dir")?this.options.dir=a.closest("[dir]").prop("dir"):this.options.dir="ltr"),a.prop("disabled",this.options.disabled),a.prop("multiple",this.options.multiple),a.data("select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),a.data("data",a.data("select2Tags")),a.data("tags",!0)),a.data("ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),a.attr("ajax--url",a.data("ajaxUrl")),a.data("ajax--url",a.data("ajaxUrl")));var e={};e=b.fn.jquery&&"1."==b.fn.jquery.substr(0,2)&&a[0].dataset?b.extend(!0,{},a[0].dataset,a.data()):a.data();var f=b.extend(!0,{},e);f=d._convertData(f);for(var g in f)b.inArray(g,c)>-1||(b.isPlainObject(this.options[g])?b.extend(this.options[g],f[g]):this.options[g]=f[g]);return this},e.prototype.get=function(a){return this.options[a]},e.prototype.set=function(a,b){this.options[a]=b},e}),b.define("select2/core",["jquery","./options","./utils","./keys"],function(a,b,c,d){var e=function(a,c){null!=a.data("select2")&&a.data("select2").destroy(),this.$element=a,this.id=this._generateId(a),c=c||{},this.options=new b(c,a),e.__super__.constructor.call(this);var d=a.attr("tabindex")||0;a.data("old-tabindex",d),a.attr("tabindex","-1");var f=this.options.get("dataAdapter");this.dataAdapter=new f(a,this.options);var g=this.render();this._placeContainer(g);var h=this.options.get("selectionAdapter");this.selection=new h(a,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,g);var i=this.options.get("dropdownAdapter");this.dropdown=new i(a,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,g);var j=this.options.get("resultsAdapter");this.results=new j(a,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var k=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(a){k.trigger("selection:update",{data:a})}),a.addClass("select2-hidden-accessible"),a.attr("aria-hidden","true"),this._syncAttributes(),a.data("select2",this)};return c.Extend(e,c.Observable),e.prototype._generateId=function(a){var b="";return b=null!=a.attr("id")?a.attr("id"):null!=a.attr("name")?a.attr("name")+"-"+c.generateChars(2):c.generateChars(4),b=b.replace(/(:|\.|\[|\]|,)/g,""),b="select2-"+b},e.prototype._placeContainer=function(a){a.insertAfter(this.$element);var b=this._resolveWidth(this.$element,this.options.get("width"));null!=b&&a.css("width",b)},e.prototype._resolveWidth=function(a,b){var c=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==b){var d=this._resolveWidth(a,"style");return null!=d?d:this._resolveWidth(a,"element")}if("element"==b){var e=a.outerWidth(!1);return 0>=e?"auto":e+"px"}if("style"==b){var f=a.attr("style");if("string"!=typeof f)return null;for(var g=f.split(";"),h=0,i=g.length;i>h;h+=1){var j=g[h].replace(/\s/g,""),k=j.match(c);if(null!==k&&k.length>=1)return k[1]}return null}return b},e.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},e.prototype._registerDomEvents=function(){var b=this;this.$element.on("change.select2",function(){b.dataAdapter.current(function(a){b.trigger("selection:update",{data:a})})}),this.$element.on("focus.select2",function(a){b.trigger("focus",a)}),this._syncA=c.bind(this._syncAttributes,this),this._syncS=c.bind(this._syncSubtree,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._syncA);var d=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=d?(this._observer=new d(function(c){a.each(c,b._syncA),a.each(c,b._syncS)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})):this.$element[0].addEventListener&&(this.$element[0].addEventListener("DOMAttrModified",b._syncA,!1),this.$element[0].addEventListener("DOMNodeInserted",b._syncS,!1),this.$element[0].addEventListener("DOMNodeRemoved",b._syncS,!1))},e.prototype._registerDataEvents=function(){var a=this;this.dataAdapter.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerSelectionEvents=function(){var b=this,c=["toggle","focus"];this.selection.on("toggle",function(){b.toggleDropdown()}),this.selection.on("focus",function(a){b.focus(a)}),this.selection.on("*",function(d,e){-1===a.inArray(d,c)&&b.trigger(d,e)})},e.prototype._registerDropdownEvents=function(){var a=this;this.dropdown.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerResultsEvents=function(){var a=this;this.results.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerEvents=function(){var a=this;this.on("open",function(){a.$container.addClass("select2-container--open")}),this.on("close",function(){a.$container.removeClass("select2-container--open")}),this.on("enable",function(){a.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){a.$container.addClass("select2-container--disabled")}),this.on("blur",function(){a.$container.removeClass("select2-container--focus")}),this.on("query",function(b){a.isOpen()||a.trigger("open",{}),this.dataAdapter.query(b,function(c){a.trigger("results:all",{data:c,query:b})})}),this.on("query:append",function(b){this.dataAdapter.query(b,function(c){a.trigger("results:append",{data:c,query:b})})}),this.on("keypress",function(b){var c=b.which;a.isOpen()?c===d.ESC||c===d.TAB||c===d.UP&&b.altKey?(a.close(),b.preventDefault()):c===d.ENTER?(a.trigger("results:select",{}),b.preventDefault()):c===d.SPACE&&b.ctrlKey?(a.trigger("results:toggle",{}),b.preventDefault()):c===d.UP?(a.trigger("results:previous",{}),b.preventDefault()):c===d.DOWN&&(a.trigger("results:next",{}),b.preventDefault()):(c===d.ENTER||c===d.SPACE||c===d.DOWN&&b.altKey)&&(a.open(),b.preventDefault())})},e.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.options.get("disabled")?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},e.prototype._syncSubtree=function(a,b){var c=!1,d=this;if(!a||!a.target||"OPTION"===a.target.nodeName||"OPTGROUP"===a.target.nodeName){if(b)if(b.addedNodes&&b.addedNodes.length>0)for(var e=0;e<b.addedNodes.length;e++){var f=b.addedNodes[e];f.selected&&(c=!0)}else b.removedNodes&&b.removedNodes.length>0&&(c=!0);else c=!0;c&&this.dataAdapter.current(function(a){d.trigger("selection:update",{data:a})})}},e.prototype.trigger=function(a,b){var c=e.__super__.trigger,d={open:"opening",close:"closing",select:"selecting",unselect:"unselecting"};if(void 0===b&&(b={}),a in d){var f=d[a],g={prevented:!1,name:a,args:b};if(c.call(this,f,g),g.prevented)return void(b.prevented=!0)}c.call(this,a,b)},e.prototype.toggleDropdown=function(){this.options.get("disabled")||(this.isOpen()?this.close():this.open())},e.prototype.open=function(){this.isOpen()||this.trigger("query",{})},e.prototype.close=function(){this.isOpen()&&this.trigger("close",{})},e.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},e.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")},e.prototype.focus=function(a){this.hasFocus()||(this.$container.addClass("select2-container--focus"),this.trigger("focus",{}))},e.prototype.enable=function(a){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),(null==a||0===a.length)&&(a=[!0]);var b=!a[0];this.$element.prop("disabled",b)},e.prototype.data=function(){this.options.get("debug")&&arguments.length>0&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var a=[];return this.dataAdapter.current(function(b){a=b}),a},e.prototype.val=function(b){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==b||0===b.length)return this.$element.val();var c=b[0];a.isArray(c)&&(c=a.map(c,function(a){return a.toString()})),this.$element.val(c).trigger("change")},e.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._syncA),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&(this.$element[0].removeEventListener("DOMAttrModified",this._syncA,!1),this.$element[0].removeEventListener("DOMNodeInserted",this._syncS,!1),this.$element[0].removeEventListener("DOMNodeRemoved",this._syncS,!1)),this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",this.$element.data("old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null;
},e.prototype.render=function(){var b=a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return b.attr("dir",this.options.get("dir")),this.$container=b,this.$container.addClass("select2-container--"+this.options.get("theme")),b.data("element",this.$element),b},e}),b.define("select2/compat/utils",["jquery"],function(a){function b(b,c,d){var e,f,g=[];e=a.trim(b.attr("class")),e&&(e=""+e,a(e.split(/\s+/)).each(function(){0===this.indexOf("select2-")&&g.push(this)})),e=a.trim(c.attr("class")),e&&(e=""+e,a(e.split(/\s+/)).each(function(){0!==this.indexOf("select2-")&&(f=d(this),null!=f&&g.push(f))})),b.attr("class",g.join(" "))}return{syncCssClasses:b}}),b.define("select2/compat/containerCss",["jquery","./utils"],function(a,b){function c(a){return null}function d(){}return d.prototype.render=function(d){var e=d.call(this),f=this.options.get("containerCssClass")||"";a.isFunction(f)&&(f=f(this.$element));var g=this.options.get("adaptContainerCssClass");if(g=g||c,-1!==f.indexOf(":all:")){f=f.replace(":all:","");var h=g;g=function(a){var b=h(a);return null!=b?b+" "+a:a}}var i=this.options.get("containerCss")||{};return a.isFunction(i)&&(i=i(this.$element)),b.syncCssClasses(e,this.$element,g),e.css(i),e.addClass(f),e},d}),b.define("select2/compat/dropdownCss",["jquery","./utils"],function(a,b){function c(a){return null}function d(){}return d.prototype.render=function(d){var e=d.call(this),f=this.options.get("dropdownCssClass")||"";a.isFunction(f)&&(f=f(this.$element));var g=this.options.get("adaptDropdownCssClass");if(g=g||c,-1!==f.indexOf(":all:")){f=f.replace(":all:","");var h=g;g=function(a){var b=h(a);return null!=b?b+" "+a:a}}var i=this.options.get("dropdownCss")||{};return a.isFunction(i)&&(i=i(this.$element)),b.syncCssClasses(e,this.$element,g),e.css(i),e.addClass(f),e},d}),b.define("select2/compat/initSelection",["jquery"],function(a){function b(a,b,c){c.get("debug")&&window.console&&console.warn&&console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"),this.initSelection=c.get("initSelection"),this._isInitialized=!1,a.call(this,b,c)}return b.prototype.current=function(b,c){var d=this;return this._isInitialized?void b.call(this,c):void this.initSelection.call(null,this.$element,function(b){d._isInitialized=!0,a.isArray(b)||(b=[b]),c(b)})},b}),b.define("select2/compat/inputData",["jquery"],function(a){function b(a,b,c){this._currentData=[],this._valueSeparator=c.get("valueSeparator")||",","hidden"===b.prop("type")&&c.get("debug")&&console&&console.warn&&console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."),a.call(this,b,c)}return b.prototype.current=function(b,c){function d(b,c){var e=[];return b.selected||-1!==a.inArray(b.id,c)?(b.selected=!0,e.push(b)):b.selected=!1,b.children&&e.push.apply(e,d(b.children,c)),e}for(var e=[],f=0;f<this._currentData.length;f++){var g=this._currentData[f];e.push.apply(e,d(g,this.$element.val().split(this._valueSeparator)))}c(e)},b.prototype.select=function(b,c){if(this.options.get("multiple")){var d=this.$element.val();d+=this._valueSeparator+c.id,this.$element.val(d),this.$element.trigger("change")}else this.current(function(b){a.map(b,function(a){a.selected=!1})}),this.$element.val(c.id),this.$element.trigger("change")},b.prototype.unselect=function(a,b){var c=this;b.selected=!1,this.current(function(a){for(var d=[],e=0;e<a.length;e++){var f=a[e];b.id!=f.id&&d.push(f.id)}c.$element.val(d.join(c._valueSeparator)),c.$element.trigger("change")})},b.prototype.query=function(a,b,c){for(var d=[],e=0;e<this._currentData.length;e++){var f=this._currentData[e],g=this.matches(b,f);null!==g&&d.push(g)}c({results:d})},b.prototype.addOptions=function(b,c){var d=a.map(c,function(b){return a.data(b[0],"data")});this._currentData.push.apply(this._currentData,d)},b}),b.define("select2/compat/matcher",["jquery"],function(a){function b(b){function c(c,d){var e=a.extend(!0,{},d);if(null==c.term||""===a.trim(c.term))return e;if(d.children){for(var f=d.children.length-1;f>=0;f--){var g=d.children[f],h=b(c.term,g.text,g);h||e.children.splice(f,1)}if(e.children.length>0)return e}return b(c.term,d.text,d)?e:null}return c}return b}),b.define("select2/compat/query",[],function(){function a(a,b,c){c.get("debug")&&window.console&&console.warn&&console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."),a.call(this,b,c)}return a.prototype.query=function(a,b,c){b.callback=c;var d=this.options.get("query");d.call(null,b)},a}),b.define("select2/dropdown/attachContainer",[],function(){function a(a,b,c){a.call(this,b,c)}return a.prototype.position=function(a,b,c){var d=c.find(".dropdown-wrapper");d.append(b),b.addClass("select2-dropdown--below"),c.addClass("select2-container--below")},a}),b.define("select2/dropdown/stopPropagation",[],function(){function a(){}return a.prototype.bind=function(a,b,c){a.call(this,b,c);var d=["blur","change","click","dblclick","focus","focusin","focusout","input","keydown","keyup","keypress","mousedown","mouseenter","mouseleave","mousemove","mouseover","mouseup","search","touchend","touchstart"];this.$dropdown.on(d.join(" "),function(a){a.stopPropagation()})},a}),b.define("select2/selection/stopPropagation",[],function(){function a(){}return a.prototype.bind=function(a,b,c){a.call(this,b,c);var d=["blur","change","click","dblclick","focus","focusin","focusout","input","keydown","keyup","keypress","mousedown","mouseenter","mouseleave","mousemove","mouseover","mouseup","search","touchend","touchstart"];this.$selection.on(d.join(" "),function(a){a.stopPropagation()})},a}),function(c){"function"==typeof b.define&&b.define.amd?b.define("jquery-mousewheel",["jquery"],c):"object"==typeof exports?module.exports=c:c(a)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})}),b.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults"],function(a,b,c,d){if(null==a.fn.select2){var e=["open","close","destroy"];a.fn.select2=function(b){if(b=b||{},"object"==typeof b)return this.each(function(){var d=a.extend(!0,{},b);new c(a(this),d)}),this;if("string"==typeof b){var d,f=Array.prototype.slice.call(arguments,1);return this.each(function(){var c=a(this).data("select2");null==c&&window.console&&console.error&&console.error("The select2('"+b+"') method was called on an element that is not using Select2."),d=c[b].apply(c,f)}),a.inArray(b,e)>-1?this:d}throw new Error("Invalid arguments for Select2: "+b)}}return null==a.fn.select2.defaults&&(a.fn.select2.defaults=d),c}),{define:b.define,require:b.require}}(),c=b.require("jquery.select2");return a.fn.select2.amd=b,c});
//! moment.js
//! version : 2.5.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function(a){function b(a,b){return function(c){return i(a.call(this,c),b)}}function c(a,b){return function(c){return this.lang().ordinal(a.call(this,c),b)}}function d(){}function e(a){u(a),g(this,a)}function f(a){var b=o(a),c=b.year||0,d=b.month||0,e=b.week||0,f=b.day||0,g=b.hour||0,h=b.minute||0,i=b.second||0,j=b.millisecond||0;this._milliseconds=+j+1e3*i+6e4*h+36e5*g,this._days=+f+7*e,this._months=+d+12*c,this._data={},this._bubble()}function g(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return b.hasOwnProperty("toString")&&(a.toString=b.toString),b.hasOwnProperty("valueOf")&&(a.valueOf=b.valueOf),a}function h(a){return 0>a?Math.ceil(a):Math.floor(a)}function i(a,b,c){for(var d=Math.abs(a)+"",e=a>=0;d.length<b;)d="0"+d;return(e?c?"+":"":"-")+d}function j(a,b,c,d){var e,f,g=b._milliseconds,h=b._days,i=b._months;g&&a._d.setTime(+a._d+g*c),(h||i)&&(e=a.minute(),f=a.hour()),h&&a.date(a.date()+h*c),i&&a.month(a.month()+i*c),g&&!d&&cb.updateOffset(a),(h||i)&&(a.minute(e),a.hour(f))}function k(a){return"[object Array]"===Object.prototype.toString.call(a)}function l(a){return"[object Date]"===Object.prototype.toString.call(a)||a instanceof Date}function m(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&q(a[d])!==q(b[d]))&&g++;return g+f}function n(a){if(a){var b=a.toLowerCase().replace(/(.)s$/,"$1");a=Qb[a]||Rb[b]||b}return a}function o(a){var b,c,d={};for(c in a)a.hasOwnProperty(c)&&(b=n(c),b&&(d[b]=a[c]));return d}function p(b){var c,d;if(0===b.indexOf("week"))c=7,d="day";else{if(0!==b.indexOf("month"))return;c=12,d="month"}cb[b]=function(e,f){var g,h,i=cb.fn._lang[b],j=[];if("number"==typeof e&&(f=e,e=a),h=function(a){var b=cb().utc().set(d,a);return i.call(cb.fn._lang,b,e||"")},null!=f)return h(f);for(g=0;c>g;g++)j.push(h(g));return j}}function q(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=b>=0?Math.floor(b):Math.ceil(b)),c}function r(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function s(a){return t(a)?366:365}function t(a){return a%4===0&&a%100!==0||a%400===0}function u(a){var b;a._a&&-2===a._pf.overflow&&(b=a._a[ib]<0||a._a[ib]>11?ib:a._a[jb]<1||a._a[jb]>r(a._a[hb],a._a[ib])?jb:a._a[kb]<0||a._a[kb]>23?kb:a._a[lb]<0||a._a[lb]>59?lb:a._a[mb]<0||a._a[mb]>59?mb:a._a[nb]<0||a._a[nb]>999?nb:-1,a._pf._overflowDayOfYear&&(hb>b||b>jb)&&(b=jb),a._pf.overflow=b)}function v(a){a._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function w(a){return null==a._isValid&&(a._isValid=!isNaN(a._d.getTime())&&a._pf.overflow<0&&!a._pf.empty&&!a._pf.invalidMonth&&!a._pf.nullInput&&!a._pf.invalidFormat&&!a._pf.userInvalidated,a._strict&&(a._isValid=a._isValid&&0===a._pf.charsLeftOver&&0===a._pf.unusedTokens.length)),a._isValid}function x(a){return a?a.toLowerCase().replace("_","-"):a}function y(a,b){return b._isUTC?cb(a).zone(b._offset||0):cb(a).local()}function z(a,b){return b.abbr=a,ob[a]||(ob[a]=new d),ob[a].set(b),ob[a]}function A(a){delete ob[a]}function B(a){var b,c,d,e,f=0,g=function(a){if(!ob[a]&&pb)try{require("./lang/"+a)}catch(b){}return ob[a]};if(!a)return cb.fn._lang;if(!k(a)){if(c=g(a))return c;a=[a]}for(;f<a.length;){for(e=x(a[f]).split("-"),b=e.length,d=x(a[f+1]),d=d?d.split("-"):null;b>0;){if(c=g(e.slice(0,b).join("-")))return c;if(d&&d.length>=b&&m(e,d,!0)>=b-1)break;b--}f++}return cb.fn._lang}function C(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function D(a){var b,c,d=a.match(tb);for(b=0,c=d.length;c>b;b++)d[b]=Vb[d[b]]?Vb[d[b]]:C(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function E(a,b){return a.isValid()?(b=F(b,a.lang()),Sb[b]||(Sb[b]=D(b)),Sb[b](a)):a.lang().invalidDate()}function F(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(ub.lastIndex=0;d>=0&&ub.test(a);)a=a.replace(ub,c),ub.lastIndex=0,d-=1;return a}function G(a,b){var c,d=b._strict;switch(a){case"DDDD":return Gb;case"YYYY":case"GGGG":case"gggg":return d?Hb:xb;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return d?Ib:yb;case"S":if(d)return Eb;case"SS":if(d)return Fb;case"SSS":case"DDD":return d?Gb:wb;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return Ab;case"a":case"A":return B(b._l)._meridiemParse;case"X":return Db;case"Z":case"ZZ":return Bb;case"T":return Cb;case"SSSS":return zb;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return d?Fb:vb;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return d?Eb:vb;default:return c=new RegExp(O(N(a.replace("\\","")),"i"))}}function H(a){a=a||"";var b=a.match(Bb)||[],c=b[b.length-1]||[],d=(c+"").match(Nb)||["-",0,0],e=+(60*d[1])+q(d[2]);return"+"===d[0]?-e:e}function I(a,b,c){var d,e=c._a;switch(a){case"M":case"MM":null!=b&&(e[ib]=q(b)-1);break;case"MMM":case"MMMM":d=B(c._l).monthsParse(b),null!=d?e[ib]=d:c._pf.invalidMonth=b;break;case"D":case"DD":null!=b&&(e[jb]=q(b));break;case"DDD":case"DDDD":null!=b&&(c._dayOfYear=q(b));break;case"YY":e[hb]=q(b)+(q(b)>68?1900:2e3);break;case"YYYY":case"YYYYY":case"YYYYYY":e[hb]=q(b);break;case"a":case"A":c._isPm=B(c._l).isPM(b);break;case"H":case"HH":case"h":case"hh":e[kb]=q(b);break;case"m":case"mm":e[lb]=q(b);break;case"s":case"ss":e[mb]=q(b);break;case"S":case"SS":case"SSS":case"SSSS":e[nb]=q(1e3*("0."+b));break;case"X":c._d=new Date(1e3*parseFloat(b));break;case"Z":case"ZZ":c._useUTC=!0,c._tzm=H(b);break;case"w":case"ww":case"W":case"WW":case"d":case"dd":case"ddd":case"dddd":case"e":case"E":a=a.substr(0,1);case"gg":case"gggg":case"GG":case"GGGG":case"GGGGG":a=a.substr(0,2),b&&(c._w=c._w||{},c._w[a]=b)}}function J(a){var b,c,d,e,f,g,h,i,j,k,l=[];if(!a._d){for(d=L(a),a._w&&null==a._a[jb]&&null==a._a[ib]&&(f=function(b){var c=parseInt(b,10);return b?b.length<3?c>68?1900+c:2e3+c:c:null==a._a[hb]?cb().weekYear():a._a[hb]},g=a._w,null!=g.GG||null!=g.W||null!=g.E?h=Y(f(g.GG),g.W||1,g.E,4,1):(i=B(a._l),j=null!=g.d?U(g.d,i):null!=g.e?parseInt(g.e,10)+i._week.dow:0,k=parseInt(g.w,10)||1,null!=g.d&&j<i._week.dow&&k++,h=Y(f(g.gg),k,j,i._week.doy,i._week.dow)),a._a[hb]=h.year,a._dayOfYear=h.dayOfYear),a._dayOfYear&&(e=null==a._a[hb]?d[hb]:a._a[hb],a._dayOfYear>s(e)&&(a._pf._overflowDayOfYear=!0),c=T(e,0,a._dayOfYear),a._a[ib]=c.getUTCMonth(),a._a[jb]=c.getUTCDate()),b=0;3>b&&null==a._a[b];++b)a._a[b]=l[b]=d[b];for(;7>b;b++)a._a[b]=l[b]=null==a._a[b]?2===b?1:0:a._a[b];l[kb]+=q((a._tzm||0)/60),l[lb]+=q((a._tzm||0)%60),a._d=(a._useUTC?T:S).apply(null,l)}}function K(a){var b;a._d||(b=o(a._i),a._a=[b.year,b.month,b.day,b.hour,b.minute,b.second,b.millisecond],J(a))}function L(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function M(a){a._a=[],a._pf.empty=!0;var b,c,d,e,f,g=B(a._l),h=""+a._i,i=h.length,j=0;for(d=F(a._f,g).match(tb)||[],b=0;b<d.length;b++)e=d[b],c=(h.match(G(e,a))||[])[0],c&&(f=h.substr(0,h.indexOf(c)),f.length>0&&a._pf.unusedInput.push(f),h=h.slice(h.indexOf(c)+c.length),j+=c.length),Vb[e]?(c?a._pf.empty=!1:a._pf.unusedTokens.push(e),I(e,c,a)):a._strict&&!c&&a._pf.unusedTokens.push(e);a._pf.charsLeftOver=i-j,h.length>0&&a._pf.unusedInput.push(h),a._isPm&&a._a[kb]<12&&(a._a[kb]+=12),a._isPm===!1&&12===a._a[kb]&&(a._a[kb]=0),J(a),u(a)}function N(a){return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e})}function O(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function P(a){var b,c,d,e,f;if(0===a._f.length)return a._pf.invalidFormat=!0,a._d=new Date(0/0),void 0;for(e=0;e<a._f.length;e++)f=0,b=g({},a),v(b),b._f=a._f[e],M(b),w(b)&&(f+=b._pf.charsLeftOver,f+=10*b._pf.unusedTokens.length,b._pf.score=f,(null==d||d>f)&&(d=f,c=b));g(a,c||b)}function Q(a){var b,c=a._i,d=Jb.exec(c);if(d){for(a._pf.iso=!0,b=4;b>0;b--)if(d[b]){a._f=Lb[b-1]+(d[6]||" ");break}for(b=0;4>b;b++)if(Mb[b][1].exec(c)){a._f+=Mb[b][0];break}c.match(Bb)&&(a._f+="Z"),M(a)}else a._d=new Date(c)}function R(b){var c=b._i,d=qb.exec(c);c===a?b._d=new Date:d?b._d=new Date(+d[1]):"string"==typeof c?Q(b):k(c)?(b._a=c.slice(0),J(b)):l(c)?b._d=new Date(+c):"object"==typeof c?K(b):b._d=new Date(c)}function S(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 1970>a&&h.setFullYear(a),h}function T(a){var b=new Date(Date.UTC.apply(null,arguments));return 1970>a&&b.setUTCFullYear(a),b}function U(a,b){if("string"==typeof a)if(isNaN(a)){if(a=b.weekdaysParse(a),"number"!=typeof a)return null}else a=parseInt(a,10);return a}function V(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function W(a,b,c){var d=gb(Math.abs(a)/1e3),e=gb(d/60),f=gb(e/60),g=gb(f/24),h=gb(g/365),i=45>d&&["s",d]||1===e&&["m"]||45>e&&["mm",e]||1===f&&["h"]||22>f&&["hh",f]||1===g&&["d"]||25>=g&&["dd",g]||45>=g&&["M"]||345>g&&["MM",gb(g/30)]||1===h&&["y"]||["yy",h];return i[2]=b,i[3]=a>0,i[4]=c,V.apply({},i)}function X(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=cb(a).add("d",f),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function Y(a,b,c,d,e){var f,g,h=new Date(i(a,6,!0)+"-01-01").getUTCDay();return c=null!=c?c:e,f=e-h+(h>d?7:0),g=7*(b-1)+(c-e)+f+1,{year:g>0?a:a-1,dayOfYear:g>0?g:s(a-1)+g}}function Z(a){var b=a._i,c=a._f;return"undefined"==typeof a._pf&&v(a),null===b?cb.invalid({nullInput:!0}):("string"==typeof b&&(a._i=b=B().preparse(b)),cb.isMoment(b)?(a=g({},b),a._d=new Date(+b._d)):c?k(c)?P(a):M(a):R(a),new e(a))}function $(a,b){cb.fn[a]=cb.fn[a+"s"]=function(a){var c=this._isUTC?"UTC":"";return null!=a?(this._d["set"+c+b](a),cb.updateOffset(this),this):this._d["get"+c+b]()}}function _(a){cb.duration.fn[a]=function(){return this._data[a]}}function ab(a,b){cb.duration.fn["as"+a]=function(){return+this/b}}function bb(a){var b=!1,c=cb;"undefined"==typeof ender&&(a?(fb.moment=function(){return!b&&console&&console.warn&&(b=!0,console.warn("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.")),c.apply(null,arguments)},g(fb.moment,c)):fb.moment=cb)}for(var cb,db,eb="2.5.0",fb=this,gb=Math.round,hb=0,ib=1,jb=2,kb=3,lb=4,mb=5,nb=6,ob={},pb="undefined"!=typeof module&&module.exports&&"undefined"!=typeof require,qb=/^\/?Date\((\-?\d+)/i,rb=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,sb=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,tb=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,ub=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,vb=/\d\d?/,wb=/\d{1,3}/,xb=/\d{1,4}/,yb=/[+\-]?\d{1,6}/,zb=/\d+/,Ab=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Bb=/Z|[\+\-]\d\d:?\d\d/gi,Cb=/T/i,Db=/[\+\-]?\d+(\.\d{1,3})?/,Eb=/\d/,Fb=/\d\d/,Gb=/\d{3}/,Hb=/\d{4}/,Ib=/[+\-]?\d{6}/,Jb=/^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Kb="YYYY-MM-DDTHH:mm:ssZ",Lb=["YYYY-MM-DD","GGGG-[W]WW","GGGG-[W]WW-E","YYYY-DDD"],Mb=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],Nb=/([\+\-]|\d\d)/gi,Ob="Date|Hours|Minutes|Seconds|Milliseconds".split("|"),Pb={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},Qb={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},Rb={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},Sb={},Tb="DDD w W M D d".split(" "),Ub="M D H h m s w W".split(" "),Vb={M:function(){return this.month()+1},MMM:function(a){return this.lang().monthsShort(this,a)},MMMM:function(a){return this.lang().months(this,a)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(a){return this.lang().weekdaysMin(this,a)},ddd:function(a){return this.lang().weekdaysShort(this,a)},dddd:function(a){return this.lang().weekdays(this,a)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return i(this.year()%100,2)},YYYY:function(){return i(this.year(),4)},YYYYY:function(){return i(this.year(),5)},YYYYYY:function(){var a=this.year(),b=a>=0?"+":"-";return b+i(Math.abs(a),6)},gg:function(){return i(this.weekYear()%100,2)},gggg:function(){return this.weekYear()},ggggg:function(){return i(this.weekYear(),5)},GG:function(){return i(this.isoWeekYear()%100,2)},GGGG:function(){return this.isoWeekYear()},GGGGG:function(){return i(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return q(this.milliseconds()/100)},SS:function(){return i(q(this.milliseconds()/10),2)},SSS:function(){return i(this.milliseconds(),3)},SSSS:function(){return i(this.milliseconds(),3)},Z:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+i(q(a/60),2)+":"+i(q(a)%60,2)},ZZ:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+i(q(a/60),2)+i(q(a)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()},Q:function(){return this.quarter()}},Wb=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];Tb.length;)db=Tb.pop(),Vb[db+"o"]=c(Vb[db],db);for(;Ub.length;)db=Ub.pop(),Vb[db+db]=b(Vb[db],2);for(Vb.DDDD=b(Vb.DDD,3),g(d.prototype,{set:function(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(a){return this._months[a.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(a){return this._monthsShort[a.month()]},monthsParse:function(a){var b,c,d;for(this._monthsParse||(this._monthsParse=[]),b=0;12>b;b++)if(this._monthsParse[b]||(c=cb.utc([2e3,b]),d="^"+this.months(c,"")+"|^"+this.monthsShort(c,""),this._monthsParse[b]=new RegExp(d.replace(".",""),"i")),this._monthsParse[b].test(a))return b},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(a){return this._weekdays[a.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(a){return this._weekdaysShort[a.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(a){return this._weekdaysMin[a.day()]},weekdaysParse:function(a){var b,c,d;for(this._weekdaysParse||(this._weekdaysParse=[]),b=0;7>b;b++)if(this._weekdaysParse[b]||(c=cb([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(a){var b=this._longDateFormat[a];return!b&&this._longDateFormat[a.toUpperCase()]&&(b=this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a]=b),b},isPM:function(a){return"p"===(a+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(a,b){var c=this._calendar[a];return"function"==typeof c?c.apply(b):c},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)},pastFuture:function(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)},ordinal:function(a){return this._ordinal.replace("%d",a)},_ordinal:"%d",preparse:function(a){return a},postformat:function(a){return a},week:function(a){return X(a,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),cb=function(b,c,d,e){return"boolean"==typeof d&&(e=d,d=a),Z({_i:b,_f:c,_l:d,_strict:e,_isUTC:!1})},cb.utc=function(b,c,d,e){var f;return"boolean"==typeof d&&(e=d,d=a),f=Z({_useUTC:!0,_isUTC:!0,_l:d,_i:b,_f:c,_strict:e}).utc()},cb.unix=function(a){return cb(1e3*a)},cb.duration=function(a,b){var c,d,e,g=a,h=null;return cb.isDuration(a)?g={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(g={},b?g[b]=a:g.milliseconds=a):(h=rb.exec(a))?(c="-"===h[1]?-1:1,g={y:0,d:q(h[jb])*c,h:q(h[kb])*c,m:q(h[lb])*c,s:q(h[mb])*c,ms:q(h[nb])*c}):(h=sb.exec(a))&&(c="-"===h[1]?-1:1,e=function(a){var b=a&&parseFloat(a.replace(",","."));return(isNaN(b)?0:b)*c},g={y:e(h[2]),M:e(h[3]),d:e(h[4]),h:e(h[5]),m:e(h[6]),s:e(h[7]),w:e(h[8])}),d=new f(g),cb.isDuration(a)&&a.hasOwnProperty("_lang")&&(d._lang=a._lang),d},cb.version=eb,cb.defaultFormat=Kb,cb.updateOffset=function(){},cb.lang=function(a,b){var c;return a?(b?z(x(a),b):null===b?(A(a),a="en"):ob[a]||B(a),c=cb.duration.fn._lang=cb.fn._lang=B(a),c._abbr):cb.fn._lang._abbr},cb.langData=function(a){return a&&a._lang&&a._lang._abbr&&(a=a._lang._abbr),B(a)},cb.isMoment=function(a){return a instanceof e},cb.isDuration=function(a){return a instanceof f},db=Wb.length-1;db>=0;--db)p(Wb[db]);for(cb.normalizeUnits=function(a){return n(a)},cb.invalid=function(a){var b=cb.utc(0/0);return null!=a?g(b._pf,a):b._pf.userInvalidated=!0,b},cb.parseZone=function(a){return cb(a).parseZone()},g(cb.fn=e.prototype,{clone:function(){return cb(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var a=cb(this).utc();return 0<a.year()&&a.year()<=9999?E(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):E(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var a=this;return[a.year(),a.month(),a.date(),a.hours(),a.minutes(),a.seconds(),a.milliseconds()]},isValid:function(){return w(this)},isDSTShifted:function(){return this._a?this.isValid()&&m(this._a,(this._isUTC?cb.utc(this._a):cb(this._a)).toArray())>0:!1},parsingFlags:function(){return g({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(){return this.zone(0)},local:function(){return this.zone(0),this._isUTC=!1,this},format:function(a){var b=E(this,a||cb.defaultFormat);return this.lang().postformat(b)},add:function(a,b){var c;return c="string"==typeof a?cb.duration(+b,a):cb.duration(a,b),j(this,c,1),this},subtract:function(a,b){var c;return c="string"==typeof a?cb.duration(+b,a):cb.duration(a,b),j(this,c,-1),this},diff:function(a,b,c){var d,e,f=y(a,this),g=6e4*(this.zone()-f.zone());return b=n(b),"year"===b||"month"===b?(d=432e5*(this.daysInMonth()+f.daysInMonth()),e=12*(this.year()-f.year())+(this.month()-f.month()),e+=(this-cb(this).startOf("month")-(f-cb(f).startOf("month")))/d,e-=6e4*(this.zone()-cb(this).startOf("month").zone()-(f.zone()-cb(f).startOf("month").zone()))/d,"year"===b&&(e/=12)):(d=this-f,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-g)/864e5:"week"===b?(d-g)/6048e5:d),c?e:h(e)},from:function(a,b){return cb.duration(this.diff(a)).lang(this.lang()._abbr).humanize(!b)},fromNow:function(a){return this.from(cb(),a)},calendar:function(){var a=y(cb(),this).startOf("day"),b=this.diff(a,"days",!0),c=-6>b?"sameElse":-1>b?"lastWeek":0>b?"lastDay":1>b?"sameDay":2>b?"nextDay":7>b?"nextWeek":"sameElse";return this.format(this.lang().calendar(c,this))},isLeapYear:function(){return t(this.year())},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=U(a,this.lang()),this.add({d:a-b})):b},month:function(a){var b,c=this._isUTC?"UTC":"";return null!=a?"string"==typeof a&&(a=this.lang().monthsParse(a),"number"!=typeof a)?this:(b=this.date(),this.date(1),this._d["set"+c+"Month"](a),this.date(Math.min(b,this.daysInMonth())),cb.updateOffset(this),this):this._d["get"+c+"Month"]()},startOf:function(a){switch(a=n(a)){case"year":this.month(0);case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a?this.weekday(0):"isoWeek"===a&&this.isoWeekday(1),this},endOf:function(a){return a=n(a),this.startOf(a).add("isoWeek"===a?"week":a,1).subtract("ms",1)},isAfter:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)>+cb(a).startOf(b)},isBefore:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)<+cb(a).startOf(b)},isSame:function(a,b){return b=b||"ms",+this.clone().startOf(b)===+y(a,this).startOf(b)},min:function(a){return a=cb.apply(null,arguments),this>a?this:a},max:function(a){return a=cb.apply(null,arguments),a>this?this:a},zone:function(a){var b=this._offset||0;return null==a?this._isUTC?b:this._d.getTimezoneOffset():("string"==typeof a&&(a=H(a)),Math.abs(a)<16&&(a=60*a),this._offset=a,this._isUTC=!0,b!==a&&j(this,cb.duration(b-a,"m"),1,!0),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return this._tzm?this.zone(this._tzm):"string"==typeof this._i&&this.zone(this._i),this},hasAlignedHourOffset:function(a){return a=a?cb(a).zone():0,(this.zone()-a)%60===0},daysInMonth:function(){return r(this.year(),this.month())},dayOfYear:function(a){var b=gb((cb(this).startOf("day")-cb(this).startOf("year"))/864e5)+1;return null==a?b:this.add("d",a-b)},quarter:function(){return Math.ceil((this.month()+1)/3)},weekYear:function(a){var b=X(this,this.lang()._week.dow,this.lang()._week.doy).year;return null==a?b:this.add("y",a-b)},isoWeekYear:function(a){var b=X(this,1,4).year;return null==a?b:this.add("y",a-b)},week:function(a){var b=this.lang().week(this);return null==a?b:this.add("d",7*(a-b))},isoWeek:function(a){var b=X(this,1,4).week;return null==a?b:this.add("d",7*(a-b))},weekday:function(a){var b=(this.day()+7-this.lang()._week.dow)%7;return null==a?b:this.add("d",a-b)},isoWeekday:function(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)},get:function(a){return a=n(a),this[a]()},set:function(a,b){return a=n(a),"function"==typeof this[a]&&this[a](b),this},lang:function(b){return b===a?this._lang:(this._lang=B(b),this)}}),db=0;db<Ob.length;db++)$(Ob[db].toLowerCase().replace(/s$/,""),Ob[db]);$("year","FullYear"),cb.fn.days=cb.fn.day,cb.fn.months=cb.fn.month,cb.fn.weeks=cb.fn.week,cb.fn.isoWeeks=cb.fn.isoWeek,cb.fn.toJSON=cb.fn.toISOString,g(cb.duration.fn=f.prototype,{_bubble:function(){var a,b,c,d,e=this._milliseconds,f=this._days,g=this._months,i=this._data;i.milliseconds=e%1e3,a=h(e/1e3),i.seconds=a%60,b=h(a/60),i.minutes=b%60,c=h(b/60),i.hours=c%24,f+=h(c/24),i.days=f%30,g+=h(f/30),i.months=g%12,d=h(g/12),i.years=d},weeks:function(){return h(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*q(this._months/12)},humanize:function(a){var b=+this,c=W(b,!a,this.lang());return a&&(c=this.lang().pastFuture(b,c)),this.lang().postformat(c)},add:function(a,b){var c=cb.duration(a,b);return this._milliseconds+=c._milliseconds,this._days+=c._days,this._months+=c._months,this._bubble(),this},subtract:function(a,b){var c=cb.duration(a,b);return this._milliseconds-=c._milliseconds,this._days-=c._days,this._months-=c._months,this._bubble(),this},get:function(a){return a=n(a),this[a.toLowerCase()+"s"]()},as:function(a){return a=n(a),this["as"+a.charAt(0).toUpperCase()+a.slice(1)+"s"]()},lang:cb.fn.lang,toIsoString:function(){var a=Math.abs(this.years()),b=Math.abs(this.months()),c=Math.abs(this.days()),d=Math.abs(this.hours()),e=Math.abs(this.minutes()),f=Math.abs(this.seconds()+this.milliseconds()/1e3);return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(a?a+"Y":"")+(b?b+"M":"")+(c?c+"D":"")+(d||e||f?"T":"")+(d?d+"H":"")+(e?e+"M":"")+(f?f+"S":""):"P0D"}});for(db in Pb)Pb.hasOwnProperty(db)&&(ab(db,Pb[db]),_(db.toLowerCase()));ab("Weeks",6048e5),cb.duration.fn.asMonths=function(){return(+this-31536e6*this.years())/2592e6+12*this.years()},cb.lang("en",{ordinal:function(a){var b=a%10,c=1===q(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),pb?(module.exports=cb,bb(!0)):"function"==typeof define&&define.amd?define("moment",function(b,c,d){return d.config&&d.config()&&d.config().noGlobal!==!0&&bb(d.config().noGlobal===a),cb}):bb()}).call(this);

/**
 * Copyright (c) 2007-2012 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * @author Ariel Flesler
 * @version 1.4.3.1
 */
(function($){var h=$.scrollTo=function(a,b,c){$(window).scrollTo(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};h.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(e,f,g){if(typeof f=='object'){g=f;f=0}if(typeof g=='function')g={onAfter:g};if(e=='max')e=9e9;g=$.extend({},h.defaults,g);f=f||g.duration;g.queue=g.queue&&g.axis.length>1;if(g.queue)f/=2;g.offset=both(g.offset);g.over=both(g.over);return this._scrollable().each(function(){if(e==null)return;var d=this,$elem=$(d),targ=e,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}$.each(g.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=h.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(g.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=g.offset[pos]||0;if(g.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*g.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(g.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&g.queue){if(old!=attr[key])animate(g.onAfterFirst);delete attr[key]}});animate(g.onAfter);function animate(a){$elem.animate(attr,f,g.easing,a&&function(){a.call(this,e,g)})}}).end()};h.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);

/**
|------------------------------------------|
| MelonHTML5 - Timeline                    |
|------------------------------------------|
| @author:  Lee Le (lee@melonhtml5.com)    |
| @version: 2.08 (12 Dec 2015)             |
| @website: www.melonhtml5.com             |
|------------------------------------------|
*/

String.prototype.parseURL=function(){return this.replace(/[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&~\?\/.=]+/g,function(l){return l.link(l)})};String.prototype.parseHashtag=function(){return this.replace(/[#]+[A-Za-z0-9-_]+/g,function(l){var m=l.replace("#","%23");return l.link("//twitter.com/search?q="+m)})};String.prototype.trimString=function(l){return this.substr(0,l)+(this.length>l?"...":"")};
function Timeline(l,m,e,n){e===n&&(e=jQuery);var a=this,q=e(document.body);this._lightbox=this._overlay=this._spine=this._container=null;this._original_data=m?e.extend(!0,[],m):[];this._data=[];this._responsive=!1;this._options={dateFormat:"DD MMMM YYYY",first_separator:!1,separator:"year",columnMode:"dual",order:"desc",responsive_width:null,animation:!0,lightbox:!0,max:null,loadmore:0,facebookAppId:null,facebookAccessToken:null,facebookPageId:null,twitterSearchKey:null,onSearchSuccess:null,onSearchError:null};
this._years=[];this._months=[];this._readmore_text="Read More";this._loadmore_text="Load More";this._month_translation="January February March April May June July August September October November December".split(" ");this._spine_margin=100;this._facebook_content_length=300;this._facebook_description_length=150;this._elements=[];this._separators=[];this._iframe_queue=[];this._lightbox_loading=!1;this._use_css3=function(){var a=document.body.style;if("string"==typeof a.transition)return!0;for(var c=
["Webkit","Moz","Khtml","O","ms"],d=0;d<c.length;d++)if("string"==typeof a[c[d]+"Transition"])return!0;return!1}();this._default_element_data={type:"blog_post",date:"2000-01-01",dateFormat:null,title:null,images:[],content:null,readmore:null,speed:null,height:300,url:null};this._transitionEnd=function(a,c){var d=!1,f=document.createElement("div");e(["transition","WebkitTransition","MozTransition","msTransition"]).each(function(a,b){if(f.style[b]!==n)return d=!0,!1});if(d)a.one("webkitTransitionEnd oTransitionEnd MSTransitionEnd transitionend",
c);else setTimeout(c,0);return a};this._prepareData=function(){e.each(a._original_data,function(a,c){var d=moment(c.date);c.date=d.format("YYYY-MM-DD HH:mm:ss")});a._sortData(a._original_data);a._data=a._options.max&&a._options.max<a._original_data.length?a._original_data.slice(0,a._options.max):a._original_data};this._sortData=function(b){b&&b.sort(function(b,d){return"desc"===a._options.order?parseInt(d.date.replace(/[^0-9]/g,""),10)-parseInt(b.date.replace(/[^0-9]/g,""),10):parseInt(b.date.replace(/[^0-9]/g,
""),10)-parseInt(d.date.replace(/[^0-9]/g,""),10)});return b};this._createElement=function(b,c){b=e.extend({},a._default_element_data,b);var d=e("<div>").addClass("timeline_element "+b.type);"left"===c?d.addClass("timeline_element_left"):"right"===c&&d.addClass("timeline_element_right");a._options.animation||d.addClass("animated");var f=e("<div>").addClass("timeline_element_box").appendTo(d);b.title?e("<div>").addClass("timeline_title").html('<span class="timeline_title_label">'+b.title+'</span><span class="timeline_title_date">'+
a._getDateString(b.date,b.dateFormat||a._options.dateFormat)+"</span>").appendTo(f):d.addClass("notitle");switch(b.type){case "iframe":f=e("<div>").addClass("content loading").height(b.height).appendTo(f);a._iframe_queue.push({element:f,url:b.url});break;case "gallery":if(b.images.length){b.content&&e("<div>").addClass("content").html(b.content).appendTo(f);var h="";e(b.images).each(function(c,d){h+='<div class="img_container"><img style="height:'+b.height+'px;" src="'+d+'" />';a._options.lightbox&&
(h+='<div class="img_overlay"><span class="magnifier" data-total="'+b.images.length+'" data-order="'+c+'" data-img="'+d+'"></span></div>');h+="</div>"});e("<div>").addClass("scroll_container").appendTo(f).html(h)}break;case "blog_post":b.content||b.readmore||d.addClass("nocontent");var g="";e(b.images).each(function(c,d){g+='<div data-total="'+b.images.length+'" data-order="'+c+'" class="img_container'+(0===c?" active":"")+'" style="display:'+(0===c?"block":"none")+';"><img src="'+d+'" />';a._options.lightbox&&
(g+='<div class="img_overlay"><span class="magnifier" data-total="'+b.images.length+'" data-order="'+c+'" data-img="'+d+'"></span></div>');g+="</div>"});1<b.images.length&&(g+='<span class="slider_prev"></span><span class="slider_next"></span>');e("<div>").addClass("slider_container").html(g).appendTo(f);b.content&&e("<div>").addClass("content").html(b.content).appendTo(f);b.readmore&&e("<div>").addClass("readmore").html('<a href="'+b.readmore+'">'+a._readmore_text+"</a>").appendTo(f);1<b.images.length&&
b.speed&&(d.data("speed",b.speed),setTimeout(function(){a._updateSlider(d,"next")},b.speed))}d.appendTo(a._container);a._elements.push(d);return d};this._createSeparator=function(b){b=e("<div>").addClass("date_separator").attr("id","timeline_date_separator_"+b).html("<span>"+b+"</span>").appendTo(a._container);a._options.animation||b.addClass("animated");a._separators.push(b)};this._render=function(b,c){var d=!0;e(b).each(function(b,h){if(a._options.max&&a._options.max<=b&&!c)return!1;if(c&&0===b){var g=
a._container.children(":last");g.length&&g.hasClass("timeline_element_left")&&(d=!1)}var g=parseInt(h.date.split("-")[0],10),k=parseInt(h.date.split("-")[1],10),k=g+"-"+k,p=!1;-1!==e.inArray(g,a._years)||"year"!==a._options.separator&&null!==a._options.separator||(p=!0,a._years.push(g));-1!==e.inArray(k,a._months)||"month"!==a._options.separator&&"month_year"!==a._options.separator||(p=!0,a._months.push(k));if(p){if("year"===a._options.separator)(1<a._years.length||a._options.first_separator)&&a._createSeparator(g);
else if("month"===a._options.separator||"month_year"===a._options.separator)if(1<a._months.length||a._options.first_separator)k=a._month_translation[parseInt(k.split("-")[1],10)-1],"month_year"===a._options.separator&&(k=k+" "+g),a._createSeparator(k);a._options.separator&&(d=!0)}"dual"===a._options.columnMode?a._createElement(h,d?"left":"right"):a._createElement(h);d=d?!1:!0})};this._updateSlider=function(b,c){b.data("timeout_id")&&clearTimeout(b.data("timeout_id"));if(!this._options.lightbox||!a._overlay.hasClass("open")){var d=
b.find(".img_container.active").removeClass("active"),f="next"===c?d.data("order")===d.data("total")-1?b.find(".img_container:first").addClass("active"):d.next().addClass("active"):0===d.data("order")?b.find(".img_container:last").addClass("active"):d.prev().addClass("active");f.css({position:"absolute",top:0,left:0,"z-index":10}).fadeIn(300,function(){f.css({position:"",top:"",left:"","z-index":""});d.hide()})}if(b.data("speed")){var e=setTimeout(function(){a._updateSlider(b,c)},b.data("speed"));
b.data("timeout_id",e)}};this._startAnimation=function(b){e(window).width();a._use_css3?a._spine.addClass("animated"):a._spine.animate({bottom:"0%"},500,function(){a._spine.addClass("animated")});"year"!==a._options.separator&&"month"!==a._options.separator&&"month_year"!==a._options.separator||setTimeout(function(){e(a._separators).each(function(b,c){a._use_css3?c.addClass("animated"):c.children("span").animate({opacity:1,top:"50%"},300,function(){c.addClass("animated")})})},500);var c=0;e(a._elements).each(function(d,
f){f.hasClass("animated")||(c++,setTimeout(function(c){a._use_css3?f.addClass("animated"):f.hide().addClass("animated").fadeIn();d===a._elements.length-1&&setTimeout(b,200)},("year"===a._options.separator||"month"===a._options.separator||"month_year"===a._options.separator?1E3:500)+100*c))});return!0};this._getDateString=function(a,c){return moment(a).format(c)};this._loadMore=function(){a._loadmore.hasClass("loading")||(a._loadmore.addClass("loading"),setTimeout(function(){a._loadmore.removeClass("loading");
var b=a._original_data.slice(a._data.length,a._data.length+a._options.loadmore);a.appendData(b);a._data.length>=a._original_data.length&&a._loadmore.remove()},1E3))};this._display=function(){a._options.lightbox&&(a._overlay=e(".timeline_overlay"),a._overlay.length?a._lightbox=a._overlay.children(".lightbox"):(a._overlay=e("<div>").addClass("timeline_overlay"),a._lightbox=e("<div>").addClass("lightbox").html('<div class="navigation"><a class="close" href="#"></a><span class="prev"></span><span class="next"></span></div>').appendTo(a._overlay),
a._overlay.appendTo(q)));a._container=e("<div>").addClass("timeline timeline_"+a._options.columnMode);e.support.opacity||a._container.addClass("opacityFilter");a._use_css3||a._container.addClass("noneCSS3");a._spine=e("<div>").addClass("spine").appendTo(a._container);a._options.animation||a._spine.addClass("animated");a._render(a._data);a._container.data("loaded",!0).appendTo(l);a._options.loadmore&&a._options.max&&a._original_data.length&&a._original_data.length>this._options.max&&(a._loadmore=e("<div>").addClass("timeline_loadmore").text(this._loadmore_text).appendTo(l));
a._options.animation?setTimeout(function(){a._startAnimation(a._processIframeQueue)},200):a._processIframeQueue();if(a._options.responsive_width)e(window).on("resize",a._windowResize);a._options.responsive_width&&e(window).resize();e(document).on("click",a._handleClick);e(document).on("keydown",a._handleKeyDown);return!0};this._makeResponsive=function(b){b?this._responsive||(this._responsive=!0,a._container.removeClass("timeline_left timeline_right timeline_dual"),a._container.addClass("timeline_center")):
this._responsive&&(this._responsive=!1,a._container.removeClass("timeline_center"),a._container.addClass("timeline_"+a._options.columnMode))};this._openLightBox=function(b,c){if(!this._lightbox_loading)return this._lightbox_loading=!0,b.parent().addClass("loading"),a._lightbox.data("magnifier",b),1===b.data("total")?a._lightbox.find(".navigation span").hide():a._lightbox.find(".navigation span").show(),setTimeout(function(){a._lightbox_loading=!1;var d=function(){b.parent().removeClass("loading");
a._overlay.addClass("open");e("<img>").attr("src",c).appendTo(a._lightbox);var d=a._getLightboxSize(f.width,f.height);a._lightbox.addClass("loaded").css({width:d.width,height:d.height})},f=new Image;f.onload=d;f.onerror=d;f.src=c},1E3),c};this._closeLightBox=function(){a._transitionEnd(a._lightbox,function(){a._overlay.removeClass("open");a._lightbox.removeAttr("style").children("img").remove()});a._lightbox.removeClass("loaded")};this._getLightboxSize=function(a,c){var d=e(window).width()-60,f=e(window).height()-
60,h=a,g=c;if(a>d||c>f)a>d&&c<=f?(h=d,g=c/(a/h)):c>f&&a<=d?(g=f,h=a/(c/g)):(h=d,g=c/(a/h),g>f&&(g=f,h=a/(c/g)));return{width:h,height:g}};this._navLightBox=function(b,c){var d=a._lightbox.data("magnifier");if("next"===c){var f=d.parents(".img_container:first").next(".img_container");f.length||(f=d.parents(".img_container:first").parent().children(".img_container:first"))}else f=d.parents(".img_container:first").prev(".img_container"),f.length||(f=d.parents(".img_container:first").parent().children(".img_container:last"));
var e=f.find("span.magnifier"),g=e.data("img"),k=new Image;k.onload=function(){a._lightbox.data("magnifier",e).addClass("updating");a._lightbox.children("img").attr("src",g);var b=a._getLightboxSize(k.width,k.height);a._lightbox.css({width:b.width,height:b.height});setTimeout(function(){a._lightbox.removeClass("updating")},500)};k.src=g};this._processIframeQueue=function(){e(a._iframe_queue).each(function(a,c){c.element.removeClass("loading").html('<iframe frameborder="0" src="'+c.url+'"></iframe>')})};
this._windowResize=function(b){e(window).width()<a._options.responsive_width?a._makeResponsive(!0):a._makeResponsive(!1)};this._handleClick=function(b){var c=e(b.target);c.hasClass("timeline_overlay")?a._closeLightBox():c.hasClass("magnifier")?a._openLightBox(c,c.data("img")):c.hasClass("close")?(b.preventDefault(),a._closeLightBox()):c.hasClass("prev")?a._navLightBox(c,"prev"):c.hasClass("next")?a._navLightBox(c,"next"):c.hasClass("slider_prev")?a._updateSlider(c.parents(".timeline_element:first"),
"prev"):c.hasClass("slider_next")?a._updateSlider(c.parents(".timeline_element:first"),"next"):c.hasClass("timeline_loadmore")&&a._loadMore();return!0};this._handleKeyDown=function(b){switch(parseInt(b.which,10)){case 27:a._overlay.hasClass("open")&&a._closeLightBox(b);break;case 37:if(a._lightbox.hasClass("loaded")&&a._lightbox.find(".navigation span.prev").is(":visible"))return a._lightbox.find(".navigation span.prev").click(),!1;break;case 39:if(a._lightbox.hasClass("loaded")&&a._lightbox.find(".navigation span.next").is(":visible"))return a._lightbox.find(".navigation span.next").click(),
!1}};this._loadFacebook=function(b){var c="/"+a._options.facebookPageId+"/feed",d={access_token:a._options.facebookAccessToken},f=0,h=function(){b!==n&&b();if(a._options.onSearchSuccess)a._options.onSearchSuccess(a._original_data)},g=function(b){var c='<div class="facebook_type_'+b.type+'"><div class="facebook_left_column"><img class="facebook_profile" src="https://graph.facebook.com/'+b.from.id+'/picture?type=square" /></div><div class="facebook_right_column">';b.message&&(c+='<div class="facebook_content">'+
b.message.trimString(a._facebook_message_length).parseURL()+"</div>");return c+'</div><div style="clear:both;"></div>'},k=function(b,c){a._original_data.push({type:"blog_post",date:b.updated_time,title:b.from.name,content:c})};FB.init({appId:a._options.facebookAppId,version:"v2.0"});FB.api(c,d,function(b){if(b&&b.data&&b.data.length)e(b.data).each(function(b,c){if(c.from.id)if("photo"===c.type)f++,FB.api("/"+c.object_id,d,function(a){var b=g(c);a.source&&(b+='<div class="facebook_post"><a href="'+
c.link+'" style="display:inline;"><img class="facebook_picture" align="left" src="'+a.source+'" /></a></div>');k(c,b+"</div>");f--;0===f&&h()});else if(c.message){var e=g(c);c.picture&&(e+='<div class="facebook_post"><a href="'+c.link+'" style="display:inline;"><img class="facebook_picture" align="left" src="'+c.picture+'" /></a><div class="description_container">'+(c.name?'<a href="'+c.link+'">'+c.name+"</a>":"")+(c.caption?'<div class="facebook_caption">'+c.caption+"</div>":"")+(c.description?'<div class="facebook_description">'+
c.description.trimString(a._facebook_description_length).parseURL()+"</div>":"")+"</div></div>");k(c,e+"</div>")}}),0===f&&h();else if(a._options.onSearchError)a._options.onSearchError(b)})};this._loadTwitter=function(b){e.getJSON("https://www.melonhtml5.com/api/?action=twittersearch&q="+a._options.twitterSearchKey+"&callback=?",function(c){if(c.statuses.length){if(e(c.statuses).each(function(b,c){a._original_data.push({type:"blog_post",date:c.created_at,title:'<a href="http://www.twitter.com/'+c.user.screen_name+
'" target="_blank" style="text-decoration:none;color:#AAAAAA;">'+c.user.screen_name+"</a>",content:'<div><img class="twitter_profile" align="left" src="'+c.user.profile_image_url+'" /></div>'+c.text.parseURL().parseHashtag()})}),b!==n&&b(),a._options.onSearchSuccess)a._options.onSearchSuccess(c)}else if(a._options.onSearchError)a._options.onSearchError(c)})};this.setOptions=function(b){a._options=e.extend(a._options,b);return a._options};this.display=function(){var b=function(){a._prepareData();a._display()},
c=a._options.twitterSearchKey,d=a._options.facebookAppId&&a._options.facebookAccessToken&&a._options.facebookPageId;if(a._original_data&&a._original_data.length)b();else if(c&&d){var e=0,c=function(){e++;2==e&&b()};a._loadTwitter(c);a._loadFacebook(c)}else c?a._loadTwitter(b):d&&FB&&a._loadFacebook(b)};this.appendData=function(b){var c=parseInt(a._data[a._data.length-1].date.replace(/-/g,""),10),d=[];"desc"===a._options.order?e(b).each(function(a,b){parseInt(b.date.replace(/-/g,""),10)<=c&&d.push(b)}):
e(b).each(function(a,b){parseInt(b.date.replace(/-/g,""),10)>=c&&d.push(b)});a._data=a._data.concat(d);a._render(d,!0);a._options.animation?a._startAnimation(a._processIframeQueue):a._processIframeQueue()}};
/*! waitForImages jQuery Plugin - v2.1.0 - 2016-01-04
 * https://github.com/alexanderdickson/waitForImages
 * Copyright (c) 2020 Alex Dickson; Licensed MIT */
/* !!!!!!!!!!!!!!!!!!!!
 * avenit mod by FSC
 * working in IE10+, FF, Chrome
 * Standard script does work but loads src as well as the srcset so we get duplicate loads (this mod doesnt do so)
 * !!!!!!!!!!!!!!!!!!!!
 */
;(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // CommonJS / nodejs module
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function ($) {
  // Namespace all events.
  var eventNamespace = 'waitForImages';

  // Custom selector to find all `img` elements with a valid `src` attribute.
  $.expr[':']['has-src'] = function (obj) {
    // Ensure we are dealing with an `img` element with a valid
    // `src` attribute.
    return $(obj).is('img[src][src!=""]');
  };

  // Custom selector to find images which are not already cached by the
  // browser.
  $.expr[':'].uncached = function (obj) {
    // Ensure we are dealing with an `img` element with a valid
    // `src` attribute.
    if (!$(obj).is(':has-src')) {
      return false;
    }

    return !obj.complete;
  };

  $.fn.waitForImages = function () {
    var allImgsLength = 0;
    var allImgsLoaded = 0;
    var deferred = $.Deferred();

    var finishedCallback;
    var eachCallback;

    // Handle options object (if passed).
    if ($.isPlainObject(arguments[0])) {
      eachCallback = arguments[0].each;
      finishedCallback = arguments[0].finished;
    } else {
      finishedCallback = arguments[0];
      eachCallback = arguments[1];
    }

    // Handle missing callbacks.
    finishedCallback = finishedCallback || $.noop;
    eachCallback = eachCallback || $.noop;

    // Ensure callbacks are functions.
    if (!$.isFunction(finishedCallback) || !$.isFunction(eachCallback)) {
      throw new TypeError('An invalid callback was supplied.');
    }

    this.each(function () {
      // Build a list of all imgs, dependent on what images will
      // be considered.
      var obj = $(this);
      var allImgs = [];

      // For images only, the task is simpler.
      obj.find('img:has-src')
        .each(function () {
          allImgs.push({
            element: this
          });
        });

      allImgsLength = allImgs.length;
      allImgsLoaded = 0;

      // If no images found, don't bother.
      if (allImgsLength === 0) {
        finishedCallback.call(obj[0]);
        deferred.resolveWith(obj[0]);
      }

      $.each(allImgs, function (i, img) {

        var $image = $(img.element);
        var events =
          'load.' + eventNamespace + ' error.' + eventNamespace;

        // Handle the image loading and error with the same callback.
        $($image).one(events, function me (event) {
          // If an error occurred with loading the image, set the
          // third argument accordingly.
          var eachArguments = [
            allImgsLoaded,
            allImgsLength,
            event.type == 'load'
          ];
          allImgsLoaded++;

          eachCallback.apply(img.element, eachArguments);
          deferred.notifyWith(img.element, eachArguments);

          // Unbind the event listeners. I use this in addition to
          // `one` as one of those events won't be called (either
          // 'load' or 'error' will be called).
          $(this).off(events, me);

          if (allImgsLoaded == allImgsLength) {
            finishedCallback.call(obj[0]);
            deferred.resolveWith(obj[0]);
            return false;
          }
        });

        // loading from cache (images are present in an instant)
        if ((img.element.currentSrc || img.element.complete) || /*for IE 10-*/ $image.height() > 0)
          $image.trigger('load.' + eventNamespace);
      });
    });

    return deferred.promise();

  };
}));
/**
 * menu-aim is a jQuery plugin for dropdown menus that can differentiate
 * between a user trying hover over a dropdown item vs trying to navigate into
 * a submenu's contents.
 *
 * menu-aim assumes that you have are using a menu with submenus that expand
 * to the menu's right. It will fire events when the user's mouse enters a new
 * dropdown item *and* when that item is being intentionally hovered over.
 *
 * __________________________
 * | Monkeys  >|   Gorilla  |
 * | Gorillas >|   Content  |
 * | Chimps   >|   Here     |
 * |___________|____________|
 *
 * In the above example, "Gorillas" is selected and its submenu content is
 * being shown on the right. Imagine that the user's cursor is hovering over
 * "Gorillas." When they move their mouse into the "Gorilla Content" area, they
 * may briefly hover over "Chimps." This shouldn't close the "Gorilla Content"
 * area.
 *
 * This problem is normally solved using timeouts and delays. menu-aim tries to
 * solve this by detecting the direction of the user's mouse movement. This can
 * make for quicker transitions when navigating up and down the menu. The
 * experience is hopefully similar to amazon.com/'s "Shop by Department"
 * dropdown.
 *
 * Use like so:
 *
 *      $("#menu").menuAim({
 *          activate: $.noop,  // fired on row activation
 *          deactivate: $.noop  // fired on row deactivation
 *      });
 *
 *  ...to receive events when a menu's row has been purposefully (de)activated.
 *
 * The following options can be passed to menuAim. All functions execute with
 * the relevant row's HTML element as the execution context ('this'):
 *
 *      .menuAim({
 *          // Function to call when a row is purposefully activated. Use this
 *          // to show a submenu's content for the activated row.
 *          activate: function() {},
 *
 *          // Function to call when a row is deactivated.
 *          deactivate: function() {},
 *
 *          // Function to call when mouse enters a menu row. Entering a row
 *          // does not mean the row has been activated, as the user may be
 *          // mousing over to a submenu.
 *          enter: function() {},
 *
 *          // Function to call when mouse exits a menu row.
 *          exit: function() {},
 *
 *          // Selector for identifying which elements in the menu are rows
 *          // that can trigger the above events. Defaults to "> li".
 *          rowSelector: "> li",
 *
 *          // You may have some menu rows that aren't submenus and therefore
 *          // shouldn't ever need to "activate." If so, filter submenu rows w/
 *          // this selector. Defaults to "*" (all elements).
 *          submenuSelector: "*",
 *
 *          // Direction the submenu opens relative to the main menu. Can be
 *          // left, right, above, or below. Defaults to "right".
 *          submenuDirection: "right"
 *      });
 *
 * https://github.com/kamens/jQuery-menu-aim
 */
(function($) {

  $.fn.menuAim = function(opts) {
    // Initialize menu-aim for all elements in jQuery collection
    this.each(function() {
      init.call(this, opts);
    });

    return this;
  };

  function init(opts) {
    var $menu = $(this),
      activeRow = null,
      mouseLocs = [],
      lastDelayLoc = null,
      timeoutId = null,
      options = $.extend({
        rowSelector: "> li",
        submenuSelector: "*",
        submenuDirection: "right",
        tolerance: 75,  // bigger = more forgivey when entering submenu
        enter: $.noop,
        exit: $.noop,
        activate: $.noop,
        deactivate: $.noop,
        exitMenu: $.noop
      }, opts);

    var MOUSE_LOCS_TRACKED = 3,  // number of past mouse locations to track
      DELAY = 300;  // ms delay when user appears to be entering submenu

    /**
     * Keep track of the last few locations of the mouse.
     */
    var mousemoveDocument = function(e) {
      mouseLocs.push({x: e.pageX, y: e.pageY});

      if (mouseLocs.length > MOUSE_LOCS_TRACKED) {
        mouseLocs.shift();
      }
    };

    /**
     * Cancel possible row activations when leaving the menu entirely
     */
    var mouseleaveMenu = function() {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      // If exitMenu is supplied and returns true, deactivate the
      // currently active row on menu exit.
      if (options.exitMenu(this)) {
        if (activeRow) {
          options.deactivate(activeRow);
        }

        activeRow = null;
      }
    };

    /**
     * Trigger a possible row activation whenever entering a new row.
     */
    var mouseenterRow = function() {
        if (timeoutId) {
          // Cancel any previous activation delays
          clearTimeout(timeoutId);
        }

        options.enter(this);
        possiblyActivate(this);
      },
      mouseleaveRow = function() {
        options.exit(this);
      };

    /*
     * Immediately activate a row if the user clicks on it.
     */
    var clickRow = function() {
      activate(this);
    };

    /**
     * Activate a menu row.
     */
    var activate = function(row) {
      if (row == activeRow) {
        return;
      }

      if (activeRow) {
        options.deactivate(activeRow);
      }

      options.activate(row);
      activeRow = row;
    };

    /**
     * Possibly activate a menu row. If mouse movement indicates that we
     * shouldn't activate yet because user may be trying to enter
     * a submenu's content, then delay and check again later.
     */
    var possiblyActivate = function(row) {
      var delay = activationDelay();

      if (delay) {
        timeoutId = setTimeout(function() {
          possiblyActivate(row);
        }, delay);
      } else {
        activate(row);
      }
    };

    /**
     * Return the amount of time that should be used as a delay before the
     * currently hovered row is activated.
     *
     * Returns 0 if the activation should happen immediately. Otherwise,
     * returns the number of milliseconds that should be delayed before
     * checking again to see if the row should be activated.
     */
    var activationDelay = function() {
      if (!activeRow || !$(activeRow).is(options.submenuSelector)) {
        // If there is no other submenu row already active, then
        // go ahead and activate immediately.
        return 0;
      }

      var offset = $menu.offset(),
        upperLeft = {
          x: offset.left,
          y: offset.top - options.tolerance
        },
        upperRight = {
          x: offset.left + $menu.outerWidth(),
          y: upperLeft.y
        },
        lowerLeft = {
          x: offset.left,
          y: offset.top + $menu.outerHeight() + options.tolerance
        },
        lowerRight = {
          x: offset.left + $menu.outerWidth(),
          y: lowerLeft.y
        },
        loc = mouseLocs[mouseLocs.length - 1],
        prevLoc = mouseLocs[0];

      if (!loc) {
        return 0;
      }

      if (!prevLoc) {
        prevLoc = loc;
      }

      if (prevLoc.x < offset.left || prevLoc.x > lowerRight.x ||
        prevLoc.y < offset.top || prevLoc.y > lowerRight.y) {
        // If the previous mouse location was outside of the entire
        // menu's bounds, immediately activate.
        return 0;
      }

      if (lastDelayLoc &&
        loc.x == lastDelayLoc.x && loc.y == lastDelayLoc.y) {
        // If the mouse hasn't moved since the last time we checked
        // for activation status, immediately activate.
        return 0;
      }

      // Detect if the user is moving towards the currently activated
      // submenu.
      //
      // If the mouse is heading relatively clearly towards
      // the submenu's content, we should wait and give the user more
      // time before activating a new row. If the mouse is heading
      // elsewhere, we can immediately activate a new row.
      //
      // We detect this by calculating the slope formed between the
      // current mouse location and the upper/lower right points of
      // the menu. We do the same for the previous mouse location.
      // If the current mouse location's slopes are
      // increasing/decreasing appropriately compared to the
      // previous's, we know the user is moving toward the submenu.
      //
      // Note that since the y-axis increases as the cursor moves
      // down the screen, we are looking for the slope between the
      // cursor and the upper right corner to decrease over time, not
      // increase (somewhat counterintuitively).
      function slope(a, b) {
        return (b.y - a.y) / (b.x - a.x);
      };

      var decreasingCorner = upperRight,
        increasingCorner = lowerRight;

      // Our expectations for decreasing or increasing slope values
      // depends on which direction the submenu opens relative to the
      // main menu. By default, if the menu opens on the right, we
      // expect the slope between the cursor and the upper right
      // corner to decrease over time, as explained above. If the
      // submenu opens in a different direction, we change our slope
      // expectations.
      if (options.submenuDirection == "left") {
        decreasingCorner = lowerLeft;
        increasingCorner = upperLeft;
      } else if (options.submenuDirection == "below") {
        decreasingCorner = lowerRight;
        increasingCorner = lowerLeft;
      } else if (options.submenuDirection == "above") {
        decreasingCorner = upperLeft;
        increasingCorner = upperRight;
      }

      var decreasingSlope = slope(loc, decreasingCorner),
        increasingSlope = slope(loc, increasingCorner),
        prevDecreasingSlope = slope(prevLoc, decreasingCorner),
        prevIncreasingSlope = slope(prevLoc, increasingCorner);

      if (decreasingSlope < prevDecreasingSlope &&
        increasingSlope > prevIncreasingSlope) {
        // Mouse is moving from previous location towards the
        // currently activated submenu. Delay before activating a
        // new menu row, because user may be moving into submenu.
        lastDelayLoc = loc;
        return DELAY;
      }

      lastDelayLoc = null;
      return 0;
    };

    /**
     * Hook up initial menu events
     */
    $menu
      .mouseleave(mouseleaveMenu)
      .find(options.rowSelector)
      .mouseenter(mouseenterRow)
      .mouseleave(mouseleaveRow)
      .click(clickRow);

    $(document).mousemove(mousemoveDocument);

  };
})(jQuery);
var AvBasics = AvBasics || {};

AvBasics.Cookiebot = {
  allowMarketingCookies:false,
  allowStatisticCookies:false,
  allowPreferenceCookies:false
};

window.addEventListener('CookiebotOnAccept', function (e) {
  if(Cookiebot.consent.marketing)
    AvBasics.Cookiebot.allowMarketingCookies=true;

  if(Cookiebot.consent.statistics)
    AvBasics.Cookiebot.allowStatisticCookies=true;

  if(Cookiebot.consent.preferences)
    AvBasics.Cookiebot.allowPreferenceCookies=true;

  if(typeof dataLayer !== 'undefined') {
    dataLayer.push({'cookiebot.allowMarketingCookies':AvBasics.Cookiebot.allowMarketingCookies});
    dataLayer.push({'cookiebot.allowStatisticCookies':AvBasics.Cookiebot.allowStatisticCookies});
    dataLayer.push({'cookiebot.allowPreferenceCookies':AvBasics.Cookiebot.allowPreferenceCookies});
    dataLayer.push({event:'cookiebotInitialized'});
  }

}, false);


var AvBasics = AvBasics || {};
AvBasics.Util = {};

/**
 * if it initializes itself..its not a util!
 */

//==============================================================================
// GoogleMaps
//==============================================================================

AvBasics.Util.GoogleMaps = (function () {

  // if given address is a valid address 'onSuccessCallback' will be called
  // with parameters 'lat' and 'lng'
  // otherwise 'onErrorCallback' will be called
  // 'onErrorCallback' is optional
  var getLatLng = function (address, onSuccessCallback, onErrorCallback) {
    // make 'onErrorCallback' optional
    onErrorCallback = (onErrorCallback === undefined) ? function () {
    } : onErrorCallback;

    var geocoder = new google.maps.Geocoder();
    var checkCoord = function (value) {
      if (value === undefined) {
        return false;
      }
      if (value === null) {
        return false;
      }
      return !isNaN(parseFloat(value));

    };

    // if address is valid call onSuccessCallback
    geocoder.geocode({
      address: address
    }, function (results, status) {

      if (status == google.maps.GeocoderStatus.OK) {
        var lat = results[0].geometry.location.lat();
        var lng = results[0].geometry.location.lng();

        if (checkCoord(lat) && checkCoord(lng) && (parseFloat(lat) || parseFloat(lng))) {
          onSuccessCallback(lat, lng);
        }
        else {
          AvBasics.Util.Log.log('AvBasics.Util.GoogleMaps.getLatLng: OnGeocodeInvalidResult');
          AvBasics.Util.Log.log(results);
          AvBasics.Util.Log.log(status);
          onErrorCallback();
        }
      }
      else {
        AvBasics.Util.Log.log('AvBasics.Util.GoogleMaps.getLatLng: OnGeocodeError');
        AvBasics.Util.Log.log(results);
        AvBasics.Util.Log.log(status);
        onErrorCallback();
      }
    });
  };

  // open map in fancybox centered to given address with marker (image given by
  // markerPath - if no path is given, default marker will be used)
  var openMapInFancybox = function (address, markerContent, markerTitle, markerPath) {
    if (address == undefined) {
      return false;
    }

    // use default marker if no path is given
    markerPath = (markerPath === undefined) ? '/typo3conf/ext/av_neugart/Resources/Public/Icons/Maps/map-marker.png' : markerPath;

    getLatLng(address, function (lat, lng) {
      // init fancybox
      var fancyboxContainerId = 'tx_avneugart_map';
      var latlng = new google.maps.LatLng(lat, lng);
      jQuery.fancybox('<div id="' + fancyboxContainerId + '" style="width:600px; max-width:100%; height:600px;"></div>', {
        autoDimensions: false,
        width: 600,
        height: 600,
        transitionIn: 'none',
        transitionOut: 'none',
        type: 'html',
        helpers: {
          overlay: {
            locked: false
          }
        }
      });

      // create map (note: need to be done dynamicaly since otherwise fancybox will not work properly)
      var map = new google.maps.Map(document.getElementById(fancyboxContainerId), {
        center: new google.maps.LatLng(lat, lng),
        zoom: 12,
        mapTypeId: 'roadmap',
        mapTypeControlOptions: {
          style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
          position: google.maps.ControlPosition.TOP_LEFT
        },
        navigationControlOptions: {
          style: google.maps.NavigationControlStyle.ZOOM_PAN,
          position: google.maps.ControlPosition.RIGHT_CENTER
        }
      });
      var infoWindow = new google.maps.InfoWindow();

      // create marker
      var html = "<h3>" + markerTitle + "</h3>";
      html += markerContent;

      var img = new google.maps.MarkerImage(markerPath, new google.maps.Size(77, 99), new google.maps.Point(0, 0), new google.maps.Point(37, 89));
      var marker = new google.maps.Marker({
        map: map,
        icon: img,
        position: latlng
      });
      infoWindow.setContent(html);
      infoWindow.open(map, marker);

      // move to marker
      map.setCenter(latlng);
      map.setZoom(12);

      return false;
    });
  };

  //Public API
  return {
    getLatLng: getLatLng,
    openMapInFancybox: openMapInFancybox
  };

})();

//==============================================================================
// Environment
//==============================================================================

AvBasics.Util.Environment = (function () {

  var isDev = function () {

    if (window.location.href.indexOf("typo3vm") != -1) {
      return true;
    }

    return false;
  };

  return {
    isDev: isDev
  };
})();

//==============================================================================
// Log
//==============================================================================

AvBasics.Util.Log = (function () {

  var enabled = false;

  var enable = function () {
    enabled = true;
  };

  var disable = function () {
    enabled = false;
  };

  var log = function (message) {
    if (typeof(console) != 'undefined') {
      if (enabled || AvBasics.Util.Environment.isDev()) {
        console.log(message);
      }
    }
  };

  return {
    enable: enable,
    disable: disable,
    log: log
  }
})();

//==============================================================================
// jQuery
//==============================================================================

AvBasics.Util.jQuery = (function () {

  var hasAttribute = function ($element, $name) {
    var attr = $element.attr($name);
    return (typeof attr !== typeof undefined && attr !== false);
  };
  var onClickIframe = function ($element, $url, width, height, attributes, onClick) {
    $element.on('click', function () {
      jQuery(this).replaceWith('<iframe src="' + $url + '" width="' + (width ? width : jQuery(this).width()) + '" height="' + (height ? height : jQuery(this).height()) + '" ' + attributes + ' ></iframe>');
      if (onClick != undefined) {
        onClick();
      }
    });
  };

  return {
    hasAttribute: hasAttribute,
    onClickIframe: onClickIframe
  };
})();

//==============================================================================
// Form
//==============================================================================

AvBasics.Util.Form = (function () {

  var resetElement = function ($element, inlcudeChildren) {

    // text,hidden,password,file
    $element.filter(':text, textarea, :password, :file').val('');

    // checkbox/radio
    $element.filter(':radio, :checkbox').removeAttr('checked').removeAttr('selected');

    // select
    $element.filter('select').val(null).trigger('change');
    $element.filter('select').find('option').removeAttr('checked').removeAttr('selected');

    if (inlcudeChildren) {
      resetElement($element.find(':input'), false);
    }
  };

  return {
    resetElement: resetElement
  };
})();

//==============================================================================
// Cookie
//==============================================================================

AvBasics.Util.Cookie = (function () {

  var getCookieValue = function (key) {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].split("=");
      if (cookie[0].match(key)) {
        return cookie[1];
      }
    }
    return null;
  };

  var setCookieValue = function (key, value, expires) {
    if(!AvBasics.Cookiebot.allowPreferenceCookies)
      return;

    if (typeof(expires) != 'undefined') {
      var ablauf = new Date();
      var inTagen = ablauf.getTime() + (expires * 24 * 60 * 60 * 1000);
      ablauf.setTime(inTagen);
      document.cookie = key + "=" + value + "; expires=" + ablauf.toGMTString() + "; path=/";
    }
    else
      document.cookie = key + "=" + value + "; path=/";
  };

  return {
    get: getCookieValue,
    set: setCookieValue
  }
})();

//==============================================================================
// Cookie
//==============================================================================

AvBasics.Util.Validation = (function () {

  var validateEmail = function validateEmail(value) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
  };

  var validateLength = function (value, min, max) {
    return value.length >= min && value.length <= max;
  };

  var validateNumeric = function (value) {
    var realStringObj = value && value.toString();
    return !jQuery.isArray(value) && ( realStringObj - parseFloat(realStringObj) + 1 ) >= 0;
  };

  var validatePhone = function(value) {
    var re = /^[+0-9-\s()]*$/;
    return re.test(value);
  }

  return {
    validateEmail: validateEmail,
    validateLength: validateLength,
    validateNumeric: validateNumeric,
    validatePhone:validatePhone
  }
})();

//==============================================================================
// Browser
//==============================================================================

AvBasics.Util.Browser=(function () {

  var getLanguage = function(){
    return navigator.language
  };

  var getLanguages = function(){
    if(typeof(navigator.languages)=='undefined')
      return [getLanguage()];
    return navigator.languages;
  };

  return {
    getLanguage:getLanguage,
    getLanguages:getLanguages
  };

})();

var AvBasics = AvBasics || {};

AvBasics.LazyImages=(function() {
  var init=function() {
    var $elements=jQuery('[data-lazyimage]');

    jQuery.each($elements, function() {
      var $element=jQuery(this);
      var eventName=$element.data('lazyevent');
      if(eventName)
      {
        jQuery(document).on(eventName, function() {
          if(AvBasics.Util.jQuery.hasAttribute($element, 'src') && AvBasics.Util.jQuery.hasAttribute($element, 'data-src'))
          {
            $element.attr('src', $element.attr('data-src'));
            $element.removeAttr('data-src');
          }

          if(AvBasics.Util.jQuery.hasAttribute($element, 'srcset') && AvBasics.Util.jQuery.hasAttribute($element, 'data-srcset'))
          {
            $element.attr('srcset', $element.attr('data-srcset'));
            $element.removeAttr('data-srcset');
          }

          $element.removeAttr('data-lazyimage');
          $element.removeAttr('data-lazyimage');
        });
      }
    });
    jQuery(document).trigger('lazy.document.ready');
  };
  init();
})();

var AvBasics = AvBasics || {};

AvBasics.ArticleLoader = (function () {

  var init = function () {
    var $articleloader = jQuery('[data-articleloader]');

    if ($articleloader.length == 0) {
      return;
    }

    $articleloader.each(function () {
      var $loader = jQuery(this);
      var infiniteScroll = {
        enabled: $loader.data('infiniteScroll') > 0,
        stack: $loader.data('infiniteScroll')
      };
      var $trigger = $loader.find('[data-articleloader-trigger]');
      var $content = $loader.find('[data-articleloader-content]');
      var $indicator = $loader.find('[data-articleloader-indicator]');

      var isScrolledIntoView = function ($elem) {
        var docViewTop = jQuery(window).scrollTop();
        var docViewBottom = docViewTop + jQuery(window).height();

        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + jQuery($elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
      };

      var loadArticles = function () {
        $trigger.prop('disabled', true);
        $indicator.show();

        var $pageurls = $trigger.find('[data-articleloader-pageurl]');
        var $currentPageUrl = $pageurls.first();

        jQuery.get($currentPageUrl.attr('data-articleloader-pageurl'), {}, function (data) {
          var $page = jQuery(data);

          var newContent = jQuery.event.trigger({
            type: 'articleloader.ContentRetrived',
            loader: $loader,
            trigger: $trigger,
            indicator: $indicator,
            newContent: $page.find('[data-articleloader-content]'),
            oldContent: $content
          });

          $content.append(newContent.html());

          $trigger.prop('disabled', false);
          $indicator.hide();

          $currentPageUrl.remove();

          if ($pageurls.length == 1) {
            $trigger.hide();
          }

          jQuery.event.trigger({
            type: 'articleloader.ContentSet',
            loader: $loader,
            trigger: $trigger,
            indicator: $indicator,
            content: $content
          });
        });
      };

      // load on click
      $trigger.find('button').click(function (e) {
        e.preventDefault();

        loadArticles();
      });

      // infinite scroll
      if (infiniteScroll.enabled) {

        var doInfiniteScroll = function() {
          if ($trigger.is(':visible') && !$trigger.prop('disabled') && infiniteScroll.stack > 0 && isScrolledIntoView($trigger)) {
            loadArticles();
            infiniteScroll.stack--;
          }
          if(infiniteScroll.stack <= 0) {
            jQuery(window).unbind('scroll', doInfiniteScroll);
          }
        };

        jQuery(window).bind('scroll', doInfiniteScroll);
      }
    });
  };

  init();

  return {
    init:init
  }

})();
var AvBasics = AvBasics || {};

AvBasics.Accordion=(function() {

  var initDeepLinks=function() {

    var isTecDataFinderPage = jQuery('.tdf[data-configurator]').length > 0;

    // ignore on tdf page
    if(isTecDataFinderPage)
    {
      return;
    }

    // no deeplink? 
    if(!jQuery(location.hash).length)
    {
      return;
    }

    // handle accordion
    var $accBody=jQuery(location.hash + '[data-accordion]');

    // no element for given deeplinks?
    if(!$accBody.length)
    {
      return;
    }
    
    $accBody.addClass('in');
    var parentHash='#' + $accBody.parent().attr('id');

    var offset=-20;
    var animationTime=1000;

    jQuery('html, body').animate({
      scrollTop:jQuery(parentHash).offset().top + offset
    }, animationTime);
  };

  initDeepLinks();

})();
var AvBasics = AvBasics || {};
AvBasics.Media = {};


//==============================================================================
// MP4
//==============================================================================

AvBasics.Media.Mp4 = (function () {
  var init = function () {
    jQuery('[data-mp4-thumbnail-play]').on('click', function () {
      jQuery(this).hide();
      var $container = jQuery(this).parent();
      $container.find('img').hide();
      $container.find('video').show();
      $container.find('video').get(0).play();
    });
  };
  init();
})();

//==============================================================================
// Youtube
//==============================================================================

AvBasics.Media.Youtube = (function () {
  var init = function () {
    jQuery('[data-youtube-thumbnail-play]').on('click', function () {
      jQuery(this).hide();
      var $container = jQuery(this).parent();
      $container.find('img').hide();
      $container.find('.responsive_youtube').show();
      $container.find('iframe').show();
      $container.find('iframe')[0].src += "&autoplay=1";
    });
  };
  init();
})();

//==============================================================================
// Vimeo
//==============================================================================

AvBasics.Media.Vimeo = (function () {
  var init = function () {
    jQuery('[data-vimeo-thumbnail-play]').on('click', function () {
      jQuery(this).hide();
      var $container = jQuery(this).parent();
      $container.find('img').hide();
      $container.find('iframe').show();
      $container.find('iframe')[0].src += "&autoplay=1";
    });
  };
  init();
})();


//==============================================================================
// Webgl
//==============================================================================

AvBasics.Media.Webgl = (function () {


  var initInlinePlay = function () {
    // play inline
    jQuery('[data-webgl-thumbnail-play]').on('click', function () {
      jQuery(this).hide();
      var $container = jQuery(this).parent();
      $container.find('img').hide();
      $container.find('iframe').show();
      $container.find('iframe').attr('src', $container.find('iframe').data('src')).show();
    });
  };

  var initFancyboxPlay = function () {

    var $elements = jQuery('[data-onclick-iframe-url]');
    if ($elements.length == 0) {
      return;
    }

    $elements.each(function () {
      var $element = jQuery(this);
      var iframeUrl = $element.data('onclick-iframe-url');

      if ($element.parents('a.fancybox').length == 0) {
        var $thumbnail = $element.parent().find('img');

        AvBasics.Util.jQuery.onClickIframe(
          $element,
          iframeUrl,
          $thumbnail.width(),
          $thumbnail.height(),
          'style="max-width:100%;" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"',
          function(){
            $thumbnail.css('visibility', 'hidden');
          }
        );
      }
    });
  };
  var prepareFancybox = function () {
    var $elements = jQuery('[data-onclick-iframe-url]');
    if ($elements.length == 0) {
      return;
    }
    $elements.each(function () {
      var $element = jQuery(this);
      var iframeUrl = $element.data('onclick-iframe-url');

      $fancyboxLink = $element.parents('a.fancybox');
      if ($fancyboxLink.length == 0) {
        return;
      }
      $fancyboxLink.attr('data-fancybox-type', 'iframe');
      $fancyboxLink.attr('href', iframeUrl);

    });
  }
  initFancyboxPlay();
  initInlinePlay();

  return {
    prepareFancybox: prepareFancybox
  }
})();
/**
 * event is defined in fancybox.ts and allows to do stuff on
 * document ready but BEFORE fancybox is initialized
 */
jQuery(document).on('av.fancybox.beforeInit', function () {
  AvBasics.Media.Webgl.prepareFancybox();
});

(function() {
  jQuery('.ajaxloader').each(function() {
    var $container=jQuery(this),
      url=$container.attr('data-url');

    if(url) {
      $container.addClass('ajax-loading');

      jQuery.ajax({
        url: url,
        cache: false,
        dataType: "html",
        success: function(data) {
      
          $container.removeClass('ajax-loading');
          $container.html(data);

          if($container.data('ajax-success-callback')) {
              window[$container.data('ajax-success-callback')]();
          }
        }
      });
    }
  });
})();
var AvBasics = AvBasics || {};

AvBasics.Tabs = function(){
  jQuery('[data-tabs]').each(function(){
    jQuery(this).find('li:first-child a').click();
  });
}();
jQuery.fn.videoProcessing=function() {
  return this.each(function() {
    var $link=jQuery(this);
    var $figure=jQuery(this).closest('figure.video');

    var initVideo=function() {
      if($link.is('[data-video-tag]'))
        $link.replaceWith($link.attr('data-video-tag'));
      else
        $link.replaceWith('<div class="embed-responsive embed-responsive-16by9"><iframe allowfullscreen src="' + $link.attr('href') + '"></iframe></div>');
      $figure.addClass('video-initialized');
    };

    // add play-button
    var $playBtn=$link.find('.playbutton');
    if($playBtn.length) {
      $playBtn.replaceWith('<span class="play-icon">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 83 85.89"><path style="fill:#194f5a;fill-rule:evenodd;" d="M42.52,83.83a41.47,41.47,0,0,1-41.42-40c0,.5,0,1,0,1.5a41.46,41.46,0,1,0,82.91,0c0-.5,0-1,0-1.5A41.47,41.47,0,0,1,42.52,83.83Z" transform="translate(-1.02 -0.94)"></path><path style="fill:#177284;fill-rule:evenodd;" d="M42.52.94A41.5,41.5,0,1,1,1,42.44,41.5,41.5,0,0,1,42.52.94Z" transform="translate(-1.02 -0.94)"></path><path style="fill:#fff" d="M56,42.82,35,58.94v-32Z" transform="translate(-1.02 -0.94)"></path></svg>\n' +
        '</span>');
    }

    // bind inline handler if no fancybox activated
    if($link.data('fancybox') === undefined) {
      // init video if there is no thumbnail
      if(!$link.find('img').length)
        initVideo();

      // start video
      $link.click(function(event) {
        event.preventDefault();
        initVideo();
        if($link.is('[data-video-tag]')) {
          var video=$figure.find('video').get(0);
          video.oncanplay=function() {
            video.play();
          }
        }
      });
    } else {
      $link.fancybox();
    }

    jQuery(document).ready(function() {
      // mp4 videos won't work without dedicated call
      jQuery('.videolink--zoom').click(function(event) {
        event.preventDefault();
        jQuery.fancybox.open(jQuery(this),{
          openEffect: 'fade',
          closeEffect: 'fade',
          type: 'iframe',
          helpers: {
            media: {}
          }
        });
      });
    });

  });
};
var AvDesign = AvDesign || {};
AvDesign.IECheck = {};

//==============================================================================
// Check for Internet Explorer
//==============================================================================
AvDesign.IECheck = (function () {

  var checkForIE = function(){
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
      // IE 10 or older => return version number
      return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
      // IE 11 => return version number
      var rv = ua.indexOf('rv:');
      return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
      // Edge (IE 12+) => return version number
      return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
  };

  var setProductTransition = function() {
    jQuery('.product').addClass('product--transition');
  };

  var init = function() {
    var IE = checkForIE();

    if(!IE) {
      setProductTransition();
    } else {
      // blur first input, because IE focuses it automatically
      document.querySelector('input').blur();
      setTimeout(function() {
        document.querySelector('input').blur();
      }, 1000);
    }
  };

  init();

})();
var AvDesign=AvDesign || {};
AvDesign.SafariCheck={};

//==============================================================================
// Check for Safari
//==============================================================================
AvDesign.SafariCheck=(function() {

  var checkForSafari=function() {
    return (/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  };

  var init=function() {
    if (checkForSafari()) {
      document.getElementsByTagName('html')[0].classList.add('safari');
    }
  };

  init();

})();
var AvDesign = AvDesign || {};
AvDesign.Polyfills = {};

//==============================================================================
// Single slider
//==============================================================================

AvDesign.Polyfills.Objectfit = (function () {

  var init = function () {
    jQuery('body').waitForImages(function(){
      objectFitImages();
    });
  };

  init();

})();
var AvDesign = AvDesign || {};
AvDesign.Download = {};

//==============================================================================
// Productpreview
//==============================================================================
AvDesign.Download.Setup = (function () {


  var owl = undefined;

  var init = function () {

    var $toggle = jQuery('[data-toggle="download__accordionbody"]');

    $toggle.click(function () {
      jQuery(this).parents('.download__accordion').first().toggleClass('download__accordion--open');
    });

    enquire.register("screen and (max-width: 768px)", function () {
      jQuery('.download__overview--carousel').each(function (i, download) {
        initOwl(download);
      })
    }).register("screen and (min-width: 768px)", function () {
      jQuery('.download__overview--carousel').each(function (i, download) {
        destroyOwl(download);
      })
    });

  };

  var initOwl = function (owl) {

    var dots = true;
    var $carousel = jQuery(owl);

    if ($carousel.find('.download').length <= 1) {
      dots = false;
    }

    $carousel.owlCarousel({
      margin: 0,
      dots: dots,
      items: 1,
      center: true
    })
  };

  var destroyOwl = function (owl) {
    var $carousel = jQuery(owl);

    if ($carousel) {
      $carousel
        .trigger('destroy.owl.carousel')
        .removeClass('owl-carousel owl-loaded')
        .find('.owl-stage-outer').children().unwrap();
    }
  };

  init();

})();
var AvDesign = AvDesign || {};
AvDesign.Header = {};

//==============================================================================
// Setup
//==============================================================================

AvDesign.Header.Header = (function () {

  var init = function () {

    /*************/
    /* VARIABLES */
    /*************/
    var $header = jQuery('header.header');
    var $navigation = jQuery('.header .header__menuwrapper');
    var $logo = jQuery('.header .header__logo');
    var $controls = jQuery('.header .header__controls');

    /******************************/
    /* SETUP HEADER LOGO POSITION */
    /******************************/

    var adjustControlPositions = function () {
      var logoCoord = ($header.outerWidth() - $navigation.outerWidth()) / 4;
      var searchControlCoord = ($header.outerWidth() - $navigation.outerWidth()) / 2;

      /*if (searchControlCoord > 40) {
       $controls.css({
       'width': searchControlCoord
       })
       } else {
       $controls.css({
       'width': 40
       })
       }

       if (logoCoord > 0) {
       $logo.css({
       'left': logoCoord
       });
       } else {
       $logo.css({
       'left': 0
       });
       }*/
    };

    jQuery(window).on('resize', function () {
      adjustControlPositions()
    });
  };

  init();

})();

//==============================================================================
// Sticky
//==============================================================================

AvDesign.Header.Sticky = (function () {

  var init = function () {

    /*************/
    /* VARIABLES */
    /*************/
    var $header = jQuery('header.header');
    var $flyouts = jQuery('.header__flyout');
    var $alertPlaceholder = jQuery('#alert_placeholder');

    /********************************/
    /* SETUP STICKY HEADER & FLYOUT */
    /********************************/

    if (jQuery(document).scrollTop() > 11) {
      $header.addClass('header--sticky');
      $flyouts.addClass('header__flyout--sticky');
      $alertPlaceholder.addClass('scrolled');
      if (!jQuery('html').hasClass('home')) {
        jQuery('main').css({
          'margin-top': '45px'
        });
      } else {
        jQuery('.slideshow--home').css({
          'margin-top': '45px'
        });
      }
      jQuery(window).trigger('header:sticky');
    }

    jQuery(window).scroll(function () {
      if (jQuery(document).scrollTop() > 11) {
        $header.addClass('header--sticky');
        $flyouts.addClass('header__flyout--sticky');
        $alertPlaceholder.addClass('scrolled');
        if (!jQuery('html').hasClass('home')) {
          jQuery('main').css({
            'margin-top': '45px'
          });
        } else {
          jQuery('.slideshow--home').css({
            'margin-top': '45px'
          });
        }

        jQuery(window).trigger('header:sticky');
      } else {
        $header.removeClass('header--sticky');
        $flyouts.removeClass('header__flyout--sticky');
        $alertPlaceholder.removeClass('scrolled');
        if (!jQuery('html').hasClass('home')) {
          jQuery('main').css({
            'margin-top': '0'
          });
        } else {
          jQuery('.slideshow--home').css({
            'margin-top': '0'
          });
        }
      }

      jQuery(window).trigger('header:docked');
    });

  };

  init();

})();

//==============================================================================
// Search
//==============================================================================

AvDesign.Header.Search = (function () {
  var $header = jQuery('header.header');
  var $headerNavigation = $header.find('.header__menuwrapper');
  var $headerSearch = jQuery('.header__search');
  var $headerSearchControls = jQuery('.header__controls');

  var adjustSearchSize = function () {

    var $headerSearchCompletion = $headerSearch.find('ul');

    enquire.register("screen and (max-width: 991px)", function () {
      $headerSearch.attr('data-width', '100%');
      $headerSearch.css({
        'width': '100%',
        'right': ''
      });
      $headerSearchCompletion.css({
        'width': ''
      });
    }).register("screen and (min-width: 992px)", function () {
      $headerSearch.css({
        'width': '',
        'transition': 'none'
      });

      setTimeout(function () {
        $headerSearch.css({
          'transition': ''
        });
      }, 200);

      var width = $header.outerWidth() - $headerSearchControls.outerWidth() - ($headerNavigation.offset().left + parseInt($headerNavigation.css('padding-left')));
      if ($header.hasClass('header--search-open')) {
        $headerSearch.css({
          'width': width,
          'right': $headerSearchControls.outerWidth() + 1,
          'transition': 'none'
        });

        $headerSearch.attr('data-width', width + 'px');

        setTimeout(function () {
          $headerSearch.css({
            'transition': ''
          });
        }, 200);

        $headerSearchCompletion.css({
          'width': width + 'px',
          'max-width': width + 'px'
        });
      } else {
        $headerSearch.css({
          'right': $headerSearchControls.outerWidth() + 1
        });

        $headerSearch.attr('data-width', width + 'px');

        $headerSearchCompletion.css({
          'width': width + 'px',
          'max-width': width + 'px'
        });
      }
    });






    /*if (jQuery(window).width() > 993) {

      $headerSearch.css({
        'width': '',
        'transition': 'none'
      });

      setTimeout(function () {
        $headerSearch.css({
          'transition': ''
        });
      }, 200);

      var width = $header.outerWidth() - $headerSearchControls.outerWidth() - ($headerNavigation.offset().left + parseInt($headerNavigation.css('padding-left')));
      if ($header.hasClass('header--search-open')) {
        $headerSearch.css({
          'width': width,
          'right': $headerSearchControls.outerWidth() + 1,
          'transition': 'none'
        });

        $headerSearch.attr('data-width', width + 'px');

        setTimeout(function () {
          $headerSearch.css({
            'transition': ''
          });
        }, 200)
      } else {
        $headerSearch.css({
          'right': $headerSearchControls.outerWidth() + 1
        });

        $headerSearch.attr('data-width', width + 'px');

        $headerSearchCompletion.css({
          'width': width
        });
      }
    } else {
      $headerSearch.attr('data-width', '100%');

      $headerSearch.css({
        'width': '100%',
        'right': ''
      });

      $headerSearchCompletion.css({
        'width': ''
      });
    }*/
  };

  var init = function () {

    /*************/
    /* VARIABLES */
    /*************/
    var $headerSearchToggle = jQuery('[data-toggle="header-search"]');
    var focusTimerId; // need this to clear the focus timeout when fastclicking the search bar

    adjustSearchSize();
    jQuery(window).on('header:sticky header:docked resize', function () {
      adjustSearchSize();
    });

    /*****************/
    /* TOGGLE SEARCH */
    /*****************/
    $headerSearchToggle.click(function () {
      $header.toggleClass('header--search-open');

      // close mobile menu
      jQuery('.mobile__menu').removeClass('mobile__menu--visible');
      jQuery('[data-toggle*="mobile__menu"]').removeClass('is-active');

      if ($header.hasClass('header--search-open')) {
        $headerSearch.css({
          'width': $headerSearch.attr('data-width')
        });

        $headerSearchToggle.addClass('search__toggle--open');
        focusTimerId = setTimeout(function () {
          jQuery('.header__search__input').focus()
        }, 500);
      } else {
        $headerSearch.css({
          'width': '0px'
        });

        $headerSearchToggle.removeClass('search__toggle--open');
        clearTimeout(focusTimerId);
      }
    });
  };

  init();

})();
var AvDesign = AvDesign || {};
AvDesign.Fair = {};

AvDesign.Fair.Accordiontoggle = (function () {

  var init = function () {

    /*************/
    /* VARIABLES */
    /*************/
    var $fairs = jQuery('.fair');

    $fairs.each(function () {
      var $accordionToggle = jQuery(this).find('[data-toggle="fair__accordion"]');
      var $fair = jQuery(this);

      if(!$fair.hasClass("fair--open")) {
        $fair.addClass("fair--closed");
      }

      $accordionToggle.click(function () {
        if($fair.hasClass("fair--open")) {
          $fair.removeClass("fair--open");
          $fair.addClass("fair--closed");
        } else {
          $fair.removeClass("fair--closed");
          $fair.addClass("fair--open");
        }
      })
    });

  };

  init();

})();

AvDesign.Fair.Resize = (function () {

  var init = function () {

    /*************/
    /* VARIABLES */
    /*************/
    var $fairlist = jQuery('.fairlist');

    var resizeAccordion = function () {
      $fairlist.each(function () {
        var $accordionHeader = jQuery(this).find('.fair__accordionheader');
        var $accordionBody = jQuery(this).find('.fair__accordionbody');
        var $image = jQuery(this).find('.fair__image');
        var $body = jQuery(this).find('.fair-body');
        var height = 0;

        $accordionHeader.css({"min-height": "0"});

        if($accordionHeader.height() > 60){
          jQuery($accordionBody[0]).css({"padding-top": $accordionHeader.height() - 35 + "px"});
        }

        if (jQuery(window).width() < 768) {
          if ($accordionHeader.height() >= $image.height()) {
            height = $accordionHeader.height();
          } else {
            height = $image.height();
            $accordionHeader.css({"min-height": $image.height()});
          }
        }

        $body.css({"min-height": height});
      })
    };

    jQuery(window).on("resize", function () {
      resizeAccordion();
    });

    resizeAccordion();

  };

  init();

})();
var AvDesign = AvDesign || {};
AvDesign.Flyout = {};

//==============================================================================
// Setup
//==============================================================================

AvDesign.Flyout.Setup = (function () {

  var init = function () {

    /*************/
    /* VARIABLES */
    /*************/
    var $header = jQuery('.header');
    var $headerMenu = jQuery('.header__content');
    var $headerDotline = jQuery('.header__dotline');
    var $flyouts = jQuery('.header__flyout');
    var $flyoutToggle = jQuery('[data-toggle*="header__flyout"]');
    var $meta = jQuery('.header__meta');
    var $mobileMenuToggle = jQuery('[data-toggle*="mobile__menu"]');
    var $navigationEntries = jQuery('.navigationlist > li');
    var $navigationEntriesMobile = jQuery('.mobile__menu .navigationlist > li');
    var $langaugeSelector = $headerMenu.find('.languageselector');
    var $targetFlyout;

    /**********************************/
    /* !!! FOR TEST PURPOSES ONLY !!! */
    /**********************************/
    $flyoutToggle.find('a[title="Branches"]').parent().attr("data-toggle", "header__flyout--tiles");
    $flyoutToggle.find('a[title="Products"]').parent().attr("data-toggle", "header__flyout--product");

    $langaugeSelector.click(function () {
      $flyoutToggle.removeClass('active');
      $flyouts.removeClass('header__flyout--visible');
    });

    $meta.hover(function () {
      $flyoutToggle.removeClass('active');
      $flyouts.removeClass('header__flyout--visible');
    });

    /*********/
    /* SETUP */
    /*********/
    $navigationEntries.each(function () {
      /* add node class to all entries that inhabit additional navigation lists */
      if (jQuery(this).find('ul').length != 0 || jQuery(this).find('.navigationlist').length != 0) {
        jQuery(this).addClass('navigationlist__entry--node');
      }
    });

    // append switches for the mobile menu
    $navigationEntriesMobile.each(function () {
      if (jQuery(this).hasClass('navigationlist__entry--node')) {
        jQuery(this).find('a').first().append('<span class="nodetoggle icon__arrowdown"></span>')
      }
    });

    /*****************/
    /* TOGGLE FLYOUT */
    /*****************/
    $flyoutToggle.mouseenter(function () {

      // dont open menu if language selector is open
      if($langaugeSelector.find('[aria-expanded="true"]').length) {
        return;
      }

      // clear the timeout for the menu to disappear
      clearTimeout($headerMenu.data('headerFlyoutTimer'));

      // set menulink active
      $flyoutToggle.find('a').removeClass('active');
      jQuery(this).find('a').first().addClass('active');

      // find and reset the desired flyout
      $targetFlyout = jQuery('.' + jQuery(this).attr('data-toggle'));
      $flyouts.removeClass('header__flyout--visible');

      // toggle flyout visibility
      if (jQuery(this).attr('data-toggle') == "header__flyout--sm") {
        $targetFlyout = jQuery(this).siblings('.header__flyout--sm');
        $targetFlyout.addClass('header__flyout--visible');
        $targetFlyout.find('.navigationlist').removeClass('navigationlist--visible');
        $targetFlyout.find('.navigationlist__entry--selected').removeClass('navigationlist__entry--selected');

      } else {

        jQuery(document).trigger('lazy.header.flyout.show');

        $targetFlyout.find('.navigationlist__entry--selected').removeClass('navigationlist__entry--selected');
        $targetFlyout.find('.flyout__column--visible').removeClass('flyout__column--visible');
        $targetFlyout.addClass('header__flyout--visible');

        // remove shadow from sticky header
        $header.css('box-shadow', 'none');

        // remove the dotted border from the header
        $headerDotline.css('display', 'none');
      }


    });

    $flyouts.hover(function () {
      // clear the timeout for the menu to disappear
      clearTimeout($headerMenu.data('headerFlyoutTimer'));
    }, function () {
      // set the timeout for the flyout to disappear
      var headerFlyoutTimer = setTimeout(function () {
        $flyouts.removeClass('header__flyout--visible');
        $headerDotline.css('display', 'block');
        $header.removeAttr('style');
        $flyoutToggle.find('a').removeClass('active');
      }, 500);

      $headerMenu.data('headerFlyoutTimer', headerFlyoutTimer);
    });

    $headerMenu.mouseleave(function () {
      // set the timeout for the flyout to disappear
      var headerFlyoutTimer = setTimeout(function () {
        $flyouts.removeClass('header__flyout--visible');
        $headerDotline.css('display', 'block');
        $header.removeAttr('style');
        $flyoutToggle.find('a').removeClass('active');
      }, 500);

      $headerMenu.data('headerFlyoutTimer', headerFlyoutTimer);
    });

    $mobileMenuToggle.click(function () {
      // close search
      $header.removeClass('header--search-open');
      jQuery('[data-toggle="header-search"]').removeClass('search__toggle--open');

      jQuery('.mobile__menu').toggleClass('mobile__menu--visible');
      $mobileMenuToggle.toggleClass('is-active');
    });

  };


  init();

})();

//==============================================================================
// Navigation
//==============================================================================

AvDesign.Flyout.Navigation = (function () {

  var init = function () {

    /*************/
    /* VARIABLES */
    /*************/
    var $productflyout = jQuery('.header__flyout--product .navigationlist');
    var $smallflyout = jQuery('.header__flyout--sm .navigationlist');
    var $mobileMenuEntry = jQuery('.mobile__menu .navigationlist__entry--node .nodetoggle');

    /*********************/
    /* FLYOUT NAVIGATION */
    /*********************/

    /* large product flyout */
    $productflyout.menuAim({
      activate: function (row) {
        var $entry = jQuery(row);
        var $target = jQuery('[data-target="' + $entry.attr('data-toggle') + '"]');

        // show column
        $target.closest('.flyout__column').addClass('flyout__column--visible');

        // toggle navigation sublevel visibility
        $target.siblings().removeClass('navigationlist--visible');
        $target.addClass('navigationlist--visible');

        // toggle selected style on list entries
        $target.find('.navigationlist__entry--selected').removeClass('navigationlist__entry--selected');
        $entry.siblings().removeClass('navigationlist__entry--selected');
        $entry.addClass('navigationlist__entry--selected');

        // remove product preview if first level entry is hovered
        if ($entry.closest('.flyout__column').hasClass('flyout__column--level1')) {
          jQuery('.flyout__column--preview').removeClass('flyout__column--visible');

          if($target.find('li').length <= 1) {
            $target.find('li').addClass('navigationlist__entry--selected');

            var $newTarget = jQuery('[data-target="' + $target.find('li').attr('data-toggle') + '"]');
            $newTarget.closest('.flyout__column').addClass('flyout__column--visible');
            $newTarget.siblings().removeClass('navigationlist--visible');
            $newTarget.addClass('navigationlist--visible');
          }
        }
      },
      deactivate: function (row) {},
      exitMenu: function () {
        return true;
      },
      submenuDirection: "right"
    });

    /* small flyout */
    $smallflyout.menuAim({
      activate: function (row) {
        var $entry = jQuery(row);
        $entry.addClass('navigationlist__entry--selected');
        $entry.find('.navigationlist').first().addClass('navigationlist--visible');
      },
      deactivate: function (row) {
        var $entry = jQuery(row);
        $entry.removeClass('navigationlist__entry--selected');
        $entry.find('.navigationlist').first().removeClass('navigationlist--visible');
      },
      exitMenu: function () {
        return true;
      },
      submenuDirection: "right"
    });

    /* mobile menu */
    $mobileMenuEntry.click(function (event) {

      var $currentList = jQuery(this).parents('.navigationlist').first();
      var $targetList = jQuery(this).parents('.navigationlist__entry--node').first().find('.navigationlist').first();
      var $targetNode = jQuery(this).parents('.navigationlist__entry--node').first();
      var $target = jQuery(this);

      event.preventDefault();

      $target.toggleClass('nodetoggle--rotated');
      $currentList.find('.navigationlist__entry--selected').removeClass('navigationlist__entry--selected');
      $targetNode.addClass('navigationlist__entry--selected');

      $targetList.toggleClass('navigationlist--visible');

      return false;
    });

  };

  init();

})();

//==============================================================================
// Direction
//==============================================================================

AvDesign.Flyout.Direction = (function () {

  var init = function () {
    jQuery('.header__menu li').on('mouseenter mouseleave', function () {
      if (jQuery('.header__flyout--sm', this).length) {

        var $firstLevel = jQuery('.navigationlist', this).first();
        var docW = jQuery("body").width();

        if (!($firstLevel.offset().left + $firstLevel.width() <= docW)) {
          $firstLevel.css({
            left: -$firstLevel.outerWidth() + 60 + 'px'
          });
          $firstLevel.addClass('navigationlist--left');
        } else {
          $firstLevel.removeClass('navigationlist--left');
        }

        $firstLevel.find('.navigationlist').each(function (i, subLevel) {

          var $parentLevel = jQuery(subLevel).parents('.navigationlist').first();

          var adjustLeft = function () {
            // alternative direction: LEFT
            jQuery(subLevel).css({
              left: -$parentLevel.outerWidth() + 'px'
            });
            jQuery(subLevel).addClass('navigationlist--left');
          };

          var adjustRight = function () {
            // standard direction: RIGHT
            jQuery(subLevel).css({
              left: ($parentLevel.outerWidth() - 30) + 'px'
            });
            jQuery(subLevel).removeClass('navigationlist--left');
          };

          if ($parentLevel.hasClass('navigationlist--left')) {
            adjustLeft();
          } else if ($parentLevel.offset().left + $parentLevel.outerWidth() + jQuery(subLevel).width() <= docW) {
            adjustRight();
          } else {
            adjustLeft();
          }

        });
      }
    });
  };

  init();

})();
var AvDesign = AvDesign || {};
AvDesign.Fancybox = {};

//==============================================================================
// Sticky
//==============================================================================

AvDesign.Fancybox.Finder = (function () {

  var init = function () {

    /*************/
    /* VARIABLES */
    /*************/
    var $fancyboxToggle = jQuery('[data-toggle="fancybox"][data-target="finder"]');
    var $finder = jQuery('#finder');
    var $fancyboxResetbutton = jQuery('.resetbutton--mobile');
    var $fancyboxApplybutton = jQuery('.applybutton--mobile');

    if($fancyboxToggle.length==0)
      return;

    /********************************/
    /* SETUP Fancybox prodct finder */
    /********************************/
    $fancyboxToggle.fancybox({
      autoWidth: true,
      margin: [75, 20, 20, 20],
      padding: 0,
      fitToView: true,
      beforeShow: function () {
        jQuery('.fancybox-outer').append($fancyboxResetbutton, $fancyboxApplybutton);
      },
      beforeClose: function(){
        $finder.append($fancyboxResetbutton, $fancyboxApplybutton);
      },
      afterClose: function () {
        $finder.removeAttr('style');
      }
    });

    $fancyboxApplybutton.on('click', function(){
      jQuery.fancybox.close();
    });
    $fancyboxResetbutton.on('click', function(){
      $finder.trigger('resetForms');
    });
  };

  init();

})();

AvDesign.Fancybox.SolrFacets = (function () {

  var init = function () {

    /*************/
    /* VARIABLES */
    /*************/
    var $fancyboxToggle = jQuery('[data-toggle="fancybox"][data-target="sub_navigation"]');
    var $facetMenu = jQuery('#'+$fancyboxToggle.data('target'));

    if($fancyboxToggle.length==0)
      return;

    /********************************/
    /* SETUP STICKY HEADER & FLYOUT */
    /********************************/
    $fancyboxToggle.fancybox({
      autoWidth: true,
      margin: [75, 20, 20, 20],
      padding: [30, 30, 30, 30],
      fitToView: true,
      afterClose: function(){
        $facetMenu.removeAttr('style');
      }
    });
  };

  init();

})();
var $ = jQuery;
var AvDesign = AvDesign || {};
AvDesign.Form = {};

//==============================================================================
// Label behaviour
//==============================================================================
AvDesign.Form.Label = (function () {

  var init = function ($inputs, $selects) {

    /*************************/
    /* SETUP FLOATING LABELS */
    /*************************/
    $inputs.each(function () {

      var $input = jQuery(this);

      setTimeout(function () {
        $input.addClass('hasTransition');
      }, 500);

      if ($(this).val().length) {
        $(this).addClass('hasText');
      } else {
        $(this).removeClass('hasText');
      }

    });

    // When input is focused
    $inputs.focus(function () {
      jQuery(this).addClass('hasText');

      if (!jQuery(this).attr("data-preserveplaceholder") && jQuery(this).attr("placeholder") != '') {
        jQuery(this).attr("data-placeholder", jQuery(this).attr("placeholder"));
        jQuery(this).attr("placeholder", "");
      }
    });
    // blur event..
    $inputs.blur(function () {
      if (jQuery(this).val() == '') {
        jQuery(this).removeClass('hasText');
        jQuery(this).attr("placeholder", jQuery(this).attr("data-placeholder"));
      }
    });

    if($selects)
    {
      $selects.each(function () {

        var $select = jQuery(this);

        setTimeout(function () {
          $select.addClass('hasTransition');
        }, 500);

        var selected = true;
        if (jQuery(this).find('[selected]').length > 0) {
          selected = false;
        }
        /*jQuery(this).prepend(
         '<option value="" ' + (selected ? 'selected ' : '') + 'style="display: none;"></option>'
         );*/
      });


      $selects.on("focus change blur", function () {
        if (!jQuery(this).val() || jQuery(this).val() == "") {
          jQuery(this).removeClass('hasText');
        } else {
          jQuery(this).addClass('hasText');
        }
      });
    }
  };

  init(
    jQuery('textarea, input[type="text"],input[type="email"],input[type="number"],input[type="password"],input[type="url"],input[type="search"],input[type="tel"]'),
    jQuery('select')
  );

  jQuery(document).on('form.refresh.floatinginput', function (e, $container) {
    init(
      $container.find('textarea, input[type="text"],input[type="email"],input[type="number"],input[type="password"],input[type="url"],input[type="search"],input[type="tel"]'),
      $container.find('select')
    );
  });

})();

//==============================================================================
// Select setup
//==============================================================================
AvDesign.Form.Select = (function () {

  var init = function () {
    /********************/
    /* SETUP PROCESSING */
    /********************/
    var initializeSelect = function($select) {
      var matcherAliases = $select.attr('data-matcher-aliases') ? jQuery.parseJSON($select.attr('data-matcher-aliases')) : null;
      var fullTextSearch = $select.is('[data-fulltext-match]');

      setTimeout(function () {
        $select.addClass('hasTransition');
      }, 500);

      // setup select2
      if($select.hasClass('no-select2'))
      {
        return;
      }

      if ($select.hasClass('select--nosearch')) {
        $select.select2({
          minimumResultsForSearch: -1
        }).focus(function () {
          jQuery(this).select2('open');
        });
      } else {
        $select.select2({

          templateResult: function (data, container) {
            if (data.element) {
              $(container).addClass($(data.element).attr("class"));
            }
            return data.text;
          },

          // #0054417: AB-8822: Ansprechpartner-Suche: US-bezogene Erweiterungen
          matcher: function (query, option) {

            // no needle yet..all options match
            if (query.term == undefined || query.term.length == 0) {
              return option;
            }

            // regular options matching
            if (option.text.toUpperCase().indexOf(query.term.toUpperCase()) == 0) {
              return option;
            }

            // fulltext match
            if(fullTextSearch && option.text.toUpperCase().indexOf(query.term.toUpperCase()) !== -1)
            {
              return option;
            }

            // custom options matching
            /**
             * works with config (JSON) given by data attribute on <select>, e.g.
             *
             * data-matcher-aliases="{"220":["America","USA"]}"
             *
             *  -> will match "United States" - Option in select (id: 220)
             *      additionaly for user input "America" or "USA"
             */
            if (matcherAliases && matcherAliases[option.id]) {
              var foundMatchingAlias = false;
              jQuery.each(matcherAliases[option.id], function (aliasIndex, alias) {
                if (alias.toUpperCase().indexOf(query.term.toUpperCase()) == 0) {
                  foundMatchingAlias = true;
                  return;
                }
              });
              if (foundMatchingAlias) {
                return option;
              }
            }

            return null;
          },

          // 0052512: Type search logic
          sorter: $select.hasClass('select--manualsort')
            ?function (results) {
              return results;
            }
            :function (results) {
              var query = $('.select2-search__field').val().toLowerCase();
              if (query) {
                return results.sort(function (a, b) {
                  return a.text.toLowerCase().indexOf(query) -
                    b.text.toLowerCase().indexOf(query);
                });
              }
              else {
                return results.sort(function (a, b) {
                  return a.text.toLowerCase().localeCompare(b.text.toLowerCase());
                });
              }
            }
        }).focus(function () {
          jQuery(this).select2('open');
        });
      }

      if ($select.val() != null && $select.val().length && $select.find('option:selected').text() !== '') {
        $select.addClass('hasText');
      } else {
        $select.removeClass('hasText');
      }

      $select.on('change', function () {
        if ($select.val() != null && $select.val().length && $select.find('option:selected').text() !== '') {
          $select.addClass('hasText');
        } else {
          $select.removeClass('hasText');
        }
      });

    };

    /*****************/
    /* SETUP SELECT2 */
    /*****************/

    jQuery("select").each(function () {
      initializeSelect(jQuery(this));
    });

    jQuery(document).on('neugart.setup.select', function(e, $elements) {
      $elements.each(function() {
        initializeSelect(jQuery(this));
      })
    });

  };

  init();

})();

AvDesign.Form.MobileFix = (function () {

  var init = function () {

    /* cache dom references */
    var $body = jQuery('body');
    var isTouchDevice = 'ontouchstart' in document.documentElement;

    if (isTouchDevice) {

      /* bind events */
      $(document)
        .on('focus', 'input', function () {
          $body.addClass('fixfixed');
        })
        .on('blur', 'input', function () {
          $body.removeClass('fixfixed');
        });
    }
  };

  init();

})();
var AvDesign = AvDesign || {};
AvDesign.Location = {};

//==============================================================================
// Single slider
//==============================================================================

AvDesign.Location.Accordion = (function () {

  var init = function () {
    var $toggle = jQuery('[data-toggle="location__accordionbody"]');

    $toggle.click(function () {
      jQuery(this).parents('.location__accordion').first().toggleClass('location__accordion--open');
    })
  };

  init();

})();
var AvDesign = AvDesign || {};
var $ = jQuery;

AvDesign.Navbox = {};

AvDesign.Navbox.Setup = (function () {

  var init = function () {

    if (jQuery('.productlist > .productcategory__headline').length) {
      addProductCategories();
    }

    /*************/
    /* VARIABLES */
    /*************/
    var $navbox = jQuery('.navbox');
    var $trigger = jQuery('[data-toggle]');
    var $toTopTrigger = jQuery('.navbox [data-toggle="totop"]');
    var $content = jQuery('.navbox [data-target]');

    // close navbox content if clicked outside
    jQuery(window).click(function () {
      jQuery('.navbox__content').removeClass('navbox__content--visible');
      $trigger.removeClass('navbox__controlgroup--selected');
      $content.removeClass('content--visible');
    });

    // prevent click through navbox
    $navbox.click(function (event) {
      event.stopPropagation();
    });

    // only show totop button if X pixels where scrolled down
    var checkToTopVisibility = function () {
      if (jQuery(document).scrollTop() <= 100) {
        $toTopTrigger.addClass('navbox__controlgroup--hidden');
      } else {
        $toTopTrigger.removeClass('navbox__controlgroup--hidden');
      }
    };

    checkToTopVisibility();
    jQuery(document).scroll(function () {
      checkToTopVisibility();
    });

    // totop functionality
    var flag = true;

    $toTopTrigger.click(function () {
      if (flag) {
        flag = false;
        jQuery.when(jQuery('body,html').animate({
          scrollTop: 0
        }, 800)).then(function () {
          flag = true;
        });
      }
    });

    // toggle stickybox contente
    $trigger.hover(function () {
      var target = jQuery(this).attr('data-toggle');
      var trigger = jQuery(this);

      // set the timeout for the flyout to disappear
      var contentToggleTimer = setTimeout(function () {
        $content.each(function () {
          if (jQuery(this).attr('data-target') == target) {
            $trigger.parent().removeClass('navbox__controlgroup--selected');
            $content.removeClass('content--visible');
            trigger.parent().addClass('navbox__controlgroup--selected');
            jQuery('.navbox').addClass('navbox--open');
            jQuery('.navbox__content').addClass('navbox__content--visible');
            jQuery(this).addClass('content--visible');
          }
        });
      }, 300);

      $content.data('contentToggleTimer', contentToggleTimer);
    }, function () {
      clearTimeout($content.data('contentToggleTimer'));
    });

    var removeContentTimeout = setTimeout(function () {
      $content.removeClass('content--visible');
    }, 500);

    $navbox.hover(function () {
      // clear the timeout for the menu to disappear
      clearTimeout($navbox.data('navboxFlyoutTimer'));
      clearTimeout($content.data('removeContentTimeout'));
    }, function () {
      // set the timeout for the flyout to disappear
      var navboxFlyoutTimer = setTimeout(function () {
        jQuery('.navbox').removeClass('navbox--open');
        jQuery('.navbox').find('.navbox__controlgroup--selected').removeClass('navbox__controlgroup--selected');
        jQuery('.navbox__content').removeClass('navbox__content--visible');

      }, 300);

      $navbox.data('navboxFlyoutTimer', navboxFlyoutTimer);
      $content.data('removeContentTimeout', removeContentTimeout);
    });
  };

  // add product categories to the sitenav
  var addProductCategories = function () {

    if (!jQuery('.navbox .navbox__controlgroup--anchorlist').length) {
      jQuery('.navbox').prepend('<div class="navbox__controlgroup navbox__controlgroup--anchorlist navbox__controlgroup--selected"><div class="controlgroup__trigger" data-toggle="anchorlist"></div></div>');
      jQuery('.navbox .navbox__content').append('<div class="content content--anchorlist" data-target="anchorlist"><ul class="ce-menu ce-menu-1"></ul></div>');
    }

    var anchorlist=jQuery('.navbox .content--anchorlist .ce-menu-1');
    jQuery('.productlist > .productcategory__headline').each(function () {
      var categoryId=jQuery(this).attr("id");
      var currentCategoryIndex=parseInt(categoryId.substr(-1));

      if(currentCategoryIndex==1) {
        anchorlist.prepend('<li id="anchorlink__'+categoryId+'"><a href="#'+categoryId+'">'+jQuery(this).text()+'</a></li>');
        return true;
      }

      var prevCategoryIndex=currentCategoryIndex-1;
      jQuery('#anchorlink__category'+prevCategoryIndex).after('<li id="anchorlink__'+categoryId+'"><a href="#'+categoryId+'">'+jQuery(this).text()+'</a></li>');
    });
  };

  init();

})();

AvDesign.Navbox.Anchorlist = (function () {

  var init = function () {

    var $navbox = $('.navbox');
    var $anchorlist = $navbox.find('.content--anchorlist');

    var flag = true;
    $anchorlist.on('click', 'li a', function(e){

      var $target = $($(this).attr('href'));

      e.preventDefault();
      if (flag && $target.offset()) {
        flag = false;
        jQuery.when(jQuery('body,html').animate({
          scrollTop: $target.offset().top - $('header.header').height() - 15
        }, 800)).then(function () {
          flag = true;
        });
      }

    });
  };

  init();

})();
var AvDesign = AvDesign || {};
AvDesign.Popover = {};

//==============================================================================
// Single slider
//==============================================================================

AvDesign.Popover.Setup = (function () {

  var init = function () {

    var $popovers = jQuery('[data-toggle="popover"]');

    $popovers.each(function () {
      var $popover = jQuery(this);

      // toggle popover is errorpopover (for validation)
      if ($popover.is('[data-target="popover--error"]')) {
        $popover.popover({
          html : true,
          container: 'body',
          placement: 'bottom',
          trigger: 'manual',
          content: function() {
            return $popover.siblings('.parsley-errors-list').html();
          }
        })
      } else { // initialize normal popovers
        $popover.popover({
          html : true,
          container: 'body',
          placement: 'bottom'
        })
      }

      // toggle popover manually
      $popover.hover(function () {
        if($popover.siblings('.parsley-error, .invalid').length){
          $popover.popover('show');
        }
      },function () {
        $popover.popover('hide');
      });
    });

  };

  init();

})();
var AvDesign = AvDesign || {};
AvDesign.Product = {};

//==============================================================================
// Productpreview
//==============================================================================
AvDesign.Product.Preview = (function () {

  var init = function () {

    /*************/
    /* VARIABLES */
    /*************/
    var $products = jQuery('.product');
    var $productHeaders = $products.find('.product__header');
    var $tableToggle = jQuery('.switch.toggletables');

    /************************************/
    /* SETUP MOBILE ACCORDION BEHAVIOUR */
    /************************************/
    $productHeaders.click(function () {
      jQuery(this).parents('.product').first().toggleClass('product--open');
    });
  };

  init();

})();
var AvDesign = AvDesign || {};
AvDesign.Header = {};

//==============================================================================
// Tabs
//==============================================================================

AvDesign.Header.Tabs = (function () {

  var init = function () {

    /*************/
    /* VARIABLES */
    /*************/
    var $header = jQuery('header.header');
    var $flyouts = jQuery('.header__flyout');

    /********************************/
    /* SETUP STICKY HEADER & FLYOUT */
    /********************************/
    jQuery(window).scroll(function () {
      if (jQuery(document).scrollTop() > 11) {
          $header.addClass('header--sticky');
          $flyouts.addClass('header__flyout--sticky');
      } else {
          $header.removeClass('header--sticky');
          $flyouts.removeClass('header__flyout--sticky');
      }
    });

  };

  init();

})();

AvDesign.Header.Branches = (function () {

  var init = function () {

    /*************/
    /* VARIABLES */
    /*************/
    var $sectorTriggers = jQuery('.productbranches__sector .parent__controls');
    var $parentCheckbox = $sectorTriggers.find('label');
    var $parentLabelText = $parentCheckbox.find('span');

    // prevent the checkbox from being checked by clicking the label
    $parentLabelText.click(function (event) {
      event.preventDefault();
    });

    /**************************/
    /* TOGGLE SECTOR CHILDREN */
    /**************************/
    $sectorTriggers.on('click', function (event) {
      var $sector = jQuery(this).parents('.productbranches__sector').first();
      var $children = $sector.find('.sector__children');
      
      if(jQuery(event.target).is($parentCheckbox)) {
        var parentCbChecked=$sector.find('.parent__controls input[type="checkbox"][data-toggle][data-target]').is(':checked');
        if(parentCbChecked || (!parentCbChecked && $children.hasClass('in'))) 
        {
          $sector.toggleClass('productbranches__sector--open');
          $children.toggleClass('in');
        }
        event.stopPropagation();
      }
      else 
      {
        $sector.toggleClass('productbranches__sector--open');
        $children.toggleClass('in');
      }
    });
  };

  init();

})();
var AvDesign = AvDesign || {};
AvDesign.Rangeslider = {};

//==============================================================================
// Single slider
//==============================================================================

AvDesign.Rangeslider.TickLickSlider = (function () {

  var $sliders = jQuery('.productfeature--ticklocked .slider');
  var $values = jQuery('.productfeature--ticklocked .slider__value');

  var init = function () {
    $sliders.on("change", function (slideEvent) {
      $values.removeClass('slider__value--active');
      jQuery($values[slideEvent.value.newValue - 1]).addClass('slider__value--active');

    });
  };

  init();

})();

AvDesign.Rangeslider.RangeSlider = (function () {

  var init = function () {
    var $sliders = jQuery('div.slider');

    $sliders.each(function () {
      var $slider = jQuery(this);
      var $tooltips = jQuery(this).siblings('.slider__tooltips');
      var $handleMin = $slider.find('.min-slider-handle');
      var $selection = $slider.find('.slider-selection');
      var $handleMax = $slider.find('.max-slider-handle');
      var $tooltipMin = $tooltips.find('.tooltip__min');
      var $tooltipSelection = $tooltips.find('.tooltip__selection');
      var $tooltipMax = $tooltips.find('.tooltip__max');

      $handleMin.append($tooltipMin);
      $selection.append($tooltipSelection);
      $handleMax.append($tooltipMax);

      $slider.on("slide", function (slideEvt) {
        $tooltipMin.addClass('tooltip--visible');
        $tooltipMax.addClass('tooltip--visible');
        if (slideEvt.value[0]) {
          $tooltipMin.text(slideEvt.value[0]);
          $tooltipMax.text(slideEvt.value[1]);
        } else {
          $tooltipMin.text(slideEvt.value);
        }
      });
    });
  };

  setTimeout(init, 500);

})();
var AvDesign = AvDesign || {};
AvDesign.Slideshow = {};

// TODO: MSC->PJO: remove public functions (e.g. setupNumberPagination) and puplic variables (e.g. options)

var options = {
  dotLimit: 6
};

/**********************************************************************************************************************/

/********************************************/
/* BUGFIX: NO STACKED AND FLICKERING SLIDES */
/********************************************/
var fixCarousel = function () {

  var $stage = jQuery('.owl-stage'),
    stageW = $stage.width(),
    $el = jQuery('.owl-item'),
    elW = 0;

  $el.each(function () {
    elW += Math.ceil(jQuery(this).width() + parseInt(jQuery(this).css("margin-right")));
  });
  if (elW > stageW) {
    $stage.width(elW);
  }
  $stage.width($stage.width() + 10);
};

/**********************************************************************************************************************/

/******************/
/* HOME SLIDESHOW */
/******************/
AvDesign.Slideshow.setupHome = (function () {

  var init = function () {

    /*************/
    /* VARIABLES */
    /*************/
    var $mainSlideshow = jQuery('.slideshow--home > .owl-carousel');
    var $textContainer = jQuery('.slideshow--home > .slideshow__textcontainer');
    var $textContainerContent = jQuery('.slideshow--home > .slideshow__textcontainer > .textcontainer__content');
    var loop = true;

    if ($mainSlideshow.find('.slide').length <= 1) {
      loop = false;
    }

    var getSlides = function () {
      return jQuery('.slideshow--home .owl-item');
    };

    var checkOpacityTreshold = function () {
      var treshold = $textContainer.attr('data-contentbox-transparency-threshold');
      if(treshold > jQuery(window).width() && treshold > 991) {
        $textContainer.css({
          "opacity": "0.85"
        })
      }
    };

    var moveDots = function (nextSlide) {
      var $currentSlide = $mainSlideshow.find('.owl-item.active');
      var $nextSlide = nextSlide;
      var $textContainer = jQuery('.slideshow__textcontainer');

      if ($nextSlide) {
        if (jQuery(window).width() > 990) {

          $textContainer.css({
            "top": $nextSlide.find('img, video').first().height()
          });

        } else {

          var $content = $nextSlide.find('.slide__content');
          if ($content.length) {
            $textContainer.css({
              "top": $content.first().position().top + 20,
              "transform": "translate(-50%, 0)"
            });
          } else {
            $textContainer.css({
              "top": $nextSlide.find('img, video').first().height()
            });
          }
        }

      } else {

        if (jQuery(window).width() > 990) {
          $textContainer.css({
            "top": $currentSlide.find('img, video').first().height()
          });

        } else {
          var $content = $currentSlide.find('.slide__content');
          if ($content.length) {
            $textContainer.css({
              "top": $content.first().position().top + 20,
              "transform": "translate(-50%,0)"
            });
          } else {
            $textContainer.css({
              "top": $currentSlide.find('img, video').first().height()
            });
          }
        }
      }
    };

    jQuery(window).on("resize", function () {
      if ($textContainerContent.html() && jQuery(window).width() > 990) {
        $textContainer.removeAttr('style');
        checkOpacityTreshold();
      } else {
        moveDots();
      }
    });

    $mainSlideshow.waitForImages(function () {
      $mainSlideshow.on('initialized.owl.carousel', function () {
        $activeSlide = jQuery('.slideshow--home .owl-item.active');
        $slides = getSlides();

        if ($activeSlide.find('.slide__content').html()) {
          var $slide = $activeSlide.find('.slide');
          var treshold = $slide.attr('data-contentbox-transparency-threshold') ? $slide.attr('data-contentbox-transparency-threshold') : 0;

          $textContainer.css('opacity', '1');
          $textContainerContent.html($activeSlide.find('.slide__content').html());
          $textContainerContent.css('height', $activeSlide.find('.slide__content').height() + 'px');
          $textContainer.attr('data-contentbox-transparency-threshold', treshold);
          checkOpacityTreshold();
        }

        objectFitImages();
      });

      // FIX owl calculation
      $mainSlideshow.on('initialized.owl.carousel', function () {
        fixCarousel();
      }).on('refreshed.owl.carousel', function () {
        fixCarousel();
      });


      /********************************/
      /* SETUP STICKY HEADER & FLYOUT */
      /********************************/
      $mainSlideshow.owlCarousel({
        autoplay: true,
        autoplayTimeout: jQuery('.slideshow--home').data('speed'),
        loop: loop,
        margin: 10,
        nav: true,
        dots: true,
        navText: false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        responsive: {
          0: {
            items: 1,
            dotsContainer: "#slideshow__dots--home"
          },
          600: {
            items: 1,
            dotsContainer: "#slideshow__dots--home"
          },
          1000: {
            items: 1,
            dotsContainer: "#slideshow__dots--home"
          }
        }
      });

      // AUFKLAPPEN
      $mainSlideshow.on('changed.owl.carousel', function (event) {
        var $nextSlide = jQuery($slides[event.item.index]);

        if (jQuery(window).width() < 990) {
          moveDots($nextSlide);
        }

        if ($nextSlide.find('.slide__content').html()) {
          var $slide = $nextSlide.find('.slide');
          var treshold = $slide.attr('data-contentbox-transparency-threshold') ? $slide.attr('data-contentbox-transparency-threshold') : 0;

          $textContainer.css('opacity', '1');
          $textContainerContent.html($nextSlide.find('.slide__content').html());
          $textContainer.attr('data-contentbox-transparency-threshold', treshold)
        } else {
          $textContainer.css('opacity', '0');
          $textContainerContent.html('');
        }

        checkOpacityTreshold();
      });


      $mainSlideshow.on('translate.owl.carousel', function (event) {

        var $slides = getSlides();
        var $nextSlide = jQuery($slides[event.item.index]);

        if (jQuery(window).width() > 990) {
          $textContainerContent.css('min-height', $nextSlide.find('.slide__content').height() + 'px');
        }

      });
      $mainSlideshow.on('translated.owl.carousel', function (event) {

        var $slides = getSlides();
        var $nextSlide = jQuery($slides[event.item.index]);

        // stop all videos
        $slides.find('video.slide_item:visible').each(function () {
          this.pause();
        });

        if ($nextSlide.find('video.slide_item:visible').length > 0) {
          var $video = $nextSlide.find('video.slide_item:visible');
          var video = $video.get(0);
          setTimeout(function () {
            video.muted = true;
            video.play();
          }, 150);
          $mainSlideshow.trigger('stop.owl.autoplay');
          $video.on('ended', function () {
            $mainSlideshow.trigger('play.owl.autoplay', [jQuery('.slideshow--home').data('speed')]);
          });
        }

      });

      if (!Modernizr.objectfit) {
        $mainSlideshow.find('.slide').each(function () {

          var $container = $(this);
          var $img = $container.find('img');
          var imgUrl = $img.prop('src');
          var $textContainer = jQuery('.slideshow--home > .slideshow__textcontainer');

          $textContainer.addClass("compat-object-fit");

          if (imgUrl) {
            if($img.hasClass('slide__image--fullsize')) {
              $container
                .css({
                  'backgroundImage': 'url(' + imgUrl + ')',
                  'padding-top': '56.25%'
                })
                .addClass('compat-object-fit--cover');
            } else {
              $container
                .css('backgroundImage', 'url(' + imgUrl + ')')
                .addClass('compat-object-fit--contain');
            }
          }
        });
      }
    });
  };

  init();

})();

/**********************************************************************************************************************/

/********************/
/* SETUP PAGINATION */
/********************/
var setupNumberPagination = function (_slideshow) {

  /*************/
  /* VARIABLES */
  /*************/
  var $slideshow = jQuery(_slideshow);
  /*****************************/
  /* SETUP NUMBERED PAGINATION */
  /*****************************/
  $slideshow.addClass('owl-carousel--numbered');
  if ($slideshow.find('.owl-pagination').length == 0) {
    $slideshow.find('.owl-controls').append(
      '<div class="owl-pagination"></div>'
    );
  }
  $slideshow.on('initialized.owl.carousel refreshed.owl.carousel changed.owl.carousel resized.owl.carousel', function (e) {
    $slideshow.find('.owl-pagination').html('<span>' + (e.page.index + 1) + "/" + e.item.count + '</span>')
  });
};

/**********************************************************************************************************************/

/*************************/
/* SINGLE ITEM SLIDESHOW */
/*************************/
AvDesign.Slideshow.setupSingle = (function () {

  var init = function () {

    /*************/
    /* VARIABLES */
    /*************/
    var $slideshow = jQuery('.slideshow--single > .owl-carousel');

    /********************************/
    /* SETUP STICKY HEADER & FLYOUT */
    /********************************/
    $slideshow.waitForImages(function () {
      $slideshow.on('initialized.owl.carousel', function (e) {
        if (e.item.count > options.dotLimit) {
          setupNumberPagination(jQuery(this));
          jQuery(this).find('.owl-pagination').html('<span>' + (e.page.index + 1) + "/" + e.item.count + '</span>')
        }

        objectFitImages();
      });

      // FIX owl calculation
      $slideshow.on('initialized.owl.carousel', function () {
        fixCarousel();
      }).on('refreshed.owl.carousel', function () {
        fixCarousel();
      });

      $slideshow.owlCarousel({
        loop: true,
        margin: 8,
        nav: true,
        dots: true,
        navText: false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoHeight: false,
        items: 1
      });
    });
  };

  init();

})();

/**********************************************************************************************************************/

/*************************/
/* MULTI ITEM SLIDESHOW */
/*************************/
AvDesign.Slideshow.setupMulti = (function () {

  var init = function () {

    /*************/
    /* VARIABLES */
    /*************/
    var $slideshow = jQuery('.slideshow--multi > .owl-carousel');

    // FIX owl calculation
    $slideshow.on('initialized.owl.carousel', function () {
      fixCarousel();
    }).on('refreshed.owl.carousel', function () {
      fixCarousel();
    }).on('initialized.owl.carousel', function (e) {
      if (e.item.count > options.dotLimit) {
        setupNumberPagination(jQuery(this));
        jQuery(this).find('.owl-pagination').html('<span>' + (e.page.index + 1) + "/" + e.item.count + '</span>')
      }
    });

    // FIX owl calculation
    $slideshow.on('initialized.owl.carousel', function () {
      // invalidate width on resized to realign items correctly
      setTimeout(function () {
        $slideshow.data('owlCarousel').invalidate('width');
        $slideshow.data('owlCarousel').refresh();
      }, 500);
    }).on('resized.owl.carousel', function () {
      // invalidate width on resized to realign items correctly
      $slideshow.data('owlCarousel').invalidate('width');
      $slideshow.data('owlCarousel').refresh();
    });

    $slideshow.waitForImages(function () {

      $slideshow.owlCarousel({
        loop: true,
        margin: 8,
        nav: true,
        dots: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        responsive: {
          0: {
            items: 1,
            center: false,
            autoWidth: false
          },
          768: {
            items: 2,
            center: true,
            autoWidth: true
          }
        }
      });
    });
  };

  init();

})();

/**********************************************************************************************************************/

/********************************************/
/* BUGFIX: NO STACKED AND FLICKERING SLIDES */
/********************************************/
AvDesign.Slideshow.fixCarousel = (function () {

  var fixCarousel = function () {
    var $stage = jQuery('.owl-stage'),
      stageW = $stage.width(),
      $el = jQuery('.owl-item'),
      elW = 0;

    $el.each(function () {
      elW += Math.ceil(jQuery(this).width() + parseInt(jQuery(this).css("margin-right")));
    });
    if (elW > stageW) {
      $stage.width(elW);
    }
    $stage.width($stage.width() + 10);
  };


  var init = function () {
    var $carousel = jQuery('.owl-carousel');

    $carousel.on('initialized.owl.carousel', function () {
      fixCarousel();
    }).on('refreshed.owl.carousel', function () {
      fixCarousel();
    });
  };

  init();

})();

/**********************************************************************************************************************/

/************************/
/* ADJUST IMAGE HEIGHTS */
/************************/
/*AvDesign.Slideshow.fixSlideHeight = (function () {

 var fixHeight = function (slideshow, pushCaption) {

 var $slides = jQuery(slideshow).find('.gallery__slide');
 var $stage = jQuery(slideshow).find('.owl-stage-outer');
 var $activeSlide = jQuery(slideshow).find('.owl-item.active.center');

 $slides.each(function (j, slide) {

 var $slide = jQuery(slide);
 var $media = $slide.find('img, video');
 var $caption = $slide.find('figcaption, .caption');

 if (!pushCaption) {
 $media.each(function (k, media) {

 var $media = jQuery(media);

 if ($media.height() > 0 && $caption.outerHeight(true)) {
 $media.height($slide.height() - $caption.outerHeight(true));
 }

 });
 } else {
 // reset slide height to CSS settings
 $slide.removeAttr("style");
 $media.height($slide.height());
 $slide.height($slide.height() + $caption.outerHeight(true));
 }
 });

 // update slideshow height to adjusted items
 $stage.height($activeSlide.height());

 };

 var init = function () {
 var $slideshows = jQuery('[class*=".slideshow--"]');

 $slideshows.each(function (i, slideshow) {
 if (jQuery(slideshow).hasClass('slideshow--multi')) {
 jQuery(slideshow).on('initialized.owl.carousel', function () {
 fixHeight(jQuery(slideshow), true);
 });
 } else {
 jQuery(slideshow).on('initialized.owl.carousel', function () {
 fixHeight(jQuery(slideshow), false);
 });
 }
 });

 /!*$slideshows.each(function (i, slideshow) {
 if (jQuery(slideshow).hasClass('slideshow--multi')) {
 fixHeight(jQuery(slideshow), true);
 } else {
 fixHeight(jQuery(slideshow), false);
 }
 });*!/

 jQuery(window).on("resize", function () {
 $slideshows.each(function (i, slideshow) {
 if (jQuery(slideshow).hasClass('slideshow--multi')) {
 fixHeight(jQuery(slideshow), true);
 } else {
 // fixHeight(jQuery(slideshow), false);
 }
 });
 })
 };

 init();

 })();*/

/**********************************************************************************************************************/

/***************************/
/* ADJUST FIGCAPTION WIDTH */
/***************************/
AvDesign.Slideshow.fixCaptionWidth = (function () {

  var fixWidth = function ($slideshow) {
    var $slides = $slideshow.find('.gallery__slide');

    $slides.each(function (j, slide) {

      var $slide = jQuery(slide);
      var $media = $slide.find('img, video');
      var $caption = $slide.find('figcaption, .caption');
      $caption.removeAttr("style");
      $caption.css("maxWidth", $media.width() + "px");
    });

  };

  var init = function () {
    var $slideshows = jQuery('.slideshow--multi');

    $slideshows.find('figcaption, .caption').width(0);
    $slideshows.find('figcaption, .caption').css("margin", "auto");

    $slideshows.on('initialized.owl.carousel', function () {
      fixWidth(jQuery(this));
    });

    jQuery(window).on("resize", function () {
      $slideshows.each(function () {
        fixWidth(jQuery(this));
      });
    })
  };

  setTimeout(function () {
    init();
    jQuery(window).trigger('resize');
  }, 500);

})();
var AvDesign = AvDesign || {};
AvDesign.Table = {};

//==============================================================================
// Single slider
//==============================================================================

AvDesign.Table.Responsive = (function () {

  var reorderTable = function (_table) {

    // variables
    var $table = jQuery(_table);
    var resIndexes = [];
    var highlightIndex;
    var table = {
      head: {
        rows: []
      },
      body: {
        rows: []
      }
    };
    var tmpTable = {
      head: {
        rows: []
      },
      body: {
        rows: []
      }
    };

    // analyze table head
    $table.find('thead tr').each(function (i, row) {
      tmpTable.head.rows[i] = [];
      jQuery(row).find('th').each(function (j, col) {
        tmpTable.head.rows[i].push(col);
      })
    });

    // create arrays for table rows
    $table.find('tbody tr').each(function (i, row) {
      tmpTable.body.rows[i] = [];
    });

    // analyze table body
    $table.find('tbody tr').each(function (i, row) {
      jQuery(row).find('td').each(function (j, col) {
        // if column spans multiple rows
        if (jQuery(col).attr('rowspan')) {
          tmpTable.body.rows[i][j] = col;
          for (var k = 1; k < parseInt(jQuery(col).attr('rowspan')); k++) {
            tmpTable.body.rows[i + k][j] = "rowspan";
          }
        } else {
          tmpTable.body.rows[i].push(col);
        }
      })
    });

    // create copy of tmpTable excluding colspans
    for (var i = 0; i < tmpTable.head.rows.length; i++) {
      table.head.rows[i] = [];
      for (var j = 0; j < tmpTable.head.rows[i].length; j++) {
        if (jQuery(tmpTable.head.rows[i][j]).attr('colspan')) {
          for (var k = 0; k < parseInt(jQuery(tmpTable.head.rows[i][j]).attr('colspan')); k++) {
            table.head.rows[i].push(tmpTable.head.rows[i][j]);
          }
        } else {
          table.head.rows[i].push(tmpTable.head.rows[i][j]);
        }
      }
    }

    for (var i = 0; i < tmpTable.body.rows.length; i++) {
      table.body.rows[i] = [];
      for (var j = 0; j < tmpTable.body.rows[i].length; j++) {
        if (jQuery(tmpTable.body.rows[i][j]).attr('colspan')) {
          for (var k = 0; k < parseInt(jQuery(tmpTable.body.rows[i][j]).attr('colspan')); k++) {
            table.body.rows[i].push(tmpTable.body.rows[i][j]);
          }
        } else {
          table.body.rows[i].push(tmpTable.body.rows[i][j]);
        }
      }
    }

    // get responsive column indexes
    for (var i = 0; i < table.head.rows.length; i++) {
      for (var j = 0; j < table.head.rows[i].length; j++) {
        if (jQuery(table.head.rows[i][j]).attr('data-responsive')) {
          resIndexes.push(j)
        }
      }
    }

    for (var k = 0; k < resIndexes.length; k++) {
      var content = "";
      var framesize;
      content += "<table class='table--responsive'>";
      content += "<thead>";
      for (var i = 0; i < table.head.rows.length; i++) {
        content += "<tr>";
        for (var j = 0; j < table.head.rows[i].length; j++) {

          if (j == resIndexes[k] || resIndexes.indexOf(j) == -1) {
            var attributes = table.head.rows[i][j].attributes;
            for (var m = 0; m < attributes.length; m++) {
              if(attributes[m].name.match("data-framesize-")) {
                framesize = attributes[m].name;
              }
            }

            if(j == resIndexes[k]) {
              content += "<th ##size##>" + jQuery(table.head.rows[i][j]).html() + "</th>";
            } else {
              content += "<th>" + jQuery(table.head.rows[i][j]).html() + "</th>";
            }
          }

        }
        content += "</tr>";
      }
      content += "</thead>";
      content += "<tbody>";
      for (var i = 0; i < table.body.rows.length; i++) {
        content += "<tr>";
        for (var j = 0; j < table.body.rows[i].length; j++) {

          if (table.body.rows[i][j] != "rowspan") {
            if (j == resIndexes[k] || resIndexes.indexOf(j) == -1) {

              if(!(typeof (table.body.rows[i][j])=='undefined')) {
                if (j == resIndexes[k]) {
                  content += "<td ##size## rowspan='" + table.body.rows[i][j].rowSpan + "'>" + jQuery(table.body.rows[i][j]).html() + "</td>"
                } else {
                  content += "<td rowspan='" + table.body.rows[i][j].rowSpan + "'>" + jQuery(table.body.rows[i][j]).html() + "</td>"
                }
              }
            }
          }

        }
        content += "</tr>";
      }
      content += "</tbody>";
      content = content.split('##size##').join(framesize);
      content += "</table>";
      jQuery(content).insertBefore($table);
    }
  };

  var init = function () {
    var $tables = jQuery('[data-responsivetable="true"]');
    $tables.each(function () {
      reorderTable(jQuery(this));
    });
    //AvModules.Products.variantmarker.init();
  };

  init();

})();
var AvDesign = AvDesign || {};
AvDesign.Teasercollection = {};

/*******************************/
/* TEASER COLLECTION SLIDESHOW */
/*******************************/
AvDesign.Teasercollection.setupTeaserSlideshow = (function () {

  var init = function () {

    /*************/
    /* VARIABLES */
    /*************/
    var $slideshows = jQuery('.teaser-collection--slideshow');

    $slideshows.each(function () {

      var $slideshow = jQuery(this);
      var $container = $slideshow.parents('[class*="col-"]').first();
      var $header = $slideshow.siblings('.teaser-collection__header').first();
      var options = {};

      if ($container.hasClass('col-sm-6') || $container.hasClass('col-sm-8')) {
        options.responsive = {
          0: {
            items: 1
          },
          1200: {
            items: 2
          }
        }
      } else if ($container.hasClass('col-sm-4')) {
        options.responsive = {
          0: {
            items: 1
          },
          768: {
            items: 1
          },
          1200: {
            items: 1
          }
        }
      } else {
        options.responsive = {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1200: {
            items: 3
          }
        }
      }

      /**********************************/
      /* SETUP SLIDESHOW AND PAGINATION */
      /**********************************/
      $slideshow.on('initialized.owl.carousel', function (e) {
        if (e.item.count > options.dotLimit) {
          setupNumberPagination(jQuery(this));
          jQuery(this).find('.owl-pagination').html('<span>' + (e.page.index + 1) + "/" + e.item.count + '</span>')
        }
      });

      var options={
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        navText: false,
        responsiveClass: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoHeight: false,
        responsive: options.responsive
      };

      $slideshow.owlCarousel(options);
      $slideshow.data('av_teasercollection_owl_options', options);

      $slideshow.prepend($header);

    });
  };

  init();

})();

AvDesign.Teasercollection.setupTeaserGrid = (function () {

  var init = function () {

    /*************/
    /* VARIABLES */
    /*************/
    var $teasers = jQuery('.teaser-collection--grid .ce-avneugart_teaser');

    /**************/
    /* SETUP GRID */
    /**************/
    $teasers.addClass('col-sm-4');

    /*******************/
    /* SETUP SLIDESHOW */
    /*******************/
    enquire.register("screen and (max-width: 768px)", function () {
      jQuery('.teaser-collection--grid').each(function (i, collection) {
        initOwl(collection);
      })
    }).register("screen and (min-width: 768px)", function () {
      jQuery('.teaser-collection--grid').each(function (i, collection) {
        destroyOwl(collection);
      })
    });

  };

  /***************************/
  /* INITIALIZE OWL CAROUSEL */
  /***************************/
  var initOwl = function (owl) {

    var dots = true;
    var $carousel = jQuery(owl);

    if ($carousel.find('.download').length <= 1) {
      dots = false;
    }

    $carousel.owlCarousel({
      loop: true,
      margin: 7.5,
      nav: true,
      dots: true,
      navText: false,
      center: true,
      animateIn: 'fadeIn',
      animateOut: 'fadeOut',
      items: 1
    })
  };

  /************************/
  /* DESTROY OWL CAROUSEL */
  /************************/
  var destroyOwl = function (owl) {
    var $carousel = jQuery(owl);

    if ($carousel) {
      $carousel
        .trigger('destroy.owl.carousel')
        .removeClass('owl-carousel owl-loaded')
        .find('.owl-stage-outer').children().unwrap();
    }
  };

  init();

})();
var AvDesign = AvDesign || {};
AvDesign.Textpic = {};

//==============================================================================
// adjust position of text relative to image in text $ media elements
//==============================================================================

AvDesign.Textpic.Position = (function () {

  var reorderText = function () {
    var $textpics = jQuery('.ce-textpic.ce-right, .ce-textpic.ce-left').not('.ce-below, ce-above');
    $textpics.each(function () {
      var $text = jQuery(this).find('.ce-bodytext');
      var $gallery = jQuery(this).find('.ce-gallery');
      var diff = $gallery.height() - $text.height();

      if (jQuery(window).width() > 1002 && diff > 0) {
        $text.css({
          "margin-top": diff / 2 + "px"
        })
      } else {
        +
        $text.css({
          "margin-top": "0px"
        })
      }
    })
  };

  var init = function () {
    jQuery(window).on("resize", reorderText);
    reorderText();
  };

  setTimeout(function(){
    init()
  }, 100);

})();
var AvDesign = AvDesign || {};

AvDesign.Timeline = (function () {

  var init = function () {
    /**************************/
    /* SETUP TIMELINE ELEMENT */
    /**************************/

    // gather infos
    var $containerElements = jQuery('[data-timeline-year], [data-timeline-image], [data-timeline-text]');

    if ($containerElements.length < 1) {
      return;
    }

    var timeline_data = [];
    var $containerContentElements =  jQuery('.ce-avneugart_history_year, .ce-avneugart_history_text, .ce-avneugart_history_image');
    $containerContentElements.wrapAll( "<div class='timeline'></div>" );
    var $container = jQuery('.timeline');

    if ($container.length < 1) {
      return;
    }

    var currentYear = null;
    var currentDay = 1;

    $containerElements.each(function () {
      var $element = jQuery(this);

      // no year set yet and not a year element..ignore
      if (!currentYear && !AvBasics.Util.jQuery.hasAttribute($element, 'data-timeline-year')) {
        $element.parents('.contentelement').hide();
        return;
      }

      // year
      if (AvBasics.Util.jQuery.hasAttribute($element, 'data-timeline-year')) {
        currentYear = $element.find('[data-timeline-year-value]').text();
        currentDay = 1;
      }
      // image
      else if (AvBasics.Util.jQuery.hasAttribute($element, 'data-timeline-image')) {
        timeline_data.push({
          type: 'blog_post',
          date: currentYear + '-01-'+("0" + currentDay).slice(-2),
          dateFormat: 'DD MMMM YYYY',
          height: 200,
          images: [$element.find('[data-timeline-image-image] img').attr('src')],
          content: '<figcaption>' + $element.find('[data-timeline-image-description]').text() + '</figcaption>',
          speed: 2000
        });
      }
      // text
      else if (AvBasics.Util.jQuery.hasAttribute($element, 'data-timeline-text')) {
        timeline_data.push({
          type: 'blog_post',
          date: currentYear + '-01-'+("0" + currentDay).slice(-2),
          dateFormat: 'DD MMMM YYYY',
          title: $element.find('[data-timeline-text-header]').text(),
          content: $element.find('[data-timeline-text-text]').text(),
          images: []
        });
      }
      $element.parents('.contentelement').hide();
      currentDay++;
    });

    var $timeline = new Timeline(jQuery('.timeline'), timeline_data);
    $timeline.setOptions({
      dateFormat: 'DD MMMM YYYY',
      animation: true,
      lightbox: true,
      first_separator: true,
      separator: 'year',
      columnMode: 'dual',
      order: 'asc',
      max: null,
      responsive_width: 768
    });
    $timeline.display();

    var $timelineElements = jQuery(".timeline .timeline_dual").find('.timeline_element, .date_separator');
    var $imageElements = [];
    var $textElements = [];
    var imageModifier = '';
    var textModifier = '';

    $timelineElements.each(function () {
      if (jQuery(this).hasClass('date_separator')) {
        if (imageModifier == '' && textModifier == '') {
          imageModifier = 'left';
          textModifier = 'right';
        } else if (imageModifier == 'left') {
          imageModifier = 'right';
          textModifier = 'left';
        } else {
          imageModifier = 'left';
          textModifier = 'right';
        }
      } else if (jQuery(this).find('img').length) {
        $imageElements.push(this);
        jQuery(this).addClass('timeline_element_image');
        if (imageModifier == 'left') {
          jQuery(this).removeClass('timeline_element_right');
          jQuery(this).addClass('timeline_element_left');
        } else {
          jQuery(this).removeClass('timeline_element_left');
          jQuery(this).addClass('timeline_element_right');
        }
      } else {
        $textElements.push(this);
        if (textModifier == 'left') {
          jQuery(this).removeClass('timeline_element_right');
          jQuery(this).addClass('timeline_element_left');
        } else {
          jQuery(this).removeClass('timeline_element_left');
          jQuery(this).addClass('timeline_element_right');
        }
      }
    });

    // adjust ids see: 	#0052157: Seiten-Navigation funktioniert bei Historie nicht
    $containerContentElements.each(function(index, element){
      var $element=jQuery(element);
      var id = $element.attr('id');
      $element.removeAttr('id');
      $timelineElements.eq(index).attr('id', id);
    });
  };

  init();

})();
var AvDesign = AvDesign || {};
AvDesign.Tilecontainer = {};

//==============================================================================
// Single slider
//==============================================================================

AvDesign.Tilecontainer.Setup = (function () {

  var init = function () {
    jQuery('.tilecontainer').each(function () {
      if (jQuery(this).parents('.tilecontainer').length) {
        //jQuery(this).find('.tilecontainer').removeClass('tilecontainer');
        jQuery(this).removeClass('tilecontainer');
      } else if (jQuery(this).is('[class*="col-"]')) {
          jQuery(this).parent().addClass('tilewrapper');
          jQuery(this).removeClass('tilecontainer');
          jQuery(this).find('> *').addClass('tilecontainer');
        }
    });
  };

  init();

})();
//------------------------------------------------------------------------------
// Star Rating
//------------------------------------------------------------------------------

(function() {
  jQuery.fn.av_starrating=function() {
    return this.each(function() {
      var $ratingForm=jQuery(this);
      var $labels=$ratingForm.find('.star-rating__label');

      // set initial rating
      $ratingForm.find('input[type=radio][checked=checked]').each(function () {
        jQuery('[for='+jQuery(this).attr('id')+']').addClass('star--selected');
        jQuery('[for='+jQuery(this).attr('id')+']').prevAll('label').addClass('star--selected');
      });

      // set stars by click
      $labels.click(function () {
        if(!jQuery(this).hasClass('star--selected'))
        {
          jQuery(this).addClass('star--selected');
        }
        jQuery(this).prevAll('label').each(function () {
          if(!jQuery(this).hasClass('star--selected'))
          {
            jQuery(this).addClass('star--selected');
          }
        });
        jQuery(this).nextAll('label').each(function () {
          if(jQuery(this).hasClass('star--selected'))
          {
            jQuery(this).removeClass('star--selected');
          }
        });
      });

      // set stars by hover
      $labels.hover(function () {
        if(!jQuery(this).hasClass('star--hover'))
        {
          jQuery(this).addClass('star--hover');
        }
        jQuery(this).prevAll('label').each(function () {
          if(!jQuery(this).hasClass('star--hover'))
          {
            jQuery(this).addClass('star--hover');
          }
        });
        jQuery(this).nextAll('label').each(function () {
          if(jQuery(this).hasClass('star--hover'))
          {
            jQuery(this).removeClass('star--hover');
          }
          jQuery(this).addClass('star--hover--selected');
        });
      }, function () {
        $labels.removeClass('star--hover');
        $labels.removeClass('star--hover--selected');
      });
    });
  };

  jQuery('.rating-form__star-rating').av_starrating();

  jQuery('.recaptcha-submit').click(function (event) {
    if(!jQuery(this).data('valid'))
    {
      event.preventDefault();
      jQuery('.recaptcha__error').show();
    }
  });
}(jQuery));

function avRecaptchaCallback() {
  jQuery('.recaptcha-submit').data('valid', true);
  jQuery('.recaptcha__error').hide();
}

function avRecaptchaExpiredCallback() {
  jQuery('.recaptcha-submit').data('valid', false);
}

var AvModules = AvModules || {};

AvModules.Downloads=(function() {

  var init=function() {
    initPagination();
    initDownloadLinks();
    initDownloadConfirmation();
  };
  var afterAjax=function() {
    initDownloadLinks();
    initDownloadConfirmation();
  };

  var initPagination=function() {
    jQuery(document).on('articleloader.ContentRetrived', function(e) {
      var $sectionheadersInOldContent=e.oldContent.find('[data-articleloader-sectionheader]');
      if($sectionheadersInOldContent.length == 0)
      {
        return;
      }
      $sectionheadersInOldContent.each(function() {
        var id=jQuery(this).data('articleloader-sectionheader');
        var $duplets=e.newContent.find('[data-articleloader-sectionheader="' + id + '"]');
        if($duplets.length == 0)
        {
          return;
        }
        $duplets.remove();
      });
      return e.newContent;
    });
    jQuery(document).on('articleloader.ContentSet', function() {
      afterAjax();
    });
  };

  var initDownloadLinks=function() {
    var $downloadItems=jQuery('[data-download-item]').not('[data-initalized]');
    $downloadItems.each(function() {
      var $item=jQuery(this);
      var $languageSelect=$item.find('[data-download-file-switcher]');
      $item.data('initialized', 1);

      if($languageSelect.length > 0)
      {
        var updateDownloadLink=function(value) {
          $item.find('[data-download-link]').removeClass('download__link--visible');
          $item.find('[data-download-link="' + value + '"]').addClass('download__link--visible');
        };
        $languageSelect.on('change', function() {
          updateDownloadLink(this.value);
        });
        updateDownloadLink($languageSelect.val());
      }
      else
      {
        $item.find('[data-download-link]').show();
      }
    });
  };

  var initDownloadConfirmation=function() {
    var $downloadItems=jQuery('[data-download-item]').not('[data-initalized]');
    $downloadItems.each(function() {
      var $item=jQuery(this);
      var $confirmationCheckBox=$item.find('[data-download-confirmation]');
      $item.data('initialized', 1);

      if($confirmationCheckBox.length == 0)
      {
        return;
      }

      var disableLink=function(e) {
        e.preventDefault();
        return false;
      };
      var disableDownloads=function() {
        $item.find('[data-download-link] a, [data-download-additional-link] a').each(function() {
          jQuery(this).addClass('disabled');
          jQuery(this).on('click', disableLink);
        });
      };
      var enableDownloads=function() {
        $item.find('[data-download-link] a, [data-download-additional-link] a').each(function() {
          jQuery(this).removeClass('disabled');
          jQuery(this).off('click', disableLink);
        });
      };

      $confirmationCheckBox.on('change', function() {
        if(this.checked)
        {
          enableDownloads();
        }
        else
        {
          disableDownloads();
        }
      });

      disableDownloads();

    });
  };

  init();

})();
var AvModules = AvModules || {};

AvModules.Faq=(function() {

  var init=function() {
    initLazyImage();
  };

  var initLazyImage=function() {
    // trigger lazy loading event on collapse
    jQuery(document).on('show.bs.collapse', function(){
      jQuery(document).trigger('lazy.faq.open');
    });
  };

  init();

  // Public API
  return {
    init:init
  };
})();
var AvModules = AvModules || {};

AvModules.Locations=(function() {

  var init=function() {

    if(typeof(google)=='undefined')
    {
      jQuery('[data-maps-trigger]').remove();
    }
    else
      initMap();
  };

  var initMap=function() {
    //show on map
    jQuery('[data-maps-trigger]').click(function(e) {
      e.preventDefault();

      // get address and title for marker infotext
      var address=jQuery(this).attr('data-location-address');
      var markerTitle=jQuery(this).attr('data-location-marker-title');
      var markerAddress=jQuery(this).attr('data-location-marker-address');

      // create map
      AvBasics.Util.GoogleMaps.openMapInFancybox(address, markerAddress, markerTitle);
    });
  };

  init();

  // Public API
  return {
    init:init
  };
})();
var AvModules = AvModules || {};
AvModules.Powermail = {};

//==============================================================================
// Util
//==============================================================================

AvModules.Powermail.Util = (function () {

  var requireField = function ($field) {
    $field.attr('required', 'required');
    $field.parents('.powermail_fieldwrap').find('.powermail_label .mandatory').remove();
    $field.parents('.powermail_fieldwrap').find('.powermail_label').append('<span class="mandatory">*</span>');
  };
  var unrequireField = function ($field) {
    $field.removeAttr('required');
    $field.parents('.powermail_fieldwrap').find('.powermail_label .mandatory').remove();
  };

  //Public API
  return {
    requireField: requireField,
    unrequireField: unrequireField
  };

})();


//==============================================================================
// DependsOn
//==============================================================================

AvModules.Powermail.PreventMultiSubmit = (function () {
  jQuery('[data-multisubmitthreshold]:not([data-multisubmitthreshold=""])').click(function (e) {
    var threshold = parseInt(jQuery(this).data('multisubmitthreshold')) || 0;
    if(threshold <= 0) {
      return;
    }
    var lastsubmit = jQuery(this).data('lastsubmit');
    var now = new Date();
    if (typeof (lastsubmit) !== 'undefined' && (now.getTime() - lastsubmit) < threshold) {
      //console.log('Blocking mulit submit');
      e.preventDefault();
      return false;
    }
    jQuery(this).data('lastsubmit', now.getTime());
  });
})();


//==============================================================================
// DependsOn
//==============================================================================

AvModules.Powermail.DependsOn = (function () {

  var init = function () {
    $elements = jQuery('[data-powermail-dependson-field-id]');
    if ($elements.length == 0) {
      return;
    }

    $elements.each(function () {
      var $element = jQuery(this);


      var $dependsOnElement = jQuery('[data-field-id="' + $element.data('powermail-dependson-field-id') + '"] .powermail_element');
      var $optionalDependsOnElement = jQuery('[data-field-id="' + $element.data('powermail-optional-dependson-field-id') + '"] .powermail_element');

      if ($dependsOnElement.length == 0) {
        return;
      }

      // if a field, an other field (optional) depends on, changes
      $dependsOnElement.add($optionalDependsOnElement).on('change', function () {

        var elementIsVisible = {
          byDependsOn: isElementVisibleByDependingElement($element, $dependsOnElement, $element.data('powermail-dependson-field-value'), false),
          byOptionalDependsOn: isElementVisibleByDependingElement($element, $optionalDependsOnElement, $element.data('powermail-optional-dependson-field-value'), true)
        };

        if (elementIsVisible.byDependsOn && elementIsVisible.byOptionalDependsOn) {
          showElement($element);
        }
        else {
          hideElement($element);
        }
      });

    });

  };

  var isElementVisibleByDependingElement = function ($element, $dependingElement, fieldValue, returnTrueIfDependingElementIsMissing) {

    if (($dependingElement.length == 0 || !$dependingElement.is(':visible')) && returnTrueIfDependingElementIsMissing) {
      return true;
    }

    if ($dependingElement.is(':checkbox')) {
      return fieldValue && $dependingElement.is(':checked');
    }
    else if ($dependingElement.is('select')) {
      return jQuery.inArray($dependingElement.val(), fieldValue.toString().split(',')) !== -1;
    }
    return true;
  };


  var showElement = function ($element) {
    $element.removeAttr('data-hidden');
  };
  var hideElement = function ($element) {
    AvBasics.Util.Form.resetElement($element, true);
    $element.attr('data-hidden', 1);

    // each field that depends on this field shall be hidden
    jQuery('[data-powermail-dependson-field-id="' + $element.data('field-id') + '"]').each(function () {
      hideElement(jQuery(this));
    });
  };

  init();

})();

//==============================================================================
// Service Request
//==============================================================================

AvModules.Powermail.ServiceRequest = (function () {

  var init = function () {
    initFNo();
    initValidation();
  };

  var initFNo = function () {
    var $elements = {
      a: jQuery('[data-powermail-field-servicerequest-fno]').find('.servicerequest_fno_a'),

      b: jQuery('[data-powermail-field-servicerequest-fno]').find('.servicerequest_fno_b'),
      hidden: jQuery('[data-powermail-field-servicerequest-fno]').find('.servicerequest_fno_value')
    };

    if ($elements.hidden.length == 0) {
      return;
    }

    var refreshHiddenValueByUserInput = function () {
      $elements.hidden.val($elements.a.val() + ' - ' + $elements.b.val());
    };
    var refreshInputByHiddenValue = function () {
      var value = $elements.hidden.val();
      if (!value || value.trim().length == 0) {
        $elements.a.val('');
        $elements.b.val('');
        return;
      }
      var valueParts = value.split('-');
      console.log(value, valueParts)
      $elements.a.val(valueParts[0].trim());
      $elements.b.val(valueParts[1].trim());
    };

    $elements.a.on('change', function () {
      refreshHiddenValueByUserInput();
    });
    $elements.b.on('change', function () {
      refreshHiddenValueByUserInput();
    });
    refreshInputByHiddenValue();
  };

  var initValidation = function () {

    // MandatoryTextValidator
    window.Parsley.addValidator(
      'custom100', function (value, requirement) {
        if (!AvBasics.Util.Validation.validateLength(value, 1, 40)) {
          return false;
        }
        return true;
      }, 32)
      .addMessage(jQuery('html').attr('lang'), 'custom100', 'Error');

    // MandatoryEmailValidator
    window.Parsley.addValidator(
      'custom101', function (value, requirement) {
        if (!AvBasics.Util.Validation.validateEmail(value)) {
          return false;
        }
        if (!AvBasics.Util.Validation.validateLength(value, 1, 40)) {
          return false;
        }
        return true;
      }, 32)
      .addMessage(jQuery('html').attr('lang'), 'custom101', 'Error');

    // MandatoryNumberValidator
    window.Parsley.addValidator(
      'custom102', function (value, requirement) {
        if (!AvBasics.Util.Validation.validateNumeric(value)) {
          return false;
        }
        if (!AvBasics.Util.Validation.validateLength(value, 1, 40)) {
          return false;
        }
        return true;
      }, 32)
      .addMessage(jQuery('html').attr('lang'), 'custom102', 'Error');

    // MandatoryPhoneValidator
    window.Parsley.addValidator(
      'custom103', function (value, requirement) {
        if (!AvBasics.Util.Validation.validatePhone(value)) {
          return false;
        }
        if (!AvBasics.Util.Validation.validateLength(value, 1, 40)) {
          return false;
        }
        return true;
      }, 32)
      .addMessage(jQuery('html').attr('lang'), 'custom103', 'Error');

    // ServiceRequest\AffectedQuantityValidator
    window.Parsley.addValidator(
      'custom104', function (value, requirement) {
        if (!AvBasics.Util.Validation.validateNumeric(value)) {
          return false;
        }
        if (!AvBasics.Util.Validation.validateLength(value, 0, 40)) {
          return false;
        }
        return true;
      }, 32)
      .addMessage(jQuery('html').attr('lang'), 'custom104', 'Error');

  };

  init();

})();

//==============================================================================
// Subject
//==============================================================================

AvModules.Powermail.Subject = (function () {

  var init = function () {
    var $contactsubject = {
      container: jQuery('[data-powermail-field-contactsubject]'),
      element: jQuery('[data-powermail-field-contactsubject]').find('select'),
      mandatoryfields: jQuery('[data-powermail-field-contactsubject-mandatoryfields]'),
      form: jQuery('[data-powermail-field-contactsubject]').parents('form')
    };

    if ($contactsubject.container.length == 0) {
      return;
    }

    var updateForm = function (subject) {

      var mandatoryFields = $contactsubject.mandatoryfields.filter('[name="powermail_field_contactsubject_' + subject + '"]').val();
      mandatoryFields = mandatoryFields ? mandatoryFields.split(',') : [];

      jQuery.each(mandatoryFields, function (key, value) {
        mandatoryFields[key] = 'tx_powermail_pi1[field][' + value + ']';
      });

      jQuery.each($contactsubject.form.find(':input[name^="tx_powermail_pi1[field]"]').not('[type="hidden"]'), function () {

        var $input = jQuery(this);

        if (typeof ($input.attr('name')) != 'undefined') {
          if (jQuery.inArray($input.attr('name'), mandatoryFields) > -1) {
            AvModules.Powermail.Util.requireField($input);
          }
          else {
            AvModules.Powermail.Util.unrequireField($input);
          }
        }
      });
    };

    $contactsubject.element.on('change', function () {
      updateForm(this.value);
    });
  };

  init();

})();

//==============================================================================
// Fair
//==============================================================================

AvModules.Powermail.Fair = (function () {

  var init = function () {
    initDates();
  };
  var afterAjax = function () {
  };

  var initDates = function () {
    var $form = jQuery('[data-powermail-form]');
    var $ajaxLoader = jQuery('[data-ajax-loader]');
    var $fairs = {
      select: {
        container: jQuery('[data-powermail-field-fair]'),
        element: jQuery('[data-powermail-field-fair]').find('select')
      }
    };
    var $days = {
      select: {
        container: jQuery('[data-powermail-field-fairday]'),
        element: jQuery('[data-powermail-field-fairday]').find('select')
      }
    };
    var $times = {
      select: {
        container: jQuery('[data-powermail-field-fairtime-select]'),
        element: jQuery('[data-powermail-field-fairtime-select]').find('select')
      },
      input: {
        container: jQuery('[data-powermail-field-fairtime-input]'),
        element: jQuery('[data-powermail-field-fairtime-input]').find('input')
      },
      selectedElement: null,
      hidden: {
        element: jQuery('#powermail_field_time')
      }
    };

    if ($fairs.select.container.length == 0) {
      return;
    }

    var refresh = function (fairUid) {
      var setOptions = function (options) {
        // day
        $days.select.element.find('option').not(':first').remove();
        jQuery.each(options.days, function (key, value) {
          $days.select.element.append(jQuery('<option></option>').attr('value', key).text(value));
        });

        // time
        $times.select.element.find('option').not(':first').remove();
        jQuery.each(options.times, function (key, value) {
          $times.select.element.append(jQuery('<option></option>').attr('value', key).text(value));
        });
      };
      var toggleFields = function () {

        if ($days.select.element.find('option').length > 1) {
          $days.select.container.show();
          if ($times.select.element.find('option').length > 1) {
            // days & times
            $times.select.container.show();
            $times.select.element.attr('required', 'required');
            $times.input.container.hide();
            $times.input.element.removeAttr('required').val('');
            $times.selectedElement = $times.select.element;
          }
          else {
            // days but not times ( -> show time textfield)
            $times.select.container.hide();
            $times.select.element.removeAttr('required').val(0);
            $times.input.container.show();
            $times.input.element.attr('required', 'required');
            $times.selectedElement = $times.input.element;
          }
        }
        else {
          // no days
          $days.select.container.hide();
          $times.select.container.hide();
          $times.input.container.hide();
          $times.selectedElement = null;
        }
      };

      if (fairUid) {
        $ajaxLoader.show();
        $days.select.container.hide();
        $times.select.container.hide();
        $times.input.container.hide();

        jQuery.ajax({
          type: "POST",
          url: '/en/?type=7900',
          data: {
            'tx_avneugart_fairajax[fair]': fairUid
          },
          success: function (resp) {
            $ajaxLoader.hide();
            var data = jQuery.parseJSON(resp);
            if (typeof (data) != 'undefined') {
              setOptions(data);
              toggleFields();
            }
          },
          error: function () {
            $ajaxLoader.hide();
          }
        });
      }
    };
    $fairs.select.element.on('change', function () {
      refresh(this.value);
    });
    refresh($fairs.select.element.val());

    $form.submit(function () {
      if ($times.selectedElement) {
        $times.hidden.element.val($times.selectedElement.val());
      }
      return true;
    });
  };

  init();

})();

//==============================================================================
// NcpDate
//==============================================================================
AvModules.Powermail.NcpDate = (function () {

  var init = function () {
    jQuery('#powermail_field_ncp').on('change', function (e) {
      var $ths = jQuery(this);
      var $currentOption = jQuery(this.options[this.selectedIndex]);

      // additional event
      var $additionalEventContainer = $ths.parents('.powermail_fieldset:eq(0)').find('.powermail_fieldwrap_additionalevent');
      var $additionalEventCheckbox = $additionalEventContainer.find('.powermail_checkbox');
      $additionalEventCheckbox.prop("checked", false);

      var $additionalEvent = $currentOption.data('additionalevent');
      if ($additionalEvent) {
        $additionalEventCheckbox.val($additionalEvent);
        $additionalEventContainer.find('label').text($additionalEvent);
        $additionalEventContainer.css('visibility', 'visible');
      }
      else {
        $additionalEventContainer.css('visibility', 'hidden');
      }

      // appointment options
      var $appointmentOptionsContainer = $ths.parents('.powermail_fieldset:eq(0)').find('.powermail_fieldwrap_appointmentoptions');
      var $appointmentOptionsSelect = $appointmentOptionsContainer.find('.powermail_select');
      $appointmentOptionsSelect.empty().append(new Option());

      var $appointmentOptions = $currentOption.data('appointmentoptions');
      if ($appointmentOptions) {
        jQuery.each($appointmentOptions.split('|'), function (val, text) {
          $appointmentOptionsSelect.append(new Option(text, text));
        });
        $appointmentOptionsContainer.css('visibility', 'visible');
      }
      else {
        $appointmentOptionsContainer.css('visibility', 'hidden');
      }

      // download link
      var $downloadContainer = $ths.parents('.powermail_fieldset:eq(0)').find('.powermail_fieldwrap_download');
      var $downloadLink = $downloadContainer.find('.ncp_description__download');

      var $downloadUrl = $currentOption.data('downloadurl');
      var $downloadTitle = $currentOption.data('downloadtitle');
      if ($downloadUrl && $downloadTitle) {
        $downloadLink.text($downloadTitle).attr('href', $downloadUrl);
        $downloadContainer.css('visibility', 'visible');
      }
      else {
        $downloadContainer.css('visibility', 'hidden');
      }

    }).trigger('change');
  };

  init();

})();

var AvModules=AvModules || {};

AvModules.Products={};

// ==============================================================================
// Finder
// ==============================================================================

// TODO: adjust $finder to new structure
AvModules.Products.finder=(function() {

  // properties
  var $finder=null;
  var details={};
  var $productCountElement=null;
  var $variantCountElement=null;
  var $resultButton=null;
  var $customButton=null;
  var $resetButton=null;
  var productIdent='.productlist .product_col';
  var variantIdent='.product__framesizes .framesize';
  var ajaxUrl='?type=7812&L=0';
  var inactiveClass='inactive';
  var cookieName='neugart_finder_used';

  // methods
  var init=function() {
    $finder=jQuery('[data-productfinder]');
    if($finder.length == 0)
      return;

    $productCountElement=$finder.find('.resultbutton .products');
    $variantCountElement=$finder.find('.resultbutton .variants');
    $resultButton=$finder.find('.resultbutton');
    $customButton=$finder.find('.custombutton');
    $resetButton=$finder.find('.resetbutton');

    // hide controls if there are no visible children
    jQuery('.productbranches__sector').each(function(){
      var $sectorCb=jQuery(this);
      if($sectorCb.find('.sector__children .sector__child').hasClass('hidden'))
        $sectorCb.addClass('productbranches__sector--nochildren');
    });

    // manage state of checkboxes
    $finder.find('.productbranches__sector--nochildren label span').on('click', function(){
      var label=jQuery(this).parent('label');
      var targetInput=jQuery('#'+label.attr('for'));
      if(targetInput.prop('checked')) {
        targetInput.prop('checked', false);
      }
      else
        targetInput.prop('checked', true);
      targetInput.trigger('change');
    });

    $finder.find('form input[type="checkbox"]').on('change', function() {
      var cb=jQuery(this);
      if(cb.data('toggle') && cb.data('target'))
      {
        if(cb.is(':checked'))
          jQuery(cb.data('target') + ' input[type="checkbox"]').prop('checked', 'checked');
        else
          jQuery(cb.data('target') + ' input[type="checkbox"]').removeAttr('checked');
      }
      else
      {
        var $parentCb=cb.parents('.productbranches__sector').find('input[type="checkbox"][data-toggle][data-target]');
        if(cb.is(':checked'))
        {
          var $siblings=cb.parents('.sector__children').find('input[type="checkbox"]');
          var $allSiblingsChecked=true;
          $siblings.each(function(){
            if(!jQuery(this).is(':checked'))
            {
              $allSiblingsChecked=false;
            }
          });
          if($allSiblingsChecked)
          {
            $parentCb.prop('checked', 'checked');
          }
          else
          {
            // return false;
          }
        }
        else
        {
          $parentCb.removeAttr('checked');
        }
      }
      sendFilterFormByInput(this);
      trackUsage();
    });
    
    // manage state of slider
    $finder.find('form input.slider').on('slideStop', function() {
      sendFilterFormByInput(this);
      trackUsage()
    });
    
    // reset form
    $resetButton.on('click', function() {
      var $form=jQuery(this).parents('form');
      $form[0].reset();
      $form.find('input.slider').each(function(){
        var value=jQuery(this).data('slider-value');
        jQuery(this).slider('setValue', value, true, true)
      });
      sendFilterForm($form);
    });

    // register mobile reset event
    $finder.find('#finder').on('resetForms', function(){
      jQuery('#finder .tab-content .active form .resetbutton').click();
    });

    // scroll to results
    $resultButton.on('click', function() {
      scrollToResults();
    });
    $customButton.on('click', function() {
      scrollToResults();
    });

    $finder.find('form').each(function(){
      sendFilterForm(jQuery(this));
    });
  };

  var trackUsage = function(){
    if(!AvBasics.Util.Cookie.get(cookieName))
    {
      if(typeof(dataLayer)!='undefined')
        dataLayer.push({event:'use_product_finder'});
      else
        AvBasics.Util.Log.log('track event: use_product_finder');

      if(AvBasics.Cookiebot.allowPreferenceCookies)
        AvBasics.Util.Cookie.set(cookieName, 1);
    }
  };

  var scrollToResults= function(){
    jQuery('html, body').stop().animate({
      scrollTop: jQuery('[data-product-extendedpropswitch]').first().offset().top - 50
    }, 1000);
  };

  var finish=function() {
    assignDetails();

    // don't display rows that don't contain any product
    $finder.find('.productlist:hidden').each(function(){
      jQuery(this).show();

      // add displayed rows to sitenav in the right order
      var category=jQuery(this).find('.productcategory__headline');
      var currentCategoryIndex=parseInt(category.attr('id').substr(-1));

      if(currentCategoryIndex==1)
      {
        jQuery('.navbox__content .ce-menu-1').prepend('<li id="anchorlink__'+category.attr("id")+'"><a href="#'+category.attr("id")+'">'+category.text()+'</a></li>');
      }
      else
      {
        var prevIndex=currentCategoryIndex-1;
        jQuery('#anchorlink__category'+prevIndex).after('<li id="anchorlink__'+category.attr("id")+'"><a href="#'+category.attr("id")+'">'+category.text()+'</a></li>');
      }

    });

    $finder.find('.productlist').each(function(){
      var rowIsEmpty=true;
      jQuery(this).find('.products [data-product]').each(function(){
        if(jQuery(this).is(':visible'))
        {
          rowIsEmpty=false;
          return false;
        }
      });

      if(rowIsEmpty)
      {
        jQuery(this).hide();

        // remove empty rows from sitenav
        jQuery('#anchorlink__'+jQuery(this).find('.productcategory__headline').attr('id')).remove();
      }

      // hide sitenav-trigger if sitenav is empty
      if(jQuery('.navbox__content .ce-menu-1 > li').length)
        jQuery('.navbox__controlgroup--anchorlist').show();
      else
        jQuery('.navbox__controlgroup--anchorlist').hide();

      jQuery(document).trigger('productfilter.loaded');
    });
  };

  var assignDetails=function() {

    $finder.find(productIdent).hide();
    for(i=0; i < details.length; i++)
    {
      var prodIdent=productIdent + '[data-product="' + details[i]['product'] + '"]';
      $finder.find(prodIdent).show();

      var varIdent=prodIdent + ' ' + variantIdent;
      $finder.find(varIdent).addClass(inactiveClass);

      for(j=0; j < details[i]['variants'].length; j++)
      {
        $finder.find(varIdent + '[data-framesize="' + details[i]['variants'][j] + '"]').removeClass(inactiveClass);
      }
    }
  };

  var sendFilterFormByInput=function(elem) {
    var $data=jQuery(elem.form).serialize();
    doAjax('&' + $data);
  };
  
  var sendFilterForm=function($elem) {
    var $data=$elem.serialize();
    doAjax('&' + $data);
  };

  var doAjax=function(data) {
    var settings={
      type:'post',
      data:data,
      cache:false,
      success:function(resp) {
        processSuccess(resp);
      },
      error:function(resp) {
        processError(resp);
      }
    };
    jQuery.ajax(ajaxUrl, settings);
  };

  var processSuccess=function(response) {
    var data=JSON.parse(response);
    if(typeof (data) != 'undefined')
    {
      details=data.details;
      $productCountElement.html(data.products);
      $variantCountElement.html(data.variants);
      if(data.products==0)
      {
        $resultButton.hide();
        $customButton.show();
      }
      else
      {
        $customButton.hide();
        $resultButton.show();
      }
      finish();
    }
  };

  var processError=function(response) {
    AvBasics.Util.Log.log('AJAX ERROR:');
    AvBasics.Util.Log.log(response);
  };

  // self init
  init();

  // return
  // return {
  // somePublicMethod:somePublicMethod // now you can call
  // AvModules.Products.finder.somePublicMethod(); while somePrivateMethod wont
  // go
  // };
})();


AvModules.Products.highlighter=(function() {

  // properties
  var $elements=null;
  var productIdent='.product_col';
  var variantIdent='.product__framesizes .framesize';
  var ajaxUrl='?type=7813&L=0';
  var inactiveClass='inactive';

  var init=function(){
    $elements=jQuery('[data-product-highlight]');
    if($elements.length==0)
      return;

    doAjax();
  };

  var doAjax=function() {
    var settings={
      type:'get',
      cache:false,
      success:function(resp) {
        processSuccess(resp);
      },
      error:function(resp) {
        processError(resp);
      }
    };
    jQuery.ajax(ajaxUrl, settings);
  };

  var processSuccess=function(response){
    var data=JSON.parse(response);
    var details=data.details;

    $elements.find(productIdent).hide();
    for(i=0; i < details.length; i++)
    {
      var prodIdent=productIdent + '[data-product="' + details[i]['product'] + '"]';
      $elements.find(prodIdent).show();

      var varIdent=prodIdent + ' ' + variantIdent;
      $elements.find(varIdent).addClass(inactiveClass);

      for(j=0; j < details[i]['variants'].length; j++)
      {
        $elements.find(varIdent + '[data-framesize="' + details[i]['variants'][j] + '"]').removeClass(inactiveClass);
      }
    }

    var $relatedOwl=jQuery('.productwidget.related .owl-carousel');
    var relatedOwl=$relatedOwl.data('owlCarousel');

    if(typeof(relatedOwl)!='undefined' && relatedOwl.items().length>0)
    {
      var items=relatedOwl.items();
      var initCount=items.length;
      var removedItemCount=0;
      for(var i=0; i<items.length; i++)
      {
        var item=relatedOwl.items(i);
        if(!item.find('.product_col').is(':visible')) {
          // AvBasics.Util.Log.log('remove because it is not visible: '+i);
          item.remove();
          removedItemCount++;
        }
      }

      if(removedItemCount==initCount) {
        $relatedOwl.parent('.productwidget').parent('.contentelement').hide();
      }
      else {
        // destroy owl completely and reinit it
        $relatedOwl.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
        $relatedOwl.find('.owl-stage-outer').children().unwrap();
        $relatedOwl.owlCarousel($relatedOwl.data('av_teasercollection_owl_options'));
      }

    }

  };

  var processError=function(response){
    AvBasics.Util.Log.log('AJAX ERROR:');
    AvBasics.Util.Log.log(response);
  };

  init();

})();


AvModules.Products.variantmarker=(function() {

  var highlightClass='highlight';

  var init= function(){
    var $elements=jQuery('[data-techdatatable]');
    if($elements.length==0)
      return;

    doHighlight();

    jQuery('[data-framesize-switch]').on('click', function() {
      doHighlight(getVariantCodeFromHash(jQuery(this).find('a').attr('href')));
    });

  };

  var doHighlight = function(variantCode)
  {
    if(typeof(variantCode)=='undefined')
      variantCode=getVariantCodeFromHash(document.location.hash);

    jQuery('.'+highlightClass).removeClass(highlightClass);
    var $frameSize=jQuery('[data-framesize-'+variantCode+']');
    $frameSize.addClass(highlightClass);

    if($frameSize.data('tdf-url')!=undefined)
    {
      jQuery('[data-variant-tdflink]').attr('href', $frameSize.data('tdf-url'));
    }

  };

  var getVariantCodeFromHash = function(url){
    var link=getLocation(url);
    return link.hash.replace(/#[a-z]*/i, '');
  };

  var getLocation = function(url){
    var l=document.createElement('a');
    l.href=url;
    return l;
  };

  init();

})();


AvModules.Products.unitswitch=(function() {
  var init = function () {

    /*************/
    /* VARIABLES */
    /*************/
    var $switcher = jQuery('[data-product-unitswitch] > input');
    var $labelActive = jQuery('.switch__label > .label--active');
    var $labelInactive = jQuery('.switch__label > .label--inactive');

    /****************/
    /* TOGGLE UNITS */
    /****************/

    // automatically change label Text to attribute property
    if($switcher.attr('data-replacelabels') == "true"){
      $labelActive.text($switcher.attr('data-value-active'));
      $labelInactive.text($switcher.attr('data-value-inactive'));
    }
    
    // switch between units
    $switcher.change(function () {
      if(this.checked){
        switchToUnit($switcher.attr('data-value-active'));
        $switcher.prop('checked', true);
      } else {
        switchToUnit($switcher.attr('data-value-inactive'));
        $switcher.prop('checked', false);
      }
    });
    
    // init unit
    if(jQuery('main').hasClass('global__unit--metric')){
      if($switcher.data('value-active')=='metric')
      {
        $switcher.prop('checked', true);
      }
      else
      {
        $switcher.prop('checked', false);
      }
    }
    else
    {
      if($switcher.data('value-active')=='imperial')
      {
        $switcher.prop('checked', true);
      }
      else
      {
        $switcher.prop('checked', false);
      }
    }
  };
  
  var switchToUnit = function(unit){
    jQuery('[data-unit]').css({display:"none"});
    jQuery('[data-unit="'+unit+'"]').css({display:"block"});
    jQuery('table.legend [data-unit="'+unit+'"]').css({display:"inline"});
  };

  init();

})();


AvModules.Products.extendedviewswitch=(function() {
  var init = function () {

    /*************/
    /* VARIABLES */
    /*************/
    var $switcher = jQuery('[data-product-extendedpropswitch] > input');
    var $labelActive = jQuery('.extendedpropswitcher__label > .label--active');
    var $labelInactive = jQuery('.extendedpropswitcher__label > .label--inactive');

    /****************/
    /* TOGGLE UNITS */
    /****************/

    // automatically change label Text to attribute property
    if($switcher.attr('data-replacelabels') == "true"){
      $labelActive.text($switcher.attr('data-value-active'));
      $labelInactive.text($switcher.attr('data-value-inactive'));
    }
    // switch between units
    $switcher.change(function () {
      if(this.checked){
        jQuery('[data-product-extendeddata]').slideDown();
      } else {
        jQuery('[data-product-extendeddata]').slideUp();
      }
    });
  };

  init();

})();


AvModules.Products.toggletables=(function() {
  var $switcher=null;
  var activeClass='toggletables--open';

  var init = function () {
    // check if toggler are at the page
    $switcher = jQuery('[data-product-toggletables]');
    if($switcher.length==0)
      return;

    // toggle
    $switcher.on('click', function () {
      var $switch=jQuery(this);
      var checked=$switch.data('checked');
      if(checked)
        deActivateSwitcher($switch);
      else
        activateSwitcher($switch);

      $switch.parents('.contentelement, .frame').find('.accordion-toggle').each(function(){
        var $accordion=jQuery(this);
        if($accordion.hasClass('collapsed') && !checked) {
          $accordion.click();
        }
        else if(!$accordion.hasClass('collapsed') && checked) {
          $accordion.click();
        }
      });
      return false;
    });

    jQuery('.techdata [data-toggle="collapse"]').on('click', function(e){

      // do not trigger if toggle all was clicked
      if(e.originalEvent==undefined)
        return true;

      // set a little timeout that classes are set correctly
      $contentElem=jQuery(this).parents('.contentelement');
      window.setTimeout(function(){
        var open=0;
        var close=0;
        $contentElem.find('[data-toggle="collapse"]').each(function(){
          if(jQuery(this).hasClass('collapsed'))
            open++;
          else
            close++;
        });
        if(open==0)
          activateSwitcher($contentElem.find('[data-product-toggletables]'));
        else
          deActivateSwitcher($contentElem.find('[data-product-toggletables]'));
      }, 100)
    });
    return false;

  };

  var activateSwitcher = function($switch){
    $switch.data('checked', 1);
    $switch.addClass(activeClass);
  };
  var deActivateSwitcher = function($switch){
    $switch.data('checked', 0);
    $switch.removeClass(activeClass);
  };


  init();

})();
var AvModules = AvModules || {};


AvModules.Search = function () {

  var $elements = jQuery('[data-search-autocomplete]');
  if ($elements.length == 0)
    return;

  var init = function () {

    $elements.each(function () {
      var $self = jQuery(this);
      $self.autocomplete({
        source: $self.data('url'),
        html: true
      }).data('ui-autocomplete')._renderItem = function (ul, item) {
        return $('<li>')
          .append(item.content)
          .appendTo(ul);
      };
    });
  };
  init();
}();


var loginOverlay={
  $overlayBox: null
};

loginOverlay.open=function() {
  this.$overlayBox.addClass('login__oververlay--hover');
};

loginOverlay.close=function() {
  this.$overlayBox.removeClass('login__oververlay--hover');
};

loginOverlay.toggle=function() {
  this.$overlayBox.toggleClass('login__oververlay--hover');
};


function onLoginSuccess() {
  var $box=jQuery('.login__oververlay');

  loginOverlay.$overlayBox=$box;

  $box
    .mouseover(function() {
      loginOverlay.open();
    });

  jQuery('[data-toggle="header-login"]')
    .on('click', function() {
      if(window.innerWidth<992) {
        // mobile
        loginOverlay.toggle();
      } else {
        // desktop
        $box.find('.logout__wishlistlink').click();
      }
    })
    .hover(function(e) {

      if(!jQuery(this).find('.dropdown__box--bookmark').length) {
        loginOverlay.open();
      }
    }, function() {
      loginOverlay.close();
    });


}

function lockAjaxForm($form) {
  var $submitButton=$form.find('[type="submit"]');

}

function handleAjaxForm($form) {
  var $container=jQuery('.login_box_ajaxcontainer');
  var $refreshUrl=jQuery('[data-felogin-refresh-url]');
  var $loginPages=jQuery('.history,.tdf__registration');

  $container.addClass('ajax-loading');

  jQuery.post($form.attr('action'), $form.serialize(), function(data) {

    $container.html(data);
    $container.removeClass('ajax-loading');

    var $error=$container.find('.error');
    if($error.length===0) {
      if($refreshUrl.length > 0 && $loginPages.length>0 ){
        window.location.href=$refreshUrl.attr('data-felogin-refresh-url')
      }
      else{
        window.location.reload();
      }
    }
  });

  return false;
}

var AvModules=AvModules || {};

AvModules.Digitalbox=function(){
  var $digitalbox=jQuery('[data-digitalbox]');
  if($digitalbox.length==0)
    return;
  var $form;
  var loadingIndicatorClass='loading';

  var init=function(){
    loadForm();
  };

  var initForm=function(){
    $digitalbox=jQuery('[data-digitalbox]');
    $form=$digitalbox.find('form');
    $form.find('[type="submit"]').one('click', function(){
      sendForm();
      return false;
    });
    disableLoading();
  };

  var loadForm=function(){
    enableLoading();
    jQuery.ajax({
      method: 'GET',
      url:$digitalbox.data('ajaxbaseurl')+'/?type=6891',
      success:function(response){
        $digitalbox.html(response);
        initForm();
      }
    });
  };

  var sendForm=function(){
    enableLoading();
    jQuery.ajax({
      method: 'POST',
      url:$form.attr('action'),
      data:$form.serialize(),
      success:function(response){
        $digitalbox.html(response);
        initForm();
      }
    });
  };

  var enableLoading=function(){$digitalbox.addClass(loadingIndicatorClass)};
  var disableLoading=function(){$digitalbox.removeClass(loadingIndicatorClass)};

  init();
}();

jQuery(document).ready(function() {    jQuery(document).trigger('av.fancybox.beforeInit');
    jQuery('a.fancybox').fancybox({
      groupAttr: 'data-fancybox-group',
      beforeShow: function(opts) {
        this.title = (jQuery(this.group[this.index]).attr('title') != undefined ? jQuery(this.group[this.index]).attr('title') : jQuery(this.group[this.index]).find('img').attr('title'));
      },
      helpers: {
        overlay: {
          locked: false
        }
      }
    });  jQuery('.slider').slider({});
  
  jQuery('.extended-properties-switch').on('change', function(){
    if(jQuery(this).is(':checked'))
      jQuery('.extended-properties').slideDown();
    else
      jQuery('.extended-properties').slideUp();
  });});jQuery('[data-filerendering-video]').videoProcessing();