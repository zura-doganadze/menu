const menu = [
    {
        id: 1,
        title: "double cheese burger",
        category: "lunch",
        price: 15.99,
        img: "assets/img/lunch cheese burger.jpg",
        desc: "Each Double Quarter Pounder with Cheese features two quarter pound* 100% fresh beef burger patties that are hot, deliciously juicy and cooked when you order.",
    },
    {
        id: 2,
        title: "fruit & maple oatmeal",
        category: "breakfast",
        price: 24.99,
        img: "assets/img/breakfast fruit&maple-oatmeal.jpg",
        desc: "Ours Fruit and Maple Oatmeal recipe feature two full servings of whole-grain oats with a touch of cream and brown sugar.",
    }, 
    {
        id: 3,
        title: "hot caramel sundea",
        category: "ice",
        price: 9.99,
        img: "assets/img/ice hot caramel sundea.jpg",
        desc: "Treat yourself to a Hot Caramel Sundae at McDonald's! This Caramel Sundae combines creamy vanilla soft serve and warm, buttery caramel topping.",
    }, 
    {
        id: 4,
        title: "muffin & meal",
        category: "breakfast",
        price: 24.49,
        img: "assets/img/breakfast-muffin & meal.jpg",
        desc: "This Ours breakfast meal features an Egg Muffin®, crispy Our hash browns, and a small Café Premium Roast Coffee– everything you need to start the day off right.",
    },
    {
        id: 5,
        title: "oreo",
        category: "ice",
        price: 7.99,
        img: "assets/img/ice oreo.jpg",
        desc: "The Ours ice with OREO® Cookies is a popular combination of creamy vanilla soft serve with crunchy pieces of OREO® cookies.",
    },
    {
        id: 6,
        title: "signature burger",
        category: "lunch",
        price: 24.99,
        img: "assets/img/lunch-signature burger.jpg",
        desc: "Ours signature burger is a 100% beef burger with a taste like no other. The mouthwatering perfection starts with two 100% pure all beef patties and Big",
    },
    {
        id: 7,
        title: "hot cakes",
        category: "breakfast",
        price: 9.99,
        img: "assets/img/breakfast-hotcakes.jpg",
        desc: "If you love hot pancakes, you've got to try Ours Hotcakes with a side of real butter and sweet maple flavored Hotcake syrup.",
    },
    {
        id: 8,
        title: "vanila cone",
        category: "ice",
        price: 4.99,
        img: "assets/img/ice vanila cone.jpg",
        desc: "Treat yourself to a delicious Vanilla Cone Treat from us! Our Vanilla Cone features creamy vanilla soft serve in a crispy cone.",
    },
    {
        id: 9,
        title: "cheeseburger",
        category: "lunch",
        price: 13.99,
        img: "assets/img/lunch cheeseburger.jpg",
        desc: "The Classic Hamburger starts with a 100% pure beef patty seasoned with just a pinch of salt and pepper.",
    },
    {
        id: 10,
        title: "blueberry muffin",
        category: "bakery",
        price: 4.99,
        img: "assets/img/blueberry muffin.jpg",
        desc: "Ours Blueberry Muffin recipe features a soft and fluffy muffin baked with real blueberries and topped with a streusel crumb topping that goes wonderfully with a Premium Roast Coffee.",
    }
]

const sectionCenter = document.querySelector(".section-center");

const conteiner = document.querySelector(".btn-conteiner");

// load items
window.addEventListener("DOMContentLoaded", function() {
    displayMenuItems(menu);
    displayMenuButtons()
});
function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `<article class="menu-item">
                    <img src="${item.img}" class="photo" alt="${item.title}">
                    <div class="item-info">
                        <header>
                            <h4>${item.title}</h4>
                            <span class="price">$${item.price}</span>
                        </header>
                        <p>${item.desc}</p>
                    </div>
                </article>`
    })
    displayMenu = displayMenu.join("")
    sectionCenter.innerHTML = displayMenu
}
function displayMenuButtons() {
    const categories = menu.reduce(function (values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    },
    ["all"]
    );
    const categoryBtn = categories.map(function (category) {
        if (category === "all") {
            return `<button class="filter-btn active" type="button" data-id="${category}">${category}</button>`;
        } else {
            return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`;
        }
    })
    .join("");
    conteiner.innerHTML = categoryBtn;
    const filterBtns = conteiner.querySelectorAll(".filter-btn");
    // filter items
    
    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
                if (menuItem.category === category) {
                    return menuItem
                }
            });
            if (category === "all") {
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory);
            }
            // Remove "active" class from all buttons
            filterBtns.forEach(function (button) {
                button.classList.remove("active");
            });
            
            // Add "active" class to the clicked button
            e.target.classList.add("active");
        });
    });
    
}
