module.exports = function SettingsFactoryFunction() {

        // variables
        var callTotalSettings = 0.00;
        var smsTotalSettings = 0.00;
        var totalSettings = 0.00;
        var callCost;
        var smsCost;
        var warningLevel;
        var criticalLevel;

        var userMappedData = [];

        // functions to return
        function updateValues(settings) {
            if (checkInput(settings)) {
                callCost = Number(settings.callCost);
                smsCost = Number(settings.smsCost);
                warningLevel = Number(settings.warningLevel);
                criticalLevel = Number(settings.criticalLevel);
                return true;
            }
            return false;
        }

        function getSettings() {
            return {
                callCost,
                smsCost,
                warningLevel,
                criticalLevel
            }
        }

        // functions to use
        function checkInput(object) {
            for (const i in object) {
                var currentValue = parseFloat(object[i])
                if (isNaN(currentValue)) {
                    return false;
                }
            }
            return true;
        }

        function addFunction(item) {
            let cost = 0
            if (totalSettings < criticalLevel) {
                switch (item) {
                    case "call":
                        cost = callCost;
                        callTotalSettings += callCost;
                        break;
                    case "sms":
                        cost = smsCost;
                        smsTotalSettings += smsCost;
                        break;
                    default:
                        return false
                }
                userMappedData.push({
                    type: item,
                    cost,
                    timestamp: new Date()
                })
            }
        }

        function actions() {
            return userMappedData
        }

        function actionClicked(type) {
            return userMappedData.filter((item) => item.type === type);
        }

        function settingsBillTotals() {
            return {
                totalSettings,
                callTotalSettings,
                smsTotalSettings
            };
        }

        // closure
        return {
            updateValues,
            settingsBillTotals,
            addFunction,
            getColorLive,
            getSettings,
            actions,
            actionClicked
        }
    } // factory ends here