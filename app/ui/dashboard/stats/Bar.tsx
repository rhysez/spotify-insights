'use client';

import { ResponsiveBar } from '@nivo/bar'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const Bar = ({ data }: any) => (
    <div className="w-full h-96">
      <ResponsiveBar
        data={data}
        keys={[
            'followers'
        ]}
        indexBy="artist"
        margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'accent' }}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: 'color',
          modifiers: [
              [
                  'brighter',
                  2
              ]
          ]
      }}
        role="application"
        ariaLabel="Most popular artists chart"
        theme={{
          tooltip: {
            wrapper: {},
            container: {
              backgroundColor: "#1DB954",
              color: '#FFFFFF',
              fontSize: 16,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
            
          },
          "axis": {
        "ticks": {
            "text": {
                "fontSize": 12,
                "fill": "#FFFFFF",
                "outlineWidth": 0,
                "outlineColor": "transparent"
            }
        }
    },
        }}
    />
    </div>
)

export default Bar;