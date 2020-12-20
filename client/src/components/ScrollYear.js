import useScrollStatus from "./hooks/useScrollStatus";

const ScrollYear = props => {
  const inventionsNum = 18;
  const invenHeight = 100/inventionsNum;
  const scrollState = useScrollStatus();
  const position = scrollState.position;
  return (     
    <div className="scrollYears">
      <div className={`${position}`*1<`${invenHeight}`*1?"scrollYear_on":"scrollYear_out"}>{props.userName?`Hello! ${props.userName}`:'Spanner'}</div>
      <div className={`${position}`>=`${invenHeight}`*1?( `${position}`<`${invenHeight}`*2?"scrollYear_on":"scrollYear_out"):( `${position}`<`${invenHeight}`*2?"scrollYear_in":"")}>BC 1.6M</div>
      <div className={`${position}`>=`${invenHeight}`*2?( `${position}`<`${invenHeight}`*3?"scrollYear_on":"scrollYear_out"):( `${position}`<`${invenHeight}`*3?"scrollYear_in":"")}>BC 0.6M</div>
      <div className={`${position}`>=`${invenHeight}`*3?( `${position}`<`${invenHeight}`*4?"scrollYear_on":"scrollYear_out"):( `${position}`<`${invenHeight}`*4?"scrollYear_in":"")}>BC 3.5k</div>
      <div className={`${position}`>=`${invenHeight}`*4?( `${position}`<`${invenHeight}`*5-1?"scrollYear_on":"scrollYear_out"):( `${position}`<`${invenHeight}`*5-1?"scrollYear_in":"")}>BC 3.5k</div>
      <div className={`${position}`>=`${invenHeight}`*5-1?( `${position}`<`${invenHeight}`*6-1?"scrollYear_on":"scrollYear_out"):( `${position}`<`${invenHeight}`*6-1?"scrollYear_in":"")}>BC 3.0k</div>
      <div className={`${position}`>=`${invenHeight}`*6-1?( `${position}`<`${invenHeight}`*7?"scrollYear_on":"scrollYear_out"):( `${position}`<`${invenHeight}`*7?"scrollYear_in":"")}>BC 1.6k</div>
      <div className={`${position}`>=`${invenHeight}`*7?( `${position}`<`${invenHeight}`*8?"scrollYear_on":"scrollYear_out"):( `${position}`<`${invenHeight}`*8?"scrollYear_in":"")}>BC 850</div>
      <div className={`${position}`>=`${invenHeight}`*8?( `${position}`<`${invenHeight}`*9?"scrollYear_on":"scrollYear_out"):( `${position}`<`${invenHeight}`*9?"scrollYear_in":"")}>BC 100</div>
      <div className={`${position}`>=`${invenHeight}`*9?( `${position}`<`${invenHeight}`*10?"scrollYear_on":"scrollYear_out"):( `${position}`<`${invenHeight}`*10?"scrollYear_in":"")}>1286</div>
      <div className={`${position}`>=`${invenHeight}`*10?( `${position}`<`${invenHeight}`*11?"scrollYear_on":"scrollYear_out"):( `${position}`<`${invenHeight}`*11?"scrollYear_in":"")}>1705</div>
      <div className={`${position}`>=`${invenHeight}`*11?( `${position}`<`${invenHeight}`*12?"scrollYear_on":"scrollYear_out"):( `${position}`<`${invenHeight}`*12?"scrollYear_in":"")}>1796</div>
      <div className={`${position}`>=`${invenHeight}`*12?( `${position}`<`${invenHeight}`*13?"scrollYear_on":"scrollYear_out"):( `${position}`<`${invenHeight}`*13?"scrollYear_in":"")}>1800</div>
      <div className={`${position}`>=`${invenHeight}`*13?( `${position}`<`${invenHeight}`*14?"scrollYear_on":"scrollYear_out"):( `${position}`<`${invenHeight}`*14?"scrollYear_in":"")}>1821</div>
      <div className={`${position}`>=`${invenHeight}`*14?( `${position}`<`${invenHeight}`*15?"scrollYear_on":"scrollYear_out"):( `${position}`<`${invenHeight}`*15?"scrollYear_in":"")}>1862</div>
      <div className={`${position}`>=`${invenHeight}`*15?( `${position}`<`${invenHeight}`*16?"scrollYear_on":"scrollYear_out"):( `${position}`<`${invenHeight}`*16?"scrollYear_in":"")}>1878</div>
      <div className={`${position}`>=`${invenHeight}`*16?( `${position}`<`${invenHeight}`*17?"scrollYear_on":"scrollYear_out"):( `${position}`<`${invenHeight}`*17?"scrollYear_in":"")}>1903</div>
      <div className={`${position}`>=`${invenHeight}`*17?( `${position}`<=`${invenHeight}`*18?"scrollYear_on":"scrollYear_out"):( `${position}`<=`${invenHeight}`*18?"scrollYear_in":"")}>1960</div>
    </div>
  );
};
export default ScrollYear;