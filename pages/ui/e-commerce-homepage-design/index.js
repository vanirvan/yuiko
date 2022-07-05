import Image from 'next/image'
import style from './index.module.css'

import IconMouse from './assets/iconMouse'
import IconMenu from './assets/iconMenu'

const Index = () => {

    const projectPath = "e-commerce-homepage-design"

    const menuList = [
        "About us",
        "Furniture",
        "Our Stores",
        "Blog"
    ]

    const carouselItem = [
        {
            id: "01.",
            img: `/assets/${projectPath}/chair1.png`,
            title: "Stylish Metal Sofa",
            desc: "Sofa with minimal style and wooden and plastic material"
        },
        {
            id: "02.",
            img: `/assets/${projectPath}/rounded chair.png`,
            title: "Modern Rounded Sofa",
            desc: "Modern sofa with minimal and rounded style."
        },
        {
            id: "03.",
            img: `/assets/${projectPath}/lamp.png`,
            title: "Roof Lamp Lightings",
            desc: "Roof light and lamps we have wide range In all colors and lamps also available"
        }
    ]

    return (
        <div className={`${style.body}`}>
            {/* Navbar */}
            <div className={`${style.navbar}`}>
                <span className={`${style.navbar_title}`}>Chicory</span>
                <IconMenu className={`${style.iconMenu}`} />
                <div>
                    { menuList.map((value, index) =>
                        <span key={index}>{value}</span>
                    )}
                    <div>
                        <Image src={`/assets/${projectPath}/chad.jpeg`} layout="fill" priority />
                    </div>
                </div>
            </div>
            {/* Hero */}
            <div className={`${style.hero}`}>
                <div>
                    <span>Mid Century</span>
                    <span>Newish Product</span>
                    <span>Modern high quality and comfortable available in our stores.</span>
                    <button>Explore Now</button>
                </div>
                <div>
                    <Image src={`/assets/${projectPath}/chair1.png`} layout="fill" alt={"Chair"} priority />
                </div>
            </div>
            {/* Carousel? */}
            <div className={`${style.carousel}`}>
                <div className={`${style.scroll_down}`}>
                    <div>
                        <span>Scroll Down</span>
                    </div>
                    <IconMouse className={`${style.iconMouse}`} />
                </div>
                { carouselItem.map((value, index) => 
                    <div key={index} className={`${style.carousel_item}`}>
                        <div className={`${style.carousel_image}`}>
                        <Image src={`${value.img}`} alt='image 1' layout='fill' />
                        </div>
                        <span>{value.id}</span>
                        <span>{value.title}</span>
                        <span>{value.desc}</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Index