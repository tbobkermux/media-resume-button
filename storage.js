export default function storage(setGet, videoid, time = null) {
    if (setGet === "set") {
      document.cookie = videoid + "=" + time + ";path=/;expires=300000";
      //console.log(videoid + "=" + time + ";path=/;expires=300000");
      return;
    }
  
    if (setGet === "get") {
      var v = document.cookie.match("(^|;) ?" + videoid + "=([^;]*)(;|$)");
      return v ? v[2] : null;
    }
  }
  