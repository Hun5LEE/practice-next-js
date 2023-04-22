export default function handler(request, response) {
  if (request.method === "POST") {
    return response.status(200).json("안녕");
  }
}

// 처리성공시엔 status(200) , 실패시 status(500), 서버기능 처리실패시(유저잘못)status(400)
