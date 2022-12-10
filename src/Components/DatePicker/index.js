import React from "react";
import { DatepickerWrapper, Day, DayName, DayNameWrapper, DayPicker, DayWrapper, Month, MonthPicker } from "./styles";
var dates  = new Date();
var current = dates.getMonth();

let month = [
    {
     label:"January",
     value: 1,
    },
    {
     label:"February",
     value: 2,
    },
    {
     label:"March",
     value:3,
    },
    {
     label:"April",
     value: 4,
    },
    {
     label:"May",
     value: 5,
    },
    {
     label:"June",
     value: 6,
    },
    {
     label:"July",
     value: 7,
    },
    {
     label:"August",
     value: 8,
    },
    {
     label:"September",
     value: 9,
    },
    {
     label:"October",
     value: 10,
    },
    {
     label:"November",
     value:11,
    },
    {
     label:"December",
     value:12,
      
    }
 ];
const dayNames = [
    {
        id:1,
        name:'M'
    },
    {
        id:2,
        name:'T'
    },
    {
        id:3,
        name:'W'
    },
    {
        id:4,
        name:'T'
    },
    {
        id:5,
        name:'F'
    },
    {
        id:6,
        name:'S'
    },
    {
        id:7,
        name:'S'
    },
]

const days = []
 
 for (let index = 0; index < 31; index++) {
    let prev  = 1
    let data = prev += index
    days.push(data )
 }

const DatePicker = () => (
    <DatepickerWrapper>
        <MonthPicker>
            {month.map((item)=>(
                <Month key={item.value}>{item.label}</Month>
            ))}
        </MonthPicker>
        <DayPicker>
           <DayNameWrapper>
            {dayNames.map((item)=>(
                    <DayName key={item.id}>{item.name}</DayName>
                ))}
           </DayNameWrapper>
           <DayWrapper>
           {days.map((item ,index)=>(
                    <Day key={index + 1}>{item}</Day>
                ))}
           </DayWrapper>
        </DayPicker>

    </DatepickerWrapper>

   
);
export default DatePicker;
