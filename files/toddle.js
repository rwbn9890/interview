let a = {}
let b = {}

a == b

let a = {name:"Ok"}
let b = {name:"Ok"}

a === b


let a = {name:"Ok"}
let b = {...a}

a == b
a.name == b.name

let a = {person:{name:"Ok"}}
let b = {person:{name:"Ok"}}

a.person == b.person
a.person === b.person

let a = {person:{name:"Ok"}}
let b = {...a}

a == b
a.person == b.person
a.person === b.person
a.person.name == b.person.name

let a = {person:{name:"Ok"}}
let b = JSON.parse(JSON.stringfy(a))


a == b
a.person == b.person
a.person === b.person
a.person.name == b.person.name

// --------------------------------------------------------------------
let users = [
  {
    id: 1,
    items: [{ id: "1", name: "Item 1" }]
  },
  {
    id: 2,
    items: []
  },
  {
    id: 3,
    items: [
      { id: "4", name: "Item 4" },
      { id: "5", name: "Item 5" }
    ]
  },
  {
    id: 4,
    items: []
  }
];

// Output - Remove those users who has empty items

let output = [
  {
    id: 1,
    items: [{ id: "1", name: "Item 1" }]
  },

  {
    id: 3,
    items: [
      { id: "4", name: "Item 4" },
      { id: "5", name: "Item 5" }
    ]
  }
];

// ---------------------------------------------------------------------
let users = [
    {
      id:1,
      items:[{id:"1",name:"Item 1"},{id:"2",name:"Item 2"}]
    },
    {
      id:2,
      items:[{id:"2",name:"Item 2"},{id:"3",name:"Item 3"}]
    },
    {
      id:3,
      items:[{id:"4",name:"Item 4"},{id:"5",name:"Item 5"},{id:"3",name:"Item 3"}]
    }
  ]
  
  
  //Output - Merge all items in the single list. List should be a unique by id
  
  let output = [
    {id:"1",name:"Item 1"},
    {id:"2",name:"Item 2"},
    {id:"3",name:"Item 3"},
    {id:"4",name:"Item 4"},
    {id:"5",name:"Item 5"}
  ]
