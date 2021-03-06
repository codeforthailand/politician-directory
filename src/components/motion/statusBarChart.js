import React from "react"
import { css } from "@emotion/react"
import { scaleLinear } from "d3-scale"
import { displayTexts } from "../motionStatusChip"

function extent(arr) {
  return [Math.min(...arr), Math.max(...arr)]
}

const StatusBarChart = ({ data, width }) => {
  const Y = scaleLinear()
    .domain([0, extent(data.map(d => d.count))[1]])
    .range([0, 100])

  const total = data.reduce((prev, cur) => (prev += cur.count), 0)
  return (
    <div
      css={css`
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
      `}
    >
      <div
        css={css`
          font-size: 25px;
          font-family: var(--ff-title);
          margin-right: 30px;
        `}
      >
        {total}
      </div>
      <div
        className="statusbar-container"
        css={css`
          width: ${width};
          height: 100px;
          background-color: white;

          display: flex;
          flex-flow: column nowrap;

          & > div {
            display: flex;
            justify-content: space-evenly;
            align-items: flex-end;
          }

          & .statusbar {
            &--bars {
              flex: 1;
            }
            &--bararea {
              flex: 0 0 ${100 / data.length}%;
            }
            &--bar {
              width: 33%;
              margin: 0 auto;
              height: 100%;
              border-radius: 3px;
            }
            &--label {
              flex: 0 0 ${100 / data.length}%;
              text-align: center;
              align-self: flex-start;
              font-size: 10px;
            }
          }
        `}
      >
        <div className="statusbar--bars">
          {data.map(d => (
            <div
              key={d.status}
              className="statusbar--bararea"
              style={{
                height: Y(d.count) + "%",
              }}
            >
              <div
                className="statusbar--bar"
                style={{
                  backgroundColor: d.color || "steelblue",
                }}
                css={css`
                  position: relative;

                  &:hover .tooltiptext {
                    visibility: visible;
                  }
                `}
              >
                <div
                  className="tooltiptext"
                  css={css`
                    visibility: hidden;

                    position: absolute;
                    top: -20px;
                    text-align: center;

                    width: 100%;
                    min-width: 25px;
                    height: 20px;
                  `}
                >
                  {d.count}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="statusbar--labels">
          {data.map(d => {
            return (
              <div key={d.status} className="statusbar--label">
                {displayTexts[d.status]}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default StatusBarChart
