const path =  require('path')

function getMessages (req, res) {
    // res.send('<h3>To infinity and beyond</h3>')
    
    res.sendFile(path.join(__dirname,'..','public', 'images', 'ndush.png'))
}

module.exports = {getMessages}