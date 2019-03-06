var sha512 = require('js-sha512');
var userConnections = [];
var sharedsession = require("express-socket.io-session");
var request = require('request');


module.exports = function(io , session) {

    io.use(sharedsession(session, {
        autoSave:true
    }));

    io.sockets.on('connection', function(socket){//Hier kann man auch den client übergeben
        var id = socket.handshake.session.id;
        var qid = sha512(id);
        socket.handshake.session.qid = qid;
        var existingUser = userConnections.find(function(userConnection){
            return userConnection.id === id;
        });


        if (!existingUser){
            existingUser = {
                id: id,
                sockets: []
            }
            userConnections.push(existingUser);
        }

        existingUser.sockets.push(socket);
        console.log(userConnections.length + " Users Connected");
        console.log('One User is connected with  %s Sockets', existingUser.sockets.length);
        console.log(userConnections);




        socket.on('disconnect',function() {
            existingUser.sockets.splice(existingUser.sockets.indexOf(socket), 1);
            if (existingUser.sockets.length === 0) {
                if (userConnections) {
                    console.log(userConnections);
                    userConnections.splice(userConnections.indexOf(existingUser.id), 1);
                    console.log('User disconnected: Online %s', userConnections.length);
                }
            } else {
                console.log("User closed a Tab");
            }
        });

    });


    setInterval(function(req){
        if(userConnections.length){
            console.log("User connected " + userConnections.length);
            if(userConnections.length < 2){
                console.log(userConnections);
            }
        }
    },60000);




};



