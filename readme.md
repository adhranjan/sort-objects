# Sort Objects

sort-objects is a js library for sorting array of objects based on priority.

## Installation

Use the package manager [npm]  to install sort-objects.

```bash
npm i sort-objects
```

## Usage

```python
let ps = require('sort-objects')

let objects = [
    {
        name:"test",
        age:12,
        nested:{
            properties:12
        }
    },
    {
        name:"test",
        age:12,
        nested:{
            properties:2
        }
    }
]
objects.sort(ps.prioritySort(['name','age','nested.properties']));
console.log(objects)
```
