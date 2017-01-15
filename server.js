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

    db.collection('data').remove({});

    data.insert(
        {
            info:[
                {
                    "label": "Contact",
                    "row1-text1": "Téléphone",
                    "row1-text2": "+33 7 83 92 69 08",
                    "row2-text1": "e-Mail",
                    "row2-text2": "al.stores68@gmail.com",
                },
                {
                    "label": "Services",
                    "row1-text1": "Commande",
                    "row1-text2": "",
                    "row2-text1": "Conseil",
                    "row2-text2": "",
                    "row3-text1": "Monter",
                    "row3-text2": ""
                }

            ],
            workshops: [
                {
                    'slide' : '1',
                    'imgUrl' : '1.JPG'
                },                
                {
                    'slide' : '2',
                    'imgUrl' : '2.JPG'
                },
                {
                    'slide' : '3',
                    'imgUrl' : '3.JPG'
                },
                {
                    'slide' : '4',
                    'imgUrl' : '4.JPG'
                },
                {
                    'slide' : '5',
                    'imgUrl' : '5.JPG'
                },
                {
                    'slide' : '6',
                    'imgUrl' : '6.JPG'
                },
                {
                    'slide' : '7',
                    'imgUrl' : '7.JPG'
                },
                {
                    'slide' : '8',
                    'imgUrl' : '8.JPG'
                },
                {
                    'slide' : '9',
                    'imgUrl' : '9.JPG'
                },
                {
                    'slide' : '10',
                    'imgUrl' : '10.jpg'
                },
                {
                    'slide' : '11',
                    'imgUrl' : '11.jpg'
                },
                {
                    'slide' : '12',
                    'imgUrl' : '12.jpg'
                },
                {
                    'slide' : '13',
                    'imgUrl' : '13.jpg'
                },
                {
                    'slide' : '14',
                    'imgUrl' : '14.jpg'
                },
                {
                    'slide' : '15',
                    'imgUrl' : '15.jpg'
                },
                {
                    'slide' : '16',
                    'imgUrl' : '16.jpg'
                },
                {
                    'slide' : '17',
                    'imgUrl' : '17.jpg'
                },
                {
                    'slide' : '18',
                    'imgUrl' : '18.jpg'
                },
                {
                    'slide' : '19',
                    'imgUrl' : '19.jpg'
                },
                {
                    'slide' : '20',
                    'imgUrl' : '20.jpg'
                },
                {
                    'slide' : '21',
                    'imgUrl' : '21.jpg'
                },
                {
                    'slide' : '22',
                    'imgUrl' : '22.jpg'
                },
                {
                    'slide' : '23',
                    'imgUrl' : '23.jpg'
                },
                {
                    'slide' : '24',
                    'imgUrl' : '24.jpg'
                },
                {
                    'slide' : '25',
                    'imgUrl' : '25.jpg'
                },
                {
                    'slide' : '26',
                    'imgUrl' : '26.jpg'
                },
                {
                    'slide' : '27',
                    'imgUrl' : '27.jpg'
                },
                {
                    'slide' : '28',
                    'imgUrl' : '28.jpg'
                },
                {
                    'slide' : '30',
                    'imgUrl' : '30.jpg'
                },
                {
                    'slide' : '31',
                    'imgUrl' : '31.jpg'
                },
                {
                    'slide' : '32',
                    'imgUrl' : '32.jpg'
                },
                {
                    'slide' : '33',
                    'imgUrl' : '33.jpg'
                },
                {
                    'slide' : '34',
                    'imgUrl' : '34.jpg'
                },
                {
                    'slide' : '35',
                    'imgUrl' : '35.jpg'
                },
                {
                    'slide' : '36',
                    'imgUrl' : '36.jpg'
                },
                {
                    'slide' : '37',
                    'imgUrl' : '37.jpg'
                },
                {
                    'slide' : '38',
                    'imgUrl' : '38.jpg'
                },
                {
                    'slide' : '39',
                    'imgUrl' : '39.jpg'
                },
                {
                    'slide' : '40',
                    'imgUrl' : '40.jpg'
                },
                {
                    'slide' : '41',
                    'imgUrl' : '41.jpg'
                },
                {
                    'slide' : '42',
                    'imgUrl' : '42.jpg'
                },
                {
                    'slide' : '43',
                    'imgUrl' : '43.jpg'
                },
                {
                    'slide' : '44',
                    'imgUrl' : '44.jpg'
                },
                {
                    'slide' : '45',
                    'imgUrl' : '45.jpg'
                },
                {
                    'slide' : '46',
                    'imgUrl' : '46.jpg'
                },
                {
                    'slide' : '47',
                    'imgUrl' : '47.jpg'
                },
                {
                    'slide' : '48',
                    'imgUrl' : '48.jpg'
                },
                {
                    'slide' : '49',
                    'imgUrl' : '49.jpg'
                },
                {
                    'slide' : '50',
                    'imgUrl' : '50.jpg'
                },
                {
                    'slide' : '51',
                    'imgUrl' : '51.jpg'
                },
                {
                    'slide' : '52',
                    'imgUrl' : '52.jpg'
                },                {
                    'slide' : '53',
                    'imgUrl' : '53.jpg'
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
                    "description": "al.stores68@gmail.com",
                    "imgUrl": "/img/icons/mail.png"
                },
                {
                    "label": "Téléphone",
                    "description": "+33 7 83 92 69 08",
                    "imgUrl": "/img/icons/phone.png"
                }
            ]
        });

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