
import { useDispatch, useSelector } from 'react-redux';

export const Size = () => {
   const {size} = useSelector(filterState=>filterState.filter)
    const filterDispatch = useDispatch();

    const handleSizeChange = (e, option) => {
        const check = e.target.checked
        filterDispatch({
            type: "SIZE",
            payload: {option, check}
        })
    }

    return (
        <div className="category">
            <div className="category-title">Size</div>
            <div className="category-size category-select d-flex direction-column gap-10px">
                <label className="d-flex align-center gap-10px">
                    <input className="input" type="checkbox" onChange={(e) => handleSizeChange(e, "S")} checked={size.includes("S")}/>
                    <span>S</span>
                </label>
                <label className="d-flex align-center gap-10px">
                    <input className="input" type="checkbox" onChange={(e) => handleSizeChange(e, "M")} checked={size.includes("M")}/>
                    <span>M</span>
                </label>
                <label className="d-flex align-center gap-10px">
                    <input className="input" type="checkbox" onChange={(e) => handleSizeChange(e, "L")} checked={size.includes("L")}/>
                    <span>L</span>
                </label>
                <label className="d-flex align-center gap-10px">
                    <input className="input" type="checkbox" onChange={(e) => handleSizeChange(e, "XL")} checked={size.includes("XL")}/>
                    <span>XL</span>
                </label>
            </div>
        </div>
    )
}
