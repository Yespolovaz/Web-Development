export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  link: string;
}

export const products = [
{
  id: 1,
  name: 'IPhone 11',
  price: 655.0,
  description: 'Smart Phone Apple iPhone 11 128Gb Slim Box',
  image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h17/h14/31489167425566/apple-iphone-11-128gb-slim-box-cernyj-100692388-1-Container.jpg',
  rating: 4.8,
  link:"https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000#!/item"
},
{
  id: 2,
  name: 'IPhone 12',
  price: 824.19,
  description: 'Smart Phone Apple iPhone 12 128Gb',
  image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h13/ha5/33278501191710/apple-iphone-12-128gb-cernyj-100656960-1-Container.jpg',
  rating: 4.8,
  link:"https://kaspi.kz/shop/p/apple-iphone-12-128gb-chernyi-100656960/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy15OGrjx3cUri2LGIj4DG6zeMOGx99cu7mY1vOW3_fbNNjmWXDVyGBoCzKoQAvD_BwE#!/item"
},
{
  id: 3,
  name: 'IPhone 13',
  price: 835.7,
  description: 'Smart Phone Apple iPhone 13 128Gb',
  image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/hc0/46392662523934/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg',
  rating: 4.8,
  link:"https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy15OGrjx3cUri2LGIj4DG6zeMOGx99cu7mY1vOW3_fbNNjmWXDVyGBoCzKoQAvD_BwE#!/item"
},
{
  id: 4,
  name: 'IPhone 14',
  price: 941.31,
  description: 'Apple iPhone 14 128Gb',
  image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8f/h61/63072540131358/apple-iphone-14-128gb-cernyj-106363023-1.jpg',
  rating: 4.9,
  link:"https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy15OGrjx3cUri2LGIj4DG6zeMOGx99cu7mY1vOW3_fbNNjmWXDVyGBoCzKoQAvD_BwE#!/item"
},
{
  id: 5,
  name: 'Galaxy A23',
  price: 234,
  description: 'Smart Phone Samsung Galaxy A23 ',
  image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb5/ha6/49792685244446/smartfon-samsung-galaxy-a23-sm-a235fzkkskz-128gb-black-104348541-1.jpg',
  rating: 4.5,
  link:"https://kaspi.kz/shop/p/samsung-galaxy-a23-6-gb-128-gb-chernyi-104348541/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy15OGrjx3cUri2LGIj4DG6zeMOGx99cu7mY1vOW3_fbNNjmWXDVyGBoCzKoQAvD_BwE#!/item"
},
{
  id: 6,
  name: 'Acer Nitro 5',
  price: 872.41,
  description: 'Laptop Acer Nitro 5 AN515-57 NH.QEKER.004 Black',
  image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2e/hc4/67236399185950/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028-1.jpg',
  rating: 4.6,
  link:"https://kaspi.kz/shop/p/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy-Vz4_7MS_Ra4b1VRmDl7z-jG8yrhE89KEKVcBc9FG8B9qqWMP_pKRoCUjgQAvD_BwE#!/item"
},
{
  id: 7,
  name: 'Lenovo IdeaPad 3',
  price: 369.17,
  description: 'Laptop Lenovo IdeaPad 3 15ITL6 82H8005GRK Gray',
  image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8f/h3a/66993674190878/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705-1.jpg',
  rating: 4.0,
  link:"https://kaspi.kz/shop/p/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy-Vz4_7MS_Ra4b1VRmDl7z-jG8yrhE89KEKVcBc9FG8B9qqWMP_pKRoCUjgQAvD_BwE#!/item"
},
{
  id: 8,
  name: 'ASUS Laptop',
  price: 536.79,
  description: 'Laptop ASUS X515EA-BQ3144W I385SUW1 90NB0TY1-M02ZL0 Gray',
  image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb8/hbd/65953424277534/asus-x515ea-bq3144w-i385suw1-90nb0ty1-m02zl0-temno-seryi-107650928-1.jpg',
  rating: 4.8,
  link:"https://kaspi.kz/shop/p/asus-x515ea-bq3144w-i385suw1-90nb0ty1-m02zl0-temno-seryi-107650928/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy-Vz4_7MS_Ra4b1VRmDl7z-jG8yrhE89KEKVcBc9FG8B9qqWMP_pKRoCUjgQAvD_BwE#!/item"
},
{
  id: 9,
  name: 'HP Laptop',
  price: 402.53,
  description: 'Laptop HP 15s-eq1387ur 4Z3A4EA Gray',
  image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3f/h8f/67253149204510/hp-15s-eq1387ur-4z3a4ea-serebristyi-108203227-1.jpg',
  rating: 4.6,
  link:"https://kaspi.kz/shop/p/hp-15s-eq1387ur-4z3a4ea-serebristyi-108203227/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy-Vz4_7MS_Ra4b1VRmDl7z-jG8yrhE89KEKVcBc9FG8B9qqWMP_pKRoCUjgQAvD_BwE#!/item"
},
{
  id: 10,
  name: 'MacBook Air 13',
  price: 1118.28,
  description: 'Laptop Apple MacBook Air 13 MGN93 Gray',
  image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd6/h5b/33271772446750/apple-macbook-air-2020-13-3-mgn93-serebristyj-100798912-1-Container.jpg',
  rating: 4.9,
  link:"https://kaspi.kz/shop/p/apple-macbook-air-13-mgn93-serebristyi-100798912/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy-Vz4_7MS_Ra4b1VRmDl7z-jG8yrhE89KEKVcBc9FG8B9qqWMP_pKRoCUjgQAvD_BwE#!/item"
}
]