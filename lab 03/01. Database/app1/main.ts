import * as mongoose from 'mongoose';
import ToDo from './models/todo';

/**
 * Connect mongodb
 * Implement CURD operations
 * Ref: https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
 *
 */

 async function bootstrap() {
    await mongoose.connect('mongodb://localhost:27017/app-todos', {
      useNewUrlParser: true
    });

    console.log('Connect db ok!');

    // 01. Create
    var todo = await ToDo.create([{
      text: 'Kết nối db mongodb',
      isDone: true
    }, {
      text: 'mysql',
      isDone: false
    }]);

    console.log('Result: ', todo);

    // 02. Read (from db)
    var result = await ToDo.find().limit(1).skip(0);
    console.log('Find by pagination: ', result);

    var myToDo = result.find(() => true);

    var myTask = await ToDo.findOne({
      text: 'mysql'
    });
    console.log('Find my task: ', myTask);

    // 03. Update
    myTask.isDone = true;
    await myTask.save();

    // 04. Delete
    await myToDo.remove();
    console.log('Delete my todo!');
 }

 bootstrap();
