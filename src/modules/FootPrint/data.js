const imageList = {
  ma2512_6332:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiHITp-KFD9pHPsu9HOgxaHOo7FxR8tbH7tt55ZDtwnuCxFKWQMaNFnKDFy0pN41f1_HAnfPRT08Ipu8-7a2ujVqqK1R-vNs3ZwpudIAphby78MM_NBHoUfAQ_K46kK-MEtiEyI6NZx3bnv3pqujg2tKy5ZD-0C6zsNkbNiAyK_3ZgZZKaUJ5E8pgyXmUs/s1600/image.png",
  kichthuocFootPrint: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhslFBn1Xs91q-ikZ1VebcyuSMQbBTvvgfeKbsNAqeOrfwu-xXy9kfads1cMfLxWjYHXj_FTJ3rvCV_sfnUyBDzJnbSFeTj9dIr04d2rbXQj84FP5Dwpq_aTitZA5rcXI31pEt9xh5VSqqWZi21-d8uT6ST6J8Uip4QxUxvwlR_ZhZw9arDUqQQlT8rxok/s1600/image.png",
  hansolder:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwsTl7txef0byqH5H3luYcF6OztfD3NnopNhgCTSXV10pVQqLPcplUoxFoXq1ach6QxUklZKp3gAF-7YnJ4G0Zf08R7zhxQY493U5ImCl6tdlk-0NPZvsmAvpmGYZvtJVuGn6zHdUoGM-xeJjV6HfJ1JsNw0B80UoiUFFCE1II9DBeFD8IwqrcqZl93lQ/s1600/image.png",
  chancamvachandan:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEguN3ZHxRQ0v-Hsn0ToePQGAwitcZlMAooxWo-x0EV3OHdAx28ybsEnuCM72Q1z6hq4SUBQiT_hnEUCzk3WcXU5gpFAT-ZO_bnoculyyFyKXTHBJJmjXONLh0E0bUZsYNJw3DMEjR5mHizMiWPgSgTnkAMif9E3HoPqLsd42qlhXnLy6pVkM1HUMCmQKg0/s1600/image.png",
  smdcongsuat:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhXHoDLKHmv-4wvl1uWTZ6rF1pP5-kvniXMX4Ao4H_zt6W3IvHCWvRdTO4SCKBKHlOuVRXfK1DbdcWVMC6hsFYvGlRf9JmwOk6sxoX539HvIsAaoOv1rRhr8HGyngKLgznlny_LWgcYzeprTiCtX4biiS6rwrhSbfaBoy7SLZrzopwqMuKi3J_TDIy0vNo/s1600/image.png"
};




export const footprintQuestions = [
 {
  question: 'Trong tên Footprint "Resistor_SMD:R_2512_6332Metric", con số "2512_6332" có ý nghĩa gì?',
  imageUrl: imageList.ma2512_6332,
  options: [
    'Trở kháng của điện trở là 2512 Ohm',
    'Kích thước thân linh kiện tính theo hệ Inch (Dài 0.25 inch x Rộng 0.12 inch)',
    'Công suất chịu tải tối đa là 25.12W',
    'Mã số lô sản xuất của nhà máy KiCad'
  ],
  answer: 1,
  explanation: '2512 là kích thước THÂN con điện trở tính theo hệ Inch (chuẩn Mỹ/Anh): 25 nghĩa là Dài 0.25 inch (~6.3mm), 12 nghĩa là Rộng 0.12 inch (~3.2mm). Lưu ý: Kích thước này CHƯA bao gồm phần chân Pad đồng tráng chì trên PCB.',
  explanationImageUrl: imageList.kichthuocFootPrint
},
  {
    question: 'Ký hiệu "6332Metric" ngay sau mã 2512 trong KiCad có ý nghĩa gì?',
    imageUrl: imageList.ma2512_6332,
    options: [
      'Điện trở này dùng được cho điện áp 63V đến 32V',
      'Kích thước thực tế theo hệ Mét (Chiều dài 6.3mm x Chiều rộng 3.2mm)',
      'Tần số hoạt động tối đa là 6332 MHz',
      'Nhiệt độ hoạt động tối đa là 63.3 độ C'
    ],
    answer: 1,
    explanation: 'KiCad luôn chuẩn hóa tên gọi bằng cách ghi kèm kích thước hệ Mét (6332Metric = 6.3mm x 3.2mm) để người thiết kế tránh nhầm lẫn giữa hệ Inch và hệ Mét.'
  },
  {
    question: 'Hậu tố "_HandSolder" ở cuối tên Footprint dùng để chỉ điều gì?',
    imageUrl: imageList.hansolder,
    options: [
      'Footprint này bắt buộc phải hàn bằng máy tự động SMT',
      'Chỉ được dùng cho hàn chì cắm (Through-hole)',
      'Pad đồng được kéo dài ra một chút để thuận tiện cho việc hàn thủ công bằng mỏ hàn tay',
      'Linh kiện này không thể hàn được'
    ],
    answer: 2,
explanation: 'Các footprint "_HandSolder" có phần Pad đồng (được nhà máy mạ sẵn lớp thiếc bảo vệ màu xám) kéo dài ra ngoài một chút. Điều này giúp đầu mỏ hàn tay dễ tiếp xúc, truyền nhiệt và châm chì khi hàn thủ công.'  },

  {
    question: 'Tại sao điện trở kích thước 2512 lại thường được chọn trong các thiết kế mạch công suất hoặc mạch nguồn?',
    imageUrl: imageList.smdcongsuat,
    options: [
      'Vì nó là kích thước nhỏ nhất trong các loại dán',
      'Vì kích thước lớn hơn giúp nó chịu được công suất nhiệt cao hơn (thường 1W - 2W) so với loại 0805 hay 0603',
      'Vì nó có giá thành rẻ hơn loại 0805',
      'Vì nó giúp mạch gọn nhẹ hơn'
    ],
    answer: 1,
    explanation: 'Điện trở SMD 2512 có thể tích và diện tích bề mặt lớn hơn các chuẩn  0603, 0805 nên khả năng tản nhiệt tốt hơn, chịu được công suất thông thường từ 1W đến 2W.'
  },
  {
    question: 'Khi quan sát mô hình 3D trong KiCad, tại sao chân của linh kiện dán (SMD) có màu xám bạc, còn lỗ cắm (THD) thường hiển thị màu vàng đồng?',
    imageUrl: imageList.chancamvachandan,
    options: [
      'Vì linh kiện SMD làm bằng nhôm, còn THD làm bằng vàng',
      'Màu xám đại diện cho Pad đồng đã được mạ sẵn lớp thiếc bảo vệ (HASL); màu vàng đại diện cho lớp đồng trần mạ xuyên qua lỗ khoan',
      'Do phần mềm KiCad bị lỗi màu',
      'Màu xám nghĩa là linh kiện bị hỏng, màu vàng là linh kiện tốt'
    ],
    answer: 1,
    explanation: 'Mô phỏng 3D thể hiện đúng thực tế sản xuất: Vùng Pad xám bạc là đồng đã mạ sẵn một lớp thiếc mỏng để chống oxy hóa và giúp dính chì. Lớp màu vàng ở lỗ cắm THD thể hiện lớp đồng mạ xuyên suốt qua thân lỗ (Plated Through-Hole).',
    explanationImageUrl: ''
  }
];