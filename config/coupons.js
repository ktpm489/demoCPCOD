const coupons = [
    {
        'title':'Clothes',
        'link': require('../images/coupons/clothing.svg'),
        'data': [
            'https://www.frugaa.com/promo/clothing/',
           'https://www.frugaa.com/promo/clothing/',
            'https://www.coupons.com/coupons/household-coupons-105/',
            'https://www.retailmenot.com/coupons/clothing',
            'https://www.groupon.com/goods/mens-clothing-shoes-and-accessories',
            'https://www.groupon.com/goods/womens-clothing-shoes-and-accessories',
            'https://www.livingsocial.com/goods/mens-clothing-shoes-and-accessories',
            'https://www.livingsocial.com/goods/womens-clothing-shoes-and-accessories',
            'https://www.shopathome.com/savings/clothing-coupons',
            'https://slickdeals.net/deals/apparel',
            'https://shirt.woot.com/catalog?ref=w_sh_ctlg#ref=shirt.woot.com/siteheader/catalog',
            'https://www.ebates.com/womens-clothing',
            'https://www.ebates.com/mens-clothing',
            'https://www.dealcatcher.com/clothing-accessories',
            'https://www.dealnews.com/c202/Clothing-Accessories/',
            'http://www.freeshipping.org/category/childrens-clothing/',
            'https://www.coupondunia.in/category/fashion/clothing',
            'https://cashkaro.com/product/clothing'
        ]
    },
    {
        'title': 'Food',
        'link': require('../images/coupons/food.svg'),
        'data': [
            'https://www.retailmenot.com/coupons/food',
            'https://www.coupons.com/coupons/food-coupons-107/',
            'https://www.frugaa.com/promo/food-and-beverage/',
            'https://www.shopathome.com/savings/food-and-wine-coupons',
            'http://freeshopping.co/restaurants/',
            'https://www.ebates.com/food-restaurants',
            'https://www.savings.com/coupons/food-and-beverage',
            'http://www.freeshipping.org/category/food/',
            'https://www.coupondunia.in/category/food-and-dining/food-ordering'

        ]

    },
    {
        'title' :'Travel',
        'link': require('../images/coupons/travel.svg'),
        'data':[
            'https://www.retailmenot.com/coupons/travel',
            'https://www.coupons.com/coupons/travel-coupons-597/',
            'https://www.frugaa.com/promo/travel/',
            'https://www.shopathome.com/travel-hub',
            'https://slickdeals.net/travel-deals/?src=catnav_travel',
            'http://freeshopping.co/travels/',
            'https://www.ebates.com/travel-vacations',
            'https://www.savings.com/coupons/travel',
            'https://www.dealnews.com/c206/Travel-Entertainment/',
            'http://www.freeshipping.org/category/travel/',
            'https://www.coupondunia.in/category/travel'

        ]

    },
    {
        'title': 'Beauty',
        'link': require('../images/coupons/makeup.svg'),
        'data': [
            'https://www.retailmenot.com/coupons/beauty',
            'https://www.coupons.com/coupons/personal-care-coupons-101/',
            'https://www.frugaa.com/promo/beauty/',
            'https://www.groupon.com/goods/health-and-beauty',
            'https://www.livingsocial.com/goods/health-and-beauty',
            'https://www.shopathome.com/savings/beauty-coupons',
            'https://slickdeals.net/deals/beauty/?src=catnav_beauty',
            'https://www.ebates.com/health-beauty',
            'https://www.savings.com/coupons/beauty-and-personal-care',
            'https://www.dealnews.com/c756/Health-Beauty/',
            'http://www.freeshipping.org/category/health-and-beauty/',
            'https://www.coupondunia.in/category/beauty-and-health',
            'https://cashkaro.com/product/health-beauty-products'

        ]

    },
    {
        'title': 'Shoes',
        'link': require('../images/coupons/shoes.svg'),
        'data': [
            'https://www.retailmenot.com/coupons/shoes',
            'https://www.frugaa.com/promo/shoes/',
            'https://www.shopathome.com/savings/shoe-coupons',
            'https://www.ebates.com/shoes-handbags',
            'https://www.dealcatcher.com/everything-else',
            'https://cashkaro.com/product/shoes'
        ]

    },
    {
        'title': 'Entertainment',
        'link': require('../images/coupons/entertainment.svg'),
        'data': [
            'https://www.retailmenot.com/coupons/entertainment',
            'https://www.frugaa.com/promo/art-and-entertainment/',
            'https://www.groupon.com/goods/entertainment-and-media',
            'https://www.livingsocial.com/goods/entertainment-and-media',
            'https://www.shopathome.com/savings/arts-and-entertainment-coupons',
            'https://slickdeals.net/deals/entertainment/?src=catnav_entertainment',
            'https://www.dealcatcher.com/games-entertainment',
            'https://www.savings.com/coupons/arts-and-entertainment',
            'http://www.freeshipping.org/category/entertainment/',
            'https://www.coupondunia.in/category/entertainment'

        ]

    },
    {
        'title': 'Electronics',
        'link': require('../images/coupons/electronics.svg'),
        'data': [
            'https://www.frugaa.com/promo/electronics/',
            'https://www.coupons.com/coupons/office-and-electronics-coupons-894/',
            'https://www.retailmenot.com/coupons/electronics',
            'https://www.groupon.com/goods/electronics',
            'https://www.livingsocial.com/goods/electronics',
            'https://www.shopathome.com/savings/electronic-coupons',
            'https://www.woot.com/category/electronics/all?ref=w_cnt_cdet_elec_1',
            'http://freeshopping.co/electronics/',
            'https://www.ebates.com/electronics-computers',
            'https://www.dealcatcher.com/electronics',
            'https://www.savings.com/coupons/electronics',
            'https://www.dealnews.com/c142/Electronics/',
            'http://www.freeshipping.org/category/electronics/',
            'https://cashkaro.com/product/electronics'
        ]

    },
    {
        'title': 'Accessories',
        'link': require('../images/coupons/accessories.svg'),
        'data': [
            'https://www.frugaa.com/promo/accessories/',
            'https://www.retailmenot.com/coupons/accessories',
            'https://www.shopathome.com/savings/accessories-coupons',
            'https://www.savings.com/coupons/apparel-and-accessories',
            'http://www.freeshipping.org/category/accessories/',
            'https://cashkaro.com/product/accessories-bags'
        ]

    },
    {
        'title': 'Sporting Goods',
        'link': require('../images/coupons/sproting.svg'),
        'data': [
            'https://www.frugaa.com/promo/sporting-goods/',
            'https://www.retailmenot.com/coupons/sports',
            'https://www.groupon.com/goods/sports-and-outdoors',
            'https://www.livingsocial.com/goods/sports-and-outdoors',
            'https://www.shopathome.com/savings/sports-and-outdoor-coupons',
            'https://www.woot.com/category/sport/all?ref=w_cnt_cdet_sprt_1',
            'https://www.ebates.com/sports-outdoors',
            'https://www.savings.com/coupons/sports-and-recreation',
            'https://www.dealnews.com/c211/Sports-Fitness/',
            'http://www.freeshipping.org/category/sporting-goods/',
            'https://www.coupondunia.in/category/sports-and-fitness'

        ]

    },
    {
        'title': 'Home And Graden',
        'link': require('../images/coupons/home.svg'),
        'data': [
            'https://www.retailmenot.com/coupons/homeandgarden',
            'https://www.frugaa.com/promo/home-and-garden/',
            'https://www.groupon.com/goods/for-the-home',
            'https://www.groupon.com/goods/grocery-and-household',
            'https://www.livingsocial.com/goods/grocery-and-household',
            'https://www.livingsocial.com/goods/for-the-home',
            'https://www.livingsocial.com/goods/auto-and-home-improvement',
            'https://www.shopathome.com/savings/home-and-garden-coupons',
            'https://slickdeals.net/deals/home',
            'https://www.woot.com/category/home/all?ref=w_cnt_cdet_home_1',
            'https://www.woot.com/category/tools/all?ref=w_cnt_cdet_tool_1',
            'http://freeshopping.co/groceries/',
            'https://www.ebates.com/home-garden-tools',
            'https://www.dealcatcher.com/games-entertainment',
            'https://www.savings.com/coupons/home-and-garden',
            'https://www.dealnews.com/c196/Home-Garden/',
            'http://www.freeshipping.org/category/home-and-garden/',
            'https://www.coupondunia.in/category/home-furnishing-and-decor',
            'https://cashkaro.com/product/home-and-kitchen'
        ]

    },
    {
        'title': 'Pets',
        'link': require('../images/coupons/pets.svg'),
        'data': [
            'https://www.frugaa.com/promo/pets/',
            'https://www.retailmenot.com/coupons/pets',
            'https://www.groupon.com/goods/pet-supplies',
            'https://www.livingsocial.com/goods/pet-supplies',
            'https://www.shopathome.com/savings/pet-coupons',
            'http://www.freeshipping.org/category/pet-supplies/',
            'https://www.coupondunia.in/category/miscellaneous'
        ]

    },
    {
        'title': 'Baby',
        'link': require('../images/coupons/baby.svg'),
        'data': [
            'https://www.frugaa.com/promo/baby-and-kids/',
            'https://www.retailmenot.com/coupons/baby',
            'https://www.groupon.com/goods/baby-kids-and-toys',
            'https://www.coupons.com/coupons/baby-and-toddler-coupons-5491/',
            'https://www.shopathome.com/savings/babies-and-kids-coupons',
            'https://www.ebates.com/baby-kids-toys',
            'https://www.savings.com/coupons/baby-and-nursery',
            'http://www.freeshipping.org/category/baby/',
            'https://www.coupondunia.in/category/kids-babies-and-toys',
            'https://cashkaro.com/product/babies-toys'
        ]

    },
    {
        'title': 'Automotive',
        'link': require('../images/coupons/automotive.svg'),
        'data': [
            'https://www.coupons.com/coupons/automotive-coupons-890/',
            'https://www.retailmenot.com/coupons/auto',
            'https://www.frugaa.com/promo/automotive/',
            'https://www.groupon.com/goods/auto-and-home-improvement',
            'https://www.shopathome.com/savings/automotive-coupons',
            'https://slickdeals.net/deals/auto',
            'https://www.savings.com/coupons/automotive',
            'http://www.freeshipping.org/category/automotive/',
            'https://www.coupondunia.in/category/automotive'
        ]

    },
    {
        'title': 'Books',
        'link': require('../images/coupons/books.svg'),
        'data': [
            'https://www.retailmenot.com/coupons/books',
            'https://www.frugaa.com/promo/books-music-video/',
            'https://www.livingsocial.com/goods/baby-kids-and-toys',
            'https://www.shopathome.com/savings/education-coupons',
            'https://www.ebates.com/books-digital-media',
            'https://www.savings.com/coupons/books-music-and-video',
            'https://www.dealnews.com/c178/Movies-Music-Books/',
            'http://www.freeshipping.org/category/books/',
            'https://www.coupondunia.in/category/books-and-stationary',
            'https://cashkaro.com/product/books-and-media'
        ]

    },
    {
        'title': 'Flowers',
        'link': require('../images/coupons/flowes.svg'),
        'data': [
            'https://www.frugaa.com/promo/flowers/',
            'https://www.retailmenot.com/coupons/flowers',
            'https://www.shopathome.com/savings/flower-and-plant-coupons',
            'https://www.savings.com/coupons/flowers-and-gifts',
            'https://www.dealnews.com/c636/Special-Occasion/',
            'http://www.freeshipping.org/category/flowers/',
            'https://www.coupondunia.in/category/gifts-and-jewellery'
        ]

    },
    {
        'title': 'Toys',
        'link': require('../images/coupons/toys.svg'),
        'data': [
            'https://www.frugaa.com/promo/toys/',
            'https://www.retailmenot.com/coupons/toys',
            'https://www.groupon.com/goods/toys',
            'https://www.livingsocial.com/goods/toys',
            'https://www.shopathome.com/savings/toys-and-games-coupons',
            'https://www.savings.com/coupons/toys-and-games',
            'https://www.dealnews.com/c186/Gaming-Toys/',
            'http://www.freeshipping.org/category/toys/',
            'https://cashkaro.com/product/babies-toys'
        ]

    },
    {
        'title': 'Photography',
        'link': require('../images/coupons/photo.svg'),
        'data': [
            'https://www.frugaa.com/promo/photography/',
            'https://www.retailmenot.com/coupons/photo',
            'https://www.savings.com/coupons/photo-printing',
            'http://www.freeshipping.org/category/photography/'
        ]
    },
    {
        'title': 'Gifts',
        'link': require('../images/coupons/gifts.svg'),
        'data': [
            'https://www.retailmenot.com/coupons/gifts',
            'https://www.coupons.com/coupons/flower-and-gift-coupons-886/',
            'https://www.livingsocial.com/goods/jewelry-and-watches',
            'https://www.shopathome.com/savings/gifts-and-party-supply-coupons',
            'https://www.ebates.com/flowers-gifts',
            'https://www.dealnews.com/c859/Gift-Cards/',
            'http://www.freeshipping.org/category/gifts/'
        ]

    },
    {
        'title': 'Store',
        'link': require('../images/coupons/store.svg'),
        'data': [
            'https://www.coupons.com/coupon-codes/stores/',
            'https://www.frugaa.com/stores/',
            'https://www.retailmenot.com/sitemap/A',
            'https://www.shopathome.com/stores',
            'https://slickdeals.net/stores/alpha/',
            'https://www.ebates.com/back-to-school-sales',
            'https://www.dealcatcher.com/stores',
            'https://www.savings.com/coupons/stores',
            'http://www.freeshipping.org/stores-with-free-shipping',
            'https://www.coupondunia.in/stores'
        ]

    }
    
]