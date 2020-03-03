
// Core Imports 
import React from 'react'
import { Paper, useTheme, useMediaQuery } from '@material-ui/core'

// 
export const ResponsiveMargin = React.forwardRef((props, ref) => {
    let sm = useMediaQuery(useTheme().breakpoints.down('sm'))
    return <div {...props} style={{ ...props.style, width: sm ? '98%' : props.style.width }} ref={ref} />
})

export const ResponsivePaper = React.forwardRef((props, ref) => {
    let sm = useMediaQuery(useTheme().breakpoints.down('sm'))
    return <Paper {...props} elevation={sm ? 0 : props.elevation} ref={ref} />
})

// Stubbed code for .flat() which is an ES7 function...
// eslint-disable-next-line
Object.defineProperty(Array.prototype, 'flat', {
	value: function(depth = 1) {
		return this.reduce(function (flat, toFlatten) {
			return flat.concat((Array.isArray(toFlatten) && (depth-1)) ? toFlatten.flat(depth-1) : toFlatten);
		}, []);
	}
})

// Stubbed code for .groupBy()
// eslint-disable-next-line
Object.defineProperty(Array.prototype, 'groupBy', {
    value: function(key) {
        return this.reduce((result, item) => ({ 
            ...result, 
            [item[key]]: [...(result[item[key]] || []), item]
        }), {});
    }
})

// Produces an array of integers from 0 until the specified max number.
// eslint-disable-next-line
Object.defineProperty(Array, 'rangeTo', {
    value: function(max) {
        return [...Array(max).keys()]
    }
})

// Easier Date-string formatting using Date.formatUTC
// eslint-disable-next-line
Object.defineProperty(Date, 'formatUTC', {
	value: function(timestampUTC, formatObj) {
		return (new Date(timestampUTC).toLocaleString('en-US', Date.formatStyle(formatObj)))
	}
})

// Easier Date-string formatting using Date.formatUTC
// eslint-disable-next-line
Object.defineProperty(Date, 'formatStyle', {
    value: function(formatObj = {}) {
        if (formatObj === 'short')
            formatObj = { year: '2-digit', month: '2-digit', day: '2-digit' }
        else if (formatObj === 'timeOnly')
            formatObj = { hour: 'numeric', minute: 'numeric', hour12: true }
        else if (formatObj === 'dateOnly')
            formatObj = { year: 'numeric', month: 'long', day: 'numeric' }
        else if (formatObj === 'hourOnly')
            formatObj = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric' }
        else if (formatObj === 'medium')
            formatObj = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' }
        else if (formatObj === 'full')
            formatObj = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' }
        formatObj.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
        return formatObj
    }
})

export const mindLAMPLogo = `
data:image/png;base64,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
CC
`