import React from 'react'
import styled from 'styled-components'
import {useFilterContext} from '../context/filter_context'
import {getUniqueValues, formatPrice, capitalizeFirstLetter} from '../utils/helpers'
import {FaCheck} from 'react-icons/fa'

const Filters = () => {
    const {
        updateFilters,
        clearFilters,
        all_products,
        filters: {
            text,
            category,
            company,
            color,
            min_price,
            max_price,
            price,
            shipping
        }
    } = useFilterContext();

    const categories = getUniqueValues(all_products, 'category');
    const companies = getUniqueValues(all_products, 'company');
    const allColors = getUniqueValues(all_products, 'colors');

    return (
        <Wrapper>
            <div className='content'>
                <form onSubmit={(e) => e.preventDefault()}>
                    {/* search input */}
                    <div className='form-control'>
                        <input
                            type='text'
                            name='text'
                            placeholder='Search'
                            className='search-input'
                            value={text}
                            onChange={updateFilters}/>
                    </div>
                    {/* end of search input */}
                    {/* categories */}
                    <div className='form-control'>
                        <h5>category</h5>
                        <div>
                            {categories.map((mapCategory, index) => {
                                return (
                                    <button
                                        type='button'
                                        key={index}
                                        onClick={updateFilters}
                                        name='category'
                                        className={category === mapCategory.toLowerCase()
                                        ? 'active'
                                        : null}>{mapCategory}</button>
                                )
                            })}
                        </div>
                    </div>
                    {/* end of categories */}
                    {/* companies */}
                    <div className='form-control'>
                        <h5>company</h5>
                        <select
                            name='company'
                            id='company'
                            value={company}
                            onChange={updateFilters}
                            className='company'>
                            {companies.map((mapCompany, index) => {
                                return <option value={mapCompany} key={index}>{capitalizeFirstLetter(mapCompany)}</option>
                            })}
                        </select>
                    </div>
                    {/* end of companies */}
                    {/* colors */}
                    <div className='form-control'>
                        <h5>colors</h5>
                        <div className='colors'>
                            {allColors.map((mapColor, index) => {
                                if (mapColor === 'all') {
                                    return (
                                        <button
                                            name='color'
                                            className={color === 'all'
                                            ? 'all-btn active'
                                            : 'all-btn'}
                                            key={index}
                                            data-color='all'
                                            onClick={updateFilters}>
                                            {'all'}
                                        </button>
                                    )
                                }
                                return (
                                    <button
                                        name='color'
                                        className={color === mapColor
                                        ? 'color-btn active'
                                        : 'color-btn'}
                                        key={index}
                                        style={{
                                        backgroundColor: mapColor
                                    }}
                                        data-color={mapColor}
                                        onClick={updateFilters}>
                                        {color === mapColor && <FaCheck/>}
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                    {/* end of colors */}
                    {/* price */}
                    <div className='form-control'>
                        <h5>price</h5>
                    </div>
                    <p className='price'>
                        {formatPrice(price)}
                    </p>
                    <input
                        type='range'
                        name='price'
                        onChange={updateFilters}
                        min={min_price}
                        max={max_price}
                        value={price}/> {/* end of price */}
                    {/* shipping */}
                    <div className='form-control shipping'>
                        <label htmlFor="shipping">Free shipping</label>
                        <input
                            type='checkbox'
                            name='shipping'
                            id='shipping'
                            onChange={updateFilters}
                            checked={shipping}/>
                    </div>
                    {/* end of shipping */}
                </form>
                <button type='button' className='clear-btn' onClick={clearFilters}>Clear Filters</button>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section `
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
    max-width: 200px;
    margin-top: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`

export default Filters
