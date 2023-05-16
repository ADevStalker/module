import robot from 'robotjs';
import moment from 'moment';
import chalk from 'chalk';
import { format, log, text } from './consts.js';
import { schedule, rate, status } from './configs.js';

var i = 0;

setInterval(() => {
  var time = moment(new Date(), format);
  var res = schedule[status].some((item) => {
    var beforeTime = moment(item.beforeTime, format);
    var afterTime = moment(item.endTime, format);
    return time.isBetween(beforeTime, afterTime);
  });
  if (res && Math.random() > rate / 100.0) {
    log(chalk.bgGreen(text[i]));
    robot.keyTap('control');
  } else {
    log(chalk.bgRed(text[i]));
  }
  i = (i + 1) % text.length;
}, 50000);
