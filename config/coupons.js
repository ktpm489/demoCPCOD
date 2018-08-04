const coupons = [
    {
        'title': 'Clothes',
        'link': require('../images/coupons/lab-coat.png'),
        'data': [
            { 'name': 'Fruggaa - Clothing', 'link': '../images/stores/frugaa.png', 'url': 'https://www.frugaa.com/promo/clothing/' },
            { 'name': 'Coupons - Clothing', 'link': '../images/stores/coupons.png', 'url': 'https://www.coupons.com/coupons/household-coupons-105/' },
            { 'name': 'RetailMeNot - Clothing', 'link': '../images/stores/retailmenot.jpeg', 'url': 'https://www.retailmenot.com/coupons/clothing' },
            { 'name': 'GroupOn - Clothing', 'link': '../images/stores/groupon.jpeg', 'url': 'https://www.groupon.com/goods/womens-clothing-shoes-and-accessories' },
            { 'name': 'LivingSocial - Clothing', 'link': '../images/stores/livingsocial.jpeg', 'url': 'https://www.livingsocial.com/goods/womens-clothing-shoes-and-accessories' },
            { 'name': 'ShopAtHome - Clothing', 'link': '../images/stores/shopathome.png', 'url': 'https://www.shopathome.com/savings/clothing-coupons' },
            { 'name': 'Slick Deals - Clothing', 'link': '../images/stores/slickdeals.png', 'url': 'https://slickdeals.net/deals/apparel' },
            { 'name': 'Woot - Clothing', 'link': '../images/stores/woot.png', 'url': 'https://shirt.woot.com/catalog?ref=w_sh_ctlg#ref=shirt.woot.com/siteheader/catalog' },
            { 'name': 'Ebates - Clothing', 'link': '../images/stores/ebates.jpeg', 'url': 'https://www.ebates.com/womens-clothing' },
            { 'name': 'DealCatcher - Clothing', 'link': '../images/stores/dealcatcher.jpeg', 'url': 'https://www.dealcatcher.com/clothing-accessories' },
            { 'name': 'DealNews - Clothing', 'link': '../images/stores/dealnews.png', 'url': 'https://www.dealnews.com/c202/Clothing-Accessories/' },
            { 'name': 'FreeShipping - Clothing', 'link': '../images/stores/freeshipping.jpeg', 'url': 'http://www.freeshipping.org/category/childrens-clothing/' },
            { 'name': 'Coupondunia - Clothing', 'link': '../images/stores/coupondunia.png', 'url': 'https://www.coupondunia.in/category/fashion/clothing' },
            { 'name': 'Cashkaro - Clothing', 'link': '../images/stores/cashkaro.jpeg', 'url': 'https://cashkaro.com/product/clothing' }
        ]
    },
    {
        'title': 'Food',
        'link': require('../images/coupons/dish.png'),
        'data': [
            { 'name': 'RetailMeNot - Food', 'link': '../images/stores/retailmenot.jpeg', 'url': 'https://www.retailmenot.com/coupons/food' },
            { 'name': 'Coupons - Food', 'link': '../images/stores/coupons.png', 'url': 'https://www.coupons.com/coupons/food-coupons-107/' },
            { 'name': 'Fruggaa - Food', 'link': '../images/stores/frugaa.png', 'url': 'https://www.frugaa.com/promo/food-and-beverage/' },
            { 'name': 'ShopAtHome - Food', 'link': '../images/stores/shopathome.png', 'url': 'https://www.shopathome.com/savings/food-and-wine-coupons' },
            { 'name': 'FreeShopping - Food', 'link': '../images/stores/freeshopping.png', 'url': 'http://freeshopping.co/restaurants/' },
            { 'name': 'Ebates - Food', 'link': '../images/stores/ebates.jpeg', 'url': 'https://www.ebates.com/food-restaurants' },
            { 'name': 'Saving - Food', 'link': '../images/stores/saving.jpeg', 'url': 'https://www.savings.com/coupons/food-and-beverage' },
            { 'name': 'FreeShipping - Food', 'link': '../images/stores/freeshipping.jpeg', 'url': 'http://www.freeshipping.org/category/food/' },
            { 'name': 'Coupondunia - Food', 'link': '../images/stores/coupondunia.png', 'url': 'https://www.coupondunia.in/category/food-and-dining/food-ordering' }

        ]

    },
    {
        'title': 'Travel',
        'link': require('../images/coupons/airplanes.png'),
        'data': [
            { 'name': 'RetailMeNot - Travel', 'link': '../images/stores/retailmenot.jpeg', 'url': 'https://www.retailmenot.com/coupons/travel' },
            { 'name': 'Coupons - Travel', 'link': '../images/stores/coupons.png', 'url': 'https://www.coupons.com/coupons/travel-coupons-597/' },
            { 'name': 'Fruggaa - Travel', 'link': '../images/stores/frugaa.png', 'url': 'https://www.frugaa.com/promo/travel/' },
            { 'name': 'ShopAtHome - Travel', 'link': '../images/stores/shopathome.png', 'url': 'https://www.shopathome.com/travel-hub' },
            { 'name': 'SlickDeals - Travel', 'link': '../images/stores/slickdeals.png', 'url': 'https://slickdeals.net/travel-deals/?src=catnav_travel' },
            { 'name': 'FreeShopping - Travel', 'link': '../images/stores/freeshopping.png', 'url': 'http://freeshopping.co/travels/' },
            { 'name': 'Ebates - Travel', 'link': '../images/stores/ebates.jpeg', 'url': 'https://www.ebates.com/travel-vacations' },
            { 'name': 'Saving - Travel', 'link': '../images/stores/saving.jpeg', 'url': 'https://www.savings.com/coupons/travel' },
            { 'name': 'DealNews - Travel', 'link': '../images/stores/dealnews.png', 'url': 'https://www.dealnews.com/c206/Travel-Entertainment/' },
            { 'name': 'FreeShipping - Travel', 'link': '../images/stores/freeshipping.jpeg', 'url': 'http://www.freeshipping.org/category/travel/' },
            { 'name': 'Coupondunia - Travel', 'link': '../images/stores/coupondunia.png', 'url': 'https://www.coupondunia.in/category/travel' }

        ]
    },
    {
        'title': 'Beauty',
        'link': require('../images/coupons/makeup.png'),
        'data': [
            { 'name': 'RetailMeNot - Beauty', 'link': '../images/stores/retailmenot.jpeg', 'url': 'https://www.retailmenot.com/coupons/beauty' },
            { 'name': 'Coupons - Beauty', 'link': '../images/stores/coupons.png', 'url': 'https://www.coupons.com/coupons/personal-care-coupons-101/' },
            { 'name': 'Fruggaa - Beauty', 'link': '../images/stores/frugaa.png', 'url': 'https://www.frugaa.com/promo/beauty/' },
            { 'name': 'Groupon - Beauty', 'link': '../images/stores/groupon.jpeg', 'url': 'https://www.groupon.com/goods/health-and-beauty' },
            { 'name': 'LivingSocial - Beauty', 'link': '../images/stores/livingsocial.jpeg', 'url': 'https://www.livingsocial.com/goods/health-and-beauty' },
            { 'name': 'ShopAtHome - Beauty', 'link': '../images/stores/shopathome.png', 'url': 'https://www.shopathome.com/savings/beauty-coupons' },
            { 'name': 'SlickDeals - Beauty', 'link': '../images/stores/slickdeals.png', 'url': 'https://slickdeals.net/deals/beauty/?src=catnav_beauty' },
            { 'name': 'Ebates - Beauty', 'link': '../images/stores/ebates.jpeg', 'url': 'https://www.ebates.com/health-beauty' },
            { 'name': 'Saving - Beauty', 'link': '../images/stores/saving.jpeg', 'url': 'https://www.savings.com/coupons/beauty-and-personal-care' },
            { 'name': 'DealNews - Beauty', 'link': '../images/stores/dealnews.png', 'url': 'https://www.dealnews.com/c756/Health-Beauty/' },
            { 'name': 'FreeShipping - Beauty', 'link': '../images/stores/freeshipping.jpeg', 'url': 'http://www.freeshipping.org/category/health-and-beauty/' },
            { 'name': 'Coupondunia - Beauty', 'link': '../images/stores/coupondunia.png', 'url': 'https://www.coupondunia.in/category/beauty-and-health' },
            { 'name': 'CashKaro - Beauty', 'link': '../images/stores/cashkaro.jpeg', 'url': 'https://cashkaro.com/product/health-beauty-products' }
        ]

    },
    {
        'title': 'Shoes',
        'link': require('../images/coupons/sneakers.png'),
        'data': [
            { 'name': 'RetailMeNot - Shoes', 'link': '../images/stores/retailmenot.jpeg', 'url': 'https://www.retailmenot.com/coupons/shoes' },
            { 'name': 'Fruggaa - Shoes', 'link': '../images/stores/frugaa.png', 'url': 'https://www.frugaa.com/promo/shoes/' },
            { 'name': 'ShopAtHome - Shoes', 'link': '../images/stores/shopathome.png', 'url': 'https://www.shopathome.com/savings/shoe-coupons' },
            { 'name': 'Ebates - Shoes', 'link': '../images/stores/ebates.jpeg', 'url': 'https://www.ebates.com/shoes-handbags' },
            { 'name': 'DealCatcher - Shoes', 'link': '../images/stores/dealcatcher.jpeg', 'url': 'https://www.dealcatcher.com/everything-else' },
            { 'name': 'CashKaro - Shoes', 'link': '../images/stores/cashkaro.jpeg', 'url': 'https://cashkaro.com/product/shoes' }
        ]

    },
    {
        'title': 'Entertainment',
        'link': require('../images/coupons/film-strip.png'),
        'data': [
            { 'name': 'RetailMeNot - Entertainment', 'link': '../images/stores/retailmenot.jpeg', 'url': 'https://www.retailmenot.com/coupons/entertainment' },
            { 'name': 'Fruggaa - Entertainment', 'link': '../images/stores/frugaa.png', 'url': 'https://www.frugaa.com/promo/art-and-entertainment/' },
            { 'name': 'Groupon - Entertainment', 'link': '../images/stores/groupon.jpeg', 'url': 'https://www.groupon.com/goods/entertainment-and-media' },
            { 'name': 'LivingSocial - Entertainment', 'link': '../images/stores/livingsocial.jpeg', 'url': 'https://www.livingsocial.com/goods/entertainment-and-media' },
            { 'name': 'ShopAtHome - Entertainment', 'link': '../images/stores/shopathome.png', 'url': 'https://www.shopathome.com/savings/arts-and-entertainment-coupons' },
            { 'name': 'SlickDeals - Entertainment', 'link': '../images/stores/slickdeals.png', 'url': 'https://slickdeals.net/deals/entertainment/?src=catnav_entertainment' },
            { 'name': 'DealCatcher - Entertainment', 'link': '../images/stores/dealcatcher.jpeg', 'url': 'https://www.dealcatcher.com/games-entertainment' },
            { 'name': 'Saving - Entertainment', 'link': '../images/stores/saving.jpeg', 'url': 'https://www.savings.com/coupons/arts-and-entertainment' },
            { 'name': 'FreeShipping - Entertainment', 'link': '../images/stores/freeshipping.jpeg', 'url': 'http://www.freeshipping.org/category/entertainment/' },
            { 'name': 'CouponDunia - Entertainment', 'link': '../images/stores/coupondunia.png', 'url': 'https://www.coupondunia.in/category/entertainment' }

        ]

    },
    {
        'title': 'Electronics',
        'link': require('../images/coupons/controller.png'),
        'data': [
            { 'name': 'Fruggaa - Electronics', 'link': '../images/stores/frugaa.png', 'url': 'https://www.frugaa.com/promo/electronics/' },
            { 'name': 'Coupons - Electronics', 'link': '../images/stores/coupons.png', 'url': 'https://www.coupons.com/coupons/office-and-electronics-coupons-894/' },
            { 'name': 'RetailMeNot - Electronics', 'link': '../images/stores/retailmenot.jpeg', 'url': 'https://www.retailmenot.com/coupons/electronics' },
            { 'name': 'Groupon - Electronics', 'link': '../images/stores/groupon.jpeg', 'url': 'https://www.groupon.com/goods/electronics' },
            { 'name': 'LivingSocial - Electronics', 'link': '../images/stores/livingsocial.jpeg', 'url': 'https://www.livingsocial.com/goods/electronics' },
            { 'name': 'ShopAtHome - Electronics', 'link': '../images/stores/shopathome.png', 'url': 'https://www.shopathome.com/savings/electronic-coupons' },
            { 'name': 'Woot - Electronics', 'link': '../images/stores/woot.png', 'url': 'https://www.woot.com/category/electronics/all?ref=w_cnt_cdet_elec_1' },
            { 'name': 'FreeShopping - Electronics', 'link': '../images/stores/freeshopping.png', 'url': 'http://freeshopping.co/electronics/' },
            { 'name': 'Ebates - Electronics', 'link': '../images/stores/ebates.jpeg', 'url': 'https://www.ebates.com/electronics-computers' },
            { 'name': 'DealCatcher - Electronics', 'link': '../images/stores/dealcatcher.jpeg', 'url': 'https://www.dealcatcher.com/electronics' },
            { 'name': 'Saving - Electronics', 'link': '../images/stores/saving.jpeg', 'url': 'https://www.savings.com/coupons/electronics' },
            { 'name': 'DealNews - Electronics', 'link': '../images/stores/dealnews.png', 'url': 'https://www.dealnews.com/c142/Electronics/' },
            { 'name': 'FreeShipping - Electronics', 'link': '../images/stores/freeshipping.jpeg', 'url': 'http://www.freeshipping.org/category/electronics/' },
            { 'name': 'CashKaro - Electronics', 'link': '../images/stores/cashkaro.jpeg', 'url': 'https://cashkaro.com/product/electronics' }
        ]

    },
    {
        'title': 'Accessories',
        'link': require('../images/coupons/sunglasses.png'),
        'data': [
            { 'name': 'Frugaa - Accessories', 'link': '../images/stores/frugaa.png', 'url': 'https://www.frugaa.com/promo/accessories/' },
            { 'name': 'RetailMeNot - Accessories', 'link': '../images/stores/retailmenot.jpeg', 'url': 'https://www.retailmenot.com/coupons/accessories' },
            { 'name': 'ShopAtHome - Accessories', 'link': '../images/stores/shopathome.png', 'url': 'https://www.shopathome.com/savings/accessories-coupons' },
            { 'name': 'Saving - Accessories', 'link': '../images/stores/saving.jpeg', 'url': 'https://www.savings.com/coupons/apparel-and-accessories' },
            { 'name': 'FreeShipping - Accessories', 'link': '../images/stores/freeshipping.jpeg', 'url': 'http://www.freeshipping.org/category/accessories/' },
            { 'name': 'CashKaro - Accessories', 'link': '../images/stores/cashkaro.jpeg', 'url': 'https://cashkaro.com/product/accessories-bags' },
        ]

    },
    {
        'title': 'Sporting Goods',
        'link': require('../images/coupons/exercise.png'),
        'data': [
            { 'name': 'Frugaa - Sporting', 'link': '../images/stores/frugaa.png', 'url': 'https://www.frugaa.com/promo/sporting-goods/' },
            { 'name': 'RetailMeNot - Sporting', 'link': '../images/stores/retailmenot.jpeg', 'url': 'https://www.retailmenot.com/coupons/sports' },
            { 'name': 'Groupon - Sporting', 'link': '../images/stores/groupon.jpeg', 'url': 'https://www.groupon.com/goods/sports-and-outdoors' },
            { 'name': 'LivingSocial - Sporting', 'link': '../images/stores/livingsocial.jpeg', 'url': 'https://www.livingsocial.com/goods/sports-and-outdoors' },
            { 'name': 'ShopAtHome - Sporting', 'link': '../images/stores/shopathome.png', 'url': 'https://www.shopathome.com/savings/sports-and-outdoor-coupons' },
            { 'name': 'Woot - Sporting', 'link': '../images/stores/woot.png', 'url': 'https://www.woot.com/category/sport/all?ref=w_cnt_cdet_sprt_1' },
            { 'name': 'Ebates - Sporting', 'link': '../images/stores/ebates.jpeg', 'url': 'https://www.ebates.com/sports-outdoors' },
            { 'name': 'Saving - Sporting', 'link': '../images/stores/saving.jpeg', 'url': 'https://www.savings.com/coupons/sports-and-recreation' },
            { 'name': 'DealNews - Sporting', 'link': '../images/stores/dealnews.png', 'url': 'https://www.dealnews.com/c211/Sports-Fitness/' },
            { 'name': 'FreeShipping - Sporting', 'link': '../images/stores/freeshipping.jpeg', 'url': 'http://www.freeshipping.org/category/sporting-goods/' },
            { 'name': 'CouponDunia - Sporting', 'link': '../images/stores/coupondunia.png', 'url': 'https://www.coupondunia.in/category/sports-and-fitness' },
        ]

    },
    {
        'title': 'Home And Graden',
        'link': require('../images/coupons/house.png'),
        'data': [
            { 'name': 'RetailMeNot - Home', 'link': '../images/stores/retailmenot.jpeg', 'url': 'https://www.retailmenot.com/coupons/homeandgarden' },
            { 'name': 'Frugaa - Home', 'link': '../images/stores/frugaa.png', 'url': 'https://www.frugaa.com/promo/home-and-garden/' },
            { 'name': 'Groupon - Home', 'link': '../images/stores/groupon.jpeg', 'url': 'https://www.groupon.com/goods/for-the-home' },
            { 'name': 'LivingSocial - Home', 'link': '../images/stores/livingsocial.jpeg', 'url': 'https://www.livingsocial.com/goods/for-the-home' },
            { 'name': 'ShopAtHome - Home', 'link': '../images/stores/shopathome.png', 'url': 'https://www.shopathome.com/savings/home-and-garden-coupons' },
            { 'name': 'SlickDeals - Home', 'link': '../images/stores/slickdeals.png', 'url': 'https://slickdeals.net/deals/home' },
            { 'name': 'Woot - Home', 'link': '../images/stores/woot.png', 'url': 'https://www.woot.com/category/home/all?ref=w_cnt_cdet_home_1' },
            { 'name': 'FreeShopping - Home', 'link': '../images/stores/freeshopping.png', 'url': 'http://freeshopping.co/groceries/' },
            { 'name': 'Ebates - Home', 'link': '../images/stores/ebates.jpeg', 'url': 'https://www.ebates.com/home-garden-tools' },
            { 'name': 'DealCatcher - Home', 'link': '../images/stores/dealcatcher.jpeg', 'url': 'https://www.dealcatcher.com/games-entertainment' },
            { 'name': 'Saving - Home', 'link': '../images/stores/saving.jpeg', 'url': 'https://www.savings.com/coupons/home-and-garden' },
            { 'name': 'DealNews - Home', 'link': '../images/stores/dealnews.png', 'url': 'https://www.dealnews.com/c196/Home-Garden/' },
            { 'name': 'FreeShipping - Home', 'link': '../images/stores/freeshipping.jpeg', 'url': 'http://www.freeshipping.org/category/home-and-garden/' },
            { 'name': 'CouponDunia - Home', 'link': '../images/stores/coupondunia.png', 'url': 'https://www.coupondunia.in/category/home-furnishing-and-decor' },
            { 'name': 'CashKaro - Home', 'link': '../images/stores/cashkaro.jpeg', 'url': 'https://cashkaro.com/product/home-and-kitchen' },
        ]

    },
    {
        'title': 'Pets',
        'link': require('../images/coupons/dog.png'),
        'data': [
            { 'name': 'Frugaa - Pets', 'link': '../images/stores/frugaa.png', 'url': 'https://www.frugaa.com/promo/pets/' },
            { 'name': 'RetailMeNot - Pets', 'link': '../images/stores/retailmenot.jpeg', 'url': 'https://www.retailmenot.com/coupons/pets' },
            { 'name': 'Groupon - Pets', 'link': '../images/stores/groupon.jpeg', 'url': 'https://www.groupon.com/goods/pet-supplies' },
            { 'name': 'LivingSocial - Pets', 'link': '../images/stores/livingsocial.jpeg', 'url': 'https://www.livingsocial.com/goods/pet-supplies' },
            { 'name': 'ShopAtHome - Pets', 'link': '../images/stores/shopathome.png', 'url': 'https://www.shopathome.com/savings/pet-coupons' },
            { 'name': 'FreeShipping - Pets', 'link': '../images/stores/freeshipping.jpeg', 'url': 'http://www.freeshipping.org/category/pet-supplies/' },
            { 'name': 'CouponDunia - Pets', 'link': '../images/stores/coupondunia.png', 'url': 'https://www.coupondunia.in/category/miscellaneous' },
        ]

    },
    {
        'title': 'Baby',
        'link': require('../images/coupons/baby.png'),
        'data': [
            { 'name': 'Frugaa - Baby', 'link': '../images/stores/frugaa.png', 'url': 'https://www.frugaa.com/promo/baby-and-kids/' },
            { 'name': 'RetailMeNot - Baby', 'link': '../images/stores/retailmenot.jpeg', 'url': 'https://www.retailmenot.com/coupons/baby' },
            { 'name': 'Groupon - Baby', 'link': '../images/stores/groupon.jpeg', 'url': 'https://www.groupon.com/goods/baby-kids-and-toys' },
            { 'name': 'Coupons - Baby', 'link': '../images/stores/coupons.png', 'url': 'https://www.coupons.com/coupons/baby-and-toddler-coupons-5491/' },
            { 'name': 'ShopAtHome - Baby', 'link': '../images/stores/shopathome.png', 'url': 'https://www.shopathome.com/savings/babies-and-kids-coupons' },
            { 'name': 'Ebates - Baby', 'link': '../images/stores/ebates.jpeg', 'url': 'https://www.ebates.com/baby-kids-toys' },
            { 'name': 'Saving - Baby', 'link': '../images/stores/saving.jpeg', 'url': 'https://www.savings.com/coupons/baby-and-nursery' },
            { 'name': 'FreeShipping - Baby', 'link': '../images/stores/freeshipping.jpeg', 'url': 'http://www.freeshipping.org/category/baby/' },
            { 'name': 'CouponDunia - Baby', 'link': '../images/stores/coupondunia.png', 'url': 'https://www.coupondunia.in/category/kids-babies-and-toys' },
            { 'name': 'CashKaro - Baby', 'link': '../images/stores/cashkaro.jpeg', 'url': 'https://cashkaro.com/product/babies-toys' },
        ]

    },
    {
        'title': 'Automotive',
        'link': require('../images/coupons/car.png'),
        'data': [
            { 'name': 'Coupons - Automotive', 'link': '../images/stores/coupons.png', 'url': 'https://www.coupons.com/coupons/automotive-coupons-890/' },
            { 'name': 'RetailMeNot - Automotive', 'link': '../images/stores/retailmenot.jpeg', 'url': 'https://www.retailmenot.com/coupons/auto' },
            { 'name': 'Frugaa - Automotive', 'link': '../images/stores/frugaa.png', 'url': 'https://www.frugaa.com/promo/automotive/' },
            { 'name': 'Groupon - Automotive', 'link': '../images/stores/groupon.jpeg', 'url': 'https://www.groupon.com/goods/auto-and-home-improvement' },
            { 'name': 'ShopAtHome - Automotive', 'link': '../images/stores/shopathome.png', 'url': 'https://www.shopathome.com/savings/automotive-coupons' },
            { 'name': 'SlickDeals - Automotive', 'link': '../images/stores/slickdeals.png', 'url': 'https://slickdeals.net/deals/auto' },
            { 'name': 'Saving - Automotive', 'link': '../images/stores/saving.jpeg', 'url': 'https://www.savings.com/coupons/automotive' },
            { 'name': 'FreeShipping - Automotive', 'link': '../images/stores/freeshipping.jpeg', 'url': 'http://www.freeshipping.org/category/automotive/' },
            { 'name': 'CouponDunia - Automotive', 'link': '../images/stores/coupondunia.png', 'url': 'https://www.coupondunia.in/category/automotive' },
        ]

    },
    {
        'title': 'Books',
        'link': require('../images/coupons/library.png'),
        'data': [
            { 'name': 'RetailMeNot - Books', 'link': '../images/stores/retailmenot.jpeg', 'url': 'https://www.retailmenot.com/coupons/books' },
            { 'name': 'Frugaa - Books', 'link': '../images/stores/frugaa.png', 'url': 'https://www.frugaa.com/promo/books-music-video/' },
            { 'name': 'LivingSocial - Books', 'link': '../images/stores/livingsocial.jpeg', 'url': 'https://www.livingsocial.com/goods/baby-kids-and-toys' },
            { 'name': 'ShopAtHome - Books', 'link': '../images/stores/shopathome.png', 'url': 'https://www.shopathome.com/savings/education-coupons' },
            { 'name': 'Ebates - Books', 'link': '../images/stores/ebates.jpeg', 'url': 'https://www.ebates.com/books-digital-media' },
            { 'name': 'Saving - Books', 'link': '../images/stores/saving.jpeg', 'url': 'https://www.savings.com/coupons/books-music-and-video' },
            { 'name': 'DealNews - Books', 'link': '../images/stores/dealnews.png', 'url': 'https://www.dealnews.com/c178/Movies-Music-Books/' },
            { 'name': 'FreeShipping - Books', 'link': '../images/stores/freeshipping.jpeg', 'url': 'http://www.freeshipping.org/category/books/' },
            { 'name': 'CouponDunia - Books', 'link': '../images/stores/coupondunia.png', 'url': 'https://www.coupondunia.in/category/books-and-stationary' },
            { 'name': 'CashKaro - Books', 'link': '../images/stores/cashkaro.jpeg', 'url': 'https://cashkaro.com/product/books-and-media' },
        ]

    },
    {
        'title': 'Flowers',
        'link': require('../images/coupons/tulips.png'),
        'data': [
            { 'name': 'Frugaa - Flowers', 'link': '../images/stores/frugaa.png', 'url': 'https://www.frugaa.com/promo/flowers/' },
            { 'name': 'RetailMeNot - Flowers', 'link': '../images/stores/retailmenot.jpeg', 'url': 'https://www.retailmenot.com/coupons/flowers' },
            { 'name': 'ShopAtHome - Flowers', 'link': '../images/stores/shopathome.png', 'url': 'https://www.shopathome.com/savings/flower-and-plant-coupons' },
            { 'name': 'Saving - Flowers', 'link': '../images/stores/saving.jpeg',  'url': 'https://www.savings.com/coupons/flowers-and-gifts' },
            { 'name': 'DealNews - Flowers', 'link': '../images/stores/dealnews.png', 'url': 'https://www.dealnews.com/c636/Special-Occasion/' },
            { 'name': 'FreeShipping - Flowers', 'link': '../images/stores/freeshipping.jpeg', 'url': 'http://www.freeshipping.org/category/flowers/' },
            { 'name': 'CouponDunia - Flowers', 'link': '../images/stores/coupondunia.png','url': 'https://www.coupondunia.in/category/gifts-and-jewellery' },
        ]

    },
    {
        'title': 'Toys',
        'link': require('../images/coupons/robot.png'),
        'data': [
            { 'name': 'Frugaa - Toys', 'link': '../images/stores/frugaa.png', 'url': 'https://www.frugaa.com/promo/toys/' },
            { 'name': 'RetailMeNot - Toys', 'link': '../images/stores/retailmenot.jpeg', 'url': 'https://www.retailmenot.com/coupons/toys' },
            { 'name': 'Groupon - Toys', 'link': '../images/stores/groupon.jpeg', 'url': 'https://www.groupon.com/goods/toys' },
            { 'name': 'LivingSocial - Toys', 'link': '../images/stores/livingsocial.jpeg', 'url': 'https://www.livingsocial.com/goods/toys' },
            { 'name': 'ShopAtHome - Toys', 'link': '../images/stores/shopathome.png', 'url': 'https://www.shopathome.com/savings/toys-and-games-coupons' },
            { 'name': 'Saving - Toys', 'link': '../images/stores/saving.jpeg',  'url': 'https://www.savings.com/coupons/toys-and-games' },
            { 'name': 'DealNews - Toys', 'link': '../images/stores/dealnews.png', 'url': 'https://www.dealnews.com/c186/Gaming-Toys/' },
            { 'name': 'FreeShipping - Toys', 'link': '../images/stores/freeshipping.jpeg', 'url': 'http://www.freeshipping.org/category/toys/' },
            { 'name': 'CashKaro - Toys', 'link': '../images/stores/cashkaro.jpeg', 'url': 'https://cashkaro.com/product/babies-toys' },
        ]

    },
    {
        'title': 'Photography',
        'link': require('../images/coupons/camera.png'),
        'data': [
            { 'name': 'Frugaa - Photography', 'link': '../images/stores/frugaa.png', 'url': 'https://www.frugaa.com/promo/photography/' },
            { 'name': 'RetailMeNot - Photography', 'link': '../images/stores/retailmenot.jpeg', 'url': 'https://www.retailmenot.com/coupons/photo' },
            { 'name': 'Saving - Photography', 'link': '../images/stores/saving.jpeg', 'url': 'https://www.savings.com/coupons/photo-printing' },
            { 'name': 'FreeShipping - Photography', 'link': '../images/stores/freeshipping.jpeg', 'url': 'http://www.freeshipping.org/category/photography/' },
        ]
    },
    {
        'title': 'Gifts',
        'link': require('../images/coupons/gift.png'),
        'data': [
            { 'name': 'RetailMeNot - Gifts', 'link': '../images/stores/retailmenot.jpeg', 'url': 'https://www.retailmenot.com/coupons/gifts' },
            { 'name': 'Coupons - Gifts', 'link': '../images/stores/coupons.png', 'url': 'https://www.coupons.com/coupons/flower-and-gift-coupons-886/' },
            { 'name': 'LivingSocial - Gifts', 'link': '../images/stores/livingsocial.jpeg', 'url': 'https://www.livingsocial.com/goods/jewelry-and-watches' },
            { 'name': 'ShopAtHome - Gifts', 'link': '../images/stores/shopathome.png', 'url': 'https://www.shopathome.com/savings/gifts-and-party-supply-coupons' },
            { 'name': 'Ebates - Gifts', 'link': '../images/stores/ebates.jpeg', 'url': 'https://www.ebates.com/flowers-gifts' },
            { 'name': 'DealNews - Gifts', 'link': '../images/stores/dealnews.png', 'url': 'https://www.dealnews.com/c859/Gift-Cards/' },
            { 'name': 'FreeShipping - Gifts', 'link': '../images/stores/freeshipping.jpeg', 'url': 'http://www.freeshipping.org/category/gifts/' },
        ]

    },
    {
        'title': 'Store',
        'link': require('../images/coupons/store.png'),
        'data': [
            { 'name': 'Coupons - Store', 'link': '../images/stores/coupons.png', 'url': 'https://www.coupons.com/coupon-codes/stores/' },
            { 'name': 'Frugaa - Store', 'link': '../images/stores/frugaa.png', 'url': 'https://www.frugaa.com/stores/' },
            { 'name': 'RetailMeNot - Store', 'link': '../images/stores/retailmenot.jpeg', 'url': 'https://www.retailmenot.com/sitemap/A' },
            { 'name': 'ShopAtHome - Store', 'link': '../images/stores/shopathome.png', 'url': 'https://www.shopathome.com/stores' },
            { 'name': 'SlickDeals - Store', 'link': '../images/stores/slickdeals.png', 'url': 'https://slickdeals.net/stores/alpha/' },
            { 'name': 'Ebates - Store', 'link': '../images/stores/ebates.jpeg', 'url': 'https://www.ebates.com/back-to-school-sales' },
            { 'name': 'DealCatcher - Store', 'link': '../images/stores/dealcatcher.jpeg', 'url': 'https://www.dealcatcher.com/stores' },
            { 'name': 'Saving - Store', 'link': '../images/stores/saving.jpeg', 'url': 'https://www.savings.com/coupons/stores' },
            { 'name': 'FreeShipping - Store', 'link': '../images/stores/freeshipping.jpeg', 'url': 'http://www.freeshipping.org/stores-with-free-shipping' },
            { 'name': 'CouponDunia - Store', 'link': '../images/stores/coupondunia.png', 'url': 'https://www.coupondunia.in/stores' },
        ]

    }
]
export default coupons