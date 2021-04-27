
var faunadb = window.faunadb
var q = faunadb.query;
var client = new faunadb.Client({ secret: 'fnAEHuVFwvACBVJLGIsyhHVmk9vh2_i5F6BE_o5R' })


export default function storage(setGet, videoid, time = null, data = null) {
    if (setGet === "set") {
      document.cookie = videoid + "=" + time + ";path=/;expires=300000";
      return;
    }
  
    if (setGet === "get") {
      var v = document.cookie.match("(^|;) ?" + videoid + "=([^;]*)(;|$)");
      return v ? v[2] : null;
    }

    if(setGet === "track" && data !== null){

        client.query(
            q.Create(
              q.Collection('user-asset-progress'),
              { data: data }
            )
        );
        q = faunadb.query;   
    }
  }
  