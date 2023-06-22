import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const Chart = ({ pokemon }) => {

    console.log(pokemon);
    const data = [
        {
            subject: 'HP',
            A: pokemon?.stats[0].base_stat,
        },
        {
            subject: 'Attack',
            A: pokemon?.stats[1].base_stat,
        },
        {
            subject: 'Defense',
            A: pokemon?.stats[2].base_stat,

        },
        {
            subject: 'S-AT',
            A: pokemon?.stats[3].base_stat,

        },
        {
            subject: 'S-DF',
            A: pokemon?.stats[4].base_stat,

        },
        {
            subject: 'Speed',
            A: pokemon?.stats[5].base_stat,

        },
    ];

    const renderCustomTick = (props) => {
        const { payload } = props;
        const { value } = payload;

        return (
            <text x={props.x} y={props.y} dy={8} fill="#ffffff" fontSize={12} textAnchor="middle">
                {value}
            </text>
        );
    };

    return (
        <ResponsiveContainer width="90%" height="90%" >
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" tick={renderCustomTick} />
                <PolarRadiusAxis domain={[0, 150]} /> {/* Establecer el rango de 0 a 150 */}
                <Radar name="Mike" dataKey="A" stroke="#8efa87" fill="#8874d8" fillOpacity={0.5} />
            </RadarChart>
        </ResponsiveContainer>
    );
};

export default Chart;