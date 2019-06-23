import { User } from './user';

export class UserList {
  private list: User[] = [];
  
  constructor() {}
  
  public add(user: User){
    this.list.push(user);
    
    return user;
  }

  public update(id: string, name: string) {
    const user = this.list.find(x=> x.id === id);

    if (user ) {
      user.name = name;
    }

    console.log('Update user', this.list);

    return user;
  }

  public getUserList() {
    return this.list;
  }

  public getUser(id: string) {
    return this.list.find(user => user.id === id);    
  }

  public getUsersInRoom(room: string) {
    return this.list.filter(user => user.room === room);
  }

  public deleteUser(id: string) {
    const tempUser = this.getUser(id);

    if (tempUser) {
      this.list = this.list.filter(x=> x.id !== id);
    }
    
    return tempUser;
  }
}