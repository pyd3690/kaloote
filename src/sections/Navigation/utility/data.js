const Data = {
  menuItems: [
    {
      name: "Home",
      path: "/"
      /* 
      subItems: [
        {
          name: "Home Default",
          path: "/"
        },
        {
          name: "Home Classic",
          path: "/classic"
        },
        {
          name: "Home Modern",
          path: "/modern"
        },
        {
          name: "Home Hosting",
          path: "/hosting"
        },
        {
          name: "Home Crypto",
          path: "/crypto"
        }
      ] */
    },
    /* 
    {
      name: "Features",
      path: "features",
      offset: "-50"
    },
    {
      name: "Pricing",
      path: "pricing",
      offset: "-50"
    },
    {
      name: "Testimonial",
      path: "testimonial",
      offset: "-50"
    },
    {
      name: "Faq",
      path: "faq",
      offset: "-50"
    }, */
    {
      name: "Blog",
      path: "/blog-list/All"/* ,
      offset: "-50" */
      ,
      subItems: [
        {
          name: "Financial Markets",
          path: "/blog-list/financial-markets"
        },
        {
          name: "Research",
          path: "/blog-list/research"
        },
		{
          name: "FinTech",
          path: "/blog-list/fintech"
        } ,
        {
          name: "Data Analysis",
          path: "/blog-list/data-analysis"
        }
      ] 
    },
    {
      name: "Contact",
      path: "/contact"/* ,
      offset: "-50" */
    },
    {
      name: "Research Data",
      path: "/visualization"
    }
  ]
};
export default Data;
