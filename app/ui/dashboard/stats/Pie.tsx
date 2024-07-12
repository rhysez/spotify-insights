'use client';
import { ResponsivePie } from '@nivo/pie';

export default function Pie({ data }: any) {
  return (
    <div className="md:h-[30rem] md:w-[30rem] w-[24rem] h-[24rem]">
      <ResponsivePie
        data={data}
        margin={{ top: 0, right: 120, bottom: 0, left: 120 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#FFFFFF"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: 'color',
          modifiers: [['darker', 2]],
        }}
        colors={{ scheme: 'greens' }}
        borderColor="#000000"
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
        }}
      />
    </div>
  );
}
