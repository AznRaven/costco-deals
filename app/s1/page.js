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
      store: "Costco.com",
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
      store: "Costco.com",
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
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 items-center gap-1">
        {items.map((item) => (
          <div className="p-4 place-items-center">
            <div
              className={`text-center w-fit py-1 px-2 text-white ${
                item.store === "Costco.com"
                  ? "bg-red-600"
                  : item.store === "Business Center"
                  ? "bg-blue-600"
                  : item.store === "Costco.com Only"
                  ? "bg-green-600"
                  : ""
              }`}
            >
              {item.store}
            </div>
            <div className="text-center font-bold">{item.name}</div>
            <div className="text-center font-bold text-2xl">{item.price}</div>
            <div className="flex">
              <img
                className="w-1/2 mx-auto"
                src={item.image}
                alt="placeholder"
              />
              {item.image2 && (
                <img
                  className="w-1/2 mx-auto"
                  src={item.image2}
                  alt="placeholder"
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
