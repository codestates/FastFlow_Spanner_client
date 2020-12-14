const ScrollYear = props => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollYear = () => {
    if (scrollTop<500) {
      return 'BC 16000000';
    } else if (scrollTop>=500 && scrollTop<1500) {
      return 'BC 600000';
    } else if (scrollTop>=1500 && scrollTop<2500) {
      return 'BC 3500';
    } else if (scrollTop>=2500 && scrollTop<3500) {
      return 'BC 3500';
    } else if (scrollTop>=3500 && scrollTop<4500) {
      return 'BC 3000';
    } else if (scrollTop>=4500 && scrollTop<5500) {
      return 'BC 1600';
    } else if (scrollTop>=5500 && scrollTop<6500) {
      return 'BC 850';
    } else if (scrollTop>=6500 && scrollTop<7500) {
      return 'BC 100';
    } else if (scrollTop>=7500 && scrollTop<8500) {
      return '1286';
    } else if (scrollTop>=8500 && scrollTop<9500) {
      return '1705';
    } else if (scrollTop>=9500 && scrollTop<10500) {
      return '1749';
    } else if (scrollTop>=10500 && scrollTop<11500) {
      return '1800';
    } else if (scrollTop>=11500 && scrollTop<12500) {
      return '1821';
    } else if (scrollTop>=12500 && scrollTop<13500) {
      return '1862';
    } else if (scrollTop>=13500 && scrollTop<14500) {
      return '1878';
    } else if (scrollTop>=14500 && scrollTop<15500) {
      return '1903';
    } else if (scrollTop>=15500 && scrollTop<16500) {
      return '1960';
    }
  }
  return (     
    <div className="scrollYears">
      <div className={`${scrollTop}`<500?"scrollYear_on":"scrollYear_off"}> 메인페이지</div>
      <div className={`${scrollTop}`>=500 && `${scrollTop}`<1500?"scrollYear_on":"scrollYear_off"}>BC 1600000</div>
    </div>
  );
};
export default ScrollYear;