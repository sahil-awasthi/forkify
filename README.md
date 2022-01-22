[![Netlify Status](https://api.netlify.com/api/v1/badges/571488fc-f366-4107-b61a-a98217f4e943/deploy-status)](https://forkify-sahil.netlify.app/)

# Forkify 🍜

### Recipe application which can

1. Search recipe 🔍
2. Bookmark it 🔖
3. Change ingredient required according to servings 👯👯
4. Upload custom made recipe ⬆️

###### Using for portfolio purpose :link:[Sahil Awasthi](https://linktr.ee/sahilawasthi)

const ingredients = [];

Object.entries(data).forEach(([key, value]) => {  
 const [keyName, type, keyNo] = key.split('-');
const ingredientIndex = keyNo - 1;

    if (type !== 'ingredient') return;

    if (!ingredients[ingredientIndex]) ingredients[ingredientIndex] = {};

    ingredients[ingredientIndex][keyName] = value;

    delete data[key];

})

data.ingredients = ingredients;

console.log('data', data);
