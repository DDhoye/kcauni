export class studentdata {
    id: string = '';
    name: string = '';
    admNo: string = '';
    course: string = '';
    email: string = '';
    mobileNo: string = '';
  
    // Method to convert class instance to plain object
    toPlainObject() {
      return {
        id: this.id,
        name: this.name,
        admNo: this.admNo,
        course: this.course,
        email: this.email,
        mobileNo: this.mobileNo,
      };
    }
  }