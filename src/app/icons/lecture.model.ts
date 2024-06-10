export class lecturedata {
    id: string = '';
    name: string = '';
    email: string = '';
    mobileNo: string = '';
  
    // Method to convert class instance to plain object
    toPlainObject() {
      return {
        id: this.id,
        name: this.name,
        email: this.email,
        mobileNo: this.mobileNo,
      };
    }
  }