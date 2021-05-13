// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {

  data = fetch('https://www.boots.com/webapp/wcs/stores/servlet/CVOSShowStockView?productId=927582&storeId=11352&storeId=11352&catalogId=28501&langId=-1&krypto=46Kqi7H%2B5ZzMDs8tfhrzBzmoY1PafMUQEJLnYsD17cvgmlVO8ZyCxkgPU3sMj3pbUhvMAGVmLrlJEjTMfBopJ8K4wPBwMvjTjyHt0IiclqkAQmRzITqlSYWhs7YL%2FmpFwfJfWwWYzfSaG2pygUpedO8XJCePq1ev9SVTT52cvbFjhHgTpk6a20IYhbKp2wZ7grog8glpTE4bEUJr8VSPfDHV3fy9w0C87wdjCYh%2FcOo%3D')
    .then(response => console.log(response))
    .then(body => console.log(body))
    .catch(function(error) {
      console.log(error);
    });

  res.status(200).json({ data })

}
