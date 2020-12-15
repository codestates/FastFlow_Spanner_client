const ScrollYear = props => {
  const scrollTop = document.documentElement.scrollTop;
  return (     
    <div className="scrollYears">
      <div className={`${scrollTop}`<500?"scrollYear_on":"scrollYear_out"}>메인페이지</div>
      <div className={`${scrollTop}`>=500?( `${scrollTop}`<1500?"scrollYear_on":"scrollYear_out"):( `${scrollTop}`<1500?"scrollYear_in":"")}>BC 1600000</div>
      <div className={`${scrollTop}`>=1500?( `${scrollTop}`<2500?"scrollYear_on":"scrollYear_out"):( `${scrollTop}`<2500?"scrollYear_in":"")}>BC 600000</div>
      <div className={`${scrollTop}`>=2500?( `${scrollTop}`<3500?"scrollYear_on":"scrollYear_out"):( `${scrollTop}`<3500?"scrollYear_in":"")}>BC 3500</div>
      <div className={`${scrollTop}`>=3500?( `${scrollTop}`<4500?"scrollYear_on":"scrollYear_out"):( `${scrollTop}`<4500?"scrollYear_in":"")}>BC 3500</div>
      <div className={`${scrollTop}`>=4500?( `${scrollTop}`<5500?"scrollYear_on":"scrollYear_out"):( `${scrollTop}`<5500?"scrollYear_in":"")}>BC 3000</div>
      <div className={`${scrollTop}`>=5500?( `${scrollTop}`<6500?"scrollYear_on":"scrollYear_out"):( `${scrollTop}`<6500?"scrollYear_in":"")}>BC 1600</div>
      <div className={`${scrollTop}`>=6500?( `${scrollTop}`<7500?"scrollYear_on":"scrollYear_out"):( `${scrollTop}`<7500?"scrollYear_in":"")}>BC 850</div>
      <div className={`${scrollTop}`>=7500?( `${scrollTop}`<8500?"scrollYear_on":"scrollYear_out"):( `${scrollTop}`<8500?"scrollYear_in":"")}>BC 100</div>
      <div className={`${scrollTop}`>=8500?( `${scrollTop}`<9500?"scrollYear_on":"scrollYear_out"):( `${scrollTop}`<9500?"scrollYear_in":"")}>1286</div>
      <div className={`${scrollTop}`>=9500?( `${scrollTop}`<10500?"scrollYear_on":"scrollYear_out"):( `${scrollTop}`<10500?"scrollYear_in":"")}>1705</div>
      <div className={`${scrollTop}`>=10500?( `${scrollTop}`<11500?"scrollYear_on":"scrollYear_out"):( `${scrollTop}`<11500?"scrollYear_in":"")}>1749</div>
      <div className={`${scrollTop}`>=11500?( `${scrollTop}`<12500?"scrollYear_on":"scrollYear_out"):( `${scrollTop}`<12500?"scrollYear_in":"")}>1800</div>
      <div className={`${scrollTop}`>=12500?( `${scrollTop}`<13500?"scrollYear_on":"scrollYear_out"):( `${scrollTop}`<13500?"scrollYear_in":"")}>1821</div>
      <div className={`${scrollTop}`>=13500?( `${scrollTop}`<14500?"scrollYear_on":"scrollYear_out"):( `${scrollTop}`<14500?"scrollYear_in":"")}>1862</div>
      <div className={`${scrollTop}`>=14500?( `${scrollTop}`<15500?"scrollYear_on":"scrollYear_out"):( `${scrollTop}`<15500?"scrollYear_in":"")}>1878</div>
      <div className={`${scrollTop}`>=15500?( `${scrollTop}`<16500?"scrollYear_on":"scrollYear_out"):( `${scrollTop}`<16500?"scrollYear_in":"")}>1903</div>
      <div className={`${scrollTop}`>=16500?( `${scrollTop}`<17500?"scrollYear_on":"scrollYear_out"):( `${scrollTop}`<17500?"scrollYear_in":"")}>1960</div>
    </div>
  );
};
export default ScrollYear;