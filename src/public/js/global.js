const agent = navigator.userAgent.toLowerCase()
const filter = "win16|win32|win64|mac";

if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1)) {
  alert("이 사이트는 Internet Explorer 를 지원하지 않습니다.");
}

if (!(navigator.platform && filter.indexOf(navigator.platform.toLowerCase()) >= 0)) {
  alert("이 사이트는 모바일 접근을 지원하지 않습니다.");
}