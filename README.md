1. What is RxJS?
RxJS deals with single API ( called Observables ) to deal with data coming from multiple sources like data streams.

2. What are types of streams of data?
Synchronus Data
Asynchronus Data - callbacks adn promises
Getting Data from Server as HTTP calls 
DOM events - event handles
Functions with return value

3. Understand Observer Software pattern and how RxJS uses observer pattern with Observables - RxJS.
![Alt text](image.png)
![Alt text](image-1.png)
![Alt text](image-2.png)
![Alt text](image-3.png)
![Alt text](image-4.png)
![Alt text](image-5.png)
![Alt text](image-6.png)
![Alt text](image-8.png)
![Alt text](image-7.png)

4. Integrating RxJS library with other popular Frameworks like Angular, Vue, and React - RxJS.

7. Observables vs Functions. Understand the similarities & differences between them - RxJS.

8. Cancelling the Subscribed Observable execution using the Subscription unsubscribe method - RxJS

9. Avoid Memory leakage when subscribing and unsubscribing Custom Observable by cleaning Code - RxJS

10. Understanding RxJS Operators. Two kinds of operators like Pipeable & Creation Operators in RxJS.
![Alt text](image-9.png)
![Alt text](image-10.png)
![Alt text](image-11.png)
![Alt text](image-12.png)
![Alt text](image-13.png)
![Alt text](image-14.png)
![Alt text](image-15.png)

11. Implement multiple operators for observable using pipe method in RxJS
12. Choose right RxJS Operator from the list of categories of operators for an Observable - RxJS
![Alt text](image-16.png)
![Alt text](image-17.png)
![Alt text](image-18.png)
![Alt text](image-19.png)
![Alt text](image-20.png)
![Alt text](image-21.png)

13. RxJS Operators marble Diagram. Understand the functionality of operators by using Marble - RxJS

Buffer Buffer Count Buffer Time Buffer Toggle Buffer When Take TakeLast TakeUntil TakeWhile Skip SkipLast SkipUntil SkipWhile Distinct DistinctUntilChanged DistinctUntilKeyChanged Filter Sample Audit Throttle First Last Debounce ElementAt IgnoreElements Single Map MapTo Ajax

14. Higher Order Observables. What are Higher order mapping operators and why to use it - RxJS.
![Alt text](image-22.png)
![Alt text](image-23.png)
![Alt text](image-24.png)
![Alt text](image-25.png)
![Alt text](image-26.png)
![Alt text](image-27.png)
![Alt text](image-28.png)
![Alt text](image-29.png)

Merge Map showing concept of outer and inner observables:
 of(1, 2, 3) //outerobservable
      .pipe(
        mergeMap((value) => {
          return of(value * 10); //inner observable
        })
      )
      .subscribe((data) => {
        console.log(data);
      });
    of(1, 2, 3)
      .pipe(
        mergeMap((id) => {
          return ajax(`https://jsonplaceholder.typicode.com/posts/${id}`);
        })
      )
      .subscribe((data) => {
        console.log(data.response);
      });

15. MergeMap vs ConcatMap vs SwitchMap

16. What are RxJS Subjects. Benefits of using the Subject over observable in RxJS.
![Alt text](image-30.png)
![Alt text](image-31.png)
![Alt text](image-32.png)
![Alt text](image-33.png)
![Alt text](image-34.png)
![Alt text](image-35.png)
![Alt text](image-36.png)
![Alt text](image-37.png)
![Alt text](image-38.png)
![Alt text](image-39.png)
![Alt text](image-40.png)
![Alt text](image-41.png)
![Alt text](image-42.png)

17.  Multicast and Unicast Observables. Why Subjects are multicast and Observables are Unicast - RxJS
![Alt text](image-43.png)
![Alt text](image-44.png)
![Alt text](image-45.png)
![Alt text](image-46.png)
![Alt text](image-47.png)
![Alt text](image-48.png)
![Alt text](image-49.png)
![Alt text](image-50.png)
![Alt text](image-51.png)
![Alt text](image-52.png)
![Alt text](image-53.png)
![Alt text](image-54.png)

18. Cold Observable vs Hot Observable. Learn differences between the cold & Hot Observables - RxJS.
![Alt text](image-55.png)
![Alt text](image-56.png)
![Alt text](image-57.png)
![Alt text](image-58.png)
![Alt text](image-59.png)
![Alt text](image-60.png)
![Alt text](image-61.png)
![Alt text](image-62.png)
![Alt text](image-63.png)
![Alt text](image-64.png)
![Alt text](image-65.png)
![Alt text](image-66.png)
![Alt text](image-67.png)
6315499
19.  How to Convert Cold Observable to Hot Observable using Subject with example - RxJS
20. Behavior Subject | Difference between Subject and Behavior Subject - RxJS.
![Alt text](image-68.png)
![Alt text](image-69.png)
![Alt text](image-70.png)
![Alt text](image-71.png)
![Alt text](image-72.png)
![Alt text](image-73.png)
21. Types of Subject
22. RxJS CatchError Operator. Learn Error Handling CatchError Operator for observables Error - RxJS.
23. RxJS CombineLatest Operator. Learn Join Creation CombineLatest Operator - RxJS
24. RxJS Concat Operator. Learn RxJS Join Creation Operator Concat - RxJS
25. RxJS Merge Operator
26. RxJS Partition Operator
27. RxJS Race Operator. 
28. RxJS Schedulers. Learn Async, Asap, Queue Schedulers in the RxJS Observables.
![Alt text](image-74.png)
![Alt text](image-75.png)
![Alt text](image-76.png)
![Alt text](image-77.png)
![Alt text](image-78.png)
![Alt text](image-79.png)
![Alt text](image-80.png)
![Alt text](image-81.png)
![Alt text](image-82.png)
30. Merge vs MergeAll vs MergeMap operators and its Differences - RxJS.
31. Concat vs ConcatAll vs ConcatMap operators and its differences in RxJS.
32. MergeMap vs ConcatMap vs SwitchMap vs ExhaustMap operators and its differences - RxJS
