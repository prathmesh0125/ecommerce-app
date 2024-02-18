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
    // console.log(keyword);
    this.query = this.query.find({ ...keyword });
    return this;
  }
  filter() {
    const queryCopy = { ...this.queryStr };
    //  remove some filed for category
    const removefiled = ["keyword", "page", "limit"];
    removefiled.forEach((key) => delete queryCopy[key]);
    // price filter
    // console.log(queryCopy);
    let queryStr = JSON.stringify(queryCopy);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);

    this.query = this.query.find(JSON.parse(queryStr));
    // console.log(queryStr);
    return this;
  }
  pagination(resultperPage){
    const currentpage=this.queryStr.page || 1;
    const skip=resultperPage*(currentpage -1 )
    this.query=this.query.limit(resultperPage).skip(skip);

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
