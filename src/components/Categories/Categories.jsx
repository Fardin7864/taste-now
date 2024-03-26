import CategorieTab from './CategorieTab';
import './Categories.css'


const Categories = () => {
    return (
        <div className=' category'>
            <h2 className='category-title'>Our Popular <span style={{color: '#f72d57'}}>Categories</span></h2>
            <div>
                <CategorieTab/>
            </div>
        </div>
    );
};

export default Categories;