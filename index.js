const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const SettingsFactoryFunction = require('./settingBill-factory');
const app = express();
const settingsBill = SettingsFactoryFunction();
<<<<<<< HEAD
const moment = require('moment');
moment().format()
    //var a = moment([2020, 7, 22]).fromNow();
=======
const PORT = process.env.PORT || 3007;

app.listen(PORT, function() {
    console.log('App starting on port', PORT);
});
>>>>>>> cdd506ae8d04ef3e6ba5dc3bfed40ba277e656e4

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.static('public'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get("/", function(req, res) {
<<<<<<< HEAD
    
=======
>>>>>>> cdd506ae8d04ef3e6ba5dc3bfed40ba277e656e4
    res.render('index', {
        values: settingsBill.getSettings(),
        totals: settingsBill.settingsBillTotals(),
        getAllColors: settingsBill.getColorLive()
    });
});

//gets all user settings posted to server
app.post("/settings", function(req, res) {
    settingsBill.updateValues({
        smsCost: req.body.smsCost,
        callCost: req.body.callCost,
        warningLevel: req.body.warningLevel,
        criticalLevel: req.body.criticalLevel
    });
<<<<<<< HEAD
    console.log(settingsBill.getSettings());
    // note that data can be sent to the template
    res.redirect("/");
=======
    // settingsBill.getColorLive({
    //         warningLevel: req.body.warningLevel,
    //         criticalLevel: req.body.criticalLevel
    //     })
    //console.log(settingsBill.getSettings());
    // note that data can be sent to the template
    res.redirect("/");

>>>>>>> cdd506ae8d04ef3e6ba5dc3bfed40ba277e656e4
});

//gets all actions clicked settings posted to server
app.post("/action", function(req, res) {
    settingsBill.addFunction(req.body.billItemTypeWithSettings)
    console.log(settingsBill.getColorLive());
<<<<<<< HEAD
=======

>>>>>>> cdd506ae8d04ef3e6ba5dc3bfed40ba277e656e4
    res.redirect("/");
});

//backend tracker of totals being clicked on the server in table format
app.get("/actions", function(req, res) {
<<<<<<< HEAD
    var actionTime = settingsBill.actions()
    for (let item of actionTime) {
        item.ago = moment(item.timestamp).fromNow()
    }
    res.render("actions", {
        // actions: settingsBill.actions(),
        actions: actionTime
    });
=======
    res.render("actions", { actions: settingsBill.actions() });
>>>>>>> cdd506ae8d04ef3e6ba5dc3bfed40ba277e656e4
});

//backend tracker of sms and call being clicked on the server in table format
app.get("/actions/:actionsType", function(req, res) {
<<<<<<< HEAD
    var actionTime = settingsBill.actions()
    for (let item of actionTime) {
        item.ago = moment(item.timestamp).fromNow()
    }
    res.render("actions", {
        // actions: settingsBill.actions(),
        actions: actionTime
    });
});

const PORT = process.env.PORT || 3007;

app.listen(PORT, function() {
    console.log("app starting at port:", PORT);
=======
    const actionsType = req.params.actionsType
    res.render("actions", { actions: settingsBill.actionClicked(actionsType) });

>>>>>>> cdd506ae8d04ef3e6ba5dc3bfed40ba277e656e4
});