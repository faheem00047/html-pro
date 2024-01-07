const Monitor = require('ping-monitor');
const notifier = require('node-notifier');

const myMonitor = new Monitor({
    address: 'https://8a1aabbf-1663-4d38-b239-c2f2fb897724-00-1u576yaipzbk4.teams.replit.dev',//change the ip address of the web to run the bot or leave 127.0.0.1 also known as localhost nha bruh( just for pro 🐧)
    port: 8080, //port bot 
    interval: 10, // 10 giây
  config: {
    intervalUnits: 'seconds', // minutes, seconds,hour
    generateId: false // defaults is true
  }
});


myMonitor.on('up', function (res, state) {
    console.log('Check Connected : ' + res.address + ':' + res.port + ' Is Online !'); //ping 
});


myMonitor.on('down', function (res, state) {
    console.log('Check Connected : ' + res.address + ':' + res.port + ' Is Offline !');
      return notifier.notify({title: 'Check Connected',message: 'Dead Bot =))'});// noti
});


myMonitor.on('stop', function (res, state) {
    console.log(res.address + ' monitor has stopped.');
      return notifier.notify({title: 'Check Connected',message: 'Dead Bot =))'});
});


myMonitor.on('error', function (error, res) {
    console.log(error);
    return notifier.notify({title: 'Check Connected',message: 'Bot Damn it =))'});
});


myMonitor.on('timeout', function (error, res) {
    console.log(error);
      return notifier.notify({title: 'Check Connected',message: 'Bot Damn it =))'});
});
