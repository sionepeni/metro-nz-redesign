

const ChatBot = (props) => {
    (function(d, m){
        var kommunicateSettings = 
            {"appId":"2f636fb5fbf4c8126e29459eb1ad42d5c","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});




  return (
    <div>
      
    </div>
  )
}

export default ChatBot
