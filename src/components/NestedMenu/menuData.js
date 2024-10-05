const menuData = [
    {
      name: "Home",
      url: "/home"
    },
    {
      name: "Products",
      url: "/products",
      children: [
        {
          name: "Electronics",
          url: "/products/electronics",
          children: [
            { name: "Phones", url: "/products/electronics/phones" },
            { name: "Laptops", url: "/products/electronics/laptops" },
            { name: "Tablets", url: "/products/electronics/tablets" }
          ]
        },
        {
          name: "Clothing",
          url: "/products/clothing",
          children: [
            { name: "Men", url: "/products/clothing/men" },
            { name: "Women", url: "/products/clothing/women" },
            { name: "Kids", url: "/products/clothing/kids" }
          ]
        }
      ]
    },
    {
      name: "Services",
      url: "/services",
      children: [
        { name: "Consulting", url: "/services/consulting" },
        { name: "Training", url: "/services/training" }
      ]
    },
    {
      name: "About",
      url: "/about"
    },
    {
      name: "Contact",
      url: "/contact"
    }
  ];

  export default menuData;