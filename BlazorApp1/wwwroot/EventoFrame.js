window.addEventListener('message', newTokenizeSyncResponse, false);

function newTokenizeSyncResponse(param) {
    let data = param.data;

    console.log(data);

    window.removeEventListener('message', newTokenizeSyncResponse);

    DotNet.invokeMethod('BlazorApp1', 'GetIframRS',data);
};
