const faker= require('faker');
const boom= require('@hapi/boom')

class ProductsServices {

  constructor () {
    this.products= []
    this.generate()
  }

  generate() {
    const limit= 100
    for (let i=0; i<limit; i++){
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: Number(faker.commerce.price()),
        description: faker.commerce.productDescription(),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
      })
    }
  }

  async create(data) {
    const newProduct= {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct)
  }

  async find() {
    const products= this.products
    if (!products) {
      throw boom.notFound('Products not found')
    }
    return products
  }

  async findOne(id) {
    const product= this.products.find(element => element.id===id)
    if (!product) {
      throw boom.notFound('Product not found')
    }
    if (product.isBlock) {
      throw boom.conflict('Product is blocked')
    }
    return product
  }

  async update(id, changes) {
    const index= this.products.findIndex(element => element.id === id)
    if (index === -1) {
      throw boom.notFound('Product not found')
    }
    const product= this.products[index]
    this.products[index]= {
      ...product,
      ...changes,
    }
    return this.products[index]
  }

  async delete(id) {
    const index= this.products.findIndex(element => element.id === id)
    if (index === -1) {
      throw boom.notFound('Product not found')
    }
    this.products.splice(index, 1)
    return { id }
  }
}

module.exports= ProductsServices
