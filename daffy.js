var vorpal=require('vorpal')()
    ,duckCount=0
    ,wabbitCount=0;

vorpal
    .command('duck','Outputs "rabbit"')
    .action(actionDuck);

vorpal
    .command('duck season', 'Outputs "rabbit season"')
    .action(actionDuckSeason);

vorpal
    .command('wabbit', 'Outputs "duck')
    .action(actionWabbit);

vorpal
    .command('wabbit season', 'Outputs "duck season')
    .action(actionWabbitSeason);

vorpal
    .delimiter('daffy$')
    .show();

/**
** Actions
**/

function actionDuck(args,callback) {
    this.log('Wabbit');
    callback();
}

function actionDuckSeason(args, callback) {
    duckCount++;
    this.log('Wabbit season');
    callback();
}

function actionWabbit(args, callback) {
    this.log('Duck');
    callback();
}

function actionWabbitSeason(args, callback) {
    
    var despicableRule  = (duckCount<2);
    var duckSeasonRule  = (wabbitCount===0) && !despicableRule;
    var sayFireRule     = !duckSeasonRule && !(wabbitCount===0);

    if(despicableRule) {
        duckCount=0;
        this.log('You are despicable');

        callback();
    }

    if(duckSeasonRule) {
        wabbitCount++;
        this.log('Duck season');

        callback();
    }

    if(sayFireRule) {
        this.log('I say it\'s duck season. And I say fire!');

        vorpal.ui.cancel();
    }
}