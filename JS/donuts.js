var donuts = [{
        type: "Jelly",
        cost: 1.22
    },

    {
        type: 'Chocolate',
        cost: 2.45
    },

    {
        type: 'Cider',
        cost: 1.59
    },

    {
        type: 'Boston Cream',
        costs: 5.99
    }
]

donuts.forEach((element) => {
    console.log(element.type + " donuts cost $" + element.cost + " each");
})


/* Understanding forEach Array

array.forEach(callback(item, index, array))


const albums = [{ title: 'title1',id: 1}, {title: 'title2',id: 2},{title: 'title3',id: 3}]

var idToFind = 2;
albums.forEach((element) => {
  if (element.id == idToFind) {
    console.log(element.title)
  }
})

*/