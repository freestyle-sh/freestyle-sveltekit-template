import { cloudstate } from "freestyle-sh";

@cloudstate
class Counter {
  static id = "counter";
  count = 0;

  increment() {
    this.count++;
    return this.count;
  }

  decrement() {
    this.count--;
    return this.count;
  }

  getCount() {
    return this.count;
  }
}
export default Counter;
