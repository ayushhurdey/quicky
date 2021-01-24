console.log("Background script loaded..");

chrome.runtime.onMessage.addListener( function(request,sender,sendResponse)
{
    console.log("Messsage processing...");
    if( request.greeting === "GetURL" )
    {
        console.log("Messsage processing..2..");
        var tabURL = "Not set yet";
        chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
            console.log(tabs)
            if(tabs.length === 0) {
                sendResponse({});
                return;
            }
            tabURL = tabs[0].url;
            sendResponse( {navURL:tabURL} );
        });        
    }
    return true;
});