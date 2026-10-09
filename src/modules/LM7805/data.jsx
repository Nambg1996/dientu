const imageList = {
  Lm7805dunglamgi: "https://blogger.googleusercontent.com/img/a/AVvXsEjCqr-EqweBXQFm4sKRTRRaoI8A_6Cd2lYmSstqg5c1hrQyOGrhi2Ph4wTFvj05Ovu7tl8p4XpSpmQIHQS2RJZjkRFq6eBO10d7ZhCZirKiWUk6tZ1V_IYgKIZRi0dAcgkKhVMLh3C6YLGe6jnqegssZYlehcidilrMAbT1HjuOofAtcMQWPT0_1if7GmZS",
  sodochanLM7805: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjWuIP_w7lhXjSDIk6-rl0uD_UHCR51cnibOLZu6ZIa8f1-Ze1m2ngJkLu1C1sPOXWJGrF8L4xCzzcwNXbu0G4lIxsopM9Jy69q3AWjnlSmRffxF_n1euz9kCqqTlzYrVPQO2tRmQ4HXS8c-1FV__6fcoNERdZL1Vr8B7CFSbkBjgrOBCq8ylUcPA27RtY/s1600/image.png",
  giaithichtoanhiet: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEixq2Em0l9VoEwPQCTGonU3bkL99hIb1FinyPiF_bNyIFIopdFWSqZAGrPwlN69OSEp6kARSRWAnXgjXeMStN6gNmwK0sojfjSf6Uvgb4iIuZKLvYFGvxeDFTiUvLhXaGis9Sbqyvimqlc1Yn3iNuBOuwTMIuZEyVKxsOYUSaXgKcR0eVnGfs077hONCoI/s1600/image.png"
};

export const lm7805Questions = [
  {
    question: 'LM7805 dùng để làm gì?',
    imageUrl: imageList.Lm7805dunglamgi,
    options: ['Tăng điện áp', 'Ổn định điện áp đầu ra khoảng 5V', 'Đo dòng điện', 'Chuyển AC thành DC'],
    answer: 1,
    explanation: 'LM7805 là IC ổn áp tuyến tính, thường được dùng để tạo ra điện áp DC khoảng 5V ổn định.'
  },
  {
    question: 'Với LM7805 thông thường, chân nào là GND?',
    imageUrl: imageList.Lm7805dunglamgi,
    options: ['Chân 1', 'Chân 2', 'Chân 3', 'Không có chân GND'],
    answer: 1,
    explanation: 'Với dạng TO-220 phổ biến, nhìn mặt có chữ của LM7805: chân 1 là IN, chân 2 là GND, chân 3 là OUT.',
    explanationImageUrl: imageList.sodochanLM7805
  },
  {
    question: 'Nếu cấp 12V vào LM7805 và lấy ra 5V, phần điện áp dư chủ yếu biến thành gì?',
    imageUrl: '',
    options: ['Ánh sáng', 'Âm thanh', 'Nhiệt', 'Từ trường'],
    answer: 2,
    explanation: 'LM7805 là ổn áp tuyến tính. Phần chênh lệch điện áp bị tiêu tán dưới dạng nhiệt.',
    explanationImageUrl: imageList.giaithichtoanhiet
  },
  {
    question: 'Cấp 12V vào LM7805, tải tiêu thụ 0.5A. Công suất nhiệt xấp xỉ bao nhiêu?',
    imageUrl: '',
    options: ['0.5W', '2.5W', '3.5W', '6W'],
    answer: 2,
    explanation: 'P = (Vin - Vout) x I = (12 - 5) x 0.5 = 3.5W. LM7805 lúc này sẽ khá nóng.'
  },
  {
    question: 'Trường hợp nào nên đặc biệt cân nhắc tản nhiệt cho LM7805?',
    imageUrl: '',
    options: ['Vin cao và dòng tải lớn', 'Vin = 5V và dòng tải bằng 0', 'Không có tải', 'Chỉ khi dùng LED'],
    answer: 0,
    explanation: 'Công suất nhiệt tăng khi điện áp đầu vào cao và dòng tải lớn. Khi công suất nhiệt lớn, cần chú ý tản nhiệt.'
  }
];