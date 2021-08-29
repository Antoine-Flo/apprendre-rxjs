# Rxjs Operators

Une références et quelques mots au sujet des opérateurs Rxjs

---

## Creation

Ces opérateurs permettent de tout transformer en "observable". En programmation réactive, tout est flux.

### *ajax* ⭐
.

🚨 l'opérateur ajax ne fonctionna pas avec Node, il doit s'executer grace au navigateur.

```js
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const obs$ = ajax(`https://api.github.com/users?per_page=5`).pipe(
  map(userResponse => console.log('users: ', userResponse)),
  catchError(error => {
    console.log('error: ', error);
    return of(error);
  })
);
```

### create

### defer

### empty

### from ⭐

### fromEvent

### generate

### interval

### of ⭐

### range

### throw

### timer

---

## Utility

### tap / do ⭐

### delay ⭐

### delayWhen

### dematerialize

### finalize / finally

### let

### repeat

### repeatWhen

### timeInterval

### timeout

### timeoutWith

### toPromise

---

## Filtering

### audit

### auditTime

### debounce

### debounceTime ⭐

### distinct

### distinctUntilChanged ⭐

### distinctUntilKeyChanged

### filter ⭐

### find

### first

### ignoreElements

### last

### sample

### single

### skip

### skipUntil

### skipWhile

### take ⭐

### takeLast

### takeUntil ⭐

### takeWhile

### throttle

### throttleTime

---

## Transformation

### buffer

### bufferCount

### bufferTime ⭐

### bufferToggle

### bufferWhen

### concatMap ⭐

### concatMapTo

### exhaustMap

### expand

### groupBy

### map ⭐

### mapTo

### mergeMap / flatMap ⭐

### mergeScan

### partition

### pluck

### reduce

### scan ⭐

### switchMap ⭐

### switchMapTo

### toArray

### window

### windowCount

### windowTime

### windowToggle

### windowWhen

---

## Error handling

### catch / catchError ⭐

### retry

### retryWhen

---

## Combination

### combineAll

### combineLatest ⭐

### concat ⭐

### concatAll

### endWith

### forkJoin

### merge ⭐

### mergeAll

### pairwise

### race

### startWith ⭐

### withLatestFrom ⭐

### zip

---

## Multicasting

### publish

### multicast

### share ⭐

### shareReplay ⭐

---

## Conditional

### defaultIfEmpty

### every

### iif

### sequenceequal
