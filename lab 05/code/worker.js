const Logger = require('./logger');

const logger = new Logger('MyApp');

logger.info(`Hệ thống bắt đầu khởi động!`);

function doWork() {
  logger.debug('Thực hiện công việc a!');
  logger.error('Chương trình lỗi!!!');
  // setTimeout(doWork, 2000);
}

doWork();

