import HeaderSpan from './HeaderSpan';

const Header = () => {
  return (
    <div className="flex justify-between px-40 py-4 border-b-2">
      <div className="flex">
        <HeaderSpan text={'wanted'} />
        <HeaderSpan text={'채용'} />
        <HeaderSpan text={'커리어'} />
        <HeaderSpan text={'소셜'} />
        <HeaderSpan text={'이력서'} />
        <HeaderSpan text={'프리랜서'} />
        <HeaderSpan text={'더보기'} />
      </div>
      <div className="flex">
        <HeaderSpan text={'🔎'} />
        <HeaderSpan text={'회원가입/로그인'} />
        <HeaderSpan text={'기업/서비스'} />
      </div>
    </div>
  );
};

export default Header;
