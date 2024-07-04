const HomeBanner = () => {
  return (
    <div className="flex justify-center p-5 bg-gray-100 rounded-lg">
      <div className="mx-10">
        <img
          className="h-40 w-52"
          src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fjobsfeed%2Fimage-ai_banner-desktop.png&amp;w=600&amp;q=100"
          fetchpriority="high"
          alt="matched banner"
        />
      </div>
      <div className="flex flex-col justify-center mr-20 text-base font-bold align-middle">
        <span>내 이력서를 분석해</span>
        <span>관심 있을 만한 포지션을 추천해 드려요</span>
      </div>
      <button className="w-40 h-12 align-middle bg-white rounded-lg">지금 시작하기</button>
    </div>
  );
};

export default HomeBanner;
