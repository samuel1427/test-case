import './App.scss';
import { Container } from 'react-bootstrap';
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import { Dropdown } from 'semantic-ui-react'
import ItemPreview from './components/itemPreview.js'
import Button from '@material-ui/core/Button';
function App() {
  const options = [
    { key: 0, value: 0, text: 'Feature Sort' },
    { key: 1, value: 1, text: 'Popularity Sort' }
  ]
  const itemsInfo = [
    { img: "image1.jpg", titleChinese: "OLAY 抗氧酵母絲絨霜", titleEnglish: "GOLDEN AURA MELTING SOUFFLÉ MOISTURIZER", detail: "法國獨家專利酵母護膚技術，抗氧修護脆弱熬夜肌，肌膚回復彈潤細膩；絲絨質感，高度滋潤保濕不油膩", rating: 3, price: "$549.00" },
    { img: "image2.jpg", titleChinese: "OLAY 抗氧酵母精華水", titleEnglish: "GOLDEN AURA ESSENCE LOTION LOTION", detail: "法國獨家專利酵母護膚技術，即時急救熬夜肌膚", rating: 5, price: "$369.00" },
    { img: "image3.jpg", titleChinese: "OLAY 抗氧酵母空氣感絲絨霜", titleEnglish: "GOLDEN AURA MELTING SOUFFLÉ MOISTURIZER AIR FINISH", detail: "法國獨家專利酵母護膚技術，抗氧修護脆弱熬夜肌，肌膚回復彈潤細膩；空氣質感，輕盈鎖水", rating: 5, price: "$549.00" },
    { img: "image4.jpg", titleChinese: "OLAY 抗氧酵母精華", titleEnglish: "GOLDEN AURA YOUTH ESSENCE", detail: "法國獨家專利酵母護膚技術,抗氧修護熬夜肌", rating: 5, price: "$599.00" },
    { img: "image5.jpg", titleChinese: "OLAY新生高效緊緻護膚霜", titleEnglish: "REGENERIST MICRO-SCULPTING SUPER CREAM", detail: "第5代Super Cream以「三重膠原技術」，+400%膠原蛋白增生，+40%激活膠原能量，提升全方位提升膠原質素", rating: 3, price: "$269.00" },
    { img: "image6.jpg", titleChinese: "OLAY 新生高效緊緻活膚露", titleEnglish: "Regenerist Micro-sculpting Super Essence Water", detail: "蘊含近90%精華成分，極致保濕，減淡細紋，重現無痕緊緻", rating: 1, price: "$219.90" }

  ]
  return (
    <Container className="App" fluid="sm">
      <div className="row">
        <div className="col-sm-3 col-sm-0 left-col">
          <div className="list"><div className="list-text">美國空氣霜系列</div><div className="list-symbol">＋</div></div>
          <div className="list"><div className="list-text">肌膚護理</div><div className="list-symbol">＋</div></div>
          <div className="list"><div className="list-text">眼周護理</div><div className="list-symbol">＋</div></div>
          <div className="list"><div className="list-text">防曬</div><div className="list-symbol">＋</div></div>
          <div className="list"><div className="list-text">護膚需求</div><div className="list-symbol">＋</div></div>
          <div className="list"><div className="list-text">產品系列</div><div className="list-symbol">—</div></div>
          <div className="listDetail">新生高效系列</div>
          <div className="listDetail">高效白光系列</div>
          <div className="listDetail">多元修護系列</div>
          <div className="listDetail">水樣系列</div>
          <div className="listDetail">白裡透紅系列</div>
          <div className="listDetail">基礎護理系列</div>
          <div className="listBottom">—護膚需求</div>

        </div>
        <div className="col-sm-9 col-xs-12 right-col">
          <div className="sortingBar">
            <div className="sortingBar-title">顯示6個產品</div>
            <ViewModuleIcon className="sortingBar-icon" />
            <ViewListIcon className="sortingBar-icon" />
            <div className="sortingBar-sortingText">排序方式</div>
            <Dropdown placeholder={options[0].text} selection options={options} />
          </div>
          <div className="mobile-sortingBar">
            <div className="sortingBar-title">顯示6個產品</div>
            <div className="sortingBar-row2">
              <div className="sortingBar-buttonWrapper">
                <Button variant="outlined" className="sortingBar-sortingButton" >
                  排序方式 - Feature Sort
              </Button>
              </div>


              <ViewModuleIcon className="sortingBar-icon" />
              <ViewListIcon className="sortingBar-icon" />
            </div>

          </div>
          <div className="items">
            {itemsInfo.map((items, i) => {
              return <ItemPreview item={items} key={i} />;
            })}
          </div>
        </div>
      </div>
    </Container>


  );
}

export default App;
