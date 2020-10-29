# Sort Objects

sort-objects is a js library for sorting array of objects based on priority.

## Installation

Use the package manager [npm]  to install sort-objects.

```bash
npm i sort-objects
```

## Usage

```typescript
let ps = require('sort-objects')

let objects = [
    {
        aaa:"AAAAA",
        bbb:1,
        ccc:{
            ddd:"ddd"
        }
    },
    {
        aaa:"ZZZ",
        bbb:2,
        ccc:{
            ddd:"eee"
        }
    },
    {
        aaa:"AAAAA",
        bbb:2,
        ccc:{
            ddd:"ddd"
        }
    }

]
```

#### Ascending
The Default is always ascending order
```typescript
objects.sort(ps.prioritySort(['aaa','bbb','ccc.ddd']));
console.log(objects)
```
##### Sorted
```json
[ { aaa: 'AAAAA', bbb: 1, ccc: { ddd: 'ddd' } },
  { aaa: 'AAAAA', bbb: 2, ccc: { ddd: 'ddd' } },
  { aaa: 'ZZZ', bbb: 2, ccc: { ddd: 'eee' } } ]
```

#### Descending 
```typescript
objects.sort(ps.prioritySort(['aaa','bbb','ccc.ddd'],"desc"))
console.log(objects)
```
##### Sorted
```json
[ { aaa: 'ZZZ', bbb: 2, ccc: { ddd: 'eee' } },
  { aaa: 'AAAAA', bbb: 2, ccc: { ddd: 'ddd' } },
  { aaa: 'AAAAA', bbb: 1, ccc: { ddd: 'ddd' } } ]
```