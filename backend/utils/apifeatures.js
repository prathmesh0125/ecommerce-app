class Apifeatures {
  constructor(query, querystr) {
    this.query = query;
    this.queryStr = querystr;
  }
  // search in databse;
  search() {
    const keyword = this.queryStr.keyword
      ? {
          productname: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};
    console.log(keyword);
    this.query = this.query.find({ ...keyword });
    return this;
  }
  filter() {
    const queryCopy = { ...this.queryStr };
    //  remove some filed for category
    const removefiled = ["keyword", "page", "limit"];
    removefiled.forEach((key) => delete queryCopy[key]);
    this.query=this.query.find(queryCopy);
    return this;
  }
}
module.exports = Apifeatures;
// if (keyword) {
//   name: {
//     $regex: req.querystr.keyword;
//     $options: "i";
//   }

// const apiSearch=new Apifeatures(Product.find(),req.query.keyword).search();
// const allProducts = await apiSearch.query;
// }
