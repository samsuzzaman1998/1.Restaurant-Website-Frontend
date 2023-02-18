import { MdOutlineHealthAndSafety, MdOutlineFastfood } from "react-icons/md"; //for-1
import { TbCurrencyDollar } from "react-icons/tb"; // for-1

import food from "../assets/food.png"; // for-2

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
