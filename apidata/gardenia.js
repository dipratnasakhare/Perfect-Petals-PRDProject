let arr = [
    {
      ImgUrl: 'https://www.1800flowers.com/grand-gardenia-18053',
      ImgUrlList: [
        'https://www.1800flowers.com/grand-gardenia-18053',
        'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/18053xlycx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
      ],
      Name: 'Grand Gardenia',
      Price: '$39.99 - $86.99'
    },
    {
      ImgUrl: 'https://www.1800flowers.com/plants-graceful-gardenia-158086',
      ImgUrlList: [
        'https://www.1800flowers.com/plants-graceful-gardenia-158086',
        'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/158086lgwcx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
      ],
      Name: 'Graceful Gardenia',
      Price: '$39.99 - $86.99'
    },
    {
      ImgUrl: 'https://www.1800flowers.com/gardenia-bonsai-18202',
      ImgUrlList: [
        'https://www.1800flowers.com/gardenia-bonsai-18202',
        'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/18202lycx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'    ],
      Name: 'Gardenia Bonsai',
      Price: '$54.99 - $91.99'
    },
    {
      ImgUrl: 'https://www.1800flowers.com/graceful-gardenia-plant-157450',
      ImgUrlList: [
        'https://www.1800flowers.com/graceful-gardenia-plant-157450',
        'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/157450mx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
      ],
      Name: 'Delightful Gardenia Plant',
      Price: '$39.99 - $86.99'
    },
    {
      ImgUrl: 'https://www.1800flowers.com/gardenia-topiary-18238',
      ImgUrlList: [
        'https://www.1800flowers.com/gardenia-topiary-18238',
        'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/18238x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
      ],
      Name: 'Gardenia Topiary',
      Price: '$64.99'
    },
    {
      ImgUrl: 'https://www.1800flowers.com/blooming-love-gardenia-158390',
      ImgUrlList: [
        'https://www.1800flowers.com/blooming-love-gardenia-158390',
        'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/158390sx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
      ],
      Name: 'Blooming Love Gardenia',
      Price: '$39.99'
    },
    {
      ImgUrl: 'https://www.1800flowers.com/gardenia-floor-plant-158015',
      ImgUrlList: [
        'https://www.1800flowers.com/gardenia-floor-plant-158015',
        'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/158015xlx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'    ],
      Name: 'Gardenia Floor Plant',
      Price: '$104.99'
    },
    {
      ImgUrl: 'https://www.1800flowers.com/blooming-gardenia-basket-18538',
      ImgUrlList: [
        'https://www.1800flowers.com/blooming-gardenia-basket-18538',
        'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/18538lycx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'    ],
      Name: 'Blooming Gardenia Plant in Basket',
      Price: '$39.99 - $86.99'
    }
  ]


console.log(arr.length)


let last = []
console.log(arr.length, arr1.length,  arr3.length,arr4.length,)

for(let i = 0; i < arr.length; i++){

    let a = []
    a.push(arr[i].img)
    a.push(arr1[i].img)
    // if(arr2[i].img !== ""){
    //     a.push(arr1[i].img)
    // }

    last.push({
        ImgUrl:arr[i].img,
        ImgUrlList:a,
        Name:arr3[i].name,
        Price:arr4[i].price,
    })
}

console.log(last, last.length)