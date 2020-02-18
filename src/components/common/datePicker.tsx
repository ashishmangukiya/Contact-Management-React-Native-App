import React from 'react'
import DatePickerComponent from 'react-native-datepicker'

type props = {
    date: string,
    changedDate: Function
}
const DatePicker = (props: props) => {
    return (
        <DatePickerComponent
            style={{
                width: '100%',
                backgroundColor: '#F0F0F0',
                justifyContent: 'center',
                borderRadius: 15,
                padding: 5
            }}
            maxDate={new Date()}
            date={props.date}
            placeholder="Select Birth Date"
            format="MM-DD-YYYY"
            customStyles={{
                dateInput: { borderWidth: 0, paddingLeft: 15, flex: 1, alignItems: 'flex-start' },
                placeholderText: {
                    color: '#a9a9a9'
                }
            }}
            showIcon={false}
            onDateChange={(date: string) => props.changedDate(date)}
        />
    )
}

export default DatePicker