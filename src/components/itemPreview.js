import React, { useState } from 'react'
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import './itemPreview.scss'
import Button from '@material-ui/core/Button';
function ItemPreview(props) {
    const [checked, setChecked] = useState(false);
    const [clicked, setClicked] = useState(false);
    function checkboxChecked() {
        setChecked(!checked);
    }
    function buttonClicked(){  
        setClicked(!clicked);
    }
    let btn_class = clicked? "itemCard-button clickedButton" : "itemCard-button"
    return (
        <div className="itemPreview col-lg-4 col-md-6 col-sm-6 col-xs-12 no-padding">
            <div className="itemCardWrapper">
                <div className="itemCard">
                    <img className="itemCard-img" src={require(`../assets/${props.item.img}`).default} alt=""></img>
                    <div className="itemCard-title">{props.item.titleChinese}</div>
                    <div className="itemCard-title">{props.item.titleEnglish}</div>
                    <div className="itemCard-detail">{props.item.detail}</div>
                    <div className="itemCard-rating">
                        {[...Array(props.item.rating)].map((e, i) => {
                            return <StarIcon className="itemCard-rating-filled" key={i} />
                        })}
                        {
                            [...Array(5 - props.item.rating)].map((e, i) => {
                                return <StarBorderIcon key={i} />
                            })
                        }
                        <div className="itemCard-rating-number">{`(${props.item.rating})`}</div>
                    </div>
                    <div className="itemCard-price">{props.item.price}建議零售價</div>
                    <div className="itemCard-checkboxRow">
                        <input className="itemCard-checkbox" type="checkbox" onChange={checkboxChecked} />{!checked ? "比較" : "產品比較"}
                    </div>
                </div>
            </div>

            <div className="mobile-itemCardWrapper">
                <img className="itemCard-img col-5 no-padding" src={require(`../assets/${props.item.img}`).default} alt=""></img>
                <div className="itemCard col-7 no-padding">
                    <div className="itemCard-title">{props.item.titleChinese}</div>
                    <div className="itemCard-title">{props.item.titleEnglish}</div>
                    <div className="itemCard-detail">{props.item.detail}</div>
                    <div className="itemCard-rating">
                        {[...Array(props.item.rating)].map((e, i) => {
                            return <StarIcon className="itemCard-rating-filled" key={i} />
                        })}
                        {
                            [...Array(5 - props.item.rating)].map((e, i) => {
                                return <StarBorderIcon key={i} />
                            })
                        }
                        <div className="itemCard-rating-number">{`(${props.item.rating})`}</div>
                    </div>
                    <div className="itemCard-price">{props.item.price}建議零售價</div>
                        <Button className={btn_class} onClick={buttonClicked}>產品比較</Button>                    
                </div>

            </div>
        </div>

    )
}

export default ItemPreview
