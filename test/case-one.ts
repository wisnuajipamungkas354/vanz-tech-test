type IFruit = {
  fruitId: number,
  fruitName: string,
  fruitType: 'IMPORT' | 'LOCAL',
  stock: number
}

const fruits: IFruit[] = [
  {
    fruitId: 1,
    fruitName: 'Apel',
    fruitType: 'IMPORT',
    stock: 10
  },
  {
    fruitId: 2,
    fruitName: 'Kurma',
    fruitType: 'IMPORT',
    stock: 20
  },
  {
    fruitId: 3,
    fruitName: 'apel',
    fruitType: 'IMPORT',
    stock: 50
  },
  {
    fruitId: 4,
    fruitName: 'Manggis',
    fruitType: 'LOCAL',
    stock: 100
  },
  {
    fruitId: 5,
    fruitName: 'Jeruk Bali',
    fruitType: 'LOCAL',
    stock: 10
  },
  {
    fruitId: 5,
    fruitName: 'KURMA',
    fruitType: 'IMPORT',
    stock: 20
  },
  {
    fruitId: 5,
    fruitName: 'Salak',
    fruitType: 'LOCAL',
    stock: 150
  }
]

function getUniqueFruitName() {
  const listFruit: string[] = [];

  fruits.forEach((fruit) => {
    const fruitName = fruit.fruitName.toUpperCase();
    if (!listFruit.includes(fruitName)) {
      listFruit.push(fruitName);
    }
  });

  return listFruit;
}

function getFruitUniqueType() {
  const fruitType = [...new Set(fruits.map((fruit) => fruit.fruitType.toUpperCase()))];
  return fruitType;
}

function groupFruitByType() {
  type FruitType = {
    [key: string]: string[],
  }

  let fruitList: FruitType = {};
  const listType = getFruitUniqueType();
  
  listType.forEach((type) => {
    fruitList[type] = fruits.filter((fruit) => fruit.fruitType == type ? fruit.fruitName : null).map((fruit) => fruit.fruitName);
  });

  return fruitList;
};

function totalFruitByType() {
  const fruitType = getFruitUniqueType();

  type totalFruit = {
    [key: string]: number;
  }

  let result: totalFruit = {}; 
  fruitType.map((type) => {
    result[type] = fruits.filter((fruit) => fruit.fruitType == type ? fruit.stock : 0).reduce((total, current) => total + current.stock, 0);
  });

  return result;
}

console.log('1. List Buah : ' + getUniqueFruitName());
console.log('2. Total wadah : ' + getFruitUniqueType().length);
console.log('3. List buah berdasarkan tipe wadah : ' + JSON.stringify(groupFruitByType()));
console.log('4. Total buah di masing-masing tipe wadah : ' + JSON.stringify(totalFruitByType()));