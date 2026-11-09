onEvent("btn_redirecttologin", "click", function( ) {
  setScreen("screen_login");
});
onEvent("btn_redirecttosignup", "click", function( ) {
  setScreen("screen_signup");
});
onEvent("btn_home(st)", "click", function( ) {
  setScreen("screen_stafftools");
});
onEvent("btn_menu(st)", "click", function( ) {
  setScreen("screen_menu");
});
onEvent("btn_settings(st)", "click", function( ) {
  setScreen("screen_settings");
});
onEvent("btn_manageparcel", "click", function( ) {
  setScreen("screen_manageparcel");
});
onEvent("btn_home(yp)", "click", function( ) {
  setScreen("screen_yourparcels");
});
onEvent("btn_menu(yp)", "click", function( ) {
  setScreen("screen_menu");
});
onEvent("btn_settings(yp)", "click", function( ) {
  setScreen("screen_settings");
});
onEvent("btn_calculaterate", "click", function( ) {
  setScreen("screen_estimaterate");
});
onEvent("btn_back(manage)", "click", function( ) {
  setScreen("screen_yourparcels");
});
onEvent("btn_home(mp)", "click", function( ) {
  setScreen("screen_yourparcels");
});
onEvent("btn_menu(mp)", "click", function( ) {
  setScreen("screen_menu");
});
onEvent("btn_settings(mp)", "click", function( ) {
  setScreen("screen_settings");
});
onEvent("btn_back(rate)", "click", function( ) {
  setScreen("screen_yourparcels");
});
onEvent("btn_home(er)", "click", function( ) {
  setScreen("screen_yourparcels");
});
onEvent("btn_menu(er)", "click", function( ) {
  setScreen("screen_menu");
});
onEvent("btn_settings(er)", "click", function( ) {
  setScreen("screen_settings");
});
onEvent("btn_home(menu)", "click", function( ) {
  setScreen("screen_yourparcels");
});
onEvent("btn_menu(menu)", "click", function( ) {
  setScreen("screen_menu");
});
onEvent("btn_settings(menu)", "click", function( ) {
  setScreen("screen_settings");
});
onEvent("btn_home(settings)", "click", function( ) {
  setScreen("screen_yourparcels");
});
onEvent("btn_menu(settings)", "click", function( ) {
  setScreen("screen_menu");
});
onEvent("btn_settings(setings)", "click", function( ) {
  setScreen("screen_settings");
});
onEvent("btn_chatbot", "click", function( ) {
  setScreen("screen_chatbot");
});
onEvent("btn_home(cb)", "click", function( ) {
  setScreen("screen_yourparcels");
});
onEvent("btn_menu(cb)", "click", function( ) {
  setScreen("screen_menu");
});
onEvent("btn_settings(cb)", "click", function( ) {
  setScreen("screen_settings");
});
onEvent("btn_back(chatbot)", "click", function( ) {
  setScreen("screen_menu");
});
onEvent("btn_notifications", "click", function( ) {
  setScreen("screen_notification");
});
onEvent("btn_back(noti)", "click", function( ) {
  setScreen("screen_yourparcels");
});
onEvent("btn_logout", "click", function( ) {
  setScreen("screen_login");
});
onEvent("btn_confirmcollection", "click", function( ) {
        setTimeout(function() {
      hideElement("lbl_confirmcollection");
    }, 2000);
    showElement("lbl_confirmcollection");
});
onEvent("btn_submitfeedback", "click", function( ) {
      setTimeout(function() {
      hideElement("lbl_feedbacksuccess");
    }, 2000);
    showElement("lbl_feedbacksuccess");
});
onEvent("btn_parceldispatch", "click", function( ) {
        setTimeout(function() {
      hideElement("lbl_alertdispatch");
    }, 2000);
    showElement("lbl_alertdispatch");
});
onEvent("btn_completeddelivery", "click", function( ) {
        setTimeout(function() {
      hideElement("lbl_completeddelivery");
    }, 2000);
    showElement("lbl_completeddelivery");
});
onEvent("btn_faileddelivery", "click", function( ) {
        setTimeout(function() {
      hideElement("lbl_faileddelivery");
    }, 2000);
    showElement("lbl_faileddelivery");
});
onEvent("btn_yes", "click", function( ) {
        setTimeout(function() {
      hideElement("lbl_yes");
    }, 2000);
    showElement("lbl_yes");
});
onEvent("btn_no", "click", function( ) {
        setTimeout(function() {
      hideElement("lbl_no");
    }, 2000);
    showElement("lbl_no");
});
onEvent("btn_confirmpassword", "click", function( ) {
        setTimeout(function() {
      hideElement("lbl_changepassword");
    }, 2000);
    showElement("lbl_changepassword");
});
onEvent("btn_savename", "click", function( ) {
        setTimeout(function() {
      hideElement("lbl_updatename");
    }, 2000);
    showElement("lbl_updatename");
});
onEvent("btn_review1", "click", function( ) {
          setTimeout(function() {
      hideElement("lbl_1star");
    }, 2000);
    showElement("lbl_1star");
});
onEvent("btn_review2", "click", function( ) {
          setTimeout(function() {
      hideElement("lbl_2star");
    }, 2000);
    showElement("lbl_2star");
});
onEvent("btn_review3", "click", function( ) {
          setTimeout(function() {
      hideElement("lbl_3star");
    }, 2000);
    showElement("lbl_3star");
});
onEvent("btn_review4", "click", function( ) {
          setTimeout(function() {
      hideElement("lbl_4star");
    }, 2000);
    showElement("lbl_4star");
});
onEvent("btn_review5", "click", function( ) {
          setTimeout(function() {
      hideElement("lbl_5star");
    }, 2000);
    showElement("lbl_5star");
});
onEvent("btn_confirmdelivery", "click", function( ) {
          setTimeout(function() {
      hideElement("lbl_confirmdelivery");
    }, 2000);
    showElement("lbl_confirmdelivery");
});
onEvent("btn_signup", "click", function() {
  var email = getText("txt_createemail");
  var password = getText("txt_createpassword");
  if (email == "" || password == "") {
    showElement("label_error1");
    setTimeout(function() {
      hideElement("label_error1");
    }, 3000);
  } else if (email.indexOf("@") == -1) {
    showElement("lbl_error3");
    setTimeout(function() {
      hideElement("lbl_error3");
    }, 3000);
  } else {
    createRecord("Table 1", {Email: email, Password: password}, function(record) {
      if (record) {
        setScreen("screen_login");
      }
    });
  }
});
onEvent("btn_login", "click", function() {
  var email = getText("txt_enteremail");
  var password = getText("txt_enterpassword");
  if (email == "staff@westwood.com" && password == "staff") {
    setScreen("screen_stafftools");
  } else {
    readRecords("Table 1", {Email: email, Password: password}, function(records) {
      if (records && records.length > 0) {
        setScreen("screen_yourparcels");
      } else {
        showElement("lbl_error");
        setTimeout(function() {
          hideElement("lbl_error");
        }, 3000);
      }
    });
  }
});