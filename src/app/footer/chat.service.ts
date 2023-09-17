
// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable } from 'rxjs';
// // import { io } from "socket.io-client";
// // import * as io  from "socket.io-client";
// import { Socket } from 'ngx-socket-io';  
// // const server = http.createServer(app);
// const io = require('socket.io-client')


// @Injectable({
//   providedIn: 'root',
// })
// export class ChatService {
//   constructor(private socket: Socket) { }

// 	// emit event
// 	// fetchMovies() {
// 	// 	this.socket.emit('fetchMovies');
// 	// } 

// 	// // listen event
// 	// OnFetchMovies() {
// 	// 	return this.socket.fromEvent('fetchMovies');
// 	// }
//   private msg = new BehaviorSubject([]);
//   chat_msg = this.msg.asObservable();
//     public message$: BehaviorSubject<string> = new BehaviorSubject('');
//     // constructor() {}
  
//     // socket = io('http://207.244.228.174:5010/chat/4/');
  
//     public sendMessage(message:any) {
//       this.socket.emit('message', message);
//     }
  
//     public getNewMessage = () => {
//       this.socket.on('message', (message:any) =>{
//         this.message$.next(message);
//       });
      
//       return this.message$.asObservable();
//     };
// }


import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';

@Injectable()
export class ChatService {
  private url = 'http://207.244.228.174:5010/chat/testing/';
  constructor(private socket: Socket) {}
  private msg = new BehaviorSubject([]);
  chat_msg = this.msg.asObservable();
 public message$: BehaviorSubject<string> = new BehaviorSubject('');
  // public getNewMessage = () => {
  //     this.socket = io(this.url);
  //         this.socket.on('message', (message:any) =>{
  //           this.message$.next(message);
  //         });
          
  //         return this.message$.asObservable();
  //       };



        sendMessage(msg: string) {
          this.socket.emit('message', msg);
        }
        getMessage() {
          return this.socket.fromEvent('message').pipe(map((data) => data));
        }
}