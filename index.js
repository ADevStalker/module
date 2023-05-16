import robot from 'robotjs';
import moment from 'moment';
import chalk from 'chalk';
import { format, log, text, STATUS } from './consts.js';
import { schedule, rate } from './configs.js';

var status = STATUS.NORMAL;
var i = 0;

setInterval(() => {
  var time = moment(new Date(), format);
  var res = schedule[status].some((item) => {
    var beforeTime = moment(item.beforeTime, format);
    var afterTime = moment(item.endTime, format);
    return time.isBetween(beforeTime, afterTime);
  });
  if (res && Math.random > rate) {
    log(chalk.bgGreen(text[i]));
    robot.keyTap('control');
  } else {
    log(chalk.bgRed(text[i]));
  }
  i = (i + 1) % text.length;
}, 50000);
