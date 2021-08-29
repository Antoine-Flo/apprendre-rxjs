# Rxjs Operators

Les opérateurs se classent en 8 catégories, cette classification se base sur le travail de Brian Troncone et l'excellent site <a href="https://www.learnrxjs.io/" target="blank">learn Rxjs</a>. Cette page n'est toutefois pas une simple traduction et apporte sa propre contribution à la documentation et à sa mise à jour (n'hésitez d'ailleurs pas à participer). Enjoy ❤

---

## Creation

Ces opérateurs permettent de tout transformer en "observable". En programmation réactive, tout est flux.

### *ajax* ⭐
Comme son nom l'indique, l'opératuer ajax transorme la réponse d'une requète Ajax en flux. L'opérateur accepte un URL sous forme de chaîne de charactére ou un object pour une requète plus détaillé (avec URL, méthode, headers, body)

🚨 l'opérateur ajax ne fonctionne pas avec Node, il doit s'executer grace au navigateur.

```js
import { ajax } from 'rxjs/ajax';

ajax(`https://api.github.com/users?per_page=5`).subscribe(x => console.log(x.response.fact))

// Output : "The technical term for a cat’s hairball is a “bezoar.”"
```

### *create*


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
