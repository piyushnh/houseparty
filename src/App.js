import React, { Component } from 'react';
import './App.css';

import ImageSlider from './utilComponents/ImageSlider'
import { ReactiveBase, ReactiveList, MultiDropdownList, DataSearch, NumberBox, DateRange, RangeSlider, ResultCard } from '@appbaseio/reactivesearch';



class App extends Component {
    render() {
        return (
    <div className="container">

          <ReactiveBase
            app="houses"
            credentials="WK4zoCEY3:ae288202-3eb7-4606-8265-e5101925e5d3"
            url="https://houseparty-bengaluru-scvpwhu-arc.searchbase.io"
        
      >
         <nav className="nav">
                <div className="title">HousePartay!</div>
                <DataSearch
                    componentId="SearchSensor"
                    dataField="name"
                    autosuggest={true}
                    placeholder="Search by house names"
                    iconPosition="left"
                    className="search"
                    highlight={true}
                />
            </nav>
            <div className="left-col">
                {/* <DateRange
                    dataField="date_from"
                    componentId="DateRangeSensor"
                    title="When"
                    numberOfMonths={2}
                    queryFormat="basic_date"
                    initialMonth={new Date('04-01-2017')}
                /> */}
                  <MultiDropdownList
                  componentId="AreaSensor"
                  dataField="location.keyword"
                  title="Select Area"
                  defaultValue={['kormangala']}
                  />
             
                <NumberBox
                    componentId="GuestSensor"
                    dataField="accomodates"
                    title="Guests"
                    defaultValue={4}
                    labelPosition="right"
                    queryFormat="gte"
                    data={{
                        start: 1,
                        end: 20,
                    }}
                />

                <RangeSlider
                    componentId="PriceSensor"
                    dataField="price"
                    title="Price Range"
                    range={{
                        start: 500,
                        end: 6000,
                    }}
                    rangeLabels={{
                        start: '500',
                        end: '6000',
                    }}
                    defaultSelected={{
                        start: 500,
                        end: 6000,
                    }}
                    stepValue={500}
                   
                />
            </div>
            <ReactiveList
                    className="right-col"
                    componentId="result"
                    title="Results"
                    dataField="name"
                    react={{
                        and: ['SearchSensor','AreaSensor', 'GuestSensor', 'PriceSensor'],
                    }}
                        style={{
                            width: '60%',
                            textAlign: 'center',
                        }}
                        render={({ data }) => (
                            <ReactiveList.ResultCardsWrapper className="list">
                                {data.map(item => (
                                    <ResultCard className="list-item" key={item._id}>
                                        <ResultCard.Image className="image">
                                            <ImageSlider images={item.images}/>
                                        </ResultCard.Image> 
                                        <ResultCard.Title
                                            dangerouslySetInnerHTML={{
                                                __html: item.name,
                                            }}
                                        />
                                        <ResultCard.Description>
                                            {item.accomodates + ' ' + 'guests'}
                                        </ResultCard.Description>
                                        <ResultCard.Description>
                                            {item.price + ' INR ' + 'per head'}
                                        </ResultCard.Description>
                                                
                                    </ResultCard>
                                ))}
                            </ReactiveList.ResultCardsWrapper>
                        )}
                    />
            </ReactiveBase>
     
    </div>
       
        );
    }
}

export default App;