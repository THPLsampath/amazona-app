import bcrypt from 'bcryptjs';

export const data = {
    users: [
        {
            name: 'prasanna',
            email: 'admin@example.com',
            password: bcrypt.hashSync("12345", 8),
            iaAdmin: true
        },
        {
            name: 'sampath',
            email: 'user@example.com',
            password: bcrypt.hashSync("12345", 8),
            iaAdmin: false
        }
    ],
    products: [
        {
            name: 'nick slim shart',
            category: 'shart',
            image: '/images//product-1.jpg',
            price: 120,
            brand: 'Nike',
            rating: 4.3,
            numReviews: 10,
            descripation: 'high qulity produvct',
            countInStock: 50
        },
        {

            name: 'Adidas fit shart',
            category: 'shart',
            image: '/images//product-2.jpg',
            price: 130,
            brand: 'Adidas',
            rating: 3.0,
            numReviews: 40,
            descripation: 'high qulity produvct',
            countInStock: 0
        },
        {

            name: 'Locost free shart',
            category: 'shart',
            image: '/images//product-3.jpg',
            price: 120,
            brand: 'Locost',
            rating: 2.5,
            numReviews: 10,
            descripation: 'high qulity produvct',
            countInStock: 60
        },
        {

            name: 'nick slim Pants',
            category: 'Pants',
            image: '/images//product-4.jpg',
            price: 78,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            descripation: 'high qulity produvct',
            countInStock: 23
        },
        {

            name: 'puma slim pant',
            category: 'pant',
            image: '/images//product-5.jpg',
            price: 80,
            brand: 'puma',
            rating: 4.5,
            numReviews: 40,
            descripation: 'high qulity produvct',
            countInStock: 8
        },
        {

            name: 'Adidas slim pant',
            category: 'pant',
            image: '/images//product-6.jpg',
            price: 56,
            brand: 'Adidas',
            rating: 3.5,
            numReviews: 10,
            descripation: 'high qulity produvct',
            countInStock: 0
        },
    ]
}