
import { Component, Renderer2, ElementRef } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { AuthService } from '../app.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


declare function visible(): any
declare function errorsjs(): any
declare function buttonclick(): any
declare function linkdinres(): any
declare function jobankRes(): any
declare function reset(): any


@Component({
  selector: 'app-view-jobs',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './view-jobs.component.html',
  styleUrl: './view-jobs.component.css',
})
export class ViewJobsComponent {

  constructor(private auth: AuthService,
    private sanitizer: DomSanitizer,
  ) {
  }

  searchList = { "skill": "", "location": "", "pagenumber": 0 }

  // page number
  indeedpage = 50
  linkdinpage = 4
  jobankpage = 1

  // result arrays
  resultIndeed: any = []
  resultLinkdin: any = []
  resultJobank: any = []
  result: any = []

  // searches all
  searchAll() {
    var valid = this.errors()
    if (valid) {
      reset();
      buttonclick();
      this.resultIndeed = []
      this.resultLinkdin = []
      this.resultJobank = []
      this.result = []
      console.log("WRIGHT")
      this.sendSearchLinkdin().then(result => {
        if (result) {
          this.sendSearchJobank().then(result => {
            if (result) {
              this.combineTwo()
              visible()
            }
          })
        }
      });
    }
    else {
      console.log("wrogn")
    }
  }

  loadmoreMain() {
    this.sendSearchLinkdin().then(result => {
      if (result) {
        this.sendSearchJobank().then(result => {
          if (result) {
            this.combineTwo()
          }
        })
      }
    });
  }
  sendSearchIndeed() {
    // return new Promise((resolve, reject) => {
    //   this.auth.IndeedSearch(this.searchList)
    //     .subscribe({
    //       next: (res) => {
    //         console.log(res);
    //         // if (res = []) {
    //         //   this.resultIndeed.push("Nothing to display");
    //         // }
    //         this.resultIndeed.push(res);
    //         console.log(this.resultIndeed);
    //         resolve(true); // Resolve the promise with true once the operation is complete
    //       },
    //       error: (err) => {
    //         console.error(err);
    //         resolve(false); // Resolve the promise with false if there's an error
    //       }
    //     });
    // });
  }

  sendSearchLinkdin(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.searchList.pagenumber = 0
      this.auth.LinkdinSearch(this.searchList)
        .subscribe({
          next: (res: any) => {
            if (res == null) {
              console.log("No input")
              linkdinres();
            }
            this.resultLinkdin.push(res);
            resolve(true); // Resolve the promise with true once the operation is complete
          },
          error: (err) => {
            console.error(err);
            resolve(false); // Resolve the promise with false if there's an error
          }
        });
    });
  }

  sendSearchJobank(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.searchList.pagenumber = 1
      this.auth.JobankSearch(this.searchList)
        .subscribe({
          next: (res: any) => {
            console.log(res)
            if (res.length == 0) {
              console.log("No input")
              jobankRes();
            }
            this.resultJobank.push(res);
            resolve(true); // Resolve the promise with true once the operation is complete
          },
          error: (err) => {
            console.error(err);
            resolve(false); // Resolve the promise with false if there's an error
          }
        });
    });
  }

  //  Loading more searchings
  searchIndeedMore() {
    // this.searchList.pagenumber = this.indeedpage
    // this.auth.IndeedSearch(this.searchList)
    //   .subscribe({
    //     next: (res) => {
    //       this.resultIndeed.push(res)
    //       this.indeedpage += 50
    //       return true
    //     }
    //   })
  }


  searchLinkdinMore(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.searchList.pagenumber = this.linkdinpage
      this.auth.LinkdinSearch(this.searchList)
        .subscribe({
          next: (res) => {
            this.resultLinkdin.push(res)
            this.linkdinpage += 5
            resolve(true);
          },
          error: (err) => {
            console.error(err);
            resolve(false); // Resolve the promise with false if there's an error
          }
        });
    });
  }

  searchJobankMore(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.searchList.pagenumber = this.jobankpage
      this.auth.JobankSearch(this.searchList)
        .subscribe({
          next: (res) => {
            this.resultJobank.push(res)
            this.jobankpage += 3
            resolve(true);
          },
          error: (err) => {
            console.error(err);
            resolve(false); // Resolve the promise with false if there's an error
          }
        })
    });
  }


  sanitizeUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  combineTwo() {
    this.result = []
    for (let j = 0; j < this.resultJobank.length; j++) {
      const minLength = Math.min(this.resultJobank[j].length, this.resultLinkdin[j].length);
      for (let i = 0; i < minLength; i++) {
        this.result.push(this.resultLinkdin[j][i], this.resultJobank[j][i]);
      }

      // Add remaining elements from longer lists if any
      this.result.push(...this.resultJobank[j].slice(minLength), ...this.resultLinkdin[j].slice(minLength));

    }
  }

  // combineAll() {
  //   const minLength = Math.min(this.resultIndeed.length, this.resultJobank.length, this.resultLinkdin.length);

  //   for (let i = 0; i < minLength; i++) {
  //     this.result.push(this.resultIndeed[i], this.resultJobank[i], this.resultLinkdin[i]);
  //   }

  //   // Add remaining elements from longer lists if any
  //   this.result.push(...this.resultIndeed.slice(minLength), ...this.resultJobank.slice(minLength), ...this.resultLinkdin.slice(minLength));

  //   console.log("Combined List:", this.result);
  // }

  errors() {
    if (this.searchList.skill.includes(' ')) {
      console.log("String contains space");
      const words = this.searchList.skill.split(" ");
      if (words.length > 2) {
        console.log("User input contains more than 2 words");
        errorsjs()
        return false
      } else {
        var indexx = this.searchList.skill.indexOf(' ')
        this.searchList.skill = this.searchList.skill.substring(0, indexx) + '+' + this.searchList.skill.substring(indexx + 1);
      }
    }
    else if (this.searchList.skill.length > 20 || this.searchList.skill.length < 1) {
      errorsjs()
      return false
    }
    return true

  }
}

