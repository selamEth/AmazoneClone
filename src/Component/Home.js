import React from 'react'
import "./Home.css"
import Product from './Product'
function Home() {
    return (

        <div className='home'>
            <div className='home_Container'>

                <img className="home_image" src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71pYMdL5beL._SX3000_.jpg " alt="" />

                <div className='home_row'>
                    <Product
                        id="33856587"
                        title={"Just in: gifts from Coach"}
                        price={450}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/01/AMAZON_FASHION/2023/BRANDED_ACTIVATIONS/CoachNewSelection/HomepageNEW/CategoryCard_d_CoachNewSelection_1X_279x304_2_NEW._SY304_CB573176076_.jpg"

                    />
                    <Product
                        id={"49538094"}
                        title={"Women’s sweaters starting at $20"}
                        price={20}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/01/AMAZON_FASHION/2023/SITE_FLIPS/HOLIDAY23/GW/NOV/CC/HOL_MOB_CATCARD_1X._SY304_CB571914728_.jpg"

                    />
                    <Product id={"47890643"}
                        title={"Fashion gifts for the family"}
                        price={"11.99"}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/01/AMAZON_FASHION/2023/SITE_FLIPS/HOLIDAY23/GW/DEC/CC/desktop/CategoryCard_d_2x_HolidayFlip23_FGG1_Dec._SY304_CB574574264_.jpg"
                    />
                    <Product id={"4903850"}
                        title={"Sign in for the best experience"}
                        price={"199.99"}
                        rating={4}
                        image={"https://m.media-amazon.com/images/G/01/apple/Accessory_Compatibility._CB654258716_.png"}
                    />
                </div>
                <div className='home_row'>
                    <Product id={"23445930"}
                        title={"Outdoor apparel gifts"}
                        price={"50"}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/01/sports/HolidayGG_HP/November/Cat_cards/Outdoors_NOV_DT_1x._SY304_CB576711483_.jpg"
                    />
                    <Product id={"90829332"}
                        title={"Top Deal"}
                        price={"49.99"}
                        rating={5}
                        image="https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/612c7047-e96b-42b8-988e-e4ca298f72e3._CR0,0,1200,628_SX430_QL70_.jpg"
                    />
                    <Product id={"23445931"}
                        title={"Epic deals in sports & outdoors"}
                        price={"49.99"}
                        rating={5}
                        image={"https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/01/sports/HolidayGG_HP/November/Cat_cards/Skate_NOV_DT_1x._SY304_CB576711483_.jpg"}
                    />

                    <Product id={"325435434"}
                        title={"Shop gifts from Lancôme"}
                        price={"99.99"}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/01/Fashion_Discovery/3P_HOB_Marketing_Assets/Scaled_Campaigns/379x304_Desktop_Holiday_Category_Card_Lancome-min._SY304_CB573362398_.jpg"
                    />
                </div>
                <div className='home_row'>
                    <Product id={"90829332"}
                        title={"it is just what they wished for"}
                        rating={4}
                        price={45.99}
                        image={"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/G/01/GiftCards/Consumer/multi-product/House/2022_fallback_HouseAds_1940x500_EN.jpg"}
                    />
                    <Product id={"90829378"}
                        title={"Gift sets from Buxom Cosmetics"}
                        rating={4}
                        price={78.88}
                        image={"https://images-na.ssl-images-amazon.com/images/G/01/Fashion_Discovery/3P_HOB_Marketing_Assets/Scaled_Campaigns/379x304_Desktop_Holiday_Category_Card_Buxom2-min._SY304_CB575294041_.jpg"}
                    />
                </div>



            </div>
        </div>
    )
}

export default Home




