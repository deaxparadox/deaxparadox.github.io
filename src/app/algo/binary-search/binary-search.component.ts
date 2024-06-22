import { Component, OnDestroy } from '@angular/core';
import { NgFor } from '@angular/common';

class BaseNumber {
  private numArr: Array<number>;
  constructor(numArr: Array<number>) {
    this.numArr = numArr;
  }

  search(target: number): boolean {
    for (let n of this.numArr) {
      if (n === target) {
        return true
      }
    }
    return false;
  }
  isNaN(target: number): boolean {
    if (Number.isNaN(target)) {
      return true;
    }
    return false;
  }
}

@Component({
  selector: 'app-binary-search',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './binary-search.component.html',
  styleUrl: './binary-search.component.scss'
})
export class BinarySearchComponent implements OnDestroy {
  colorDefault: string = "rgb(255, 159, 159)";
  private colorSearch: string = "rgb(255, 236, 129)";
  private colorFound: string = "greenyellow";
  private found = false;
  private foundInterval: any;



  resetColorDefault(): void {
    let items: NodeListOf<HTMLParagraphElement> = document.querySelectorAll("p.element-box-item");
    items.forEach(e => {
      e.style.backgroundColor = this.colorDefault
    })
  }

  reset(): void {
    clearInterval(this.foundInterval);
    this.resetColorDefault();

  }

  constructor() {
    // let baseNumber = new BaseNumber();
  }


  nums = [12, 23, 45, 53, 62, 75, 82, 91, 97, 123, 124, 199, 299];


  private search(target: number): boolean {
    for (let n of this.nums) {
      if (n === target) {
        return true
      }
    }
    return false;
  }

  private mark(nums: number[], found: boolean = false): void {
    this.resetColorDefault();
    console.log(nums);
    if (found) {
      let items: NodeListOf<HTMLParagraphElement> = document.querySelectorAll("p.element-box-item");
      if (items) {
        items.forEach((e) => {

          // console.log(e.innerText);
          for (let n of nums) {
            if (n === parseInt(e.innerText)) {
              e.style.backgroundColor = this.colorFound;
            }
          }
        })
      }
      
    } else {
      let items: NodeListOf<HTMLParagraphElement> = document.querySelectorAll("p.element-box-item");
      if (items) {
        items.forEach((e) => {

          // console.log(e.innerText);
          for (let n of nums) {
            if (n === parseInt(e.innerText)) {
              e.style.backgroundColor = this.colorSearch;
            }
          }
        })
      }
    }
  }

  find(): void {
    let element = document.querySelector("#bs-input-search") as HTMLInputElement;

    // 1. store in input.value in `value`.
    // 2. check whether number is NaN.
    // 3. convert the it to `number`.
    let value = parseInt(element.value);
    if (Number.isNaN(value)) {
      alert("Invalid Number")
      return;
    }
    value = parseInt(element.value);



    // search for the number exists in arrays,
    if (this.search(value)) {
      console.log(value);
    } else {
      alert("Target not in array.")
      return;
    }

    this.binary_search(value);

  }


  /*
  Binary serach algorithm
  */
  private binary_search(target: number): void {
    let low: number = 0;
    let high: number = this.nums.length;
    let mid: number;


    this.foundInterval = setInterval(() => {


      mid = Math.floor((low + high) / 2);

      if (target < this.nums[mid]) {
        high = mid;
        this.mark(this.nums.slice(low, high));
      } else if (target > this.nums[mid]) {
        low = mid;
        this.mark(this.nums.slice(low, high));
      } else {
        this.found = true;
        this.mark(this.nums.slice(mid, mid + 1), this.found)
      }

    }, 1000);

  }



  ngOnDestroy(): void {
      this.reset();
  }
}
