<h2> <img src="https://emojis.slackmojis.com/emojis/images/1588315024/8823/hyperkitty.gif?1588315024" width="30" /> SOS MAP </h2>

## User Story
- Là khách, tôi muốn đăng nhập để sử dụng chức năng cần cho, được nhận, kiểm tra thông tin đã tạo 
- Là khách, tôi muốn tìm kiếm thông tin những mặt hàng cần hỗ trợ
- Là khách, tôi muốn tìm kiếm số điện thoại và địa chỉ của người cho, người nhận
- Là người dùng, tôi muốn tạo mặt hàng cho và mặt hàng nhận
## Stack công nghệ
<table>
  <tr>
    <td align="center" width="160">
          <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" width="60" />
        <br />
        HTML5
    </td>
    <td align="center" width="160">
      <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" width="60" />
        <br />
       CSS3
    </td>
    <td align="center" width="160">
     <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" width="60" />
        <br />
        Javascript
    </td>
    <td align="center" width="160">
     <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" width="60" />
        <br />
        Nodejs
    </td>
    <td align="center" width="160">
       <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" width="60" />
        <br />
       Reactjs
    </td>
    <td align="center" width="160">
       <img src="https://img.shields.io/badge/MongoDB-white?style=for-the-badge&logo=mongodb&logoColor=4EA94B" width="60" />
        <br />
       MongoDB
    </td>
     <td align="center" width="160">
       <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" width="60" />
        <br />
       Tailwind CSS
    </td>
     <td align="center" width="160">
       <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" width="60" />
        <br />
       ExpressJS
    </td>
  </tr>
  </table>
  
  
- ExpressJS để tạo web app
- MongoDB để làm cơ sở dữ liệu
- Reactjs để làm giao diện
- Nodejs dùng để thiết kế , xây dựng một ứng dụng mạng mở rộng
- Tailwind để hỗ trợ làm thiết kế giao diện 
- Joi để validate dữ liệu
## Thiết kế cơ sở dữ liệu
- UserSchema
- PersonSchema
- ProductSchema
```ruby
const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    require: true
  }
}, {
  timestamp: true
});


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
  status: String,
  foreignid: String,
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
```


