import { of, from } from 'rxjs';
import { map, tap, mergeMap, pluck } from 'rxjs/operators';
import axios from 'axios';


from([1, 2, 3, 4, 5, 6])
  .pipe()
  .subscribe();


//   mergeMap(x => axios.get('https://feb-api.com/challenges')),
//   pluck('data'),
//   tap(x => console.log(x)),
//   tap(chals => chals.forEach(element => {
//       console.log('1')
//     axios.get('https://feb-api.com/users')
//   }))