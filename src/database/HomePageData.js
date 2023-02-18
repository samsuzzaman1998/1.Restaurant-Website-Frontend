import { MdOutlineHealthAndSafety, MdOutlineFastfood } from "react-icons/md"; //for-1
import { TbCurrencyDollar } from "react-icons/tb"; // for-1

import food from "../assets/food.png"; // for-2

import m1 from "../assets/M1.png"; // for-3
import m2 from "../assets/M2.png"; // for-3
import f3 from "../assets/F3.png"; // for-3
import m3 from "../assets/M3.png"; // for-3
import f1 from "../assets/F1.png"; // for-3
import f2 from "../assets/F2.png"; // for-3

// 1. Why Choose Section Data ================
export const chooseData = [
    {
        _id: 1,
        title: "healthy food",
        des: "orem ipsum dolor sit amet consectetur adipisicing elit. Atque, qui sint eveniet nostrum ut obcaecati voluptas, rem ullam perferendis facilis excepturi ipsa explicabo incidunt",
        icon: <MdOutlineFastfood />,
    },
    {
        _id: 2,
        title: "best quality",
        des: "orem ipsum dolor sit amet. Atque, qui sint eveniet nostrum ut obcaecati voluptas, rem ullam perferendis facilis excepturi ipsa explicabo incidunt, deleniti libero quam! Laboriosam, facere modi!",
        icon: <MdOutlineHealthAndSafety />,
    },
    {
        _id: 3,
        title: "right price",
        des: "orem ipsum dolor sit amet consectetur adipisicing elit. Atque, qui sint eveniet nostrum ut obcaecati voluptas, rem ullam perferendis facilis excepturi ipsa explicabo incidunt, deleniti libero quam! Laboriosam, facere modi!",
        icon: <TbCurrencyDollar />,
    },
];

// 2. All Food Data ======================
export const foodData = [
    {
        _id: 1,
        title: "chicken burger",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum voluptates, itaque eius eveniet exercitationem.",
        price: 50,
        photo: food,
    },
    {
        _id: 2,
        title: "egg burger",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum voluptates, itaque eius eveniet exercitationem.Lorem ipsum dolor sit amet consectetur.",
        price: 30,
        photo: food,
    },
    {
        _id: 3,
        title: "chicken fry",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum voluptates, itaque eius eveniet exercitationem.",
        price: 50,
        photo: food,
    },
    {
        _id: 4,
        title: "fried rice",
        des: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur consectetur adipisicing elit. Nesciunt earum voluptates, itaque eius eveniet exercitationem.",
        price: 150,
        photo: food,
    },
    {
        _id: 5,
        title: "noodles",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum voluptates, itaque eius eveniet exercitationem.",
        price: 40,
        photo: food,
    },
    {
        _id: 6,
        title: "biriyani rice",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum voluptates, itaque eius eveniet exercitationem.",
        price: 180,
        photo: food,
    },
    {
        _id: 7,
        title: "fish fry",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum voluptates, itaque eius eveniet exercitationem.",
        price: 80,
        photo: food,
    },
    {
        _id: 8,
        title: "chicken soop",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum voluptates, itaque eius eveniet exercitationem.",
        price: 120,
        photo: food,
    },
    {
        _id: 9,
        title: "beef mutton",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum voluptates, itaque eius eveniet exercitationem.",
        price: 250,
        photo: food,
    },
    {
        _id: 10,
        title: "salad",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum voluptates, itaque eius eveniet exercitationem.",
        price: 20,
        photo: food,
    },
];

// 3. Testimonial data ===============
export const testimonialData = [
    {
        _id: 1,
        customerName: "john doe",
        customerPhoto: m1,
        comment:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia eum quisquam incidunt consequuntur corrupti accusamus vero suscipit quo deleniti libero",
        rating: 5,
    },
    {
        _id: 2,
        customerName: "angelina jolly",
        customerPhoto: f1,
        comment:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia eum quisquam incidunt consequuntur corrupti accusamus vero suscipit quo deleniti libero",
        rating: 4.5,
    },
    {
        _id: 3,
        customerName: "salman khan",
        customerPhoto: m3,
        comment:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia eum quisquam incidunt consequuntur corrupti accusamus vero suscipit quo deleniti libero",
        rating: 4,
    },
    {
        _id: 4,
        customerName: "Robert Jr",
        customerPhoto: m2,
        comment:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia eum quisquam incidunt consequuntur corrupti accusamus vero suscipit quo deleniti libero",
        rating: 5,
    },
    {
        _id: 5,
        customerName: "hena mollik",
        customerPhoto: f2,
        comment:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia eum quisquam incidunt consequuntur corrupti accusamus vero suscipit quo deleniti libero",
        rating: 4.3,
    },
    {
        _id: 6,
        customerName: "shilpa shetty",
        customerPhoto: f3,
        comment:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia eum quisquam incidunt consequuntur corrupti accusamus vero suscipit quo deleniti libero",
        rating: 3.9,
    },
];
