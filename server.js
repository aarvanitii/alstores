var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';
var exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const db = require('monk')('localhost/alstores-data')
const data = db.get('data')

var Q = require("q");
var deferred = Q.defer();
router.get('/', function(req, res) {

    data.findOne({}, '-_id', function(err, item) {
        if(err)    return deferred.reject(err);
        deferred.resolve(item);
    });

    deferred.promise
        .then(function(item){
            //console.log(item)
            res.render("home", { data: item});
        }).catch(function(err){
        res.render('404', { err: err });
    });
});

router.post("/save-contacts-data", function(req, res){

    res.redirect('/');
});

router.get("/shto-te-dhena", function (req, res){

    db.collection('data').remove({});

    data.insert(
        {
            info:[
                {
                    "label": "Contact",
                    "row1-text1": "Téléphone",
                    "row1-text2": "8:30 - 20:30",
                    "row2-text1": "e-Mail",
                    "row2-text2": "Anytime",
                    "row3-text1": "",
                    "row3-text2": ""
                },
                {
                    "label": "Services",
                    "row1-text1": "Commande",
                    "row1-text2": "",
                    "row2-text1": "Conseil",
                    "row2-text2": "",
                    "row3-text1": "Monter",
                    "row3-text2": ""
                },
                {
                    "label": "Plan Tarifaire",
                    "row1-text1": "Standard",
                    "row1-text2": "100$",
                    "row2-text1": "Premium",
                    "row2-text2": "360$",
                    "row3-text1": "Coutume",
                    "row3-text2": "Négociable"
                }

            ],
            services: [
                {
                    "label": "Commande",
                    "description": "lorem ipsum monum.",
                    "imgUrl": "/img/icons/order.png"
                },
                {
                    "label": "Conseil",
                    "description": "lorem ipsum monum.",
                    "imgUrl": "/img/icons/idea.png"
                },
                {
                    "label": "Monter",
                    "description": "lorem ipsum monum.",
                    "imgUrl": "/img/icons/installi.png"
                }
            ],
            contacts: [
                {
                    "label": "e-Mail",
                    "description": "Arvanitgrainca.ag@gmail.com.",
                    "imgUrl": "/img/icons/mail.png",
                    "buttonAllow": true
                },
                {
                    "label": "Téléphone",
                    "description": "+37745609494",
                    "imgUrl": "/img/icons/phone.png"
                }
            ]
        }, function(err, item) {
            if(err)    return deferred.reject(err);
            deferred.resolve(item);
        });
    deferred.promise
        .then(function(item){
        res.send("Te dhenat u shtuan")
        }).catch(function(err){
        res.render('404', { err: err });
    });


});

app.use("/img", express.static(__dirname + '/img'));

app.use("/css", express.static(__dirname + '/css'));

app.use("/fonts", express.static(__dirname + '/fonts'));

app.use("/js", express.static(__dirname + '/js'));

app.use("/",router);

app.get("*", function(req, res) {
    res.render('404');
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});