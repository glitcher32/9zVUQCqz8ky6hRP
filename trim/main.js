!function(e){Math.abs,Math.max,Math.min;var t=Math.round;function n(e){var t=document.createElement("div");return t.setAttribute("data-tag",e),t}function o(e,t,n){return n<e?e:n>t?t:n}function i(e,t,n){for(var o in e){e[o].style[t]=n}}function l(e,t,n){e.style[t]=n}function a(e,t){for(var n in e){e[n].classList.add(t)}}function r(e,t,n){e.addEventListener(t,n)}function s(e,t){for(var n in e){var o=e[n];t.appendChild(o)}}function u(e,t){t.appendChild(e)}function d(e){var t=e.getBoundingClientRect(),n=c();return{top:t.top+n.top,left:t.left+n.left,width:t.right-t.left,height:t.bottom-t.top}}function c(){return{top:e.scrollY||e.scrollTop||document.getElementsByTagName("html")[0].scrollTop,left:e.scrollX||e.scrollLeft||document.getElementsByTagName("html")[0].scrollLeft}}e.scrollY||e.scrollTop||document.getElementsByTagName("html")[0].scrollTop;e.lAreaSelector=function(e,m){var p,f=function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}({classPrefix:"areaselect",zIndex:100,onSelectChange:function(){}},m),g=!1,h=document.getElementById(e),y=10,v=n("box"),I=n("area"),E={left:n("left"),right:n("right"),top:n("top"),bottom:n("bottom")},x={"left-top":n("left-top"),"mid-top":n("mid-top"),"right-top":n("right-top"),"mid-left":n("mid-left"),"mid-right":n("mid-right"),"left-bottom":n("left-bottom"),"mid-bottom":n("mid-bottom"),"right-bottom":n("right-bottom")},B={x1:0,y1:0,x2:0,y2:0,width:0,height:0},w="",b={x:0,y:0};function k(){return B}function T(e,t,n,i){return B.x1=o(0,p.width,e),B.y1=o(0,p.height,t),B.x2=o(e,p.width,e+n),B.y2=o(t,p.height,t+i),B.width=B.x2-B.x1,B.height=B.y2-B.y1,S(),B}function L(e){return e.toElement.hasAttribute("data-tag")&&(w=e.toElement.getAttribute("data-tag")),e.preventDefault(),e.stopPropagation(),!0}function F(e){w="area";var t=c(),n=e.clientX+t.left-p.left,o=e.clientY+t.top-p.top;b.x=n,b.y=o}function _(e){console.log("mouse:"+w);var t=c(),n=k(),i=e.clientX+t.left-p.left,l=e.clientY+t.top-p.top;if("area"==w)T(a=o(0,p.width-n.width,n.x1+i-b.x),r=o(0,p.height-n.height,n.y1+l-b.y),n.width,n.height),b.x=i,b.y=l;else if("left-top"==w)T(a=o(0,n.x2-y,i-y/2),r=o(0,n.y2-y,l-y/2),n.x2-a,n.y2-r);else if("mid-top"==w)T(a=n.x1,r=o(0,n.y2-y,l-y/2),n.x2-a,n.y2-r);else if("right-top"==w)T(a=n.x1,r=o(0,n.y2-y,l-y/2),(s=o(n.x1+y,p.width,i+y/2))-a,(u=n.y2)-r);else if("mid-left"==w)T(a=o(0,n.x2-y,i-y/2),r=n.y1,(s=n.x2)-a,(u=n.y2)-r);else if("mid-right"==w)T(a=n.x1,r=n.y1,(s=o(n.x1+y,p.width,i+y/2))-a,(u=n.y2)-r);else if("left-bottom"==w)T(a=o(0,n.x2-y,i-y/2),r=n.y1,(s=n.x2)-a,(u=o(n.y1+y,p.height,l+y/2))-r);else if("mid-bottom"==w){var a,r;T(a=n.x1,r=n.y1,(s=n.x2)-a,(u=o(n.y1+y,p.height,l+y/2))-r)}else if("right-bottom"==w){var s=o(n.x1+y,p.width,i+y/2),u=o(n.y1+y,p.height,l+y/2);T(n.x1,n.y1,s-n.x1,u-n.y1)}}function C(e){w=""}function S(){p=d(h),l(v,"top",p.top+"px"),l(v,"left",p.left+"px"),l(v,"width",p.width+"px"),l(v,"height",p.height+"px"),l(I,"top",B.y1+"px"),l(I,"left",B.x1+"px"),l(I,"width",B.width+"px"),l(I,"height",B.height+"px"),l(x["left-top"],"top","0px"),l(x["left-top"],"left","0px"),l(x["mid-top"],"top","0px"),l(x["mid-top"],"left",t(B.width/2-y/2)+"px"),l(x["right-top"],"top","0px"),l(x["right-top"],"left",B.width-y+"px"),l(x["mid-left"],"top",t(B.height/2-y/2)+"px"),l(x["mid-left"],"left","0px"),l(x["mid-right"],"top",t(B.height/2-y/2)+"px"),l(x["mid-right"],"left",B.width-y+"px"),l(x["left-bottom"],"top",t(B.height-y)+"px"),l(x["left-bottom"],"left","0px"),l(x["mid-bottom"],"top",t(B.height-y)+"px"),l(x["mid-bottom"],"left",t(B.width/2-y/2)+"px"),l(x["right-bottom"],"top",t(B.height-y)+"px"),l(x["right-bottom"],"left",B.width-y+"px"),l(E.left,"top","0px"),l(E.left,"left","0px"),l(E.left,"width",B.x1+"px"),l(E.left,"height",p.height+"px"),l(E.right,"top","0px"),l(E.right,"left",B.x2+"px"),l(E.right,"width",p.width-B.x2+"px"),l(E.right,"height",p.height+"px"),l(E.top,"top","0px"),l(E.top,"left",B.x1+"px"),l(E.top,"width",B.width+"px"),l(E.top,"height",B.y1+"px"),l(E.bottom,"top",B.y2+"px"),l(E.bottom,"left",B.x1+"px"),l(E.bottom,"width",B.width+"px"),l(E.bottom,"height",p.height-B.y2+"px"),f.onSelectChange(k())}this.hide=function(){v.style.display="none"},this.show=function(){var e,t;v.style.display="block",g||(p=d(h),B.x1=o(0,p.width,15),B.y1=o(0,p.height,15),B.x2=o(B.x1,p.width,p.width-15),B.y2=o(B.y1,p.height,p.height-15),B.width=B.x2-B.x1,B.height=B.y2-B.x1,s(x,I),u(I,v),s(E,v),u(v,document.querySelector("body")),a(x,f.classPrefix+"-handle"),i(x,"position","absolute"),i(x,"fontSize",0),i(x,"zIndex",f.zIndex+1||1),i(x,"width","10px"),i(x,"height","10px"),l(x["left-top"],"cursor","nw-resize"),l(x["mid-top"],"cursor","n-resize"),l(x["right-top"],"cursor","ne-resize"),l(x["mid-left"],"cursor","e-resize"),l(x["mid-right"],"cursor","e-resize"),l(x["left-bottom"],"cursor","ne-resize"),l(x["mid-bottom"],"cursor","n-resize"),l(x["right-bottom"],"cursor","nw-resize"),l(v,"visibility",""),l(v,"zIndex",f.zIndex),l(v,"position","absolute"),i(E,"visibility",""),a(E,f.classPrefix+"-outer"),i(E,"position","absolute"),e=I,t=f.classPrefix+"-selection",e.classList.add(t),l(I,"position","absolute"),l(I,"cursor","move"),function(e,t,n){for(var o in e)e[o].addEventListener(t,n)}(x,"mousedown",L),r(I,"mousedown",F),r(v,"mousemove",_),r(v,"mouseup",C),g=!0),S()},this.getSelection=k,this.setSelection=T}}(window);var last1msg="",last2msg="";function serializeForm(e){var t=document.getElementById(e);if(!t||"FORM"!==t.nodeName)return[];var n,o,i=[];for(n=t.elements.length-1;n>=0;n-=1)if(""!==t.elements[n].id||""!==t.elements[n].name)switch(t.elements[n].nodeName){case"INPUT":switch(t.elements[n].type){case"text":case"hidden":case"password":case"button":case"reset":case"submit":i.push(t.elements[n].id+"="+encodeURIComponent(t.elements[n].value));break;case"checkbox":case"radio":t.elements[n].checked&&i.push(t.elements[n].name+"="+encodeURIComponent(t.elements[n].value))}break;case"TEXTAREA":i.push(t.elements[n].name+"="+encodeURIComponent(t.elements[n].value));break;case"SELECT":switch(t.elements[n].type){case"select-one":i.push(t.elements[n].id+"="+encodeURIComponent(t.elements[n].value));break;case"select-multiple":for(o=t.elements[n].options.length-1;o>=0;o-=1)t.elements[n].options[o].selected&&i.push(t.elements[n].name+"="+encodeURIComponent(t.elements[n].options[o].value))}break;case"BUTTON":t.elements[n].type}return i}function getInputValueById(e){return document.getElementById(e).value}function getInputIntValueById(e){return parseInt(document.getElementById(e).value)}function setInputValueById(e,t){document.getElementById(e).value=t}function getRadioInputValueByName(e){for(var t=document.getElementsByName(e),n=0,o=t.length;n<o;n++)if(t[n].checked)return t[n].value;return""}function outputInfo(e){document.getElementById("outputArea").innerHTML=e}function outputInfoToEl(e,t){document.getElementById(e).innerHTML=t}function openTab(e,t){var n,o,i;for(o=document.getElementsByClassName("tabcontent"),n=0;n<o.length;n++)o[n].style.display="none";for(i=document.getElementsByClassName("tablinks"),n=0;n<i.length;n++)i[n].className=i[n].className.replace(" active","");document.getElementById(t).style.display="block",e.currentTarget.className+=" active"}function getActiveTab(){var e,t;for(t=document.getElementsByClassName("tabcontent"),e=0;e<t.length;e++)if("block"==t[e].style.display)return t[e].id}function openTab2(e,t){var n,o,i;for(o=document.getElementsByClassName("tabcontent2"),n=0;n<o.length;n++)o[n].style.display="none";for(i=document.getElementsByClassName("tablinks2"),n=0;n<i.length;n++)i[n].className=i[n].className.replace(" active","");document.getElementById(t).style.display="block",e.currentTarget.className+=" active",funTabActive(t),curTabName=t}function getActiveTab2(){var e,t;for(t=document.getElementsByClassName("tabcontent2"),e=0;e<t.length;e++)if("block"==t[e].style.display)return t[e].id}function outputCMDlog(e){}function SecondsTotime(e){var t=new Date(0);return t.setMilliseconds(1e3*e),t.toISOString().substr(11,12)}function setElHtml(e,t){document.getElementById(e).innerHTML=t}function setElClick(e,t){document.getElementById(e).addEventListener("click",t)}function setElobClick(e,t){e.addEventListener("click",t)}function makeElClick(e){document.getElementById(e).click()}function getInputValueById(e){return document.getElementById(e).value}function setInputValueById(e,t){document.getElementById(e).value=t}function setEleEventByClass(e,t,n){for(var o=document.getElementsByClassName(e),i=0;i<o.length;i++)o[i].addEventListener(t,n,!1)}function setEleEventByID(e,t,n){document.getElementById(e).addEventListener(t,n)}function setClassElClick(e,t){for(var n=document.getElementsByClassName(e),o=0;o<n.length;o++)n[o].addEventListener("click",t,!1)}function timeToSeconds(e){var t=e.split(":");return 60*parseFloat(t[0])*60+60*parseFloat(t[1])+parseFloat(t[2])+parseFloat("0."+t[3])}function video_convertAd(e,t,n,o,i,l,a){var r,s,u="input."+n.split(".").pop(),d=/Duration: (.*?), /,c=/time=(.*?) /,m=/([0-9]{1,3}) fps/,p=/frame=(\s*[0-9]+) /;"webm"==e.toLowerCase()?audioworker=new Worker("/js/ff-worker.php?outputFormat="+e):audioworker=new Worker("/js/ff-worker-wasm.php?outputFormat="+e),audioworker.onmessage=function(e){var t=e.data;if("ready"===t.type&&window.File&&window.FileList&&window.FileReader);else if("stdout"==t.type){if(console.log(t.data),outputCMDlog(t.data),a())return audioworker.terminate(),void l("")}else if("stderr"==t.type){if(console.log(t.data),outputCMDlog(t.data),a())return audioworker.terminate(),void l("");if(r||d.exec(t.data)&&(r=timeToSeconds(d.exec(t.data)[1])),s||m.exec(t.data)&&(s=parseInt(m.exec(t.data)[1])),s&&r&&p.exec(t.data)){var n=parseInt(p.exec(t.data)[1]);i(n/(r*s)*100)}else if(c.exec(t.data)){var o=timeToSeconds(c.exec(t.data)[1]);r&&i(o/r*100)}}else if("onExit"==t.type)t.outputFile.byteLength>0?l(t.outputFile,t.outFileName):l(null);else if("done"==t.type)if(t.data.length>0){var u=t.data.code,f=Object.keys(t.data.outputFiles);if(0==u&&f.length>0&&t.data.outputFiles[f[0]].byteLength>0){var g=f[0],h=t.data.outputFiles[g];l(h,g)}else l(null)}else l(null)};var arguments;arguments=(o=o.replace("INPUT",u)).split(" "),audioworker.postMessage({type:"command",arguments:arguments,files:[{name:u,data:t}]}),t=null}function formatChange(curEncoder){var xhr=new XMLHttpRequest,url="/formatset.php?format="+curEncoder;xhr.open("GET",url),xhr.onload=function(){if(200===xhr.status){var x=xhr.responseText,xset=document.getElementById("formatSetDiv");eval(x)}else console.log("Request failed.  Returned status of "+xhr.status)},xhr.send()}function g_formatChange(curEncoder){var xhr=new XMLHttpRequest,url="/g_formatset.php?format="+curEncoder;xhr.open("GET",url),xhr.onload=function(){if(200===xhr.status){var x=xhr.responseText,xset=document.getElementById("formatSetDiv");eval(x)}else console.log("Request failed.  Returned status of "+xhr.status)},xhr.send()}function btnFormat_Click(){formatChange(getRadioInputValueByName("format"))}function g_btnFormat_Click(){g_formatChange(getRadioInputValueByName("g_format"))}function btnResolution_Click(){setInputValueById("reseize_vsize",getRadioInputValueByName("resolution"))}function btnFPS_Click(){setInputValueById("reseize_vfps",getRadioInputValueByName("fps"))}function getDuration(e,t){var n=/Duration: (.*?), /,o="",i=getRadioInputValueByName("format"),l=new Worker("/js/ff-worker.php?outputFormat="+i);l.onmessage=function(e){var i=e.data;"ready"===i.type&&window.File&&window.FileList&&window.FileReader||("stdout"==i.type?(console.log("stdout:"),console.log(i.data)):"stderr"==i.type?(console.log("stderr:"),console.log(i.data),n.exec(i.data)&&(o=timeToSeconds(n.exec(i.data)[1]))):"done"==i.type&&t(o))};var arguments,a="input."+i;(arguments=[]).push("-i"),arguments.push(a),l.postMessage({type:"command",arguments:arguments,files:[{name:a,data:e}]})}function getBriate(e,t,n){return(8192*parseFloat(t)/e-parseInt(n)).toFixed(2).toString()+"k"}function rangeSlider(e,t){var n,o,i=document.getElementById(e),l=i.children[0],a=10,r=!1;function s(e){r&&e.pageX>=o&&e.pageX<=o+n&&(l.style.left=e.pageX-o-a+"px","function"==typeof t&&t(Math.round((e.pageX-o)/n*100)))}l.style.width=a+"px",l.style.left=i.offsetWidth-a+"px",l.style.marginLeft=a/2+"px",i.addEventListener("mousedown",function(e){return n=this.offsetWidth,o=this.offsetLeft,r=!0,s(e),!1}),document.addEventListener("mousemove",function(e){s(e)}),document.addEventListener("mouseup",function(){r=!1})}function setStartTime(e){document.getElementById("vcutstart").value=SecondsTotime(e)}function setEndTime(e){document.getElementById("vcutsend").value=SecondsTotime(e)}function generateThumbs(){document.getElementById("trimBar").style.display="block";var e=document.getElementById("thumbsBar");e.innerHTML="";var t,n=e.clientWidth,o=gVDuration,l=Math.ceil(n/80),a=o/l;for(i=0;i<l;i++){var r=document.createElement("video");0==i&&(t=r),r.preload="metadata",r.width=80,r.ptime=(i*a).toString(),e.appendChild(r)}gLoadIndex=0,t.addEventListener("canplay",function(){var e=document.getElementById("thumbsBar").getBoundingClientRect();document.getElementById("trimBar").style.height=e.height+20+"px",document.getElementById("posLine").style.height=e.height+"px",document.getElementById("posLine").style.left=e.width/2+"px",document.getElementById("leftPos").style.height=e.height+"px",document.getElementById("leftPos").style.left="0px",document.getElementById("leftMask").style.height=e.height+"px",document.getElementById("leftMask").style.left="0px",document.getElementById("leftMask").style.width="0px",document.getElementById("rightPos").style.height=e.height+"px",document.getElementById("rightPos").style.left=e.width-4+"px",document.getElementById("rightMask").style.height=e.height+"px",document.getElementById("rightMask").style.left=e.width-4+"px",document.getElementById("rightMask").style.width="0px",setStartTime(0),setEndTime(gVDuration),checkLoadThumb(this.nextSibling)}),t.src=gfileURL+"#t="+t.ptime}function checkLoadThumb(e){null!=e&&(e.addEventListener("canplay",function(){checkLoadThumb(this.nextSibling)}),e.src=gfileURL+"#t="+e.ptime)}function funTabActive(e){if("fun_crop"==e?inputFile&&lareaSelector.show():lareaSelector.hide(),"fun_cut"==e&&inputFile&&gfileURL&&""==document.getElementById("thumbsBar").innerHTML&&generateThumbs(),"fun_compress"==e&&inputFile){var t=(gFileSize/1024/1024).toFixed(2);if(""==getInputValueById("vfilesize")){setInputValueById("vfilesize",t+"M");var n=document.getElementById("outFileSize");n.children[0].style.left=n.offsetWidth-10+"px"}}}function cancel_converter(){return gCancelProcess}function loadOtherFormatVideo(e,t,n){var o=new FileReader;o.onload=function(o){var i=this.result,l=new Uint8Array(i);i=null,this.result=null;gCancelProcess=!1,video_convertAd("mp4",l,e.name,"-i INPUT -ab 128k -ar 48000 -ac 2 -c:a libmp3lame -c:v libx264 -x264opts cabac=1:ref=2:subme=6:me_range=16:chroma_me=1:trellis=1:chroma_qp_offset=-2:bframes=3:b_pyramid=2:b_adapt=1:b_bias=0:weightb=1:open_gop=0:weightp=1:keyint=250:keyint_min=15:scenecut=40:intra_refresh=0:rc_lookahead=30:mbtree=1:qpmax=69:qpstep=4 output.MP4",function(e){var n=rangeValue(0,100,e);outputInfoToEl(t,str_readingFile+" <i class='fa fa-spin5 animate-spin'></i>"+toDecimal2(n)+"%")},function(e,o){if(""==e)outputInfoToEl(t,"");else if(e){var i=new Blob([e]),a=window.URL.createObjectURL(i);n(a),e=null,i=null}else outputInfoToEl(t,"<i class='fa fa-info-circled-alt'></i>"+str_convertFailed);l=null},cancel_converter),l=null},o.readAsArrayBuffer(e)}function rangeValue(e,t,n){return n<e?e:n>t?t:n}function toDecimal2(e){var t=parseFloat(e);if(isNaN(t))return!1;var n=(t=Math.round(100*e)/100).toString(),o=n.indexOf(".");for(o<0&&(o=n.length,n+=".");n.length<=o+2;)n+="0";return n}function debounce(e){var t;return function(n){t&&clearTimeout(t),t=setTimeout(e,100,n)}}!function(e){e.lModalBox=function(){this.init=function(e,t){this.elID=e,this.className=t;var n=document.querySelector("#"+e+" .close");n&&(n.onclick=function(){this.parentNode.parentNode.style.display="none"})},this.show=function(){for(var e=document.getElementsByClassName(this.className),t=0;t<e.length;++t)e[t].style.display="none";document.getElementById(this.elID).style.display="block"},this.hide=function(){document.getElementById(this.elID).style.display="none"}}}(window);var rightIsDown=!1,leftIsDown=!1,leftActive=!0,settingModal,curTabName="",inputFile;function bReady(){window.File&&window.FileReader&&window.FileList&&window.Blob||outputInfo(str_browserNotSupport);var e=document.getElementById("filedropzone");function t(){var e=document.getElementById("videoplay");document.getElementById("playmsg").innerHTML="",document.getElementById("tabVideoPreview").click(),document.getElementById("defaultOpen").click();var t=inputFile.type;"video/quicktime"==t?t="video/mp4":"video/3gpp"==t&&(t="video/xxx");var n=e.canPlayType(t);n=""===n?"no":n;if("no"===n)outputInfoToEl("playmsg",""),loadOtherFormatVideo(inputFile,"playmsg",function(t){e.src=t,gfileURL=t,outputInfoToEl("playmsg","")});else{var o=URL.createObjectURL(inputFile);e.src=o,gfileURL=o}gFileSize=inputFile.size,setElHtml("sliderMin","0M"),setElHtml("sliderMax",(gFileSize/1024/1024).toFixed(2)+"M")}function n(){var e=document.getElementById("leftPos").getBoundingClientRect(),t=document.getElementById("rightPos").getBoundingClientRect(),n=timeToSeconds(document.getElementById("vcutstart").value),o=document.getElementById("trimBar").getBoundingClientRect().width,i=n*o/gVDuration;i<0||i>t.x||(document.getElementById("leftPos").style.left=i+"px",document.getElementById("leftMask").style.width=i+"px");var l=timeToSeconds(document.getElementById("vcutsend").value),a=l*o/gVDuration;return a<e.x||a>o-4||(document.getElementById("rightPos").style.left=a+"px",document.getElementById("rightMask").style.left=a+"px",document.getElementById("rightMask").style.width=o-a+"px"),{s:n,e:l}}function o(e,t){if(inputFile){outputInfoToEl(e,"<i class='fa fa-spin5 animate-spin'></i>"+str_readingFile);var n=new FileReader;n.onload=function(e){var n=this.result;array=new Uint8Array(n),t(array)},n.readAsArrayBuffer(inputFile)}else outputInfoToEl(e,"<i class='fa fa-info-circled-alt'></i>"+str_pleaseLoadFile)}function i(e,t,n,o,i){setElHtml(i,""),outputInfoToEl(i,"<i class='fa fa-spin5 animate-spin'></i>"+str_init1+"<br><small>"+str_init2+"</small>");var l=new XMLHttpRequest,a="/getCmd.php?"+function(e,t,n){return"funName="+t+"&inputformat="+inputFile.name.split(".").pop()+"&duration="+e.toString()+"&"+serializeForm(n).join("&")+"&"+serializeForm("g_frmoptions").join("&")}(t,n,o);l.open("GET",a),l.onload=function(){if(200===l.status){var t=l.responseText;"ok!!"!==t.substr(0,4)&&(console.log("get cmd failed."),outputInfoToEl(i,"<i class='fa fa-cancel-circled'></i>"+str_convertFailed));var o=t.substr(4),a=getRadioInputValueByName("g_format"),r=1;if("fun_convert"==n&&(a=getRadioInputValueByName("format")),"fun_cut"==n){var s=timeToSeconds(getInputValueById("vcutstart")),u=timeToSeconds(getInputValueById("vcutsend"));r=rangeValue(0,1,(u-s)/gVDuration)}gCancelProcess=!1,video_convertAd(a,e,inputFile.name,o,function(e){console.log(e);var t=e;"fun_cut"==n&&(t/=r),t=toDecimal2(t=rangeValue(0,100,t)),outputInfoToEl(i,"<i class='fa fa-spin5 animate-spin'></i>"+t+"%...<a class='linkBtn' href='javascript:gCancelProcess = true;' title='"+str_cancelProcess+"'><i class='fa fa-cancel-circled'></i></a>")},function(t,n){if(""==t)outputInfoToEl(i,"");else if(t){var o=new Blob([t]),l=window.URL.createObjectURL(o),a=(t.byteLength/1024/1024).toFixed(2).toString(),r="<i class='fa fa-ok fa-2x'></i><br>"+str_converSuccess+"<a download='"+n+"' href='"+l+"'>"+str_clicktoSave+"(output..."+n.split(".").pop()+","+a+"M)</a>";outputInfoToEl(i,r),"undefined"!=typeof pplike_manualshowlike&&pplike_manualshowlike(),t=null,o=null}else outputInfoToEl(i,"<i class='fa fa-info-circled-alt'></i>"+str_convertFailed);e=null},cancel_converter),e=null}else console.log("Request failed.  Returned status of "+l.status)},l.send()}function l(e){setInputValueById("crop_x",Math.round(e.x1)),setInputValueById("crop_y",Math.round(e.y1)),setInputValueById("crop_width",Math.round(e.width)),setInputValueById("crop_height",Math.round(e.height))}e.addEventListener("dragover",function(e){e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy"}),e.addEventListener("drop",function(e){e.stopPropagation(),e.preventDefault();for(var n,o=e.dataTransfer.files,i=0;n=o[i];i++){inputFile=n,t();break}}),document.getElementById("bfile").addEventListener("change",function(e){for(var n,o=e.target.files,i=0;n=o[i];i++){inputFile=n,t();break}},!1),document.getElementById("openFileBtn").addEventListener("click",function(){document.getElementById("bfile").click()},!1),document.getElementById("bfile").addEventListener("click",function(){this.value=null},!1),document.getElementById("closeVideoPreview").addEventListener("click",function(){document.getElementById("videoplay").src="",document.getElementById("tabFileOpen").click(),document.getElementById("thumbsBar").innerHTML="",document.getElementById("trimBar").style.display="none",lareaSelector.hide(),inputFile=null,gVDuration=0,gfileURL=null,gLoadIndex=0,gFileSize=0,gCancelProcess=!0},!1),document.getElementById("videoplay").addEventListener("loadedmetadata",function(){gVDuration=this.duration,generateThumbs()}),window.addEventListener("resize",debounce(function(e){null!=inputFile&&("fun_crop"==curTabName&&lareaSelector.show(),"fun_cut"==curTabName?generateThumbs():document.getElementById("thumbsBar").innerHTML="")})),document.getElementById("thumbsBar").addEventListener("click",function(e){var t=this.getBoundingClientRect();console.log("tclick clientx:"+e.clientX+"offestX:"+e.offsetX),document.getElementById("posLine").style.left=e.clientX-t.x+"px";var n=(e.clientX-t.x)*gVDuration/parseInt(this.clientWidth);document.getElementById("videoplay").currentTime=n},!1),document.getElementById("leftPos").addEventListener("mousedown",function(e){leftIsDown=!0,leftActive=!0},!0),document.getElementById("rightPos").addEventListener("mousedown",function(e){rightIsDown=!0,leftActive=!1},!0),document.addEventListener("mouseup",function(){leftIsDown=rightIsDown=!1},!0),document.getElementById("trimBar").addEventListener("mousemove",function(e){e.preventDefault();var t,n=this.getBoundingClientRect(),o=n.width,i=n.x,l=document.getElementById("leftPos").getBoundingClientRect(),a=document.getElementById("rightPos").getBoundingClientRect();(leftIsDown||rightIsDown)&&(t=(e.clientX-n.x)*gVDuration/o,document.getElementById("videoplay").currentTime=t);if(leftIsDown){var r=e.clientX-i;r<0&&(console.log("left <0"),r=0),r>a.x-i&&(r=a.x-i,console.log("left > rightRect.x")),document.getElementById("leftPos").style.left=r+"px",document.getElementById("leftMask").style.width=r+"px",setStartTime(t)}if(rightIsDown){var s=e.clientX-i-4;s<l.x-i&&(console.log("right < leftRect.x"),s=l.x-i),s>o-4&&(console.log("right > barWidth"),s=o-4),document.getElementById("rightPos").style.left=s+"px",document.getElementById("rightMask").style.left=s+"px",document.getElementById("rightMask").style.width=o-s+"px",setEndTime(t)}},!0),document.getElementById("vcutstart").addEventListener("input",function(e){var t=n();document.getElementById("videoplay").currentTime=t.s},!0),document.getElementById("vcutstart").addEventListener("click",function(e){var t=n();document.getElementById("videoplay").currentTime=t.s},!0),document.getElementById("vcutsend").addEventListener("input",function(e){var t=n();document.getElementById("videoplay").currentTime=t.e},!0),document.getElementById("vcutsend").addEventListener("click",function(e){var t=n();document.getElementById("videoplay").currentTime=t.e},!0),setElClick("cutBtn",function(){o("cutOutputArea",function(e){i(e,0,"fun_cut","cutFrm","cutOutputArea")})}),setElClick("convertBtn",function(){o("convertOutputArea",function(e){i(e,0,"fun_convert","frmoptions","convertOutputArea")})}),setElClick("rotateBtn",function(){o("rotateOutputArea",function(e){i(e,0,"fun_rotate","rotateFrm","rotateOutputArea")})}),setElClick("flipBtn",function(){o("flipOutputArea",function(e){i(e,0,"fun_flip","flipFrm","flipOutputArea")})}),setElClick("compressBtn",function(){o("compressOutputArea",function(e){getDuration(e,function(t){i(e,t,"fun_compress","compressFrm","compressOutputArea")})})}),setElClick("resizeBtn",function(){o("resizeOutputArea",function(e){i(e,0,"fun_resize","resizeFrm","resizeOutputArea")})}),setElClick("cropBtn",function(){o("cropOutputArea",function(e){i(e,0,"fun_crop","cropFrm","cropOutputArea")})}),document.getElementById("vpreset").addEventListener("change",function(e){var t=getInputValueById("vpreset");if(""!=t){var n=t.split(" ");setInputValueById("vsize",n[0]),setInputValueById("vfps",void 0===n[1]?"":n[1])}},!1),document.getElementById("g_vpreset").addEventListener("change",function(e){var t=getInputValueById("g_vpreset");if(""!=t){var n=t.split(" ");setInputValueById("g_vsize",n[0]),setInputValueById("g_vfps",void 0===n[1]?"":n[1])}},!1),document.getElementById("vencoder").addEventListener("change",function(e){var t=getInputValueById("vencoder");"h263"==t?setInputValueById("vsize","352x288"):"mpeg1video"==t?setInputValueById("vfps","25"):"mpeg2video"==t?setInputValueById("vfps","25"):(setInputValueById("vsize",""),setInputValueById("vfps",""))},!1),document.getElementById("tabFileOpen").click(),settingDialog=new lModalBox,settingDialog.init("settingDialog","dialog"),setClassElClick("adsetting",function(){"resize"==this.getAttribute("data-pane")?document.getElementById("resizeOp").style.display="none":document.getElementById("resizeOp").style.display="block",settingDialog.show()}),rangeSlider("outFileSize",function(e){if(gFileSize){var t=(gFileSize*e/100/1024/1024).toFixed(2);document.getElementById("vfilesize").value=t+"M"}}),setEleEventByID("vfilesize","blur",function(){}),(lareaSelector=new lAreaSelector("videoplay",{onSelectChange:l})).hide(),setEleEventByClass("cropparam","blur",function(){l(lareaSelector.setSelection(getInputIntValueById("crop_x"),getInputIntValueById("crop_y"),getInputIntValueById("crop_width"),getInputIntValueById("crop_height")))}),g_btnFormat_Click()}var gfileURL=null,gVDuration,gLoadIndex,gFileSize,lareaSelector,gCancelProcess=!1;document.addEventListener("DOMContentLoaded",function(){bReady()},!1);
