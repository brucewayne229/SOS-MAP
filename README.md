## SOS-MAP
# User Story
- Là khách, tôi muốn đăng nhập để sử dụng chức năng cần cho, được nhận, kiểm tra thông tin đã tạo 
- Là khách, tôi muốn tìm kiếm thông tin những mặt hàng cần hỗ trợ
- Là khách, tôi muốn tìm kiếm số điện thoại và địa chỉ của người cho, người nhận
- Là người dùng, tôi muốn tạo mặt hàng cho và mặt hàng nhận
## Stack công nghệ
- ExpressJS để tạo web app
- MongoDB để làm cơ sở dữ liệu
- Reactjs để làm giao diện
- Nodejs dùng để thiết kế , xây dựng một ứng dụng mạng mở rộng
- Tailwind để hỗ trợ làm thiết kế giao diện 
- Joi để validate dữ liệu
## Thiết kế cơ sở dữ liệu
- PersonSchema
- ProductSchema

const PersonSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: [
    { type: String, required: true}
  ],
  phoneNumber: {
    type: number,
    required: true
  }, 
  avatar: String,
  status: String,//Trạng thái là người gửi hay nhận?
  foreignid: String,//Id chung với sản phẩm và người nhận(gửi)
}, {
  timestamp: true
});


const ProductSchema = mongoose.Schema({
  id: String,
  foreignid: String,
  products:[
    {type: String, count: Number},
    {type: String, count: Number},

  ]
}, {
  timestamp: true
});



