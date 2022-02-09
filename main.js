class MyCalendar {
  constructor() {

  }

  today() {
    const today = new Date();
    return today
  }

  yearMonthDate(str) {
    // if (str.length !== 8) {
    //   return '잘못된 입력입니다.'
    // }

    const test = new Date(str);
    return test;
  }
}

const test = new MyCalendar();

console.log(test.today());
console.log(test.yearMonthDate());