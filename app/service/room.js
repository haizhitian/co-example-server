'use strict';

const Service = require('egg').Service;

class RoomService extends Service {
  // async create(room) {
  //   const roomId = await this.service.counter.counterHelper('room');
  //   const tempRoom = Object.assign(
  //     {
  //       room: roomId,
  //     },
  //     room
  //   );
  //   return this.app.model.Room.create(tempRoom).exec();
  // }
  // // 按创建时间降序获取某个用户名下的所有房间
  // getRooms(owner) {
  //   return this.app.model.Room.find({ owner })
  //     .sort({ _id: -1 })
  //     .exec();
  // }

  // getRoom(roomInfo) {
  //   return this.app.model.Room.findOne({ roomInfo }).exec();
  // }

  // delRoom(room) {
  //   return this.app.Room.remove({ room }).exec();
  // }
  test() {
    console.log(111);
  }
}

module.export = RoomService;
