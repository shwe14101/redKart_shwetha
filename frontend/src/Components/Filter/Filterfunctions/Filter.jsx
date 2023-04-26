import { Size } from "./Size";
import { Brand } from "./Brand";
import { Category } from "./Category";
import { Sort } from "./Sort";
import { useDispatch } from "react-redux";
import '../utils/index'
import "./Filter.css";
import '../../Home/filt.css'


export const Filter = () => {
 const filterDispatch = useDispatch();

    const handleClearClick = () => {
        filterDispatch({
            type: "CLEAR"
        })
    }

    return (
    <div className="box">
        <aside className="filter-container">
            
            <div className="filter-container-title d-flex gap align-center wrap">
                <span>Filters</span><br/>
                
            </div>
            <div className="filters d-flex direction-column gap-10px">
                <br/><Sort /><br/>
                <Size /><br/>
                <Brand /><br/>
                <Category /><br/>
            </div>
            <div className="filter-container-title d-flex gap align-center wrap">
                
                <button className="button btn-link-primary cursor clear" onClick={handleClearClick}>Clear</button>
            </div>
        </aside>
        </div>
    )
}
