module.exports = function(req, res,code) {
    var codemsg = function(code){
        switch(code){
            case 200:return 'Success';
            case 403:return 'Permission Denied'
            default:return ''
        }
    }
    if(code && code !== 404){
        res.status(code).send(codemsg(code));
    }
    if (code===404){
        console.log('Not Found...')
        res.sendFile('/CocDaily/html/404.html')
    }
}
