let arr = [
    {
      ImgUrl: 'https://www.1800flowers.com/farm-fresh-orchids-146802',
      ImgUrlList: [
        'https://www.1800flowers.com/farm-fresh-orchids-146802',
        'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/146802mbhv1x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
      ],
      Name: 'Exotic Breeze Orchids',
      Price: '$64.99 - $114.99'
    },
    {
      ImgUrl: 'https://www.1800flowers.com/farm-fresh-dyed-dendrobium-orchids-140953',
      ImgUrlList: [
        'https://www.1800flowers.com/farm-fresh-dyed-dendrobium-orchids-140953',
        'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/140953mbhv1x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
      ],
      Name: 'Ocean Breeze Orchids',
      Price: '$64.99 - $114.99'
    },
    {
      ImgUrl: 'https://www.1800flowers.com/tropics-anthurium-158303',
      ImgUrlList: [
        'https://www.1800flowers.com/tropics-anthurium-158303',
        'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/158303mx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
      ],
      Name: 'Tropics Anthurium',
      Price: '$64.99 - $114.99'
    },
    {
      ImgUrl: 'https://www.1800flowers.com/white-phalaenopsis-orchid-194767',
      ImgUrlList: [
        'https://www.1800flowers.com/white-phalaenopsis-orchid-194767',
        'https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/99200x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
      ],
      Name: 'White Phalaenopsis Orchid',
      Price: '$59.99'
    },
    {
      ImgUrl: 'https://www.1800flowers.com/purple-phalaenopsis-orchid-194766',
      ImgUrlList: [
        'https://www.1800flowers.com/purple-phalaenopsis-orchid-194766',
        'https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/99201x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
      ],
      Name: 'Purple Phalaenopsis Orchid',
      Price: '$59.99'
    },
    {
      ImgUrl: 'https://www.1800flowers.com/double-white-orchid-plant-191196',
      ImgUrlList: [
        'https://www.1800flowers.com/double-white-orchid-plant-191196',
        'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/191196x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
      ],
      Name: 'Double White Orchid Plant',
      Price: '$84.99'
    },
    {
      ImgUrl: 'https://www.1800flowers.com/double-purple-orchid-plant-191198',
      ImgUrlList: [
        'https://www.1800flowers.com/double-purple-orchid-plant-191198',
        'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/191198x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
      ],
      Name: 'Double Purple Orchid Plant',
      Price: '$84.99'
    },
    {
      ImgUrl: 'https://www.1800flowers.com/classic-white-dendrobium-dish-garden-18948',
      ImgUrlList: [
        'https://www.1800flowers.com/classic-white-dendrobium-dish-garden-18948',
        'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/18948x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}'
      ],
      Name: 'Classic Dendrobium Dish Garden',
      Price: '$69.99'
    }
  ]

console.log(arr.length)


let last = []
console.log(arr.length, arr1.length, arr3.length,arr4.length,)

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