import React from "react";

const page = () => {
  const items = [
    {
      store: "Costco.com",
      name: "Sanders (Dark or Milk) Chocolate Sea Salt Caramels 36 oz., 2-pack",
      price: "$3.80 OFF*",
      image:
        "https://cdn.bfldr.com/U447IH35/as/fmhv9h3kpf24wcx5rzqtm7/1117995-847__1?auto=webp&amp;format=jpg&width=1200&height=1200&fit=bounds&canvas=1200,1200",
      image2:
        "https://cdn.bfldr.com/U447IH35/as/wx3hccfz8mwvrnpfn7k9hf/1376847-847__1?auto=webp&amp;format=jpg&width=1200&height=1200&fit=bounds&canvas=1200,1200",
      item: "1117995, 789551",
      limit: "NO LIMIT",
      description: "",
    },
    {
      store: "In-Store Only",
      name: "Snack Factory Dark Chocolate Crunch Pretzel Crisps, 22 oz",
      price: "$3 OFF",
      image:
        "https://www.instacart.com/image-server/466x466/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/product-image/file/large_e8df8963-6eb5-487d-9308-b4bb76137c81.jpeg",
      item: "1102603",
      limit: "10",
      description: "",
    },
    {
      store: "Business Center",
      name: "Rao's Marinara Sauce, 28 oz, 2-count",
      price: "$3 OFF*",
      image:
        "https://www.instacart.com/assets/domains/product-image/file/large_4aac575e-0eb0-4be7-95a8-5dadbb75f794.jpeg",
      item: "1117995",
      limit: "6",
      description: "",
    },
    {
      store: "In-Store Only",
      name: "Crown Maple Organic Bourbon Barrel Aged Maple Syrup, 25 oz",
      price: "$4.30 OFF",
      image:
        "https://www.instacart.com/assets/domains/product-image/file/large_bed56ffe-42ec-4859-84b6-a5291827ea5f.jpeg",
      item: "1110739",
      limit: "6",
      description: "",
    },
    {
      store: "Business Center",
      name: "CJ Foods Bibigo Vegetable Spring Rolls, 3 lbs",
      price: "$3 OFF*",
      image:
        "https://www.instacart.com/assets/domains/product-image/file/large_e94f30c2-b6b3-4650-b80b-56c8f9833320.jpeg",
      item: "1777524",
      limit: "NO LIMIT",
      description: "",
    },
    {
      store: "Costco.com",
      name: "J.A. Henckels 3-piece Cutting Board Set",
      price: "$14.99* AFTER $4 OFF",
      image:
        "https://bfasset.costco-static.com/U447IH35/as/kmmhxvxb98b7wkq8f58r73/4000296155-847_blue_1?auto=webp&amp;format=jpg&width=1200&height=1200&fit=bounds&canvas=1200,1200",
      item: "1796079",
      limit: "5",
      description: "",
    },
    {
      store: "Costco.com",
      name: "Nutribullet Ultra Deluxe Single-Serve Blender",
      price: "$89.99* AFTER $30 OFF",
      image:
        "https://bfasset.costco-static.com/U447IH35/as/rq4m4s4mcfh688fwwbbprhhf/2422566-847__1?auto=webp&amp;format=jpg&width=1200&height=1200&fit=bounds&canvas=1200,1200",
      item: "2422566",
      limit: "5",
      description: "",
    },
    {
      store: "Costco.com",
      name: "Cuisinart 12-Cup Die-Cast Food Processor",
      price: "$149.99* AFTER $50 OFF",
      image:
        "https://bfasset.costco-static.com/U447IH35/as/5cq6mqjvj85xf8hgxwknxrc6/4000184277-847__1?auto=webp&amp;format=jpg&width=1200&height=1200&fit=bounds&canvas=1200,1200",
      item: "1415869",
      limit: "5",
      description: "",
    },
    {
      store: "Costco.com",
      name: "Ninja Foodi 6-in-1 10-qt. XL 2-Basket Air Fryer with DualZone Technology",
      price: "$119.99* AFTER $30 OFF",
      image:
        "https://bfasset.costco-static.com/U447IH35/as/4zsz2m7hcp23kk7ntvhzgkbt/5588088-847__3?auto=webp&amp;format=jpg&width=1200&height=1200&fit=bounds&canvas=1200,1200",
      item: "2422566",
      limit: "5",
      description: "",
    },
    {
      store: "Costco.com",
      name: "Round Brilliant 1.00 ctw VS2 Clarity, I Color Diamond 14kt White Gold Heart Pendant",
      price: "Early Start Oct 25 $999.99* AFTER $300 OFF",
      image:
        "https://bfasset.costco-static.com/U447IH35/as/j8jjkg46z3qs7xqwvfxjx4w/1834021-847__1?auto=webp&amp;format=jpg&width=1200&height=1200&fit=bounds&canvas=1200,1200",
      item: "1834021",
      limit: "5",
      description: "",
    },
    {
      store: "Costco.com",
      name: "14kt Yellow Gold Bead Link Necklace",
      price: "$599.99* AFTER $200 OFF",
      image:
        "https://bfasset.costco-static.com/U447IH35/as/5fx9t9r9595jp4p9knfhf9t/1833221-847__1?auto=webp&amp;format=jpg&width=1200&height=1200&fit=bounds&canvas=1200,1200",
      item: "1833221",
      limit: "5",
      description: "",
    },
    {
      store: "Costco.com",
      name: "14kt Two-Tone Yellow Gold Infinity Bracelet",
      price: "$999.99* AFTER $300 OFF",
      image:
        "https://bfasset.costco-static.com/U447IH35/as/5j9cws2nh8jphx9rgxzx42j/4000268828-847__1?auto=webp&amp;format=jpg&width=1200&height=1200&fit=bounds&canvas=1200,1200",
      item: "1833302",
      limit: "5",
      description: "",
    },
    {
      store: "Costco.com",
      name: "Round Brilliant 0.80 ctw VS2 Clarity, I Color Diamond 14kt White Gold Stud Earrings",
      price: "$1199.99* AFTER $400 OFF",
      image:
        "https://bfasset.costco-static.com/U447IH35/as/7m3w8g3v4rbsgt3zv8s3b8vs/1748473-847__1?auto=webp&amp;format=jpg&width=1200&height=1200&fit=bounds&canvas=1200,1200",
      item: "1748473",
      limit: "5",
      description: "",
    },
    {
      store: "Costco.com",
      name: "Round Brilliant 0.80 ctw VS2 Clarity, I Color Diamond 14kt White Gold Stud Earrings",
      price: "$99.99* AFTER $30 OFF",
      image:
        "https://bfasset.costco-static.com/U447IH35/as/9wj9ttw78h5w4wjmb47hv6/1788822-847__1?auto=webp&amp;format=jpg&width=1200&height=1200&fit=bounds&canvas=1200,1200",
      item: "1788822",
      limit: "5",
      description: "",
    },
    {
      store: "Costco.com Only",
      name: "Round Brilliant 1.50 CTW VS2 Clarity, I Color Diamond 14kt White Gold Band",
      price: "$1499.99* AFTER $500 OFF",
      image:
        "https://bfasset.costco-static.com/U447IH35/as/tpzkvtn3p4qh957stnrtm34/4000269187-847__1?auto=webp&amp;format=jpg&width=1200&height=1200&fit=bounds&canvas=1200,1200",
      item: "4000269187",
      limit: "5",
      description: "",
    },
    {
      store: "Costco.com",
      name: "Jachs Men's Crew Neck Sweatshirt",
      price: "$11.99* AFTER $3 OFF",
      image:
        "https://bfasset.costco-static.com/U447IH35/as/5cvmk9pxr36xpncc8hspsnb/4000258008-847_brown_1?auto=webp&amp;format=jpg&width=1200&height=1200&fit=bounds&canvas=1200,1200",
      item: "1799235",
      limit: "10",
      description: "",
    },
    {
      store: "Costco.com",
      name: "Mondetta Youth 1/2 Zip Pullover Top",
      price: "$9.99* AFTER $3 OFF",
      image:
        "https://bfasset.costco-static.com/U447IH35/as/mznhjtnm99tx5zvgbzp983/4000265396-847_purple_1?auto=webp&amp;format=jpg&width=600&height=600&fit=bounds&canvas=600,600",
      item: "1712779",
      limit: "10",
      description: "",
    },
    {
      store: "Costco.com Only",
      name: "Evolution Spas Oxford 121-jet, 7-person Spa",
      price: "$7999.99* AFTER $2000 OFF",
      image:
        "https://bfasset.costco-static.com/U447IH35/as/k8tznpm3gp3cbp58cbqbxh8/100403873-847_black_1?auto=webp&amp;format=jpg&width=1200&height=1200&fit=bounds&canvas=1200,1200",
      item: "100403873",
      limit: "2",
      description: "",
    },
    {
      store: "Costco.com Only",
      name: "Aquaterra Spas Montecito 45 Jet, 6-person Spa",
      price: "$3299.99* AFTER $1000 OFF",
      image:
        "https://bfasset.costco-static.com/U447IH35/as/r4rxrgj3fchhksbn8hm8sc/100476158-847__1?auto=webp&amp;format=jpg&width=1200&height=1200&fit=bounds&canvas=1200,1200",
      item: "945586",
      limit: "2",
      description: "",
    },
    {
      store: "Costco.com",
      name: "Chex Cereal Party Mix Variety Pack, Corn, Rice and Wheat Chex, 3 ct, 54.25 oz",
      price: "$2.70 OFF",
      image:
        "https://i5.walmartimages.com/seo/Corn-Rice-and-Wheat-Chex-Breakfast-Cereal-Variety-Pack-54-25-oz_98e8a78c-c590-4dfa-8980-5ea5d12c7a16.b46503cc5b38f06f4be447857f181a35.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      item: "28245",
      limit: "10",
      description: "",
    },
    {
      store: "Costco.com",
      name: "Kleenex Trusted Care Facial Tissue, 2-ply, 230-count, 10-pack",
      price: "$5 OFF*",
      image:
        "https://bfasset.costco-static.com/U447IH35/as/3x3qw367g3ncw7wrzpf35rq/100089150-847__1?auto=webp&amp;format=jpg&width=1200&height=1200&fit=bounds&canvas=1200,1200",
      item: "723675",
      limit: "6",
      description: "",
    },
    {
      store: "Costco.com",
      name: "Carr's Table Water Crackers, Variety Pack, 25.5 oz",
      price: "$4.50 OFF*",
      image:
        "https://bfasset.costco-static.com/U447IH35/as/fkf74s88h5t6pqfkgktc32q/100387865-847__1?auto=webp&amp;format=jpg&width=1200&height=1200&fit=bounds&canvas=1200,1200",
      item: "795269",
      limit: "6",
      description: "",
    },
    {
      store: "Costco.com",
      name: "Kirkland Signature Parchment Paper, 15 in x 164 ft, 2-count",
      price: "$3 OFF*",
      image:
        "https://bfasset.costco-static.com/U447IH35/as/n8bxjcmkgxxxn4mxmcxhqr7c/1323118-847__1?auto=webp&amp;format=jpg&width=1200&height=1200&fit=bounds&canvas=1200,1200",
      item: "1323118",
      limit: "5",
      description: "",
    },
    {
      store: "In-Store Only",
      name: "Kirkland Signature Parchment Paper, 15 in x 164 ft, 2-count",
      price: "$4.50 OFF*",
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTMUpZx9Hx2CYE3zrwgqxbP0Zq0QG3VN2IytrOFvk-9N4LmCXjpo1J6z08Lg0HR38MFjZlQaM1n7Uo_7k4aHbOUur-VKiO2",
      item: "1108214",
      limit: "NO LIMIT",
      description: "",
    },
    {
      store: "In-Store Only",
      name: "Kirkland Signature Elegant Plastic Plates",
      price: "$3 OFF*",
      image:
        "https://bfasset.costco-static.com/U447IH35/as/4b9vbrphpnq8g9x5g64fkv/1343253-847__1?auto=webp&amp;format=jpg&width=1200&height=1200&fit=bounds&canvas=1200,1200",
      item: "1343253",
      limit: "2",
      description: "",
    },
    {
      store: "Business Center",
      name: "Philadelphia Original Cream Cheese Spread 3 lbs",
      price: "$3 OFF*",
      image:
        "https://cdnimg.webstaurantstore.com/images/products/large/676306/2679507.jpg",
      item: "40532",
      limit: "NO LIMIT",
      description: "",
    },
    {
      store: "Costco.com",
      name: "Chinet Crystal 10 oz Plastic Cup, Clear, 150-count",
      price: "$3 OFF*",
      image:
        "https://bfasset.costco-static.com/U447IH35/as/95txgfktvqm779qkx55zcp7r/519964-847__1?auto=webp&amp;format=jpg&width=1200&height=1200&fit=bounds&canvas=1200,1200",
      item: "519964",
      limit: "2",
      description: "",
    },
    {
      store: "Costco.com",
      name: "Nylabone Broth Bones Natural Edible Dog Chews, 60-count, 2-pack",
      price: "$7 OFF*",
      image:
        "https://bfasset.costco-static.com/U447IH35/as/kswhf6n6tjhc2kfwhmpffcx/4000300123-847__1?auto=webp&amp;format=jpg&width=1200&height=1200&fit=bounds&canvas=1200,1200",
      item: "1850603",
      limit: "5",
      description: "",
    },
    {
      store: "Costco.com",
      name: "Cuisine Adventures French Onion Soup, 6-count",
      price: "$7 OFF*",
      image:
        "https://cuisineadventuresfoods.com/wp-content/uploads/2024/05/French-Onion-Soup-6-US.png",
      item: "169730",
      limit: "NO LIMIT",
      description: "",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="p-4 place-items-center bg-white rounded shadow-lg w-72 h-[30rem] flex flex-col justify-between"
          >
            <div
              className={`text-center w-full py-1 px-2 text-white ${
                item.store === "Costco.com"
                  ? "bg-red-600"
                  : item.store === "Business Center"
                  ? "bg-blue-600"
                  : item.store === "Costco.com Only"
                  ? "bg-green-600"
                  : item.store === "In-Store Only"
                  ? "bg-gray-600"
                  : ""
              }`}
            >
              {item.store}
            </div>
            <div className="text-center font-bold">{item.name}</div>
            <div className="text-center font-bold text-xl">{item.price}</div>
            <div className="flex justify-center space-x-2">
              <img
                className="w-3/4 h-auto object-cover"
                src={item.image}
                alt={item.name}
              />
              {item.image2 && (
                <img
                  className="w-3/4 h-auto object-cover"
                  src={item.image2}
                  alt={item.name}
                />
              )}
            </div>
            <div className="text-center">Item: {item.item}</div>
            <div className="text-center">Limit: {item.limit}</div>
            <div className="text-center">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
