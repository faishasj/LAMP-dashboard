import React from "react"
import { scaleOrdinal } from "@vx/scale"

import { RadialChart, ArcSeries, ArcLabel } from "@data-ui/radial-chart"

const colorScale = scaleOrdinal({ range: ["#CFE3FF", "#7DB2FF", "#5784EE", "#3C5DDD"] })

export default function RadialDonutChart(props) {
  const data = props.data[0]
  return (
    <RadialChart
      ariaLabel="This is a radial-chart chart of..."
      width={150}
      height={150}
      margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
      renderTooltip={({ event, datum, data, fraction }) => (
        <div>
          <strong>{datum.label}</strong>
          {datum.value} ({(fraction * 100).toFixed(2)}%)
        </div>
      )}
    >
      <ArcSeries
        data={data}
        pieValue={(d) => d.value}
        fill={(arc) => colorScale(arc.data.label)}
        padAngle={0.03}
        cornerRadius={5}
        stroke="#fff"
        strokeWidth={1}
        labelComponent={<ArcLabel />}
        innerRadius={(radius) => 0.35 * radius}
        outerRadius={(radius) => 0.6 * radius}
        labelRadius={(radius) => 0.75 * radius}
      />
    </RadialChart>
  )
}